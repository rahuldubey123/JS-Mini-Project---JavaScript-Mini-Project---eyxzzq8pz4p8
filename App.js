 function login()
         {
    var uname=document.getElementById('username').value;
    var pass=document.getElementById('password').value;
    if(uname=="world" && pass=="123")
    {
        location.assign("file:///C:/Users/Kanta/Desktop/page.html")
    }
    else
    {
        window.alert("login failed")
    }
}
