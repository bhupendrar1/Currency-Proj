import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://api.currencyapi.com/v3/latest?apikey=cur_live_Ty0LIWQOchG9M3fWh2diG9oPyZr2kXqWrPhtJh88&base_currency=${currency.toUpperCase()}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res?.data) {
          const rates = {};
          Object.keys(res.data).forEach((key) => {
            rates[key.toLowerCase()] = res.data[key].value;
          });
          setData(rates);
        }
      })
      .catch((err) => console.error("Currency API Error:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
