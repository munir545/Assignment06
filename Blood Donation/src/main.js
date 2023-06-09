const search = prompt("Search Now");

//filter data

const result = bloodDonationClub.filter(
  (data) => data.bloodGroup === search || data.phone === search
);

// //final result
// const finalResult = [];

// // get data
// result.forEach((item, index) => {
//   finalResult.push(item);
// });

console.table(result);
