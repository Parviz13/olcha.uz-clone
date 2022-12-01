
const deadline = 'December 2022 1 23:59'

console.log(deadline);

function getTime(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
        hours = Math.round((t / (1000 * 60 * 60)) % 24),
        minutes = Math.round((t / 1000 / 60) % 60),
        seconds = Math.round((t / 1000) % 60);

    return {
        t,
        hours,
        minutes,
        seconds
    }
}

function setTime(selector, endtime) {
    const timer = document.querySelector(selector),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        updateInt = setInterval(updateTime, 1)


    function updateTime() {
        const t = getTime(endtime)

        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds

        if (t.t <= 0) {
            clearInterval(updateInt)
        }
    }

}

setTime('.timer', deadline)











let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}










