import React, { useState } from "react";
import { Input } from "@progress/kendo-react-inputs";
import { Link } from "react-router-dom";
import Button from "components/global/Button";

import styles from "./index.module.css";
import DetailsGrid from "components/CreateExpenseManager/DetailsGrid";
import SubmitDetails from "components/CreateExpenseManager/SubmitDetails";

const CreateExpenseManager = () => {
  const [title, setTitle] = useState("Abdallah's Report");
  const [details, setDetails] = useState([]);

  const handleAddDetails = (newDetail) => setDetails([...details, newDetail]);

  return (
    <>
      <header className={styles.header}>
        <Input
          className={styles.titleInput}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <div className={styles.info}>
          <span className={styles.infoLabel}>State: </span>
          <span className={styles.infoValue}>Open</span>
        </div>
        <div className={styles.info}>
          <span className={styles.infoLabel}>Tracking#: </span>
          <span className={styles.infoValue}>New</span>
        </div>
        <div className={styles.btnGroup}>
          <Button secondary>
            <Link to="/">Back</Link>
          </Button>
          <Button>Save</Button>
        </div>
      </header>
      <section className={styles.details}>
        <DetailsGrid data={details} />
        <SubmitDetails handleAddDetails={handleAddDetails} />
      </section>
    </>
  );
};

export default CreateExpenseManager;
