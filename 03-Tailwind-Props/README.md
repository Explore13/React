# Props

- When you pass myObj as a prop to a React component like <Card myName="SuryaGhosh" someObj={myObj} myArr={myArr}/>, you're essentially passing the entire object as a single prop named someObj.

- The curly braces {} are used in JSX to evaluate JavaScript expressions. When you use {} in JSX, whatever is inside the curly braces is treated as a JavaScript expression and its result is rendered in the component. In this case, {myObj} is a JavaScript expression that evaluates to the object assigned to the myObj variable. So, you're passing the entire object myObj as a prop to the Card component.
 
