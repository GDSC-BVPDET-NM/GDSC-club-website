/* Set the width of the sidebar to 25rem  (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "30rem";
  document.getElementById("overlay").style.width = "100vw";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  document.getElementById("overlay").style.width = "0";
}

var request = new XMLHttpRequest();
        request.open('GET','https://api.github.com/users/GDSC-BVP-DET-Navi-Mumbai/repos' , 
        true)
        request.onload = function() {
            var data = JSON.parse(this.response);
            console.log(data);
            var statusHTML = '';
            $.each(data, function(i, status){
                statusHTML += '<a class="proj-link" href=""> \
                <div class="project-card"> \
                    <h4>' + status.name +  '</h4> \
                    <div class="state"> \
                        \
                    </div> \
                </div> \
           </a> ';
            });
            $('.repositories').html(statusHTML);
        }
        request.send();