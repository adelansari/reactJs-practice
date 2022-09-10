ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));
// ReactDOM.render(<p>Hi, it's Dark!</p>, document.querySelector("#root"))
ReactDOM.render(
  <ul>
    <li>List#1</li>
    <li>List#2</li>
  </ul>,
  document.getElementById("root")
);


// in Js
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)


// JSX
const element = <h1 className="header">This is JSX</h1>
console.log(element)

/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {className: "header", children: "This is JSX"}, 
    _owner: null, 
    _store: {}
}
 */
ReactDOM.render(element, document.getElementById("root"))


ReactDOM.render(
  <div>
      <h1 className="header">This is JSX</h1>
      <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
)

// I can save a whole collection of jsx as variable

const page = (
  <div>
      <h1 className="header">This is JSX</h1>
      <p>This is a paragraph</p>
  </div>
)

ReactDOM.render(
  page,
  document.getElementById("root")
)