import React, { useState } from "react";
import Announcement from "./Announcement";
import AnnounecementForm from "./AnnounecementForm";

function AnnounecementList() {
  const [announcements, setAnnouncements] = useState([]);

  const addAnn = (ann) => {
    if (!ann.text || /^\s*$/.test(ann.text)) {
      return;
    }

    const newAnn = [ann, ...announcements];

    setAnnouncements(newAnn);
  };

  const removeAnn = (id) => {
    const removeArr = [...announcements].filter((ann) => ann.id !== id);
    setAnnouncements(removeArr);
  };

  const updateAnn = (annId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) return;
    setAnnouncements((prev) =>
      prev.map((item) => (item.id === annId ? newValue : item))
    );
  };

  const completeAnn = (id) => {
    let updatedAnns = announcements.map((ann) => {
      if (ann.id === id) {
        ann.isComplete = !ann.isComplete;
      }
      return ann;
    });
    setAnnouncements(updatedAnns);
  };

  return (
    <div>
      <h1>Add an announcement</h1>
      <AnnounecementForm onSubmit={addAnn} />
      <Announcement
        announcements={announcements}
        completeAnn={completeAnn}
        removeAnn={removeAnn}
        updateAnn={updateAnn}
      />
    </div>
  );
}

export default AnnounecementList;
