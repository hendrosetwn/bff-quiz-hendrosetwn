/* ##### Looping Scoring ##### */
function scoringAnswer() {
    let answered = []
    let openModal = document.querySelector(".modal")
    let closeModal = document.querySelector(".x-modal")

    for (i=1; i <= myQuestions.length; i++){  
        let userAnswered = document.querySelector(`input[name=q-${i}]:checked`);
        if (userAnswered){
            answered.push(userAnswered.value);
        }
    }
    
    if (answered.length < myQuestions.length) {
        openModal.style.display = "block";
    } else {
        quizContainer.style.display = "none";
        resultContainer.style.display = "flex";
    } 

    closeModal.addEventListener("click", () => {
        openModal.style.display = "none";
    })

    let score = 0;    
    answered.forEach((answers, index) =>{
        
        if(answers === myQuestions[index].correctAnswer){
            score +=1;
        }
    });

    correctAnswer(score);
}