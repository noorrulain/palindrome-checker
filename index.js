function palindrome(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
}

const result = document.querySelector("#result");
const form = document.querySelector("form");
const input = document.querySelector("#text-input");
const fact = document.querySelector("#fact");

form.onsubmit = (event) => {
  event.preventDefault();
  if (input.value === "") {
    alert("Please enter a value");
  } else {
    const str = input.value;
    let str2 = str.replace(/[\W_]/g, '');
    let arr = str2.trim().toLowerCase().split("");
    result.style.display = "block";
    fact.classList.add("addMargin");
    if (palindrome(arr)) {
      result.innerText = str + " is a palindrome.";
    } else {
      result.innerText = str + " is not a palindrome";
    }
  }
};
