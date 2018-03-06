var arielAudio = document.getElementById("audio/ariel.mp3");
var annaAudio = document.getElementById("audio/anna.mp3");
var auroraAudio = document.getElementById("audio/aurora.mp3");
var belleAudio = document.getElementById("audio/belle.mp3");
var cinderellaAudio = document.getElementById("audio/cinderella.mp3");
var jasmineAudio = document.getElementById("audio/jasmine.mp3");
var tianaAudio = document.getElementById("audio/tiana.mp3");
var rapunzelAudio = document.getElementById("audio/rapunzel.mp3");
var mulanAudio = document.getElementById("audio/mulan.mp3");
var pocahontasAudio = document.getElementById("audio/pocahontas.mp3");
var moanaAudio = document.getElementById("audio/moana.mp3");
var snowwhiteAudio = document.getElementById("audio/snowwhite.mp3");


var name_el = document.getElementById('name');
var birthday_el = document.getElementById('birthday');


//const form = document.forms['myForm'];

function handleFormSubmit(event){
    event.preventDefault();

    const inputDate = document.getElementById('date');
    const myDate = new Date(inputDate.value);

    //Make a variable that represents the message ("enter a valid date")
    //   that's a sibling of the date element
    const feedbackDate = inputDate.nextElementSibling;
    //NaN stands for Not a Number
    if( isNaN(myDate) ){
        inputDate.focus();
        inputDate.value = '';
        feedbackDate.hidden = false;
    }
    else {
        feedbackDate.hidden = true;
    }

    console.log('Form Submitted', event);

   
    console.group('Selected Date Information');
    console.log('myDate: ${myDate}');

    console.log('Month: ${myDate.getUTCMonth()}');
    console.log('Day: ${myDate.getUTCDate()}');
    console.log('Year: ${myDate.getUTCFullYear()}');
    console.groupEnd();

    var whichMonth = myDate.getUTCMonth();
    var whichDayOfMonth = myDate.getUTCDate();

    //THE ZODIAC ALGORITHM
  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "Cap";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sag";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Sco";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Lib";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Vir";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Leo";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Can";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Gem";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Tau";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Ari";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pis";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aqu";
  }
  console.log(AstroSign);


  //DIRECTIONS FOR APPLYING TO LOADING CIRCLE
  //THIS IS THE CSS
  .circle img{
    transition: 2s ease-in-out .5s;
    transform: rotateX(1800deg);
  }

}


const form = document.getElementById('myForm');
/* OR const form = document.forms['myForm']*/
form.addEventListener('submit', handleFormSubmit, false);
//form.addEventListener('change', handleFormSubmit, false);



function showWindow(AstroSign){
    showOverlay();

}


function showOverlay() {
    document.getElementById("overlay").style.display = "block";
}

function hideOverlay() {
    document.getElementById("overlay").style.display = "none";
}




/*
mulan.addEventListener('click', mulanAudio.play, false);
ariel.addEventListener('click', arielAudio.play, flase);
anna.addEventListener('click', annaAudio.play, flase);
aurora.addEventListener('click', auroraAudio.play, flase);
belle.addEventListener('click', belleAudio.play, flase);
cinderella.addEventListener('click', cinderellaAudio.play, flase);
jasmine.addEventListener('click', jasmineAudio.play, flase);
tiana.addEventListener('click', tianaAudio.play, flase);
rapunzel.addEventListener('click', rapunzelAudio.play, flase);
pocahontas.addEventListener('click', pocahontasAudio.play, flase);
moana.addEventListener('click', moanaAudio.play, flase);
snowwhite.addEventListener('click', snowwhiteAudio.play, flase);

/*
FOR CHECKING USER Text
https://github.com/philsinatra/IDM231/blob/master/examples/events/anonymous_listeners.js
*/