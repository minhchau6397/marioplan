import * as typeConsts from '../../constants/index'

const authInitialState = {
    authError: null
}
const auth = (state = authInitialState, action) => {
    switch (action.type) {
        case typeConsts.LOGIN_SUCCESS:
            return { ...state, authError: null };
        case typeConsts.LOGIN_ERROR:
            return { ...state, authError: 'login failed' };
        case typeConsts.SIGNOUT_SUCCESS:
            return state
        case typeConsts.SIGNUP_SUCCESS:
            return { ...state, authError: null }
        case typeConsts.SIGNUP_ERROR:
            return { ...state, authError: action.err.message }
        default:
            return state;
    }
}

export default auth;