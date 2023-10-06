const inputDay = 
document.querySelector("#day");
const inputMonth = 
document.querySelector("#month");
const inputYear = 
document.querySelector("#year");


const YY = document.querySelector(".YY");
const MM = document.querySelector(".MM");
const DD = document.querySelector(".DD");


let isvalid = false;
 
const errorDay =
document.querySelector(".error-day");
const errorMonth =
document.querySelector(".error-month");
const errorYear =
document.querySelector(".error-year");


const submitBtn =
 document.querySelector(".submit-btn");

submitBtn.addEventListener('click',calculateDate);

inputDay.addEventListener('input',(e) => {
  if (+inputDay.value > 31) {
  errorDay.innerHTML = 'Must be a valid date';
  inputDay.value = "";
  isvalid = false;
  return;
 }else{
  isvalid = true;
  errorDay.textContent = '';
 }
 if (+inputDay.value === 0) {
    errorDay.innerHTML = 'This field is required';
    inputDay.value = "";
    isvalid = false;
   return;
 } else {
     errorDay.innerHTML = '';
    isvalid = true;
 }
});

inputMonth.addEventListener('input', (e) => {
 if (+inputMonth.value > 12) {
  errorMonth.innerHTML = 'Must be a valid Month';
  inputMonth.value = "";
  isvalid = false;
  return;
 } else {
  isvalid = true;
  errorDay.textContent = '';
 }
 if (+inputMonth.value === 0) {
  errorMonth.innerHTML = 'This field is required';
  inputMonth.value = "";
  isvalid = false;
  return;
 } else {
  errorMonth.innerHTML = '';
  isvalid = true;
 }
});


inputYear.addEventListener('input', (e) => {
 if (+inputYear.value > 2023) {
  errorYear.innerHTML = 'Must be a valid year';
  inputYear.value = "";
  isvalid = false;
  return;
 } else {
  isvalid = true;
  errorYear.textContent = '';
 }
 if (+inputYear.value === 0) {
  errorYear.innerHTML = 'This field is required';
  inputYear.value = "";
  isvalid = false;
  return;
 } else {
  errorYear.innerHTML = '';
  isvalid = true;
 }
});

function calculateDate() {
 if(isvalid) {
 let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`
let birthdayObj = new Date(birthday);
let ageDiffMill = Date.now() - birthdayObj;
let ageDate = new Date(ageDiffMill);


let ageYears = ageDate.getUTCFullYear() - 1970;
let ageMonths = ageDate.getUTCMonth();
let ageDay = ageDate.getUTCDay();
//DISPLAYING EVERYTHING ON PAGE

YY.innerHTML = ageYears;
MM.innerHTML = ageMonths;
DD.innerHTML = ageDay;

/*inputDay.value = ''; 
inputMonth.value = '';
inputYear.value = '';*/

 }else{
  alert('Get sense na');
 }
}
