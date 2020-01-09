# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

1. Fork
1. Clone

# Calculator App

Your client Sonor Cardgage has requested a calculator, built in React.

![](assets/no_probalo.png)

### Basic Logic

1. Once you've cloned down the repo, run `npm install` or `npm i` in the terminal to install react dependencies.

2. Take a look at the structure of the provided code so far. We have a parent `App.js` component that houses three child components: `Header.jsx`, `Calculator.jsx` and `Output.jsx`. Run `npm start` in the terminal to see this rendered in your browser.
  
3. The purpose of the `Calculator.jsx` component is to take two numbers (one from each input) and add them together. We will need to use state to accomplish this. It looks like `Calculator.jsx` has been set up as a class component, but feel free to convert it to a functional component if you'd prefer to use Hooks. 

4. Initialize your state. What state will you need to track? What values should your state hold when the app is first loaded?

5. In the JSX, you will need to figure out how, where and when you want to listen for an event to trigger a calculation. Do you want to use `onClick`? Or perhaps `onSubmit`? It's up to you to figure out what to listen for and on which elements. [Here is a list of events supported by React](https://facebook.github.io/react/docs/events.html#supported-events).

6. Now we need to create a new method that triggers on our event. This method shoud accept the triggered event and two numbers as parameters. Compute those values and set the `sum` to state.

7. Hmmm. This component doesn't have a set spot to render the results. How can we test our code so far to make sure everything is working?

### Raising State

7. The client has specifically requested that the calculator output be rendered in the `Output.jsx` component. It's really difficult to pass values directly between sibling components, so we must raise our state up to `App.js`.
    - Decide how you want to create this new state. Will you convert `App.js` to a class component or do you want to use Hooks? What code needs to be moved from `Component.jsx` to `App.js` in order to to keep everything working smoothly?

8. Pass the appropriate props from `App.js` down to `Calculator.jsx` and `Output.jsx`. Remember that methods can be passed as props, just like values.

9. Test your calculator. Do not progress to the next step until it successfully adds two numbers and renders the sum in `Output.jsx`.

7. Make the calculator work with all of the basic 4 arithmetic operations (+, -, *, /). How will this change your state, and your JSX? Will you need to create additional methods or can you repurpose your existing method?

### Bonus
What happens if the calculator recieves non-numerical inputs? Create some error handling that lets the user know if they have entered values that cannot be computed.

### CSS Bonus
Use media queries to design a responsive mobile version of this app
- You cans use [touch events](https://reactjs.org/docs/events.html#touch-events) if you want!
- [MDN Touch Events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
