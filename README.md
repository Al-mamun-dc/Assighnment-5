 #DevStack

DevStack is a web application that helps users explore different development technologies and build their own development stack. Users can easily add, remove, and manage technologies.

#Technologies Used

React.js
TypeScript
Tailwind CSS
React-Toastify
JSON
Vite

#Features

Explore different frontend, backend, database, and development tools.
Add technologies to create a personal development stack.
Remove individual technologies or clear the entire stack.

#React Questions & Answers

##1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React code easier to read and write.

##2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to manage data inside a component and can change over time.

##3. What does the useState hook do, and where did you use it in this project?

The useState hook is used to create and manage changing data in a React component. In this project, I used it in the Technologies component to store the selected technologies.

##4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to perform side effects such as fetching data after a component renders. In this project, I did not use useEffect. I used React's use() hook and Suspense to load the JSON data.

##5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list. It helps React efficiently update the correct item when the list changes.

##6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition. In this project, the empty stack message is shown when the selected stack has no technologies.

##7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props. The parent can also pass a function as a prop. The child calls that function to send information or trigger an action in the parent.

