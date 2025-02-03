function Task1()
{
    let str = prompt('Введите строку').toLowerCase()
    console.log((str == str.split('').reverse().join('')) ? "YES" : "NO")
}

function Task2()
{
    let counter = 0
    let N = +prompt('Введите число строк')
    let text = ""
    for (let i = 0; i < N; i++)
    {
        str = prompt('Введите строку')
        text += (str + " ")
    }

    let words = text.split(" ");

    for (let word of words)
    {   
        if (word == "зайка") counter++;
    }

    console.log(counter)
}

function Task3()
{
    let input = prompt('Введите два числа')
    let nums = input.split(' ')
    console.log(parseInt(nums[0]) + parseInt(nums[1]))
}

function Task4()
{
    let N = +prompt('Введите количество чисел')
    let nums = []
    for (let i = 0; i < N; i++)
    {
        let num = +prompt('Введите число')
        nums.push(num)
    }
    let P = +prompt('Введите степень')

    for (let i = 0; i < N; i++)
    {
        console.log(Math.pow(nums[i], P))
    }
}
