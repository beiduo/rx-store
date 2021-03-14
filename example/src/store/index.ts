import Auth from './Auth'
import Welcome from './Welcome'
import List from './List'

const store = {
    auth: new Auth(),
    welcome: new Welcome(),
    list: new List(),
}

/* this line is written for debugging */
;(window as any).store = store

export default store
