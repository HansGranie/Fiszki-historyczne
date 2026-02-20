let era = ""
let x = ""
let sel_questions = ["1"]

function choice() {
    sel_questions = ["1"]
    for (let i = 0; i < Questions.length; i++) {
        if (Questions[i].era == era) {
        sel_questions.push(Questions[i])
        }
    }
    const menu = document.getElementById("main_menu") 
    menu.style.display="none";
    const question_menu = document.getElementById("starożytność")
    question_menu.style.display="flex";
    const menu_button = document.getElementById("menu_button")
    menu_button.style.display="flex";
    const erlabel = document.getElementById("era_label")
    erlabel.textContent = era.charAt(0).toUpperCase() + era.slice(1)
}

const Questions = [
    {question:"Jak nazywało się najstarsze pismo świata?", answer:"Pismo klinowe", era:"starożytność"},
    {question:"Jakie miasto było stolicą Babilonii?", answer:"Babilon", era:"starożytność"},
    {question: "Gdzie powstały pierwsze cywilizacje Bliskiego Wschodu?", answer: "W dolinach wielkich rzek: Tygrys-Eufrat oraz Nil", era:"starożytność"},
    {question: "Jak nazwano najżyzniejsze tereny Mezopotamii?", answer: "Żyzny Półksiężyc", era:"starożytność"}, 
    {question: "Który lud stworzył pismo klinowe?", answer: "Sumerowie", era:"starożytność"},
    {question: "Jak nazywały się świątynie Sumerów?", answer: "Zikkuraty", era:"starożytność"}, 
    {question: "Jaką zasadę prawną wprowadzał Kodeks Hammurabiego?", answer: "Zasadę talionu", era:"starożytność"}, 
    {question: "Na jakie grupy dzielono społeczeństwa państw mezopotamskich?", answer: "Obywatele i niewolnicy", era:"starożytność"}, 
    {question: "Które państwo stworzyło pierwsze imperium?", answer: "Asyria", era:"starożytność"},
    {question: "Kto był najważniejszym królem państwa nowobabilońskiego?", answer: "Nabuchodonozor II.", era:"starożytność"},
    {question: "Jaką rolę pełnił Nil w Egipcie?", answer: "Umożliwiał rolnictwo dzięki regularnym wylewom.", era:"starożytność"},
    {question: "Jaki obiekt naturalny stanowił południową granicę Egiptu Górnego?", answer: "I katarakta.", era:"starożytność"},
    {question: "Jak nazywano proces konserwacji ciała po śmierci w Egipcie?", answer: "Mumifikacja.", era:"starożytność"},
    {question: "Dlaczego Egipcjanie mumifikowali zwłoki?", answer: "Wierzyli w życie pozagrobowe.", era:"starożytność"},
    {question: "Jakie pismo stosowali Egipcjanie?", answer: "Pismo hieroglificzne.", era:"starożytność"},
    {question: "Kto był egipskim bogiem Słońca?", answer: "Re.", era:"starożytność"},
    {question: "Który faraon próbował wprowadzić religię monoteistyczną w Egipcie?", answer: "Amenhotep IV (Echnaton).", era:"starożytność"},
    {question: "W jakiej bitwie Egipcjanie starli się z Hetytami w Syrii?", answer: "Bitwa pod Kadesz.", era:"starożytność"},
    {question: "Jaką formę miały grobowce faraonów?", answer: "Piramidy.", era:"starożytność"},
    {question: "Który lud z Bliskiego Wschodu praktykował monoteizm?", answer: "Hebrajczycy.", era:"starożytność"},
    {question: "Jakie miasto było religijnym centrum Izraela?", answer: "Jerozolima.", era:"starożytność"},
    {question: "Jak nazywa się najważniejsza część Biblii dla Hebrajczyków?", answer: "Tora.", era:"starożytność"},
    {question: "Kto był przywódcą Hebrajczyków, który wyprowadził ich z Egiptu?", answer: "Mojżesz.", era:"starożytność"},
    {question: "Co otrzymał Mojżesz na górze Synaj?", answer: "Dekalog.", era:"starożytność"},
    {question: "Na jakie części podzielono Królestwo Izraela?", answer: "Izrael i Juda.", era:"starożytność"},
    {question: "Jak nazywały się prowincje w imperium perskim?", answer: "Satrapie.", era:"starożytność"},
    {question: "Który król perski podbił Babilonię?", answer: "Cyrus II Wielki.", era:"starożytność"},
    {question: "Który król perski zreformował administrację państwa?", answer: "Dariusz I Wielki.", era:"starożytność"},
    {question: "Która cywilizacja stworzyła pismo alfabetyczne?", answer: "Fenicjanie.", era:"starożytność"},
    {question: "Jak nazywała się największa kolonia fenicka?", answer: "Kartagina.", era:"starożytność"},
    {question: "Jak nazywała się najstarsza kultura grecka?", answer: "Kultura minojska.", era:"starożytność"},
    {question: "Jakie miasto było siedzibą władców Krety?", answer: "Knossos.", era:"starożytność"},
    {question: "Jak nazywały się greckie miasta-państwa?", answer: "Polis.", era:"starożytność"},
    {question: "W którym wieku Grecy zaczęli używać pisma alfabetycznego?", answer: "W VIII w. p.n.e.", era:"starożytność"},
    {question: "Jak nazywali się ciężkozbrojni piechurzy w Grecji?", answer: "Hoplici.", era:"starożytność"},
    {question: "Czym była falanga?", answer: "Szykiem bojowym hoplitów.", era:"starożytność"},
    {question: "Jakie obszary skolonizowali Grecy?", answer: "Baseny Morza Śródziemnego oraz Morza Czarnego.", era:"starożytność"},
    {question: "Jakie były dwa najważniejsze polis greckie?", answer: "Ateny i Sparta.", era:"starożytność"},
    {question: "Jaki ustrój panował w Sparcie?", answer: "Oligarchia.", era:"starożytność"},
    {question: "Kto był twórcą ustroju Sparty?", answer: "Likurg.", era:"starożytność"},
    {question: "Jakie grupy społeczne istniały w Sparcie?", answer: "Spartiaci, periojkowie, heloci.", era:"starożytność"},
    {question: "Na czym polegało wychowanie spartańskie?", answer: "Na surowej dyscyplinie i szkoleniu wojskowym.", era:"starożytność"},
    {question: "Kto był twórcą demokracji ateńskiej?", answer: "Klejstenes.", era:"starożytność"},
    {question: "Jakie reformy przeprowadził Solon?", answer: "Zniósł niewolę za długi i wprowadził cenzus majątkowy.", era:"starożytność"},
    {question: "Czym było zgromadzenie ludowe w Atenach?", answer: "Najwyższym organem władzy obywateli.", era:"starożytność"},
    {question: "Kto miał prawa obywatelskie w Atenach?", answer: "Wolni mężczyźni urodzeni z ateńskich rodziców.", era:"starożytność"},
    {question: "Czym był ostracyzm?", answer: "Głosowaniem na wygnanie polityczne.", era:"starożytność"},
    {question: "W którym roku zaczęły się wojny grecko-perskie?", answer: "499 p.n.e.", era:"starożytność"},
    {question: "Jaki był rezultat bitwy pod Maratonem?", answer: "Zwycięstwo Ateńczyków nad Persami (490 p.n.e.).", era:"starożytność"},
    {question: "Jaki był rezultat bitwy pod Termopilami?", answer: "Wygrana Persów po bohaterskiej obronie Greków.", era:"starożytność"},
    {question: "Czym był Związek Morski?", answer: "Sojuszem polis pod przewodnictwem Aten.", era:"starożytność"},
    {question: "Do czego doprowadził konflikt Aten i Sparty (w 431 p.n.e.)?", answer: "Do wojny peloponeskiej.", era:"starożytność"},
    {question: "Jaki był główny skutek wojny peloponeskiej?", answer: "Upadek potęgi Aten.", era:"starożytność"},
    {question: "Kto zjednoczył Grecję w IV w. p.n.e.?", answer: "Filip II Macedoński.", era:"starożytność"},
    {question: "Jakie obszary podbił Aleksander Wielki?", answer: "Grecję, Mezopotamię, Egipt, Persję.", era:"starożytność"},
    {question: "Czym był hellenizm?", answer: "Syntezą kultury greckiej i wschodniej.", era:"starożytność"},
    {question: "Kto był twórcą filozofii greckiej?", answer: "Sokrates, Platon, Arystoteles.", era:"starożytność"},
    {question: "Czym były igrzyska olimpijskie?", answer: "Zawodami sportowymi ku czci Zeusa.", era:"starożytność"},
    {question: "Gdzie odbywały się igrzyska olimpijskie?", answer: "W Olimpii.", era:"starożytność"},
    {question: "Kto ostatecznie podbił Grecję w 146 p.n.e., kończąc jej niezależność?", answer: "Rzymianie.", era:"starożytność"},
    {question: "Według tradycji, kiedy założono Rzym?", answer: "753 r. p.n.e.", era:"starożytność"},
    {question: "Jakie były trzy główne okresy dziejów Rzymu?", answer: "Monarchia, republika, cesarstwo.", era:"starożytność"},
    {question: "Kto według legendy założył Rzym?", answer: "Romulus.", era:"starożytność"},
    {question: "Jak nazywał się organ doradczy króla, a później republiki?", answer: "Senat.", era:"starożytność"},
    {question: "Jakie grupy społeczne istniały w republice rzymskiej?", answer: "Patrycjusze i plebejusze.", era:"starożytność"},
    {question: "Czym były zgromadzenia ludowe w Rzymie?", answer: "Organami ustawodawczymi obywateli.", era:"starożytność"},
    {question: "Kim byli trybuni ludowi?", answer: "Obrońcami interesów plebejuszy.", era:"starożytność"},
    {question: "Czym było prawo XII tablic?", answer: "Najstarszym spisanym prawem rzymskim.", era:"starożytność"},
    {question: "Na czym polegał ustrój republiki rzymskiej?", answer: "Podziale władzy między urzędników i senat.", era:"starożytność"},
    {question: "Jaki był najważniejszy urząd w republice rzymskiej?", answer: "Konsul.", era:"starożytność"},
    {question: "Czym były wojny punickie?", answer: "Wojnami Rzymu z Kartaginą.", era:"starożytność"},
    {question: "Jaki był główny obszar działań wojennych w I wojnie punickiej?", answer: "Sycylia.", era:"starożytność"},
    {question: "W jakich latach trwała II wojna punicka?", answer: "218-201 p.n.e.", era:"starożytność"},
    {question: "W jakiej bitwie Hannibal zniszczył wojska Rzymian w 216 p.n.e.?", answer: "W bitwie pod Kannami.", era:"starożytność"},
    {question: "Jaki był główny skutek wojen punickich?", answer: "Dominacja Rzymu w basenie Morza Śródziemnego.", era:"starożytność"},
    {question: "Kiedy Rzym podbił Kartaginę?", answer: "W 146 p.n.e.", era:"starożytność"},
    {question: "Czym było powstanie Spartakusa?", answer: "Rebelią niewolników rzymskich.", era:"starożytność"},
    {question: "Kim byli bracia Grakchowie?", answer: "Reformatorzy społeczni w Rzymie.", era:"starożytność"},
    {question: "Kto tworzył I triumwirat?", answer: "Juliusz Cezar, Gnejusz Pompejusz i Marek Krassus.", era:"starożytność"},
    {question: "Kiedy zamordowano Juliusza Cezara?", answer: "W 44 p.n.e.", era:"starożytność"},
    {question: "Kto tworzył II triumwirat?", answer: "Marek Antoniusz, Oktawian i Lepidus.", era:"starożytność"},
    {question: "Czym był pryncypat?", answer: "Forma cesarstwa z zachowaniem pozorów republiki.", era:"starożytność"},
    {question: "Kto był pierwszym cesarzem Rzymu?", answer: "Oktawian August.", era:"starożytność"},
    {question: "Czym był dominat?", answer: "Autokratyczną formą cesarstwa.", era:"starożytność"},
    {question: "Kto utworzył tetrarchię w Rzymie?", answer: "Dioklecjan.", era:"starożytność"},
    {question: "Kto zalegalizował chrześcijaństwo?", answer: "Konstantyn Wielki.", era:"starożytność"},
    {question: "Czym był edykt mediolański?", answer: "Aktem tolerancji religijnej (313 r.).", era:"starożytność"},
    {question: "Kiedy nastąpił podział Cesarstwa Rzymskiego?", answer: "395 r.", era:"starożytność"},
    {question: "Kiedy upadło Cesarstwo Zachodniorzymskie?", answer: "476 r.", era:"starożytność"},
    {question: "Jakie były przyczyny upadku Rzymu?", answer: "Kryzys wewnętrzny i najazdy barbarzyńców.", era:"starożytność"}, 
    {question: "Jakie wydarzenie uznaje się za początek średniowiecza?", answer: "Upadek Cesarstwa Zachodniorzymskiego (476r.).", era:"średniowiecze"},
    {question: "Jak nazywano ludy napierające na cesarstwo w V w.?", answer: "Barbarzyńcy (ludy germańskie).", era:"średniowiecze"},
    {question: "Jakie państwo powstało na gruzach cesarstwa rzymskiego w Galii?", answer: "Państwo Franków.", era:"średniowiecze"},
    {question: "Kto założył państwo Franków?", answer: "Chlodwig z dynastii Merowingów.", era:"średniowiecze"},
    {question: "Kiedy odbył się chrzest Chlodwiga?", answer: "W 496 r.", era:"średniowiecze"},
    {question: "Kto był twórcą potęgi Franków w VIII w.?", answer: "Karol Młot.", era:"średniowiecze"},
    {question: "W jakiej bitwie Frankowie zatrzymali ekspansję Arabów w Europie?", answer: "W bitwie pod Poitiers (732 r.).", era:"średniowiecze"},
    {question: "Kto został koronowany na cesarza w 800 r.?", answer: "Karol Wielki.", era:"średniowiecze"},
    {question: "Jakie było znaczenie koronacji Karola Wielkiego?", answer: "Odnowienie idei cesarstwa w Europie Zachodniej.", era:"średniowiecze"},
    {question: "Czym był renesans karoliński?", answer: "Ożywieniem kultury i edukacji.", era:"średniowiecze"},
    {question: "Kiedy podzielono imperium Karola Wielkiego?", answer: "W 843 r. (traktat w Verdun).", era:"średniowiecze"},
    {question: "Jakie państwa po pewnym czasie wyłoniły się z podziału imperium Karola Wielkiego?", answer: "Francja, Niemcy, Lotaryngia.", era:"średniowiecze"},
    {question: "Jak nazywał się średniowieczny system zależności lennych?", answer: "Feudalizm.", era:"średniowiecze"},
    {question: "Jaką rolę pełnił senior w feudalizmie?", answer: "Nadawał lenno wasalowi.", era:"średniowiecze"},
    {question: "Co otrzymywał wasal w systemie feudalnym?", answer: "Otrzymywał lenno w zamian za służbę.", era:"średniowiecze"},
    {question: "Czym było lenno?", answer: "Ziemią nadawaną w użytkowanie.", era:"średniowiecze"},
    {question: "Na czym polegała drabina feudalna?", answer: "Na hierarchii zależności lennych.", era:"średniowiecze"},
    {question: "Jaką rolę odgrywał Kościół w średniowieczu?", answer: "Był główną instytucją kulturotwórczą.", era:"średniowiecze"},
    {question: "Który cesarz bizantyjski odzyskał tereny dawnego cesarstwa zachodniorzymskiego?", answer: "Justynian Wielki.", era:"średniowiecze"},
    {question: "Jaką zasadą kierował się zakon benedyktynów?", answer: "Ora et labora.", era:"średniowiecze"},
    {question: "Kto zapoczątkował islam?", answer: "Mahomet.", era:"średniowiecze"},
    {question: "Kiedy powstał islam?", answer: "W VII w.", era:"średniowiecze"},
    {question: "Czym była hidżra?", answer: "Ucieczką Mahometa z Mekki do Medyny (622 r.).", era:"średniowiecze"},
    {question: "Czym był kalifat?", answer: "Państwem muzułmańskim rządzonym przez kalifa.", era:"średniowiecze"},
    {question: "Jakie tereny podbili Arabowie?", answer: "Bliski Wschód, Afrykę Północną, Hiszpanię.", era:"średniowiecze"},
    {question: "Kto stworzył państwo pierwszych Piastów?", answer: "Mieszko I.", era:"średniowiecze"},
    {question: "Kiedy miał miejsce chrzest Polski?", answer: "966 r.", era:"średniowiecze"},
    {question: "Jaki był główny skutek chrztu Polski?", answer: "Włączenie do kręgu kultury zachodniochrześcijańskiej.", era:"średniowiecze"},
    {question: "Czym był Zjazd Gnieźnieński (1000 r.)?", answer: "Spotkaniem Bolesława Chrobrego z Ottonem III.", era:"średniowiecze"},
    {question: "Kto był królem Polski po Bolesławie Chrobrym?", answer: "Mieszko II.", era:"średniowiecze"},
    {question: "Jak nazywał się konflikt papieża z cesarzem o mianowanie biskupów?", answer: "Spór o inwestyturę.", era:"średniowiecze"},
    {question: "Kto był stroną papieską w sporze o inwestyturę?", answer: "Grzegorz VII.", era:"średniowiecze"},
    {question: "Który cesarz uczestniczył w sporze o inwestyturę?", answer: "Henryk IV.", era:"średniowiecze"},
    {question: "Kiedy odbyła się pokuta Henryka IV przed papieżem?", answer: "W 1077 r. (w Canossie).", era:"średniowiecze"},
    {question: "Czym zakończył się spór o inwestyturę?", answer: "Konkordatem wormackim (1122 r.).", era:"średniowiecze"},
    {question: "Czym były krucjaty?", answer: "Wyprawami zbrojnymi do Ziemi Świętej.", era:"średniowiecze"},
    {question: "Kiedy miała miejsce I krucjata?", answer: "1096–1099.", era:"średniowiecze"},
    {question: "Jaki był cel krucjat?", answer: "Odzyskanie Jerozolimy z rąk muzułmanów.", era:"średniowiecze"},
    {question: "Jakie zakony rycerskie powstały w czasie krucjat?", answer: "Templariusze, joannici, krzyżacy.", era:"średniowiecze"},
    {question: "Kiedy sprowadzono Krzyżaków do Polski?", answer: "1226 r.", era:"średniowiecze"},
    {question: "Kto sprowadził Krzyżaków do Polski?", answer: "Konrad Mazowiecki.", era:"średniowiecze"},
    {question: "Czym była lokacja na prawie niemieckim?", answer: "Zakładaniem miast na wzór zachodni.", era:"średniowiecze"},
    {question: "Na jakich prawach niemieckich lokowano miasta w Polsce?", answer: "Na prawie magdeburskim i lubeckim.", era:"średniowiecze"},
    {question: "Czym były cechy?", answer: "Organizacjami rzemieślników.", era:"średniowiecze"},
    {question: "Czym był trójpolówka?", answer: "Systemem uprawy ziemi w trzech częściach.", era:"średniowiecze"},
    {question: "Jakie były stany społeczne w średniowieczu?", answer: "Duchowieństwo, rycerstwo, chłopstwo (później mieszczaństwo).", era:"średniowiecze"},
    {question: "Czym była monarchia stanowa?", answer: "Ustrojem z udziałem stanów społecznych w rządzeniu.", era:"średniowiecze"},
    {question: "Co zapoczątkowało rozbicie dzielnicowe w Polsce?", answer: "Testament Bolesława Krzywoustego (1138 r.).", era:"średniowiecze"},
    {question: "Na czym polegała zasada senioratu podczas rozbicia dzielnicowego?", answer: "Władzę seniorską miał najstarszy z rodu.", era:"średniowiecze"},
    {question: "Jaki był główny skutek rozbicia dzielnicowego?", answer: "Osłabienie i decentralizacja państwa.", era:"średniowiecze"},
    {question: "Kto zjednoczył Polskę po rozbiciu dzielnicowym?", answer: "Władysław Łokietek.", era:"średniowiecze"},
    {question: "Kiedy odbyła się koronacja Łokietka?", answer: "1320 r.", era:"średniowiecze"},
    {question: "Z kim walczyła Polska w bitwie pod Legnicą (1241 r.)?", answer: "Z Mongołami (Tatarami).", era:"średniowiecze"},
    {question: "Czym była Hanza?", answer: "Związkiem miast handlowych północnej Europy.", era:"średniowiecze"},
    {question: "Gdzie powstał pierwszy uniwersytet w Europie?", answer: "W Bolonii (1088 r.).", era:"średniowiecze"},
    {question: "W jakim mieście założono pierwszy wschodnioeuropejski uniwersytet?", answer: "W Pradze (1348 r.).", era:"średniowiecze"},
    {question: "Czym był styl romański?", answer: "Stylem architektonicznym z masywnymi kamiennymi murami i małymi oknami.", era:"średniowiecze"},
    {question: "Czym był styl gotycki?", answer: "Stylem architektonicznym z strzelistymi wieżami, ostrymi łukami i witrażami.", era:"średniowiecze"},
    {question: "Jakie znaczenie miała Magna Carta Libertatum (1215 r.)?", answer: "Ograniczenie władzy króla Anglii.", era:"średniowiecze"},
    {question: "Kiedy miała miejsce Wielka schizma wschodnia?", answer: "W 1054 r.", era:"średniowiecze"},
    {question: "Jakie wydarzenie symbolicznie kończy średniowiecze?", answer: "Odkrycie Ameryki (1492 r.).", era:"średniowiecze"},
    {question: "Co wpłynęło na kryzys demograficzny Europy w XIV w.?", answer: "Epidemia czarnej śmierci.", era:"średniowiecze"},
    {question: "Jakie były skutki dżumy?", answer: "Spadek ludności i kryzys gospodarczy.", era:"średniowiecze"},
    {question: "Czym była wojna stuletnia?", answer: "Konfliktem Anglii z Francją (1337–1453).", era:"średniowiecze"},
    {question: "Jakie były przyczyny wojny stuletniej?", answer: "Spór o tron francuski i kontrolę nad Flandrią.", era:"średniowiecze"},
    {question: "Kto przyczynił się do zwycięstwa Francuzów nad Anglikami w wojnie stuletniej?", answer: "Joanna d'Arc.", era:"średniowiecze"},
    {question: "Jak zakończyła się wojna stuletnia?", answer: "Wzmocnieniem monarchii francuskiej.", era:"średniowiecze"},
    {question: "Czym była wielka schizma zachodnia?", answer: "Rozłamem w Kościele katolickim pomiędzy dwoma/trzema papieżami.", era:"średniowiecze"},
    {question: "Kiedy trwała wielka schizma zachodnia?", answer: "1378–1417.", era:"średniowiecze"},
    {question: "Co osiągnął sobór w Konstancji?", answer: "Zakończył schizmę zachodnią i potępił husytyzm.", era:"średniowiecze"},
    {question: "Kim był Jan Hus?", answer: "Czeski reformator religijny.", era:"średniowiecze"},
    {question: "Jakie były skutki wojen husyckich?", answer: "Osłabienie władzy cesarskiej w Czechach.", era:"średniowiecze"},
    {question: "Kiedy zawarto unię w Krewie?", answer: "1385 r.", era:"średniowiecze"},
    {question: "Na czym polegała unia w Krewie?", answer: "Małżeństwie Jadwigi z Jagiełłą i chrystianizacji Litwy.", era:"średniowiecze"},
    {question: "Kiedy odbyła się bitwa pod Grunwaldem?", answer: "15 lipca 1410 r.", era:"średniowiecze"},
    {question: "Kto dowodził wojskami polsko-litewskimi pod Grunwaldem?", answer: "Władysław Jagiełło.", era:"średniowiecze"},
    {question: "Jakie były skutki bitwy pod Grunwaldem?", answer: "Osłabienie Zakonu Krzyżackiego.", era:"średniowiecze"},
    {question: "Czym był pokój toruński (1411 r.)?", answer: "Zakończeniem wielkiej wojny z zakonem.", era:"średniowiecze"},
    {question: "Jakie postanowienie zawierał drugi pokój toruński (1466 r.)?", answer: "Włączenie Prus Królewskich do Polski.", era:"średniowiecze"},
    {question: "Kto był twórcą potęgi Jagiellonów w XV w.?", answer: "Kazimierz IV Jagiellończyk.", era:"średniowiecze"},
    {question: "Czym była monarchia stanowa w Polsce?", answer: "Ustrojem z udziałem szlachty w rządach.", era:"średniowiecze"},
    {question: "Jakie znaczenie miał przywilej koszycki (1374 r.)?", answer: "Rozszerzał prawa szlachty.", era:"średniowiecze"},
    {question: "Czym był sejm walny?", answer: "Centralnym organem ustawodawczym.", era:"średniowiecze"},
    {question: "Jakie znaczenie miała Akademia Krakowska?", answer: "Był głównym ośrodkiem nauki i kultury.", era:"średniowiecze"},
    {question: "Jakie było główne osiągnięcie Mikołaja Kopernika?", answer: "Stworzył teorię heliocentryczną.", era:"średniowiecze"},
    {question: "Jakie przemiany zachodziły w gospodarce Europy u schyłku średniowiecza?", answer: "Rozwój handlu i miast.", era:"średniowiecze"},
    {question: "Czym była unia personalna?", answer: "Związkiem państw pod jednym władcą.", era:"średniowiecze"},
    {question: "Jakie znaczenie miało chrystianizowanie Litwy?", answer: "Umocnienie pozycji Polski w regionie.", era:"średniowiecze"},
    {question: "Jakie dynastie walczyły o tron angielski w Wojnie Dwóch Róż?", answer: "Dynastia Yorków i Lancasterów.", era:"średniowiecze"},
    {question: "Kiedy zakończyła się rekonkwista w Hiszpanii?", answer: "W 1492 r.", era:"średniowiecze"},
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
    if (sel_questions[0] == "1") {
        sel_questions.splice(0, 1)
    } else {
        sel_questions.splice(x, 1)
    }
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
    const question_menu = document.getElementById("starożytność")
    question_menu.style.display="none";
    const menu_button = document.getElementById("menu_button")
    menu_button.style.display="none";
}












