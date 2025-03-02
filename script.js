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

function getCurrentTime() {
  const now = new Date();

  // Format hours, minutes, and seconds
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // Determine AM or PM
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format

  const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
  return formattedTime;
}

const handleTaskCompleted = (taskId) => {
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

  const activityLogContainer = document.getElementById(
    "activity_log_container"
  );
  //   find the task
  const task = tasks.find((task) => task.id === taskId);
  activityLogContainer.innerHTML += `
            <li class="bg-secondary p-[10px] rounded-lg">
              You have Complete ${task.title} at ${getCurrentTime()}
            </li>`;
  alert("Board Updated Successfully");
  if (totalAssigned === 0) {
    alert("Congrats!!! You have completed all the current task");
  }
};

// clear activity log
const clearActivityLog = () => {
  const activityLogContainer = document.getElementById(
    "activity_log_container"
  );
  activityLogContainer.innerHTML = "";
};

// set random background body color
const randomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
};
