const clock = document.querySelector(".clock");

getClock();
setInterval(getClock, 1000);

function getClock() {
  const date = new Date();

  let ampm = "AM";
  let hr = date.getHours();

  if (hr === 12) {
    ampm = "PM";
  } else if (hr > 12) {
    ampm = "PM";
    hr -= 12;
  }

  hr = hr.toString().padStart(2, "0");
  const min = date.getMinutes().toString().padStart(2, "0");
  const sec = date.getSeconds().toString().padStart(2, "0");

  clock.innerText = `${ampm} ${hr}:${min}:${sec}`;
}
