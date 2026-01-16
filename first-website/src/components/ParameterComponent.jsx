export default function ParameterComponent( {itemOne = "default first item"} ) {//always start component names with CAPITAL LETTER
    //keep components simple, they must always return a single output
    return (
        <ul>
            <li>{itemOne}</li>
            <li>The next item</li>
        </ul>
        
    );
}