import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-dark h-screen screen flex flex-col justify-center">
      <div className="text-[6rem] font-bold font-yellow mx-auto leading-none">
        <span className="block">DYNAMIC</span>
        <span>EQUILLIBRIUM</span>
        <span className="font-green"> _</span>
        <span className="block text-lg font-green ml-2">
          YASHASWINI SHIVATHAYA
        </span>
        <Link to="/read">
          <div className="cursor-pointer font-dark bg-yellow rounded-md text-center mt-12 py-3 text-[2rem] w-[10rem] mx-auto">
            ENTER
          </div>
        </Link>
      </div>
    </div>
  );
}
