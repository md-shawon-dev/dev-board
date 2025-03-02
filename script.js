const tasks = [
  {
    id: 1,
    company: "ShopEase",
    title: "Fix Mobile Button Issue",
    description:
      "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly.",
    deadline: "21 March 2025",
  },
  {
    id: 2,
    company: "CloudSync",
    title: "Add Dark Mode",
    description:
      "Store the user's preference in localStorage, update CSS variables dynamically, and apply a smooth transition effect.",
    deadline: "21 March 2025",
  },
  {
    id: 3,
    company: "SwiftPay",
    title: "Optimize Home page",
    description:
      "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly.",
    deadline: "21 March 2025",
  },
  {
    id: 4,
    company: "Meta",
    title: "Add new emoji 🤲",
    description:
      "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly.",
    deadline: "21 March 2025",
  },
  {
    id: 5,
    company: "Google LLC",
    title: "Integrate OpenAI API",
    description:
      "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly.",
    deadline: "21 March 2025",
  },
  {
    id: 6,
    company: "Glassdoor",
    title: "Improve Job Searching Experience",
    description:
      "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly.",
    deadline: "21 March 2025",
  },
];

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

let totalAssigned = 6;
let totalCompleted = 23;

const totalAssignedElement = document.getElementById("totalAssigned");
totalAssignedElement.textContent =
  totalAssigned < 10 ? "0" + totalAssigned : totalAssigned;

const totalCompletedElement = document.getElementById("totalCompleted");
totalCompletedElement.textContent =
  totalCompleted < 10 ? "0" + totalCompleted : totalCompleted;

const handleTaskCompleted = (taskId) => {
  console.log(taskId);
  totalCompleted += 1;
  totalCompletedElement.textContent =
    totalCompleted < 10 ? "0" + totalCompleted : totalCompleted;
  totalAssigned -= 1;
  totalAssignedElement.textContent =
    totalAssigned < 10 ? "0" + totalAssigned : totalAssigned;

  // disable the button
  const taskButtonElement = document.getElementById(`task${taskId}`);
  taskButtonElement.disabled = true;
  taskButtonElement.classList.add("opacity-20");
};
