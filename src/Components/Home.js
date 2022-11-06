import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const hidden_options = ["hidden", "block"];
  // const [hidden_var, setHidden_var] = useState(1);

  // setInterval(() => {
  //   setHidden_var((isnow) => !isnow);
  // }, 5000);

  return (
    <div className="bg-dark h-screen screen flex flex-col justify-center">
      <div className="lg:text-[5rem] md:text-[4rem] sm:text-[3rem] text-3xl font-bold font-yellow mx-auto leading-none">
        <span className="block">DYNAMIC</span>
        <span>EQUILLIBRIUM</span>

        {/* <span
          id="dash"
          className={hidden_options[hidden_var + 0] + " absolute font-green"}
        >
          _
        </span> */}
        <span id="dash" className=" absolute font-green">
          _
        </span>
        {/* 
        <span className="block text-lg font-green ml-2">
          YASHASWINI SHIVATHAYA
        </span> */}
        <Link to="/read">
          <div className="cursor-pointer font-dark bg-green rounded-md text-center mt-12 sm:py-2 py-1 md:text-3xl text-lg md:w-[10rem] w-[7rem] mx-auto">
            ENTER
          </div>
        </Link>
      </div>
    </div>
  );
}
