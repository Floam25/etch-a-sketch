const main = document.querySelector('.main');
const genBtn = document.querySelector('.gen-btn');
const sizeInput = document.querySelector('.size-input');
const clearBtn = document.querySelector('.clear-btn');

let curGridSize = 10;

function genTable() {
    const table = document.createElement('div');
    table.classList.add('table');
    table.setAttribute("style", "border-top: solid black 1px; border-left: solid black 1px; display: flex; flex-wrap: wrap; width: 500px;");
    let sideLenght = 499 / curGridSize;
    for (let i = 0; i < curGridSize * curGridSize; i++) {
        const block = document.createElement('div');
        block.setAttribute("style", `border-bottom: solid black 1px; border-right: solid black 1px; width: ${sideLenght}px; height: ${sideLenght}px;`);
        block.addEventListener('mouseenter', 
            function(e) {
                if (e.buttons === 1) {
                    block.style.backgroundColor = 'black';
                }
            }
        );
        
        table.appendChild(block);
    }
    console.log(table);
    main.appendChild(table);
}

function clearTable() {
    const tb = document.querySelector('.table');
    if (tb) {
        main.removeChild(tb);
    }
}


genBtn.addEventListener('click', 
    function() {
        let sizeNeed = parseInt(sizeInput.value, 10);

        if (sizeNeed > 0 && sizeNeed <= 64) {
            curGridSize = sizeNeed;
            clearTable();
            genTable();
        }

    }
);

clearBtn.addEventListener('click', 
    function() {
        clearTable();
        genTable();
    }
);


genTable();