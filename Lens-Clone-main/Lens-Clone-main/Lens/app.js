
function OpenMenu(){
    document.getElementById("MenuSection").style.width = "23%";
    document.getElementById("MenuSection").style.overflowY = "scroll";
    document.getElementById("MenuSection").style.float = "right";
    // document.getElementsByClassName("BackImg1").style.width = "77%";
    let Bg = document.getElementsByClassName("SliderImg");
    for (i = 0; i < Bg.length; i++) {
        Bg[i].style.width = "77%";
      }
    document.getElementById("Close").style.display = "block";
    document.getElementById("Open").style.display = "none";
    document.getElementById("Next").style.right = "24%"
}

function CloseMenu(){
    
    document.getElementById("MenuSection").style.width = "0";
    document.getElementById("MenuSection").style.overflowY = "hidden";
    // document.getElementsByClassName("BackImg1").style.width = "100%";
    let Bg = document.getElementsByClassName("SliderImg");
    for (i = 0; i < Bg.length; i++) {
        Bg[i].style.width = "100%";
      }
    document.getElementById("Close").style.display = "none";
    document.getElementById("Open").style.display = "block";
    document.getElementById("Next").style.right = "0.5%"
}

let slideIndex = 1;
showSlides(slideIndex);

function addSlide(n) {
  showSlides(slideIndex += n);
}

function CurrentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("BackImg1");
  let dots = document.getElementsByClassName("ThumbNail");
  let caph = document.getElementsByClassName("CaptionH2");
  let capp = document.getElementsByClassName("CaptionP");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].style.outline = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  caph[slideIndex-1].style.display = "block";
  capp[slideIndex-1].style.display = "block";
  dots[slideIndex-1].style.outline = "#00d3b7 solid 2px";
}