function validate(){
    var name=document.getElementById('name').value;
    var username=document.getElementById('username').value;
    var number=document.getElementById('number').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;

    console.log(name);

    if(name==null || name==""){
        document.getElementById('fname').innerHTML="Please enter your full name";
        return false;
    }
    else{
        document.getElementById('fname').innerHTML="";
        return false;
    }

}


