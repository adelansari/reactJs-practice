import React from "react";
import ReactDOM from "react-dom";
import MyHeader from "./MyHeader";
import MyText from "./MyText";

// Creating Parent/Child Components

function MyFooter() {
    return (
        <footer className="footer">
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

