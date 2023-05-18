//funçao para fazer o login com base no e-mail e senha
async function loginUser(email, password){
    try {
        const userCredential = await auth.signInwithEmailAndPassword(email, password)
        const user = userCredential.user;
    return "sucesso";
    } catch(error){
        console.log(error)
    }
}

document.getElementById("btnLogin").addEventListener("click", async(event)=>{
    event.defaultPrevented();

    //armazena o email e a senha com base no seu id
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //cria a variavel para armazenar a resposta da função loginUser()
    const result = loginUser(email, password);


    if(result == "sucesso"){
        window.location.href = "home.html";
    }else{
        alert("Error ao fazer o login")
    }
})