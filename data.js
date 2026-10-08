/* =========================================================
   MODULE DATA — 600 Hour AI Syllabus
   ========================================================= */
const MODULES = [
{
  id:1, icon:"🤖", title:"Fundamentals of AI & Responsible AI", hours:60,
  desc:"What AI is, how it evolved, where it is used, plus ethics, privacy and data basics.",
  topics:[
    {t:"Introduction to Artificial Intelligence", h:6, n:[
      "AI = making machines think, learn and take decisions like humans.",
      "It is a branch of Computer Science that builds intelligent systems.",
      "Examples: ChatGPT, Google Translate, Voice Assistants, spam filters."
    ]},
    {t:"History and evolution of AI", h:4, n:[
      "1950 – Alan Turing proposed the Turing Test.",
      "1956 – Dartmouth Conference; John McCarthy coined the term 'AI'.",
      "AI winters → 2010s deep-learning boom → today's Generative AI."
    ]},
    {t:"AI terminology and concepts", h:5, n:[
      "AI, Machine Learning, Deep Learning, NLP, Computer Vision.",
      "Dataset, Model, Training, Testing, Inference, Algorithm.",
      "AI is the big umbrella; ML and DL are subsets of it."
    ]},
    {t:"Applications of AI in different sectors", h:6, n:[
      "Healthcare, agriculture, education, banking, transport, manufacturing, retail, security.",
      "Examples: disease detection, crop monitoring, fraud detection, chatbots, self-driving cars."
    ]},
    {t:"Machine Learning fundamentals", h:8, n:[
      "ML learns patterns from data instead of fixed manual rules.",
      "Main types: Supervised, Unsupervised, Reinforcement learning.",
      "Data is split into training and testing sets."
    ]},
    {t:"Neural-network fundamentals", h:5, n:[
      "Inspired by the human brain — built from artificial neurons.",
      "Structure: Input layer → Hidden layers → Output layer.",
      "Weights and activation functions decide the output."
    ]},
    {t:"Introduction to NLP", h:5, n:[
      "NLP = Natural Language Processing — AI that understands LANGUAGE.",
      "Used in: ChatGPT, Google Translate, Voice Assistants, Gmail spam filter.",
      "Key terms: Tokenization, Sentiment Analysis, Speech Recognition, Translation, Text Generation."
    ]},
    {t:"Introduction to Computer Vision", h:5, n:[
      "Computer Vision = AI that understands IMAGES & VIDEOS.",
      "Used in: Face Unlock, self-driving cars, medical imaging, security cameras, OCR.",
      "Key terms: Image Classification, Object Detection, Face Recognition, OCR."
    ]},
    {t:"AI ethics and responsible AI", h:5, n:[
      "Using AI in a fair, safe and responsible way.",
      "Principles: Fairness, Transparency, Accountability, Privacy, Safety, Human Oversight.",
      "Golden Rule: 'AI is a tool. Humans are responsible for how it is used.'"
    ]},
    {t:"Data privacy and security", h:3, n:[
      "Privacy = proper use and control of personal data.",
      "Security = protection of data from theft, loss or unauthorized access.",
      "Rules: strong passwords, 2-factor authentication, never share OTP, regular backups."
    ]},
    {t:"Data collection and preparation", h:4, n:[
      "Collect → Clean → Remove errors → Organize → Label → Prepare → Use for AI.",
      "GIGO — Garbage In, Garbage Out: poor data gives poor AI results.",
      "Good-quality data always gives better AI results."
    ]},
    {t:"Basic statistics for AI", h:4, n:[
      "Mean, median, mode — understanding the centre of data.",
      "Spread and variation of data values.",
      "Why statistics matter before training any model."
    ]}
  ]
},
{
  id:2, icon:"🐍", title:"Python Programming", hours:90,
  desc:"From installing Python to OOP and file handling — the core coding skill for AI.",
  topics:[
    {t:"Python installation & development environment", h:4, n:[
      "Install Python from python.org; check with 'python --version'.",
      "Editors/IDEs: VS Code, PyCharm, IDLE, Jupyter Notebook.",
      "pip is used to install extra packages."
    ]},
    {t:"Python syntax and programming fundamentals", h:8, n:[
      "Indentation defines code blocks (no curly braces).",
      "print() for output, input() for user input, # for comments.",
      "Python is case-sensitive and interpreted line by line."
    ]},
    {t:"Variables, data types and operators", h:8, n:[
      "Data types: int, float, str, bool.",
      "Arithmetic: + - * / // % **  |  Comparison: == != > <  |  Logical: and, or, not.",
      "Variables store values in memory with a name."
    ]},
    {t:"Conditional statements", h:6, n:[
      "if, elif, else — decision making in code.",
      "Conditions return True or False.",
      "Nested if for multiple levels of decisions."
    ]},
    {t:"Loops", h:8, n:[
      "for loop — repeats over a sequence; while loop — repeats while condition is True.",
      "range() generates number sequences.",
      "break stops the loop, continue skips one iteration."
    ]},
    {t:"Strings", h:5, n:[
      "Text inside single or double quotes.",
      "Indexing, slicing, len(), upper(), lower(), split(), replace().",
      "f-strings for easy formatting: f\"Hello {name}\"."
    ]},
    {t:"Lists, tuples, sets and dictionaries", h:10, n:[
      "List [ ] — ordered, changeable (mutable).",
      "Tuple ( ) — ordered, unchangeable (immutable).",
      "Set { } — unordered, no duplicates.  Dictionary {key: value} — key-value pairs."
    ]},
    {t:"Functions", h:8, n:[
      "def function_name(): defines reusable code.",
      "Parameters pass data in; return sends a result back.",
      "Default arguments and variable scope (local vs global)."
    ]},
    {t:"Modules and packages", h:5, n:[
      "import math, import random, from datetime import date.",
      "Modules = .py files of reusable code; packages = folders of modules.",
      "Install third-party packages using pip."
    ]},
    {t:"File handling", h:5, n:[
      "open(), read(), write(), close().",
      "Modes: 'r' read, 'w' write, 'a' append.",
      "Best practice: with open('file.txt') as f:"
    ]},
    {t:"Exception handling", h:4, n:[
      "try / except / finally blocks stop the program from crashing.",
      "Catches runtime errors like division by zero or missing files.",
      "Makes programs robust and user-friendly."
    ]},
    {t:"Object-oriented programming basics", h:7, n:[
      "class is a blueprint; object is an instance of it.",
      "Attributes = data; Methods = functions inside a class.",
      "__init__() is the constructor. Inheritance lets one class reuse another."
    ]},
    {t:"Practical Python exercises", h:12, n:[
      "Hands-on coding practice — the biggest scoring part of this module.",
      "Mini programs: calculator, marks sheet, pattern printing, file-based records.",
      "Goal: confidence to write Python without help."
    ]}
  ]
},
{
  id:3, icon:"📊", title:"Data Science & Data Visualisation", hours:60,
  desc:"Collecting, cleaning, analysing and visualising real datasets with NumPy, Pandas & Matplotlib.",
  topics:[
    {t:"Introduction to Data Science", h:5, n:["Extracting useful insights and knowledge from data.","Steps: Collect → Clean → Analyse → Visualise → Conclude.","Data is the fuel of every AI model."]},
    {t:"Data types and datasets", h:5, n:["Structured data (tables, CSV) vs Unstructured data (images, text, audio).","Dataset = collection of rows (records) and columns (features).","CSV = Comma Separated Values, the most common data file."]},
    {t:"Data collection", h:5, n:["Sources: surveys, forms, sensors, websites, databases, public datasets.","Always check if data is accurate, complete and legal to use.","GIGO — bad data in, bad results out."]},
    {t:"Data cleaning", h:8, n:["Remove duplicates and fix wrong entries.","Handle missing values — drop them or fill them (mean/median).","Standardise formats (dates, units, spellings)."]},
    {t:"NumPy", h:8, n:["Library for fast numerical computing with arrays.","np.array(), shape, indexing, slicing, reshape.","Much faster than normal Python lists for maths."]},
    {t:"Pandas", h:12, n:["DataFrame (table) and Series (column) — the heart of data analysis.","pd.read_csv(), head(), info(), describe(), groupby(), sort_values().","Filtering rows with conditions: df[df['marks'] > 60]."]},
    {t:"Data analysis", h:5, n:["Finding patterns, averages, totals and trends.","Grouping and comparing categories.","Turning raw numbers into meaningful answers."]},
    {t:"Matplotlib / visualisation", h:5, n:["Line chart — trends over time; Bar chart — comparison.","Histogram — distribution; Pie chart — share; Scatter — relationship.","A good chart explains data faster than a table."]},
    {t:"Practical data-analysis exercises", h:7, n:["Work on real datasets: student marks, sales, attendance.","Clean → analyse → plot → write 3 conclusions.","Builds the base for Machine Learning in Module 5."]}
  ]
},
{
  id:4, icon:"➗", title:"Mathematics & Statistics", hours:35,
  desc:"Applied maths only — just enough to understand AI, never an engineering maths course.",
  topics:[
    {t:"Basic algebra", h:5, n:["Variables, expressions and simple equations.","Rearranging formulas to find unknown values.","Used in every ML formula."]},
    {t:"Statistics and averages", h:5, n:["Mean (average), Median (middle), Mode (most frequent).","These summarise a whole dataset in one number.","Outliers affect the mean more than the median."]},
    {t:"Probability fundamentals", h:6, n:["Probability measures chance — always between 0 and 1.","Used in prediction, classification and spam filtering.","Example: 0.8 probability = 80% chance."]},
    {t:"Correlation and regression concepts", h:5, n:["Correlation shows how strongly two variables relate (−1 to +1).","Regression draws a line to predict one value from another.","Correlation does not always mean causation."]},
    {t:"Vectors and matrices", h:5, n:["Vector = 1D list of numbers; Matrix = 2D grid of numbers.","Images and datasets are stored as matrices.","Core of neural-network calculations."]},
    {t:"Functions and graphs", h:4, n:["A function maps input → output.","Graphs show how output changes with input.","Used to visualise loss and accuracy during training."]},
    {t:"Mathematics used in ML", h:5, n:["Applied level only — no heavy theory.","Focus on intuition: why a model improves or fails.","Taught visually and practically."]}
  ]
},
{
  id:5, icon:"🧠", title:"Machine Learning", hours:80,
  desc:"The core module — training real models with Scikit-learn on real data.",
  topics:[
    {t:"Introduction to Machine Learning", h:5, n:["ML is a subset of AI that learns from data.","Rules are learned automatically, not hand-coded.","More good data = better model."]},
    {t:"Supervised and unsupervised learning", h:8, n:["Supervised — learns from labelled data (input + correct answer).","Unsupervised — finds hidden groups in unlabelled data.","Reinforcement — learns by reward and punishment."]},
    {t:"Training and testing datasets", h:5, n:["Split data, commonly 80% training and 20% testing.","Training teaches the model; testing checks real performance.","Never test on the same data used for training."]},
    {t:"Data preprocessing", h:8, n:["Cleaning, handling missing values, removing outliers.","Scaling/normalising numbers, encoding text categories.","Good preprocessing beats a fancy algorithm."]},
    {t:"Feature selection", h:5, n:["Choosing the most useful input columns.","Removing irrelevant features improves accuracy and speed.","Too many features can confuse the model."]},
    {t:"Linear regression", h:7, n:["Predicts continuous values (price, marks, temperature).","Draws the best-fit straight line through data.","Evaluated with error measures like MSE."]},
    {t:"Logistic regression", h:6, n:["Used for classification — Yes/No, Pass/Fail, Spam/Not Spam.","Outputs a probability between 0 and 1.","Despite the name, it is a classification algorithm."]},
    {t:"Decision trees", h:6, n:["Flowchart-like model of if-else rules.","Very easy to understand and explain.","Risk of overfitting if the tree is too deep."]},
    {t:"Random Forest", h:5, n:["Many decision trees voting together (ensemble).","Usually more accurate and stable than a single tree.","Reduces overfitting."]},
    {t:"K-Nearest Neighbour", h:5, n:["Classifies a point by looking at its nearest neighbours.","Simple and effective; 'K' is the number of neighbours.","Needs feature scaling to work well."]},
    {t:"Clustering", h:6, n:["Unsupervised grouping of similar data points.","K-Means is the most popular clustering algorithm.","Used in customer segmentation and grouping."]},
    {t:"Model evaluation", h:7, n:["Accuracy, Precision, Recall, F1-score.","Confusion matrix shows correct vs wrong predictions.","Overfitting = great on training data, poor on new data."]},
    {t:"Scikit-learn", h:5, n:["The main Python ML library.","fit() trains, predict() tests, score() evaluates.","Same simple pattern for almost every algorithm."]},
    {t:"Practical ML project", h:7, n:["End-to-end mini project: load → clean → train → evaluate → predict.","Example: marks prediction, spam detection, iris classification.","This is the portfolio piece for job interviews."]}
  ]
},
{
  id:6, icon:"🔗", title:"Deep Learning Fundamentals", hours:35,
  desc:"Neural networks, CNNs and frameworks — taught through demos and small projects.",
  topics:[
    {t:"Deep Learning introduction", h:5, n:["Deep Learning = ML using neural networks with many layers.","Works best with large data and powerful hardware.","Powers ChatGPT, image recognition and voice assistants."]},
    {t:"Artificial neural networks", h:7, n:["Structure: Input layer → Hidden layers → Output layer.","Each connection has a weight that is learned.","More layers = 'deeper' network."]},
    {t:"Neurons, layers and activation functions", h:5, n:["A neuron takes inputs, adds weights and passes through an activation function.","Common activations: ReLU, Sigmoid, Tanh, Softmax.","Activation functions add non-linearity so the network can learn complex patterns."]},
    {t:"Training neural networks", h:5, n:["Forward pass → calculate loss → backpropagation → update weights.","One full pass over data = one epoch.","Loss should decrease as training continues."]},
    {t:"CNN fundamentals", h:5, n:["CNN = Convolutional Neural Network, made for images.","Convolution extracts features; Pooling reduces size.","Used in face recognition and medical imaging."]},
    {t:"TensorFlow/PyTorch introduction", h:5, n:["The two most popular Deep Learning frameworks.","TensorFlow (Google) and PyTorch (Meta).","Both let you build and train networks with few lines of code."]},
    {t:"Practical demonstration/project", h:3, n:["Small hands-on demo — train a tiny network.","Example: digit recognition or simple image classifier.","Focus is on understanding, not heavy maths."]}
  ]
},
{
  id:7, icon:"🗣️", title:"NLP & Generative AI", hours:35,
  desc:"How AI understands language — and how it now generates text, images and code.",
  topics:[
    {t:"Introduction to NLP", h:5, n:["NLP = Natural Language Processing — AI that understands LANGUAGE.","Used in ChatGPT, Google Translate, Voice Assistants, Gmail spam detection.","Also: sentiment analysis and auto-correct."]},
    {t:"Text preprocessing", h:5, n:["Lowercasing, removing punctuation, removing stopwords.","Removing extra spaces and special characters.","Clean text = better model accuracy."]},
    {t:"Tokenisation and text representation", h:5, n:["Tokenization = breaking text into smaller parts (words/sentences).","Converting tokens to numbers: Bag of Words, TF-IDF.","Computers can only process numbers, not raw text."]},
    {t:"NLP applications", h:5, n:["Translation, sentiment analysis, spam filtering, summarisation.","Speech-to-text and text-to-speech.","Question answering and search engines."]},
    {t:"Chatbots", h:5, n:["Rule-based chatbots follow fixed if-else rules.","AI chatbots learn from data and understand intent.","Used in customer support, education and banking."]},
    {t:"Introduction to Generative AI", h:5, n:["Generative AI creates NEW content — text, images, audio, video, code.","Examples: ChatGPT, Gemini, DALL·E, Midjourney.","It predicts the next most likely token again and again."]},
    {t:"Prompt engineering and responsible use", h:5, n:["A prompt is the instruction given to an AI model.","Clear, specific prompts give better results.","Always verify AI output — watch for bias, errors and privacy leaks."]}
  ]
},
{
  id:8, icon:"👁️", title:"Computer Vision", hours:30,
  desc:"Teaching machines to see — images, video, detection and OpenCV.",
  topics:[
    {t:"Introduction to Computer Vision", h:5, n:["Computer Vision = AI that understands IMAGES & VIDEOS.","Used in Face Unlock, self-driving cars, security cameras, medical imaging.","Also used in image search and OCR."]},
    {t:"Digital images and image processing", h:5, n:["An image is a grid of pixels; colour images use RGB channels.","Operations: resize, crop, rotate, grayscale, blur.","Pixels are numbers — that is why AI can process them."]},
    {t:"Image classification", h:5, n:["Identifies WHAT an image contains — cat, dog, car.","One label per image.","Uses CNNs for good accuracy."]},
    {t:"Object detection concepts", h:5, n:["Finds objects AND their location using bounding boxes.","Can detect multiple objects in one image.","Used in traffic monitoring and security systems."]},
    {t:"OpenCV basics", h:5, n:["OpenCV = Open Source Computer Vision Library (cv2).","Read images/video: cv2.imread(), cv2.VideoCapture().","Draw boxes, detect edges, apply filters."]},
    {t:"Practical computer-vision project", h:5, n:["Example: face detection, object counter, image classifier.","Combine OpenCV + a simple model.","Great portfolio project for AI technician roles."]}
  ]
},
{
  id:9, icon:"📡", title:"IoT, Robotics & AI Applications", hours:25,
  desc:"Connecting AI to the physical world — sensors, smart devices and automation.",
  topics:[
    {t:"Introduction to IoT", h:4, n:["IoT = Internet of Things — everyday devices connected to the internet.","They collect and share data automatically.","Examples: smart bulbs, smart watch, smart AC."]},
    {t:"Sensors and data collection", h:4, n:["Sensors measure the real world: temperature, motion, light, distance, humidity.","Sensor data feeds AI models.","Example: temperature sensor → smart cooling system."]},
    {t:"AI + IoT applications", h:5, n:["Smart homes, smart agriculture, smart health, smart cities.","Predictive maintenance in factories.","AI turns IoT data into decisions."]},
    {t:"Introduction to robotics", h:4, n:["Robotics = mechanical machines + sensors + control + AI.","Types: industrial, service, mobile robots.","AI helps robots see, decide and move."]},
    {t:"AI-enabled automation", h:4, n:["Machines perform repetitive tasks automatically.","AI makes automation smart and adaptive.","Used in manufacturing, packaging and quality checking."]},
    {t:"Practical demonstration", h:4, n:["Hands-on demo of a sensor + controller + output.","Example: automatic light, obstacle-avoiding bot.","Focus on understanding the full data flow."]}
  ]
},
{
  id:10, icon:"💻", title:"CS/IT AI Applications (Elective)", hours:60,
  desc:"For ITI centres with a computer/IT orientation — AI inside software, security, cloud and databases.",
  topics:[
    {t:"AI in software development", h:10, n:["AI tools speed up coding, testing and debugging.","Automated code review and bug prediction.","AI helps in requirement analysis and documentation."]},
    {t:"AI-assisted programming", h:8, n:["Tools like GitHub Copilot suggest code as you type.","AI explains errors and proposes fixes.","Always review AI-generated code before using it."]},
    {t:"AI in cybersecurity", h:8, n:["Detects unusual activity and intrusions.","Identifies phishing and malware patterns.","Faster threat response than manual monitoring."]},
    {t:"AI and cloud computing", h:8, n:["Cloud gives on-demand storage and computing power.","AI models are trained and deployed on the cloud.","Services: AWS, Azure, Google Cloud."]},
    {t:"AI in databases/data management", h:8, n:["Smart query optimisation and auto-indexing.","Predicting data growth and detecting anomalies.","Better data organisation and search."]},
    {t:"AI automation", h:8, n:["Automating repetitive IT and business tasks.","Chatbots, auto-ticketing, report generation.","Saves time and reduces human error."]},
    {t:"Practical CS/IT AI project", h:10, n:["Build a small AI-powered IT tool.","Examples: log analyser, chatbot, auto-classifier.","Document the project for your portfolio."]}
  ]
},
{
  id:11, icon:"🛠️", title:"Practical Projects / Lab", hours:30,
  desc:"Hands-on build time — turn every module into a working mini-project.",
  topics:[
    {t:"AI Chatbot", h:0, n:["Uses NLP concepts from Module 7.","Simple rule-based or API-based bot.","Great beginner-friendly project."]},
    {t:"Student attendance / data analysis system", h:0, n:["Uses Pandas + Matplotlib.","Collect, clean and visualise attendance data.","Shows real-world data skills."]},
    {t:"Simple prediction model", h:0, n:["Uses Scikit-learn linear regression.","Predict marks, price or temperature.","End-to-end ML pipeline practice."]},
    {t:"Image-classification application", h:0, n:["Uses Computer Vision + CNN basics.","Classify images into 2–3 categories.","Strong visual demo for interviews."]},
    {t:"AI-based text classifier", h:0, n:["Classify text as spam/not spam or positive/negative.","Uses tokenisation + a simple ML model.","Combines NLP + ML."]},
    {t:"Simple computer-vision application", h:0, n:["Face detection or object counting with OpenCV.","Works on live webcam feed.","Very impressive practical demo."]},
    {t:"AI + IoT demonstration", h:0, n:["Sensor → data → decision → action.","Example: automatic light or smart alert system.","Connects AI to hardware."]},
    {t:"AI-assisted software-development project", h:0, n:["Build a small app using AI coding assistance.","Focus on problem solving, not typing speed.","Prepare a short report + demo."]}
  ]
},
{
  id:12, icon:"🎓", title:"Employability Skills", hours:60,
  desc:"The soft skills that turn a trained technician into a hired professional.",
  topics:[
    {t:"Communication skills", h:5, n:["Clear speaking and active listening.","Explaining technical ideas in simple words.","Teamwork and professional behaviour."]},
    {t:"English", h:5, n:["Basic workplace English — reading, writing, speaking.","Technical vocabulary for IT and AI roles.","Email and message etiquette."]},
    {t:"Workplace behaviour", h:5, n:["Punctuality, discipline, respect and responsibility.","Following safety rules and company policy.","Positive attitude and teamwork."]},
    {t:"Digital literacy", h:5, n:["Using computers, internet, email and online forms.","Safe browsing and basic cyber hygiene.","Working with common office and cloud tools."]},
    {t:"Financial literacy", h:5, n:["Budgeting, saving and basic banking.","Understanding salary, deductions and taxes.","Avoiding loans and online fraud traps."]},
    {t:"Legal awareness", h:5, n:["Basic rights and duties of an employee.","Understanding contracts and workplace laws.","Cyber law and data protection basics."]},
    {t:"Entrepreneurship", h:5, n:["Turning a skill into a small business or service.","Costing, pricing and basic marketing.","Government schemes and support for startups."]},
    {t:"Career development", h:5, n:["Setting short-term and long-term career goals.","Skill upgrading and certifications.","Building a professional network."]},
    {t:"Interview preparation", h:5, n:["Common interview questions and how to answer them.","Body language, confidence and mock interviews.","Preparing a strong self-introduction."]},
    {t:"Resume preparation", h:5, n:["One-page clean resume structure.","Highlighting projects, skills and internships.","Avoiding spelling mistakes and false claims."]},
    {t:"Apprenticeship/job opportunities", h:5, n:["Where to find ITI-relevant apprenticeships.","Job portals, interviews and selection process.","Understanding apprenticeship benefits."]},
    {t:"Customer service", h:5, n:["Handling customer queries politely and clearly.","Problem solving and complaint handling.","Patience and professional tone."]}
  ]
}
];

/* =========================================================
   OBJECTIVE QUESTIONS BANK
   ========================================================= */
const QUESTIONS = [
/* ---------- MODULE 1 ---------- */
{m:1,q:"What does AI stand for?",o:["Automatic Information","Artificial Intelligence","Advanced Internet","Applied Integration"],a:1,e:"AI = Artificial Intelligence — making machines perform tasks that normally need human intelligence."},
{m:1,q:"Who is known as the father of Artificial Intelligence?",o:["Alan Turing","John McCarthy","Bill Gates","Charles Babbage"],a:1,e:"John McCarthy coined the term 'Artificial Intelligence' at the 1956 Dartmouth Conference."},
{m:1,q:"The Turing Test was proposed by:",o:["John McCarthy","Alan Turing","Elon Musk","Tim Berners-Lee"],a:1,e:"Alan Turing proposed the Turing Test in 1950 to check if a machine can show human-like intelligence."},
{m:1,q:"NLP deals with which type of data?",o:["Images","Human language / text","Numbers only","Sound only"],a:1,e:"NLP (Natural Language Processing) helps computers understand and generate human language."},
{m:1,q:"Computer Vision helps computers understand:",o:["Text and grammar","Images and videos","Numbers and formulas","Passwords"],a:1,e:"Computer Vision = AI that understands IMAGES & VIDEOS."},
{m:1,q:"Which of these is an example of Computer Vision?",o:["Google Translate","Face Unlock","Spam filter","Auto-correct"],a:1,e:"Face Unlock uses Computer Vision to recognise and match faces."},
{m:1,q:"Breaking text into smaller parts is called:",o:["Translation","Tokenization","Classification","Regression"],a:1,e:"Tokenization = breaking text into smaller units such as words or sentences."},
{m:1,q:"Which is NOT a principle of Responsible AI?",o:["Fairness","Transparency","Bias","Accountability"],a:2,e:"Bias is a problem, not a principle. Responsible AI principles include fairness, transparency, accountability, privacy, safety and human oversight."},
{m:1,q:"The AI ethics principle that says AI should not unfairly discriminate is:",o:["Privacy","Fairness","Safety","Speed"],a:1,e:"Fairness means AI should not unfairly discriminate against any person or group."},
{m:1,q:"GIGO stands for:",o:["Good Input Good Output","Garbage In Garbage Out","Great Idea Great Output","General Input General Output"],a:1,e:"GIGO means poor-quality data produces poor AI results."},
{m:1,q:"Data Privacy means:",o:["Deleting all data","Proper use and control of personal data","Making data public","Buying data"],a:1,e:"Privacy = how personal data is collected, used and shared."},
{m:1,q:"Which of these is a good security practice?",o:["Sharing OTP with callers","Using the same password everywhere","Never sharing your OTP or password","Clicking unknown links"],a:2,e:"Never share OTP or passwords, and always use strong passwords with 2-factor authentication."},
{m:1,q:"The correct order of data preparation is:",o:["Use → Clean → Collect","Collect → Clean → Organize → Label → Use","Label → Collect → Use","Clean → Use → Collect"],a:1,e:"Data must be collected, cleaned, organised and labelled before it is used for AI."},
{m:1,q:"Which statement is TRUE about the Golden Rule of AI?",o:["AI decides everything on its own","AI is a tool; humans are responsible for how it is used","AI has no limitations","AI never makes mistakes"],a:1,e:"'AI is a tool. Humans are responsible for how it is used.'"},

/* ---------- MODULE 2 ---------- */
{m:2,q:"Python is a ______ language.",o:["Low-level compiled","High-level interpreted","Machine-level","Assembly"],a:1,e:"Python is a high-level, interpreted language — code runs line by line without compiling."},
{m:2,q:"The file extension of a Python file is:",o:[".pt",".py",".pyt",".pn"],a:1,e:"Python files are saved with the .py extension."},
{m:2,q:"Which function is used to display output in Python?",o:["echo()","print()","show()","display()"],a:1,e:"print() displays output on the screen."},
{m:2,q:"What is the data type of 3.14 in Python?",o:["int","float","str","bool"],a:1,e:"Numbers with a decimal point are of type float."},
{m:2,q:"Which of these is a list in Python?",o:["(1, 2, 3)","[1, 2, 3]","{1, 2, 3}","<1, 2, 3>"],a:1,e:"Lists use square brackets [ ] and are ordered and changeable."},
{m:2,q:"Which Python data type is immutable (cannot be changed)?",o:["List","Dictionary","Tuple","Set"],a:2,e:"Tuples ( ) are immutable — once created, their values cannot be changed."},
{m:2,q:"Which keyword defines a function in Python?",o:["function","def","fun","define"],a:1,e:"Functions are defined using the 'def' keyword."},
{m:2,q:"Which loop runs as long as a condition is True?",o:["for loop","while loop","do loop","repeat loop"],a:1,e:"A while loop repeats as long as its condition remains True."},
{m:2,q:"Which block handles errors in Python?",o:["if / else","try / except","for / while","def / return"],a:1,e:"try/except catches runtime errors so the program does not crash."},
{m:2,q:"A dictionary in Python stores data as:",o:["Only numbers","Key-value pairs","Only strings","A single value"],a:1,e:"Dictionaries store data as key:value pairs, e.g. {'name':'Ali'}."},
{m:2,q:"Which operator is used for exponent (power) in Python?",o:["^","**","//","%%"],a:1,e:"** is the exponent operator. 2**3 = 8."},
{m:2,q:"Which symbol is used for a single-line comment in Python?",o:["//","#","/* */","--"],a:1,e:"The # symbol starts a comment in Python."},
{m:2,q:"Which command installs extra Python packages?",o:["install","pip","get","setup"],a:1,e:"pip install package_name installs third-party Python packages."},
{m:2,q:"OOP stands for:",o:["Object Oriented Programming","Open Output Process","Only Online Programming","Ordered Object Protocol"],a:0,e:"OOP = Object Oriented Programming, based on classes and objects."},
{m:2,q:"Which mode opens a file for writing in Python?",o:["'r'","'w'","'a'","'x'"],a:1,e:"'w' opens a file for writing (it overwrites existing content)."},

/* ---------- MODULE 3 ---------- */
{m:3,q:"Data cleaning means:",o:["Deleting the whole dataset","Removing errors, duplicates and fixing missing values","Writing new data","Plotting charts"],a:1,e:"Data cleaning removes duplicates, fixes errors and handles missing values."},
{m:3,q:"Which library is used for fast numerical operations in Python?",o:["Pandas","NumPy","Matplotlib","OpenCV"],a:1,e:"NumPy provides fast array-based numerical computing."},
{m:3,q:"Which library is mainly used for DataFrames in Python?",o:["NumPy","Pandas","Seaborn","TensorFlow"],a:1,e:"Pandas provides DataFrame and Series for tabular data handling."},
{m:3,q:"Matplotlib is used for:",o:["Machine learning","Data visualisation","Web development","File handling"],a:1,e:"Matplotlib creates charts and graphs such as line, bar and pie charts."},
{m:3,q:"CSV stands for:",o:["Common System Value","Comma Separated Values","Central Storage Version","Column Sorted Values"],a:1,e:"CSV = Comma Separated Values, a simple tabular data file format."},
{m:3,q:"Which Pandas function reads a CSV file?",o:["pd.load_csv()","pd.read_csv()","pd.open_csv()","pd.get_csv()"],a:1,e:"pd.read_csv('file.csv') loads a CSV file into a DataFrame."},
{m:3,q:"A histogram is used to show:",o:["Comparison between categories","Distribution of data","Share of a whole","Relationship between two variables"],a:1,e:"A histogram shows how data values are distributed across ranges."},
{m:3,q:"Which chart is best for comparing categories?",o:["Bar chart","Line chart","Pie chart","Scatter plot"],a:0,e:"Bar charts are best for comparing values across categories."},
{m:3,q:"'Structured data' means:",o:["Images and audio","Data organised in rows and columns","Random text","Encrypted data"],a:1,e:"Structured data is organised in tables with rows and columns, like CSV or Excel files."},
{m:3,q:"The first step of any data science project is:",o:["Visualisation","Data collection","Model training","Deployment"],a:1,e:"You must collect data first — without data there is nothing to analyse."},

/* ---------- MODULE 4 ---------- */
{m:4,q:"The mean of a dataset is also called the:",o:["Middle value","Average","Most frequent value","Range"],a:1,e:"Mean = sum of all values divided by the number of values (the average)."},
{m:4,q:"The median is:",o:["The average","The middle value when data is sorted","The most repeated value","The largest value"],a:1,e:"Median is the middle value of a sorted dataset."},
{m:4,q:"The value of probability always lies between:",o:["−1 and 1","0 and 1","0 and 100","1 and 10"],a:1,e:"Probability ranges from 0 (impossible) to 1 (certain)."},
{m:4,q:"Correlation measures:",o:["The average of data","The relationship between two variables","The size of a dataset","The number of columns"],a:1,e:"Correlation shows how strongly two variables are related, from −1 to +1."},
{m:4,q:"A vector is:",o:["A 2D grid of numbers","A 1D list of numbers","A text string","A chart"],a:1,e:"A vector is a one-dimensional array of numbers; a matrix is two-dimensional."},
{m:4,q:"Which measure shows the spread of data?",o:["Mean","Standard deviation","Mode","Total"],a:1,e:"Standard deviation shows how far values spread from the mean."},
{m:4,q:"Regression is mainly used for:",o:["Sorting data","Predicting values","Deleting data","Colouring charts"],a:1,e:"Regression predicts a value based on the relationship between variables."},
{m:4,q:"Why is mathematics taught in this AI course?",o:["To become a mathematician","Only at an applied level to understand AI","To pass engineering exams","It is optional theory"],a:1,e:"The syllabus states maths must be taught purely at an applied level — not as engineering mathematics."},

/* ---------- MODULE 5 ---------- */
{m:5,q:"Machine Learning is a subset of:",o:["Data Science only","Artificial Intelligence","Web development","Networking"],a:1,e:"ML is a subset of AI where machines learn patterns from data."},
{m:5,q:"Supervised learning requires:",o:["No data","Labelled data","Only images","Only text"],a:1,e:"Supervised learning trains on labelled data (input + correct output)."},
{m:5,q:"Clustering is an example of:",o:["Supervised learning","Unsupervised learning","Reinforcement learning","Deep learning only"],a:1,e:"Clustering groups similar data without labels — it is unsupervised learning."},
{m:5,q:"Linear regression is used to predict:",o:["Categories","Continuous values","Images","Text"],a:1,e:"Linear regression predicts continuous numeric values like price or temperature."},
{m:5,q:"Logistic regression is mainly used for:",o:["Regression of prices","Classification","Clustering","Image resizing"],a:1,e:"Logistic regression is used for classification such as Yes/No or Spam/Not Spam."},
{m:5,q:"Random Forest is made up of many:",o:["Neurons","Decision trees","Clusters","Databases"],a:1,e:"Random Forest combines many decision trees and takes a majority vote."},
{m:5,q:"KNN stands for:",o:["K-Nearest Neighbour","Key Number Node","Known Neural Network","Kernel Node Network"],a:0,e:"KNN = K-Nearest Neighbour, which classifies data by looking at nearby points."},
{m:5,q:"Which data split is commonly used for training and testing?",o:["50/50","80/20","10/90","100/0"],a:1,e:"A common split is 80% for training and 20% for testing."},
{m:5,q:"Scikit-learn is a Python library used for:",o:["Web design","Machine Learning","Image editing","File compression"],a:1,e:"Scikit-learn provides ready-made ML algorithms like regression, trees and KNN."},
{m:5,q:"Overfitting means the model:",o:["Performs badly on training data","Memorises training data and performs poorly on new data","Has too little data","Cannot be trained"],a:1,e:"Overfitting = great on training data but poor on unseen data."},
{m:5,q:"Feature selection means:",o:["Deleting all columns","Choosing the most useful input columns","Adding random data","Renaming the dataset"],a:1,e:"Feature selection picks the most relevant inputs to improve accuracy and speed."},
{m:5,q:"Which function trains a model in Scikit-learn?",o:["train()","fit()","learn()","run()"],a:1,e:"model.fit(X, y) trains the model on data."},
{m:5,q:"A confusion matrix is used to:",o:["Clean data","Evaluate classification results","Plot a line chart","Store data"],a:1,e:"A confusion matrix shows correct and incorrect predictions of a classifier."},
{m:5,q:"Data preprocessing includes:",o:["Only plotting graphs","Cleaning, scaling and encoding data","Only deleting data","Writing reports"],a:1,e:"Preprocessing prepares raw data by cleaning, scaling and encoding it before training."},

/* ---------- MODULE 6 ---------- */
{m:6,q:"Deep Learning uses neural networks with:",o:["One layer only","Many layers","No layers","Only input layers"],a:1,e:"Deep Learning uses neural networks with many hidden layers."},
{m:6,q:"ANN stands for:",o:["Artificial Neural Network","Advanced Node Network","Applied Numeric Node","Automatic Neuron Name"],a:0,e:"ANN = Artificial Neural Network, inspired by the human brain."},
{m:6,q:"Which of these is an activation function?",o:["ReLU","CSV","API","RGB"],a:0,e:"ReLU, Sigmoid, Tanh and Softmax are common activation functions."},
{m:6,q:"CNN is mainly used for:",o:["Text translation","Image processing","File storage","Networking"],a:1,e:"CNNs (Convolutional Neural Networks) are designed mainly for image tasks."},
{m:6,q:"TensorFlow and PyTorch are:",o:["Databases","Deep Learning frameworks","Operating systems","Web browsers"],a:1,e:"They are the two most popular Deep Learning frameworks."},
{m:6,q:"The layers between the input and output layer are called:",o:["Visible layers","Hidden layers","Outer layers","Data layers"],a:1,e:"Layers between input and output are called hidden layers."},
{m:6,q:"One complete pass of the entire dataset through a neural network is called:",o:["A batch","An epoch","A layer","A neuron"],a:1,e:"One full pass over the training data is called an epoch."},
{m:6,q:"Backpropagation is used to:",o:["Load data","Update weights to reduce error","Display images","Save files"],a:1,e:"Backpropagation adjusts the network weights to minimise the loss."},

/* ---------- MODULE 7 ---------- */
{m:7,q:"NLP stands for:",o:["Natural Language Processing","Neural Logic Programming","Network Layer Protocol","Numeric Language Program"],a:0,e:"NLP = Natural Language Processing — AI that understands human language."},
{m:7,q:"ChatGPT is an example of:",o:["Computer Vision","Text generation / Generative AI","Database management","Networking"],a:1,e:"ChatGPT generates human-like text using Generative AI and NLP."},
{m:7,q:"Sentiment analysis is used to find:",o:["The language of text","Positive, negative or neutral emotions","The length of text","The spelling mistakes"],a:1,e:"Sentiment analysis detects the emotion behind text — positive, negative or neutral."},
{m:7,q:"Tokenization in NLP means:",o:["Translating text","Breaking text into smaller parts","Deleting text","Colouring text"],a:1,e:"Tokenization splits text into smaller units such as words or sentences."},
{m:7,q:"Speech recognition converts:",o:["Text to speech","Voice to text","Image to text","Text to image"],a:1,e:"Speech recognition converts spoken voice into written text."},
{m:7,q:"Generative AI is used to:",o:["Only store data","Create new content like text, images and code","Delete files","Compress images"],a:1,e:"Generative AI creates new content — text, images, audio, video and code."},
{m:7,q:"Prompt engineering means:",o:["Repairing computers","Writing clear instructions for an AI model","Building hardware","Designing websites"],a:1,e:"Prompt engineering is the skill of writing clear, specific instructions to get better AI output."},
{m:7,q:"Which of these is a text preprocessing step?",o:["Removing stopwords","Resizing images","Training a CNN","Compressing files"],a:0,e:"Removing stopwords, lowercasing and removing punctuation are text preprocessing steps."},
{m:7,q:"A rule-based chatbot:",o:["Learns from data","Follows fixed if-else rules","Uses neural networks only","Cannot answer anything"],a:1,e:"Rule-based chatbots reply using predefined rules, not learning."},

/* ---------- MODULE 8 ---------- */
{m:8,q:"Computer Vision helps computers understand:",o:["Text only","Images and videos","Sound only","Numbers only"],a:1,e:"Computer Vision = AI that understands IMAGES & VIDEOS."},
{m:8,q:"Face Unlock in smartphones uses:",o:["NLP","Computer Vision","Database indexing","Cloud storage"],a:1,e:"Face Unlock uses Computer Vision face recognition."},
{m:8,q:"OCR is used to:",o:["Convert image text into editable text","Detect faces","Compress images","Colour images"],a:0,e:"OCR (Optical Character Recognition) converts text inside images into editable text."},
{m:8,q:"Object detection finds:",o:["Only colours","Objects and their locations in an image","Only text","Only faces"],a:1,e:"Object detection identifies objects and marks them with bounding boxes."},
{m:8,q:"Image classification tells us:",o:["Where objects are","What an image contains","The file size","The image format"],a:1,e:"Image classification identifies what an image contains, e.g. cat or dog."},
{m:8,q:"OpenCV is a:",o:["Computer Vision library","Database","Programming language","Operating system"],a:0,e:"OpenCV (cv2) is an open-source Computer Vision library."},
{m:8,q:"A digital colour image is made of:",o:["Words","Pixels with RGB values","Formulas","Sound waves"],a:1,e:"Digital images are grids of pixels; colour images use Red, Green and Blue channels."},
{m:8,q:"Self-driving cars mainly use which AI technology?",o:["NLP","Computer Vision","Text mining","Chatbots"],a:1,e:"Self-driving cars use Computer Vision to detect lanes, signs and obstacles."},

/* ---------- MODULE 9 ---------- */
{m:9,q:"IoT stands for:",o:["Internet of Things","Input of Technology","Integration of Tools","Internet of Transfer"],a:0,e:"IoT = Internet of Things — everyday devices connected to the internet."},
{m:9,q:"The main job of a sensor is to:",o:["Display images","Collect data from the environment","Store files","Print documents"],a:1,e:"Sensors measure real-world conditions such as temperature, motion and light."},
{m:9,q:"Which is an example of AI + IoT?",o:["A normal wall clock","A smart home that adjusts cooling automatically","A paper notebook","A bicycle"],a:1,e:"A smart home uses IoT sensors plus AI decisions to control devices automatically."},
{m:9,q:"Robotics combines mechanics with:",o:["Only electricity","Sensors, control and AI","Only software","Only cameras"],a:1,e:"Robots combine mechanical parts, sensors, control systems and AI."},
{m:9,q:"AI-enabled automation means:",o:["Humans do all work","Machines perform tasks smartly and automatically","Machines stop working","Only data entry"],a:1,e:"AI automation lets machines perform repetitive tasks intelligently."},
{m:9,q:"Which sensor measures temperature?",o:["Ultrasonic sensor","Temperature sensor","IR sensor","Gas sensor"],a:1,e:"A temperature sensor measures heat level in the environment."},

/* ---------- MODULE 10 ---------- */
{m:10,q:"GitHub Copilot is an example of:",o:["A database","AI-assisted programming","An operating system","A sensor"],a:1,e:"GitHub Copilot is an AI coding assistant that suggests code as you type."},
{m:10,q:"AI in cybersecurity is mainly used to:",o:["Design websites","Detect threats and unusual activity","Store passwords in plain text","Increase file size"],a:1,e:"AI detects intrusions, phishing and unusual patterns faster than manual monitoring."},
{m:10,q:"Cloud computing provides:",o:["Only hardware repair","On-demand computing and storage over the internet","Only printing services","Only email"],a:1,e:"Cloud computing gives on-demand computing power and storage, used to train and deploy AI."},
{m:10,q:"Which is a cloud service provider?",o:["AWS","HTML","CSV","OpenCV"],a:0,e:"AWS, Microsoft Azure and Google Cloud are major cloud providers."},
{m:10,q:"AI in databases helps with:",o:["Query optimisation and anomaly detection","Painting images","Writing novels","Designing logos"],a:0,e:"AI improves database performance through query optimisation and anomaly detection."},
{m:10,q:"AI automation in IT helps to:",o:["Increase manual work","Reduce repetitive work and human error","Slow down processes","Remove all jobs"],a:1,e:"AI automation handles repetitive tasks, saving time and reducing errors."},

/* ---------- MODULE 11 ---------- */
{m:11,q:"An AI chatbot project mainly uses concepts from:",o:["Computer Vision","NLP","IoT","Robotics"],a:1,e:"Chatbots are built using NLP concepts such as tokenization and intent detection."},
{m:11,q:"A student attendance data-analysis system mainly uses:",o:["Pandas and Matplotlib","OpenCV and CNN","Sensors and motors","Cloud only"],a:0,e:"Pandas handles the data and Matplotlib visualises it."},
{m:11,q:"A simple prediction model is usually built with:",o:["Linear regression","OCR","Face recognition","IoT sensors"],a:0,e:"Linear regression is the standard first prediction model in ML."},
{m:11,q:"An image-classification application is based on:",o:["NLP","Computer Vision / CNN","Databases","Networking"],a:1,e:"Image classification uses Computer Vision with CNN models."},
{m:11,q:"An AI + IoT demonstration typically follows which flow?",o:["Sensor → Data → Decision → Action","Action → Sensor → Data","Data → Sensor → Action","Decision → Sensor → Data"],a:0,e:"IoT collects sensor data, AI makes a decision, and a device performs the action."},
{m:11,q:"Why are practical projects important in this syllabus?",o:["To fill time","To build job-ready, hands-on skills","To avoid theory","To reduce syllabus"],a:1,e:"The syllabus targets job-ready AI technicians, so hands-on projects are essential."},

/* ---------- MODULE 12 ---------- */
{m:12,q:"Which of these is an employability skill?",o:["Communication skills","Only coding","Only maths","Only drawing"],a:0,e:"Communication, teamwork, digital literacy and interview skills are employability skills."},
{m:12,q:"A resume is:",o:["A summary of your qualifications and skills","A government ID","A bank passbook","A mark sheet only"],a:0,e:"A resume is a short document summarising your education, skills and experience."},
{m:12,q:"Digital literacy means:",o:["Reading books only","Using digital tools and the internet effectively and safely","Repairing computers","Writing code only"],a:1,e:"Digital literacy is the ability to use digital devices, the internet and online tools safely."},
{m:12,q:"Financial literacy helps you to:",o:["Design websites","Manage money, budgeting and saving","Repair machines","Learn coding"],a:1,e:"Financial literacy is about budgeting, saving, banking and avoiding fraud."},
{m:12,q:"Entrepreneurship means:",o:["Working only in a factory","Starting and managing your own business","Only studying","Only doing interviews"],a:1,e:"Entrepreneurship is the ability to start and run a business or service."},
{m:12,q:"An apprenticeship is:",o:["Only classroom study","Learning a skill while working on the job","A written exam","A holiday"],a:1,e:"Apprenticeships combine practical on-the-job training with learning."},
{m:12,q:"Which is important during an interview?",o:["Being rude","Confidence, clear communication and body language","Arriving late","Avoiding eye contact"],a:1,e:"Confidence, clear answers and good body language create a strong impression."},
{m:12,q:"Good customer service includes:",o:["Ignoring complaints","Listening patiently and solving problems politely","Arguing with customers","Delaying responses"],a:1,e:"Good customer service means listening politely and solving problems quickly."}
];