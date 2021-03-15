# React Store with rxjs & hooks

this module provides a global store management for react 16+, depended on RxJs.

also provide two useful hooks **useSubscriptionStack** and **useManualSubscription** to manage rx subscriptions within function components.

## Installation

```npm i rx-hook-store```

## Usage

### create a store

    import StoreClass from 'rx-hook-store'

    interface NewStoreState {
        [random: string]: any;
    }

    const initialState: NewStoreState = {
        anystuff: 'anystuff'
    }

    class NewStore extends StoreClass<NewStoreState> {
        constructor() {
            super(initialState)
        }
    }

    const store = {
        newStore: new NewStore()
    }

### connect to store inside a function component

    import {useStore} from 'rx-hook-store'

    function NewComponent () {
        const newStore = useStore<NewStoreState>(store.newStore)

        return <>{newStore.anystuff}</>
    }


## Demonstration

clone this repository, install, and run ```npm start```

## Examples

see /example/src directory

## Concepts

the concept of "store" is inspired by the **service** of **angular**. to create a "service" (in here, it's a new member of the store), you need to extend the ```StoreClass``` to get a new class, set the initial value, and manage all the value operation methods in this class. then, create an instance of this new class, this instance can be used not only in components, also in basically everywhere, by different ways.

although, it's highly recommended to follow the pattern inside ```example/src/store``` directory.

### StoreClass

```StoreClass``` provides the fundamental behavior for each store instance.

- ```update(payload: any)```: merge new value into the store
- ```replace(payload: any)```: replace the value of the store
- ```reset()```: reset the store to the initial value
- ```getValue()```: get the current value of the store

### Store Instance

a store instance provides a value, and a variety of methods to read and operate that value.

## Hooks

### useStore

this hook connects a store with a function component, and return the current value of that store.

### useSubscriptionStack

this hook returns a function, this function can receive a subscription as its parameter, this subscrition can be automatically cancelled.

the most common usage is to automatically cancel subscriptions (such as ajax request, setTimeout, etc) while leaving the interface.

example:

    import {useSubscriptionStack} from 'rx-hook-store';

    const ExampleComponent = () => {
        const newStore = useStore<NewStoreState>(store.newStore)

        const addSubscription = useSubscriptionStack();

        const refresh = () => {
            addSubscription(store.newStore.fetch());
        };

        return (
            <>
            </>
        )
    }

### useManualSubscription

this hook returns an object with two methods, **"start"** and **"cancel"**, "start" can receive a subscription as its parameter, if repeatedly call this method, it will cancel previous subscription, then process the new subscribe. "cancel" will just cancel the subscription.

it might be useful in complicated scenes.

example:

    import {useManualSubscription} from 'rx-hook-store';

    const ExampleComponent = () => {
        const newStore = useStore<NewStoreState>(store.newStore)

        const handleFetch = useManualSubscription();

        const refresh = () => {
            handleFetch.start(store.newStore.fetch());
        };

        useEffect(() => {
            handleFetch.cancel();
        }, []);

        return (
            <>
            </>
        )
    }
