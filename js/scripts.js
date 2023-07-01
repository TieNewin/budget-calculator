//Add new personal expense button
let button = document.getElementById('add');
button.addEventListener('click', newItem);

//Master calculate button
let submit = document.getElementById('calculate');
submit.addEventListener('click', calculate);

//Variable count for number of personal expense items
let personalExpenses = 1;

//Add new personal expense item function
function newItem() {
    personalExpenses += 1;

    let buttonSlot = document.getElementById('button-slot');
    buttonSlot.remove();

    let wantsContainer = document.getElementById('wants-container');

    let expenseItem = document.createElement('div');
    expenseItem.classList.add('expense-item');

    let wantName = document.createElement('div');
    wantName.classList.add('input-group', 'mb-3', 'want-name');

    let nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.classList.add('form-control');

    let wantCost = document.createElement('div');
    wantCost.classList.add('input-group', 'mb-3', 'want-cost');

    let dollarSign = document.createElement('span');
    dollarSign.classList.add('input-group-text');
    dollarSign.innerText = '$';

    let costInput = document.createElement('input');
    costInput.setAttribute('id', 'want' + personalExpenses);
    costInput.setAttribute('type', 'text');
    costInput.classList.add('form-control');
    costInput.setAttribute('value', '0');

    let perMonth = document.createElement('span');
    perMonth.classList.add('input-group-text');
    perMonth.innerText = '/month';

    let newButtonSlot = document.createElement('div');
    newButtonSlot.setAttribute('id', 'button-slot');
    newButtonSlot.classList.add('expense-item');
    
    let newButton = document.createElement('button');
    newButton.setAttribute('type', 'button');
    newButton.setAttribute('id', 'add');
    newButton.classList.add('btn', 'btn-primary');
    newButton.addEventListener('click', newItem);

    let plus = document.createElement('img');
    plus.setAttribute('src', 'img/plus-lg.svg');

    
    wantName.appendChild(nameInput);
    wantCost.appendChild(dollarSign);
    wantCost.appendChild(costInput);
    wantCost.appendChild(perMonth);

    newButton.appendChild(plus);

    newButtonSlot.appendChild(newButton);

    expenseItem.appendChild(wantName);
    expenseItem.appendChild(wantCost);

    wantsContainer.appendChild(expenseItem);
    wantsContainer.appendChild(newButtonSlot);
}

//Master calculate function
function calculate() {
    let resultsContainer = document.getElementById('results-container');
    resultsContainer.style.display = 'flex';

    submit.remove();

    let income = parseInt(document.getElementById('income').value);

    let housing = parseInt(document.getElementById('housing').value);
    let idealHousing = Math.round(income * .28);
    let transportation = parseInt(document.getElementById('transportation').value);
    let idealTransportation = Math.round(income * .15);
    let debt = parseInt(document.getElementById('debt').value);
    let totalDebt = housing + transportation + debt;
    let idealDebt = Math.round(income * .43);
    let insurance = parseInt(document.getElementById('insurance').value);
    let utilities = parseInt(document.getElementById('utilities').value);
    let groceries = parseInt(document.getElementById('groceries').value);
    let other = parseInt(document.getElementById('other').value);

    let wantsTotal = 0;
    for (let x = 1; x <= personalExpenses; x++) {
        let currentCost = parseInt(document.getElementById('want' + x).value);
        wantsTotal += currentCost;
    }

    let needsTotal = housing + transportation + debt + insurance + utilities + groceries + other;
    let savingsTotal = parseInt(document.getElementById('savings-amount').value);

    let idealNeeds = Math.round(income * .5);
    let idealWants = Math.round(income * .3);
    let idealSavings = Math.round(income * .2);

    let needsDifference = needsTotal - idealNeeds;
    let wantsDifference = wantsTotal - idealWants;

    let totalSpending = needsTotal + wantsTotal + savingsTotal;
    let totalDifference = totalSpending - income;

    let idealNeedsNumber = document.createElement('h6');
    idealNeedsNumber.innerText = '$' + idealNeeds;
    let recommendedNeeds = document.getElementById('recommended-needs');
    recommendedNeeds.appendChild(idealNeedsNumber);

    let idealWantsNumber = document.createElement('h6');
    idealWantsNumber.innerText = '$' + idealWants;
    let recommendedWants = document.getElementById('recommended-wants');
    recommendedWants.appendChild(idealWantsNumber);

    let idealSavingsNumber = document.createElement('h6');
    idealSavingsNumber.innerText = '$' + idealSavings;
    let recommendedSavings = document.getElementById('recommended-savings');
    recommendedSavings.appendChild(idealSavingsNumber);

    let yourNeedsNumber = document.createElement('h6');
    yourNeedsNumber.innerText = '$' + needsTotal;
    let yourNeeds = document.getElementById('your-needs');
    yourNeeds.appendChild(yourNeedsNumber);

    let yourWantsNumber = document.createElement('h6');
    yourWantsNumber.innerText = '$' + wantsTotal;
    let yourWants = document.getElementById('your-wants');
    yourWants.appendChild(yourWantsNumber);

    let yourSavingsNumber = document.createElement('h6');
    yourSavingsNumber.innerText = '$' + savingsTotal;
    let yourSavings = document.getElementById('your-savings');
    yourSavings.appendChild(yourSavingsNumber);

    let idealHousingNumber = document.createElement('h6');
    idealHousingNumber.innerText = '$' + idealHousing;
    let recommendedHousing = document.getElementById('recommended-housing');
    recommendedHousing.appendChild(idealHousingNumber);

    let idealTransportationNumber = document.createElement('h6');
    idealTransportationNumber.innerText = '$' + idealTransportation;
    let recommendedTransportation = document.getElementById('recommended-transportation');
    recommendedTransportation.appendChild(idealTransportationNumber);

    let idealDebtNumber = document.createElement('h6');
    idealDebtNumber.innerText = '$' + idealDebt;
    let recommendedDebt = document.getElementById('recommended-debt');
    recommendedDebt.appendChild(idealDebtNumber);

    let yourHousingNumber = document.createElement('h6');
    yourHousingNumber.innerText = '$' + housing;
    let yourHousing = document.getElementById('your-housing');
    yourHousing.appendChild(yourHousingNumber);

    let yourTransportationNumber = document.createElement('h6');
    yourTransportationNumber.innerText = '$' + transportation;
    let yourTransportation = document.getElementById('your-transportation');
    yourTransportation.appendChild(yourTransportationNumber);

    let yourDebtNumber = document.createElement('h6');
    yourDebtNumber.innerText = '$' + totalDebt;
    let yourDebt = document.getElementById('your-debt');
    yourDebt.appendChild(yourDebtNumber);

    let spendingSolutionText = document.createElement('h6');
    if ((needsDifference > 0) && (wantsDifference > 0)) {
        spendingSolutionText.innerText = 'Decrease your necessity spending by $' + needsDifference + '/month and personal spending by $' + wantsDifference + '/month to reach an optimal budget.';
    } else {
        if ((needsDifference > 0) && (wantsDifference <= 0)) {
            spendingSolutionText.innerText = 'Decrease your necessity spending by $' + needsDifference + '/month to reach an optimal budget.';
        } else {
            if ((needsDifference <= 0) && (wantsDifference > 0)) {
                spendingSolutionText.innerText = 'Decrease your personal spending by $' + wantsDifference + '/month to reach an optimal budget.';
            } else {
                if ((needsDifference <= 0) && (wantsDifference <= 0)) {
                    spendingSolutionText.innerText = 'Your spending is affordable with your income, great job!';
                }
            }
        }
    }
    let spendingSolution = document.getElementById('spending-solution');
    spendingSolution.appendChild(spendingSolutionText);
    
    let incomeSolutionText = document.createElement('h6');
    if (totalDifference > 0) {
        incomeSolutionText.innerText = 'Increase your income by $' + totalDifference + '/month to afford your optimal budget.';
    } else {
        if (totalDifference <= 0) {
            incomeSolutionText.innerText = 'You can afford your optimal budget, congratulations!';
        }
    }
    let incomeSolution = document.getElementById('income-solution');
    incomeSolution.appendChild(incomeSolutionText);
}