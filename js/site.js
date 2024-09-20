
const userInput = document.getElementById("userInput");
const alertBox = document.getElementById("alert");
const result = document.getElementById("result");
const btn = document.getElementById("btnSubmit");

btn.addEventListener("click", doPalindrome);

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

  console.log(userStringArray);
  console.log(reversedArray);
  console.log(isPalindrome);
}







// Get user input
//function getValue()
// {
//   document.getElementById("alert").classList.add("invisible");
//   // get user string for the page
//   let userString = document.getElementById("userString").value;

//   // check for a palindrom
//   let returnObj = checkForPalindrome(userString);

//   // display out message to the screen
//   displayMessage(returnObj);

// }

// check if string is a palindrome
// function checkForPalindrome(userString)
// {
//   // taco cat
//   userString = userString.toLowerCase();

//   // remove spaces and special characters
//   let regex = /[^a-z0-9]/gi;
//   userString = userString.replace(regex, "");

//   let revString = [];
//   let returnObj = {};

//   for (let i = userString.length -1; i >= 0; i--)
//   {
//     revString += userString[i];
//   }

//   if (revString == userString)
//   {
//     returnObj.msg = "Well done! You enterd a palindrome!"
//   } else
//   {
//     returnObj.msg = "Sorry! You did not enterd a pallindrome!"
//   }

//   returnObj.reversed = revString;

//   return returnObj;
// }

// display a message to the string
// function displayMessage()
// {
//   document.getElementById("alertHeader").innerHTML = returnObj.msg;
//   document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
//   document.getElementById("alert").classList.remove("invisible");
// }
