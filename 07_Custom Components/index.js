import React from "react";
import ReactDOM from "react-dom";

// creating custom component

function WhyTho() {
    return (
        <div>
            <header>
                <nav>
                    <img src="./react-logo.png" width="40px" />
                </nav>
            </header>

            <h1>Why I am excited to learn react:</h1>
            <ol>
                <li>To build my own portfolio.</li>
                <li>Create web and mobile applications and flex.</li>
                <li>I'm more likely to get a job as a developer.</li>
            </ol>
            <footer>
                <small>© 2022 Adel Ansari. All rights reserved.</small>
            </footer>
        </div>
    );
}

ReactDOM.render(<WhyTho />, document.getElementById("root"));


// Creating Parent/Child Components

function MyHeader() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function MyText() {
    return (
        <div><h1>Why I am excited to learn react:</h1>
            <ol>
                <li>To build my own portfolio.</li>
                <li>Create web and mobile applications and flex.</li>
                <li>I'm more likely to get a job as a developer.</li>
                <li>Testing and testing</li>
            </ol>
        </div>
    )
}

function MyFooter() {
    return (
        <footer>
            <small>© 2022 Adel Ansari. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <MyHeader />
            <MyText />
            <MyFooter />
        </div>
    );
}

ReactDOM.render(<Page />, document.getElementById("root"));

