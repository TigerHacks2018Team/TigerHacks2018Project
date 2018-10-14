/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function(){
    var config = {
    apiKey: "AIzaSyCy-eu6UWKQDaNE31tj4Y4ePxkL2BLfN0Q",
    authDomain: "tigerhacks2018.firebaseapp.com",
    databaseURL: "https://tigerhacks2018.firebaseio.com",
    projectId: "tigerhacks2018",
    storageBucket: "tigerhacks2018.appspot.com",
    messagingSenderId: "433043699698"
  };
  firebase.initializeApp(config);
  
  const state = {
      email: '',
      password: '', 
  };
  
  $('.js-form').on('submit',event=>{
      event.preventDefault();
      const email = $('#js-email').val() || state.email;
      const password = $('#js-password').val() || state.password;
      console.log(email,password);
      firebase.auth().signInWithEmailAndPassword(email,password)
              .then(user=>{
                  state.email=email;
                  state.password = password;
                $('#js-email').addClass('hidden');
                $('#js-password').addClass('hidden');
          
  })
      .catch(error=>{
          console.log(error);
      });
});
});