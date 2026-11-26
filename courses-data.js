const COURSES = {
"computer-science": { icon: "💻", title: "Computer Science", desc: "Learn programming and computer fundamentals.", modules: [
 { title: "Introduction – What Is Computer Science?", html: "<h3>Introduction</h3><p>Computer science is the study of computation, information, and automation. It explains how computers work and how we use them to solve problems.</p><h3>Core Areas</h3><p>Programming, algorithms and data structures, computer systems, networks, and artificial intelligence.</p>" },
 { title: "Computer Science Basics Quiz", quiz: { q: "What is an algorithm?", options: ["A type of computer hardware", "A step-by-step procedure for solving a problem", "A programming language", "A kind of network cable"], answer: 1 } },
 { title: "Programming Basics – Variables and Conditions", html: "<h3>Variables</h3><p>A variable stores a value, such as <code>age = 18</code>. Common data types are integers, decimals, strings (text), and booleans (true or false).</p><h3>Conditional Statements</h3><p>Conditions let a program make decisions: <code>if age >= 18:</code> runs its code only when the condition is true, and <code>else:</code> runs when it is not.</p>" },
 { title: "Conditional Statements Quiz", quiz: { q: "When does the code inside an if statement run?", options: ["Only when its condition is true", "Every time the program starts", "Only when its condition is false", "Never"], answer: 0 } },
 { title: "Next Steps – Where Computer Science Leads", html: "<h3>Career Paths</h3><p>Software development, data science, cybersecurity, and more.</p><h3>Emerging Fields</h3><p>Machine learning, robotics, and artificial intelligence build directly on the programming and problem-solving skills you start with here.</p>" }
]},
"mathematics": { icon: "📐", title: "Mathematics", desc: "Improve your problem-solving and mathematical skills.", modules: [
 { title: "Introduction – Why Mathematics Matters", html: "<h3>Introduction</h3><p>Mathematics is the language of patterns and logic. It trains you to break problems into clear steps and check each one.</p><h3>Where You Use It</h3><p>Budgeting, measuring, science, technology, and everyday decisions.</p>" },
 { title: "Order of Operations Quiz", quiz: { q: "What is 2 + 3 × 4?", options: ["20", "24", "14", "9"], answer: 2 } },
 { title: "Fractions, Percentages, and Ratios", html: "<h3>Fractions and Percentages</h3><p>A percentage is a fraction out of 100. For example, 25% is the same as 1/4, so 25% of 80 is 80 ÷ 4 = 20.</p><h3>Ratios</h3><p>A ratio compares two quantities. A 2:3 ratio means 2 parts of one thing for every 3 parts of another.</p>" },
 { title: "Percentages Quiz", quiz: { q: "What is 25% of 80?", options: ["15", "25", "20", "40"], answer: 2 } },
 { title: "Introduction to Algebra", html: "<h3>Solving for x</h3><p>Algebra uses letters for unknown numbers. To solve <code>x + 5 = 12</code>, subtract 5 from both sides to get <code>x = 7</code>.</p><h3>Golden Rule</h3><p>Whatever you do to one side of an equation, do to the other side.</p>" }
]},
"science": { icon: "🔬", title: "Science", desc: "Explore scientific concepts and discoveries.", modules: [
 { title: "Introduction – The Scientific Method", html: "<h3>Introduction</h3><p>Science answers questions by testing ideas against evidence, so that different people can get the same results.</p><h3>The Steps</h3><p>Observe, ask a question, form a hypothesis, run an experiment, analyze the data, and draw a conclusion.</p>" },
 { title: "Scientific Method Quiz", quiz: { q: "What is a hypothesis?", options: ["A proven fact", "A testable prediction or explanation", "A final conclusion", "A type of laboratory tool"], answer: 1 } },
 { title: "Matter and Energy", html: "<h3>States of Matter</h3><p>Matter is anything that has mass and takes up space. The common states are solid, liquid, and gas.</p><h3>Energy</h3><p>Energy cannot be created or destroyed. It only changes form, such as from chemical energy to heat and motion.</p>" },
 { title: "States of Matter Quiz", quiz: { q: "Which state of matter has a definite volume but no definite shape?", options: ["Solid", "Gas", "Liquid", "None of these"], answer: 2 } },
 { title: "Science in Everyday Life", html: "<h3>All Around You</h3><p>Cooking, weather, medicine, and your phone all rely on scientific discoveries.</p><h3>Thinking Like a Scientist</h3><p>Ask questions, look for evidence, and stay open to changing your mind.</p>" }
]},
"general-education": { icon: "📖", title: "General Education", desc: "Expand your knowledge through different subjects.", modules: [
 { title: "Introduction – Becoming a Lifelong Learner", html: "<h3>Introduction</h3><p>General education builds skills that apply to every field: reading, writing, reasoning, and communicating.</p><h3>Effective Study Habits</h3><p>Study in short sessions, review regularly, and explain ideas in your own words.</p>" },
 { title: "Study Habits Quiz", quiz: { q: "Which habit best helps long-term memory?", options: ["Cramming the night before", "Reviewing material at spaced intervals", "Reading once without notes", "Skipping practice"], answer: 1 } },
 { title: "Critical Thinking and Reading", html: "<h3>Evaluating Sources</h3><p>Ask who wrote it, why they wrote it, and what evidence supports their claims.</p><h3>Separating Fact from Opinion</h3><p>Facts can be checked. Opinions express beliefs or feelings.</p>" },
 { title: "Evaluating Sources Quiz", quiz: { q: "What should you check first about a source?", options: ["How long it is", "How many people shared it", "Who wrote it and what evidence it provides", "What color the website is"], answer: 2 } },
 { title: "Communicating Clearly", html: "<h3>Structure</h3><p>Good writing states a main idea, supports it with evidence, and ends with a clear conclusion.</p><h3>Audience</h3><p>Always think about who will read or hear your message and adjust your tone and detail.</p>" }
]},
"social-sciences": { icon: "🌍", title: "Social Sciences", desc: "Learn about society, culture and human behavior.", modules: [
 { title: "Introduction – What Are the Social Sciences?", html: "<h3>Introduction</h3><p>The social sciences study how people think, behave, and organize themselves in groups.</p><h3>Main Disciplines</h3><p>Psychology, sociology, anthropology, economics, and political science.</p>" },
 { title: "Social Sciences Quiz", quiz: { q: "Which discipline studies human behavior and mental processes?", options: ["Psychology", "Geology", "Chemistry", "Astronomy"], answer: 0 } },
 { title: "Culture and Society", html: "<h3>Culture</h3><p>Culture is the shared beliefs, customs, values, and language of a group of people.</p><h3>Socialization</h3><p>Through family, school, and community, we learn the norms of our society.</p>" },
 { title: "Culture Quiz", quiz: { q: "What do we call the shared beliefs, customs, and values of a group?", options: ["Climate", "Economy", "Culture", "Geography"], answer: 2 } },
 { title: "Research in the Social Sciences", html: "<h3>Methods</h3><p>Researchers use surveys, interviews, and observation to understand human behavior.</p><h3>Ethics</h3><p>Studies must respect participants’ privacy and consent.</p>" }
]}
};
