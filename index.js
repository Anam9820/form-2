function validate(){
    var name=document.getElementById('name')
    var username=document.getElementById('username')
    var number=document.getElementById('number')
    var email=document.getElementById('email')
    var password=document.getElementById('password')

    console.log(name);

    if(name==null || name==""){
        document.getElementById('name').innerHTML="Please enter the name"
    }

}
