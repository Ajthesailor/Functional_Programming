// Defines a function to convert a string to uppercase
function convertToUppercase(inputString) {
  return inputString.toUpperCase();
}

// Assigns the function to a variable
const convertFunction = convertToUppercase;

// Gets references to the button and result div for First-Class Function
const firstClassButton = document.getElementById("firstClassButton");
const firstClassResultDiv = document.getElementById("firstClassResult");

// Attaches the function to the button click event for First-Class Function
firstClassButton.addEventListener("click", function() {
  const originalString = prompt("Enter words in lowercase: ");
  const uppercaseString = convertFunction(originalString);

  // Displays the result for First-Class Function
  firstClassResultDiv.textContent = `${uppercaseString}`;
});

// Gets references to the button and result div for Multiply Function
const multiplyButton = document.getElementById("multiplyButton");
const multiplyResultDiv = document.getElementById("multiplyResult");

// Attaches the function to the button click event for Multiply Function
multiplyButton.addEventListener("click", function() {
  const factor = parseFloat(prompt("Enter a number: "));

  if (isNaN(factor)) {
    alert("Please enter a valid number.");
    return;
  }

  const multiplier = createMultiplier(factor);
  const inputValue = parseFloat(prompt("Enter a number to multiply: "));

  if (isNaN(inputValue)) {
    alert("Please enter a valid number.");
    return;
  }

  const result = multiplier(inputValue);

  // Display the result for Multiply Function
  multiplyResultDiv.textContent = `${factor} * ${inputValue} = ${result}`;
});

// Function to create a multiplier function for Multiply Function
function createMultiplier(factor) {
  return function (number) {
    return factor * number;
  };
}

// Curving Function

function converToUrl() {
  var url = "";

  return function (protocol, subdomain, domain, tld, endpoint) {
    // Concatenates the "protocol"
    url += protocol;
    // Adds "://"
    url += "://";

    // Concatenates the "subdomain"
    url += subdomain;
    // Adds "."
    url += ".";

    // Concatenates the "domain"
    url += domain;
    // Adds "."
    url += ".";
    
    // Concatenates the "tld"
    url += tld;
    // Adds "/"
    url += "/";

    // Concatenates the "endpoint"
    url += endpoint;

    return url;
  };
}

// Assigns variable for new URL
const convertedUrl = converToUrl();


const buildButton = document.getElementById("buildButton");
const urlResultDiv = document.getElementById("urlResult");

buildButton.addEventListener("click", function () {
  const protocol = document.getElementById("protocol").value;
  const subdomain = document.getElementById("subdomain").value;
  const domain = document.getElementById("domain").value;
  const tld = document.getElementById("tld").value;
  const endpoint = document.getElementById("endpoint").value;

  const finalUrl = convertedUrl(protocol, subdomain, domain, tld, endpoint);
  urlResultDiv.textContent = finalUrl;
});