/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
  return number1 + number2;
}

function addNumbers(){
  const num1 = Number(document.querySelector("#add1").value);
  const num2 = Number(document.querySelector("#add2").value);
  document.querySelector("#sum").value = add(num1, num2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}

function subtractNumbers(){
    const num1 = Number(document.querySelector("#subtract1").value);
    const num2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(num1, num2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

function multiplyNumbers(){
  const num1 = Number(document.querySelector("#factor1").value);
  const num2 = Number(document.querySelector("#factor2").value);
  document.querySelector("#product").value = multiply(num1, num2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

function divideNumbers(){
  const num1 = Number(document.querySelector("#dividend").value);
  const num2 = Number(document.querySelector("#divisor").value);
  document.querySelector("#quotient").value = divide(num1, num2);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
// The instructions weren't super clear, so I added HTML at the end of <section1> that creates a heading, form element, 
// and populates the form element with the year. Hope that is what you were looking for. The grammar in Step 7.1 is 
// incomplete ("...a variable of [sp?] to store..."). Also, there is already an id=year in the footer.
const currentDate = new Date();
let currentYear = "";
currentYear = currentDate.getFullYear();
//document.querySelector("#year").value = currentYear;
sectionElement = document.getElementById("section1");
sectionElement.innerHTML += `
    <article>
    <h3>Year</h3>
    <div>
        <input type="text" id="year" name="year" value=${currentYear}>
    </div>
    </article>`;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
//I played with automatically populating the array
//let numbers = new Array(13).fill(1);
//numbers = numbers.map((val, i) => i + 1);
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = numbers;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbers.filter( (num) => num % 2 != 0 );

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbers.filter( (num) => num % 2 === 0 );

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbers.reduce( (total, num) => total + num);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbers.map( (num) => num * 2 );

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numbers.map( (num) => num * 2 ).reduce( (total, num) => total + num );
