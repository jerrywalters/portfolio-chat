
// initialize firebase
var config = {
    apiKey: "AIzaSyA1Db7hSJ658255QfdZ09mjJR4VxcXbDP8",
    authDomain: "portfolio-chat.firebaseapp.com",
    databaseURL: "https://portfolio-chat.firebaseio.com",
    storageBucket: "portfolio-chat.appspot.com",
    messagingSenderId: "892675563096"
  };

firebase.initializeApp(config);


var chatDb = firebase.database().ref('messages');

// write new messages to db
$('.chat').submit(function(e) {
  e.preventDefault();

  var message = $('.chat__input').val();
  console.log('message sent:', message);
  chatDb.push({
    message: message,
    createdOn: Date.now()
  }, function(){
    $(".chat__input").val(''); // clear input
  });
});

function createUserId(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
  });
}

// read from db and write to page
chatDb.on('child_added', function(data) {
  console.log('new message!');
  var newMessage = data.val().message;
  $('.messages__list').append('<li>' + newMessage + '</li>');
});
