function Function() {
	var x = document.getElementById("myTopnav");
	  if (x.className === "topnav") {
	    x.className += " responsive";
	  } else {
	    x.className = "topnav";
	  }
	}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View More"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "View Less"; 
    moreText.style.display = "inline";
  }
}

var i = 0;
var txt = "Saina Nehwal, the daughter of Harvir Singh Nehwal and Usha Rani Nehwal, was born in Hisar She has only one sibling, an elder sister named Chandranshu Nehwal.Her father, who has a PhD in agricultural science,worked at Chaudhary Charan Singh Haryana Agricultural University.She completed her first few years of schooling at Campus School CCS HAU, Hisar.She finished 12th grade from the St. Ann's College for Women, Hyderabad.When her father was promoted and transferred from Haryana to Hyderabad,she took up badminton at the age of eight to express herself as she did not know the local language well enough to socialise with other kids. Her parents played badminton for a number of years. Her mother, Usha Rani, was a state level badminton player in Haryana. Nehwal took up badminton to fulfill her mothers dream of becoming a national level badminton player, while her sister played volleyball.Her father, who was among the top players in the university circuit, used his provident fund to invest in good badminton training for her.After moving to Hyderabad in 1998, she was enrolled in a karate class by her parents, which she continued for a year and earned a brown belt.She started eating non-vegetarian food in 2005 while in China.";
var speed = 8;
function typeWriterInit() {
	i=0;
	document.getElementById("type").innerHTML ='';
	typeWriter();
}

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}