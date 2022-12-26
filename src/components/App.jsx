import React from "react";
import Card from "./card.jsx";
import contacts from "../contacts.js";
function App() {
  return (
    <div>
      <h1 className="heading">My contact</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />

      <div>
        <Card
          name={contacts[1].name}
          img={contacts[1].imgURL}
          tel={contacts[1].phone}
          email={contacts[1].email}
        />
      </div>

      <div>
        <Card
          name={contacts[2].name}
          img={contacts[2].imgURL}
          tel={contacts[2].phone}
          email={contacts[2].email}
        />
      </div>
    </div>
  );
}
export default App;
