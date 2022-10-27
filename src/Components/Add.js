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
      await setDoc(docRef, newblog);
    };

    handlenew();

    setTitle("");
    setContent("");
  }

  return (
    <div className="bg-dark w-screen min-h-[90vh] pb-[10vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#77AFA0] scrollbar-track-[#363538] scrollbar-thumb-rounded-full">
      <div className="flex justify-between w-[40vw] mx-auto py-6">
        <img src={bold} className="hover:scale-[1.2] h-[2rem] cursor-pointer" />
        <img
          src={italics}
          className="hover:scale-[1.2] h-[2rem] cursor-pointer"
        />
        <img
          src={underline}
          className="hover:scale-[1.2] h-[2rem] cursor-pointer"
        />
        <img
          src={leftalign}
          className="hover:scale-[1.2] h-[2rem] cursor-pointer"
        />
        <img
          src={centeralign}
          className="hover:scale-[1.2] h-[2rem] cursor-pointer"
        />
        <img
          src={rightalign}
          className="hover:scale-[1.2] h-[2rem] cursor-pointer"
        />
      </div>
      <form className="flex flex-col mx-auto min-h-full">
        <input
          placeholder="TITLE"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-dark w-[50%] text-center mx-auto my-6 text-[5rem] outline-none font-green break-normal"
        />
        <textarea
          placeholder="CONTENT"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="font-redhat whitespace-normal break-normal bg-dark mx-[15vw] text-left mb-12 outline-none text-2xl tracking-wide font-green min-h-[20vh]"
        />
        <button
          onClick={(e) => handleSubmitBlog(e)}
          className="cursor-pointer font-dark bg-yellow rounded-sm text-center font-bold px-4 py-2 text-xl my-auto mx-4 absolute bottom-10 right-10"
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
