
    function searchSong(){
                var filter = document.getElementById("searchContent").value.toLowerCase();
                var flexCon = document.querySelectorAll('.flex');
                for(i=0;i<flexCon.length;i++)
                {
                var x = document.getElementsByClassName("flex")[i].className;
                if(x.toLowerCase().indexOf(filter) > -1){
                document.getElementsByClassName("flex")[i].style.display="";
                }
                else
                {
                document.getElementsByClassName("flex")[i].style.display="none";
                }
                }
    }   
    function runSpeechRecognition() {
                
                var output = document.getElementById("output");

                var action = document.getElementById("action");

                var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
                var recognition = new SpeechRecognition();

                recognition.onresult = function(event) {
                var transcript = event.results[0][0].transcript;
                document.getElementById("searchContent").value=transcript.toLowerCase();
                console.log(transcript)

                var flexCon = document.querySelectorAll('.flex');
                for(i=0;i<flexCon.length;i++)
                {
                var x = document.getElementsByClassName("flex")[i].className;
                if(x.toLowerCase().indexOf(transcript.toLowerCase()) > -1){
                document.getElementsByClassName("flex")[i].style.display="";
                }
                else
                {
                document.getElementsByClassName("flex")[i].style.display="none";
                }
                }
                };

                // start recognition
                recognition.start();        
                         }
