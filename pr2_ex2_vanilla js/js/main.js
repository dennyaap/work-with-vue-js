const tabContainer = document.querySelector('.tab');

const headerItems = document.querySelectorAll('.tab__header-item');
const bodyItems = document.querySelectorAll('.tab__body-item');

headerItems.forEach( (item) => {
    item.addEventListener('click', changeTab);
});

let currentTab = '';

function changeTab(e){
    removeActive(headerItems, bodyItems);

    currentTab = e.currentTarget;
    currentTab.classList.add('active');

    bodyItems.forEach( (item) => {
        if(item.id == currentTab.dataset.target){
            item.classList.add('active');
        }
    });

}

function removeActive(headerItems, bodyItems){
    headerItems.forEach( (item) => {
        item.classList.remove('active');
    });

    bodyItems.forEach( (item) => {
        item.classList.remove('active');
    });
}