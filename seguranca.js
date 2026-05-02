/* ======================================================================
   ARQUIVO DE PROTEÇÃO GLOBAL (seguranca.js)
   Guia para o programador:
   - Este arquivo verifica se o usuário está logado.
   - Como remover: Retire a chamada deste arquivo no HTML.
   - Como adicionar em nova página: Siga o passo 2 abaixo.
======================================================================= */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Chaves de Conexão do Firebase (Mantenha as mesmas)
const firebaseConfig = {
    apiKey: "AIzaSyAo6qUEbkjs9XHaOa32YttJISC1oIwoMCI",
    authDomain: "sistemaloginarqueidbr.firebaseapp.com",
    projectId: "sistemaloginarqueidbr",
    storageBucket: "sistemaloginarqueidbr.firebasestorage.app",
    messagingSenderId: "463919580730",
    appId: "1:463919580730:web:5dd95aaf3a8063c69cd703"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Monitor de sessão
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Se estiver logado, mostra o conteúdo da página
        document.body.style.display = 'block';
    } else {
        // Se não estiver logado, manda para o login
        window.location.href = 'https://arqueid.com.br/';
    }
});
