import { BehaviorSubject } from 'rxjs'

/**
 * store class
 */
export default class StoreClass<T> {
    constructor(
        /** initial state */
        public initialState: T,
    ) {}

    private state: T = this.initialState

    /** subject */
    public subject = new BehaviorSubject(this.initialState)

    /** subscribe */
    public subscribe = (setState: any) => this.subject.subscribe(setState)

    /** update */
    public update = (payload: any) => {
        this.state = {
            ...this.state,

            ...payload,
        }
        this.subject.next(this.state)
    }

    /** replace */
    public replace = (payload: any) => {
        this.state = {
            ...payload,
        }
        this.subject.next(this.state)
    }

    /** set state value to initial */
    public clear = () => {
        this.state = this.initialState
        this.subject.next(this.state)
    }

    /** get current state value */
    public getValue = () => this.subject.getValue()
}
