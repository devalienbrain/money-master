let incomeTotal = 0;
let totalExpenses = 0;
let balance = 0;
document.getElementById('calculate').addEventListener('click', function () {
  incomeTotal = parseFloat(document.getElementById('income').value);

  totalExpenses = parseFloat(document.getElementById('food').value) + parseFloat(document.getElementById('rent').value) + parseFloat(document.getElementById('clothes').value);

  document.getElementById('total-expenses').innerText = totalExpenses;

  balance = incomeTotal - totalExpenses;

  document.getElementById('balance').innerText = balance;
});

let savingAmount = 0;

document.getElementById('save-btn').addEventListener('click', function () {
  savingAmount = (incomeTotal * parseFloat(document.getElementById('save-num').value)) / 100;

  document.getElementById('saving-amount').innerText = savingAmount;

  document.getElementById('remaining-balance').innerText = balance - savingAmount;
});