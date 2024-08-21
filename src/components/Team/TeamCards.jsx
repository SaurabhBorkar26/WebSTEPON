/*eslint-disable*/
import React from 'react';
import TeamCard from "./TeamCard";

const info = [
  {
    name: "Aksh Naik",
    position: "Co-Founder",
    image: "/images/team/team-1.jpg",
  },
  {
    name: "Saurabh Borkar",
    position: "Co-Founder",
    image: "/images/team/team-2.jpg",
  },
];

function TeamCards() {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 gap-6 max-w-4xl">
        {info.map((item, index) => (
          <TeamCard
            key={index}
            name={item.name}
            position={item.position}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamCards;
