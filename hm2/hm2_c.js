// Task: Написать функцию, которая принимает на вход массив чисел, 
// а на выходе выдает новый массив, который содержит эти же числа 
// в сокращенном виде  (1000 = 1К, 1000000 = 1М, 1000000000 = 1В), 
// округленные до двух чисел после запятой по правилам округления 
// (числа <=4 округляются до меньшего, числа >4 округляются до бОльшего)

// Пример: 
// Исходный массив: 
// [111896, 9999, 9985, 1024, 999999, 1000100, 60044943]
// Результат выполнения: 
// yourFunc([111896, 9999, 9985, 1024, 999999, 1000100, 60044943]) 
// [111,90K, 10K, 9,99K 1,02K, 1M, 1M, 60,05M]

let test1 = [111896, 9999, 9985, 1024, 999999, 1000100, 60044943, 1000000000];

function numFormatter(arr) {
    const res = [];

    for (let num of arr) {
        switch(true) {
            case num > 999 && num < 999999: 
                res.push(round(num, 10**3) + 'K');
                break;
            case num >= 999999 && num < 999999999: 
                res.push(round(num, 10**6) + 'M');
                break;
            case num >= 999999999: 
                res.push(round(num, 10**9) + 'B');
                break;
            default:
                res.push(num);
                break;
        }
    }

    return res;
}

function round(num, del) {
    let res = +(Math.round((num/del)+0.001+'e'+2)+'e-'+2);
    return res;
}

console.log(numFormatter(test1));