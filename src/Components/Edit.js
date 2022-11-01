import { doc, setDoc } from "firebase/firestore";
import db from "../firebase";
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import bold from "../images/bold.png";
import italics from "../images/italics.png";
import underline from "../images/underline.png";
import leftalign from "../images/leftalign.png";
import centeralign from "../images/centeralign.png";
import rightalign from "../images/rightalign.png";
import { Navigate } from "react-router-dom";
// import Data from "../Data";

export default function Edit({ allData }) {
  var ifshow = "hidden";
  // const allData = Data();
  // const navigate = Navigate();
  // console.log("add rendered");
  const currentid = window.location.pathname.split("/")[2].trim();
  // console.log("id: ", currentid);
  const [details, setDetails] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    allData.map((each) => {
      if (each.id == currentid) {
        setDetails({ id: each.id, title: each.title, content: each.content });
        setTitle(each.title);
        // console.log("title initial: ", title);
        setContent(each.content);
        // console.log("content initial: ", content);
      }
    });
  }, [allData]);

  function handleSave(e) {
    e.preventDefault();
    // if (!details.title == title || !details.content == content) {
    const edittedblog = {
      id: details.id,
      title: title,
      content: content,
    };
    const temprun = async () => {
      const docRef = doc(db, "blogs", edittedblog.id);
      setDoc(docRef, edittedblog);
      // await setDoc(docRef, edittedblog);
    };

    temprun();
    document.getElementById("saved").innerText = "SAVED!";
    // }
  }
  return (
    <div className="bg-dark w-screen h-[90vh] pb-[10vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#77AFA0] scrollbar-track-[#363538] scrollbar-thumb-rounded-full">
      <div
        id="saved"
        className="bg-yellow w-full font-bold font-dark flex items-center justify-center"
      ></div>
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
          className="bg-dark text-center font-bold my-6 text-[5rem] outline-none font-green break-normal"
        />
        <textarea
          placeholder="CONTENT"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="font-redhat whitespace-normal break-normal bg-dark mx-[18vw] text-left mb-12 outline-none text-2xl tracking-wide font-green min-h-[20vh] border-b-[3px] border-[#77AFA0] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#77AFA0] scrollbar-track-[#363538] scrollbar-thumb-rounded-full"
        />
        <button
          onClick={(e) => handleSave(e)}
          className="cursor-pointer font-dark bg-yellow rounded-sm text-center font-bold px-4 py-2 text-xl my-auto mx-4 absolute bottom-10 right-10"
        >
          SAVE
        </button>
      </form>
    </div>
  );
}
