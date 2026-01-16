//A component to take it text and an array and prints out a subheading with the text and then the elements of array as bullet points

export default function PrintArray( {text = "Title", array} ) {
    return (
        <>
            <h3>{text}</h3>
            <ul>
                {array.map(item => {return <li>{"Lap "} {item[0]} {": "} {item[1]} {"s"}</li>;})}
            </ul>
        </>
    )
}