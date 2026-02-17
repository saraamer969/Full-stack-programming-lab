// ================= QUIZ =================

let answer1 = "4";
let answer2 = "paris";
let answer3 = "javascript";

function checkQuiz() {
    let score = 0;

    let q1 = document.getElementById("q1").value;
    let q2 = document.getElementById("q2").value.toLowerCase();
    let q3 = document.getElementById("q3").value.toLowerCase();

    if (q1 === answer1) {
        score++;
    }

    if (q2 === answer2) {
        score++;
    }

    if (q3 === answer3) {
        score++;
    }

    let resultText = "";

    if (score === 3) {
        resultText = "Excellent! You got full marks!";
    } else if (score === 2) {
        resultText = "Good job! You scored 2.";
    } else {
        resultText = "Try again! Your score is " + score;
    }

    document.getElementById("result").innerHTML = "Your Score: " + score + "/3 <br>" + resultText;
}

function resetQuiz() {
    document.getElementById("q1").value = "";
    document.getElementById("q2").value = "";
    document.getElementById("q3").value = "";
    document.getElementById("result").innerHTML = "";
}


// ================= CALCULATOR =================

function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let resultBox = document.getElementById("calcResult");

    if (isNaN(num1) || isNaN(num2)) {
        resultBox.innerHTML = "Please enter valid numbers.";
        return;
    }

    let result;

    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "sub") {
        result = num1 - num2;
    } else if (operation === "mul") {
        result = num1 * num2;
    } else if (operation === "div") {
        if (num2 === 0) {
            resultBox.innerHTML = "Cannot divide by zero!";
            return;
        }
        result = num1 / num2;
    }

    resultBox.innerHTML = "Result: " + result;

    if (result >= 0) {
        resultBox.style.backgroundColor = "lightgreen";
    } else {
        resultBox.style.backgroundColor = "lightcoral";
    }
}
