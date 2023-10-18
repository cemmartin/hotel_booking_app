use guests;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Charlie Manson",
    email: "ibemad@hotmail.co.uk",
    checkedIn: true
  },
  {
    name: "Tex Watson",
    email: "twatson@live.com",
    checkedIn: false
  },
  {
    name: "Susan atkins",
    email: "mental@altavista.com",
    checkedIn: false
  }
]);