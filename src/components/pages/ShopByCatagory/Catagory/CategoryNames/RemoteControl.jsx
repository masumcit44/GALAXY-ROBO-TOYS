import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ActionCard from "../CategoryCard/ActionCard";

const RemoteControl = () => {
  const [RemoteControl, setRemoteControl] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/alltoys?category=RemoteControl";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRemoteControl(data);
      });
  }, []);
  const { _id } = RemoteControl;
  return (
    <div className="md:grid grid-cols-2 gap-3 w-3/4 mx-auto">
      {RemoteControl.map((card) => (
        <ActionCard key={card._id} card={card}></ActionCard>
      ))}
    </div>
  );
};

export default RemoteControl;
