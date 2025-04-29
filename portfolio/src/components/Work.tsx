import { useState } from 'react';
import './Work.css';
import pic01 from '../assets/images/pic01.png';
import pic02 from '../assets/images/pic02.png';
import pic03 from '../assets/images/pic03.png';
import pic04 from '../assets/images/pic04.png';
import pic05 from '../assets/images/pic05.png';
import pic06 from '../assets/images/pic06.png';

type ImageData = {
  id: string;
  src: string;
  alt: string;
};

const images: ImageData[] = [
  { id: 'pic01', src: pic01, alt: 'Calculadora Flutter' },
  { id: 'pic02', src: pic02, alt: 'Protótipos Origamid' },
  { id: 'pic03', src: pic03, alt: 'App IA Origamid' },
  { id: 'pic04', src: pic04, alt: 'Sobreposição de cores Origamid' },
  { id: 'pic05', src: pic05, alt: 'Site de viagens Origamid' },
  { id: 'pic06', src: pic06, alt: 'Conversor Flutter' },
];

function Work() {
  const [visibleImage, setVisibleImage] = useState<ImageData | null>(null);

  const handleClick = (image: ImageData) => {
    setVisibleImage(image);
  };

  const closeModal = () => {
    setVisibleImage(null);
  };

  return (
    <div className="work-card">
      <h2 className="work-title">Meus Projetos</h2>
      <div className="project-list">
        {images.map((image) => (
          <div className="project-item" key={image.id}>
            <h3 className="project-title" onClick={() => handleClick(image)}>
              {image.alt}
            </h3>
          </div>
        ))}
      </div>

      {visibleImage && (
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <img src={visibleImage.src} alt={visibleImage.alt} className="fullscreen-image" />
          </div>
      )}
    </div>
  );
}

export default Work;
