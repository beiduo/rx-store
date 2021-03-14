import React, {useEffect, useCallback} from 'react';
import { render } from 'react-dom';

import useStore from '../../src/hooks/useStore';
import useSubscriptionStack from '../../src/hooks/useSubscriptionStack';

import store from './store';
import { WelcomeState } from './store/Welcome';
import { ListState } from './store/List';

const Editor = () => {
    const welcome = useStore<WelcomeState>(store.welcome);

    return (
        <>
        <p>
            enter name: <input type="text" value={welcome.name} onChange={e => {
                e.preventDefault();
                store.welcome.modifyName(e.target.value)
            }} />
        </p>
        <p>
            enter message: <input type="text" value={welcome.message} onChange={e => {
                e.preventDefault();
                store.welcome.modifyMessage(e.target.value)
            }} />
        </p>
        </>
    )
};

const List = () => {
    const list = useStore<ListState>(store.list);

    const addSubscription = useSubscriptionStack();

    const refresh = () => {
        addSubscription(store.list.fetch());
    };

    return (
        <>
        <p>
        <button onClick={e => {
            refresh();
        }}>refresh list</button>
        </p>
        {JSON.stringify(list.data)}
        <ul>
            {list.data.map(el =>
            <li>{el}</li>
                )}
        </ul>
        </>
    )

    
}

const App = () => {
    const welcome = useStore<WelcomeState>(store.welcome);

    const list = useStore<ListState>(store.list);

    return (
        <>
        <h2>Example 1</h2>
        <p>
            welcome {welcome.name}!: {welcome.message || 'no message'}
        </p>

        <Editor />

        <h2>Example 2</h2>
        
        <List />

        <h2>Example 3</h2>

        <p>type "window.store.welcome.getValue()" in the console, see the results</p>

        <h2>Example 4</h2>

        <p>type "window.store.welcome.modifyName('john')" in the console, see the results</p>
        </>
    )
};

render(<App />, document.getElementById('root'));