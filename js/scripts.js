let button = document.getElementById('add');
button.addEventListener('click', newItem);

function newItem() {
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
    costInput.setAttribute('type', 'text');
    costInput.classList.add('form-control');

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

