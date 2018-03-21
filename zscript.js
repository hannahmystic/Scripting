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


var overlay = document.getElementById('overlay');
var circle = document.getElementById('circleImage');
var song;


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

    var whichMonth = myDate.getUTCMonth()+1;
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


  //SPIN THE LOADING CIRCLE
  circle.classList.add('circleTransition');

  //MAKE CONTENT FADE OUT
  var container = document.getElementById('container');
  container.classList.add('containerTransition');


  //Put the right content in the overlay
  var pic = new Image();
      pic.id = 'pic';
  var title = document.createElement('H3');
      title.id = 'title';
  var desc = document.createElement('p');
      desc.id = 'desc';


  if(AstroSign == 'Ari'){
    pic.src = 'images/mulan2.png';
    pic.alt = 'You are Mulan';
    song = mulanAudio;
    var titleContent = document.createTextNode(name_el.value + ', you are Mulan');
    var pContent = document.createTextNode('As an Aries, you are independent and courageous. Fueled by fire and the will to achieve, you are capable of accomplishing anything. Like Mulan, you are a trailblazer who doesn’t let others hold you back. Keep being fearless and fighting for your beliefs.');
  }
  else if(AstroSign == 'Pis'){
    pic.src = 'images/aurora.png';
    pic.alt = 'You are Aurora';
    song = auroraAudio;
    var titleContent = document.createTextNode( name_el.value + ', you are Aurora');
    var pContent = document.createTextNode('The Pisces is sometimes seen as an otherworldly being. Sensitive and reserved, you enjoy daydreaming and escaping from reality. The introverted Aurora didn’t mind growing up in a forest cottage with only three fairies and some local animals for company, and spent the time living in her imagination. You would probably also enjoy some time away from your busy life, going with the flow and singing to the birds.');
  }
  else if(AstroSign == 'Tau'){
    pic.src = 'images/snowwhite2.png';
    pic.alt = 'You are Snow White';
    song = snowwhiteAudio;
    var titleContent = document.createTextNode( name_el.value + ', you are Snow White');
    var pContent = document.createTextNode('Though you may be sweet, you are not to be underestimated. The Taurus is easy-going but resilient, with a strong sense of values. Like Snow White, you are persistent and do not give up when faced with negativity. You seek security and pursue a good life for yourself. Using patience and your warm heart, you always get the job done.');
  }
  else if(AstroSign == 'Gem'){
    pic.src = 'images/belle.png';
    pic.alt = 'You are Belle';
    song = belleAudio;
    var titleContent = document.createTextNode( name_el.value + ', you are Belle');
    var pContent = document.createTextNode('The Gemini is vibrant and versatile. You work well with others, even those who can be as difficult as a Beast, and you excel at communication. Like Belle, you are adaptive and intellectual, and you are consistently exploring places, people, and ideas to learn more. You crave a life of diverse experiences, and along the way, you make sure to stay true to yourself.');
  }
  else if(AstroSign == 'Leo'){
    pic.src = 'images/jasmine2.png';
    pic.alt = 'You are Jasmine';
    song = jasmineAudio;
    var titleContent = document.createTextNode( name_el.value + ', you are Jasmine');
    var pContent = document.createTextNode('Leos are not afraid to question the rules, especially if they feel they are being held back from living their best life. Like Jasmine, you will not let yourself be pushed around, and make sure your voice is heard. Some may see you as a drama queen, but mainly, you carry an air of dignity and charm. People are naturally drawn to you, and this makes you a great leader.');
  }
  else if(AstroSign == 'Can'){
    pic.src = 'images/rapunzel2.png';
    pic.alt = 'You are Rapunzel';
    song = rapunzelAudio;
    var titleContent = document.createTextNode( name_el.value + ', you are Rapunzel');
    var pContent = document.createTextNode('Cancers are known to be nurturers and healers, and though you may not have the help of magic hair to do it for you, you know how to help those you love, and care about them deeply. You use your emotions to channel your imagination, and love to be creative. You are compassionate and see the good in others, and though sometimes cautious and sensitive, you are always strong-willed.');
  }
  else if(AstroSign == 'Vir'){
    pic.src = 'images/cinderella.png';
    pic.alt = 'You are Cinderella';
    song = cinderellaAudio;
    var titleContent = document.createTextNode( name_el.value + ', you are Cinderella');
    var pContent = document.createTextNode('Cinderella is often misunderstood as a love-obsessed airhead, but those familiar with her story know that she was lead by a kind, strong heart and fierce resilience. As a Virgo, you can be modest and shy, but you are led by a desire to do good work, and enjoy bettering yourself and those around you. You are organized and logical, but you always leave room for fun.');
  }
  else if(AstroSign == 'Lib'){
    pic.src = 'images/pocahontas2.png';
    pic.alt = 'You are Pocahontas';
    song = pocahontasAudio;
    var titleContent = document.createTextNode( name_el.value + ', you are Pocahontas');
    var pContent = document.createTextNode('Libra is represented by the scales, which symbolize balance. Like Pocahontas, you inspire others to seek harmony and cooperation. You are hardworking and have big goals. Though you avoid conflict when possible, you value fairness, and are strategic when you need to get something done.');
  }
  else if(AstroSign == 'Sco'){
    pic.src = 'images/moana.png';
    pic.alt = 'You are Moana';
    song = moanaAudio;
    var titleContent = document.createTextNode( name_el.value + ', you are Moana');
    var pContent = document.createTextNode('Scorpios are often seen as intense, and question everything. Like Moana, they are the investigators of the zodiac. Your combination of determination and curiosity means you are always looking for answers and working towards a goal. You are a master of your own life, and passionately move past all that stands in your way.');
  }
  else if(AstroSign == 'Sag'){
    pic.src = 'images/ariel.png';
    pic.alt = 'You are Ariel';
    song = arielAudio;
    var titleContent = document.createTextNode( name_el.value + ', you are Ariel');
    var pContent = document.createTextNode('You are a Sagittarius with a positive outlook and a restless, vibrant personality, just like everyone’s favorite little mermaid. Sagittarius is the worldly adventurer of the zodiac. You dream big and chase the impossible, even if it means taking some risks. You love meeting new people, and will go to every length necessary to answer your life’s questions (even if you procrastinate a bit).');
  }
  else if(AstroSign == 'Aqu'){
    pic.src = 'images/anna.png';
    pic.alt = 'You are Anna';
    song = annaAudio;
    var titleContent = document.createTextNode( name_el.value + ', you are Anna');
    var pContent = document.createTextNode('Despite your cold winter birthday, you are full of sunshine. Like Arendelle’s princess, you are friendly, honest, and loyal. Sometimes eccentric, you may seem silly and spaced out to others, but your wild imagination fuels your desire to make the world a better place. You don’t care what others think about you, and you thrive on new experiences.');
  }
  else if(AstroSign == 'Cap'){
    pic.src = 'images/tiana.png';
    pic.alt = 'You are Tiana';
    song = tianaAudio;
    var titleContent = document.createTextNode( name_el.value + ', you are Tiana');
    var pContent = document.createTextNode('As a Capricorn, you are an ambitious planner, and you probably have a big goal. Like Tiana never gave up on owning a restaurant, you work toward what you want step by step. Though some may think you’re harsh, you actually have a great sense of humor, and you always get the job done.');
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


//ABREVIATED SUBMIT
//This is for clicking on the icons at the bottom of the screen. This event is about half the length because there is no date evaluation required.
function abrvSubmit(AstroSign){
  //SPIN THE LOADING CIRCLE
  circle.classList.add('circleTransition');

  //MAKE CONTENT FADE OUT
  var container = document.getElementById('container');
  container.classList.add('containerTransition');

  //Put the right content in the overlay
  var pic = new Image();
      pic.id = 'pic';
  var title = document.createElement('H3');
      title.id = 'title';
  var desc = document.createElement('p');
      desc.id = 'desc';

      if(AstroSign == 'Ari'){
        pic.src = 'images/mulan2.png';
        pic.alt = 'You are Mulan';
        song = mulanAudio;
        var titleContent = document.createTextNode( 'You are Mulan');
        var pContent = document.createTextNode('As an Aries, you are independent and courageous. Fueled by fire and the will to achieve, you are capable of accomplishing anything. Like Mulan, you are a trailblazer who doesn’t let others hold you back. Keep being fearless and fighting for your beliefs.');
      }
    
      else if(AstroSign == 'Pis'){
        pic.src = 'images/aurora.png';
        pic.alt = 'You are Aurora';
        song = auroraAudio;
        var titleContent = document.createTextNode( name_el.value + 'You are Aurora');
        var pContent = document.createTextNode('The Pisces is sometimes seen as an otherworldly being. Sensitive and reserved, you enjoy daydreaming and escaping from reality. The introverted Aurora didn’t mind growing up in a forest cottage with only three fairies and some local animals for company, and spent the time living in her imagination. You would probably also enjoy some time away from your busy life, going with the flow and singing to the birds.');
      }
      else if(AstroSign == 'Tau'){
        pic.src = 'images/snowwhite2.png';
        pic.alt = 'You are Snow White';
        song = snowwhiteAudio;
        var titleContent = document.createTextNode( name_el.value + 'You are Snow White');
        var pContent = document.createTextNode('Though you may be sweet, you are not to be underestimated. The Taurus is easy-going but resilient, with a strong sense of values. Like Snow White, you are persistent and do not give up when faced with negativity. You seek security and pursue a good life for yourself. Using patience and your warm heart, you always get the job done.');
      }
      else if(AstroSign == 'Gem'){
        pic.src = 'images/belle.png';
        pic.alt = 'You are Belle';
        song = belleAudio;
        var titleContent = document.createTextNode( name_el.value + 'You are Belle');
        var pContent = document.createTextNode('The Gemini is vibrant and versatile. You work well with others, even those who can be as difficult as a Beast, and you excel at communication. Like Belle, you are adaptive and intellectual, and you are consistently exploring places, people, and ideas to learn more. You crave a life of diverse experiences, and along the way, you make sure to stay true to yourself.');
      }
      else if(AstroSign == 'Leo'){
        pic.src = 'images/jasmine2.png';
        pic.alt = 'You are Jasmine';
        song = jasmineAudio;
        var titleContent = document.createTextNode( name_el.value + 'You are Jasmine');
        var pContent = document.createTextNode('Leos are not afraid to question the rules, especially if they feel they are being held back from living their best life. Like Jasmine, you will not let yourself be pushed around, and make sure your voice is heard. Some may see you as a drama queen, but mainly, you carry an air of dignity and charm. People are naturally drawn to you, and this makes you a great leader.');
      }
      else if(AstroSign == 'Can'){
        pic.src = 'images/rapunzel2.png';
        pic.alt = 'You are Rapunzel';
        song = rapunzelAudio;
        var titleContent = document.createTextNode( name_el.value + 'You are Rapunzel');
        var pContent = document.createTextNode('Cancers are known to be nurturers and healers, and though you may not have the help of magic hair to do it for you, you know how to help those you love, and care about them deeply. You use your emotions to channel your imagination, and love to be creative. You are compassionate and see the good in others, and though sometimes cautious and sensitive, you are always strong-willed.');
      }
      else if(AstroSign == 'Vir'){
        pic.src = 'images/cinderella.png';
        pic.alt = 'You are Cinderella';
        song = cinderellaAudio;
        var titleContent = document.createTextNode( name_el.value + 'You are Cinderella');
        var pContent = document.createTextNode('Cinderella is often misunderstood as a love-obsessed airhead, but those familiar with her story know that she was lead by a kind, strong heart and fierce resilience. As a Virgo, you can be modest and shy, but you are led by a desire to do good work, and enjoy bettering yourself and those around you. You are organized and logical, but you always leave room for fun.');
      }
      else if(AstroSign == 'Lib'){
        pic.src = 'images/pocahontas2.png';
        pic.alt = 'You are Pocahontas';
        song = pocahontasAudio;
        var titleContent = document.createTextNode( name_el.value + 'You are Pocahontas');
        var pContent = document.createTextNode('Libra is represented by the scales, which symbolize balance. Like Pocahontas, you inspire others to seek harmony and cooperation. You are hardworking and have big goals. Though you avoid conflict when possible, you value fairness, and are strategic when you need to get something done.');
      }
      else if(AstroSign == 'Sco'){
        pic.src = 'images/moana.png';
        pic.alt = 'You are Moana';
        song = moanaAudio;
        var titleContent = document.createTextNode( name_el.value + 'You are Moana');
        var pContent = document.createTextNode('Scorpios are often seen as intense, and question everything. Like Moana, they are the investigators of the zodiac. Your combination of determination and curiosity means you are always looking for answers and working towards a goal. You are a master of your own life, and passionately move past all that stands in your way.');
      }
      else if(AstroSign == 'Sag'){
        pic.src = 'images/ariel.png';
        pic.alt = 'You are Ariel';
        song = arielAudio;
        var titleContent = document.createTextNode( name_el.value + 'You are Ariel');
        var pContent = document.createTextNode('You are a Sagittarius with a positive outlook and a restless, vibrant personality, just like everyone’s favorite little mermaid. Sagittarius is the worldly adventurer of the zodiac. You dream big and chase the impossible, even if it means taking some risks. You love meeting new people, and will go to every length necessary to answer your life’s questions (even if you procrastinate a bit).');
      }
      else if(AstroSign == 'Aqu'){
        pic.src = 'images/anna.png';
        pic.alt = 'You are Anna';
        song = annaAudio;
        var titleContent = document.createTextNode( name_el.value + 'You are Anna');
        var pContent = document.createTextNode('Despite your cold winter birthday, you are full of sunshine. Like Arendelle’s princess, you are friendly, honest, and loyal. Sometimes eccentric, you may seem silly and spaced out to others, but your wild imagination fuels your desire to make the world a better place. You don’t care what others think about you, and you thrive on new experiences.');
      }
      else if(AstroSign == 'Cap'){
        pic.src = 'images/tiana.png';
        pic.alt = 'You are Tiana';
        song = tianaAudio;
        var titleContent = document.createTextNode( name_el.value + 'You are Tiana');
        var pContent = document.createTextNode('As a Capricorn, you are an ambitious planner, and you probably have a big goal. Like Tiana never gave up on owning a restaurant, you work toward what you want step by step. Though some may think you’re harsh, you actually have a great sense of humor, and you always get the job done.');
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


//CLOSING THE OVERLAY WINDOW
var closeButton = document.getElementById('closeButton');
closeButton.addEventListener("click", closeWindow, false);



//PRESSING SUBMIT
const form = document.getElementById('myForm');
form.addEventListener('submit', handleFormSubmit, false);




//EVENT LISTENERS FOR INDIVIDUAL ZODIACS
//CLICKS FOR THE ICONS AT THE BOTTOM OF THE SCREEN.
var ar = document.getElementById(ar);
var ta = document.getElementById(ta);
var ge = document.getElementById(ge);
var ca = document.getElementById(ca);
var le = document.getElementById(le);
var vi = document.getElementById(vi);
var li = document.getElementById(li);
var sc = document.getElementById(sc);
var sa = document.getElementById(sa);
var ca = document.getElementById(ca);
var aq = document.getElementById(aq);
var pi = document.getElementById(pi);

ar.addEventListener('click', function(){
  abrvSubmit('Ari');
}, false);
ta.addEventListener('click', function(){abrvSubmit('Tau'); }, false);
ge.addEventListener('click', function(){abrvSubmit('Gem');}, false);
ca.addEventListener('click', function(){abrvSubmit('Can');}, false);
le.addEventListener('click', function(){abrvSubmit('Leo');}, false);
vi.addEventListener('click', function(){abrvSubmit('Vir');}, false);
li.addEventListener('click', function(){abrvSubmit('Lib');}, false);
sc.addEventListener('click', function(){abrvSubmit('Sco');}, false);
sa.addEventListener('click', function(){abrvSubmit('Sag');}, false);
ca.addEventListener('click', function(){abrvSubmit('Cap');}, false);
aq.addEventListener('click', function(){abrvSubmit('Aqu');}, false);
pi.addEventListener('click', function(){abrvSubmit('Pis');}, false);



/*
FOR CHECKING USER Text
https://github.com/philsinatra/IDM231/blob/master/examples/events/anonymous_listeners.js
*/