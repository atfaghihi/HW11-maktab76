let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');


let employees = [
    { name: 'James', age: 9, country: 'United States' },
    { name: 'Rony', age: 31, country: 'United Kingdom' },
    { name: 'Peter', age: 58, country: 'Canada' },
    { name: 'Marks', age: 20, country: 'Spain' }
]

let headers = ['Name', 'Age', 'Country'];

btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
        header.style.paddingRight = '30px';

    });

    table.appendChild(headerRow);

    employees.forEach(emp => {
        let row = document.createElement('tr');

        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
            cell.style.paddingRight = '10px';

            if (emp.age < 10) {
                row.style.background = 'yellow';
            } else if ((emp.age >= 10) && (emp.age < 40)) {
                row.style.background = 'green';
            } else if ((emp.age >= 40) && (emp.age < 80)) {
                row.style.background = 'red';
            } else if (emp.age >= 80) {
                row.style.background = 'blue';
            }

        })

        table.appendChild(row);
    });

    myTable.appendChild(table);

    table.style.margin = '200px';
    table.style.width = '300px';
    table.style.height = '300px';
    table.setAttribute('border', "2");
});
