/*eslint-disable*/
import React from 'react';
import TeamCard from "./TeamCard";
import Akash from "../../images/CoFounders/Akash.jpg";
import Saura from "../../images/CoFounders/Saurabh.jpg";

const info = [
  {
    name: "Akash Naik",
    position: "Co-Founder",
    image: Akash,
  },
  {
    name: "Saurabh Borkar",
    position: "Co-Founder",
    image: Saura,
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
