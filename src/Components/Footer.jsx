import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <img src={`${process.env.PUBLIC_URL}/images/DH.png`} alt='DH-logo' />
    </footer>
  );
};

export default Footer;

