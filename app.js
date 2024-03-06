/*<div id="parent">
    <div id="child">
        <h1>Hello, iam parent</h1>
        <h2>hii, i am children</h2>
    </div>
    <div id="child">
        <h1>Hello, iam parent</h1>
        <h2>hii, i am children</h2>
    </div>
</div>



*/
const parent = React.createElement("div", { id: "parent" },[
    React.createElement("div", { id: "child1" },[
        React.createElement("h1", {}, "Hello, i am parent"),
        React.createElement("h2", {}, "Hello, i am child")
    ]),
    React.createElement("div", { id: "child1" },[
        React.createElement("h1", {}, "Hello, i am parent"),
        React.createElement("h2", {}, "Hello, i am child")
    ]
)
]);

//const h1 = React.createElement("h1", { id: "heading" }, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
