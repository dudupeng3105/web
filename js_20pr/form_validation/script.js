// DOM 에서 id 다 가져옴
const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// Show input error messsage
function showError(input, message) {
  // input의 parent 얻음(div)
  const formControl = input.parentElement;
  // div의 클래스를 form-control error로 변경
  formControl.className = 'form-control error';
  // querySelector -> id tag 상관없이 가져올수있음
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show input success
function showSuccess(input){
  const formControl = input.parentElement;
  // div의 클래스를 form-control success 변경
  formControl.className = 'form-control success';
}

//  Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if(input.value.trim() == '') {      
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if(input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');    
  }
}

// Check input length
function checkLength(input, min, max) {
  if(input.value.length < min){
    showError(input, `${getFieldName(input)} must be at least ${min} characters`)
  } else if(input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`)
  } else {
    showSuccess(input);
  }
}

// Get fieldname
function getFieldName(input){
  // 슬라이스는 slice(i) i 인덱스부터 끝까지임
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();
    
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
