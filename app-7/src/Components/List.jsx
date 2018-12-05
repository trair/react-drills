// import React from 'react'
// import Todo from '../Components/Todo'

// export default function List(props) {
//     let list = props.tasks.map((e, i) => (
//         <Todo key={i} list = {e} />
//         ))
//     return(
//         <div>
//             {list}
//         </div>
//     )
// }


// Round 2
import React from 'react'
import Todo from './Todo'

// Display tasks inside of [task] array

export default function List(props) {
    return (
        <div>
            {props.list.map((e, i) => (
                <Todo 
                    key={i} 
                    el={e}
                />
            ))}
        </div>
    )
}