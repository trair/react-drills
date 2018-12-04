import React from 'react'

export default function Todo(props) {
    //Display the tasks FROM the App Component in a list
    return (
        <div>
            {props.list.map((el, i) => <h2 key={i}>{el}</h2>)}
        </div>
    )

}