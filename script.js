let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let underscoreMinus = document.querySelector("#minus-underscore");
let plusEquals = document.querySelector("#plus-equal");
let backspace = document.querySelector("#backspace");
let keyOne = document.querySelector("#key_one");
let keyTwo = document.querySelector("#key_two");
let keyThree = document.querySelector("#key_three");
let keyFour = document.querySelector("#key_four");
let keyFive = document.querySelector("#key_five");
let keySix = document.querySelector("#key_six");
let keySeven = document.querySelector("#key_seven");
let keyEight = document.querySelector("#key_eight");
let keyNine = document.querySelector("#key_nine");
let keyTen = document.querySelector("#key_ten");
let keyEleven = document.querySelector("#key_eleven");
let keyTwelve = document.querySelector("#key_twelve");
let keyThirteen = document.querySelector("#key_thirteen");
let keyFifteen = document.querySelector("#key_fifteen");
let keySixteen = document.querySelector("#key_sixteen");
let keySeventeen = document.querySelector("#key_seventeen");
let keyEighteen = document.querySelector("#key_eighteen");
let keyNineteen = document.querySelector("#key_ninteen");
let keyTwenty = document.querySelector("#key_twenty");
let keyTwentyone = document.querySelector("#key_twentyone");
let keyTwentytwo = document.querySelector("#key_twentytwo");
let keyTwentythree = document.querySelector("#key_twentythree");
let keyTwentyfour = document.querySelector("#key_twentyfour");
let keyTwentyfive = document.querySelector("#key_twentyfive");
let keyTwentysix = document.querySelector("#key_twentysix");
let keyTwentyeight = document.querySelector("#key_twentyeight");
let keyTwentynine = document.querySelector("#key_twentynine");
let keyThirty = document.querySelector("#key_thirty");
let keyThirtyone = document.querySelector("#key_thirtyone");
let keyThirtytwo = document.querySelector("#key_thirtytwo");
let keyThirtythree = document.querySelector("#key_thirtythree");
let keyThirtyfour = document.querySelector("#key_thirtyfour");
let keyThirtyfive = document.querySelector("#key_thirtyfive");
let keyThirtysix = document.querySelector("#key_thirtysix");
let keyThirtyseven = document.querySelector("#key_thirtyseven");
let keyThirtyeight = document.querySelector("#key_thirtyeight");
let keySpacebar = document.querySelector("#spacebar");

let b = document.querySelector("h1");

one.addEventListener("click", function(){

    b.innerHTML += "1";
});
two.addEventListener("click", function(){

    b.innerHTML += "2";
});
three.addEventListener("click",function(){

    b.innerHTML += "3";
});
four.addEventListener("click",function(){

    b.innerHTML += "4";
});
five.addEventListener("click",function(){

    b.innerHTML += "5";
});
six.addEventListener("click",function(){

    b.innerHTML += "6";
});
seven.addEventListener("click",function(){

    b.innerHTML += "7";
});
eight.addEventListener("click",function(){

    b.innerHTML += "8";
});
nine.addEventListener("click",function(){

    b.innerHTML += "9";
});
zero.addEventListener("click",function(){

    b.innerHTML += "0";
});

underscoreMinus.addEventListener("click",function(){

    b.innerHTML += "-";
});

plusEquals.addEventListener("click",function(){

    b.innerHTML += "+";
});

 backspace.addEventListener("click",function(){

    if (b.innerHTML.length > 0) {
        b.innerHTML = b.innerHTML.slice(0, -1)}
});
keyOne.addEventListener("click",function(){

    b.innerHTML += "Q";
});
keyTwo.addEventListener("click",function(){

    b.innerHTML += "W";
});
keyThree.addEventListener("click",function(){

    b.innerHTML += "E";
});
keyFour.addEventListener("click",function(){

    b.innerHTML += "R";
});
keyFive.addEventListener("click",function(){

    b.innerHTML += "T";
});
keySix.addEventListener("click",function(){

    b.innerHTML += "Y";
});
keySeven.addEventListener("click",function(){

    b.innerHTML += "U";
});
keyEight.addEventListener("click",function(){

    b.innerHTML += "I";
});
keyNine.addEventListener("click",function(){

    b.innerHTML += "O";
});
keyTen.addEventListener("click",function(){

    b.innerHTML += "P";
});
keyEleven.addEventListener("click",function(){

    b.innerHTML += "[";
});
keyTwelve.addEventListener("click",function(){

    b.innerHTML += "]";
});
keyThirteen.addEventListener("click",function(){

    b.innerHTML += "|";
});
keyFifteen.addEventListener("click",function(){

    b.innerHTML += "A";
});
keySixteen.addEventListener("click",function(){

    b.innerHTML += "S";
});
keySeventeen.addEventListener("click",function(){

    b.innerHTML += "D";
});
keyEighteen.addEventListener("click",function(){

    b.innerHTML += "F";
});
keyNineteen.addEventListener("click",function(){

    b.innerHTML += "G";
});
keyTwenty.addEventListener("click",function(){

    b.innerHTML += "H";
});
keyTwentyone.addEventListener("click",function(){

    b.innerHTML += "J";
});
keyTwentytwo.addEventListener("click",function(){

    b.innerHTML += "K";
});
keyTwentythree.addEventListener("click",function(){

    b.innerHTML += "L";
});
keyTwentyfour.addEventListener("click",function(){

    b.innerHTML += ":";
});
keyTwentyfive.addEventListener("click",function(){

    b.innerHTML += "'";
});
keyTwentysix.addEventListener("click",function(){

    b.innerHTML += "<br>";
});
keyTwentyeight.addEventListener("click",function(){

    b.innerHTML += "Z";
});
keyTwentynine.addEventListener("click",function(){

    b.innerHTML += "X";
});
keyThirty.addEventListener("click",function(){

    b.innerHTML += "C";
});
keyThirtyone.addEventListener("click",function(){

    b.innerHTML += "V";
});
keyThirtytwo.addEventListener("click",function(){

    b.innerHTML += "B";
})
keyThirtythree.addEventListener("click",function(){

    b.innerHTML += "N";
});
keyThirtyfour.addEventListener("click",function(){

    b.innerHTML += "M";
});
keyThirtyfive.addEventListener("click",function(){

    b.innerHTML += ",";
});
keyThirtysix.addEventListener("click",function(){

    b.innerHTML += ".";
});
keyThirtyseven.addEventListener("click",function(){

    b.innerHTML += "/";
});
keySpacebar.addEventListener("click",function(){

    b.innerHTML += " ";
});