  function solveField(size, ladybugsString, ...commands) {
    // Parse the ladybugs input and convert it into an array of numbers
    let ladybugs = ladybugsString.split(' ').map(Number);
  
    // Create an array with the specified size and initialize all cells to 0
    let field = new Array(size).fill(0);
  
    // Place the ladybugs in their initial positions
    for (let i = 0; i < ladybugs.length; i++) {
      let index = ladybugs[i];
      if (index >= 0 && index < size) {
        field[index] = 1;
      }
    }
  
    // Process the commands
    for (let i = 0; i < commands.length; i++) {
      let command = commands[i];
      let [index, direction, flyLength] = command.split(' ');
      let currentIndex = Number(index);
      let currentFlyLength = Number(flyLength);
  
      // Check if the current index is valid and contains a ladybug
      if (
        currentIndex >= 0 &&
        currentIndex < size &&
        field[currentIndex] === 1
      ) {
        // Clear the current index
        field[currentIndex] = 0;
  
        // Calculate the next index based on the direction and fly length
        let nextIndex =
          direction === 'right'
            ? currentIndex + currentFlyLength
            : currentIndex - currentFlyLength;
  
        // Continue flying in the same direction until an empty cell or out of the field
        while (field[nextIndex] === 1) {
          nextIndex =
            direction === 'right'
              ? nextIndex + currentFlyLength
              : nextIndex - currentFlyLength;
        }
  
        // Check if the next index is within the field range and place the ladybug
        if (nextIndex >= 0 && nextIndex < size) {
          field[nextIndex] = 1;
        }
      }
    }
  
    // Print the field
    console.log(field.join(' '));
  }
  
  solveField(3, '0 1', '0 right 1', '2 right 1');
  