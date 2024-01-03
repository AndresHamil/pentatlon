import React, { useState, useEffect } from 'react';
import './Login.scss';

import backgroundImage1 from '../../../src/assets/img/login-1.webp';
import backgroundImage2 from '../../../src/assets/img/login-2.webp';
import backgroundImage3 from '../../../src/assets/img/login-3.webp';
import backgroundImage4 from '../../../src/assets/img/login-4.webp';

const Login = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const backgrounds = [backgroundImage4, backgroundImage3, backgroundImage1, backgroundImage2];

  const preloadImages = () => {
    backgrounds.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });
  };

  useEffect(() => {
    preloadImages();

    const intervalId = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        setIsFading(false);
      }, 1000);
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${backgrounds[backgroundIndex]})`,
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="login" style={backgroundStyle}>
      <div className="login_panel">Login</div>
      <div className="login_content">
        <div className="login_content_section">
          <div className="login_content_section_text">
            <label>¡Bienvenido!</label>
            <label>
              <span>Siguiendo</span> cada una de tus metas cumplidas
            </label>
            <label>
              en <span>cada momento</span>
            </label>
            <p>
              El Pentathlón Deportivo Militar Universitario busca la grandeza de la Patria a través de la defensa de
              la libertad, el honor y la cultura, promoviendo el respeto y progreso de las instituciones mediante el
              trabajo, el orden y la fraternidad.
            </p>
          </div>
          <div className="login_content_section_information">©{currentYear} Pentatlon.</div>
        </div>
      </div>
    </div>
  );
};

export default Login;