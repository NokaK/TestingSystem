function checkRepeat () {

    if (document.getElementById('password').value == 
    document.getElementById('repeat_password').value) {
    document.getElementById('repeat_label').style.color = 'green';
    document.getElementById('repeat_label').innerHTML = 'matching';
  } else {
    document.getElementById('repeat_label').style.color = 'red';
    document.getElementById('repeat_label').innerHTML = 'not matching';
  }

}
