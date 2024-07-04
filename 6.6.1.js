function isPal(str) {
    let newstr; //str
    let newstrarr; //массив букв из строки
    let palidr; //палиндром

    //проверяем, что передана строка
    if (typeof str === "string") {
        newstr = str.toLowerCase(); //приводим все к прописным буквам
    } else {
        newstr = str.toString.toLowerCase(); //приводим к строковому формату
    }



    newstrarr = newstr.split(""); //строку на массив
    newstrarr.reverse(); //переворачиваем 

    palidr = newstrarr.join("").replace(/\s+/g, ""); //соединяем перевернутый массив букв в единую строку, убрав все пробелы

    //проверяем является ли слово палиндромом
    if (palidr === newstr) {
        console.log(`Слово ${str} является палиндромом`);
    } else {
        console.log(`Слово ${str} не является палиндромом`);
    }
}

isPal("Довод");
isPal("Сантимент");
