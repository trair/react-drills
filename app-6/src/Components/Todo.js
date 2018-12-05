// import React from 'react'

// export default function Todo(props) {
//     //Display the tasks FROM the App Component in a list
//     return (
//         <div>
//             {props.list.map((el, i) => <h2 key={i}>{el}</h2>)}
//         </div>
//     )

// }

// Round 2
import React from 'react'

export default function Todo(props) {
    return(
        <div>
            {props.tasks.map((e, i) => (<h2 key={i}>{e}</h2>))}
        </div>
    )
}