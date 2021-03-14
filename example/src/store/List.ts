import StoreClass from '../../../src/store'
import { RequestFunc } from '../createService'
import { listService } from '../service'

export interface ListState {
    data: Array<string>
}

const initialState: ListState = {
    data: [],
}

export default class List extends StoreClass<ListState> {
    constructor() {
        super(initialState)
    }

    /** fetch data */
    public fetch: RequestFunc = (payload, callback) =>
        listService.getList(payload).subscribe((res) => {
            console.log('fetch result: ', res)

            if (res && !res.error) {
                this.update({
                    data: res
                })
            }

            typeof callback === 'function' && callback(res)
        })
}
