
//------------------------------WELCOME-------------------------------------------
function welcome(id){
    localStorage.setItem('local',id);
    window.location.href = "welcome.html";
}
//------------------------------LOGIN---------------------------------------------
function check(id,pass) {
    if(localStorage.getItem(id)){
        var str = localStorage.getItem(id);
        var cpass = str.substr(0,str.indexOf(','))
        if(cpass == pass)
            return true;
        else
            return false;
    }
    return false;
}

function login() {
    var id;
    var password;
    id = document.getElementById('id').value;
    pass = document.getElementById('pass').value;
    
    if(check(id,pass)){
        alert("id match");
        welcome(id);
    }
    else
        alert("wrong id or password");
}

//---------------------------------SIGNUP-----------------------------------------
function check_exist(id) {
    if(localStorage.getItem(id))
        return true;
    else
        return false;
}

function signup() {
    var name, fname, id, pass;
    name = document.getElementById('name').value;
    fname = document.getElementById('fname').value;
    id = document.getElementById('id').value;
    pass = document.getElementById('pass').value;
    if(!check_exist(id)){
        localStorage.setItem(id,[pass,name,fname,""])
        alert("Signup completed");
        window.location.href = "login.html";

    }
    else{
        alert("student id already exist");
        window.location.href = "login.html";

    }
}


//-------------------------------------------------------------------------------