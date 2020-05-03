import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { Input } from "@progress/kendo-react-inputs";
import { Link } from "react-router-dom";
import { DatePicker } from "@progress/kendo-react-dateinputs";

import Button from "components/global/Button";
import TotalAmount from "components/CreateExpenseManager/TotalAmount";
import DetailsGrid from "components/CreateExpenseManager/DetailsGrid";
import SubmitDetails from "components/CreateExpenseManager/SubmitDetails";

import { postReport } from "service";

import styles from "./index.module.css";

const CreateExpenseManager = () => {
  const [title, setTitle] = useState("Abdallah's Report");
  const [details, setDetails] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [user, setUser] = useState("abdallah");
  const [amount, setAmount] = useState("0 EGP");

  useEffect(() => {
    const newAmount = details
      .map((detailRow) => +detailRow.incurred.match(/\d*/)[0])
      .reduce((acc, cur) => acc + cur, 0);
    setAmount(`${newAmount} EGP`);
  }, [details]);

  const history = useHistory();

  const [mutate] = useMutation(postReport, {
    onSuccess() {
      history.push("/");
    },
  });

  const handleAddDetails = (newDetail) => setDetails([...details, newDetail]);

  const handleSave = () => {
    mutate({
      status: "submit",
      tracking: "EXPS-1",
      title: title,
      assignedTo: user,
      startDate,
      endDate,
      state: "open",
      totalAmount: amount,
    });
  };

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
          <Button onClick={handleSave}>Save</Button>
        </div>
      </header>
      <section className={styles.summary}>
        <div className={styles.leftSummary}>
          <label>Start Date<DatePicker value={startDate} onChange={e => setStartDate(e.target.value)} /></label>
          <label>End Date<DatePicker value={endDate} onChange={e => setEndDate(e.target.value)} /></label>
          <label>Name<Input value={user} onChange={e => setUser(e.target.value)} /></label>
        </div>
        <div className={styles.rightSummary}>
          <TotalAmount amount={amount} />
        </div>
      </section>
      <section className={styles.details}>
        <DetailsGrid data={details} />
        <SubmitDetails handleAddDetails={handleAddDetails} />
      </section>
    </>
  );
};

export default CreateExpenseManager;
