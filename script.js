const addButton = document.querySelector('.add');
const plus = document.querySelector('.plus');
let optionList = document.querySelector('.option-list');
const sortButton = document.querySelector('.sort');
const arrow = document.querySelector('.sort__arrow');
const triangle = document.querySelector('.sort__triangle');
let option = document.querySelector('.option');
let deleteButton = document.querySelector('.option__delete');
let inputData = document.querySelector('.option__list-item');


// наведение мыши на фиолетовую кнопку
addButton.addEventListener('mouseover', () => {
    addButton.style.backgroundColor = '#9953F1';
    plus.style.backgroundColor = '#AA68FE';
});

addButton.addEventListener('mouseout', () => {
    addButton.style.backgroundColor = '#833AE0';
    plus.style.backgroundColor = '#9953F1';
});


// функция для удаления задач
function removeElements(par) {
    let optionElements = document.querySelectorAll('.option');
    if (optionElements.length > 1) {
        par.remove();
    }
}


// удаление для 1ой задачи
deleteButton.addEventListener('click', () => {
    removeElements(option);
})


// добавление и удаление новых задач
addButton.addEventListener('click', () => {

    let newElement = document.createElement('div');
    newElement.innerHTML = option.innerHTML;
    newElement.classList.add('option');
    newElement.draggable = 'true';
    optionList.append(newElement);

    let deleteButton = newElement.querySelector('.option__delete');
    deleteButton.addEventListener('click', () => {
        removeElements(newElement);
    });
});


// сортировка
sortButton.addEventListener('click', () => {
    let arrTasks = [];
    let inputs = document.querySelectorAll('.option__list-item');
    for (let i = 0; i < inputs.length; i++) {
        arrTasks.push(inputs[i].value);
    }
    if (!arrow.style.flexDirection || arrow.style.flexDirection === 'column') {
        arrow.style.flexDirection = 'column-reverse';
        triangle.style.transform = 'rotate(-180deg)';
        triangle.style.marginBottom = '-2px';
        triangle.style.marginLeft = '1px';
    
        arrTasks.sort((a, b) => {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });
        for (let j = 0; j < arrTasks.length; j++) {
            inputs[j].value = arrTasks[j];
        }
    } else {
        arrow.style.flexDirection = 'column';
        triangle.style.transform = 'none';
        triangle.style.marginBottom = '0';
        triangle.style.marginLeft = '0';
        
        arrTasks.sort((a, b) => {
            if (a < b) {
                return 1;
            }
            if (a > b) {
                return -1;
            }
            return 0;
        });
        for (let j = 0; j < arrTasks.length; j++) {
            inputs[j].value = arrTasks[j];
        }
    }
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

