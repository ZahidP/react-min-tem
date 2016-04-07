import AppDispatcher from '../AppDispatcher';
//import { ActionTypes } from '../Constants';


let ServerActions = {
  receiveLinks(links) {
    console.log('Server Actions: receiveLinks');
    AppDispatcher.dispatch({
      actionType: 'ActionTypes.RECEIVE_LINKS',
      links: 'links'
    });
  }
}

export default ServerActions;
