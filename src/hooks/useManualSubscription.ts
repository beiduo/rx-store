import { useState, useCallback, useEffect } from 'react'
import { Subscription } from 'rxjs'

/** manually manage subscriptions */
export default function useManualSubscription() {
    const [subscription, setSubscription] = useState<Subscription>()

    const cancel = useCallback(() => {
        if (subscription) {
            subscription.unsubscribe()
            setSubscription(void 0)
        }
    }, [subscription])

    const start = useCallback(
        (sub: Subscription) => {
            if (subscription) {
                subscription.unsubscribe()
            }
            setSubscription(sub)
        },
        [subscription],
    )

    return { start, cancel }
}
