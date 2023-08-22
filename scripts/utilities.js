
//get input  value
function inputFieldValue(id){
    const inputField = document.getElementById(id);
    const inputFieldValueString = inputField.value;
    const inputFieldValueStringToNumber = parseFloat(inputFieldValueString);
    return inputFieldValueStringToNumber
}
function clear (id, id2){
    document.getElementById(id).value = '';
    document.getElementById(id2).value = '';
};
// input checker 
// function inputChecker(morshed, morshed2){
//     console.log(morshed, morshed2);
//     if(isNaN(morshed) || isNaN(morshed2) || morshed < 0 || morshed2 < 0) {
//         alert('Not a number');
//     } 
//     // else if(value1 < 0 || value2 < 0){
//     //     alert('sdhg'); 
//     //     return 
//     // }
// };
// set element text
function setAreaElementInnerText (id, value, value2){
    if(isNaN(value) || isNaN(value2) || value < 0 || value2 < 0) {
        alert('Not a number');
        return
    } 
    
    const areaElement = document.getElementById(id);
    areaElement.innerText = value * value2;
};

function addCalculationToEntry(areaType, area){
    const entryField = document.getElementById('calculaton-entry');
    const count = entryField.childElementCount;
    const  p = document.createElement('p');
    p.innerHTML = `
      ${count + 1}.  ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-accent">Convert</button>
    `
    p.classList.add('my-4')
    entryField.appendChild(p);
}
