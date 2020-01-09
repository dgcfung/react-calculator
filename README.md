# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

1. Fork
1. Feature
1. Clone
1. `npm install`

# Calculator App

Today you will be building a calculator with React.

### Steps

1. Start by converting your main `App.js` component from a functional component to a class component.

     - Note: As you are still fairly new to React, we _STRONGLY_ encourage writing this code out manually (as opposed to copying and pasting from a class lab). It is highly probable that you will be creating many more React components in the future (or at least for the duration of this cohort), and the quicker you can get this boiler-plate into your fingertips, the better off you will be.
     
2. Strip away the default JSX found in the `return` of this component and replace it with the following:
  ```js
  <div className="container">
    <h1>Add with React!</h1>

    <form className="add">
      <input type="text" name="value1" />
      <span>+</span>
      <input type="text" name="value2" />
      <span>=</span>
      <h3>Addition results go here!</h3>
    </form>
  </div>
  
  ```
  You may copy/paste this part if you want, though writing it out manually can only help you in the long run!
  
3. Set up the initial state of your component. What state will you need to track? What values should your state hold when the app is first loaded? Where will your state be rendered?

4. You will need to figure out how, where and when you want to listen for an event to trigger a calculation. Do you want to use `onClick`? Or perhaps `onSubmit`? It's up to you to figure out what to listen for and on which elements. You will most likely need to add additional JSX elements for this all to work cohesively. [Here is a list of events supported by React](https://facebook.github.io/react/docs/events.html#supported-events).

5. Once you know what event to listen for, you'll need to create a new method. The method shoud accept the triggered event and input values from your form as parameters. Compute the values and set the `sum` to your state.
6. Once the state of the `sum` has been set, React will automatically re-render the whole component. Make sure the result in your state is rendered in the browser.

7. Make the calculator work with any of the 4 basic arithmetic operations (+, -, *, /). How will this change your state, and your JSX? Will you need to use additional methods?

8. Provide some basic styling with Flexbox or Grid.

### Bonus
What happens if the calculator recieves non-numerical inputs? Create some error handling that lets the user know if they have entered values that cannot be computed.

### CSS Bonus

- Create a mobile version of this app using media queries
  - You cans use [touch events](https://reactjs.org/docs/events.html#touch-events) if you want!
  - [MDN Touch Events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
