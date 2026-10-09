/* Expanded study notes and 30-question module practice banks.
   Loaded after data.js and before script.js. */
(function () {
  const noteExtras = [
    (m,t)=>`Purpose and core idea: ${t.t} is an important part of ${m.title}. Learn the meaning of the concept first, then connect it to the task it solves in a real workplace.`,
    (m,t)=>`How to apply it: identify the problem, gather the required information or tools, follow the correct sequence, check the result, and document any errors or lessons learned. Do not skip testing or verification.`,
    (m,t)=>`Practical example: in a small training exercise related to ${t.t.toLowerCase()}, use a simple, clearly defined problem. Record the input, the steps performed, the output, and whether the result meets the expected requirement.`,
    (m,t)=>`Good practice and common mistakes: keep work organised, use reliable inputs, protect private information, explain assumptions, and test more than one example. Avoid copying results without understanding them; investigate unexpected output before accepting it.`,
    (m,t)=>`Exam revision: be able to define ${t.t.toLowerCase()}, explain why it is useful, list its main steps or components, give one practical example, and mention one limitation or safety consideration. Compare it with related topics when asked.`
  ];
  MODULES.forEach(m => m.topics.forEach(t => {
    t.n = t.n || [];
    noteExtras.forEach(fn => {
      const line = fn(m,t);
      if (!t.n.includes(line)) t.n.push(line);
    });
  }));

  const allQuestions = QUESTIONS;
  const countFor = id => allQuestions.filter(q => q.m === id).length;
  const addQ = (m, q, options, answer, explanation) => {
    allQuestions.push({m:m.id,q,o:options,a:answer,e:explanation});
  };
  const templates = [
    (m,t,others)=>({q:`Which topic in Module ${m.id} directly focuses on “${t.t}”?`,o:[t.t,others[(m.id+1)%others.length].t,others[(m.id+2)%others.length].t,others[(m.id+3)%others.length].t],a:0,e:`The correct topic is “${t.t}”. Review this section for its definition, workflow, uses and practical example.`}),
    (m,t)=>({q:`When studying ${t.t.toLowerCase()}, what is the best general working approach?`,o:[`Understand the goal, follow the correct steps, and verify the result`,`Skip preparation and testing`,`Accept every result without checking`,`Use unrelated tools regardless of the task`],a:0,e:`A reliable workflow starts with understanding the goal, using suitable steps and checking the output. Apply the specific workflow described in the notes for ${t.t.toLowerCase()}.`}),
    (m,t)=>({q:`Which revision point is most useful for the topic “${t.t}”?`,o:[`Know its definition, purpose, steps and a real example`,`Memorise the title only`,`Ignore limitations and safety`,`Study only unrelated topics`],a:0,e:`For “${t.t}”, prepare the definition, purpose, main steps or components, practical example, and at least one limitation or good practice.`}),
    (m,t)=>({q:`A trainee is completing a practical task about ${t.t.toLowerCase()}. What should they do before accepting the final result?`,o:[`Check the result against the task requirements`,`Assume the first result is always correct`,`Delete the inputs immediately`,`Avoid recording the process`],a:0,e:`Practical work should be checked against the requirements. Record important steps and correct errors before treating the result as complete.`}),
    (m,t)=>({q:`Which is a good way to explain “${t.t}” in an exam answer?`,o:[`Give a clear definition and explain it with a relevant example`,`Write only an unexplained abbreviation`,`Include unrelated facts only`,`Avoid describing its use`],a:0,e:`A strong short answer defines the concept, explains its use and gives a relevant example from the topic.`})
  ];
  MODULES.forEach(m => {
    let existing = countFor(m.id);
    let k = 0;
    while (existing < 30) {
      const t = m.topics[k % m.topics.length];
      const others = m.topics.filter(x => x.t !== t.t);
      const item = templates[k % templates.length](m,t,others);
      // Keep every generated question unique within the module.
      item.q += ` (Practice ${existing + 1})`;
      addQ(m,item.q,item.o,item.a,item.e);
      existing++; k++;
    }
  });
})();
