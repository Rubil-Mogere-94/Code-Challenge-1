// readline: Node.js module for handling input/output streams (used to get user input from the terminal).
const readline = require('readline');

// passwordGenerator: Main function that generates passwords. Accepts password length (charsQuantity) as input.
function passwordGenerator(charsQuantity) {
    // Integer Check: Rejects non-integer inputs (e.g., null, strings, floats).
    if (!Number.isInteger(charsQuantity)) {
        return 'Not an Integer';
    }
    
    // Minimum Length Check: Ensures passwords are at least 3 characters long.
    if (charsQuantity < 3) {
        return 'Minimum length allowed: 3';
    }

    // Define character sets for password complexity
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";        // 26 uppercase letters
    const lowercase = "abcdefghijklmnopqrstuvwxyz";        // 26 lowercase letters
    const digits = "0123456789";                           // 10 digits
    const symbols = "~!@#$%^&*_-+=`|(){}[]:;\"'<>,.?/";    // 32 special symbols

    // Stores categories in an array sets.
    const sets = [uppercase, lowercase, digits, symbols];
    
    // Create index array [0,1,2,3] representing the four character sets
    let indices = [0, 1, 2, 3];
    
    // Fisher-Yates shuffle algorithm to randomize index order
    for (let i = indices.length - 1; i > 0; i--) {
        // Generate random index between 0 and current position
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements at positions i and j
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    // Select first three shuffled sets for mandatory inclusion
    let enforcedSets = [];
    for (let i = 0; i < 3; i++) {
        enforcedSets.push(sets[indices[i]]);
    }

    // Combine all characters into single pool for random selection
    let allChars = sets.join('');
    
    // Array to build password characters
    let passwordChars = [];

    // Add one character from each enforced character set
    enforcedSets.forEach(set => {
        // Select random character from current character set
        let randomIndex = Math.floor(Math.random() * set.length);
        passwordChars.push(set.charAt(randomIndex));
    });

    // Fill remaining password length with random characters from all sets
    for (let i = 0; i < charsQuantity - 3; i++) {
        // Select random character from combined character pool
        let randomIndex = Math.floor(Math.random() * allChars.length);
        passwordChars.push(allChars.charAt(randomIndex));
    }

    // Final shuffle to prevent predictable pattern (enforced chars first)
    for (let i = passwordChars.length - 1; i > 0; i--) {
        // Generate random index between 0 and current position
        const j = Math.floor(Math.random() * (i + 1));
        // Swap characters to randomize positions
        [passwordChars[i], passwordChars[j]] = [passwordChars[j], passwordChars[i]];
    }

    // Combine characters into final password string
    return passwordChars.join('');
}

// Configure readline interface for user interaction
const rl = readline.createInterface({
    input: process.stdin,   // Standard input (keyboard)
    output: process.stdout  // Standard output (terminal)
});

// Prompt user for password length
rl.question('Enter password length: ', (input) => {
    // Convert user input to number (NaN if invalid)
    const num = Number(input);
    
    // Generate password or error message
    const result = passwordGenerator(num);
    
    // Display result in terminal
    console.log(result);
    
    // Close input interface
    rl.close();
});