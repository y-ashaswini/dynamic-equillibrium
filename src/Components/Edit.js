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
import { Navigate, useRouteLoaderData } from "react-router-dom";

export default function Edit({ allData }) {
  // const navigate = Navigate();
  console.log("add rendered");
  const currentid = window.location.pathname.split("/")[2].trim();
  console.log("id: ", currentid);
  const [details, setDetails] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    allData.map((each) => {
      if (each.id == currentid) {
        const temp = { id: each.id, title: each.title, content: each.content };
        setDetails(temp);
        setTitle(details.title);
        console.log("title initial: ", title);
        setContent(details.content);
        console.log("content initial: ", content);
      }
    });
  }, []);

  function handleSave(e) {
    e.preventDefault();
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
    // navigate("/read");
  }

  return (
    <div className="bg-dark w-screen h-[90vh] pb-[10vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#77AFA0] scrollbar-track-[#363538] scrollbar-thumb-rounded-full">
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
        {/* {console.log("title: ", title)} */}
        <input
          placeholder="TITLE"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-dark w-[50%] text-center mx-auto my-6 text-[5rem] outline-none font-green break-normal"
        />
        {/* {console.log("content: ", content)} */}
        <textarea
          placeholder="CONTENT"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="font-redhat whitespace-normal break-normal bg-dark w-[60vw] mx-auto text-left mb-12 outline-none text-2xl tracking-wide font-green min-h-[20vh] border-b-[3px] border-[#77AFA0] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#77AFA0] scrollbar-track-[#363538] scrollbar-thumb-rounded-full"
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
