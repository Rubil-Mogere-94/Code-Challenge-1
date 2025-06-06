function calculateBodaFare() {
    // Constants for fare calculation
    const baseFare = 50; // KES
    const chargePerKm = 15; // KES per kilometer
    
    // Prompt the user for the distance
    const distanceInKm = Number(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));
    
    // Calculate the fare components
    const distanceCharge = distanceInKm * chargePerKm;
    const totalFare = baseFare + distanceCharge;
    
    // Print the results to the console
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceCharge}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("\nPanda Pikipiki!");
}

// Call the function to execute it
calculateBodaFare();