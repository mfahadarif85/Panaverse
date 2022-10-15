let heightInch = 73;
let weightPound = 190;
let heightCm = Math.round(heightInch * 2.54);
let weightKg = Math.round(weightPound / 2.2046);
console.log(`${heightInch} inch is equal to ${heightCm} cm`);
console.log(`${weightPound} pound is equal to ${weightKg} kilo`);
let bmi = Math.round(weightKg / ((heightCm / 100) * 2));
console.log(`BMI = ${bmi} `);
