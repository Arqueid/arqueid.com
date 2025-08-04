function scrollCarousel(id, direction) {
  const carousel = document.getElementById(id);
  const scrollAmount = 200; // Pixels to scroll
  carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

function openPopup(videoSrc) {
  const popup = document.getElementById('videoPopup');
  const video = document.getElementById('popupVideo');
  video.src = videoSrc;
  popup.style.display = 'flex';
}

function closePopup(e) {
  if (e.target.id === 'videoPopup') {
    const video = document.getElementById('popupVideo');
    video.pause();
    video.currentTime = 0;
    video.src = '';
    e.target.style.display = 'none';
  }
}
function filterVideos() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const videoItems = document.querySelectorAll('.video-item');

  videoItems.forEach(item => {
    const tags = item.dataset.tags?.toLowerCase() || '';
    const match = tags.includes(searchTerm);
    item.style.display = match || searchTerm === '' ? 'block' : 'none';
  });
}
