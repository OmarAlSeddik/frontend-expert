import { useState } from "react";

const TipCalculator = () => {
  const [bill, setBill] = useState(50);
  const [tipPercentage, setTipPercentage] = useState(18);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const totalTip = (tipPercentage * bill) / 100;
  const tipPerPerson = (tipPercentage * bill) / 100 / numberOfPeople;
  return (
    <>
      <label htmlFor="bill">Bill</label>
      <input
        id="bill"
        type="number"
        value={bill}
        onChange={(event) => {
          setBill(parseInt(event.target.value));
        }}
      />
      <label htmlFor="tipPercentage">Tip Percentage</label>
      <input
        id="tipPercentage"
        type="number"
        value={tipPercentage}
        onChange={(event) => {
          setTipPercentage(parseInt(event.target.value));
        }}
      />
      <label htmlFor="numberOfPeople">Number of People</label>
      <input
        id="numberOfPeople"
        type="number"
        value={numberOfPeople}
        onChange={(event) => {
          setNumberOfPeople(parseInt(event.target.value));
        }}
      />
      <p>Total Tip: {totalTip ? `$${totalTip.toFixed(2)}` : "-"}</p>
      <p>
        Tip Per Person: {tipPerPerson ? `$${tipPerPerson.toFixed(2)}` : "-"}
      </p>
    </>
  );
};

export default TipCalculator;
