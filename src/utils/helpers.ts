import Swal from 'sweetalert2';

export const checkUsername = (username: string) => {
  const regexName = /^[a-z ,.'-]+$/i;

  if (regexName.test(username) && username.length > 3) {
    return true;
  } else {
    Swal.fire({
      title: 'Error!',
      text: 'Username should be at least 3 letters long',
      icon: 'error',
      confirmButtonText: 'Try again',
    });
  }
};

export const checkEmail = (email: string) => {
  const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

  if (regexEmail.test(email)) {
    return true;
  } else {
    Swal.fire({
      title: 'Error!',
      text: 'Invalid email type, try something like this (example@yahoo.com)',
      icon: 'error',
      confirmButtonText: 'Try again',
    });
  }
};

export const checkPassword = (password: string, confirmPassword: string) => {
  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  if (regexPassword.test(password) && password === confirmPassword) {
    return true;
  } else {
    Swal.fire({
      title: 'Error!',
      text: 'Both passwords should match each other and contain at least 1 capital letter and 1 number',
      icon: 'error',
      confirmButtonText: 'Try again',
    });
  }
};
