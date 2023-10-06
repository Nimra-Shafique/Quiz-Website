const quizData = [
    {
        question: "Which is not a feature of OOP in general definitions?",
        options: [
            "Efficient Code",
            "Code reusability",
            "Modularity",
            "Duplicate/Redundant data",

        ],
        correct:3, 
    },
    {
        question: "Which is the correct syntax of inheritance?",
        options: [
            "class base_classname :access derived_classname{ /*define class body*/ };",
            "class derived_classname : access base_classname{ /*define class body*/ };",
            "class derived_classname : base_classname{ /*define class body*/ };",
            "class base_classname : derived_classname{ /*define class body*/ };",

        ],
        correct:1, 
    },
    {
        question: "What is an abstraction in object-oriented programming?",
        options: [
            "Hiding the implementation and showing only the features",
            "Hiding the important data",
            "Hiding the implementation",
            "Showing the important data",

        ],
        correct:0, 
    },
    {
        question: " In which access should a constructor be defined, so that object of the class can be created in any function?",
        options: [
            " Any access specifier will work",
            " Private",
            "Public",
            "Protected",

        ],
        correct:2, 
    },
    {
        question: "Which feature of OOP reduces the use of nested classes?",
        options: [
            "Inheritance",
            "Binding",
            " Abstraction",
            "Encapsulation",

        ],
        correct:0, 
    },
];

const quiz = document.querySelector("#quiz");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
document.querySelectorAll("#question, .option_1, .option_2, .option_3, .option_4");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;


const loadQuiz = () => {
    const {question, options} = quizData[currentQuiz];
    console.log(options);

   

    questionElm.innerText = `${currentQuiz +1}:${question}`;
    options.forEach((curOption, index) =>window[`option_${index +1}`].innerText = curOption);
};

loadQuiz();

const getSelectedOption = () => {
   /* let ans_index;
    answerElm.forEach((curOption, index) => {
        if(curOption.checked){
            ans_index = index;
        }
    });
    return ans_index;*/
    
let answerElement = Array.from(answerElm);
return answerElement.findIndex((curElem) => curElem.checked);
};


const deselectedAnswers= () => {
   return answerElm.forEach((curElm) => curElm.checked = false);
}

submitBtn.addEventListener('click', () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if(selectedOptionIndex === quizData[currentQuiz].correct){
        score = score+1;
    }

    currentQuiz++;
    if(currentQuiz<quizData.length){
        deselectedAnswers();
        loadQuiz();
    }else {
        quiz.innerHTML = `<div class="result">
        <h2> Your Score: ${score}/${quizData.length} Correct Answers</h2>
        <button class="reload-button" onclick = "location.reload()">Play Again</button>
        </div>`;
    }
});