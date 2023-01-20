const peopleFullNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (peopleFullNames) => {
  return getFirstNames(peopleFullNames);
};
module.exports = getPeopleInCity;
//console.log(getPeopleInCity());
