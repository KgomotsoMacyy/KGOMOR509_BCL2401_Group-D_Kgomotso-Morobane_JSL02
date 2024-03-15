const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value; 
    const goalList = document.querySelector('#goalList');
    
    // Check if the goalInput is not empty
    if (goalInput === "") {
        alert("Input empty. Please enter a goal."); // Display an alert if the input is empty
        return; 
    }
    
    // ⚠️ Hint 1: Check for duplicates
    // Use 'goalList' to get all existing goals and check if 'goalInput' matches any of them.
    const existingGoals = goalList.querySelectorAll('li'); 
    for (const goal of existingGoals) {
        // ⚠️ Hint 3: Code structure
        // You might want to wrap the duplicate-checking logic in an 'if' statement.
        if (goal.textContent === goalInput) {
            alert("This Goal already exists."); // Display an alert if the goal already exists
            return; // Exit the function early
        }
    }
    
     // ⚠️ Hint 2: Prevent duplicates
    // If a duplicate is found, display an alert to the user and don't add the goal to the list.
    // If it's not a duplicate, proceed with adding it as a new goal.
    const newGoal = document.createElement('li'); 
    newGoal.textContent = goalInput; 
    goalList.appendChild(newGoal); 

    
    // Clear the input field after adding the goal
    document.querySelector('#goalInput').value = ""; 
};


 // ⚠️ Hint 4: Event listener
    // The event listener that removes goals when clicked is not related to this issue.
document.querySelector('#submitGoal').addEventListener('click', addNewGoal); 

    
    // ⚠️ Hint 1: Check for duplicates
    // Use 'goalList' to get all existing goals and check if 'goalInput' matches any of them.
    
    // ⚠️ Hint 2: Prevent duplicates
    // If a duplicate is found, display an alert to the user and don't add the goal to the list.
    // If it's not a duplicate, proceed with adding it as a new goal.
    
    // ⚠️ Hint 3: Code structure
    // You might want to wrap the duplicate-checking logic in an 'if' statement.
    
    // ⚠️ Hint 4: Event listener
    // The event listener that removes goals when clicked is not related to this issue.
    // Focus on preventing duplicates for now.
 
    // Add event listener to the goal submit button


///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
