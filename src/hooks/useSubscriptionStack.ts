import { useState, useCallback, useEffect } from 'react'
import { Subscription } from 'rxjs'

/** subscription that will automatically get cancelled */
export default function useSubscriptionStack() {
    const [stack, setStack] = useState<Subscription[]>([])

    const addSubscription = useCallback((
        /** subscription */
        sub: Subscription,
    ) => {
        setStack((prev) => [...prev, sub])
    }, [])

    useEffect(() => {
        return () => {
            stack.forEach((el, i) => {
                el.unsubscribe()
            })
        }
    }, [stack])

    return addSubscription
}
