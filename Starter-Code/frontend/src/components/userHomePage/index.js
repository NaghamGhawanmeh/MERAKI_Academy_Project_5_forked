import React from "react";
import { motion } from "framer-motion";
import BackgroundImage from "../../assets/background.png";
import "./style.css";
// i have used this website for animations https://motion.dev/

const UserHomePage = () => {
  return (
    <div className="user-home-page">
      <img
        src={BackgroundImage}
        alt="Background"
        className="background-image"
      />

      <div className="content"></div>
      {/* CATEGORY SECTION */}
      <h2 id="CategoryTitle">Categories</h2>
      <div className="categories">
        {/* First 5 categories with left-to-right animation */}
        <motion.div
          className="category"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", duration: 2.0 }}
        >
          <img
            src="https://i.pinimg.com/736x/c9/ae/00/c9ae000c91dcd98d581920fc052e4f65.jpg"
            alt="wood"
          />
          <h3>Wood</h3>
        </motion.div>

        <motion.div
          className="category"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", duration: 2.0 }}
        >
          <img
            src="https://images.pexels.com/photos/3738388/pexels-photo-3738388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="plastic"
          />
          <h3>Plastic</h3>
        </motion.div>

        <motion.div
          className="category"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", duration: 2.0 }}
        >
          <img
            src="https://i.pinimg.com/736x/2d/3b/7f/2d3b7f0a239a2b4d847d2e247a19d5e6.jpg"
            alt="paper"
          />
          <h3>Paper</h3>
        </motion.div>

        <motion.div
          className="category"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", duration: 2.0 }}
        >
          <img
            src="https://i.pinimg.com/736x/bf/7f/04/bf7f0439dea0050d9e39c41539bfeac4.jpg"
            alt="clothes"
          />
          <h3>Clothes</h3>
        </motion.div>

        <motion.div
          className="category"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", duration: 2.0 }}
        >
          <img
            src="https://i.pinimg.com/736x/a4/cc/88/a4cc88ad3574b75860074340a970ea7a.jpg"
            alt="food"
          />
          <h3>Food</h3>
        </motion.div>

        {/* Last 4 categories with right-to-left animation */}
        <motion.div
          className="category"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", duration: 2.0 }}
        >
          <img
            src="https://images.pexels.com/photos/24712928/pexels-photo-24712928/free-photo-of-yellow-stains-on-plain-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="copper"
          />
          <h3>Copper</h3>
        </motion.div>

        <motion.div
          className="category"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", duration: 2.0 }}
        >
          <img
            src="https://i.pinimg.com/736x/f9/b1/34/f9b134191ea6f032729a461c563d798c.jpg"
            alt="iron"
          />
          <h3>Iron</h3>
        </motion.div>

        <motion.div
          className="category"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", duration: 2.0 }}
        >
          <img
            src="https://images.pexels.com/photos/7219185/pexels-photo-7219185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="glass"
          />
          <h3>Glass</h3>
        </motion.div>

        <motion.div
          className="category"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", duration: 2.0 }}
        >
          <img
            src="https://images.pexels.com/photos/20705885/pexels-photo-20705885/free-photo-of-a-table-and-chairs-standing-near-a-window-in-a-room-with-vintage-design.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="furniture"
          />
          <h3>Furniture</h3>
        </motion.div>
      </div>

      


    </div>
  );
};

export default UserHomePage;
