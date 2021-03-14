import StoreClass from '../store'
import { useState, useLayoutEffect } from 'react'

/**
 * the hook for using store in functional components
 * @param storeObj store object
 */
export default function useStore<T>(
    /** store object that need to be subscribed */
    storeObj: StoreClass<T> & {
        [random: string]: any
    },
): T {
    const [state, setState] = useState(storeObj.initialState)

    useLayoutEffect(() => {
        const subscribe = storeObj.subscribe(setState)

        return () => {
            subscribe.unsubscribe()
        }
    })

    return { ...state }
}
