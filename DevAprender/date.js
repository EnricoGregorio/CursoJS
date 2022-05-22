// Date

const dt1 = new Date();
const dt2 = new Date(2022, 6, 15, 15, 30, 00, 05);
const dt3 = new Date('July 30 2022 14:30')

dt2.setFullYear(2077);

const data2 = dt2.toDateString(); // Para ver a data.
const hora2 = dt2.toTimeString(); // Para ver a hora com fuso.
const dthr2 = dt2.toISOString(); // Para ver a data em bd.

console.log(data2);
console.log(hora2);