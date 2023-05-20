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
    // AOS.init();

    const url = "https://toy-galaxy-assignment-11-server.vercel.app/alltoys?category=ActionFigures";
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
      className="grid  md:grid-cols-3  items-center gap-4   "
    >
      {actionFigures.map((card) => (
        <ActionCard key={card._id} card={card}></ActionCard>
      ))}
      <ToastContainer />
    </div>
  );
};

export default ActionFigures;
