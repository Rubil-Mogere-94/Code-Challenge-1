function calculateChaiIngredients() {
    // Prompt the user for the number of cups
    const numberOfCups = Number(prompt("Karibu! How many cups of Chai Bora would you like to make?"));
    
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
}

// Call the function to execute it
calculateChaiIngredients();