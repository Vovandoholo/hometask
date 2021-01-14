
//1.написать функию, которая принимает два параметра (оба массивы), и возвращает true /false  если их длинна одинаковая
function isArrayLengthEqual(a,b) {

    return a.length === b.length;
}
console.log(isArrayLengthEqual(['shoes', 'shirts', 'socks', 'sweaters'], ['sex', 'drugs', 'rock&roll', ]))

//2.Написать функцию arrayHasElement которая принимает два параметра массив и элемент который ищем в массиве и вовращает true/false
//если в массиве есть элемент(строка, число, boolean.)

function arrayHasElement (a, obj) {
    for (let i = 0; i < a.length; i++) {//индекс равен 0;до тех пор, пока индекс меньше длинны массива выполняй условие; увеличивать индекс на 1
        if (a[i] === obj) {// тело цикла называется итерация, итеративный подход.
            return true;
        }
    }
    return false;
}
console.log(arrayHasElement(['shoes', 'true', 4, ], 'shoes'));

//3.Написать функцию getLetterAmountInString которая принимает два парамметра, 1ый строка, 2ой буква, и возвращает количество раз,
//сколько буква встретилась в этой строке

function getLetterAmountInString(a,b){
    let string = 'looking fot a letter';
    let letter = (string.match(/o/g) || []).length;
    console.log(letter);
}
console.log(getLetterAmountInString('looking fot a letter','o'));





//4.Написать функцию getBiggestNumber которая принимает два параметра. 1-е - число, 2-е - число, и возвращает большее из чисел

function getBiggestNumber(a,b) {

    if (a > b) {
        return a
    } else {
        return b
    }
}
console.log(getBiggestNumber(17, 23));

//5.Написать функцию createMultiplier которая возвращает функцию, которая принимает 1-н параметр - число, и возвращает число умноженное
//на само себя
const  createMultiplier = () => {
    const result = (a,b) => a * b;
    return result;
};
const sum = createMultiplier();
console.log(sum (2,5));

//6.Написать функцию isFunctionNamesEqual которая принимает 2 параметра, 1-ый функция и 2-ой функция, и возвращает true/false
//если имена у функций одинаковые

function isFunctionNameEqual(func1,func2) {
 let a = func1.name;
 let b = func2.name;
 return a === b;

}

console.log(isFunctionNameEqual(substituteElement,arraysHasElement));

//7.Написать функцию substituteElement которая принимает 3 параметра, 1-й - массив, 2-й - элемент, который заменить, 3-й - элемент, на
//на который заменить

function substituteElement(arr,el1,el2) {


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === el1) {
            arr[i] = el2;
        }
    }
    return arr;
}
console.log(substituteElement(['pants', 'shirts', 'socks', 'sweaters'],'pants','converse'));


//8.Написать функцию arraysHasElement** которая принимает 3 параметра, массив, массив и элемент
// и возвращает true/false если их оба массива имеют этот элемент.


function arraysHasElement(arr1, arr2, el) {
    let firstArrayHasThisElement = false;
    let secondArrayHasThisElement = false;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === el ) {
            firstArrayHasThisElement = true;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] === el ){
            secondArrayHasThisElement = true;
        }
    }

    return firstArrayHasThisElement === true && secondArrayHasThisElement === true;
}
console.log(arraysHasElement([1, 12, 24, 'papa', 'mama', true],[21, 11, 'paps', 24, 'mams', false],24))