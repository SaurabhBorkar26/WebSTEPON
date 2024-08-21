/* eslint-disable */
import React from "react";
import TeamHeader from "../Service/ServiceHeader";
import TeamCards from "./TeamCards";

function Team() {
  const cardDes =
    "Our team is passionate about technology and driven by a shared commitment to excellence. We foster a collaborative and innovative work environment where every team member contributes to our success";

  return (
    <div className="py-10" id="team">
      <TeamHeader title="Our Team" description={cardDes} />
      <TeamCards />
    </div>
  );
}

export default Team;
