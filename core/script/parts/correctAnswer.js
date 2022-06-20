function correctAnswer(score) {
    let resultHTML = "";

    if (score < 7) {
        resultHTML += `
        <h2 class="result__person"><i class="bi bi-person-badge"></i><i class="bi bi-person-workspace"></i> ${userName.value}</h2>
        <h3 class="result__title">Thanks, for your interest in my quiz!</h3>
        <h4 class="result__result">Result :</h4>
        <div class="result__scorenumber">
            <h4 class="first">${score} / 10</h4>
        </div>
        <div class="result__scoretext">
            <p class="first">You're not my friend's</p>
        </div>
        <button class="result__again btn-again">Again!</button>`
    } else if (score < 10) {
        resultHTML += `
        <h2 class="result__person"><i class="bi bi-person-badge"></i><i class="bi bi-person-workspace"></i> ${userName.value}</h2>
        <h3 class="result__title">Thanks, for your interest in my quiz!</h3>
        <h4 class="result__result">Result :</h4>
        <div class="result__scorenumber">
            <h4 class="second">${score} / 10</h4>
        </div>
        <div class="result__scoretext">
            <p class="second">You're my friend's</p>
        </div>
        <button class="result__again btn-again">Again!</button>`
    } else {
        resultHTML += `
        <h2 class="result__person"><i class="bi bi-person-badge"></i><i class="bi bi-person-workspace"></i> ${userName.value}</h2>
        <h3 class="result__title">Thanks, for your interest in my quiz!</h3>
        <h4 class="result__result">Result :</h4>
        <div class="result__scorenumber">
            <h4 class="third">${score} / 10</h4>
        </div>
        <div class="result__scoretext">
            <p class="third">You're my Best Friend's Forever!</p>
        </div>
        <button class="result__again btn-again">Again!</button>`
    } 

    resultContainer.innerHTML = resultHTML;


    let btnAgain = document.querySelector(".btn-again");
    btnAgain.addEventListener("click", function() {
        window.location.reload();
    });
};