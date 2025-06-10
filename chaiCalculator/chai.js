//test using inbuilt  Node.js readline module( recomended  for vs code after some research)
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate ingredients for Kenyan Chai Bora
function calculateChaiIngredients() {
    //introducing readline
    readline.question("Karibu! How many cups of Chai Bora would you like to make?", (numberOfCups) => {
        numberOfCups = Number(numberOfCups);
       
    
    // Calculate each ingredient
    const water = 200 * numberOfCups;
    const milk = 50 * numberOfCups;
    const teaLeaves = 1 * numberOfCups;
    const sugar = 2 * numberOfCups;
    
    // Print the results to the console
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${sugar} teaspoons`);
    console.log("\nEnjoy your Chai Bora!");
    // Close the readline
    readline.close();
    });
}
// Call the function to execute it
calculateChaiIngredients();