import { Link, useNavigate } from "react-router-dom";
export default function NavbarWeb({ auth, Auth }) {
  const navigate = useNavigate();
  const ifhome = window.location.pathname.split("/")[1].trim(" ");
  const logout_classes = auth ? "inline" : "hidden";
  function handleLogout() {
    const auth_return = Auth(0);
    // console.log("logged out");
    navigate("/read");
    return auth_return;
  }
  const vi =
    ifhome === ""
      ? "hidden"
      : "bg-dark h-[10vh] px-10 font-yellow z-30 flex relative text-2xl justify-around m-0";

  const class_read = ifhome === "read" ? "font-bold my-auto" : "my-auto";
  const class_write = ifhome === "add" ? "font-bold my-auto" : " my-auto";

  return (
    <div className={vi}>
      <Link to="/" className="my-auto">
        H
      </Link>

      <Link to="./read" className={class_read}>
        R
      </Link>
      <Link to="./add" className={class_write}>
        W
      </Link>

      <button className={logout_classes} onClick={handleLogout}>
        L
      </button>
    </div>
  );
}
