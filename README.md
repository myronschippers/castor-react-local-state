# Introduction to React Local State

We need a way to make variables that we can use on the DOM. In React, `state` is where you store variable data. If it's a variable shown on the DOM, it will need to be saved in state.

> NOTE: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setting up State

There are three ways to setup your initial state. The first two are specific to `class` based components and the third way is for functional components.

1. setup through a `constructor`
1. setup as a `class` property
1. setup using [hooks](https://reactjs.org/docs/hooks-intro.html)


### Setup State using a Constructor

```JSX
class App extends Component {
  constructor(props) {
    // Required for React.Component to run correctly in some situations
    // always include `props` to avoid thinking about when you do or don't need it
    super(props);

    // Only assign state in the constructor, use setState in all other places
    //This is making state an object, with a default key of user, and default value of empty string
    this.state = {user: ''};
  }

  render() {
    // code here
  }

}
```

## Setup State using Class Property

```JSX
class App extends Component {
  // Only assign state in the constructor, use setState in all other places
  //This is making state an object, with a default key of user, and default value of empty string
  this.state = {user: ''};

  render() {
    // code here
  }

}
```

## Setup State using Hooks

```JSX
import React, { useState } from 'react';

function App() {
  // first value pulled from the array is the state variable
  // second value pulled from the array is the function to change what the state value is
  // in the function call for useState() we pass whatever the default value we want to use for state
  const [user, setUser] = useState('');

  return (
    <div>CONTENT</div>
  );

}
```

Next, let's display this on the DOM:


```JSX
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        // Required for React.Component to run correctly
        super(props);

        // Only assign state in the constructor, use setState in all other places
        this.state = {user: 'Luke'}; // make this an empty string at some point
    }

    // Similar to our toHTML function from classes with jQuery
    render() {
        return <div>
            You typed: {this.state.user}
        </div>;
    }
}

export default App;
```

Let's add an input. Everyone needs an input!

```JSX
<input onChange={this.handleChange} />
```

Next, we'll update the state using `this.setState()` in our `handleChange(event)` function.

```JSX
handleChange(event) {
    console.log(event.target.value);
    // DO NOT re assign state, always use setState
    this.setState({user: event.target.value});
}
```

Let's try it out. At this point, you should receive a console error when typing in the input field. This is happening because when React calls our `handleChange` function, it is creating a new scope.

Set a break point and observe that `this` is `undefined`. `this` is complicated -- remember `this` always changes, depending on who calls it. We want `this` to be our class so we have our method, so we need to write our class function a different way!

```JSX
// makes `this` in handleChange the same as
// `this` in the constructor
handleChange = () => {
    console.log(event.target.value);
    // DO NOT re assign state, always use setState
    this.setState({user: event.target.value});
}
```

The class method with an arrow function binds `this` properly!


The final result should look like this:
```JSX
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        // Required for React.Component to run correctly
        super(props);

        // Only assign state in the constructor, use setState in all other places
        this.state = {user: ''};
    }

    // makes `this` in handleChange the same as
    // `this` in the constructor
    handleChange = () => {
        console.log(event.target.value);
        // DO NOT re assign state, always use setState
        this.setState({user: event.target.value});
    }

    // Similar to our toHTML function from classes with jQuery
    render() {
        return <div>
            <h1>React Local State</h1>
            <input onChange={this.handleChange} />
            <br/>
            You typed: {this.state.user}
        </div>;
    }
}

export default App;
```

### ANOTHER WAY TO STATE!
We can make state in a different way. It is experimental, but we expect it to make it into the standard. Note: If you aren't using Create React App, you'll have to use the constructor way, or configure your code appropriately!


```JSX
class App extends Component {
    state = {
        user : ''
    }

    handleChange = (event) => {
        console.log(event.target.value);
        // DO NOT re assign state, always use setState
        this.setState({user: event.target.value});
    }

    // Similar to our toHTML function from classes with jQuery
    render() {
        return <div>
            <h1>React Local State</h1>
            <input onChange={this.handleChange} />
            <br/>
            You typed: {this.state.user}
        </div>;
    }
}

export default App;
```

Since we're making state with a `class property` we have no need for a constructor! WHOA. Still have to setState(), though!


## Try It!
> Exercise 1: Add a second input called `city` and give the state a property `city` that stays up to date when that input changes. Display the user and their city on the DOM like `Black Panther is from Wakanda` or `Superman is from Smallville`

> Exercise 2: Create a button that logs `this.state` to the console when a submit button is clicked.

**[Spread Lecture](./04-02c_spread-immutability.md)**

> Exercise 3: Instead of `{this.state.user}` and `{this.state.city}`, try to keep them both in a `user` property like `{this.state.user.name}` and `{this.state.user.city}`

> Exercise 4: When clicked, the button should now log `this.state.user` to the console when a submit button is clicked.

> Exercise 5: (Pro Mode) create a `userList` property on `this.state` that holds an array of the `user` objects that have been submitted and log that array to the console on each submit. (Super Pro) put that array into a `<ul>` on the DOM.


## Resources 

- Getting Started [Try React](https://reactjs.org/docs/try-react.html)
- State:
    - https://medium.freecodecamp.org/where-do-i-belong-a-guide-to-saving-react-component-data-in-state-store-static-and-this-c49b335e2a00
    - https://reactjs.org/docs/state-and-lifecycle.html
