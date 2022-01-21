const { Console } = require('console')
const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
console.log(" ")
console.log("----------------------------------")
console.log(" ")
console.log("Welcome to the password validator!")
console.log(" ")
console.log("----------------------------------")
console.log(" ")
console.log("Your password mush contain the following:")
console.log("")
console.log("- Contains at least ten characters")
console.log("- Contains at least one uppercase letter")
console.log("- Contains at least one number")
console.log("- Contains at least one special character")
console.log(" ")
console.log("Special Characters allowed: - + _ ! @ # $ % ^ & * . , ?")
console.log("")
console.log("----------------------------------")
console.log(" ")
reader.question("Please type in a password to validate: ", function(input) {

    let containsRegex = false
    let hasAtLeastTenChar = false

    const regex = new RegExp(
        "^(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?])"
    )

    if (input.length >= 10) {
        hasAtLeastTenChar = true

        if (regex.test(input)) {
            containsRegex = true
        } else {
            containsRegex = false
        }
    } else {
        hasAtLeastTenChar = false
    }


    console.log(" ")
    if (hasAtLeastTenChar && containsRegex) {
        console.log("----------------------------------")
        console.log("Success! Your password is valid")
    } else {
        console.log("----------------------------------")
        console.log(" ")
        console.log("Your password isn't valid, please reach these requirments:")
        console.log(" ")
        console.log("- Contains at least ten characters")
        console.log("- Contains at least one uppercase letter")
        console.log("- Contains at least one number")
        console.log("- Contains at least one special character")
        console.log(" ")
        console.log("Special Characters allowed: - + _ ! @ # $ % ^ & * . , ?")
    } 
    console.log(" ")

    reader.close()
})

// This project was very fun, learning about regular expressions was pretty interesting and I'm excited to apply it in a actual website.