import { useState } from "react";
import { Link } from "react-router-dom";
import triangle from "../images/triangle.png";

export default function Blogtile({ id, title, content }) {
  const contlen = content.length;
  const positions = ["rotate-0", "rotate-90"];
  const contentVisibility = ["hidden", "relative"];
  const [imgPos, setImgPos] = useState(0);
  const [contentState, setContentState] = useState(0);
  function showContent() {
    setImgPos(+!imgPos);
    setContentState(+!contentState);
  }

  return (
    <div className="font-yellow ml-[4vw] mb-8 flex">
      <div className="w-[70%]">
        <div className="flex align-middle">
          <img
            src={triangle}
            className={
              positions[imgPos] +
              " mr-4 cursor-pointer md:h-[1.8rem] h-[1.2rem] my-auto duration-300"
            }
            onClick={showContent}
          />
          {/* <span className="text-[2rem] font-bold">{title.toUpperCase()}</span> */}
          <span className="md:text-[2rem] text-lg font-bold">{title}</span>
        </div>
        <div
          className={
            contentVisibility[contentState] +
            " md:text-lg text-sm md:ml-[4rem] ml-[2rem]"
          }
        >
          {content && (contlen > 50 ? content.slice(0, 50) + " ..." : content)}
          <div className="w-full my-4 border-t-[3px] border-[#77AFA0] py-2 flex justify-between text-sm ">
            {`${
              Math.round(content.split(" ").length / 200)
                ? Math.round(content.split(" ").length / 200)
                : "LESS THAN A"
            }`}{" "}
            MIN READ
            {/* <span>{comments} COMMENTS</span> */}
          </div>
        </div>
      </div>

      <button className=" cursor-pointer font-dark bg-yellow rounded-sm text-center font-bold md:px-4 md:py-2 px-2 py-1 md:text-xl text-sm my-auto mx-8">
        <Link to={"/read/" + id}>VISIT</Link>
      </button>
    </div>
  );
}
