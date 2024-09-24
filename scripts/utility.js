function showSection(id) {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
};

function showActive(id) {
    document.getElementById('btn-donation').classList.remove('bg-[#B4F461]')
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]')

    document.getElementById(id).classList.add('bg-[#B4F461]')
}