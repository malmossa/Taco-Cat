const userInput = document.getElementById("userInput");
const alertBox = document.getElementById("alert");
const result = document.getElementById("result");
const btn = document.getElementById("btnSubmit");

btn.addEventListener("click", displayResult);

function doPalindrome()
{
  let userStringArray = [];
  let reversedArray = [];
  let isPalindrome = true;

  // Get input value and convert to lower case
  let userString = userInput.value.toLowerCase().trim();

  // Remove the spaces
  userString = userString.replace(/\s+/g, '');

  // Add the user string into the array
  for (let i = 0; i < userString.length; i++)
  {
    userStringArray.push(userString[i]);
  }

  // Add the reversed string into array
  for (let i = userStringArray.length -1; i >= 0; i--)
  {
    reversedArray.push(userStringArray[i]);
  }

  // Compare the 2 arrays
  for (let i = 0; i < userStringArray.length; i++)
  {
    if (userStringArray[i] !== reversedArray[i])
    {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;

}


function displayResult()
{
  alertBox.classList.add("invisible");

  const palindrome = doPalindrome();
  const string = userInput.value;

  alertBox.classList.remove("invisible");

  if (!palindrome)
  {
    result.innerHTML = `<h5 class="not_palindrome">${string}: is not a palindrome</h5>`;
  } else
  {
    result.innerHTML = `<h5 class="palindrome">${string}: is a palindrome</h5>`;
  }

  userInput.value = "";
}
