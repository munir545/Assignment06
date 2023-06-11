const search = "";

//filter data

blood_donorList.map((donor) => {
  const star_date = new Date(donor.last_donate_date);
  const current_date = new Date();
  const timeLeft = current_date.getTime() - star_date.getTime();
  const donorAvailableTime = Math.floor(timeLeft / (1000 * 3600 * 24));

  if (donorAvailableTime >= 120) {
    donor.is_available = true;
    donor.message = "Availble";
  } else {
    donor.is_available = false;
    donor.message = `Not Availble.Wilbe avilable after ${
      120 - donorAvailableTime
    } days`;
  }
});

const result = blood_donorList.filter(
  (data) =>
    data.name.toLowerCase() === search.toLowerCase() ||
    data.blood_group.toLowerCase() === search.toLowerCase() ||
    data.cell.toLowerCase() === search.toLowerCase()
);

//final result
const finalResult = [];

// get data
result.forEach((item, index) => {
  finalResult.push(item);
});

if (finalResult.length > 0) {
  console.table(finalResult);
} else {
  console.table(blood_donorList);
}
