import React, { useState, useEffect } from "react";
import CurrencyService from "../../services/CurrencyService";

import "bootstrap/dist/css/bootstrap.min.css";

const ExchangeBar = () => {
  const [currencies, setCurrencies] = useState([]);
  const [currencyOne, setCurrencyOne] = useState({});
  const [currencyTwo, setCurrencyTwo] = useState({});
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);

  // showing result div on condition
  let resultBlock;
  if (result > null) {
    resultBlock = (
      <div className="">
        {amount} {currencyOne.name} ={" "}
        <b>
          {result.toFixed(3)} {currencyTwo.name}
        </b>
        <hr/>
      </div>
    );
  } else resultBlock = <div></div>;

  //fetching data from api with service
  useEffect(() => {
    CurrencyService.getCurrencies().then((response) => {
      setCurrencies(response.data);
    });
  }, []);

  // getting value from first select
  const getCurrencyOne = (e) => {
    let tempOne = e.target.value;
    try {
      tempOne = JSON.parse(tempOne);
      setCurrencyOne(tempOne);
    } catch (e) {}
  };

  //getting value from second select
  const getCurrencyTwo = (e) => {
    let tempTwo = e.target.value;
    try {
      tempTwo = JSON.parse(tempTwo);
      setCurrencyTwo(tempTwo);
    } catch (e) {}
  };

  //getting value from amount input
  const getAmount = (e) => {
    setAmount(e.target.value);
  };

  // calculating value on submit and saving to database
  const convert = () => {
    let res = ((100 * currencyTwo.rate) / (100 * currencyOne.rate)) * amount;
    setResult(res);

    let resultRate = res / amount;
    CurrencyService.postHistory(
      currencyOne.name,
      currencyTwo.name,
      amount,
      res.toFixed(3),
      resultRate.toFixed(3),
      new Date()
      );
  };

  //reset result div
  const Reset = () => {
    setResult(null);
  };

  return (
    <div className="container-fluid p-2">
      <div className="row m-3 py-2">
        <div className="col">
          <h5>Amount</h5>
          <input type="number" placeholder="0.000" className="form-control" onChange={getAmount} />
        </div>
        <div className="col">
          <h5>From</h5>
          <select className="form-select" onChange={getCurrencyOne}>
            <option>Select currency</option>
            {currencies.map((currency, id) => (
              <option key={id} value={JSON.stringify(currency)}>
                {currency.code}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <h5>To</h5>
          <select className="form-select" onChange={getCurrencyTwo}>
            <option>Select currency</option>
            {currencies.map((currency, id) => (
              <option key={id} value={JSON.stringify(currency)}>
                {currency.code}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row m-3">
        <div className="col">{resultBlock}</div>
        <div className="col ">
          <button className="btn btn-danger px-5"  onClick={Reset}>
            Reset
          </button>
          <button className="btn btn-warning float-end px-5" onClick={convert}>
            Convert
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExchangeBar;
