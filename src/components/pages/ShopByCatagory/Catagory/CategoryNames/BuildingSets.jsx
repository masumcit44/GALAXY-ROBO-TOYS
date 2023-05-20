import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import ActionCard from "../CategoryCard/ActionCard";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BuildingSets = () => {
    const [BuildingSets, setBuildingSets] = useState([]);
    useEffect(() => {
      const url = "https://toy-galaxy-assignment-11-server.vercel.app/alltoys?category=BuildingSets";
      fetch(url)
      .then(res=>{
        toast.info('Loading building set toys...', { autoClose: 1000 });
        return res.json();
      })
        .then((data) => {
          setBuildingSets(data);
        });
    }, []);
    const { _id } = BuildingSets;
    return (
        <div className="grid md:grid-cols-3 gap-4  ">
        {BuildingSets.map((card) => (
          <ActionCard key={card._id} card={card}></ActionCard>
        ))}
        <ToastContainer />
      </div>
    );
};

export default BuildingSets;