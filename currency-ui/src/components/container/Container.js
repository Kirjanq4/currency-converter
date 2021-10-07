import React, { useState }from 'react'
import Currencies from "../currencies/Currencies"
import ExchangeBar from "../exchangeBar/ExchangeBar";
import History from "../history/History";

const Container = () => {

    const [state, setState] = useState(false);

    const showHistory = () =>  {
        setState(!state)
    }

    return (
        <div className="bg-light bg-gradient">
          <ExchangeBar />

           {state ? <button className="btn btn-danger m-3" onClick={showHistory}>Hide History</button> : <button className="btn btn-warning m-3" onClick={showHistory}>Show History</button>}

           {state ?  <History /> : null }

          <Currencies/>

        </div>
    )
}

export default Container
