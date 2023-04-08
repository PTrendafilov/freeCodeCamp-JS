function checkCashRegister(price, cash, cid) {
  const currencyValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let changeDue = cash - price;
  let change = [];
  let totalCID = cid.reduce((total, [_, value]) => total + value, 0);
  totalCID = parseFloat(totalCID.toFixed(2));

  if (totalCID < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCID === changeDue) {
    return { status: "CLOSED", change: cid };
  } else {
    cid.reverse().forEach(([currency, amount]) => {
      let currencyValue = currencyValues[currency];
      let currencyNeeded = Math.min(Math.floor(changeDue / currencyValue) * currencyValue, amount);
      if (currencyNeeded > 0) {
        changeDue -= currencyNeeded;
        changeDue = parseFloat(changeDue.toFixed(2));
        change.push([currency, currencyNeeded]);
      }
    });

    if (changeDue === 0) {
      return { status: "OPEN", change };
    } else {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  }
}
