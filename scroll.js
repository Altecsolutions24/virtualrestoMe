const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
  
        // Check if the target is the plate container in the Home section
        if (entry.target.classList.contains('plate-container-home')) {
          entry.target.classList.add('active');
        }
      } else {
        entry.target.classList.remove('show');
  
        // Check if the target is the plate container in the Home section
        if (entry.target.classList.contains('plate-container-home')) {
          entry.target.classList.remove('active');
        }
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  
  const homeContainer = document.querySelector('.plate-container-home');
  const ordersContainer = document.querySelector('.plate-container-orders');
  const orderLink = document.querySelector('a[href="#Orders"]');
  
  orderLink.addEventListener('click', () => {
    homeContainer.classList.remove('active');
    ordersContainer.classList.add('active');
  
    // Animate the plate image container
    homeContainer.style.transform = 'translateY(-100%)';
    homeContainer.style.opacity = '0';
    ordersContainer.style.transform = 'translate(-50%, -50%)';
    ordersContainer.style.opacity = '1';
  });

  
const getBtn = document.getElementById('myBtn');
const openModal = document.getElementById('myModal');
const closeit = document.getElementsByClassName('btn'[0]);

getBtn.onclick = function() {
  modal.style.display = 'none';
};


const audioelement = document.getElementById('my_audio');
const controller = document.getElementById('my_audios');
audioelement.play();

if (audioelement.paused){
  audioelement.play();
}else{
  audioelement.pause();
}



// Get the modal
var modal = document.getElementById("myModal");

// When the page loads, open the modal
window.onload = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const playButton = document.getElementById('my_audios');

const audio = document.createElement('audio');
audio.src = 'del.mp3';

playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.innerHTML = '<span><i class="fa-solid fa-pause"></i></span>&nbsp; Pause Music';
  } else {
    audio.pause();
    playButton.innerHTML = '<span><i class="fa-solid fa-play"></i></span>&nbsp; Play Music';
  }
});
