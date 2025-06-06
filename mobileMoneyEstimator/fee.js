function estimateTransactionFee() {
    // Get amount from user with specified prompt
    const amountToSend = Number(prompt("Unatuma Ngapi? (KES):"));
    
    // Validate input is a positive number
    if (isNaN(amountToSend) || amountToSend <= 0) {
        console.log("Please enter a valid positive amount.");
        return;
    }
    
    // Calculate fee with min/max limits using Math functions
    const transactionFee = Math.min(Math.max(amountToSend * 0.015, 10), 70);
    const totalDebit = amountToSend + transactionFee;
    
    // Display results in exact required format
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
    console.log(`Total amount to be debited: KES ${totalDebit}`);
    console.log("\nSend Money Securely!");
}

// Execute the function
estimateTransactionFee();