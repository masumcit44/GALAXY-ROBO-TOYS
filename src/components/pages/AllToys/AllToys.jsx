
import React, { useEffect, useState } from "react";
import AllToyCard from "./ToysCard/AllToyCard";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    fetch("https://toy-galaxy-assignment-11-server.vercel.app/alltoys?limit=20")
      .then((res) => {
        toast.info('Loading toys...', { autoClose: 1000 });
        return res.json();
      })
      .then((data) => {
        setToys(data);
      });
  }, []);

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOnChange = (event) =>{
    const value = (event.target.value);
    setSearchQuery(value)
  }

  return (
    <div className="overflow-x-auto my-2">
      <div className="">
        <div className="input-group  my-2 justify-center ">
          <input type="text" onChange={handleOnChange}  placeholder="Search Toy"className="input input-bordered input-secondary w-full max-w-xs" />
        </div>
      </div>
      <table className="table w-full">
        <thead>
          <tr className="bg-amber-100">
            <th>Seller</th>
            <th>Image</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredToys.map((toy) => (
            <AllToyCard key={toy._id} toy={toy}></AllToyCard>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default AllToys;
