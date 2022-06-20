/* ##### Variables Pages Section ##### */
const landingContainer = document.querySelector("#landing");
const resultContainer = document.querySelector("#result");
const quizContainer = document.querySelector("#quiz");


/* ##### Button Start Function ##### */
let btnStart = document.querySelector(".btn-start");
btnStart.addEventListener("click", function(){
    startQuiz();
})


/* ##### Looping Quiz Section ##### */
let quizHTML = "";

myQuestions.forEach((question, index) => {
    if (index === 0){
        quizHTML += `
        <div class="question-page">
            <div class="progress">
                <div class="progress__skills" style="width: ${question.number}0%"></div>
            </div>
            <div class="question-page__number">
                <h3>${question.number}<i class="bi bi-caret-right-fill"></i></h3>
            </div>
            <div class="question-page__question">
                <h2 class="question-page__question--text">${question.question}</h2>
                <div class="question-page__question--multiple">
                    <input type="radio" name="q-${question.number}" value="a" id="a${question.number}">
                    <label for="a${question.number}">${question.answer.a} <i class="bi bi-check-lg"></i></label>
                    <input type="radio" name="q-${question.number}" value="b" id="b${question.number}">
                    <label for="b${question.number}">${question.answer.b} <i class="bi bi-check-lg"></i></label>
                    <input type="radio" name="q-${question.number}" value="c" id="c${question.number}">  
                    <label for="c${question.number}">${question.answer.c} <i class="bi bi-check-lg"></i></label>
                </div>
                <div class="question-page__question--button">
                    <button class="btn-next">Next</button>
                </div>
            </div>
        </div>`
    } else if (index <= 8 ){
        quizHTML += `
        <div class="question-page" style="display:none">
            <div class="progress">
                <div class="progress__skills" style="width: ${question.number}0%"></div>
            </div>
            <div class="question-page__number">
                <h3>${question.number}<i class="bi bi-caret-right-fill"></i></h3>
            </div>
            <div class="question-page__question">
                <h2 class="question-page__question--text">${question.question}</h2>
                <div class="question-page__question--multiple">
                    <input type="radio" name="q-${question.number}" value="a" id="a${question.number}">
                    <label for="a${question.number}">${question.answer.a} <i class="bi bi-check-lg"></i></label>
                    <input type="radio" name="q-${question.number}" value="b" id="b${question.number}">
                    <label for="b${question.number}">${question.answer.b} <i class="bi bi-check-lg"></i></label>
                    <input type="radio" name="q-${question.number}" value="c" id="c${question.number}">  
                    <label for="c${question.number}">${question.answer.c} <i class="bi bi-check-lg"></i></label>
                </div>
                <div class="question-page__question--button">
                    <button class="btn-prev">Prev</button>
                    <button class="btn-next">Next</button>
                </div>
            </div>
        </div>`
    } else {
        quizHTML += `
        <div class="question-page" style="display:none">
            <div class="progress">
                <div class="progress__skills" style="width: ${question.number}0%"></div>
            </div>
            <div class="question-page__number">
                <h3>${question.number}<i class="bi bi-caret-right-fill"></i></h3>
            </div>
            <div class="question-page__question">
                <h2 class="question-page__question--text">${question.question}</h2>
                <div class="question-page__question--multiple">
                    <input type="radio" name="q-${question.number}" value="a" id="a${question.number}">
                    <label for="a${question.number}">${question.answer.a} <i class="bi bi-check-lg"></i></label>
                    <input type="radio" name="q-${question.number}" value="b" id="b${question.number}">
                    <label for="b${question.number}">${question.answer.b} <i class="bi bi-check-lg"></i></label>
                    <input type="radio" name="q-${question.number}" value="c" id="c${question.number}">  
                    <label for="c${question.number}">${question.answer.c} <i class="bi bi-check-lg"></i></label>
                </div>
                <div class="question-page__question--button">
                    <button class="btn-prev">Prev</button>
                    <button class="btn-finish">Finish</button>
                </div>
            </div>

            <div class="modal">
                <div class="modal__content">
                    <h2 class="modal__content--title">ATTENTION !</h2>
                    <p class="modal__content--attention">"There is an answer that you have not checked/filled in the question. Close this attention and click PREV button for back to previous question."</p>
                    <i class="bi bi-x-square-fill modal__content--close x-modal"></i>
                </div>
            </div>
        </div>`
    }
});

quizContainer.innerHTML = quizHTML;


/* ##### Button Next Function ##### */
let btnNext = document.querySelectorAll(".btn-next");
btnNext.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let quizes = e.target.parentElement.parentElement.parentElement
        quizes.setAttribute("style", "display:none;")

        let quizesSibling = quizes.nextElementSibling
        quizesSibling.removeAttribute("style")
    })
})


/* ##### Button Previous Function ##### */
let btnPrev = document.querySelectorAll(".btn-prev");
btnPrev.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let quizes = e.target.parentElement.parentElement.parentElement
        quizes.setAttribute("style", "display:none;")

        let quizesSibling = quizes.previousElementSibling
        quizesSibling.removeAttribute("style")
    })
})

/* ##### Button Finish Function ##### */
let btnFinish = document.querySelector(".btn-finish");
btnFinish.addEventListener("click", function() {
    scoringAnswer();
});


/* ##### Result Section ##### */
let userName = document.querySelector(".user-name");