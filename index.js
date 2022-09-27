function validate(){
    var name=document.getElementById('name').value;
    var username=document.getElementById('username').value;
    var number=document.getElementById('number').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;

    

    if(name==null || name==""){
        document.getElementById('fname').innerHTML="Please enter your full name";
        return false;
    }
    else{
        document.getElementById('fname').innerHTML="";
    }

    if (name.length<=3 || name.length>=30) {
        document.getElementById('fname').innerHTML="please enter valid name";
        return false;
    } 
    
    else {
        document.getElementById('fname').innerHTML="";
    }

    if (username==null || username=="") {
        document.getElementById('uname').innerHTML="please enter username";
        return false;
    } 
    
    else {
        document.getElementById('uname').innerHTML="";
    }

    if (number==null || number=="") {
        document.getElementById('phoneno').innerHTML="please enter phone number";
        return false;
    } 
    else {
        document.getElementById('phoneno').innerHTML="";    
    }

    if (isNaN(number)) {
        document.getElementById('phoneno').innerHTML="Enter phone number in digits";
        return false;
    } 
    else {
        document.getElementById('phoneno').innerHTML=""; 
    }

    if (number.length!=10) {
        document.getElementById('phoneno').innerHTML="Phone number in 10 digits only"
        return false;
    } 
    else {
        document.getElementById('phoneno').innerHTML="";    
    }

    if (email==null || email=="") {
        document.getElementById('emailid').innerHTML="please enter your email";
        return false;
    } 
    else {
        document.getElementById('emailid').innerHTML="";
    }

    if (email.indexOf('@') <= 0 ) {
        document.getElementById('emailid').innerHTML="enter valid email";
        return false;
    } 
    else {
        document.getElementById('emailid').innerHTML="";    
    }

    if ((email.charAt(email.length-4)!=".") && (email.charAt(email.length-3)!=".")) {
        document.getElementById('emailid').innerHTML="invalid position";
        return false;
    } 
    else {
        document.getElementById('emailid').innerHTML="";
    }

    if (password==null || password=="") {
        document.getElementById('pass').innerHTML="please create a password";
        return false;
    } 
    else {
        document.getElementById('pass').innerHTML="";
    }

}