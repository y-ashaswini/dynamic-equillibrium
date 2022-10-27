import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import Home from "./Components/Home";
import NavbarWeb from "./Components/NavbarWeb";
import NavbarMobile from "./Components/NavbarMobile";
import Add from "./Components/Add";
import Read from "./Components/Read";
import BlogDetails from "./Components/BlogDetails";
import Authorize from "./Components/Authorize";
import Edit from "./Components/Edit";
import db from "./firebase";
import { useEffect, useState } from "react";
import { collection, query, getDocs, getDoc, doc } from "firebase/firestore";
export default function App() {
  const [allData, setAllData] = useState([]);
  const [auth, setAuth] = useState(false);

  function Auth(user_password) {
    console.log("entered password from Auth() : ", user_password);
    if (user_password == process.env.REACT_APP_PASSWORD) {
      console.log("user logged in");
      setAuth(true);
      return true;
    }
    console.log("user not logged in");
    setAuth(false);
    return false;
  }

  useEffect(() => {
    console.log("use effect ran");
    const q = query(collection(db, "blogs"));
    const temp = async () => {
      // console.log("in here 1");
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log("in here 2");
        const newblog = {
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
        };
        setAllData((prev) => [...prev, newblog]);
        // console.log("data now: ", allData);
      });
    };

    temp();
    // console.log("all data: ", allData);
  }, []);

  const PrivateRoute = ({ auth, children }) => {
    if (!auth) {
      return <Navigate to="/authorize" replace />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <div className="sm:block hidden">
        <NavbarWeb auth={auth} Auth={Auth} />
      </div>
      <div className="block sm:hidden">
        <NavbarMobile Auth={Auth} auth={auth} />
      </div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/read" exact element={<Read allData={allData} />} />
        <Route path="/authorize" exact element={<Authorize Auth={Auth} />} />
        <Route
          path="/add"
          element={
            <PrivateRoute auth={auth}>
              <Add />
            </PrivateRoute>
          }
        />
        <Route
          path="/read/:id/edit"
          element={
            <PrivateRoute auth={auth}>
              <Edit allData = {allData}/>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/read/:id"
          element={<BlogDetails allData={allData} />}
        />
        <Route path="*" element={<Navigate to="/read" />} />
      </Routes>
    </BrowserRouter>
  );
}
