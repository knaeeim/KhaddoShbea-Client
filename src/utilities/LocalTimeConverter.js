export function formateLocalDate(dateValue) {
    // dateValue is the JS Date from API
    const dt = new Date(dateValue);
    return dt.toLocaleDateString("en-BD", {
        timeZone: "Asia/Dhaka",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
