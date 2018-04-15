// function removeTransition(e) {
//   console.log(e);
//   if (e.propertyName !== 'transform') return;
//   e.target.classList.remove('playing');
// }

// function playSound(e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//   if (!audio) return;

//   key.classList.add('playing');
//   audio.currentTime = 0;
//   audio.play();
// }

// const keys = Array.from(document.querySelectorAll('.piano-key-white'));
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// window.addEventListener('keydown', playSound);



  function removeTransition(e){
    if(e.propertyName !== 'transform'){
      $(e.target).removeClass('playing');
    }
  }
  function playSound(e){
    const audio = $(`audio[data-key="${e.keyCode}"]`);
    const key = $(`div[data-key="${e.keyCode}"]`);
    if(!audio){
      return;
    }
    key.addClass(' playing');
    audio[0].currentTime = 0;
    audio[0].play();
  }
  const keys = Array.from($('.piano-key-white'));
  keys.forEach(key => $(key).on('transitionend', removeTransition));
  $(window).on('keydown', playSound);
