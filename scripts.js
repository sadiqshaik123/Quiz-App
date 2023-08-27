const quizData = [{
    question:"1.  Which one is the smallest ocean in the World?",
    opt1:"Indian",
    opt2:"Pacific",
    opt3:"Atlantic",
    opt4:"Arctic",
    correct:"Arctic"
},
{
    question:"2.  Which country gifted the ‘Statue of Liberty’ to USA in 1886?",
    opt1:"France",
    opt2:"Canada",
    opt3:"Brazil",
    opt4:"England",
    correct:"France"
},
{
    question:"3. Dead Sea is located between which two countries?",
    opt1:"Jordan and Sudan",
    opt2:"Jordan and Israel",
    opt3:"Turkey and UAE",
    opt4:"UAE and Egypt",
    correct:"Jordan and Israel"
},
{
    question:"4.  In which ocean ‘Bermuda Triangle’ region is located?",
    opt1:"Atlantic",
    opt2:"Indian",
    opt3:"Pacific",
    opt4:"Arctic",
    correct:"Atlantic"
},
{
    question:"5.  Which country is known as the ‘playground of Europe’?",
    opt1:"Austria",
    opt2:"Holland",
    opt3:"Switzerland",
    opt4:"Italy",
    correct:"Switzerland"
},
{
    question:"6.  Which country is also known as the ‘Land of Rising Sun’?",
    opt1:"Japan",
    opt2:"New Zealand",
    opt3:"Fiji",
    opt4:"China",
    correct:"Japan"
},
{
    question:"7.  Which country is known as the ‘Land of Thunderbolts’?",
    opt1:"China",
    opt2:"Bhutan",
    opt3:"Mongolia",
    opt4:"Thailand",
    correct:"Bhutan"
},
{
    question:"8.  Which continent has the highest number of countries?",
    opt1:"Asia",
    opt2:"Europe",
    opt3:"North America",
    opt4:"Africa",
    correct:"Africa"
},
{
    question:"9.  In which country, white elephant is found?",
    opt1:"India",
    opt2:"Sri Lanka",
    opt3:"Thailand",
    opt4:"Malaysia",
    correct:"Thailand"
},
{
    question:"10. Total number of oceans in the World is",
    opt1:"3",
    opt2:"5",
    opt3:"7",
    opt4:"12",
    correct:"5"
}];


var questionCounter=0;
var score=0;
var qstn=document.getElementById("question");
function showQuestions(){
    var opt1_text=document.getElementById("opt1_label");
    var opt2_text=document.getElementById("opt2_label");
    var opt3_text=document.getElementById("opt3_label");
    var opt4_text=document.getElementById("opt4_label");

    qstn.innerHTML=quizData[questionCounter].question;
    opt1_text.innerText=quizData[questionCounter].opt1;
    opt2_text.innerText=quizData[questionCounter].opt2;
    opt3_text.innerText=quizData[questionCounter].opt3;
    opt4_text.innerText=quizData[questionCounter].opt4;

    document.getElementById('opt-1').setAttribute("value",opt1_text.innerText);
    document.getElementById('opt-2').setAttribute("value",opt2_text.innerText);
    document.getElementById('opt-3').setAttribute("value",opt3_text.innerText);
    document.getElementById('opt-4').setAttribute("value",opt4_text.innerText);
}
showQuestions();

function save(){
    var options= document.getElementsByName('option');
    for (let i=0;i<4;i++){
        if(options[i].checked){
            var answer= options[i].value;
            options[i].checked=false;
            break;
        }
    }
    if(answer==quizData[questionCounter].correct){
        score+=10;
        document.getElementById('score').innerHTML="Score:"+score;
    }
    if(questionCounter<9){
        questionCounter++;
        showQuestions();
    }
    else{
        document.getElementById('mainContainer').style.display="none";
        var id= setInterval(move,9);
        var tPos=0;
        var lPos=0;
        var fSize=0;
        function move(){
            var finalScore=document.getElementById('showScore');
            if(tPos==244 && lPos==-762.5){
                clearInterval(id);
            }
            else{
                tPos+=4;
                lPos-=12.5;
                fSize+=1.5;
                finalScore.style.top=tPos+"px";
                finalScore.style.left=lPos+"px";
                document.getElementById('score').innerHTML="Final Score:"+score;
                document.getElementById('score').style.fontSize=fSize+"px";
            }
        }
    }
}