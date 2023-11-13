let btnAdd = document.querySelector('button4');
let table = document.querySelector('table');

let koostisosaInput = document.querySelector('#koostisosa');
let kogusInput = document.querySelector('#kogus');
let ühikInput = document.querySelector('#ühik');

btnAdd.addEventListener('click', () => {
    let koostisosa = koostisosaInput.value;
    let kogus = kogusInput.value;
    let ühik = ühikInput.value;

    let teplate = 
                <tr>
                    <td>${koostisosa}</td>
                    <td>${kogus}</td>
                    <td>${ühik}</td>
                </tr>;
    table.innerHTML += template;
})
