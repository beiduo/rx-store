# React Store with rxjs & hooks

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
        const newStore = useStore(store.newStore)

        return <>{newStore.anystuff}</>
    }


## Demostration

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




