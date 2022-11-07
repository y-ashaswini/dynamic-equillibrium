import { useState, useEffect } from "react";
import { collection, query, getDocs, getDoc, doc } from "firebase/firestore";
import db from "./firebase";

export default function Data() {
  const [allData, setAllData] = useState([]);
  const [Loader, setLoader] = useState(1);
  useEffect(() => {
    const q = query(collection(db, "blogs"));
    const temp = async () => {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const newblog = {
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          likes: doc.data().likes,
        };
        setAllData((prev) => [...prev, newblog]);
        setLoader(null);
      });
    };
    temp();
  }, []);

  return [allData, Loader];
}
