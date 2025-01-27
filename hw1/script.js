function Task1()
{
    while (true)
    {
        a = prompt('Зажги ёлку, скажи "Три!":');

        if (a == 'Три!')
        {
            console.log('Ель сгорела!');
            break;
        }
        else 
        {
            console.log('Режим ожидания...');
        }
    }
}

function Task2()
{
    a = +prompt('Первое число:');
    b = +prompt('Второе число:');

    let row = "";

    for (let i = a; i <= b; i++)
    {
        row += (`${i} `);
    }

    console.log(row);
}

function Task3()
{
    let products = [];
    let sum = 0;

    while(true)
    {
        price = +prompt('Для окончания списка введите "0"\nВведите цену товара:')
        if (price == "0") break;
        products.push(price);
    }

    products.forEach(Sale)

    function Sale(item, index, arr)
    {
        if (item >= 500) arr[index] *= 0.9;
        sum += arr[index];
    }

    console.log(sum)
}

function Task4()
{
    info = prompt('Весьма полезная информация:');
    N = +prompt('Количество повторений, необходимое для закрепления');
    for (let i = 0; i < N; i++)
    {
        console.log(info)
    }
}

function Task5()
{
    let a;
    while(true)
    {
        a = +prompt('Введите неотрицательное число:')
        if (a >= 0) break;
        else console.log('Число меньше нуля!');
    }

    let factorial = 1;

    if (a != 0)
    {
        for (let i = 1; i <= a; i++)
        {
            factorial *= i;
        }
    }

    console.log(factorial);
}

function Task6()
{
    let a;
    while(true)
    {
        a = +prompt('Введите натуральное число:')
        if (a >= 0) break;
        else console.log('Число меньше нуля!');
    }

    let result = 'YES';

    if (a == 0 || a == 1) result = 'NO';
    else
    {
        for (let i = 2; i < a; i++)
        {
            if (a % i == 0)
            {
                result ='NO';
                break;
            }
        }
    }

    console.log(result);
}

function Task7()
{
    let a;
    while(true)
    {
        a = +prompt('Введите натуральное число для очистки от чётных чисел 💀')
        if (a >= 0) break;
        else console.log('Число меньше нуля!');
    }

    let result = '';

    let digits = Array.from(a.toString(), Number);
    digits.forEach(CleanOut)
    
    function CleanOut(item)
    {
        if (item % 2 != 0) result += item.toString();
    }

    console.log(parseInt(result));
}