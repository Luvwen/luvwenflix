export enum ActionType {
  AUTH_START_LOGIN = 'auth_start_login',
  AUTH_END_LOGIN = 'auth_end_login',
}

type Action =
  | { type: ActionType.AUTH_START_LOGIN }
  | { type: ActionType.AUTH_END_LOGIN; payload: string };

interface Login {
  isLoading: boolean;
  isLogged: boolean;
  uid: string;
}

const initialState: Login = {
  isLoading: false,
  isLogged: false,
  uid: '',
};

export const authReducer = (state = initialState, action: Action): Login => {
  switch (action.type) {
    case ActionType.AUTH_START_LOGIN: {
      return { ...state, isLoading: true, isLogged: false, uid: '' };
    }
    case ActionType.AUTH_END_LOGIN: {
      return {
        ...state,
        isLoading: false,
        isLogged: true,
        uid: action.payload,
      };
    }
    default:
      return state;
  }
};
