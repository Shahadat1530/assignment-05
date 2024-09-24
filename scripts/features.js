document.getElementById('btn-donation').addEventListener('click', function(){
    showSection('donation-section');
});

document.getElementById('btn-history').addEventListener('click', function(){
    showSection('history-section');
});

document.getElementById('btn-donation').addEventListener('click', function(){
    showActive('btn-donation');
});

document.getElementById('btn-history').addEventListener('click', function(){
    showActive('btn-history');
})
