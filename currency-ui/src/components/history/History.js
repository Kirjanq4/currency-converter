import React, { useState, useEffect } from "react";
import CurrencyService from "../../services/CurrencyService";
import moment from "moment";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    CurrencyService.getHistory().then((response) => {
      setHistory(response.data);
    });
  }, []);

  return (
    <div>
      
      <h3>Hello History</h3>
      {history.map((history, id) => (
        <div key={id} className="container bg-light p-5 border">
          <div>
            <h6>
              {moment(history.date).format("DD/MM/yy")} at{" "}
              {moment(history.date).format("HH:mm:ss")}
            </h6>
            <hr />
            {history.amount} {history.firstCurrency} = {history.result}{" "}
            {history.secondCurrency} <hr />
          </div>
          <div>
            1 {history.firstCurrency} = {history.rate} {history.secondCurrency}
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
