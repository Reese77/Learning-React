
//This is a component that needs to be exported to the main file App.js

export default function SimpleComponent() {//always start component names with CAPITAL LETTER
    //keep components simple, they must always return a single output
    return <h2>First component without parameters</h2>
}


//You can export the function at definition or later on like in this commented out line
//Make sure file name, function name and exported name are all the same
//export default SimpleComponent();