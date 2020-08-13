const addButton = document.querySelector('.add');
const plus = document.querySelector('.plus');
let optionList = document.querySelector('.option-list');
const sortButton = document.querySelector('.sort');
const arrow = document.querySelector('.sort__arrow');
const triangle = document.querySelector('.sort__triangle');


addButton.addEventListener('mouseover', () => {
    addButton.style.backgroundColor = '#9953F1';
    plus.style.backgroundColor = '#AA68FE';
});

addButton.addEventListener('mouseout', () => {
    addButton.style.backgroundColor = '#833AE0';
    plus.style.backgroundColor = '#9953F1';
});


addButton.addEventListener('click', () => {
    let optionElement = document.querySelector('.option').cloneNode(true);
    optionList.append(optionElement);

    let deleteButtons = document.querySelectorAll('.option__delete');
    let optionElements = document.querySelectorAll('.option');
     
    for (let i = 0; i < deleteButtons.length; i++) {
        if (optionElements.length > 1) {
            deleteButtons[i].addEventListener('click', () => {
                optionElements[i].remove();
                console.log(optionElements);
            });
        }
        
    }
    
});


sortButton.addEventListener('click', () => {
    if (arrow.style.flexDirection === 'column') {
        arrow.style.flexDirection = 'column-reverse';
        triangle.style.transform = 'rotate(-180deg)';
        triangle.style.marginBottom = '-2px';
        triangle.style.marginLeft = '1px';
    } else {
        arrow.style.flexDirection = 'column';
        triangle.style.transform = 'none';
        triangle.style.marginBottom = '0';
        triangle.style.marginLeft = '0';
    }
})







        




