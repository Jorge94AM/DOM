console.log('String exercises');
/*
// Given a phone number
// search and return its owner's name
function whosPhoneNumber(phoneNumber) {
    let phoneBook = {
        Abel: 5802943,
        Laura: 9761405,
        Lisa: 5850628,
        Adilson: 9240912,
        Victor: 9519228
    }

    for (key in phoneBook) {
        // console.log(key, phoneBook[key]);
        const savedPhoneNumber = phoneBook[key];

        if (savedPhoneNumber == phoneNumber)
            return key;
    }
    return 'The phone number ' + phoneNumber + ' is not registered!';
}

// Given a name
// search and return its owner's phone number
// TODO: SIMPLIFY THIS FUNCTION
function giveMePhoneNumber(name) {
    let phoneBook = {
        Abel: 5802943,
        Laura: 9761405,
        Lisa: 5850628,
        Adilson: 9240912,
        Victor: 9519228
    }
    for (key in phoneBook) {
        // console.log(key, phoneBook[key]);
        const savedName = key;
        const savedPhoneNumber = phoneBook[key];

        if (savedName == name)
            return savedPhoneNumber;
    }
    return 'The name ' + name + ' is not registered!';

}

// Given a name
// search and return its owner's phone number
// TODO: SIMPLIFY THIS FUNCTION
function giveMePhoneNumberv2(name) {
    let phoneBook = {
        Abel: 5802943,
        Laura: 9761405,
        Lisa: 5850628,
        Adilson: 9240912,
        Victor: 9519228
    }
    //return phoneBook[name];
    if (phoneBook[name] == undefined) {
        return 'The name ' + name + ' is not registered!';
    }
    return phoneBook[name];
}

// Add a new contact
// return phone book with a new contact
// TODO: SIMPLIFY THIS FUNCTION
function AddPhoneNumber(name, number) {
    let phoneBook = {
        Abel: 5802943,
        Laura: 9761405,
        Lisa: 5850628,
        Adilson: 9240912,
        Victor: 9519228
    }
    //TO DO    
    phoneBook[name] = number;
    return phoneBook;
}

// Delete a contact
// return phone book
// TODO: SIMPLIFY THIS FUNCTION
function DeletePhoneNumber(name) {
    let phoneBook = {
        Abel: 5802943,
        Laura: 9761405,
        Lisa: 5850628,
        Adilson: 9240912,
        Victor: 9519228
    }
    //TO DO
    delete phoneBook[name];
    return phoneBook;
}*/


/*function main(name, number, operation) {

    if (operation == 1) {

    return giveMePhoneNumberv2(name);

    } else if (operation == 2) {
        
        return AddPhoneNumber(name, number);

    } else if (operation == 3) {
        
        return DeletePhoneNumber(name, number);
    }

}*/

/*var phoneBook = {
    Abel: 5802943,
    Laura: 9761405,
    Lisa: 5850628,
    Adilson: 9240912,
    Victor: 9519228
}

function main2(name, number, operation) {

    

    if (operation == 1) {
        return giveMePhoneNumberv2(name, phoneBook);

    } if (operation == 2) {

        phoneBook = AddPhoneNumber2(name, number, phoneBook);

    } if (operation == 3) {
        console.log(phoneBook);
        phoneBook = DeletePhoneNumber2(name, number, phoneBook);
    }
    return phoneBook;
}

function giveMePhoneNumberv2(name, phoneBook) {
    //return phoneBook[name];
    if (phoneBook[name] == undefined) {
        return 'The name ' + name + ' is not registered!';
    }
    return phoneBook[name];

}


function AddPhoneNumber2(name, number, phoneBook) {
    //TO DO    
    phoneBook[name] = number;
    return  phoneBook;
    
}

function DeletePhoneNumber2(name, number, phoneBook) {
    //TO DO
    delete phoneBook[name];
    return phoneBook;
}*/


function CharPerline(name) {

    for (let i in name) {
        console.log(name[i]);

    }
}


function character() {
    let name = 'Jorge';
    let count = 0;
    for (;
        count < name.length;
        count++)
        console.log(name[count])

}

function reverseString(name) {

    for (let i = name.length - 1; i >= 0; i--) {
        console.log(name[i]);
    }

}

function countVowel(str) {

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}


function getVowels(str) {
    var vowelsCount = 0;

    //turn the input into a string
    var string = str.toString();

    //loop through the string
    for (var i = 0; i <= string.length - 1; i++) {

        //if a vowel, add to vowel count
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}

function countVowels(name) {
    return name.match(/[aeiou]/gi).length;
}


const vowels = ["a", "e", "i", "o", "u"]

function countVowelsIterative(text) {
    let counter = 0

    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++
        }
    }

    console.log(`The text contains ${counter} vowel(s)`)

    return counter
}

//Verificar se segundo parametro é igual ao primeiro char do primeiro parametro

function Verify(Char1, char2) {

    for (i = 0; i < Char1.length; i++) {

        if (Char1[i] !== (char2[i])) {
            return false;

        } else {


        } return true;
    }
}

/*function startswith(string, search) {
 return string.startswith(search);
}*/



function findWithSubstring(Char1, char2) {

    var sub = Char1.substring(0, char2.length)

    if (char2 == sub) {
        return true;

    } else {

        return false;
    }
}

function Repeat(char1, times = 1) {

    let result = char1.repeat(times);

    console.log(result);

}

function repeat2(char, times = 1) {

    var str = '';
    for (var i = 0; i < times; i++) {

        str = str + char;
        console.log(str);
    }


}

function Remove(str1) {

    const noSpecialCharacters = str1.replace(/[^a-zA-Z0-9 ]/g, '');

    console.log(noSpecialCharacters);

}

function Divide(str, number = 1) {

    let word = str.split('', number)
    console.log(word);

}


function splitString(str, N = 1) {
    const arr = [];

    for (let i = 0; i < str.length; i += N) {
        arr.push(str.substring(i, i + N));
    }

    return arr;
}


function chunkString(msg, divide = 1) {
    const chunks = [];
    if (divide == 1) {
        chunks.push(msg);
        return chunks;

    }
    let part = '';
    for (let i = 0; i < msg.length; i++) {
        part = part + msg[i];
        if (part.length == divide) {
            chunks.push(part);
            part = '';
        }

    }
    chunks.push(part);
    return chunks;
}

function Divide2(word, Nu) {
    for (let i = 0; i < word.length; i += Nu) {
        if (Nu == null) {

            console.log(word)
        } else if (Nu > null) {
            console.log(word)
        }
    }

}

function Getdate(symbol) {

    let dt = new Date();
    let mon = dt.getMonth();
    let d = dt.getDay();
    let y = dt.getFullYear();
    let monthNameShort = dt.toLocaleString("en-US", { month: "short" });
    dt = d + symbol + monthNameShort + symbol + y;
    return dt;
}

function CompareDates(date1, date2) {

    let dt1 = new Date()
    let dt2 = new Date()

    if (dt1 > dt2) {
        console.log(dt1, 'is greater than ', dt2);

    } else if (dt1 < dt2) {
        console.log(dt1, ' is less than', dt2);

    } else {
        console.log('Dates are equals');
    }

}

function dateCompare(d1, d2) {
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    if (date1 > date2) {
        console.log(`Date1 > Date2`)
    } else if (date1 < date2) {
        console.log(`Date1 < Date2`)
    } else {
        console.log(`Date1 = Date2`)
    }
}


function addHours(Hours, date = new Date()) {
    let date2 = new Date(date.getTime());

    date2.setTime(date2.getTime() + Hours * 60 * 60 * 1000);

    return date2;
}

function isWeekDay() {

}

function is_weekend(date1) {
    var dt = new Date(date1);

    if (dt.getDay() == 0 || dt.getDay() == 6) {
        console.log(date1);
        return "Weekend";
    } else {
        console.log(date1);
        return "Week Day";
    }
}


function DB(date) {
    date = date.setDate(date.getDate() - 1)
    return new Date(date);
}


function minDate(dates) {
    let minDate = undefined;
    for (let i = 0; i < dates.length; i++) {
        if (i == 0) {
            minDate = dates[i];
        } else {
            if (minDate > dates[i]) {
                minDate = dates[i];
            }
        }
    }
    return minDate;
}

function maxDate(dates) {
    let maxDate = undefined;
    for (let i = 0; i < dates.length; i++) {
        if (i == 0) {
            maxDate = dates[i];
        } else {
            if (maxDate < dates[i]) {
                maxDate = dates[i];
            }
        }
    }
    return maxDate;
}



function LessDate(date1, date2, date3) {

    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const d3 = new Date(date3);


    if (date1 < date2 && date1 < date3) {
        return date1;
    } else if (date2 < date1 && date2 < date3) {
        return date2;
    } else {
        return date3;
    }


}

function GreaterDate(date1, date2, date3) {

    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const d3 = new Date(date3);


    if (date1 > date2 && date1 > date3) {
        return date1;
    } else if (date2 > date1 && date2 > date3) {
        return date2;
    } else {
        return date3;
    }


}

function DayofTheWeek(date) {

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(date);
    var dayName = days[d.getDay()];
    return "The day is";
}

function returnDay(day) {
    var dayOfWeek = ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
    for (var i = 0; i < day.length; i++) {
        dayOfWeek += day[i];
    }
    return dayOfWeek;
}

var x = 0;
function myFunction() {

    if (x == 0) {
        document.getElementById("head").innerHTML = "Hello!"
        x = 1;
    } else {
        document.getElementById('head').innerHTML = document.getElementsByTagName(header)
        x = 0;
    }
}

function date_Test() {

    let dt = new Date();
    let mon = dt.getMonth();
    let d = dt.getDay();
    let y = dt.getFullYear();
    let monthNameShort = dt.toLocaleString("en-US", { month: "short" });
    dt = d + "-" + monthNameShort + "-" + y;


    document.getElementById("data").innerHTML = dt;

}

function changeDiv(name) {

    document.getElementById("msg").innerHTML += name
}

function addname() {
    let msg = document.getElementById("text")

    msg.value = "Jorge";
}

function getnumber() {

    let nu = document.getElementById("numero").value

    document.getElementById("shownumber").innerHTML += nu;

}

function soma() {
    let valor1 = document.getElementById("valor1").value
    let valor2 = document.getElementById("valor2").value
    let _valor1 = parseInt(valor1), _valor2 = parseInt(valor2)
    document.getElementById("showsoma").innerHTML += _valor1 + _valor2;
}

function listcounter() {

    let list = document.createElement("div");

    list.innerHTML = "This is the list.";

    document.getElementById("list-counter").appendChild(list);

}

function greet() {
    let myPlist = document.querySelectorAll('#dom-lessons p')
    var text = '';

    myPlist.forEach(el => {
        text += el.textContent + '\n';
    })
    alert(text);
}

function concatAlert() {
    let myPList = document.querySelectorAll('#concat-alert p');
    let text = '';

    myPList.forEach(el => {
        text += el.textContent + '\n';
    })

    alert(text);
}

function replaceItem4() {
    let myPList = document.querySelectorAll('#replace-item-4 p');

    myPList.forEach(el => {

        if (el.textContent == 'My message 4') {
            el.textContent = 'My new message';
        }

    })
}

// function increment() {
//     let span = document.querySelector('#counter span');

//     let number = parseInt(span.textContent);
//     let total = number + 1;

//     span.textContent = total;
// }

function colorama(span) {
    if (span.textContent <= 5) {
        span.style.color = 'blue'
    } else {
        span.style.color = 'green'
    }
}

function increment() {
    let span = document.querySelector('#counter span');
    if (span.textContent < 10) {
        span.textContent = parseInt(span.textContent) + 1;
        colorama(span)
    }

}

function decrement() {
    let span = document.querySelector('#counter span');
    if (span.textContent >= 2) {
        span.textContent = parseInt(span.textContent) - 1;
        colorama(span)
    }

}

function reset() {
    let span = document.querySelector('#counter span');
    span.textContent = 1
}

function changeBoxColor() {
    let selectedColor = document.querySelector('#colors').value;
    document.querySelector('.coloring-box').style.backgroundColor = selectedColor;

}


let oMeuIntervalo;
function clockCounter() {

    oMeuIntervalo = setInterval(function () {

        console.log('a executar');

        let span = document.querySelector('#clock-counter span');
        let num = parseInt(span.textContent);
        span.textContent = num + 1;

    }, 1000);
}
function stop() {
    clearInterval(oMeuIntervalo);
}


function Calc() {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let _valor1 = parseInt(valor1), _valor2 = parseInt(valor2);

    let result = 0;

    if (document.getElementById("selector").value == 'sum') {
        result = _valor1 + _valor2;


    } else if (document.getElementById("selector").value == 'minus') {
        result = _valor1 - _valor2;

    } else if (document.getElementById("selector").value == 'multi') {
        result = _valor1 * _valor2;

    } else if (document.getElementById("selector").value == 'div') {

        result = _valor1 / _valor2;
    }
    document.getElementById("result").innerHTML = result;
}

function Lotto(){
    let arr = [12, 17, 24, 37, 38, 43];

    for(i = 0; i<arr.length;i++){


    }
}