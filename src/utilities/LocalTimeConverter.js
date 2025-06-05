export const formateLocalDate = (date) => {
    const [year, month, day] = new Date(date).toISOString().split('T')[0].split('-');
    return `${year}-${month}-${day}`;
}