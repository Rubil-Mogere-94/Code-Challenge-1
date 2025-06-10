//test using inbuilt  Node.js readline module( recomended  for vs code after some research)
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateBodaFare() {
    // Constants for fare calculation
    const baseFare = 50; // KES
    const chargePerKm = 15; // KES per kilometer
    
    // Prompt the user for the distance
    // const distanceInKm = Number(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));
    //introducing readline
    readline.question("Unafika wapi Mkubwa? Kilometer ngapi?: ", (distanceInKm) => {
        distanceInKm = Number(distanceInKm);
        
        // Calculate the fare components
        const distanceCharge = distanceInKm * chargePerKm;
        const totalFare = baseFare + distanceCharge;
        
        // Print the results to the console
        console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
        console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
        console.log(`Mpaka Uko: KES ${distanceCharge}`);
        console.log(`Total: KES ${totalFare}`);
        console.log("\nPanda Pikipiki!");
        
        // Close the readline
        readline.close();
    });
}

// Call the function to execute it
calculateBodaFare();