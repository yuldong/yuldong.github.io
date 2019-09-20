function deactivateSelect(select) {
    if (!select.classList.contains('active')) return;

    var optList = select.querySelector('.optList');

    optList.classList.add('hidden');

    select.classList.remove('active');
}

function activeSelect(select, selectList)  {
    if (select.classList.contains('active')) return;

    selectList.forEach(deactivateSelect);
}

function toggleOptList(select) {
    var optList = select.querySelector(".optList");
    optList.classList.toggle('hidden');
}