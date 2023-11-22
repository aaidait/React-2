import React from 'react';
import Data from './components/index';

const DATA = [
  {
    id: 1,
    title: "Components",
    body: "React components are small, reusable pieces of code that return a React element to be rendered to the page. "
  },
  {
    id: 2,
    title: "props",
    body: "props are inputs to a React component. They are data passed down from a parent component to a child component. "
  },
  {
    id: 3,
    title: "props.children",
    body: "props.children is available on every component. It contains the content between the opening and closing tags of a component. "
  },
  {
    id: 4,
    title: "keys",
    body: "A “key” is a special string attribute you need to include when creating arrays of elements. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside an array to give the elements a stable identity."
  },
  {
    id: 5,
    title: "JSX",
    body: "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”. "
  },
];

export default function App() {
  return (
    <div className="app">
      {DATA.map((data) => (
        <Data key={data.id} posts={data} />
      ))}
    </div>
  );}

