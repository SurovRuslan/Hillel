
var buttonCreate = document.getElementById('createButton');
buttonCreate.addEventListener('click', createTable);
function createTable() {
    var rows = document.getElementById('rows').value;
    var colums = document.getElementById('colums').value;
    var tableBlock = document.getElementById('tableBlock');
    // console.log(rows, colums);
    var table = document.createElement('table');
    tableBlock.appendChild(table);
    for (let i = 1; i<= rows; i++){
        let createRows = document.createElement('tr');
        table.appendChild(createRows);
            for (let y = 1; y <= colums; y++){
                let createColums = document.createElement('td');
                createRows.appendChild(createColums);
        }
    }
};

