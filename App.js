const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am H1 Tag"),
    React.createElement("h2", {}, "I am H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 Tag"),
    React.createElement("h2", {}, "I am H2 Tag",[
        React.createElement(
            'p',
            {
                id:'title'
            },
            "I am a Paragraph"
        )
    ]),
  ]),
]);

// JSX

const heading = React.createElement(
  "h1",
  { className: "heading", id: "h1" },
  "Hello World From React",
);


const root = ReactDOM.createRoot(document.getElementById("header"));

root.render(parent); // replace everthing from DOM not appended
