import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import heart_dark from "../images/heart_dark.png";
import heart_light from "../images/heart_light.png";
import Data from "../Data";
import { handleDelete } from "./handleDelete";
export default function BlogDetails({ auth }) {
  const navigate = useNavigate();
  const [allData, Loader] = Data(); // calling data again.
  const [details, setDetails] = useState([]);
  const [liked, setLiked] = useState(0);
  const currentid = window.location.pathname.split("/")[2];
  useEffect(() => {
    allData.map((each) => {
      if (each.id == currentid) {
        const temp = {
          id: each.id,
          title: each.title,
          content: each.content,
          likes: each.likes,
        };
        // console.log("num of likes: " + each.likes);
        setDetails(temp);
      }
    });
  }, [allData]);

  useEffect(() => {
    if (auth) {
      const message2 = document.getElementById("message");
      message2.innerText = "YOU ARE AUTHORIZED TO EDIT AND DELETE";
      setTimeout(() => {
        message2.innerText = "";
      }, 3000);
    }
  }, [auth]);

  function handleDeleteClick() {
    // console.log("delete clicked, ", currentid);
    if (auth) {
      const mess = handleDelete(currentid);
      const message = document.getElementById("message");
      message.innerText = mess;
      setTimeout(() => {
        message.innerText = "";
        navigate("./read");
      }, 3000);
    } else {
      const message = document.getElementById("message");
      message.innerText = "YOU ARE NOT AUTHORISED TO DELETE BLOGS!";
      setTimeout(() => {
        message.innerText = "";
      }, 3000);
    }
  }

  function handleLike() {
    setLiked(!liked);
    // localStorage.setItem(details.id, liked);
  }

  return (
    <div className="bg-dark w-screen h-[85vh] pb-[20vh] font-green text-center overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-[#77AFA0] scrollbar-track-[#363538] scrollbar-thumb-rounded-full">
      <div
        id="message"
        className="text-sm md:text-xl bg-yellow w-full font-bold font-dark flex items-center justify-center fixed"
      ></div>
      <div className="w-full mt-8 text-center font-bold font-green text-3xl">
        {Loader && `LOADING...`}
      </div>
      <div className="lg:text-[5rem] md:text-[4rem] sm:text-[3rem] mt-8 text-[2rem] mx-[10vw] font-bold">
        {/* {console.log("title:", details.title)} */}
        {details.title ? details.title.toUpperCase() : details.title}
      </div>
      {/* <div className=""> */}
      <ReactMarkdown className="prose prose-headings:text-[#77AFA0] prose-em:text-[#77AFA0] prose-strong:text-[#77AFA0] font-green font-redhat text-xl text-left lg:mx-[18vw] mx-[10vw] my-[5vh]">
        {details && details.content}
      </ReactMarkdown>
      {/* </div> */}
      {!Loader && (
        <div className="flex justify-between mx-[10vw] lg:mx-[18vw] ">
          <button
            onClick={handleDeleteClick}
            className="cursor-pointer font-dark md:text-xl bg-yellow font-dark rounded-sm text-center font-bold sm:px-4 sm:py-2 p-1 "
          >
            DELETE
          </button>
          <div className="flex">
            <button
              className={
                liked
                  ? "bg-yellow cursor-pointer border-2 border-[#FED15A] md:text-xl font-dark rounded-sm text-center font-bold sm:px-4 sm:py-2 p-1 mx-4 my-auto flex align-middle gap-4"
                  : "border-2 border-[#FED15A] bg-dark cursor-pointer md:text-xl font-yellow rounded-sm text-center font-bold sm:px-4 sm:py-2 p-1 mx-4 my-auto flex align-middle gap-4"
              }
              onClick={handleLike}
            >
              {details.likes + 0}
              <img
                src={liked ? heart_dark : heart_light}
                className="md:h-[1.8rem] h-[1.2rem]"
              />
            </button>
            <Link
              className="border-2 border-[#FED15A] cursor-pointer bg-yellow md:text-xl font-dark rounded-sm text-center font-bold sm:px-4 sm:py-2 p-1 mx-4 my-auto"
              to="./edit"
            >
              EDIT
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
