/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

//membuat variabel untuk setiap element view
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

//membuat variabel untuk menyimpan informasi email dan password yang valid
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';


loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();
//mendapatkan input email dan password pengguna dari form
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

//logika kondisi perbandingan dengan:
  //jika email dan password benar maka akan memasuki halaman beranda dengan fungsi goToHome
  //jika email dan password salah maka akan muncul pop up dengan menggunakan fungsi showPupUp
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {
    showPopUp();
  }
});
