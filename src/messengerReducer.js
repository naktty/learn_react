export const initialState = {
  selectedId: 0,
  messages: ['Hello', '', '']
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case 'edited_message': {
      return {
        ...state,
        messages: state.messages.map((m, index) => {
          if(index === action.contactId){
            return action.message;
          } else {
            return m;
          }
        })
      };
    }
    case 'sent_message': {
      return {
        ...state,
        messages: state.messages.map((m, index) => {
          if(index === action.contactId){
            return '';
          } else {
            return m;
          }
        })
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
