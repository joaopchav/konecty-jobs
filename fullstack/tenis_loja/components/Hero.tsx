import React from 'react';

interface HeroProps {
  title: string;
  description: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, image }) => {
  return (
    <section className="hero">
      <div className="container">
        <h1>{title}</h1>
        <p>{description}</p>
        <button>Explorar</button>
      </div>
    </section>
  );
};

export default Hero;