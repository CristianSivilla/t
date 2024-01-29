import React from 'react';
import '../styles/Footer.css';
import icon_green from '../assets/icon_green.png';

const Footer = () => {
  return (
   <footer>
    <img className="img_icon" src={icon_green} alt="buscador"/>
   </footer>
  );
}

export default Footer;
