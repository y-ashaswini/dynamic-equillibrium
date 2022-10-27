import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
export default function Authorize({ Auth }) {
  const navigate = useNavigate();
  const [pass, setPass] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("entered password: ", pass);

    const auth_return = Auth(pass);
    if (auth_return) {
      // navigate("/add");
      navigate(-1);
    } else {
      document.getElementById("error_alert").innerHTML =
        "SORRY, YOU ARE NOT AUTHORIZED.";
    }
  }
  return (
    <div className="bg-dark w-screen min-h-[90vh] font-yellow">
      <div className="font-bold text-[3rem] ml-[2rem]">
        VERIFY YOUR IDENTITY
      </div>
      <div
        id="error_alert"
        className="font-bold font-green mt-8 text-center text-3xl"
      ></div>
      <form className="w-[45%] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
        <input
          type="password"
          placeholder="PASSWORD"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="bg-dark w-full my-4 border-b-[3px] border-[#77AFA0] py-2 outline-none text-xl font-green"
        />

        <button
          className="cursor-pointer font-dark bg-yellow rounded-sm text-center font-bold px-4 py-2 text-xl m-auto"
          onClick={handleSubmit}
        >
          AUTHORIZE
        </button>
      </form>
    </div>
  );
}
