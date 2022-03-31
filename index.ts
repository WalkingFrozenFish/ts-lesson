// Алиасы, переменные хранящие типы
type AliasType = string | number;

// Мы можем указывать какой тип будет у переменной
let strOrNum1: string = "1";
let strOrNum2: number = 1;

// Присваивание значения отличающегося от типа переменной, выдаст ошибку
let strOrNum3: string = 124;
let strOrNum4: number = "qwer";

// Что бы не прописывать типы каждый раз, можно использовать алиасы
let strOrNum5: AliasType = "132f";
let strOrNum6: AliasType = "1asdf";

// Можно не указывать явно тип переменной
let someNumber = 123
// Переприсваинивание значения переменной значения другого типа, приведет к ошибке
someNumber = "qwe";

// Конкатенация вызовет ошибку
let v1 = "123";
let v2 = 123;
let v3: number = v1 + v2;


// Запись массива с определенным типом данных для элементов
let someArr1: number[] = [1, 2, 3];
let someArr2: string[] = ["1", "2", "3"];

// Можно использовать алиасы
type ArrAlias = number | string;
let someArr3: ArrAlias[] = ["Text", 1, "asd123", 3];

// Можно сделать массив определенной длины, и перечисляем элементы для определенных типов
let someArr4: [number, string] = [1, "2"];
let someArr5: [number, string] = [1, 1];

// Будет ошибка, так как массив состоит только из двух элементов
console.log(someArr4[10]);

// Для объектов можно так же использовать алиасы
// Для того что бы сделать поле опциональным, используется знак вопроса ?
// Без знака вопроса, поле будет обязательным
type AliasObject = {
    name: string,
    birthDay: number | string,
    male?: string,
}

let someObj1: AliasObject = {
    name: "Some name",
    birthDay: 17,
}


// Перечисляемый тип, через запятую перечисляем методы
// Его можно передать как тип, и использовать как объект со свойствами
enum MethodEnum {
    add,
    sub,
    div,
}

// Указываем методы и их тип
// После списка аргументов указываем тип данных, которые возвращает функция
function calculate(method: MethodEnum, first: number, second: number): number {
    switch (method) {
        case MethodEnum.add: return first + second;
        case MethodEnum.sub: return first - second;
        case MethodEnum.div: return first / second;
    }
}

calculate(MethodEnum.add, 3, 5);


// Можно присвоить тип самой функции через алиас
type FunctionAlias = () => number;

const someFunction1: FunctionAlias = () => 1234;
const someFunction2: FunctionAlias = () => "asd";