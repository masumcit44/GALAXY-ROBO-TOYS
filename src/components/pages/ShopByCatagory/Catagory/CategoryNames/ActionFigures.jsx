import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ActionCard from "../CategoryCard/ActionCard";




const ActionFigures = () => {
  const [actionFigures, setActionFigures] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/alltoys?category=ActionFigures";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setActionFigures(data);
      });
  }, []);
  const { _id } = actionFigures;
  return (
      <div className="md:grid grid-cols-2 gap-3 md:w-3/4 md:mx-auto">
        {actionFigures.map((card) => (
          <ActionCard key={card._id} card={card}></ActionCard>
        ))}
      </div>
  );
};

export default ActionFigures;
