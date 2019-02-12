function playGame(){

    const gameStart = prompt ('Do you want to play a game?');
    if (gameStart.toLowerCase() === 'yes'){
    const username = prompt ('What is your name?');
    console.log(`Hello, ${username}!`);
    
     
    let userPoints = 40;
    let grantPoints = 10;
    let userWins = 0;
    
    
    while (grantPoints > 0) {
    console.log(`${username} has ${userPoints -= Math.floor((Math.random() *3) + 1)} health points left!`);
    console.log(`Grant the Mighty Chicken has ${grantPoints -= Math.floor((Math.random() *3) + 1)} health points left!`);
    
     
    
      if (userWins >= 3 || grantPoints <= 0){
        console.log(`${username} wins!`);
        break;
          } else if (userPoints <= 0){

        console.log('Grant wins!');
        break;
          }
    
       else if (grantPoints <= 0) {
                userWins++;
                console.log(`${username} wins!`);
                grantHealth = 10;
            }
        }
    } 
}