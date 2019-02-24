const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// for(let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// companies.forEach(function(company) {
//   console.log(company);
// });

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

// const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(companyNames);

// const agesSquare = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age * 2);
// console.log(agesSquare);

// const sortedCompanies = companies.sort((c1, c2) => c1.start > c2.start ? 1 : -1);
// console.log(sortedCompanies);

// let ageSum = 0;
// for(let i = 0; i< ages.length; i++) {
//   ageSum += ages[i];
// }
// console.log(ageSum);

// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalYears);

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
console.log(combined);
