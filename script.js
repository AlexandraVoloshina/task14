var arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Найти сумму и количество положительных элементов
var k_positive_element = 0;
var sum_positive_element = 0;
for (var i = 0; i < arr.length; i ++){
    if (arr[i] > 0) {
        sum_positive_element += arr[i];
        k_positive_element++;
    }
}
console.log("Сумма положительных элементов: " + sum_positive_element);
console.log("Количество положительных элементов: " + k_positive_element);


// Определить количество отрицательных элементов.
var k_negative_element = 0;
for (var i = 0; i < arr.length; i ++){
    if (arr[i] < 0) {
        k_negative_element++;
    }
}
console.log("Количество отрицательных элементов: " + k_negative_element);


// Найти количество нечетных положительных элементов.
var k_odd_positive = 0;
for (var i = 0; i < arr.length; i ++){
    if (arr[i] > 0 && arr[i] % 2 === 1) {
        k_odd_positive++;
    }
}
console.log("Количество нечетных положительных элементов: " + k_odd_positive);


// Найти количество четных положительных элементов.
var k_even_positive = 0;
for (var i = 0; i < arr.length; i ++){
    if (arr[i] > 0 && arr[i] % 2 === 0) {
        k_even_positive++;
    }
}
console.log("Количество четных положительных элементов: " + k_even_positive);


// Найти сумму четных положительных элементов.
var sum_even_positive = 0;
for (var i = 0; i < arr.length; i ++){
    if (arr[i] > 0 && arr[i] % 2 === 0) {
        sum_even_positive += arr[i];
    }
}
console.log("Сумма четных положительных элементов: " + sum_even_positive);


// Найти сумму нечетных положительных элементов.
var sum_odd_positive = 0;
for (var i = 0; i < arr.length; i ++){
    if (arr[i] > 0 && arr[i] % 2 === 1) {
        sum_odd_positive += arr[i];
    }
}
console.log("Сумма нечетных положительных элементов: " + sum_odd_positive);

// Найти определить количество элементов, равных 4.
var k_element_4 = 0;
for (var i = 0; i < arr.length; i ++){
    if (arr[i] === 4) {
        k_element_4 ++;
    }
}
console.log("Количество элементов равных 4: " + k_element_4);