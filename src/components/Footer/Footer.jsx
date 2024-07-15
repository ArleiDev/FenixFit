import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-violet-900 text-white text-center py-4">
      <p className="text-sm">
        Todos os direitos reservados &copy; FENIXFIT {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
