// import React from 'react'

// export default function Image(props) {
//     return (
//       <img src={props.url} alt="100 Cat"></img>
//     )
//   }

// Second Try
import React from 'react'

export default function Image(props) {
  return(
    <div>
      <img src={props.url} alt={props.alt} />
    </div>
  )
}