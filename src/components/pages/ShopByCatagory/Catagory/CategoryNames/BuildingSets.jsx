import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import ActionCard from "../CategoryCard/ActionCard";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BuildingSets = () => {
    const [BuildingSets, setBuildingSets] = useState([]);
    useEffect(() => {
      const url = "http://localhost:5000/alltoys?category=BuildingSets";
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
        <div className="md:grid grid-cols-2 gap-3 w-3/4 mx-auto">
        {BuildingSets.map((card) => (
          <ActionCard key={card._id} card={card}></ActionCard>
        ))}
        <ToastContainer />
      </div>
    );
};

export default BuildingSets;