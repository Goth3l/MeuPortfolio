import './Home.css';
import EuMesma from '../assets/images/Eu.png';

function Home() {
  return (
    <div className="home-card">
      <img src={EuMesma} alt="Nycolle Barbosa" className="profile-photo" />
      <h1 className="title">Nycolle Barbosa</h1>
      <p className="description">Estudante / Futura UX UI Designer</p>
    </div>
  );
}

export default Home;
