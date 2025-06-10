//test using inbuilt  Node.js readline module( recomended  for vs code after some research)
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function estimateTransactionFee() {
    //introducing readline
    readline.question("Unatuma Ngapi? (KES): ", amountToSend => {
        amountToSend = Number(amountToSend);
        
        // Validate input is a positive number
        if (isNaN(amountToSend) || amountToSend <= 0) {
            console.log("Please enter a valid positive amount.");
            readline.close();
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
        
        // Close the readline 
        readline.close();
    });
}

// Execute the function
estimateTransactionFee();