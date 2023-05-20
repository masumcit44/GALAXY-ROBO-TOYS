import React from "react";
import { FaSms } from "react-icons/fa";
import "./Footer.css";
import logo from "../../../assets/icon/icon-2.avif";
import fb from "../../../assets/icon/facebook.avif";
import ins from "../../../assets/icon/insta.png";
import yt from "../../../assets/icon/yt.avif";
import twi from "../../../assets/icon/twit.png";
const Footer = () => {
  return (
    <div
      className=" mb-8 bg-gradient-to-r from-purple-500 to-red-600 galaxy"
    >
      <div className="md:flex justify-between p-5 footer  text-white galaxy">
        <div>
          <div className=" text-2xl flex items-center text-gray-900 ">
            <img className="w-12 h-12" src={logo} alt="" />
            <p className="ms-2 text-blue-900">GALAXY ROBO TOYS</p>
          </div>
          <ul className="ps-2 flex items-center gap-2 text-xl">
            <li>
              <img className="w-8 h-8" src={fb} alt="" />
            </li>
            <li>
              <img className="w-8 h-8" src={ins} alt="" />
            </li>
            <li>
              <img className="w-8 h-8" src={twi} alt="" />
            </li>
            <li>
              <img className="w-8 h-8" src={yt} alt="" />
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl text-black">Support</h2>
          <ul className="ps-2 text-xl">
            <li>contact us</li>
            <li>FAQ</li>
            <li>Downloads</li>
            <li>Locate a dealer</li>
            <li>Spare Parts</li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl text-black">GALAXY ROBO TOYS</h2>
          <ul className="ps-2 text-xl">
            <li>about GALAXY ROBO TOYS</li>
            <li>careers</li>
            <li>license</li>
            <li>our goals</li>
          </ul>
        </div>
        <div>
          <div className="flex items-center md:text-2xl gap-1 ">
            <FaSms></FaSms>
            <p className="text-black">Stay up to date with GALAXY ROBO TOYS</p>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Your Mail"
              className="input input-bordered input-secondary w-full max-w-xs text-black"
            />
            <button className="btn btn-primary ml-2">Submit</button>
          </div>
          <div>
            <div className="flex justify-center items-center gap-4">
              <span className="text-black text-2xl">address :</span> 
              <p className="text-blue-200 text-base">86/9 , e-block , building no-4 , ganda , savar</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center  text-2xl ">&copy; 2023 GALAXY ROBO TOYS . All rights reserved.</p>
    </div>
  );
};

export default Footer;
