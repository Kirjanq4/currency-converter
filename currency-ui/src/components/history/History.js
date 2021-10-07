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
      {history.map((history, id) => (
        <div key={id} className="container bg-light p-2 my-2 border">
          <div>
            <b>
            {history.amount} {history.firstCurrency} = {history.result}{" "}
            {history.secondCurrency} 
            </b>
            <div>
              <i>
              {moment(history.date).local().format("DD/MM/yy")} at{" "}
              {moment(history.date).local().format("HH:mm:ss")}
              </i>
            </div>
          </div>
          <div className="m-2">
            1 {history.firstCurrency} = {history.rate} {history.secondCurrency}
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
