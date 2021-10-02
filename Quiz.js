// Questions
const Questions = [
    {
        Q:'Question: whats is Javascript?',
        a: 'prgramming Language',
        b: 'Human Langauge',
        c: 'Nothing',
        d:'ALL of Above',
        ans:'exampleRadios1',
    },
    {
        Q:'Who is the founder Of Pakistan?',
        a: 'Liaqat Ali Khan',
        b: 'Quid e Azam',
        c: 'Imran Khan',
        d: 'Amir Khan',
        ans:'exampleRadios2',
    },
    {
        Q:'This Developer is superb?',
        a: 'Exteamly',
        b: 'Not So',
        c: 'Intermediat',
        d:'poor',
        ans:'exampleRadios3',
    },
    {
        Q:'QUIZ App Look GOOD?',
        a: 'Yes',
        b: 'Midum',
        c: 'Superb',
        d:'Excellent',
        ans:'exampleRadios4',
    },
]
 // Questions

//  calling from html
let question = document.querySelector('#Question');
let option1 = document.querySelector('.form-check-label1');
let option2 = document.querySelector('.form-check-label2')
let option3 = document.querySelector('.form-check-label3')
let option4 = document.querySelector('.form-check-label4')
let submit = document.querySelector('#btn');
let answers = document.querySelectorAll('.form-check-input');
let scored = document.querySelector('#score');
let bar = document.querySelector('#success');
let warning = document.querySelector('#warning');
let replay = document.querySelector('.btn');
let getter = document.querySelector('.plus');
let next = document.querySelector('#king');
let fixedbar = document.querySelector('#fixed');
let back = document.querySelector("#Queen");

//  calling from html
console.log(next);

// Counters
questionCount = 0;
score = 0;
wrong = 0;
// Counters

// load Questions
let load  = () => {
   const questionlist = Questions[questionCount];
    question.innerHTML = questionlist.Q;
    option1.innerHTML = questionlist.a;
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;
}
load()
// load Questions

// Getting Answers
let getAnswer = () => {
    let getAnswerId;
    answers.forEach(element => {
        if(element.checked){
            getAnswerId = element.id;
        }    
    });
    return getAnswerId;
}
// Getting Answers

// Deselecting
const deselectAll = () =>{
    answers.forEach( element => element.checked = false)
};
deselectAll();
// Deselecting

// Functions on Submiting
submit.addEventListener('click', () => {
    
    fixedbar.style.color = 'green';
    const checkAnswer = getAnswer() //getting answers
    console.log(checkAnswer);
    
    // comparing answers
    if(checkAnswer === Questions[questionCount].ans){
            score++;
            bar.innerHTML = `correct answers ${score*25}%`
            bar.style.width = `${score*25}%`
            console.log(score);
    }else{
        wrong++
        warning.innerHTML = `wrong answers ${wrong*25}%`
        warning.style.width = `${wrong*25}%`
    }

    // deselectAll
    const deselectAll = () =>{
        answers.forEach( element => element.checked = false)
    };
    deselectAll();

    // increasing questioncount
    questionCount++;
    console.log(questionCount);

    // end question
    if(questionCount < Questions.length){
        load() //loading next question
    }else{
        next.style.visibility = 'hidden'
        scored.style.visibility = 'visible';
        replay.style.visibility = 'visible';
        getter.innerHTML = `Score: ${score}/4<span style='font-size:30px;'>&#9996;</span>`; //showing results
    }
    
})

//function performing on next
next.addEventListener('click', () =>{
    
    fixedbar.style.color = 'green';
    const checkAnswer = getAnswer()
    console.log(checkAnswer);
    
    if(checkAnswer === Questions[questionCount].ans){
            score++;
            bar.innerHTML = `correct answers ${score*25}%`
            bar.style.width = `${score*25}%`
            console.log(score);
    }else{
        wrong++
        warning.innerHTML = `wrong answers ${wrong*25}%`
        warning.style.width = `${wrong*25}%`
    }

    const deselectAll = () =>{
        answers.forEach( element => element.checked = false)
    };
    deselectAll();

    questionCount++;
    console.log(questionCount);

    if(questionCount < Questions.length){
        load()
    }else{
        next.style.visibility = 'hidden'
        scored.style.visibility = 'visible';
        replay.style.visibility = 'visible';
        getter.innerHTML = `Score: ${score}/4<span style='font-size:30px;'>&#9996;</span>`;
    }
})
