// code your solution here
// Function to find the first Super Bowl win
function superbowlWin(record) {
  const winRecord = record.find((game) => game.result === "W");
  return winRecord ? winRecord.year : undefined;
}

// Export for testing
module.exports = superbowlWin;

// ----------- OPTIONAL TEST CODE BELOW -----------
// You can comment this out before running `npm test`

const record = [
  { year: "2018", result: "N/A" },
  { year: "2017", result: "L" },
  { year: "2016", result: "N/A" },
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
];

console.log("Super Bowl win year:", superbowlWin(record)); // Should log: 2015
