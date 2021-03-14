import StoreClass from '../../../src/store'

export interface AuthState {
    token?: string
}

const authSaved = window.localStorage.getItem('auth') || '{}'

let authObj: any

try {
    authObj = JSON.parse(authSaved)
} catch {
    authObj = {}
}

const initialState: AuthState = {
    token: 'token1',
}

export default class Auth extends StoreClass<AuthState> {
    constructor() {
        super({ ...initialState, ...authObj })
    }
}
