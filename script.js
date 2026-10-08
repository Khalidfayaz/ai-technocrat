/* =========================================================
   APP LOGIC
   ========================================================= */
const $  = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => [...p.querySelectorAll(s)];

/* ---------- THEME ---------- */
const html = document.documentElement;
const themeBtn = $('#themeBtn');
function setTheme(t){
  html.setAttribute('data-theme', t);
  themeBtn.textContent = t === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('ai-theme', t);
}
setTheme(localStorage.getItem('ai-theme') || 'dark');
themeBtn.addEventListener('click', () => {
  setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

/* ---------- VIEW SWITCHING ---------- */
function switchView(name){
  $$('.view').forEach(v => v.classList.remove('active'));
  $('#view-' + name).classList.add('active');
  $$('#tabs button').forEach(b => b.classList.toggle('active', b.dataset.view === name));
  window.scrollTo({top:0, behavior:'smooth'});
}
$$('#tabs button').forEach(b => b.addEventListener('click', () => switchView(b.dataset.view)));
$$('[data-goto]').forEach(b => b.addEventListener('click', () => switchView(b.dataset.goto)));

/* ---------- HOME : MODULE GRID ---------- */
$('#statQ').textContent = QUESTIONS.length;

function renderModuleGrid(){
  $('#moduleGrid').innerHTML = MODULES.map(m => `
    <article class="mcard" data-module="${m.id}">
      <div class="mcard-top">
        <div class="mcard-ico">${m.icon}</div>
        <div>
          <div class="num">Module ${m.id}</div>
          <h4>${m.title}</h4>
        </div>
      </div>
      <p>${m.desc}</p>
      <div class="mcard-foot">
        <span class="hrs-chip">⏱ ${m.hours} Hours · ${m.topics.length} Topics</span>
        <span class="arrow">→</span>
      </div>
    </article>
  `).join('');
  $$('.mcard').forEach(c => c.addEventListener('click', () => {
    switchView('syllabus');
    selectModule(+c.dataset.module);
  }));
}
renderModuleGrid();

/* ---------- SYLLABUS ---------- */
let currentModule = 1;

function renderSidebar(){
  $('#sideList').innerHTML = MODULES.map(m => `
    <div class="side-item ${m.id === currentModule ? 'active' : ''}" data-module="${m.id}">
      <span class="si-ico">${m.icon}</span>
      <span class="si-txt"><b>${m.title}</b><small>Module ${m.id}</small></span>
      <span class="si-h">${m.hours}h</span>
    </div>
  `).join('');
  $$('.side-item').forEach(el => el.addEventListener('click', () => selectModule(+el.dataset.module)));
}

function renderModuleContent(id){
  const m = MODULES.find(x => x.id === id);
  if(!m) return;
  const totalTopics = m.topics.length;
  $('#contentPanel').innerHTML = `
    <div class="cp-head">
      <div class="big-ico">${m.icon}</div>
      <div>
        <h3>Module ${m.id} — ${m.title}</h3>
        <small>⏱ ${m.hours} Hours &nbsp;·&nbsp; 📌 ${totalTopics} Topics &nbsp;·&nbsp; ${m.desc}</small>
      </div>
      <div class="spacer"></div>
      <button class="btn btn-primary" data-quizmod="${m.id}">🎯 Quiz this module</button>
    </div>
    ${m.topics.map((t, i) => `
      <div class="topic">
        <div class="topic-head">
          <b>${i + 1}. ${t.t}</b>
          ${t.h ? `<span class="t-h">${t.h} hrs</span>` : `<span class="t-h">Project</span>`}
        </div>
        ${t.n && t.n.length ? `<ul>${t.n.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
      </div>
    `).join('')}
    <div class="notice" style="margin-top:22px">
      <span style="font-size:1.2rem">💡</span>
      <p><b>Trainer Tip:</b> Teach this module in a strictly practical / lab-oriented way. Trainees should spend maximum time writing code, cleaning datasets and building small projects — the target is a <b>job-ready AI technician</b>, not a theoretical researcher.</p>
    </div>
  `;
  const qb = $('[data-quizmod]', $('#contentPanel'));
  if(qb) qb.addEventListener('click', () => { switchView('quiz'); setupQuiz(+qb.dataset.quizmod); });
}

function selectModule(id){
  currentModule = id;
  renderSidebar();
  renderModuleContent(id);
  $('#searchInput').value = '';
}

/* ---------- SEARCH ---------- */
$('#searchInput').addEventListener('input', e => {
  const q = e.target.value.trim().toLowerCase();
  if(q.length < 2){ renderModuleContent(currentModule); return; }
  const results = [];
  MODULES.forEach(m => m.topics.forEach(t => {
    const hay = (t.t + ' ' + (t.n || []).join(' ')).toLowerCase();
    if(hay.includes(q)) results.push({ m, t });
  }));
  if(!results.length){
    $('#contentPanel').innerHTML = `<div class="empty"><div style="font-size:2.4rem;margin-bottom:10px">🔍</div><b>No topics found for "${e.target.value}"</b><p>Try another keyword like "python", "ethics", "NLP" or "data".</p></div>`;
    return;
  }
  $('#contentPanel').innerHTML = `
    <div class="cp-head">
      <div class="big-ico">🔍</div>
      <div><h3>Search Results</h3><small>${results.length} topic(s) matched your search</small></div>
    </div>
    ${results.map((r, i) => `
      <div class="res-item" data-open="${r.m.id}">
        <small>Module ${r.m.id} — ${r.m.title} ${r.t.h ? '· ' + r.t.h + ' hrs' : ''}</small>
        <b>${r.t.t}</b>
        ${r.t.n && r.t.n.length ? `<p>${r.t.n[0]}</p>` : ''}
      </div>
    `).join('')}
  `;
  $$('.res-item').forEach(el => el.addEventListener('click', () => {
    $('#searchInput').value = '';
    selectModule(+el.dataset.open);
  }));
});

/* =========================================================
   QUIZ ENGINE
   ========================================================= */
let quiz = { pool: [], idx: 0, answers: [], score: 0, locked: false, shuffle: true };

function setupQuiz(presetModule){
  const options = `<option value="0">📚 All Modules (Full Test)</option>` +
    MODULES.map(m => `<option value="${m.id}">${m.icon} Module ${m.id} — ${m.title} (${QUESTIONS.filter(q => q.m === m.id).length} Qs)</option>`).join('');
  $('#quizShell').innerHTML = `
    <div class="quiz-setup">
      <h3>🎯 Objective Question Practice</h3>
      <p>Test your knowledge with multiple-choice questions covering every module of the 600-hour AI syllabus. You get instant feedback with an explanation for each answer.</p>
      <div class="field">
        <label for="quizModule">Select Module</label>
        <select id="quizModule">${options}</select>
      </div>
      <div class="switch-row">
        <span>🔀 Shuffle questions &amp; options</span>
        <label class="switch"><input type="checkbox" id="shuffleChk" checked><span class="slider"></span></label>
      </div>
      <button class="btn btn-primary" id="startQuiz" style="width:100%;justify-content:center">🚀 Start Quiz</button>
      <p style="margin-top:18px;margin-bottom:0;font-size:.82rem">Total question bank: <b>${QUESTIONS.length} MCQs</b> across 12 modules.</p>
    </div>
  `;
  if(presetModule) $('#quizModule').value = String(presetModule);
  $('#startQuiz').addEventListener('click', () => {
    const mid = +$('#quizModule').value;
    quiz.shuffle = $('#shuffleChk').checked;
    startQuiz(mid);
  });
}

function shuffleArr(a){
  const arr = [...a];
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startQuiz(mid){
  let pool = mid === 0 ? QUESTIONS.map((q, i) => ({...q, _i:i})) : QUESTIONS.map((q, i) => ({...q, _i:i})).filter(q => q.m === mid);
  if(quiz.shuffle){
    pool = shuffleArr(pool).map(q => {
      const correctText = q.o[q.a];
      const opts = shuffleArr(q.o);
      return { ...q, o: opts, a: opts.indexOf(correctText) };
    });
  }
  if(!pool.length){ alert('No questions available for this module.'); return; }
  quiz.pool = pool;
  quiz.idx = 0;
  quiz.answers = new Array(pool.length).fill(null);
  quiz.score = 0;
  quiz.locked = false;
  renderQuestion();
}

function renderQuestion(){
  const q = quiz.pool[quiz.idx];
  const m = MODULES.find(x => x.id === q.m);
  const total = quiz.pool.length;
  const pct = (quiz.idx / total) * 100;
  const letters = ['A','B','C','D'];

  $('#quizShell').innerHTML = `
    <div class="quiz-bar">
      <span class="qinfo">Question ${quiz.idx + 1} / ${total}</span>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
      <span class="score-chip">✅ Score: ${quiz.score}</span>
      <button class="btn btn-ghost" id="quitQuiz" style="padding:8px 16px;font-size:.8rem">✖ Exit</button>
    </div>
    <div class="qcard">
      <span class="qtag">${m ? m.icon + ' Module ' + m.id : 'AI'} — ${m ? m.title : ''}</span>
      <h4>${q.q}</h4>
      <div class="options" id="options">
        ${q.o.map((op, i) => `
          <button class="opt" data-i="${i}">
            <span class="key">${letters[i]}</span>
            <span class="txt">${op}</span>
          </button>
        `).join('')}
      </div>
      <div class="explain" id="explain"></div>
      <div class="quiz-nav">
        <button class="btn btn-ghost" id="prevBtn" ${quiz.idx === 0 ? 'disabled' : ''}>← Previous</button>
        <button class="btn btn-primary" id="nextBtn">${quiz.idx === total - 1 ? '🏁 Finish Quiz' : 'Next →'}</button>
      </div>
    </div>
  `;

  $$('#options .opt').forEach(btn => btn.addEventListener('click', () => chooseOption(+btn.dataset.i)));
  $('#nextBtn').addEventListener('click', nextQuestion);
  $('#prevBtn').addEventListener('click', prevQuestion);
  $('#quitQuiz').addEventListener('click', () => setupQuiz());

  if(quiz.answers[quiz.idx] !== null) revealAnswer(quiz.answers[quiz.idx], true);
}

function chooseOption(i){
  if(quiz.locked) return;
  quiz.locked = true;
  quiz.answers[quiz.idx] = i;
  const q = quiz.pool[quiz.idx];
  if(i === q.a) quiz.score++;
  revealAnswer(i, false);
}

function revealAnswer(selected, silent){
  const q = quiz.pool[quiz.idx];
  $$('#options .opt').forEach(btn => {
    const i = +btn.dataset.i;
    btn.classList.add('locked');
    if(i === q.a) btn.classList.add('correct');
    else if(i === selected) btn.classList.add('wrong');
    else btn.classList.add('dim');
  });
  const ex = $('#explain');
  if(ex){
    ex.innerHTML = `<b>${selected === q.a ? '✅ Correct!' : '❌ Incorrect.'}</b> ${q.e}`;
    ex.classList.add('show');
  }
  quiz.locked = true;
  const sc = $('.score-chip');
  if(sc) sc.textContent = `✅ Score: ${quiz.score}`;
}

function nextQuestion(){
  if(quiz.idx === quiz.pool.length - 1){ showResult(); return; }
  quiz.idx++;
  quiz.locked = false;
  renderQuestion();
}
function prevQuestion(){
  if(quiz.idx === 0) return;
  quiz.idx--;
  quiz.locked = quiz.answers[quiz.idx] !== null;
  renderQuestion();
}

function showResult(){
  const total = quiz.pool.length;
  const pct = Math.round((quiz.score / total) * 100);
  let msg, emoji;
  if(pct >= 90){ msg = 'Outstanding! You have mastered this material.'; emoji = '🏆'; }
  else if(pct >= 75){ msg = 'Great job! A little revision and you are perfect.'; emoji = '🎉'; }
  else if(pct >= 50){ msg = 'Good effort! Revise the weak modules and try again.'; emoji = '👍'; }
  else { msg = 'Keep going! Read the module notes and retake the quiz.'; emoji = '📖'; }

  $('#quizShell').innerHTML = `
    <div class="result">
      <div class="ring" style="--p:${pct}">
        <span class="val">${pct}%</span>
      </div>
      <h3>${emoji} ${msg}</h3>
      <p>You scored <b>${quiz.score}</b> out of <b>${total}</b> questions correctly.</p>
      <div class="rbtns">
        <button class="btn btn-primary" id="retrySame">🔁 Retry Same Module</button>
        <button class="btn btn-ghost" id="newQuiz">🎯 New Quiz</button>
        <button class="btn btn-ghost" id="toSyllabus">📚 Back to Syllabus</button>
      </div>
    </div>
  `;
  $('#retrySame').addEventListener('click', () => {
    const mid = quiz.pool[0].m;
    const allSame = quiz.pool.every(q => q.m === mid);
    startQuiz(allSame ? mid : 0);
  });
  $('#newQuiz').addEventListener('click', () => setupQuiz());
  $('#toSyllabus').addEventListener('click', () => switchView('syllabus'));
}

/* ---------- INIT ---------- */
renderSidebar();
renderModuleContent(1);
setupQuiz();
$('#footYear').textContent = new Date().getFullYear();