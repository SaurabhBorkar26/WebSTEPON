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
    socialLinks: {
      twitter: "https://x.com/aabhaal?t=--f1N4TeaWMZgKlTmVzh3w&s=08",
      
      instagram: "https://www.instagram.com/aabhaaal?igsh=MWFuZHJzNms3cGFyaQ==",
      linkedin: "https://www.linkedin.com/in/akash-naik-2077aa183?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
  },
  {
    name: "Saurabh Borkar",
    position: "Co-Founder",
    image: Saura,
    socialLinks: {
      twitter: "https://x.com/saurabh_rborkar?t=Y5nDWWFGeLauZo0y83TS3g&s=08",
     
      instagram: "https://www.instagram.com/saurabh_rborkaar?igsh=MTcyZ2s2NGpidHpwbw==",
      linkedin: "https://www.linkedin.com/in/saurabh-borkar-03484317a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
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
            socialLinks={item.socialLinks}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamCards;
