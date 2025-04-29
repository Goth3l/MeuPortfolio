import { useEffect } from 'react';

export const useModal = () => {
  useEffect(() => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage') as HTMLImageElement;
    const modalDesc = document.getElementById('modalDescription');
    const closeBtn = document.getElementsByClassName('close')[0];
    const images = document.querySelectorAll('.image.fit');

    const openModal = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      if (modal && modalImg && modalDesc && target instanceof HTMLElement) {
        modal.style.display = 'block';
        const img = target.querySelector('img');
        if (img) {
          modalImg.src = img.src;
          modalDesc.textContent = target.getAttribute('data-description') || '';
        }
      }
    };

    const closeModal = () => {
      if (modal) {
        modal.style.display = 'none';
      }
    };

    images.forEach(image => {
      image.addEventListener('click', openModal);
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    window.onclick = (event) => {
      if (event.target === modal) {
        closeModal();
      }
    };

    return () => {
      images.forEach(image => {
        image.removeEventListener('click', openModal);
      });
      if (closeBtn) {
        closeBtn.removeEventListener('click', closeModal);
      }
    };
  }, []);
}; 