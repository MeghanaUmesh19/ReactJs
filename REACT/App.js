{/* <div id="parent">
    <div id="child1">
        <h1>This is h1 tag</h1>
        <h2>This is h2 tag</h2>
    </div>
    <div id="child2">
        <h1>This is h1 tag</h1>
        <h2>This is h2 tag</h2>
    </div>
</div> */}

const parent = React.createElement("div",{id:"parent"}, 
                [React.createElement("div",{id:"child"},[
                    React.createElement("h1",{},"THIS IS H1 TAG"),
                    React.createElement("h2",{},"THIS IS H2 TAG")
                ]),
                
                React.createElement("div",{id:"child"},[
                    React.createElement("h1",{},"THIS IS H1 TAG"),
                    React.createElement("h2",{},"THIS IS H2 TAG")
                ])])    ;    
console.log(parent);


// const heading = React.createElement("h1" , {id:"heading"} , "HEllo World");

        const root = ReactDOM.createRoot(document.getElementById("root"));

//         root.render(heading);

//         console.log(heading)
root.render(parent);