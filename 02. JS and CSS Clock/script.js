function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const degSec = seconds * 6 + 90;
  const degMin = minutes * 6 + 90;
  const degHrs = hours * 30 + 90;

  document.querySelector('.second-hand').style.transform = "rotate(" + degSec + "deg)";
  document.querySelector('.min-hand').style.transform = "rotate(" + degMin + "deg)";
  document.querySelector('.hour-hand').style.transform = "rotate(" + degHrs + "deg)";
  console.log(hours + ":" + minutes + ":" + seconds);
}

//  0 = 90deg
//  1 = 96deg  
// 15 = 180deg


setInterval(setDate, 1000) 