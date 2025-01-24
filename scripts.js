function handleLogin()
{
    const username=document.getElementById('user').value;
    const password=document.getElementById('pass').value;
    const errorMsg=document.getElementById('error');
    
    const LoginData=[
        {username:"Nandhini",password:"12345"},
        {username:"Keerthana",password:"kee123"},
    ]
    const isvalid=LoginData.some((user)=>user.username===username && user.password===password);

    if(isvalid){
        window.location.href="flexbox.html"
        errorMsg.innerText="Login Succesful"
    }
    else{
        errorMsg.innerText="Invalid credentials"
    }
}