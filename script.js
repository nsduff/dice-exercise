const diceRoll = () => {
  let element = document.querySelector("#die1");
  let element2 = document.querySelector("#die2");

  const randomNumber = () => {
    let num = Math.floor(Math.random() * 6 + 1);
    return num;
  };

  let side = randomNumber();
  let side2 = randomNumber();

  if (side === 1) {
    element.className = "one";
  } else if (side === 2) {
    element.className = "two";
  } else if (side === 3) {
    element.className = "three";
  } else if (side === 4) {
    element.className = "four";
  } else if (side === 5) {
    element.className = "five";
  } else if (side === 6) {
    element.className = "six";
  }

  if (side2 === 1) {
    element2.className = "one";
  } else if (side2 === 2) {
    element2.className = "two";
  } else if (side2 === 3) {
    element2.className = "three";
  } else if (side2 === 4) {
    element2.className = "four";
  } else if (side2 === 5) {
    element2.className = "five";
  } else if (side2 === 6) {
    element2.className = "six";
  }
  // for Over-Seven
  let balance = document.querySelector(".balance").value;
  let bet = document.querySelector(".bet").value;
  let winnings = bet * 4;
  let sum = side + side2;
  const evenOver = () => {
    if (sum > 7) {
      let newBalance = parseFloat(balance) + parseFloat(winnings);
      document.querySelector(".balance").value = newBalance;
      document.querySelector(".bet").value = " ";
      console.log(newBalance);
    } else {
      let newBalance = balance - bet;
      document.querySelector(".balance").value = newBalance;
      document.querySelector(".bet").value = " ";
      console.log(newBalance);
    }
  };
  const oddSeven = () => {
    if (sum === 7) {
      let newBalance = parseFloat(balance) + parseFloat(winnings);
      document.querySelector(".balance").value = newBalance;
      document.querySelector(".bet").value = " ";
      console.log(newBalance);
    } else {
      let newBalance = balance - bet;
      document.querySelector(".balance").value = newBalance;
      document.querySelector(".bet").value = " ";
      console.log(newBalance);
    }
  };
  const evenUnder = () => {
    if (sum < 7) {
      let newBalance = parseFloat(balance) + parseFloat(winnings);
      document.querySelector(".balance").value = newBalance;
      document.querySelector(".bet").value = " ";
      console.log(newBalance);
    } else {
      let newBalance = balance - bet;
      document.querySelector(".balance").value = newBalance;
      document.querySelector(".bet").value = " ";
      console.log(newBalance);
    }
  };

  if (document.getElementById("over").checked) {
    evenOver();
  } else if (document.getElementById("odd").checked) {
    oddSeven();
  } else if (document.getElementById("under").checked) {
    evenUnder();
  }

  //for Rolling Dice Stage 2
  // const gambling = () => {
  //   let balance = document.querySelector(".balance").value;
  //   let bet = document.querySelector(".bet").value;
  //   let winnings = bet * 6;
  //   if (side === 6 || side2 === 6) {
  //     let newBalance = parseFloat(balance) + parseFloat(winnings);
  //     document.querySelector(".balance").value = newBalance;
  //     document.querySelector(".bet").value = " ";
  //   } else {
  //     let newBalance = balance - bet;
  //     document.querySelector(".balance").value = newBalance;
  //     document.querySelector(".bet").value = " ";
  //   }
  //   console.log(newBalance);
  // };
  // gambling();

  //**for Rolling Dice Stage 1
  // if (element.classList.contains("one")) {
  //   side = 1;
  // } else if (element.classList.contains("two")) {
  //   side = 2;
  // } else if (element.classList.contains("three")) {
  //   side = 3;
  // } else if (element.classList.contains("four")) {
  //   side = 4;
  // } else if (element.classList.contains("five")) {
  //   side = 5;
  // } else if (element.classList.contains("six")) {
  //   side = 6;
  // }

  // if (side === 1) {
  //   side++;
  // } else if (side === 2) {
  //   side++;
  // } else if (side === 3) {
  //   side++;
  // } else if (side === 4) {
  //   side++;
  // } else if (side === 5) {
  //   side++;
  // } else if (side === 6) {
  //   side = 1;
  // }
};
