# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  WEB DEVELOPMENT IMMERSIVE

1. Fork
1. Feature
1. Clone
1. Pull Request

# Calculator App

Today you will be building a calculator with React. At first your calculator will just add 2 numbers together when they are typed in. For the bonus, we might get more creative.

### Steps

1. Start by creating a single component name it Calculator.js. Create your Calculator class and in your render function add the following:
  ```js
  <div className="container">
    <h1>Add with React!</h1>

    <div className="add">
      <input type="text" />
      <span>+</span>
      <input type="text" />
      <span>=</span>
      <h3>Addition results go here!</h3>
    </div>
  </div>
  
  ```

2. Set up the initial state of your component. What state will you need to track? What values should those state items start with? Where is that state printed to the browser?
3. You will need to figure out how and when you want to listen for an event to trigger a calculation. Is it a click event, a submit event...? It's up to you to figure out what event you want to listen for, on which elements, and why. Here is a [list of events React supports](https://facebook.github.io/react/docs/events.html#supported-events) and [how to listen for them](https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html).
4. Once you know what event to listen for, you'll need to create a method that accepts the triggered event, gets the input values from your form, adds them together, and sets the state of the new `sum`.
    - **thought**: how will you handle inputs that aren't numbers?
5. Once the state of the `sum` has been set, React will re-render the whole component. Make sure you have a place in your JSX that displays the result!

6. Make the calculator work with any of the 4 basic arithmetic operations (+, -, *, /). How will this change your state, and your JSX?
