function login() {
  username = document.getElementById('username').value;
  password = document.getElementById('password').value;
  admno = document.getElementById('admno').value;
  frname = document.getElementById('frname').value;
  mrname = document.getElementById('mrname').value;

  if (username.length > 16) {
    swal("Error", "Username cannot be greater than 16 digits", "error");
  }
  else if (password.length > 8 || password.length < 8) {
    swal("Error", "Password cannot be less or greater than 8 digits", "error");
  }
  else if (admno.length > 4 || admno.length < 4) {
    swal("Error", "Admission Number cannot be greater than 4 digits", "error");
  }
  else if (frname.length == 0) {
    swal("Error", "Father's Name cannot be empty", "error");
  }
  else if (mrname.length == 0) {
    swal("Error", "Mother's Name cannot be empty", "error");
  }
  else if (username == 'Shaurya' && password == 'uioplol!') {
    swal("Welcome Our Founder", "Dear Shaurya Tripathi, Please wait while you are being logged in", "success");
    localStorage.setItem('name', "Shaurya Tripathi")
    localStorage.setItem('role', "Founder")
    localStorage.setItem('badge', "Developer")
    localStorage.setItem('loggedin', 'yes')
    localStorage.setItem('admno', '3672')
    localStorage.setItem('frname', "Mr. Ramanand Tripathi")
    localStorage.setItem('mrname', "Mrs. Kiran Tripathi")
    localStorage.setItem('verified',true)
    localStorage.setItem('info', `
    <h3>Profile</h3>
      <img src="shaurya.png" alt="">
    <h3 class='verified'>
    <img src='https://cdn.dribbble.com/users/7421625/screenshots/18722433/media/98927ad7ff7a510ca9d37af120b3f5de.gif'>
    <img src='https://emoji.discadia.com/emojis/bf9196a7-3505-4537-9034-cfbb0d75bbda.GIF'>
    ${localStorage.getItem('name')}
    </h3>
    <h4 class='verified'>
    <img src='https://media.tenor.com/wLL4SRifvRkAAAAd/skull-red.gif'>
    ${localStorage.getItem('role')}</h4>
    <h4 class='verified'>
    <img src='https://cdn3.emoji.gg/emojis/3773-active-developer-badge-animated.gif'>
    ${localStorage.getItem('badge')}
    </h4>
    <button class="bx bx-log-out" style="background-color: rgb(212, 0, 0);" onclick="logout()"> Logout</button>
    `)
    setTimeout(() => {
      window.location.replace('home.html')
    }, 1400);
  }
  else if (username == 'Rohit' && password == 'rs15bug!') {
    swal("Welcome Our Owner", "Rohit, Please wait while we are logging you in", "success");
    localStorage.setItem('name', "Rohit Srivastava")
    localStorage.setItem('role', "Onwer")
    localStorage.setItem('badge', "Admin")
    localStorage.setItem('loggedin', 'yes')
    localStorage.setItem('admno', admno)
    localStorage.setItem('frname', frname)
    localStorage.setItem('mrname', mrname)
    localStorage.setItem('verified',true)
    localStorage.setItem('info',
    `
    <h3>Profile</h3>
      <img src="https://freeaccountshub.com/wp-content/uploads/2021/03/53184-user.gif" alt="">
    <h3 class='verified'>
    <img src='https://cdn.dribbble.com/users/7421625/screenshots/18722433/media/98927ad7ff7a510ca9d37af120b3f5de.gif'>
    <img src='https://emoji.discadia.com/emojis/bf9196a7-3505-4537-9034-cfbb0d75bbda.GIF'>
    ${localStorage.getItem('name')}
    </h3>
    <h4 class='verified'>
    <img src='https://static.vecteezy.com/system/resources/thumbnails/009/636/683/small/admin-3d-illustration-icon-png.png'>
    ${localStorage.getItem('role')}</h4>
    <h4 class='verified'>
    ${localStorage.getItem('badge')}
    </h4>
    <button class="bx bx-log-out" style="background-color: rgb(212, 0, 0);" onclick="logout()"> Logout</button>
    `)
    setTimeout(() => {
      window.location.replace('home.html')
    }, 1400);
  }
  else if (username == 'Lakshmi' && password == 'svmchub00') {
    swal("Welcome Our Teacher", "Dear Lakshmi, Please wait while we are logging you in", "success");
    localStorage.setItem('name', "Lakshmi")
    localStorage.setItem('role', "Teacher")
    localStorage.setItem('badge', "Admin")
    localStorage.setItem('loggedin', 'yes')
    localStorage.setItem('admno', '0000')
    localStorage.setItem('frname', "'Father's Name'")
    localStorage.setItem('mrname', "Mother's Name")
    localStorage.setItem('verified',true)
    localStorage.setItem('info',
    `
    <h3>Profile</h3>
      <img src="https://freeaccountshub.com/wp-content/uploads/2021/03/53184-user.gif" alt="">
    <h3 class='verified'>
    <img src='https://cdn.dribbble.com/users/7421625/screenshots/18722433/media/98927ad7ff7a510ca9d37af120b3f5de.gif'>
    <img src='https://emoji.discadia.com/emojis/bf9196a7-3505-4537-9034-cfbb0d75bbda.GIF'>
    ${localStorage.getItem('name')}
    </h3>
    <h4 class='verified'>
    <img src='https://static.vecteezy.com/system/resources/thumbnails/009/636/683/small/admin-3d-illustration-icon-png.png'>
    ${localStorage.getItem('role')}</h4>
    <h4 class='verified'>
    ${localStorage.getItem('badge')}</h4>
    <button class="bx bx-log-out" style="background-color: rgb(212, 0, 0);" onclick="logout()"> Logout</button>
    `)
    setTimeout(() => {
      window.location.replace('home.html')
    }, 1400);
  }
  else {
    swal("Welcome "+username, `Dear ${username}, Please wait while we are logging you in`, "success");
    localStorage.setItem('name', username)
    localStorage.setItem('role', 'User')
    localStorage.setItem('badge','Student')
    localStorage.setItem('loggedin','yes')
    localStorage.setItem('admno', admno)
    localStorage.setItem('frname', frname)
    localStorage.setItem('mrname', mrname)
    localStorage.setItem('verified', false)
    localStorage.setItem('info',`
    <h3>Profile</h3>
      <img src="https://freeaccountshub.com/wp-content/uploads/2021/03/53184-user.gif" alt="">
    <h3 class='verified'>
    ${localStorage.getItem('name')}
    </h3>
    <h4 class='verified'>
     ${localStorage.getItem('role')}</h4>
    <h4 class='verified'>
    ${localStorage.getItem('badge')}
    </h4>
    <button class="bx bx-log-out" style="background-color: rgb(212, 0, 0);" onclick="logout()"> Logout</button>
    `)
    setTimeout(() => {
      window.location.replace('home.html')
    }, 1400);
  }
}
if(localStorage.getItem('loggedin') == 'yes') {
  window.location.replace('home.html')
}
function logout() {
  swal({
        title: "Are you sure?",
        text: "You will be logged out and all your projects will be deleted!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Logout',
        cancelButtonText: "Cancel",
        closeOnConfirm: false,
        closeOnCancel: false
    },
    function(isConfirm){
    if (isConfirm){
      localStorage.removeItem('loggedin')
      localStorage.removeItem('name')
      localStorage.removeItem('project')
      localStorage.removeItem('badge')
      localStorage.removeItem('role')
      localStorage.removeItem('verified')
      localStorage.removeItem('method')
      localStorage.removeItem('database')
      swal("Logging Out", "Please wait", "success");
      setTimeout(() => {
        window.location.replace('index.html')
      }, 1400);
    } else {
      swal("Cancelled", "You projects are safe!", "error");
    }
    });
}