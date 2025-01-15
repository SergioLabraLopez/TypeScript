function rollTheDice(userName: string, maxOfTries: number): string[] {
    const results: string[] = [];
    var MAX_DICE_NUMBER: number = 6;
  
    for (let index = 0; index < maxOfTries; index++) {
      const result = Math.ceil(Math.random() * MAX_DICE_NUMBER);
  
      if (result === MAX_DICE_NUMBER) {
        results.push(`${userName} is a WINNER`);
      } else {
        results.push(`${userName} is a LOSER`);
      }
    }
  
    return results;
  }
  
  const results = rollTheDice('Sergio', 2);
  
  console.log(results);
  