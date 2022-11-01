import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heart from "../images/heart.png";
import Data from "../Data";
export default function BlogDetails() {
  const allData = Data();
  const [details, setDetails] = useState([]);
  const currentid = window.location.pathname.split("/")[2];
  useEffect(() => {
    allData.map((each) => {
      if (each.id == currentid) {
        const temp = { id: each.id, title: each.title, content: each.content };
        setDetails(temp);
      }
    });
  }, [allData]);

  return (
    <div className="bg-dark w-screen h-[90vh] pb-[10vh] font-yellow text-center overflow-x-hidden font-green ">
      <div className="text-[5rem] font-bold">
        {/* {console.log("title:", details.title)} */}
        {details.title ? details.title.toUpperCase() : details.title}
      </div>
      <div className="font-redhat text-xl text-left mx-[18vw] my-[5vh]">
        {details && details.content}
      </div>
      <div className="flex justify-between mx-[15vw]">
        <Link to="./edit">
          <button className=" cursor-pointer font-dark bg-yellow rounded-sm text-center font-bold px-4 py-2 text-xl my-auto mx-4">
            EDIT
          </button>
        </Link>
        <button className=" cursor-pointer font-dark bg-yellow rounded-sm text-center font-bold px-4 py-2 text-xl my-auto mx-4 flex align-middle gap-2">
          <img src={heart} className="max-h-[1.8rem]" />
          25
        </button>
      </div>
    </div>
  );
}
