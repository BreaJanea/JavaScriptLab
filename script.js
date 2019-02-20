

  function startGame() {
      let answer = prompt("Do you want to play a gmae?");
      if (answer.toLowerCase() === "yes") {
          let userName = prompt("What is your name?");
          startCombat(userName);
      } else if (answer.toLowerCase() === "no") {
          console.log("Bye bye");
      }
  }

  function getDamage() {
      return Math.floor(Math.random() * 5 + 1)
  }

  function startCombat(name) {
      let userPoints = 40;
      let grantPoints = 10;
      let wins = 0;

      
      while (grantPoints > 0) {
          let userMove = prompt("Do you want to attack or quit?");
          if (userMove === "attack") {
              console.log(`${name}'s health is now: ${userPoints -= getDamage()}`);
              console.log(`Grant's Health is now: ${grantPoints -= getDamage()}`);
              if (userPoints <= 0) {
                  console.log("Grant wins!");
                  break;
              } else if (grantPoints <= 0) {
                  wins++;
                  if (wins === 3) {
                      console.log("You won!");
                      break;
                  }
                  console.log(`${name} wins: ${wins}`);
                  grantPoints = 10;
              }
          } else if (userMove.toLowerCase() === "quit") {
              console.log("Bye bye");
              break;
          }
      }
  }
startGame ()
