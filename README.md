# **React Forms & Events**

![Count me in. I'm there.](https://media.giphy.com/media/3orif3HlX3i4fDdqCY/giphy.gif?cid=790b7611c1e99f86a946eda4de74985930846c9886d75242&rid=giphy.gif&ct=g)

## **Props & State** 
  * **State** is how we keep track of data within a component. We can make changes to state.
  * **Props** are attributes passed down to a child component from a parent component. Props are *read-only*.

  &nbsp;

## **Callback Props** 

![Wait, please, promise you're going to call back.](https://media.giphy.com/media/XDd7KKews473ZHM0hq/giphy.gif?cid=790b7611f0d9276ee2be08c63b2d01725652c2b3594785e4&rid=giphy.gif&ct=g)

* **Callback Props** are functions passed from a parent to a child component.
* If state needs to be used by more than one component, that state should live in the parent component.
* Example: A blog needs to display a list of posts and it should have a form to create new posts.
  * We should keep the state (a list of posts) in the parent component so that we can both display and update the state.

  &nbsp;

## **Uncontrolled Forms**
![Because I've lost control of my life.](https://media.giphy.com/media/ofNXxcvX6UDXq/giphy.gif?cid=790b7611a514e7499c0d6f59c5943d1b6182253345710201&rid=giphy.gif&ct=g)

* **Uncontrolled Forms** are similar to regular HTML forms.
* We do not control use input values in our state and rely on the DOM instead.
* We very rarely use uncontrolled forms.
* In order to get the values from input fields, we have to create `ref`s.
* **Using `createRef`:**
  ```js
  name = createRef();

  <input ref={this.name} />

  nameInput = this.name.current.value;
  ```
* **Using vanilla JavaScript:**
  ```js
  const name = document.getElementById('name');

  <input id="name" />

  const nameInput = name.value;
  ```


&nbsp;


## **Controlled Forms**

![Give me control.](https://media.giphy.com/media/YO3icZKE2G8OoGHWC9/giphy.gif?cid=790b7611206725f6816389b2bba62eb78e38fa0630f30551&rid=giphy.gif&ct=g)

* A **controlled component** is one where we control the value of any user input within our state.
* Controlled forms keep track of what a user types as they type it.
* Form values must be contained in the state, or it will not work.
* When a user enters any data, we update the state with that value.
* We track these updates through `onChange` events.

  ```js
  state = {
    userInput: ''
  };

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value 
    });
  };

  render(){
    return (
      <input 
        name="userInput" 
        value={this.state.userInput} 
        onChange={this.handleChange} 
      />
    );
  };
  ```

  &nbsp;

## **Updating State with Forms**
* What do we do with the form data when it's submitted?
![Home Alone](https://media.giphy.com/media/p092OM3vVCXII/giphy.gif?cid=ecf05e474saqwunxq9jr7lvfxzu3z3ju3vtrcbi4hb0ts5ng&rid=giphy.gif&ct=g)
* Usually, we want to render that new data somewhere on the DOM.
* If we are following separation of concerns, should we render data within the form component? (HINT: NO!)
* How do we get the form data into the state of the parent component?
  * **CALLBACK PROPS**

![Blog Component Diagrams](https://i.imgur.com/2ERlPfE.png)


## Resources
* [Forms - React](https://reactjs.org/docs/forms.html)
* [Synthetic Events - React](https://reactjs.org/docs/events.html)
* [Refs and the DOM - React](https://reactjs.org/docs/refs-and-the-dom.html)
* [Controlled and uncontrolled form inputs in React don't have to be complicated](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)
* [React.js Forms: Controlled Components](https://lorenstewart.me/2016/10/31/react-js-forms-controlled-components/)
