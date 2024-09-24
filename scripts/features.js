document.getElementById('btn-donation').addEventListener('click', function () {
    showSection('donation-section');
    showActive('btn-donation');
});

document.getElementById('btn-history').addEventListener('click', function () {
    showSection('history-section');
    showActive('btn-history');
});

// Calculate Noakhali Donation
document.getElementById('btn-noakhali').addEventListener('click', function (event) {
    event.preventDefault();
    const inputValue = getInputValue('input-noakhali');
    const currentBalance = getInnerText('current-amount');
    const currentDonation = getInnerText('noakhali-amount');

    const newCurrentBalance = currentBalance - inputValue;
    const newCurrentDonation = currentDonation + inputValue;

    document.getElementById('current-amount').innerText = newCurrentBalance;
    document.getElementById('noakhali-amount').innerText = newCurrentDonation;

    // add transaction history
    const title = document.getElementById('title-noakhali').innerText;
    const div = document.createElement('div');
    div.classList.add('shadow-xl', 'p-6', 'rounded-2xl', 'border', 'mb-5');
    div.innerHTML = `
        <p class="font-bold"> ${inputValue} Taka is ${title} </p>
    `

    document.getElementById('transaction-container').appendChild(div);
});

// Calculate Feni Donation
document.getElementById('btn-feni').addEventListener('click', function (event) {
    event.preventDefault();
    const inputValue = getInputValue('input-feni');
    const currentBalance = getInnerText('current-amount');
    const currentDonation = getInnerText('feni-amount');

    const newCurrentBalance = currentBalance - inputValue;
    const newCurrentDonation = currentDonation + inputValue;

    document.getElementById('current-amount').innerText = newCurrentBalance;
    document.getElementById('feni-amount').innerText = newCurrentDonation;

     // add transaction history
     const title = document.getElementById('title-feni').innerText;
     const div = document.createElement('div');
     div.classList.add('shadow-xl', 'p-6', 'rounded-2xl', 'border', 'mb-5');
     div.innerHTML = `
         <p class="font-bold"> ${inputValue} Taka is ${title} </p>
     `
 
     document.getElementById('transaction-container').appendChild(div);
});

// Calculate Quota Donation
document.getElementById('btn-quota').addEventListener('click', function (event) {
    event.preventDefault();
    const inputValue = getInputValue('input-quota');
    const currentBalance = getInnerText('current-amount');
    const currentDonation = getInnerText('quota-amount');

    const newCurrentBalance = currentBalance - inputValue;
    const newCurrentDonation = currentDonation + inputValue;

    document.getElementById('current-amount').innerText = newCurrentBalance;
    document.getElementById('quota-amount').innerText = newCurrentDonation;

     // add transaction history
     const title = document.getElementById('title-quota').innerText;
     const div = document.createElement('div');
     div.classList.add('shadow-xl', 'p-6', 'rounded-2xl', 'border', 'mb-5');
     div.innerHTML = `
         <p class="font-bold"> ${inputValue} Taka is Donated For ${title} </p>
     `
 
     document.getElementById('transaction-container').appendChild(div);
});

