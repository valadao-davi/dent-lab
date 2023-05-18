//asyn é assincrono, dados que serao usados no futuro
//conjunto de procedimentos
async function registerUser(email, password, event) {   //função para registro  
    event.preventDefault();     //o navegador tem alguns eventos padrões, essa função previne os eventos padrões
    //é um tipo de if voltado para erros
    try{ //tente alguma cosia
        
        //faz o processo de autenticação passando o email e senha
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);  //uma variavel que espera pra receber a autenticação de email e password
        const user = userCredential.user; //uma variavel que após dar return da autenticação vai receber o user

        //insere os dados no banco de dados, acessando coleção users
        await db.collection("users").doc(user.uid).set( //esperar / acessar o metodo collection / no metodo ele vai pra colecao usuarios, vai no documento / e por ultimo coloca no banco de dados
            {
                email: email,
                ui: user.uid
            }
        );
    } catch (error){ // se não funcionar informe o erro
        console.log(error); //print "error"
    }                                   
                                        
} 
                             
//pegar os dados do form e inser na função                         
                                       
document.getElementById("registerButton").addEventListener("click", async(event)=>{ //coleta o id botao de registro, adiciona o evento clique para começar um evento
    const email = document.getElementById("email").value;  //cria a variavel email que vai armazenar o valor dentro do elemento do id "email"
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    //verifica se a senha esta parecida com confirm password se não alerte o usuario que as senhas estão divergentes
    if(password !== confirmPassword){
        alert("AS senhas inseridas não são iguais");
    }
    //insere os dados na função
    registerUser(email, password, event);
});