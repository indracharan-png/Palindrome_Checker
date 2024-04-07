const inputString = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultsDiv = document.getElementById("result");
const checkPalindrome = (str) => {
  if (str === "") {
    alert("Please input a value");
    return;
  }
  resultsDiv.replaceChildren();
  const originalString = str;
  const new_str = str.replace(/[^a-z0-9A-Z]/g, "").toLowerCase();
  const reversedString = Array.from(new_str).reverse().join("");
  let outputText = `<strong>${originalString}</strong>`;
  outputText +=
    reversedString === new_str ? ` is a palindrome` : ` is not a palindrome`;
  const pTag = document.createElement("p");
  pTag.className = "output-text";
  pTag.innerHTML = outputText;
  resultsDiv.append(pTag);
  resultsDiv.classList.remove("hidden");
};

checkBtn.addEventListener("click", () => {
  checkPalindrome(inputString.value);
  inputString.value = "";
});
