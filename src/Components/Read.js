import Blogtile from "./Blogtile";
import { Link, useParams } from "react-router-dom";
import Data from "../Data";
export default function Read() {
  const allData = Data();
  const { id } = useParams();
  return (
    <div className="bg-dark w-screen h-[90vh] pb-[10vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#77AFA0] scrollbar-track-[#363538] scrollbar-thumb-rounded-full">
      {/* <Blogtile
        id={123}
        title={"mock title"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />

      <Blogtile
        id={13}
        title={"mock title"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      /> */}
      {allData &&
        allData.map((each) => (
          <Blogtile
            id={each.id}
            title={each.title}
            content={each.content}
            likes={71}
            comments={23}
          />
        ))}
    </div>
  );
}
// likes={(each.likes && each.likes) || 71}
// comments={(each.comments && each.comments.length) || 23}
