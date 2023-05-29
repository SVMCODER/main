document.getElementById('project').innerHTML = localStorage.getItem('project').replace('null', ``)
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
