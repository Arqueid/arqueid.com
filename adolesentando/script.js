function loadRandomVideo() {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoTitle = document.getElementById('videoTitle');
    const videoAuthor = document.getElementById('videoAuthor');
    
    const randomIndex = Math.floor(Math.random() * videoList.length);
    const selectedVideo = videoList[randomIndex];
    
    videoPlayer.src = selectedVideo.url;
    videoTitle.textContent = selectedVideo.title;
    videoAuthor.textContent = selectedVideo.author;
    
    videoPlayer.load();
    videoPlayer.play();
}

// Carrega vídeo aleatório ao carregar a página
window.addEventListener('load', loadRandomVideo);

// Detecta gesto de swipe
let touchstartY = 0;

document.addEventListener('touchstart', e => {
    touchstartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', e => {
    const touchendY = e.changedTouches[0].screenY;
    const deltaY = touchendY - touchstartY;

    if (deltaY < -50) { // Swipe para baixo
        loadRandomVideo();
    }
});

// Atualiza ao recarregar
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});