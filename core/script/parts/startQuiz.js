function startQuiz() {
    let errorName = document.querySelector(".error-name")
    let letters =/^[a-z, A-Z, 0-9]*$/;


    if (userName.value.length == 0) {
        errorName.innerHTML = `<i class="bi bi-x-octagon-fill"></i> Error! name must not be empty.`;
    } else if (userName.value.length < 3 ) {
        errorName.innerHTML = `<i class="bi bi-x-octagon-fill"></i> Error! name must be longer than 2 characters.`;
    } else if  (userName.value.length > 16 ) {
        errorName.innerHTML = `<i class="bi bi-x-octagon-fill"></i> Error! name maximal 15 characters.`;
    } else if (!userName.value.match(letters)) {
        errorName.innerHTML = `<i class="bi bi-x-octagon-fill"></i> Error! name must be letters only.`;
    } else {
        landingContainer.style.display = "none";
        quizContainer.style.display = "flex";
    }
}