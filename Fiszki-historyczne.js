let era = ""
let x = ""
let sel_questions = []

function choice() {
    sel_questions = []
    for (let i = 0; i < Questions.length; i++) {
        sel_questions.push(Questions[i])
    }
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
    {question: "Kto był najważniejszym królem państwa nowobabilońskiego?", answer: "Nabuchodonozor II."},
    {question: "Jaką rolę pełnił Nil w Egipcie?", answer: "Umożliwiał rolnictwo dzięki regularnym wylewom."},
    {question: "Jaki obiekt naturalny stanowił południową granicę Egiptu Górnego?", answer: "I katarakta."},
    {question: "Jak nazywano proces konserwacji ciała po śmierci w Egipcie?", answer: "Mumifikacja."},
    {question: "Dlaczego Egipcjanie mumifikowali zwłoki?", answer: "Wierzyli w życie pozagrobowe."},
    {question: "Jakie pismo stosowali Egipcjanie?", answer: "Pismo hieroglificzne."},
    {question: "Kto był egipskim bogiem Słońca?", answer: "Re."},
    {question: "Który faraon próbował wprowadzić religię monoteistyczną w Egipcie?", answer: "Amenhotep IV (Echnaton)."},
    {question: "W jakiej bitwie Egipcjanie starli się z Hetytami w Syrii?", answer: "Bitwa pod Kadesz."},
    {question: "Jaką formę miały grobowce faraonów?", answer: "Piramidy."},
    {question: "Który lud z Bliskiego Wschodu praktykował monoteizm?", answer: "Hebrajczycy."},
    {question: "Jakie miasto było religijnym centrum Izraela?", answer: "Jerozolima."},
    {question: "Jak nazywa się najważniejsza część Biblii dla Hebrajczyków?", answer: "Tora."},
    {question: "Kto był przywódcą Hebrajczyków, który wyprowadził ich z Egiptu?", answer: "Mojżesz."},
    {question: "Co otrzymał Mojżesz na górze Synaj?", answer: "Dekalog."},
    {question: "Na jakie części podzielono Królestwo Izraela?", answer: "Izrael i Juda."},
    {question: "Jak nazywały się prowincje w imperium perskim?", answer: "Satrapie."},
    {question: "Który król perski podbił Babilonię?", answer: "Cyrus II Wielki."},
    {question: "Który król perski zreformował administrację państwa?", answer: "Dariusz I Wielki."},
    {question: "Która cywilizacja stworzyła pismo alfabetyczne?", answer: "Fenicjanie."},
    {question: "Jak nazywała się największa kolonia fenicka?", answer: "Kartagina."},
    {question: "Jak nazywała się najstarsza kultura grecka?", answer: "Kultura minojska."},
    {question: "Jakie miasto było siedzibą władców Krety?", answer: "Knossos."},
    {question: "Jak nazywały się greckie miasta-państwa?", answer: "Polis."},
    {question: "W którym wieku Grecy zaczęli używać pisma alfabetycznego?", answer: "W VIII w. p.n.e."},
    {question: "Jak nazywali się ciężkozbrojni piechurzy w Grecji?", answer: "Hoplici."},
    {question: "Czym była falanga?", answer: "Szykiem bojowym hoplitów."},
    {question: "Jakie obszary skolonizowali Grecy?", answer: "Baseny Morza Śródziemnego oraz Morza Czarnego."},
    {question: "Jakie były dwa najważniejsze polis greckie?", answer: "Ateny i Sparta."},
    {question: "Jaki ustrój panował w Sparcie?", answer: "Oligarchia."},
    {question: "Kto był twórcą ustroju Sparty?", answer: "Likurg."},
    {question: "Jakie grupy społeczne istniały w Sparcie?", answer: "Spartiaci, periojkowie, heloci."},
    {question: "Na czym polegało wychowanie spartańskie?", answer: "Na surowej dyscyplinie i szkoleniu wojskowym."},
    {question: "Kto był twórcą demokracji ateńskiej?", answer: "Klejstenes."},
    {question: "Jakie reformy przeprowadził Solon?", answer: "Zniósł niewolę za długi i wprowadził cenzus majątkowy."},
    {question: "Czym było zgromadzenie ludowe w Atenach?", answer: "Najwyższym organem władzy obywateli."},
    {question: "Kto miał prawa obywatelskie w Atenach?", answer: "Wolni mężczyźni urodzeni z ateńskich rodziców."},
    {question: "Czym był ostracyzm?", answer: "Głosowaniem na wygnanie polityczne."},
    {question: "W którym roku zaczęły się wojny grecko-perskie?", answer: "499 p.n.e."},
    {question: "Jaki był rezultat bitwy pod Maratonem?", answer: "Zwycięstwo Ateńczyków nad Persami (490 p.n.e.)."},
    {question: "Jaki był rezultat bitwy pod Termopilami?", answer: "Wygrana Persów po bohaterskiej obronie Greków."},
    {question: "Czym był Związek Morski?", answer: "Sojuszem polis pod przewodnictwem Aten."},
    {question: "Do czego doprowadził konflikt Aten i Sparty (w 431 p.n.e.)?", answer: "Do wojny peloponeskiej."},
    {question: "Jaki był główny skutek wojny peloponeskiej?", answer: "Upadek potęgi Aten."},
    {question: "Kto zjednoczył Grecję w IV w. p.n.e.?", answer: "Filip II Macedoński."},
    {question: "Jakie obszary podbił Aleksander Wielki?", answer: "Grecję, Mezopotamię, Egipt, Persję."},
    {question: "Czym był hellenizm?", answer: "Syntezą kultury greckiej i wschodniej."},
    {question: "Kto był twórcą filozofii greckiej?", answer: "Sokrates, Platon, Arystoteles."},
    {question: "Czym były igrzyska olimpijskie?", answer: "Zawodami sportowymi ku czci Zeusa."},
    {question: "Gdzie odbywały się igrzyska olimpijskie?", answer: "W Olimpii."},
    {question: "Kto ostatecznie podbił Grecję w 146 p.n.e., kończąc jej niezależność?", answer: "Rzymianie."},
    {question: "Według tradycji, kiedy założono Rzym?", answer: "753 r. p.n.e."},
    {question: "Jakie były trzy główne okresy dziejów Rzymu?", answer: "Monarchia, republika, cesarstwo."},
    {question: "Kto według legendy założył Rzym?", answer: "Romulus."},
    {question: "Jak nazywał się organ doradczy króla, a później republiki?", answer: "Senat."},
    {question: "Jakie grupy społeczne istniały w republice rzymskiej?", answer: "Patrycjusze i plebejusze."},
    {question: "Czym były zgromadzenia ludowe w Rzymie?", answer: "Organami ustawodawczymi obywateli."},
    {question: "Kim byli trybuni ludowi?", answer: "Obrońcami interesów plebejuszy."},
    {question: "Czym było prawo XII tablic?", answer: "Najstarszym spisanym prawem rzymskim."},
    {question: "Na czym polegał ustrój republiki rzymskiej?", answer: "Podziale władzy między urzędników i senat."},
    {question: "Jaki był najważniejszy urząd w republice rzymskiej?", answer: "Konsul."},
    {question: "Czym były wojny punickie?", answer: "Wojnami Rzymu z Kartaginą."},
    {question: "Jaki był główny obszar działań wojennych w I wojnie punickiej?", answer: "Sycylia."},
    {question: "W jakich latach trwała II wojna punicka?", answer: "218-201 p.n.e."},
    {question: "W jakiej bitwie Hannibal zniszczył wojska Rzymian w 216 p.n.e.?", answer: "W bitwie pod Kannami."},
    {question: "Jaki był główny skutek wojen punickich?", answer: "Dominacja Rzymu w basenie Morza Śródziemnego."},
    {question: "Kiedy Rzym podbił Kartaginę?", answer: "W 146 p.n.e."},
    {question: "Czym było powstanie Spartakusa?", answer: "Rebelią niewolników rzymskich."},
    {question: "Kim byli bracia Grakchowie?", answer: "Reformatorzy społeczni w Rzymie."},
    {question: "Kto tworzył I triumwirat?", answer: "Juliusz Cezar, Gnejusz Pompejusz i Marek Krassus."},
    {question: "Kiedy zamordowano Juliusza Cezara?", answer: "W 44 p.n.e."},
    {question: "Kto tworzył II triumwirat?", answer: "Marek Antoniusz, Oktawian i Lepidus."},
    {question: "Czym był pryncypat?", answer: "Forma cesarstwa z zachowaniem pozorów republiki."},
    {question: "Kto był pierwszym cesarzem Rzymu?", answer: "Oktawian August."},
    {question: "Czym był dominat?", answer: "Autokratyczną formą cesarstwa."},
    {question: "Kto utworzył tetrarchię w Rzymie?", answer: "Dioklecjan."},
    {question: "Kto zalegalizował chrześcijaństwo?", answer: "Konstantyn Wielki."},
    {question: "Czym był edykt mediolański?", answer: "Aktem tolerancji religijnej (313 r.)."},
    {question: "Kiedy nastąpił podział Cesarstwa Rzymskiego?", answer: "395 r."},
    {question: "Kiedy upadło Cesarstwo Zachodniorzymskie?", answer: "476 r."},
    {question: "Jakie były przyczyny upadku Rzymu?", answer: "Kryzys wewnętrzny i najazdy barbarzyńców."},
]

function randomizer() {
    return Math.floor(Math.random() * sel_questions.length)
}

function toggle_answer() {
    if (sel_questions.length <= 1) {

    } else {
    console.log(x)
    let sel_question = sel_questions[x]
    console.log("Wybrane pytanie: ", sel_question)
    const headers = document.getElementById("question")
    const odpowiedź_button = document.getElementById("odpowiedź_button")
    if (headers.textContent == sel_question.question) {
        headers.textContent = sel_question.answer;
    } else {
        headers.textContent = sel_question.question;
    }

    if (odpowiedź_button.textContent == "Odpowiedź") {
        odpowiedź_button.textContent = "Pytanie"
    } else {
        odpowiedź_button.textContent = "Odpowiedź"
    }
}
}

function draw() {
    sel_questions.splice(x, 1)
    const headers = document.getElementById("question")
    if (sel_questions.length <= 1) {
        headers.textContent = "Zobaczyłeś wszystkie pytania z tej epoki"
    } else {
        x = randomizer()
        console.log("Wylosowane pytanie:", x)
        let sel_question = sel_questions[x] 
        headers.textContent = sel_question.question 
        const odpowiedź_button = document.getElementById("odpowiedź_button")
        console.log(odpowiedź_button.textContent)
        if (odpowiedź_button.textContent == "Pytanie") {
            odpowiedź_button.textContent = "Odpowiedź"
        }
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





