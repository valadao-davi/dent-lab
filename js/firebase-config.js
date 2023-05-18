const firebaseConfig = {
    apiKey: "AIzaSyBSYJcqqraQpdY7CDh6kBR1WtQnAaiUgnA",
    authDomain: "dent-lab-ads-962f2.firebaseapp.com",
    projectId: "dent-lab-ads-962f2",
    storageBucket: "dent-lab-ads-962f2.appspot.com",
    messagingSenderId: "526360516067",
    appId: "1:526360516067:web:a62102400f5a473658bcd6",
    measurementId: "G-1XKLXTSBF7"
  };
//firebase biblioteca, initializeapp uma função e firebaseconfig a variavel que vai ser inserida na funçao
firebase.initializeApp(firebaseConfig); //inicializa o meu site com o firebase

//cria o objeto da autenticação para que eu possa usar seus métodos
//o objeto da a vida a classe
//a variavel auth vai ser um objeto que está chamando da super classe "firebase" a classe herdeira "auth"
const auth = firebase.auth(); //assim conseguindo acesso a tudo relacionado desta classe
const db = firebase.firestore(); 