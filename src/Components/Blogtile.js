import { useState } from "react";
import { Link } from "react-router-dom";
import triangle from "../images/triangle.png";
export default function Blogtile({ id, title, content, likes, comments }) {
  const positions = ["rotate-0", "rotate-90"];
  const contentVisibility = ["hidden", "relative"];
  const [imgPos, setImgPos] = useState(0);
  const [contentState, setContentState] = useState(0);
  function showContent() {
    setImgPos(+!imgPos);
    setContentState(+!contentState);
  }

  function handleDelete() {
    console.log("delete clicked ", id);
  }

  // console.log(
  //   "id: " +
  //     id +
  //     ", title: " +
  //     title +
  //     ", content: " +
  //     content +
  //     ", likes: " +
  //     likes
  // );
  return (
    <div className="font-yellow ml-[4vw] mb-8 flex">
      <div className="w-[70%]">
        <div className="flex align-middle">
          <img
            src={triangle}
            className={
              positions[imgPos] +
              " mr-4 cursor-pointer h-[1.8rem] my-auto duration-300"
            }
            onClick={showContent}
          />
          {/* <span className="text-[2rem] font-bold">{title.toUpperCase()}</span> */}
          <span className="text-[2rem] font-bold">{title}</span>
        </div>
        <div
          className={
            contentVisibility[contentState] + " text-lg ml-[4rem] truncate"
          }
        >
          {content && content.split(".")[0]}
          <div className="w-full my-4 border-t-[3px] border-[#77AFA0] py-2 flex justify-between text-sm">
            <span>{likes} LIKES</span>
            <span>{comments} COMMENTS</span>
          </div>
        </div>
      </div>

      <button className=" cursor-pointer font-dark bg-yellow rounded-sm text-center font-bold px-4 py-2 text-xl my-auto mx-4">
        <Link to={"/read/" + id}>VISIT</Link>
      </button>
      <button
        className=" cursor-pointer font-dark bg-yellow rounded-sm text-center font-bold px-4 py-2 text-xl my-auto mx-4"
        onClick={handleDelete}
      >
        DELETE
      </button>
    </div>
  );
}
