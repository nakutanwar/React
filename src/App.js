import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

// chunking
// code splliting
// dynamic bundling
// lazy loading
// on demand loading
// dynamic import


// const parent = React.createElement("div", { id: "parent", key:"parent" }, [
//   React.createElement("div", { id: "child1", key:'sub-parent' }, [
//     React.createElement("h1", {key:"h1"}, "Namste React"),
//     React.createElement("h2", {key:"h2"}, "I am H2 Tag"),
//   ]),
//   React.createElement("div", { id: "child2", key:"ch1" }, [
//     React.createElement("h1", {key:'ch2'}, "I am H1 Tag"),
//     React.createElement("h2", {key:'ch3'}, [
//       "I am H2 Tag",
//       React.createElement(
//         "p",
//         {
//           id: "title",
//           key:'p'
//         },
//         "I am a Paragraph",
//       ),
//     ]),
//   ]),
// ]);

// // JSX

// const heading = React.createElement(
//   "h1",
//   { className: "heading", id: "h1",key:'h1' },
//   "Hello World From React",
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render([parent,heading]); // replace everthing from DOM not appended

// Old Way Not A Good Way

// const heading = React.createElement(
//   "h1",
//   { id: "heading", key: "h1" },
//   "Hello React 🚀",
// );

// JSX - Not HTML in Javascript
// JSX =  is HTML/XML Like Syntax

// console.log(heading);
// JSX (transpilled before it reaches the JS - PARCEL - babel)

// JSX => Babel transpiles it to  React.createElement => ReactElement-JS Object => HTMLElement(render)

// console.log(jsxheading);

// React Component
// 1 class based Conponent - OLD Way  Outdated
// 2 Functional Component - NEW Way

// React Functional Component  is Just a js Function which is return a react element

// a function which is return  a jsx is a functional component

// const fn = () => true;

// const fn2 = () => {
//   true;
// };

// React Component
// const HeadingComponent = () => {
//   return(
//     <div id="container">
//     <h1>Namste React Componet 🚀 Element</h1>
//   </div>
//   )}

// const TitleComponent = () => {
//   return(
//     <div id="container">
//     <h1>Namste React Componet 🚀 Title Element</h1>
//   </div>
//   )}
// React Component
// const number = 100000;
// This is Component Composition
// const HeadingComponent1 = () => (
//     <div id="container">
//       <h2>{number}</h2>
//       <h3>{100 + 300 }</h3>
//       {heading}
//       {console.log("I am From JSX 🤣")
//       }
//       {/* These 3 are the same things */}
//       <TitleComponent />
//       <TitleComponent></TitleComponent>
//       {TitleComponent()}
//       <h1 className="heading">Namste React Functional Component 🚀🚀</h1>
//     </div>
// )
// React Element

// const title = (
//   <span>React Span Element</span>
// )

// const heading = (
//   <div id="container">
//     <h1 className="h1" tabIndex={1} key={'hello'}>
//       Namste React Using JSX 🚀
//     </h1>
//     {/* Element Composition */}
//     {title}
//     {/* {HeadingComponent1()} */}
//     {/* <HeadingComponent1 /> */}
//   </div>
// );

// Food App Code Start Here

//Container App Component Top Level Component

// Via Destructuring and this called Destructuring on fly
// const RestaurentCard = ({resName,cuisine})=>{

// not using key as id (not acceptable) is less than <<<<<<<< INDEX AS Key <<<< Unique Identifier (best practice)

const AppLayout = () => {
  // console.log(<Body />);
  return (
    <div className="Container">
      {/* //Header
      //Body
      //Footer */}
      <Header />
      <Outlet />
      {/* <Body /> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: '/restaurants/:resId', element:<RestaurantMenu />}
    ],
    errorElement: <Error />,
  }
  // { path: "/about", element: <About /> },
  // { path: "/contact", element: <Contact /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);
// root.render([<AppLayout key={1} />])
root.render(<RouterProvider router={appRouter} />);
