var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
        document.getElementById("textbox").innerHTML = "";
        recognition.start();
    }
    recognition.onresult = function run(event) {
        console.log(event);
        var Content = event.results[0][0].transcript;
      
        document.getElementById("textbox").innerHTML = Content;
        console.log(Content);
        if(Content == "take my selfie") {
            console.log("taking selfie ----");
            speak();
        }
    
    
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
 
    setTimeout(function() {
        img_id = "selfie1";
        take_snapshot();
        save();
      
    },5000);


}
function take_snapshot() {
    console.log(img_id);
    Webcam.snap(function(data_uri) {
        if(img_id == "selfie1")  {
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'">';
        }
      
       else if(img_id == "selfie2")  {
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'">';
        }
      
        else if(img_id == "selfie3")  {
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'">';
        }
      
    });
}
