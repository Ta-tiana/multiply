module.exports = function multiply(first, second) {
        const m1 = first.split('').reverse().map(e => parseInt(e));
        const m2 = second.split('').reverse().map(e => parseInt(e));
        const parts = [];
        for (let i = 0; i < m1.length; i++) {
            const part = [0]; //сюда  складываем при умноджении последнее число вдухзначного числа и первое (перенесенное )
            // например 12: посл (остаток)2 идет в part[j=0],  первое 1(переходное) идет в part[j+1=1](в последствии
            // переходное число складывается со след результатом умножения и снова кладем остаток вместо переходного а переходное в след индекс)
            for (let j = 0; j < m2.length; j++) {// вначале part j =0
                const n = m1[i] * m2[j] + part[j]; // умнож и добавл пееренесенное(остаток) число (в первой итерац part[j]= 0)
                part[j] = n % 10; // part 0 =остаток от деления умножденных чисел(второе число двузнч числа)
                part[j + 1] = Math.floor(n / 10)// part 1 сюда кладем первое число двузн числа - переходное число
            }
            parts.push(new Array(i).fill(0).concat(part)) // создаем массив new Array(i),
            // который при след итерации добавл нули (в колич i) для сдвига разряда
        }
        let result = [];
        for (let i = 0; i < parts.length; i++) {
            result = sum(result, parts[i])
        }
        return result.reverse().join('').replace(/^[0]*/, '');


    function sum(arr1, arr2) {// здесь берется часть разряда parts[i] (по очереди) и сумма прошлых разрядов result
        // и склад с использ переходного числа, в начале резалт =0;
        const result = [];
        for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
            const n = (arr1[i] || 0) + (arr2[i] || 0) + (result[i] || 0);
            result[i] = n % 10;
            result[i + 1] = Math.floor(n / 10)
        }
        return result;
    }

};

