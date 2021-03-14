import StoreClass from '../../../src/store'

export interface WelcomeState {
    message?: string
    name?: string
}

const initialState: WelcomeState = {}

export default class Welcome extends StoreClass<WelcomeState> {
    constructor() {
        super(initialState)
    }

    public modifyName(name?: string) {
        this.update({
            name,
        })
    }

    public modifyMessage(message?: string) {
        this.update({
            message,
        })
    }
}
