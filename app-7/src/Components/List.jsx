import React from 'react'
import Todo from '../Components/Todo'

export default function List(props) {
    let list = props.tasks.map((e, i) => (
        <Todo key={i} list = {e} />
        ))
    return(
        <div>
            {list}
        </div>
    )
}