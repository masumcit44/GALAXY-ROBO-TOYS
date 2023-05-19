import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ActionCard from "../CategoryCard/ActionCard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ActionFigures = () => {
  const [actionFigures, setActionFigures] = useState([]);
  useEffect(() => {
    AOS.init();

    const url = "http://localhost:5000/alltoys?category=ActionFigures";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setActionFigures(data);
      });
  }, []);
  const { _id } = actionFigures;
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      className="md:grid grid-cols-2 gap-3 md:w-3/4 md:mx-auto"
    >
      {actionFigures.map((card) => (
        <ActionCard key={card._id} card={card}></ActionCard>
      ))}
      <ToastContainer />
    </div>
  );
};

export default ActionFigures;
