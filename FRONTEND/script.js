let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const monthSelect = document.getElementById('month-select');
const weekSelect = document.getElementById('week-select');
const daySelect = document.getElementById('day-select');

const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expnese-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function() {
    const category = categorySelect.value;
    const month = categorySelect.value;
    const week = categorySelect.value;
    const day = categorySelect.value;
	
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('Please select a category');
        return;
    }
	
	if (Month === '') {
        alert('Please select a month');
        return;
    }
	
	if (week=== '') {
        alert('Please select a week');
        return;
    }
	
	if (day === '') {
        alert('Please select a day');
        return;
    }
	
    if (isNaN(amount) || amount <=0 ) {
        alert('Please enter a valid amoun')
        return;
    }
    if(date === '') {
        alert('Please select a date')
        return;
    }
    expenses.push({category, month, week, day, amount, date});

    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const monthCell = newRow.insertCell();
    const weekCell = newRow.insertCell();
    const dayCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });

    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
	monthCell.textContent = expense.month;
	weekCell.textContent = expense.week;
	dayCell.textContent = expense.day;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);

});

for (const expense of expenses) {
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.inserRow();
    const categoryCell = newRow.insertCell();
	const monthCell = newRow.insertCell();
	const weekCell = newRow.insertCell();
	const dayCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });
    categoryCell.textContent = expense.category;
    monthCell.textContent = expense.category;
	weekCell.textContent = expense.category;
	dayCell.textContent = expense.category;
	amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
}
