window.addEventListener('load',() => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const colors = [
    "#ffaa88",
    "#316197",
    "#c92e2e",
    "#3ec074",
    "#d5d355",
    "#a12ba5"
  ];

  //Lets get going with the sound here
  pads.forEach((pad,index) => {
    pad.addEventListener('click',function(){
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubbles(index);
    });
  });
  
  //Create a function that makes bubbles
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend',function(){
      visual.removeChild(this);
    });
  };
});