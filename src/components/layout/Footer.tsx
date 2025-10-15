import { Linkedin, Github, Instagram } from 'react-bootstrap-icons';

export const Footer = () => {
  return (
    <footer className="py-4" style={{ backgroundColor: '#0c0c0c' }}>
      <div className="container text-center">
        <p className="text-muted mb-2">&copy; 2025 Fábio Damas Valim. Todos os direitos reservados.</p>
        <div>
          <a href="https://www.linkedin.com/in/fabio-valim/" target='_blank' rel="noreferrer" className="text-muted me-3"><Linkedin size={20} className='icon-footer' /></a>
          <a href="https://github.com/fabiovalim" target='_blank' rel="noreferrer" className="text-muted me-3"><Github size={20} className='icon-footer' /></a>
          <a href="https://www.instagram.com/fabiovalim/" target='_blank' rel="noreferrer" className="text-muted"><Instagram size={20} className='icon-footer' /></a>
        </div>
      </div>
    </footer>
  );
};