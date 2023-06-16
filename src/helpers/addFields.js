export default function addFields ({handleCharacteristicNameChange, handleCharacteristicValueChange}) {
    const container = document.getElementById("inputsContainer");

    const label1 = document.createElement('label');
    label1.innerText = 'Назва характеристики';


    const input1 = document.createElement('input');
    input1.id = 'characteristicName';
    input1.type = 'text';
    input1.name = 'characteristicName[]';
    input1.placeholder = 'Назва характеристики';
    input1.onchange = handleCharacteristicNameChange;

    const label2 = document.createElement('label');
    label2.innerText = 'Характеристика';

    const input2 = document.createElement('input');
    input2.type = "text";
    input2.name = 'characteristicValue[]';
    input2.placeholder = 'Характеристика';
    input2.onchange = handleCharacteristicValueChange;

    container.appendChild(input1);
    container.appendChild(input2);

}