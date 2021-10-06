import React, { useState, useEffect } from "react";
import CurrencyService from "../../services/CurrencyService";

const Currencies = () => {
  const [currencies, setcurrencies] = useState([]);

  useEffect(() => {
    CurrencyService.getCurrencies().then((response) => {
      setcurrencies(response.data);
    });
  }, []);

  return (
    <div className="container border border-3 p-3">
      <h3 className="text-center">
        All currencies quoted against the euro (base currency)
      </h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Code</td>
            <td>Name</td>
            <td>Rate</td>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency, id) => (
            <tr key={id}>
              <td>{currency.code}</td>
              <td>{currency.name}</td>
              <td>{currency.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Currencies;
