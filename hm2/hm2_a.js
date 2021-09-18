// Task: Написать функцию, которая принимает на вход 2 массива. 
// На выходе функция должна выдать элемент, который в обоих 
// массивах повторялся чаще всего
// 
// Пример: 
// Исходные массивы: 
// [1, 2, 3, 3, 'a', 'test'], ['test', 2, 7,  'a', 'a']
// Результат выполнения: 
// yourFunc([1, 2, 3, 3, 'a', 'test'], ['test', 2, 7,  'a', 'a']) // 'a'

const test1 = [1,2,3,3,'a','test'];
const test2 = ['test',2,7,'a','a'];

const mostRepeated = (arr1, arr2) => {
    let repeat = [];

    //find repeated items
    for (let i of arr1) {
        for (let j of arr2) {
            if (i === j) repeat.push(i);
        }
    }

    //looking for most repeated item
    while (repeat.length > 1) {
        repeat = repeat.filter((item, index) => index !== repeat.indexOf(item));
    }

    return repeat[0];    
}

mostRepeated(test1, test2);