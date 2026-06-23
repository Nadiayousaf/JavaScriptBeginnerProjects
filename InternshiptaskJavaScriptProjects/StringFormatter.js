function cleanText(text) {
    return text.trim();
}

function capitalize(text) {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function formatDisplayName(firstName, lastName) {
    const cleanFirst = capitalize(cleanText(firstName));
    const cleanLast = capitalize(cleanText(lastName));

    return `${cleanFirst} ${cleanLast}`;
}

console.log(formatDisplayName("  nAdIa ", "  YOUSAF "));
