let era = ""
let x = ""

function choice() {
    const menu = document.getElementById("main_menu") 
    menu.style.display="none";
    console.log("True")
    console.log(era)
    const question_menu = document.getElementById(era)
    question_menu.style.display="flex";
    const menu_button = document.getElementById("menu_button")
    menu_button.style.display="flex";
    }

const Questions = [
    {question:"Jak nazywało się najstarsze pismo świata?", answer:"Pismo klinowe"},
    {question:"Jakie miasto było stolicą Babilonii?", answer:"Babilon"},
    {question: "Gdzie powstały pierwsze cywilizacje Bliskiego Wschodu?", answer: "W dolinach wielkich rzek: Tygrys-Eufrat oraz Nil"},
    {question: "Jak nazwano najżyzniejsze tereny Mezopotamii?", answer: "Żyzny Półksiężyc"}, 
    {question: "Który lud stworzył pismo klinowe?", answer: "Sumerowie"},
    {question: "Jak nazywały się świątynie Sumerów?", answer: "Zikkuraty"}, 
    {question: "Jaką zasadę prawną wprowadzał Kodeks Hammurabiego?", answer: "Zasadę talionu"}, 
    {question: "Na jakie grupy dzielono społeczeństwa państw mezopotamskich?", answer: "Obywatele i niewolnicy"}, 
    {question: "Które państwo stworzyło pierwsze imperium?", answer: "Asyria"},
]

function randomizer() {
    return Math.floor(Math.random() * Questions.length)
}

function toggle_answer() {
    const headers = document.getElementById("question")
    const odpowiedź_button = document.getElementById("odpowiedź_button")
    if (headers.textContent == x.question) {
        headers.textContent = x.answer;
    } else {
        headers.textContent = x.question;
    }

    if (odpowiedź_button.textContent == "Odpowiedź") {
        odpowiedź_button.textContent = "Pytanie"
    } else {
        odpowiedź_button.textContent = "Odpowiedź"
    }
}

function draw() {
    x = Questions[randomizer()]
    const headers = document.getElementById("question")
    headers.textContent = x.question 
    const odpowiedź_button = document.getElementById("odpowiedź_button")
    console.log(odpowiedź_button.textContent)
    if (odpowiedź_button.textContent == "Pytanie") {
        odpowiedź_button.textContent = "Odpowiedź"
}
}

function menu() {
    const menu = document.getElementById("main_menu")
    menu.style.display="flex";
    const question_menu = document.getElementById(era)
    question_menu.style.display="none";
    const menu_button = document.getElementById("menu_button")
    menu_button.style.display="none";
}
