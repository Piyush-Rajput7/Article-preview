const shareToggle = document.getElementById('share-toggle');
const shareMenu = document.getElementById('share-menu');
const authorInfo = document.getElementById('author-info');

shareToggle.addEventListener('click', () => {
  if (shareMenu.hasAttribute('hidden')) {
    shareMenu.removeAttribute('hidden');
  
    if (window.innerWidth <= 768) {
      authorInfo.style.display = 'none';
    }
  } else {
    shareMenu.setAttribute('hidden', '');
    authorInfo.style.display = '';
  }
});
 

