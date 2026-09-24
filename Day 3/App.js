import React from "react"

import ReactDOM from "react-dom/client"

const headind = (
    <div>
        <h1 className="red"> Hello World</h1>
        <p> I am Paragraph tag</p>
    </div>
);

const body = (
    <div>
        <h4> I am body</h4>
        <p>I am para inside body</p>
    </div>
);

const layout = (
    <div>
        {headind}
        {body}
    </div>
)



const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(layout)