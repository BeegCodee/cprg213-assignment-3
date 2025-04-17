/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35; 
let selectedDays = []; 
const dayButtons = document.querySelectorAll('.day-selector li');
const fullDayButton = document.querySelector('#full');
const halfDayButton = document.querySelector('#half');
const clearButton = document.querySelector('#clear-button');
const calculatedCostElement = document.querySelector('#calculated-cost');

fullDayButton.classList.add('clicked');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayButtons.forEach(button => {
    button.addEventListener('click', () => {
        const day = button.id;
        if (button.classList.contains('clicked')) {
            // If already selected, remove selection
            button.classList.remove('clicked');
            selectedDays = selectedDays.filter(d => d !== day);
        } else {
            // If not selected, add selection
            button.classList.add('clicked');
            selectedDays.push(day);
        }
        calculateTotal();
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', () => {
    dayButtons.forEach(button => {
        button.classList.remove('clicked');
    });
    selectedDays = [];
    calculateTotal();
});




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener('click', () => {
    dailyRate = 20;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    calculateTotal();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener('click', () => {
    dailyRate = 35;
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    calculateTotal();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotal() {
    const totalCost = selectedDays.length * dailyRate;
    calculatedCostElement.innerHTML = totalCost;
}
