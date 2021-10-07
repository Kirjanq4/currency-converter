import axios from "axios";

const CURRENCIES_REST_API_URL = "http://localhost:8080/currencies";
const HISTORY_REST_API_URL = "http://localhost:8080/history";

class CurrencyService {
  // fetching currencies from api
  getCurrencies() {
    const jwtToken = sessionStorage.getItem("jwt");
    return axios.get(CURRENCIES_REST_API_URL, {
      headers: ({
        Authorization: jwtToken,
        
      }),
    });
  }

  // saving to database
  postHistory(firstCur, secondCur, amount, result, rate, date) {
    const jwtToken = sessionStorage.getItem("jwt");
    return axios.post(
      HISTORY_REST_API_URL,
      {
        firstCurrency: firstCur,
        secondCurrency: secondCur,
        amount: amount,
        result: result,
        rate: rate,
        date: date,
      },
      {
        headers:({
          Authorization: jwtToken,
          "Content-Type": "application/json"
        }),
      }
    );
  }

  // fetching history
  getHistory() {
    const jwtToken = sessionStorage.getItem("jwt");
    return axios.get(HISTORY_REST_API_URL, {
      headers:({
        Authorization: jwtToken,
        "Content-Type": "application/json"
      }),
    });
  }
}

export default new CurrencyService();
