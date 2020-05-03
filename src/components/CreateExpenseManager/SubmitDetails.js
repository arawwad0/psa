import React, { useState } from "react";
import { func } from "prop-types";

import Button from "components/global/Button";
import { Input } from "@progress/kendo-react-inputs";
import { DateInput } from "@progress/kendo-react-dateinputs";


import styles from "./SubmitDetails.module.css";

const SubmitDetails = ({ handleAddDetails }) => {
  const [ref, setRef] = useState("1");
  const [item, setItem] = useState("Allocation");
  const [date, setDate] = useState(new Date());
  const [incurred, setIncurred] = useState("10000 EGP");

  const handleSave = () => {
    handleAddDetails({
      ref,
      item,
      date,
      incurred,
    });
  }

  const handleNew = () => {
    handleSave();
    setRef("1");
    setItem("Allocation");
    setDate(new Date());
    setIncurred("10000 EGP");
  };

  return (<section>
    <div className="btn-group">
      <Button tertiary onClick={handleSave}>Save</Button>
      <Button onClick={handleNew}>Save & new</Button>
    </div>
  </section>)
};


SubmitDetails.propTypes = {
  handleAddDetail: func.isRequired,
};

export default SubmitDetails;