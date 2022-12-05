import Blogtile from "./Blogtile";
// import { Link, useParams } from "react-router-dom";
import Data from "../Data";
import { useEffect } from "react";
export default function Read({ auth }) {
  // Calls data freshly everytime one navigates to this page
  const [allData, Loader] = Data();
  // console.log(allData);
  // const { id } = useParams();
  useEffect(() => {
    if (auth) {
      const message = document.getElementById("message");
      message.innerText = "YOU ARE AUTHORIZED TO EDIT AND DELETE";
      setTimeout(() => {
        message.innerText = "";
      }, 3000);
    }

    // console.log(Date.now());
  }, [auth]);

  return (
    <div className="bg-dark w-screen h-[85vh] pb-[10vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#77AFA0] scrollbar-track-[#363538] scrollbar-thumb-rounded-full">
      <div
        id="message"
        className="bg-yellow w-full font-bold font-dark flex items-center justify-center fixed"
      ></div>
      <div className="w-full text-center font-bold font-green text-3xl mt-8">
        {Loader && `LOADING...`}
      </div>
      {allData &&
        allData.map((each) => (
          <Blogtile
            key={each.id}
            id={each.id}
            title={each.title}
            content={each.content}
            likes={each.likes}
            // comments={23}
          />
        ))}
    </div>
  );
}
// likes={(each.likes && each.likes) || 71}
// comments={(each.comments && each.comments.length) || 23}
