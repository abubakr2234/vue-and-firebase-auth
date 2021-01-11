import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD_ew2QeqvJeNkUSoSpuNYMnqGVyGjALQY",
    authDomain: "vue-auth-e678e.firebaseapp.com",
    projectId: "vue-auth-e678e",
    storageBucket: "vue-auth-e678e.appspot.com",
    messagingSenderId: "84720359476",
    appId: "1:84720359476:web:bd757e131b1f3f843dd261"
  };

  firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
