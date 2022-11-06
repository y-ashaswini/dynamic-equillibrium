import { doc, setDoc } from "firebase/firestore";
import db from "../firebase";
import { useState } from "react";
import { v4 } from "uuid";
import bold from "../images/bold.png";
import italics from "../images/italics.png";
import underline from "../images/underline.png";
import leftalign from "../images/leftalign.png";
import centeralign from "../images/centeralign.png";
import rightalign from "../images/rightalign.png";

export default function Add() {
  console.log("add rendered");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmitBlog(e) {
    e.preventDefault();
    const newblog = {
      id: v4(),
      title: title,
      content: content,
    };

    const handlenew = async () => {
      const docRef = doc(db, "blogs", newblog.id);
      // await setDoc(docRef, newblog);
      setDoc(docRef, newblog);
    };

    handlenew();
    document.getElementById("added").innerText = "ADDED!";
    setTitle("");
    setContent("");
  }

  return (
    <div className="bg-dark w-screen min-h-[90vh] pb-[10vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#77AFA0] scrollbar-track-[#363538] scrollbar-thumb-rounded-full">
      <div
        id="added"
        className="bg-yellow w-full font-bold font-dark flex items-center justify-center"
      ></div>
      <div className="flex justify-between md:w-[40vw] w-[80vw] mx-auto py-6">
        <img
          src={bold}
          className="hover:scale-[1.2] md:h-[2rem] h-[1.5rem] cursor-pointer"
        />
        <img
          src={italics}
          className="hover:scale-[1.2] md:h-[2rem] h-[1.5rem] cursor-pointer"
        />
        <img
          src={underline}
          className="hover:scale-[1.2] md:h-[2rem] h-[1.5rem] cursor-pointer"
        />
        <img
          src={leftalign}
          className="hover:scale-[1.2] md:h-[2rem] h-[1.5rem] cursor-pointer"
        />
        <img
          src={centeralign}
          className="hover:scale-[1.2] md:h-[2rem] h-[1.5rem] cursor-pointer"
        />
        <img
          src={rightalign}
          className="hover:scale-[1.2] md:h-[2rem] h-[1.5rem] cursor-pointer"
        />
      </div>
      <form className="flex flex-col mx-auto min-h-full">
        <input
          placeholder="TITLE"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-dark text-center my-6 font-bold md:text-[5rem] text-[3rem] outline-none font-green break-normal"
        />
        <textarea
          placeholder="CONTENT"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="font-redhat whitespace-normal break-normal bg-dark mx-[15vw] text-left mb-12 outline-none text-xl tracking-wide font-green min-h-[20vh] border-b-[3px] border-[#77AFA0] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#77AFA0] scrollbar-track-[#363538] scrollbar-thumb-rounded-full"
        />
        <button
          onClick={(e) => handleSubmitBlog(e)}
          className=" font-dark bg-yellow cursor-pointer bg-yellow md:text-xl font-dark rounded-sm text-center font-bold sm:px-4 sm:py-2 p-1 mx-4 my-auto absolute bottom-20 right-10"
        >
          ADD
        </button>
      </form>
      {/* <div>
        {blog &&
          blog.map((eachblog) => (
            <div key={eachblog.id}>
              <div className="text-2xl">{eachblog.title}</div>
              <div className="text-xl">{eachblog.content}</div>
            </div>
          ))}
      </div> */}
    </div>
  );
}
