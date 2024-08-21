import React from 'react';
// import teamPhoto from '../assets/team-placeholder.png'; // Placeholder image path

const About = () => {
  return (
    <div className="bg-[#EEF1F6] text-[#534998] p-8">
      {/* Mission Section */}
      <section className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4">MISSION</h2>
        <p className="text-lg leading-relaxed text-justify max-w-3xl mx-auto">
          STEP ON aims to promote sustainable societal solutions through enhanced use of leading-edge technology.
        </p>
      </section>

      {/* Vision Section */}
      <section className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4">VISION</h2>
        <p className="text-lg leading-relaxed text-justify max-w-3xl mx-auto">
          To provide sustainable and innovative solutions with a standard of excellence.
        </p>
      </section>

      {/* About Us Section */}
      <section className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4">ABOUT US</h2>
        <p className="text-lg leading-relaxed text-justify max-w-3xl mx-auto">
          STEP ON is a dynamic IT solutions provider, established in 2024. Born out of a passion for innovation and a deep understanding of the digital landscape, we specialize in crafting cutting-edge web applications and automating complex processes. We have been committed to delivering exceptional IT solutions that drive growth and efficiency. With a team of skilled developers and automation experts, we are dedicated to helping our clients navigate the complexities of the digital world. From conceptualizing innovative web platforms to automating complex processes, we consistently exceed client expectations. With a keen eye for emerging trends and a deep understanding of industry best practices, we have established ourselves as a trusted partner for businesses seeking to thrive in the digital era.
        </p>
      </section>

      {/* Values Section */}
      <section className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4">OUR VALUES</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed text-justify max-w-3xl mx-auto space-y-4">
          <li><strong>INTEGRITY:</strong> We will be fair, honest, transparent, and ethical in our conduct; everything we do must stand the test of public scrutiny.</li>
          <li><strong>RESPONSIBILITY:</strong> We will integrate environmental and social principles in our businesses, ensuring that what comes from the people goes back to the people many times over.</li>
          <li><strong>UNITY:</strong> We will invest in our people, enable continuous learning, and build caring and collaborative relationships based on trust and mutual respect.</li>
          <li><strong>ACCOUNTABILITY:</strong> We take responsibility for our actions and decisions, and hold others accountable as well.</li>
          <li><strong>INNOVATION:</strong> We will encourage creativity and seek new, effective, and sustainable solutions.</li>
          <li><strong>SUSTAINABILITY:</strong> We will be sustainable in our methods of operation and follow the societal good.</li>
          <li><strong>EXCELLENCE:</strong> We strive for excellence achieved through a culture of hard work and where the best talent is acknowledged.</li>
        </ul>
      </section>

      {/* Team Section */}
      
    </div>
  );
};

export default About;
