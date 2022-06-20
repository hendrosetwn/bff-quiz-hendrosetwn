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
/* ##### JSON Static Object ##### */
let myQuestions = [
    {   
        number: "1",
        question: "Siapa nama lengkap asli hendrosetwn?",
        answer: {
            a: "Hendro Spiderman",
            b: "Hendro Sariawan",
            c: "Hendro Setiawan"
            },
            correctAnswer: "c"
        },
    {
        number: "2",
        question: "Di kota mana hendrosetwn dilahirkan?",
        answer: {
            a: "Brebes",
            b: "Tegal",
            c: "New York"
            },
            correctAnswer: "b"
        },
    {
        number: "3",
        question: "Tanggal berapa hendrosetwn ulang tahun?",
        answer: {
            a: "11 oktober",
            b: "10 oktober",
            c: "1 oktober",
            },
            correctAnswer: "c"
        },
    {
        number: "4",
        question: "Siapa nama pacar hendrosetwn?",
        answer: {
            a: "Umi Azizah",
            b: "Ully Amrina",
            c: "Upik Asikah"
            },
            correctAnswer: "b"
        },
    {
        number: "5",
        question: "Berapa 3 digit terakhir nomor telepon yang dimiliki hendrosetwn?",
        answer: {
            a: "313",
            b: "131",
            c: "331"
            },
            correctAnswer: "a"
        },
    {
        number: "6",
        question: "Berapa usia hendrosetwn jika ulang tahun di tahun 2022?",
        answer: {
            a: "29",
            b: "28",
            c: "27"
            },
            correctAnswer: "c"
        },
    {
        number: "7",
        question: "Apa riwayat pendidikan terakhir hendrosetwn?",
        answer: {
            a: "Sarjana",
            b: "SMA",
            c: "SMK"
            },
            correctAnswer: "c"
        },
    {
        number: "8",
        question: "Apa game favorit hendrosetwn yang sering dimainkan?",
        answer: {
            a: "Dinner Dash",
            b: "CS:GO",
            c: "DOTA2"
            },
            correctAnswer: "c"
        },
    {
        number: "9",
        question: "Apa game favorit hendrosetwn yang sering ditonton?",
        answer: {
            a: "Dinner Dash",
            b: "CS:GO",
            c: "DOTA2"
            },
            correctAnswer: "b"
        },
    {
        number: "10",
        question: "Bootcamp apakah yang hendro ikuti pada SALT Academy?",
        answer: {
            a: "Fullstack Developer",
            b: "Backend Developer",
            c: "Frontend Developer"
            },
            correctAnswer: "c"
        },
];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcnJlY3RBbnN3ZXIuanMiLCJkYXRhLmpzIiwic2NvcmluZ0Fuc3dlci5qcyIsInN0YXJ0UXVpei5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiX3V0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29ycmVjdEFuc3dlcihzY29yZSkge1xuICAgIGxldCByZXN1bHRIVE1MID0gXCJcIjtcblxuICAgIGlmIChzY29yZSA8IDcpIHtcbiAgICAgICAgcmVzdWx0SFRNTCArPSBgXG4gICAgICAgIDxoMiBjbGFzcz1cInJlc3VsdF9fcGVyc29uXCI+PGkgY2xhc3M9XCJiaSBiaS1wZXJzb24tYmFkZ2VcIj48L2k+PGkgY2xhc3M9XCJiaSBiaS1wZXJzb24td29ya3NwYWNlXCI+PC9pPiAke3VzZXJOYW1lLnZhbHVlfTwvaDI+XG4gICAgICAgIDxoMyBjbGFzcz1cInJlc3VsdF9fdGl0bGVcIj5UaGFua3MsIGZvciB5b3VyIGludGVyZXN0IGluIG15IHF1aXohPC9oMz5cbiAgICAgICAgPGg0IGNsYXNzPVwicmVzdWx0X19yZXN1bHRcIj5SZXN1bHQgOjwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHRfX3Njb3JlbnVtYmVyXCI+XG4gICAgICAgICAgICA8aDQgY2xhc3M9XCJmaXJzdFwiPiR7c2NvcmV9IC8gMTA8L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdF9fc2NvcmV0ZXh0XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImZpcnN0XCI+WW91J3JlIG5vdCBteSBmcmllbmQnczwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJyZXN1bHRfX2FnYWluIGJ0bi1hZ2FpblwiPkFnYWluITwvYnV0dG9uPmBcbiAgICB9IGVsc2UgaWYgKHNjb3JlIDwgMTApIHtcbiAgICAgICAgcmVzdWx0SFRNTCArPSBgXG4gICAgICAgIDxoMiBjbGFzcz1cInJlc3VsdF9fcGVyc29uXCI+PGkgY2xhc3M9XCJiaSBiaS1wZXJzb24tYmFkZ2VcIj48L2k+PGkgY2xhc3M9XCJiaSBiaS1wZXJzb24td29ya3NwYWNlXCI+PC9pPiAke3VzZXJOYW1lLnZhbHVlfTwvaDI+XG4gICAgICAgIDxoMyBjbGFzcz1cInJlc3VsdF9fdGl0bGVcIj5UaGFua3MsIGZvciB5b3VyIGludGVyZXN0IGluIG15IHF1aXohPC9oMz5cbiAgICAgICAgPGg0IGNsYXNzPVwicmVzdWx0X19yZXN1bHRcIj5SZXN1bHQgOjwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHRfX3Njb3JlbnVtYmVyXCI+XG4gICAgICAgICAgICA8aDQgY2xhc3M9XCJzZWNvbmRcIj4ke3Njb3JlfSAvIDEwPC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHRfX3Njb3JldGV4dFwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJzZWNvbmRcIj5Zb3UncmUgbXkgZnJpZW5kJ3M8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVzdWx0X19hZ2FpbiBidG4tYWdhaW5cIj5BZ2FpbiE8L2J1dHRvbj5gXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0SFRNTCArPSBgXG4gICAgICAgIDxoMiBjbGFzcz1cInJlc3VsdF9fcGVyc29uXCI+PGkgY2xhc3M9XCJiaSBiaS1wZXJzb24tYmFkZ2VcIj48L2k+PGkgY2xhc3M9XCJiaSBiaS1wZXJzb24td29ya3NwYWNlXCI+PC9pPiAke3VzZXJOYW1lLnZhbHVlfTwvaDI+XG4gICAgICAgIDxoMyBjbGFzcz1cInJlc3VsdF9fdGl0bGVcIj5UaGFua3MsIGZvciB5b3VyIGludGVyZXN0IGluIG15IHF1aXohPC9oMz5cbiAgICAgICAgPGg0IGNsYXNzPVwicmVzdWx0X19yZXN1bHRcIj5SZXN1bHQgOjwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHRfX3Njb3JlbnVtYmVyXCI+XG4gICAgICAgICAgICA8aDQgY2xhc3M9XCJ0aGlyZFwiPiR7c2NvcmV9IC8gMTA8L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdF9fc2NvcmV0ZXh0XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRoaXJkXCI+WW91J3JlIG15IEJlc3QgRnJpZW5kJ3MgRm9yZXZlciE8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVzdWx0X19hZ2FpbiBidG4tYWdhaW5cIj5BZ2FpbiE8L2J1dHRvbj5gXG4gICAgfSBcblxuICAgIHJlc3VsdENvbnRhaW5lci5pbm5lckhUTUwgPSByZXN1bHRIVE1MO1xuXG5cbiAgICBsZXQgYnRuQWdhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1hZ2FpblwiKTtcbiAgICBidG5BZ2Fpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcbn07IiwiLyogIyMjIyMgSlNPTiBTdGF0aWMgT2JqZWN0ICMjIyMjICovXG5sZXQgbXlRdWVzdGlvbnMgPSBbXG4gICAgeyAgIFxuICAgICAgICBudW1iZXI6IFwiMVwiLFxuICAgICAgICBxdWVzdGlvbjogXCJTaWFwYSBuYW1hIGxlbmdrYXAgYXNsaSBoZW5kcm9zZXR3bj9cIixcbiAgICAgICAgYW5zd2VyOiB7XG4gICAgICAgICAgICBhOiBcIkhlbmRybyBTcGlkZXJtYW5cIixcbiAgICAgICAgICAgIGI6IFwiSGVuZHJvIFNhcmlhd2FuXCIsXG4gICAgICAgICAgICBjOiBcIkhlbmRybyBTZXRpYXdhblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29ycmVjdEFuc3dlcjogXCJjXCJcbiAgICAgICAgfSxcbiAgICB7XG4gICAgICAgIG51bWJlcjogXCIyXCIsXG4gICAgICAgIHF1ZXN0aW9uOiBcIkRpIGtvdGEgbWFuYSBoZW5kcm9zZXR3biBkaWxhaGlya2FuP1wiLFxuICAgICAgICBhbnN3ZXI6IHtcbiAgICAgICAgICAgIGE6IFwiQnJlYmVzXCIsXG4gICAgICAgICAgICBiOiBcIlRlZ2FsXCIsXG4gICAgICAgICAgICBjOiBcIk5ldyBZb3JrXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb3JyZWN0QW5zd2VyOiBcImJcIlxuICAgICAgICB9LFxuICAgIHtcbiAgICAgICAgbnVtYmVyOiBcIjNcIixcbiAgICAgICAgcXVlc3Rpb246IFwiVGFuZ2dhbCBiZXJhcGEgaGVuZHJvc2V0d24gdWxhbmcgdGFodW4/XCIsXG4gICAgICAgIGFuc3dlcjoge1xuICAgICAgICAgICAgYTogXCIxMSBva3RvYmVyXCIsXG4gICAgICAgICAgICBiOiBcIjEwIG9rdG9iZXJcIixcbiAgICAgICAgICAgIGM6IFwiMSBva3RvYmVyXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29ycmVjdEFuc3dlcjogXCJjXCJcbiAgICAgICAgfSxcbiAgICB7XG4gICAgICAgIG51bWJlcjogXCI0XCIsXG4gICAgICAgIHF1ZXN0aW9uOiBcIlNpYXBhIG5hbWEgcGFjYXIgaGVuZHJvc2V0d24/XCIsXG4gICAgICAgIGFuc3dlcjoge1xuICAgICAgICAgICAgYTogXCJVbWkgQXppemFoXCIsXG4gICAgICAgICAgICBiOiBcIlVsbHkgQW1yaW5hXCIsXG4gICAgICAgICAgICBjOiBcIlVwaWsgQXNpa2FoXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb3JyZWN0QW5zd2VyOiBcImJcIlxuICAgICAgICB9LFxuICAgIHtcbiAgICAgICAgbnVtYmVyOiBcIjVcIixcbiAgICAgICAgcXVlc3Rpb246IFwiQmVyYXBhIDMgZGlnaXQgdGVyYWtoaXIgbm9tb3IgdGVsZXBvbiB5YW5nIGRpbWlsaWtpIGhlbmRyb3NldHduP1wiLFxuICAgICAgICBhbnN3ZXI6IHtcbiAgICAgICAgICAgIGE6IFwiMzEzXCIsXG4gICAgICAgICAgICBiOiBcIjEzMVwiLFxuICAgICAgICAgICAgYzogXCIzMzFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXI6IFwiYVwiXG4gICAgICAgIH0sXG4gICAge1xuICAgICAgICBudW1iZXI6IFwiNlwiLFxuICAgICAgICBxdWVzdGlvbjogXCJCZXJhcGEgdXNpYSBoZW5kcm9zZXR3biBqaWthIHVsYW5nIHRhaHVuIGRpIHRhaHVuIDIwMjI/XCIsXG4gICAgICAgIGFuc3dlcjoge1xuICAgICAgICAgICAgYTogXCIyOVwiLFxuICAgICAgICAgICAgYjogXCIyOFwiLFxuICAgICAgICAgICAgYzogXCIyN1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29ycmVjdEFuc3dlcjogXCJjXCJcbiAgICAgICAgfSxcbiAgICB7XG4gICAgICAgIG51bWJlcjogXCI3XCIsXG4gICAgICAgIHF1ZXN0aW9uOiBcIkFwYSByaXdheWF0IHBlbmRpZGlrYW4gdGVyYWtoaXIgaGVuZHJvc2V0d24/XCIsXG4gICAgICAgIGFuc3dlcjoge1xuICAgICAgICAgICAgYTogXCJTYXJqYW5hXCIsXG4gICAgICAgICAgICBiOiBcIlNNQVwiLFxuICAgICAgICAgICAgYzogXCJTTUtcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXI6IFwiY1wiXG4gICAgICAgIH0sXG4gICAge1xuICAgICAgICBudW1iZXI6IFwiOFwiLFxuICAgICAgICBxdWVzdGlvbjogXCJBcGEgZ2FtZSBmYXZvcml0IGhlbmRyb3NldHduIHlhbmcgc2VyaW5nIGRpbWFpbmthbj9cIixcbiAgICAgICAgYW5zd2VyOiB7XG4gICAgICAgICAgICBhOiBcIkRpbm5lciBEYXNoXCIsXG4gICAgICAgICAgICBiOiBcIkNTOkdPXCIsXG4gICAgICAgICAgICBjOiBcIkRPVEEyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb3JyZWN0QW5zd2VyOiBcImNcIlxuICAgICAgICB9LFxuICAgIHtcbiAgICAgICAgbnVtYmVyOiBcIjlcIixcbiAgICAgICAgcXVlc3Rpb246IFwiQXBhIGdhbWUgZmF2b3JpdCBoZW5kcm9zZXR3biB5YW5nIHNlcmluZyBkaXRvbnRvbj9cIixcbiAgICAgICAgYW5zd2VyOiB7XG4gICAgICAgICAgICBhOiBcIkRpbm5lciBEYXNoXCIsXG4gICAgICAgICAgICBiOiBcIkNTOkdPXCIsXG4gICAgICAgICAgICBjOiBcIkRPVEEyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb3JyZWN0QW5zd2VyOiBcImJcIlxuICAgICAgICB9LFxuICAgIHtcbiAgICAgICAgbnVtYmVyOiBcIjEwXCIsXG4gICAgICAgIHF1ZXN0aW9uOiBcIkJvb3RjYW1wIGFwYWthaCB5YW5nIGhlbmRybyBpa3V0aSBwYWRhIFNBTFQgQWNhZGVteT9cIixcbiAgICAgICAgYW5zd2VyOiB7XG4gICAgICAgICAgICBhOiBcIkZ1bGxzdGFjayBEZXZlbG9wZXJcIixcbiAgICAgICAgICAgIGI6IFwiQmFja2VuZCBEZXZlbG9wZXJcIixcbiAgICAgICAgICAgIGM6IFwiRnJvbnRlbmQgRGV2ZWxvcGVyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb3JyZWN0QW5zd2VyOiBcImNcIlxuICAgICAgICB9LFxuXTsiLCIvKiAjIyMjIyBMb29waW5nIFNjb3JpbmcgIyMjIyMgKi9cbmZ1bmN0aW9uIHNjb3JpbmdBbnN3ZXIoKSB7XG4gICAgbGV0IGFuc3dlcmVkID0gW11cbiAgICBsZXQgb3Blbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKVxuICAgIGxldCBjbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi54LW1vZGFsXCIpXG5cbiAgICBmb3IgKGk9MTsgaSA8PSBteVF1ZXN0aW9ucy5sZW5ndGg7IGkrKyl7ICBcbiAgICAgICAgbGV0IHVzZXJBbnN3ZXJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9cS0ke2l9XTpjaGVja2VkYCk7XG4gICAgICAgIGlmICh1c2VyQW5zd2VyZWQpe1xuICAgICAgICAgICAgYW5zd2VyZWQucHVzaCh1c2VyQW5zd2VyZWQudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmIChhbnN3ZXJlZC5sZW5ndGggPCBteVF1ZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgb3Blbk1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVpekNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHJlc3VsdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfSBcblxuICAgIGNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgb3Blbk1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KVxuXG4gICAgbGV0IHNjb3JlID0gMDsgICAgXG4gICAgYW5zd2VyZWQuZm9yRWFjaCgoYW5zd2VycywgaW5kZXgpID0+e1xuICAgICAgICBcbiAgICAgICAgaWYoYW5zd2VycyA9PT0gbXlRdWVzdGlvbnNbaW5kZXhdLmNvcnJlY3RBbnN3ZXIpe1xuICAgICAgICAgICAgc2NvcmUgKz0xO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb3JyZWN0QW5zd2VyKHNjb3JlKTtcbn0iLCJmdW5jdGlvbiBzdGFydFF1aXooKSB7XG4gICAgbGV0IGVycm9yTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3ItbmFtZVwiKVxuICAgIGxldCBsZXR0ZXJzID0vXlthLXosIEEtWiwgMC05XSokLztcblxuXG4gICAgaWYgKHVzZXJOYW1lLnZhbHVlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGVycm9yTmFtZS5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJiaSBiaS14LW9jdGFnb24tZmlsbFwiPjwvaT4gRXJyb3IhIG5hbWUgbXVzdCBub3QgYmUgZW1wdHkuYDtcbiAgICB9IGVsc2UgaWYgKHVzZXJOYW1lLnZhbHVlLmxlbmd0aCA8IDMgKSB7XG4gICAgICAgIGVycm9yTmFtZS5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJiaSBiaS14LW9jdGFnb24tZmlsbFwiPjwvaT4gRXJyb3IhIG5hbWUgbXVzdCBiZSBsb25nZXIgdGhhbiAyIGNoYXJhY3RlcnMuYDtcbiAgICB9IGVsc2UgaWYgICh1c2VyTmFtZS52YWx1ZS5sZW5ndGggPiAxNiApIHtcbiAgICAgICAgZXJyb3JOYW1lLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImJpIGJpLXgtb2N0YWdvbi1maWxsXCI+PC9pPiBFcnJvciEgbmFtZSBtYXhpbWFsIDE1IGNoYXJhY3RlcnMuYDtcbiAgICB9IGVsc2UgaWYgKCF1c2VyTmFtZS52YWx1ZS5tYXRjaChsZXR0ZXJzKSkge1xuICAgICAgICBlcnJvck5hbWUuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiYmkgYmkteC1vY3RhZ29uLWZpbGxcIj48L2k+IEVycm9yISBuYW1lIG11c3QgYmUgbGV0dGVycyBvbmx5LmA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGFuZGluZ0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHF1aXpDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbn0iXX0=