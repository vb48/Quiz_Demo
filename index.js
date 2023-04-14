const restartBtn = document.getElementById("restart");
// const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("option");
const falseBtn = document.getElementById("False");
const main = document.getElementById("main");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text")
const start = document.getElementById('starter')
var i = 0
var n = 8

var options;

let NAMES = []

let currentQuestion = 0;
let score = 0;

const bgImages = [
    "https://images.typeform.com/images/pcfXCApgxFPY/image/default-firstframe.png"
    ,
    "https://images.typeform.com/images/pXmTPHsEf3js/image/default-firstframe.png"
    ,
    "https://images.typeform.com/images/ZFcfXqw66a6a/image/default-firstframe.png"
    ,
    "https://images.typeform.com/images/WhMtH4UNZcfW/image/default-firstframe.png"
]


const questions = [
   {
       question: "OYO started as a/an: *",
       answers: [
        "A. Aggregator"
        ,
        "B. Hotel Chain"
        ,
        "C. Booking Platform"
        ,
        "D. GDS"
       ]
   },
   {
       question: "Let's now think about what will be important to you next time you travel internationally for one night or more.  Which one of the below will be the most important to you on your next trip?This question is required. *",
       answers: [
        "A. Enjoying something I've planned myself"
,
        "B. The activities I do"
,
        "C. The memories I make"
        ,
        "D. The environmental impact I have"
       ]
   },
   {

       question: "In a moment, we're going to ask you about what trips in 2033 could be like. This will include telling you about what about 2033 will be different compared to today. Before we tell you anything, how different do you think trips in 2033 will be compared to trips today?This question is required. ",
       answers: [
        "A. Very different to what it is today. More differences than similarities"
        ,
        "B. Noticeably different. An equal number of differences and similarities"
        ,
        "C. The opposite of what it is today. Almost no similarities"
        ,
        "D. The same as it is today. Almost no differences"
       ]
   },

   {

    question: `In 2033 there will be new possibilities for how you can travel! Some of these are listed below.
    Please select what excites you the most.This question is required. *`,
    answers: [
        "A. AI will be able to help me plan my trips"
        ,
        "B. There will be new forms of transit and accommodation available"
        ,
        "C. Being able to remember trips in VR"
        ,
        "D. Being able to travel in more environmentally friendly ways"
    ]
},
{

    question:'OTA (Open Travel Alliance) helps the hospitality domain by providing: *',
    answers: [
            "A. Standardized codes (For room type, facilities, etc.)"
            ,
            "B. Standardized message formats"
            ,
            "C. Both"
            ,
            "D. None"
    ]
},
{
    question:"Which is the flagship Amadeus product used for the sales and catering industry?",
    answers:[
        "A. Delphe",
        "B. Cvent" ,
        "C. Synxis",
        "D. Oracle "
    ]
},
{
    question: "When was the first hotel in India established?",
    answers:[ 1899, 1901, 1890, 1909]
},
{
    question: "Which of these started as traditional brick and mortar travel agency *",
    answers:[
        "A. Cox and Kings", 
        "B. Expedia ",
        "C. MakeMyTrip ",
        "D. Booking.com (http://booking.com)"
    ]
},
{
    question: "What does IATA stand for? *",
    answers:[
        "A. International Air Transport Association", 
        "B. Indian Air Transport Association",
        "C. International Agency Travel Association ",
        "D. None of the above"
    ]
}
]

// nextBtn.addEventListener("click",next);
// submitBtn.addEventListener("click",submit);

function starter(){
    main.style.display = 'flex'
    start.style.display = 'none'
    init();
    // next1()
    console.log(questions)
}

const userData = [];
let namer = document.getElementById('name').value
userData.push(namer)

let count = 0
let questionTxt = document.getElementById('question-text');

function init(){
    questionTxt.innerHTML = questions[count]?.question;
    optionsDisplay(questions[count]?.answers);
}
function optionsDisplay(array){
    
    for (let i = 0; i < array?.length; i++) {
        // const element = array[i];
    options = document.createElement("div");
      options.id = 'sel'
      options.classList.add("animate__flash");
      options.innerHTML = array[i];
      let optionsDiv = document.createElement("div");
      optionsDiv.id = "optionsDiv"
      optionsDiv.appendChild(options)
    document.getElementById("options").appendChild(optionsDiv)
}
}


function next1(){
   document.getElementById('q1').style.display = 'flex'
   document.getElementById('question-text').innerHTML = questions[0].question

    document.getElementById('option1').innerHTML = questions[0].answers[0]
    document.getElementById('option2').innerHTML = questions[0].answers[1]
    document.getElementById('option3').innerHTML = questions[0].answers[2]
    document.getElementById('option4').innerHTML = questions[0].answers[3]

    
//    document.getElementById('q2').style.display = 'flex'
}


function next2(){
    // document.getElementById("right").style.backgroundImage.slice(4, -1).replace(/["']/g, bgImages[count % 4]);
    // document.getElementById('q1').style.display = 'none'
    // document.getElementById('q2').style.display = 'flex'
    // document.getElementById('question-text').innerHTML = questions[1].question

    // document.getElementById('option1').innerHTML = questions[1].answers[0]
    // document.getElementById('option2').innerHTML = questions[1].answers[1]
    // document.getElementById('option3').innerHTML = questions[1].answers[2]
    // document.getElementById('option4').innerHTML = questions[1].answers[3]
    if(count < 9){
        count += 1;
    console.log(count);

        questionTxt.innerHTML = questions[count]?.question;
        document.getElementById("options").innerHTML = ' '
        optionsDisplay(questions[count]?.answers);
    }
    if(count == 9){
        // console.log(count , questions.length);
        document.getElementById("submit").style.display = 'block'
        document.getElementById("q1").style.display = 'none'
        document.getElementById("right").style.display = 'none'
        let g = document.getElementById("grats")
        g.style.display = "flex"
        let p = document.getElementById("grats1")
        p.innerHTML ="Congratulations on submitting the Survey!"
    }
 }

 function refresh(){
    location.reload()
 }

 function submit() {
    // prevBtn.classList.add("hide");
    document.getElementById('right').style.display = 'none'
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    // trueBtn.classList.add("hide");
    // falseBtn.classList.add("hide");
    questionText.innerHTML ="Congratulations on submitting the Survey!"
}