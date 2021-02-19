import firebase from '../config/fbConfig';
import { rrfConfig } from '../config/rrfConfig'
import { createFirestoreInstance } from 'redux-firestore'

export const rrfProps = {
    firebase,
    config: rrfConfig,
    createFirestoreInstance
}

// Auth reducer
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'