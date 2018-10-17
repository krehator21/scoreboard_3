## scoreboard 3
### React Componets
#### Lifting State up 
When two or more components need access to the same state, we move the state into their common parent. This is called 
"lifting state up".
So when two or more component need access to the same state, we move the state into their common parent. 
This is calles lifting state up.

Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their 
closest common ancestor

#### Controlled Components
To manage an input field's state, we need to build a "controlled component." A controlled component renders a form 
element whose values are controlled by React, with state.

##### ComponentDidMount ()
React's built-in lifecycle methods get called at each point in a component's life-cycle. The methods act as hooks you 
can use to run code at key times in the life-cycle. This gives you the ability to control what happens when a component 
mounts, updates and unmounts.

[React component !Important;](https://reactjs.org/docs/react-component.html#componentdidmount)

This page contains a detailed API reference for the React component class definition.
- The Component Lifecycle (Mounting, Updating, Unmounting, Error Handling)
- Other APIs 
- Class Properties
- Instance Properties
- Reference 
    - Commonly used lifecycle methods
        - render()
        - constructor()
        - componentDidMount()
        - componentDidUpdate()
        - componentWillUnmount()
    - Rarely Used Lifecycle Methods
        - shouldComponentUpdate()
        - static getDerivedStateFromProps()
        - getSnapshotBeforeUpdate() 
        - componentDidCatch()
    