
function talk() {

    var know = {

    "Hello": "Hi" ,
    "How are you": "good",
    "my budget is 5000k": "wait a minute..,venue-VSK garden ,catering-udaipur catering, decoration-dream kraft",
    "my budget is 6000k": "wait a minute..,venue-Garden Galeria,catering-jaipur catering ,decoration-rosewell decor",
    "ok":"Thank you so much",

    
};

var user = document.getElementById("userbox").ariaValueMax;

document.getElementById("chatLog").innerHTML = user + "<br>";

if(user in know) {

    document.getElementById("chatLog").innerHTML = know[user] + "<br>";
}

else{
    document.getElementById("chatLog").innerHTML = "Sorry,I didn't understand <br>";
}
}











