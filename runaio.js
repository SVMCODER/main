function runaio() {
    code = document.getElementById('codeaio').value;
    localStorage.setItem('codeaio',`${code}`)
    window.location.replace('ophtml.html')
    
}
function prv() {
  code = document.getElementById('codeaio').value;
  localStorage.setItem('codeaio',`${code}`)
  localStorage.setItem('method','new')
}
document.getElementById('codeaio').addEventListener('input', prv)

if (localStorage.getItem('method') == 'new') {
  document.getElementById('codeaio').innerHTML = localStorage.getItem('codeaio')
}
function saveaio() {
  pname = localStorage.getItem('pname')
  fname = localStorage.getItem('fname')
  if (code = localStorage.getItem('codeaio').length != 0) {
    localStorage.setItem('database', localStorage.getItem('database')+`\n--------------\nProject Name: ${pname}\nFile Name: ${fname}\nCode: ${code = localStorage.getItem('codeaio')}\n`.replace('null',''))
    localStorage.setItem('project',localStorage.getItem('project')+`
    <div class='container'>
    <img src='https://cdn-icons-png.flaticon.com/512/5764/5764218.png'>
    <h4>${pname}</h4>
    <p class='bx bx-file'>File Name ${fname}</p>
    <button class='bx bxs-copy-alt' onclick="let codes1 = document.createElement('textarea');codes1.value = code = localStorage.getItem('codeaio');document.body.appendChild(codes1);codes1.select();document.execCommand('copy');document.body.removeChild(codes1); swal('Copied!', 'Code is copied to your clipboard.', 'success')"> Copy Code</button>
    </div>
    <br>
    `.replace('null',''))
    swal("Saved "+ pname, "Your project "+pname+" was saved successfully!", "success");
  }
  else {
    swal("Error saving "+pname, `Your project ${pname} was not successfully saved!\n
    Reason: ${fname} is empty\n
    Time: ${Date().replace('GMT+0530 (India Standard Time)','')}
    
    `, "success");
  }
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
      localStorage.removeItem('database')
      localStorage.removeItem('verified')
      localStorage.removeItem('method')
      swal("Logging Out", "Please wait", "success");
      setTimeout(() => {
        window.location.replace('index.html')
      }, 1400);
    } else {
      swal("Cancelled", "You projects are safe!", "error");
    }
    });
}