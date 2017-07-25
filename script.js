var url1 = "http://api.wordnik.com:80/v4/word.json/";
var word = "cat";
var url2 = "/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
var a;
var x;


function setup() {
    noCanvas();
    var leftDiv = document.createElement("div"); //Create left div
    leftDiv.id = "left"; //Assign div id
    leftDiv.setAttribute("style", "float:left; width:66.5%; line-height: 26px; text-align:left; font-size:12pt; padding-left:8px; height:26px; cursor: pointer;"); //Set div attributes
    leftDiv.style.background = "#FF0000";
    a = document.createElement('a');
    /*a.href = askWordnik;*/
    a.innerHTML = word;
    leftDiv.appendChild(a);
    document.body.appendChild(leftDiv);

    a.onclick = askWordnik;


}

function askWordnik() {
    loadJSON(url1 + word + url2, gotData);
}

function gotData(data) {
    var index1 = floor(random(0, data.length));
    var index2 = floor(random(0, data[index1].words.length));
    word = data[index1].words[index2];
    a.innerHTML = word;
}

function draw() {

}
