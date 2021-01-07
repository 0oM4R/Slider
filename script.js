var imgs = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem")
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");
var outSlide = document.getElementById("lightBoxContainer")
var currentInedx = 0;
//add events to switch slides or close slider
nextBtn.addEventListener("click", function (eventInfo) {
    nextSlide(eventInfo.target.getAttribute("src"))

})
prevBtn.addEventListener("click", function (eventInfo) {
    prevSlide(eventInfo.target.getAttribute("src"))
})
closeBtn.addEventListener("click", closeSlide);

outSlide.addEventListener("click", function (eventInfo) {
    if (eventInfo.target.id == "lightBoxContainer") {
        closeSlide();
    }
});
addEventListener("keydown", function (eventInfo) {
    if (eventInfo.key == "ArrowRight") {
        nextSlide(eventInfo.target.getAttribute("src"))
    }
    else if (eventInfo.key == "ArrowLeft") {
        prevSlide(eventInfo.target.getAttribute("src"))
    }
    else if (eventinfo.key == "Escape") {
        closeSlide();
    }
})

//adding event  to display the slide with the targted photo
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (eventInfo) {
        displaySlide(eventInfo.target.getAttribute("src"))
        currentInedx = imgs.indexOf(eventInfo.target)
    })
}

//switch and close fuunctions 
function displaySlide(imgSrc) {
    lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")"
    lightBoxContainer.style.display = "flex"
}

function closeSlide() {
    lightBoxContainer.style.display = "none"
}

function nextSlide(currentIndex) {
    currentInedx++;
    if (currentInedx == imgs.length) {
        currentInedx = 0;
    }
    displaySlide(imgs[currentInedx].getAttribute("src"))
}

function prevSlide(currentIndex) {

    if (currentInedx == 0) {
        currentInedx = imgs.length - 1;
    } else currentInedx--;
    displaySlide(imgs[currentInedx].getAttribute("src"))
}