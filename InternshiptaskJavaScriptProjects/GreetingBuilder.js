function formatName(firstName, lastName) {
    return firstName + " " + lastName;
}

function getGreeting(timeOfDay) {
    if (timeOfDay === "morning") {
        return "Good Morning";
    } else if (timeOfDay === "afternoon") {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}

function createGreeting(firstName, lastName, timeOfDay) {
    const fullName = formatName(firstName, lastName);
    const greeting = getGreeting(timeOfDay);
    return greeting + ", " + fullName + "!";
}

console.log(createGreeting("Nadia", "Yousaf", "morning"));