var speakWord = "Hello";
function speak(name) {
    var helloSpeaker = new Object();
    helloSpeaker.speak = function() {
        console.log(speakWord + " " + name);
    };
    speak.helloSpeaker = helloSpeaker;
}
(speak);
