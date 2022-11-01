import { useState, useEffect } from "react";
import { collection, query, getDocs, getDoc, doc } from "firebase/firestore";
import db from "./firebase";

export default function Data() {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    // console.log("use effect ran");
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
  }, []);

  return allData;
}
