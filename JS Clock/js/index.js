const secondHand = $('.second-hand');
const minsHand = $('.min-hand');
const hourHand = $('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.css('transform', `rotate(${secondsDegrees}deg)`);

  let rotationValueFunc = function(value){
    let rotationValue = (value.css('transform', 'rotate')[0].style.transform.split(' ')[0]).replace(/[^\d.-]/g, '');
    if(rotationValue == 90){
      $('.hand').removeClass('transition');
    }
  }
  rotationValueFunc(secondHand);

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.css('transform', `rotate(${minsDegrees}deg)`);
  rotationValueFunc(minsHand);

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.css('transform', `rotate(${hourDegrees}deg)`);
  rotationValueFunc(hourHand);
}
setInterval(setDate, 1000);

setDate();

// const secondHand = document.querySelector('.second-hand');
// const minsHand = document.querySelector('.min-hand');
// const hourHand = document.querySelector('.hour-hand');
//
// function setDate() {
//   const now = new Date();
//
//   const seconds = now.getSeconds();
//   const secondsDegrees = ((seconds / 60) * 360) + 90;
//   console.log(secondHand.style);
//   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
//
//   const mins = now.getMinutes();
//   const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
//   minsHand.style.transform = `rotate(${minsDegrees}deg)`;
//
//   const hour = now.getHours();
//   const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
//   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
// }
//
// setInterval(setDate, 1000);
//
// setDate();
