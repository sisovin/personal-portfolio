import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-8">
          I'm a passionate developer with a love for creating amazing web
          experiences.
        </p>
        <Button variant="primary" className="px-8 py-4">
          Get in Touch
        </Button>
      </div>
    </section>
  );
};

export default Hero;
