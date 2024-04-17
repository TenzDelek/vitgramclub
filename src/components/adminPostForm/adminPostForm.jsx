"use client"

import { addPost } from "@/lib/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined);
  
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Clubs/Chapters</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Club Name" />
      <input type="text" name="slug" placeholder="Short Form" />
      <input type="text" name="img" placeholder="image  eq: /image.png" />
      <textarea type="text" name="desc" placeholder="Club Description" rows={10} />
      <button>Add</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
