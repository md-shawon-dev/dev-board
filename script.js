// set current date
function setDate() {
  const today = new Date();

  const dateParts = today.toDateString().split(" ");
  const weekDayText = dateParts[0] + " ,"; // "Wed"
  const dateText = dateParts.slice(1, 3).join(" ") + " " + today.getFullYear();

  document.getElementById("weekDay").textContent = weekDayText;
  document.getElementById("date").textContent = dateText;
}

// Call the function to update the date
setDate();
