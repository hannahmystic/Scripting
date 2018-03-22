 /*_____________________________________
|                                      |
|           GLOBAL VARIABLES           | 
|______________________________________|
*/
//AUDIO FILES
var arielAudio = document.getElementById("arielAudio");
var annaAudio = document.getElementById("annaAudio");
var auroraAudio = document.getElementById("auroraAudio");
var belleAudio = document.getElementById("belleAudio");
var cinderellaAudio = document.getElementById("cinderellaAudio");
var jasmineAudio = document.getElementById("jasmineAudio");
var tianaAudio = document.getElementById("tianaAudio");
var rapunzelAudio = document.getElementById("rapunzelAudio");
var mulanAudio = document.getElementById("mulanAudio");
var pocahontasAudio = document.getElementById("pocahontasAudio");
var moanaAudio = document.getElementById("moanaAudio");
var snowwhiteAudio = document.getElementById("snowwhiteAudio");

//OVERLAY CONTENT
var overlay = document.getElementById('overlay');
var circle = document.getElementById('circleImage');
var song;
var astroSign = '';
var titleContent = '';
var pContent = '';
var container = document.getElementById('container');

var pic = new Image();
var title = document.createElement('H3');
var desc = document.createElement('p');


//INPUT EVALUATION
var whichMonth = 0;
var whichDayOfMonth = 0;

var name_el = document.getElementById('name');
var birthday_el = document.getElementById('birthday');




 /*_____________________________________
|                                      |
|            PRESSING SUBMIT           | 
|______________________________________|
*/
function handleFormSubmit(event){

    event.preventDefault();

    const inputDate = document.getElementById('date');
    const myDate = new Date(inputDate.value);

    const feedbackDate = inputDate.nextElementSibling;
    whichMonth = myDate.getUTCMonth()+1; //Starts at 0, add 1 for clarity
    whichDayOfMonth = myDate.getUTCDate();


  //EVALUATION FOR ENTERING A VALID DATE
  //If the date entered is not valid, the message "enter a valid date" displays, and the function is exited. "Submit" will only result in its intended actions if the date is valid.
    //NaN stands for Not a Number
    if( isNaN(myDate) ){
        inputDate.focus();
        inputDate.value = '';
        feedbackDate.hidden = false;
        return;
    }
    else if( (whichMonth==1 && whichDayOfMonth>31) || (whichMonth==2 && whichDayOfMonth>29) || (whichMonth==3 && whichDayOfMonth>31) || (whichMonth==4 && whichDayOfMonth>30) || (whichMonth==5 && whichDayOfMonth>31) || (whichMonth==6 && whichDayOfMonth>30) || (whichMonth==7 && whichDayOfMonth>31) || (whichMonth==8 && whichDayOfMonth>31) || (whichMonth==9 && whichDayOfMonth>30) || (whichMonth==10 && whichDayOfMonth>31) || (whichMonth==11 && whichDayOfMonth>30) || (whichMonth==12 && whichDayOfMonth>31) ){
      feedbackDate.hidden = false;
      return;
    }
    else if( (whichMonth == 2) && (myDate.getUTCFullYear()%4 >0) && (whichDayOfMonth>28) ){
      geedbackDate.hidden = false;
      return;
    }
    else {
        feedbackDate.hidden = true;
    }

    console.log('Form Submitted', event);

  

    //THE ZODIAC ALGORITHM
  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    astroSign = "Cap";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    astroSign = "Sag";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    astroSign = "Sco";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    astroSign = "Lib";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    astroSign = "Vir";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    astroSign = "Leo";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    astroSign = "Can";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    astroSign = "Gem";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    astroSign = "Tau";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    astroSign = "Ari";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    astroSign = "Pis";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    astroSign = "Aqu";
  }
  console.log(astroSign);


  //SPIN THE LOADING CIRCLE
  circle.classList.add('circleTransition');

  //MAKE CONTENT FADE OUT
  container.classList.add('containerTransition');


  //ZODIAC PICTURES AND DESCRIPTIONS
  if(astroSign == 'Ari'){
    pic.src = 'images/mulan2.png';
    pic.alt = 'You are Mulan';
    song = mulanAudio;
    titleContent = document.createTextNode(name_el.value + ', you are Mulan');
    pContent = document.createTextNode('As an Aries, you are independent and courageous. Fueled by fire and the will to achieve, you are capable of accomplishing anything. Like Mulan, you are a trailblazer who doesn’t let others hold you back. Keep being fearless and fighting for your beliefs.');
  }
  else if(astroSign == 'Pis'){
    pic.src = 'images/aurora.png';
    pic.alt = 'You are Aurora';
    song = auroraAudio;
    titleContent = document.createTextNode( name_el.value + ', you are Aurora');
    pContent = document.createTextNode('The Pisces is sometimes seen as an otherworldly being. Sensitive and reserved, you enjoy daydreaming and escaping from reality. The introverted Aurora didn’t mind growing up in a forest cottage with only three fairies and some local animals for company, and spent the time living in her imagination. You would probably also enjoy some time away from your busy life, going with the flow and singing to the birds.');
  }
  else if(astroSign == 'Tau'){
    pic.src = 'images/snowwhite2.png';
    pic.alt = 'You are Snow White';
    song = snowwhiteAudio;
    titleContent = document.createTextNode( name_el.value + ', you are Snow White');
    pContent = document.createTextNode('Though you may be sweet, you are not to be underestimated. The Taurus is easy-going but resilient, with a strong sense of values. Like Snow White, you are persistent and do not give up when faced with negativity. You seek security and pursue a good life for yourself. Using patience and your warm heart, you always get the job done.');
  }
  else if(astroSign == 'Gem'){
    pic.src = 'images/belle.png';
    pic.alt = 'You are Belle';
    song = belleAudio;
    titleContent = document.createTextNode( name_el.value + ', you are Belle');
    pContent = document.createTextNode('The Gemini is vibrant and versatile. You work well with others, even those who can be as difficult as a Beast, and you excel at communication. Like Belle, you are adaptive and intellectual, and you are consistently exploring places, people, and ideas to learn more. You crave a life of diverse experiences, and along the way, you make sure to stay true to yourself.');
  }
  else if(astroSign == 'Leo'){
    pic.src = 'images/jasmine2.png';
    pic.alt = 'You are Jasmine';
    song = jasmineAudio;
    titleContent = document.createTextNode( name_el.value + ', you are Jasmine');
    pContent = document.createTextNode('Leos are not afraid to question the rules, especially if they feel they are being held back from living their best life. Like Jasmine, you will not let yourself be pushed around, and make sure your voice is heard. Some may see you as a drama queen, but mainly, you carry an air of dignity and charm. People are naturally drawn to you, and this makes you a great leader.');
  }
  else if(astroSign == 'Can'){
    pic.src = 'images/rapunzel2.png';
    pic.alt = 'You are Rapunzel';
    song = rapunzelAudio;
    titleContent = document.createTextNode( name_el.value + ', you are Rapunzel');
    pContent = document.createTextNode('Cancers are known to be nurturers and healers, and though you may not have the help of magic hair to do it for you, you know how to help those you love, and care about them deeply. You use your emotions to channel your imagination, and love to be creative. You are compassionate and see the good in others, and though sometimes cautious and sensitive, you are always strong-willed.');
  }
  else if(astroSign == 'Vir'){
    pic.src = 'images/cinderella.png';
    pic.alt = 'You are Cinderella';
    song = cinderellaAudio;
    titleContent = document.createTextNode( name_el.value + ', you are Cinderella');
    pContent = document.createTextNode('Cinderella is often misunderstood as a love-obsessed airhead, but those familiar with her story know that she was lead by a kind, strong heart and fierce resilience. As a Virgo, you can be modest and shy, but you are led by a desire to do good work, and enjoy bettering yourself and those around you. You are organized and logical, but you always leave room for fun.');
  }
  else if(astroSign == 'Lib'){
    pic.src = 'images/pocahontas2.png';
    pic.alt = 'You are Pocahontas';
    song = pocahontasAudio;
    titleContent = document.createTextNode( name_el.value + ', you are Pocahontas');
    pContent = document.createTextNode('Libra is represented by the scales, which symbolize balance. Like Pocahontas, you inspire others to seek harmony and cooperation. You are hardworking and have big goals. Though you avoid conflict when possible, you value fairness, and are strategic when you need to get something done.');
  }
  else if(astroSign == 'Sco'){
    pic.src = 'images/moana.png';
    pic.alt = 'You are Moana';
    song = moanaAudio;
    titleContent = document.createTextNode( name_el.value + ', you are Moana');
    pContent = document.createTextNode('Scorpios are often seen as intense, and question everything. Like Moana, they are the investigators of the zodiac. Your combination of determination and curiosity means you are always looking for answers and working towards a goal. You are a master of your own life, and passionately move past all that stands in your way.');
  }
  else if(astroSign == 'Sag'){
    pic.src = 'images/ariel.png';
    pic.alt = 'You are Ariel';
    song = arielAudio;
    titleContent = document.createTextNode( name_el.value + ', you are Ariel');
    pContent = document.createTextNode('You are a Sagittarius with a positive outlook and a restless, vibrant personality, just like everyone’s favorite little mermaid. Sagittarius is the worldly adventurer of the zodiac. You dream big and chase the impossible, even if it means taking some risks. You love meeting new people, and will go to every length necessary to answer your life’s questions (even if you procrastinate a bit).');
  }
  else if(astroSign == 'Aqu'){
    pic.src = 'images/anna.png';
    pic.alt = 'You are Anna';
    song = annaAudio;
    titleContent = document.createTextNode( name_el.value + ', you are Anna');
    pContent = document.createTextNode('Despite your cold winter birthday, you are full of sunshine. Like Arendelle’s princess, you are friendly, honest, and loyal. Sometimes eccentric, you may seem silly and spaced out to others, but your wild imagination fuels your desire to make the world a better place. You don’t care what others think about you, and you thrive on new experiences.');
  }
  else if(astroSign == 'Cap'){
    pic.src = 'images/tiana.png';
    pic.alt = 'You are Tiana';
    song = tianaAudio;
    titleContent = document.createTextNode( name_el.value + ', you are Tiana');
    pContent = document.createTextNode('As a Capricorn, you are an ambitious planner, and you probably have a big goal. Like Tiana never gave up on owning a restaurant, you work toward what you want step by step. Though some may think you’re harsh, you actually have a great sense of humor, and you always get the job done.');
  }


  //ATTATCH CONTENT TO OVERLAY
  pic.classList.add('pic');
  title.classList.add('title');
  desc.classList.add('desc');

  title.appendChild(titleContent);
  desc.appendChild(pContent);

  overlay.appendChild(pic);
  overlay.appendChild(title);
  overlay.appendChild(desc);


  //MAKE OVERLAY FADE IN
  overlay.style.animation = '';
  overlay.style.top = '0';
  overlay.classList.add('overlayTransition');
  song.play();
}
 /*_____________________________________
|                                      |
|   END OF PRESSING SUBMIT FUNCTION    | 
|______________________________________|
*/




 /*_____________________________________
|                                      |
|     CLOSING AND CLEARING OVERLAY     | 
|______________________________________|
*/
//CLOSING THE OVERLAY WINDOW FUNCTION
function closeWindow(){
  overlay.style.animation = 'closeOverlay 1.5s linear forwards';
  container.classList.add('containerTransitionReverse');

  container.classList.remove('containerTransition');
  container.classList.remove('containerTransitionReverse');
  circle.classList.remove('circleTransition');

  song.pause();

  //CLEARING ZODIAC-SPECIFIC VALUES
  pic.src = '';
  pic.alt = '';
  title.innerHTML = '';
  desc.innerHTML = '';  
  
  overlay.classList.remove('overlayTransition');
  overlay.style.top = '8000rem';
  overlay.style.animation = '';
}


function clearOverlay(){
  song.pause();
  song = '';
  pic.src = '';
  pic.alt = '';
  title.innerHTML = '';
  desc.innerHTML = '';
}



 /*_____________________________________
|                                      |
|           ABBREVIATED SUBMIT         | 
|______________________________________|
*/
//This is for clicking on the icons at the bottom of the screen. This event is about half the length because there is no date evaluation required.
function abrvSubmit(astroSign){
  //SPIN THE LOADING CIRCLE
  circle.classList.add('circleTransition');

  //MAKE CONTENT FADE OUT
  container.classList.add('containerTransition');
  
  //ZODIAC CONTENT
      if(astroSign == 'Ari'){
        pic.src = 'images/mulan2.png';
        pic.alt = 'You are Mulan';
        song = mulanAudio;
        titleContent = document.createTextNode('Aries, you are Mulan');
        pContent = document.createTextNode('As an Aries, you are independent and courageous. Fueled by fire and the will to achieve, you are capable of accomplishing anything. Like Mulan, you are a trailblazer who doesn’t let others hold you back. Keep being fearless and fighting for your beliefs.');
      }
      else if(astroSign == 'Pis'){
        pic.src = 'images/aurora.png';
        pic.alt = 'You are Aurora';
        song = auroraAudio;
        titleContent = document.createTextNode('Pisces, you are Aurora');
        pContent = document.createTextNode('The Pisces is sometimes seen as an otherworldly being. Sensitive and reserved, you enjoy daydreaming and escaping from reality. The introverted Aurora didn’t mind growing up in a forest cottage with only three fairies and some local animals for company, and spent the time living in her imagination. You would probably also enjoy some time away from your busy life, going with the flow and singing to the birds.');
      }
      else if(astroSign == 'Tau'){
        pic.src = 'images/snowwhite2.png';
        pic.alt = 'You are Snow White';
        song = snowwhiteAudio;
        titleContent = document.createTextNode('Taurus, you are Snow White');
        pContent = document.createTextNode('Though you may be sweet, you are not to be underestimated. The Taurus is easy-going but resilient, with a strong sense of values. Like Snow White, you are persistent and do not give up when faced with negativity. You seek security and pursue a good life for yourself. Using patience and your warm heart, you always get the job done.');
      }
      else if(astroSign == 'Gem'){
        pic.src = 'images/belle.png';
        pic.alt = 'You are Belle';
        song = belleAudio;
        titleContent = document.createTextNode('Gemini, you are Belle');
        pContent = document.createTextNode('The Gemini is vibrant and versatile. You work well with others, even those who can be as difficult as a Beast, and you excel at communication. Like Belle, you are adaptive and intellectual, and you are consistently exploring places, people, and ideas to learn more. You crave a life of diverse experiences, and along the way, you make sure to stay true to yourself.');
      }
      else if(astroSign == 'Leo'){
        pic.src = 'images/jasmine2.png';
        pic.alt = 'You are Jasmine';
        song = jasmineAudio;
        titleContent = document.createTextNode('Leo, you are Jasmine');
        pContent = document.createTextNode('Leos are not afraid to question the rules, especially if they feel they are being held back from living their best life. Like Jasmine, you will not let yourself be pushed around, and make sure your voice is heard. Some may see you as a drama queen, but mainly, you carry an air of dignity and charm. People are naturally drawn to you, and this makes you a great leader.');
      }
      else if(astroSign == 'Can'){
        pic.src = 'images/rapunzel2.png';
        pic.alt = 'You are Rapunzel';
        song = rapunzelAudio;
        titleContent = document.createTextNode('Cancer, you are Rapunzel');
        pContent = document.createTextNode('Cancers are known to be nurturers and healers, and though you may not have the help of magic hair to do it for you, you know how to help those you love, and care about them deeply. You use your emotions to channel your imagination, and love to be creative. You are compassionate and see the good in others, and though sometimes cautious and sensitive, you are always strong-willed.');
      }
      else if(astroSign == 'Vir'){
        pic.src = 'images/cinderella.png';
        pic.alt = 'You are Cinderella';
        song = cinderellaAudio;
        titleContent = document.createTextNode('Virgo, you are Cinderella');
        pContent = document.createTextNode('Cinderella is often misunderstood as a love-obsessed airhead, but those familiar with her story know that she was lead by a kind, strong heart and fierce resilience. As a Virgo, you can be modest and shy, but you are led by a desire to do good work, and enjoy bettering yourself and those around you. You are organized and logical, but you always leave room for fun.');
      }
      else if(astroSign == 'Lib'){
        pic.src = 'images/pocahontas2.png';
        pic.alt = 'You are Pocahontas';
        song = pocahontasAudio;
        titleContent = document.createTextNode('Libra, you are Pocahontas');
        pContent = document.createTextNode('Libra is represented by the scales, which symbolize balance. Like Pocahontas, you inspire others to seek harmony and cooperation. You are hardworking and have big goals. Though you avoid conflict when possible, you value fairness, and are strategic when you need to get something done.');
      }
      else if(astroSign == 'Sco'){
        pic.src = 'images/moana.png';
        pic.alt = 'You are Moana';
        song = moanaAudio;
        titleContent = document.createTextNode( 'Scorpio, you are Moana');
        pContent = document.createTextNode('Scorpios are often seen as intense, and question everything. Like Moana, they are the investigators of the zodiac. Your combination of determination and curiosity means you are always looking for answers and working towards a goal. You are a master of your own life, and passionately move past all that stands in your way.');
      }
      else if(astroSign == 'Sag'){
        pic.src = 'images/ariel.png';
        pic.alt = 'You are Ariel';
        song = arielAudio;
        titleContent = document.createTextNode('Sagittarius, you are Ariel');
        pContent = document.createTextNode('You are a Sagittarius with a positive outlook and a restless, vibrant personality, just like everyone’s favorite little mermaid. Sagittarius is the worldly adventurer of the zodiac. You dream big and chase the impossible, even if it means taking some risks. You love meeting new people, and will go to every length necessary to answer your life’s questions (even if you procrastinate a bit).');
      }
      else if(astroSign == 'Aqu'){
        pic.src = 'images/anna.png';
        pic.alt = 'You are Anna';
        song = annaAudio;
        titleContent = document.createTextNode('Aquarius, you are Anna');
        pContent = document.createTextNode('Despite your cold winter birthday, you are full of sunshine. Like Arendelle’s princess, you are friendly, honest, and loyal. Sometimes eccentric, you may seem silly and spaced out to others, but your wild imagination fuels your desire to make the world a better place. You don’t care what others think about you, and you thrive on new experiences.');
      }
      else if(astroSign == 'Cap'){
        pic.src = 'images/tiana.png';
        pic.alt = 'You are Tiana';
        song = tianaAudio;
        titleContent = document.createTextNode('Capricorn, you are Tiana');
        pContent = document.createTextNode('As a Capricorn, you are an ambitious planner, and you probably have a big goal. Like Tiana never gave up on owning a restaurant, you work toward what you want step by step. Though some may think you’re harsh, you actually have a great sense of humor, and you always get the job done.');
      }
    
     //SET UP THE OVERLAY
      pic.classList.add('pic');
      title.classList.add('title');
      desc.classList.add('desc');
    
      title.appendChild(titleContent);
      desc.appendChild(pContent);
    
      overlay.appendChild(pic);
      overlay.appendChild(title);
      overlay.appendChild(desc);
    
    
      //MAKE OVERLAY FADE IN
      overlay.style.animation = '';
      overlay.style.top = '0';
      overlay.classList.add('overlayTransition');
      song.play();
}


 /*_____________________________________
|                                      |
|               HELP BUTTON            | 
|______________________________________|
*/
function instructions(){

  //SPIN THE LOADING CIRCLE
  circle.classList.add('circleTransition');

  //MAKE CONTENT FADE OUT
  container.classList.add('containerTransition');

  pic.src = 'images/doc.png';
  pic.alt = "Here's some help";
  titleContent = document.createTextNode('Instructions');
  desc.innerHTML = '1. Click in the box that say NAME and type your name.<br>2. Click in in the box that says mm/dd/yyyy and type your birthday. Example: 02/04/1938 <br>3. Click the SUBMIT button, and the princess with your personality will be revealed! <br>    OR<br>Click on one of the zodiac icons along the bottom to learn more.';


  //SET UP THE OVERLAY
  pic.classList.add('pic');
  title.classList.add('title');
  desc.classList.add('desc');

  title.appendChild(titleContent);

  overlay.appendChild(pic);
  overlay.appendChild(title);
  overlay.appendChild(desc);


  //MAKE OVERLAY FADE IN
  overlay.style.animation = '';
  overlay.style.top = '0';
  overlay.classList.add('overlayTransition');
}



 /*_____________________________________
|                                      |
|     FUNCTIONS AND EVENT LISTENERS    | 
|______________________________________|
*/
//CLOSING THE OVERLAY WINDOW
var closeButton = document.getElementById('closeButton');
closeButton.addEventListener("click", closeWindow, false);

//PRESSING SUBMIT
const form = document.getElementById('myForm');
form.addEventListener('submit', handleFormSubmit, false);

//PRESSING "HELP"
var helpButton = document.getElementById('help');
helpButton.addEventListener('click', instructions, false);


//EVENT LISTENERS FOR INDIVIDUAL ZODIACS
//CLICKS FOR THE ICONS AT THE BOTTOM OF THE SCREEN.
var ar = document.getElementById('ar');
var ta = document.getElementById('ta');
var ge = document.getElementById('ge');
var canc = document.getElementById('canc');
var le = document.getElementById('le');
var vi = document.getElementById('vi');
var li = document.getElementById('li');
var sc = document.getElementById('sc');
var sa = document.getElementById('sa');
var capr = document.getElementById('capr');
var aq = document.getElementById('aq');
var pi = document.getElementById('pi');

ar.addEventListener('click', clearOverlay, false);
ar.addEventListener("click", function(){
  abrvSubmit('Ari');
}, false);
ta.addEventListener('click', clearOverlay, false);
ta.addEventListener('click', function(){abrvSubmit('Tau'); }, false);
ge.addEventListener('click', clearOverlay, false);
ge.addEventListener('click', function(){abrvSubmit('Gem');}, false);
canc.addEventListener('click', clearOverlay, false);
canc.addEventListener('click', function(){abrvSubmit('Can');}, false);
le.addEventListener('click', clearOverlay, false);
le.addEventListener('click', function(){abrvSubmit('Leo');}, false);
vi.addEventListener('click', clearOverlay, false);
vi.addEventListener('click', function(){abrvSubmit('Vir');}, false);
li.addEventListener('click', clearOverlay, false);
li.addEventListener('click', function(){abrvSubmit('Lib');}, false);
sc.addEventListener('click', clearOverlay, false);
sc.addEventListener('click', function(){abrvSubmit('Sco');}, false);
sa.addEventListener('click', clearOverlay, false);
sa.addEventListener('click', function(){abrvSubmit('Sag');}, false);
capr.addEventListener('click', clearOverlay, false);
capr.addEventListener('click', function(){abrvSubmit('Cap');}, false);
aq.addEventListener('click', clearOverlay, false);
aq.addEventListener('click', function(){abrvSubmit('Aqu');}, false);
pi.addEventListener('click', clearOverlay, false);
pi.addEventListener('click', function(){abrvSubmit('Pis');}, false);

