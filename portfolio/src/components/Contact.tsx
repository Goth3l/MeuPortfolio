import './Contact.css';
import { ComponentType } from 'react';
import { FaGithub, FaHome, FaBriefcase, FaEnvelope, FaInfo } from 'react-icons/fa';
import type { IconBaseProps } from 'react-icons';

const GitIcon = FaGithub as ComponentType<IconBaseProps>;

function Contact() {
  return (
    <div className="page">
      <div className="contact-card">
        <h2 className="contact-title">Entre em Contato</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" placeholder="Seu nome" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Seu email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" placeholder="Escreva sua mensagem" />
          </div>
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>
        <div className="contact-info">
          <p className="github">
            <a href="https://github.com/Goth3l" target="_blank" rel="noopener noreferrer">
              <GitIcon className="github-icon" /> github.com/Goth3l
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
