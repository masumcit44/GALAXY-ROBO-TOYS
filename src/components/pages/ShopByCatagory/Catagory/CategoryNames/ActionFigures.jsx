import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ActionCard from "../CategoryCard/ActionCard";




const ActionFigures = () => {
  const [actionFigures, setActionFigures] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/catagoryrobo?category=ActionFigures";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setActionFigures(data);
      });
  }, []);
  const { _id } = actionFigures;
  return (
      <div className="md:grid grid-cols-2 gap-3 w-3/4 mx-auto">
        {actionFigures.map((card) => (
          <ActionCard key={card._id} card={card}></ActionCard>
        ))}
      </div>
  );
};

export default ActionFigures;
