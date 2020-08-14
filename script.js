const addButton = document.querySelector('.add');
const plus = document.querySelector('.plus');
let optionList = document.querySelector('.option-list');
const sortButton = document.querySelector('.sort');
const arrow = document.querySelector('.sort__arrow');
const triangle = document.querySelector('.sort__triangle');


// наведение мыши на фиолетовую кнопку
addButton.addEventListener('mouseover', () => {
    addButton.style.backgroundColor = '#9953F1';
    plus.style.backgroundColor = '#AA68FE';
});

addButton.addEventListener('mouseout', () => {
    addButton.style.backgroundColor = '#833AE0';
    plus.style.backgroundColor = '#9953F1';
});


// добавление и удаление задач
addButton.addEventListener('click', () => {
    let optionElement = document.querySelector('.option').cloneNode(true);
    optionList.append(optionElement);

    let deleteButtons = document.querySelectorAll('.option__delete');
    let optionElements = document.querySelectorAll('.option');
     
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            optionElements[i].remove();
        });
    }

    let arrTasks = [];
    let inputs = document.querySelectorAll('.option__list-item');
    inputs.forEach((inputItem) => {
        inputItem.addEventListener('change', (event) => {
                arrTasks.push(event.target.value);   
        });
        
    });

    // сортировка странно работает, опять хрень со стрелкой и добавлением доп.элементов

    sortButton.addEventListener('click', () => {
        if (arrow.style.flexDirection === 'column') {
            arrow.style.flexDirection = 'column-reverse';
            triangle.style.transform = 'rotate(-180deg)';
            triangle.style.marginBottom = '-2px';
            triangle.style.marginLeft = '1px';
            arrTasks.sort();
            console.log(arrTasks);
        } else {
            arrow.style.flexDirection = 'column';
            triangle.style.transform = 'none';
            triangle.style.marginBottom = '0';
            triangle.style.marginLeft = '0';
            arrTasks.reverse();
            console.log(arrTasks);
        }
    });
});


// drag'n'drop
optionList.addEventListener('dragstart', (event) => {
    event.target.style.backgroundColor = '#FFDC40';
    event.target.style.mixBlendMode = 'multiply';
    event.target.classList.add('selected');
});
optionList.addEventListener('drag', (event) => {
    event.target.style.backgroundColor = '#E4E4E4';
});
optionList.addEventListener('dragend', (event) => {
    event.target.style.backgroundColor = 'white';
    event.target.classList.remove('selected');
});

optionList.addEventListener('dragover', (event) => {
    event.preventDefault();

    let activeElement = optionList.querySelector('.selected');
    let currentElement = event.target;

    let isMoveable = activeElement !== currentElement &&
    currentElement.classList.contains('option');

    if (!isMoveable) {
        return;
    }

    let nextElement;
    if (currentElement === activeElement.nextElementSibling) {
        nextElement = currentElement.nextElementSibling;
    } else {
        nextElement = currentElement;
    }
    optionList.insertBefore(activeElement, nextElement);
});





        




