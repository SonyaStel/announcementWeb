import React, { useState } from "react";
import AnnounecementForm from "./AnnounecementForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import AnnounecementList from "./AnnounecementList";

function Announcement({ announcements, completeAnn, removeAnn, updateAnn }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateAnn(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <AnnounecementForm edit={edit} onSubmit={submitUpdate} />;
  }

  return announcements.map((ann, index) => (
    <div
      className={ann.isComplete ? "ann-row complete" : "ann-row"}
      key={index}
    >
      <div key={ann.id} onClick={() => completeAnn(ann.id)}>
        {ann.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeAnn(ann.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: ann.id, value: ann.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Announcement;
