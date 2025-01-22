import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-96 rounded-xl overflow-hidden mb-16">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
          alt="Seamline Luxe Workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Our Story
          </h1>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-gray-600 text-lg">
          At Seamline Luxe, we believe that fashion is more than just clothing—it's an expression of individuality and creativity. Our mission is to redefine fashion accessories by combining traditional craftsmanship with modern design, creating pieces that empower and inspire.
        </p>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✨</span>
          </div>
          <h3 className="text-xl font-bold mb-4">Quality</h3>
          <p className="text-gray-600">
            We use only the finest materials and maintain strict quality control in our production process.
          </p>
        </div>
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🎨</span>
          </div>
          <h3 className="text-xl font-bold mb-4">Creativity</h3>
          <p className="text-gray-600">
            Each piece is thoughtfully designed to bring uniqueness and style to your wardrobe.
          </p>
        </div>
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🌱</span>
          </div>
          <h3 className="text-xl font-bold mb-4">Sustainability</h3>
          <p className="text-gray-600">
            We're committed to sustainable practices and reducing our environmental impact.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Chen',
              role: 'Founder & Creative Director',
              image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
            },
            {
              name: 'Michael Ross',
              role: 'Head of Design',
              image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
            },
            {
              name: 'Emma Thompson',
              role: 'Production Manager',
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-48 h-48 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Workshop Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Workshop</h2>
          <p className="text-gray-600 mb-4">
            Located in the heart of the fashion district, our workshop is where creativity meets craftsmanship. Each piece is carefully handcrafted by our skilled artisans, ensuring the highest quality and attention to detail.
          </p>
          <p className="text-gray-600">
            We take pride in maintaining traditional techniques while embracing modern innovation, resulting in truly unique pieces that stand the test of time.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
            alt="Seamline Luxe Workshop"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;