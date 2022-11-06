import { doc, deleteDoc } from "firebase/firestore";
import db from "../firebase";

export function handleDelete(id) {
  console.log("delete from func: ", id);
  const temp = async () => {
    await deleteDoc(doc(db, "blogs", `${id}`));
    throw "error";
  };
  temp();

  return "DELETED!";
}
