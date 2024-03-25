// code your solution here
function superbowlWin(record) {
    // Use the find() method to search for a win in the record
    const winRecord = record.find((game) => {
      return game.result === "W";
    });
  
    // If a win is found, return the year
    if (winRecord) {
      return winRecord.year;
    } else {
      // If no win is found, return undefined
      return undefined;
    }
  }
  
