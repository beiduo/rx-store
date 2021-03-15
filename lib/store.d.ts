import { BehaviorSubject } from 'rxjs';
/**
 * store class
 */
export default class StoreClass<T> {
    /** initial state */
    initialState: T;
    constructor(
    /** initial state */
    initialState: T);
    private state;
    /** subject */
    subject: BehaviorSubject<T>;
    /** subscribe */
    subscribe: (setState: any) => import("rxjs").Subscription;
    /** update */
    update: (payload: any) => void;
    /** replace */
    replace: (payload: any) => void;
    /** set state value to initial */
    reset: () => void;
    /** get current state value */
    getValue: () => T;
}
