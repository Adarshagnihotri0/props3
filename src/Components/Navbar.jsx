import React from "react";
import styles from "./style.module.css"

const Navbar = ({data}) => {
  return (
    <div className="w-full text-black   py-6 px-12 flex items-center justify-between">
      <h3 className={`${styles.a} ${styles.b}`}>Orange</h3>
      <div className="flex gap-1 p-3 bg-orange-700 rounded-3xl  text-black font-semibold text-xs">
        <h3>Favourites</h3>
        <h3>{data.filter(item => item.added).length}</h3>
      </div>
    </div>
  );
};

export default Navbar;
