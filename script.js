// script.js
const passwordField = document.getElementById('password');
const lengthField = document.getElementById('length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+[]{}<>?/|";

function getRandomChar(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function generatePassword() {
  let length = parseInt(lengthField.value);
  let characters = "";
  let password = "";

  if (uppercase.checked) characters += upper;
  if (lowercase.checked) characters += lower;
  if (numbers.checked) characters += number;
  if (symbols.checked) characters += symbol;

  if (characters.length === 0) {
    alert("Please select at least one option!");
    return;
  }

  for (let i = 0; i < length; i++) {
    password += getRandomChar(characters);
  }

  passwordField.value = password;
}

function copyToClipboard() {
  if (passwordField.value === "") return;
  navigator.clipboard.writeText(passwordField.value);
  alert("Password copied to clipboard!");
}

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyToClipboard);