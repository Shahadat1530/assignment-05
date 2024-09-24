document.getElementById('btn-donation').addEventListener('click', function () {
    showSection('donation-section');
    showActive('btn-donation');
});

document.getElementById('btn-history').addEventListener('click', function () {
    showSection('history-section');
    showActive('btn-history');
});

// Calculate Noakhali Donation
document.getElementById('btn-noakhali').addEventListener('click', function () {
    
    const inputValue = getInputValue('input-noakhali');
    const currentBalance = getInnerText('current-amount');
    const currentDonation = getInnerText('noakhali-amount');

    const newCurrentBalance = currentBalance - inputValue;
    const newCurrentDonation = currentDonation + inputValue;

    document.getElementById('current-amount').innerText = newCurrentBalance;
    document.getElementById('noakhali-amount').innerText = newCurrentDonation;

});

// Calculate Feni Donation
document.getElementById('btn-feni').addEventListener('click', function () {

    const inputValue = getInputValue('input-feni');
    const currentBalance = getInnerText('current-amount');
    const currentDonation = getInnerText('feni-amount');

    const newCurrentBalance = currentBalance - inputValue;
    const newCurrentDonation = currentDonation + inputValue;

    document.getElementById('current-amount').innerText = newCurrentBalance;
    document.getElementById('feni-amount').innerText = newCurrentDonation;
});

// Calculate Quota Donation
document.getElementById('btn-quota').addEventListener('click', function () {

    const inputValue = getInputValue('input-quota');
    const currentBalance = getInnerText('current-amount');
    const currentDonation = getInnerText('quota-amount');

    const newCurrentBalance = currentBalance - inputValue;
    const newCurrentDonation = currentDonation + inputValue;

    document.getElementById('current-amount').innerText = newCurrentBalance;
    document.getElementById('quota-amount').innerText = newCurrentDonation;
});