import React from "react";
import ContactCard from "../components/ContactCard";

function propsPractice() {
  return (
    <div>
      <ContactCard
        contact={{
          name: "Luis",
          imgUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.jiUg66oO8DiUwZYlDwy6jwHaFH%26pid%3DApi&f=1",
          phone: "3325459874",
          email: "luis@gmail.com"
        }}
      />
    </div>
  );
}

export default propsPractice;
