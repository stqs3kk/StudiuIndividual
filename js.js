function showImage(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
  
    lightbox.style.display = 'flex'; // Afișează containerul lightbox
    lightboxImg.src = src; // Setează sursa imaginii
  }
  
  function closeImage() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Ascunde lightbox-ul
  }