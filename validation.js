//registration
function validateRegisterForm(){
    const username = document.getElementById(' username').Value;
    const email = document.getElementById(' email').Value;
    const password = document.getElementById(' password').Value;
    const confirmpassword = document.getElementById(' confirmpassword').Value;

    if (username === ''|| email === '' || password === '' || confirmpassword === '' ){
      alert('All fields are required.');
      return false;
    }
const emailPattern= /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (!emailPattern.test(email)) {
    alert('Please enter valid email address.');
    return false;
}
if(password !== confirmpassword) {
    alert('Password do not match');
    return false;
}

 return true;
}
