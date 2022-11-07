import { doc, setDoc } from "firebase/firestore";
import db from "../firebase";
import { useState } from "react";
import { v4 } from "uuid";
import bold from "../images/bold.png";
import italics from "../images/italics.png";
import H from "../images/H.png";
import sH from "../images/sH.png";

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
      likes: 0,
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

  function makeBold() {
    const contentid = document.getElementById("contentid");
    if (contentid.selectionStart == contentid.selectionEnd) {
      return; // nothing is selected
    }

    let selected = contentid.value.slice(
      contentid.selectionStart,
      contentid.selectionEnd
    );
    contentid.setRangeText(`**${selected}**`);
    setContent(contentid.value);
  }

  function makeItalics() {
    const contentid = document.getElementById("contentid");
    if (contentid.selectionStart == contentid.selectionEnd) {
      return; // nothing is selected
    }

    let selected = contentid.value.slice(
      contentid.selectionStart,
      contentid.selectionEnd
    );
    contentid.setRangeText(`*${selected}*`);
    setContent(contentid.value);
  }
  function makeH() {
    const contentid = document.getElementById("contentid");
    if (contentid.selectionStart == contentid.selectionEnd) {
      return; // nothing is selected
    }

    let selected = contentid.value.slice(
      contentid.selectionStart,
      contentid.selectionEnd
    );
    contentid.setRangeText(`# ${selected}`);
    setContent(contentid.value);
  }
  function makesH() {
    const contentid = document.getElementById("contentid");
    if (contentid.selectionStart == contentid.selectionEnd) {
      return; // nothing is selected
    }

    let selected = contentid.value.slice(
      contentid.selectionStart,
      contentid.selectionEnd
    );
    contentid.setRangeText(`### ${selected}`);
    setContent(contentid.value);
  }

  return (
    <div className="bg-dark w-screen min-h-[85vh] pb-[10vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#77AFA0] scrollbar-track-[#363538] scrollbar-thumb-rounded-full">
      <div
        id="added"
        className="text-sm md:text-xl bg-yellow fixed w-full font-bold font-dark flex items-center justify-center"
      ></div>
      <div className="flex justify-between md:w-[40vw] w-[80vw] mx-auto py-6 mt-8">
        <img
          src={bold}
          onClick={makeBold}
          className="hover:scale-[1.2] md:h-[2rem] h-[1.5rem] cursor-pointer"
        />
        <img
          src={italics}
          onClick={makeItalics}
          className="hover:scale-[1.2] md:h-[2rem] h-[1.5rem] cursor-pointer"
        />
        <img
          src={H}
          onClick={makeH}
          className="hover:scale-[1.2] md:h-[2rem] h-[1.5rem] cursor-pointer"
        />
        <img
          src={sH}
          onClick={makesH}
          className="hover:scale-[1.2] md:h-[2rem] h-[1.5rem] cursor-pointer"
        />
      </div>
      <form className="flex flex-col mx-auto min-h-full">
        <input
          placeholder="TITLE"
          type="text"
          value={title}
          // style="white-space: pre-line"
          onChange={(e) => setTitle(e.target.value)}
          className="bg-dark text-center my-6 font-bold md:text-[4rem] sm:text-[3rem] text-[2rem] mx-[10vw] whitespace-normal outline-none font-green break-normal"
        />
        <textarea
          placeholder="CONTENT"
          value={content}
          id="contentid"
          // style="white-space: pre-line"
          onChange={(e) => setContent(e.target.value)}
          className="text-xl font-redhat whitespace-normal break-normal bg-dark lg:mx-[18vw] mx-[10vw] my-[5vh] outline-none font-green min-h-[70vh]"
        />
        <button
          onClick={(e) => handleSubmitBlog(e)}
          className="cursor-pointer font-dark md:text-xl bg-yellow font-dark rounded-sm text-center font-bold sm:px-4 sm:py-2 p-1 md:w-[10vw] w-[20] mx-auto"
        >
          ADD
        </button>
      </form>
    </div>
  );
}
