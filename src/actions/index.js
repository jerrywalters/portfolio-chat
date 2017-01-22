import firebaseDB from '../firebaseDB';

export const SEND__MESSAGE = 'SEND__MESSAGE';
export const ADD__NEW__MESSAGE = 'ADD_NEW_MESSAGE';
export const ADD__NEW__CONVERSATION = 'ADD_NEW_CONVERSATION';

export function addNewMessage(message){
  return {
    type: ADD__NEW__MESSAGE,
    message,
  }
}

export function addNewConversation(conversation){
  return {
    type: ADD__NEW__CONVERSATION,
    conversation: conversation,
  }
}

// pushes message to firebase
export function sendMessage(message) {
  firebaseDB.ref('messages').push({
    message,
    createdOn: Date.now(),
  }, function(){
    console.log('success');
  })
  return {
    type: SEND__MESSAGE
  }
}
