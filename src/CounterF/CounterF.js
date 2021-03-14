import React, {useState} from 'react'

const CounterF = props => {
   const [state,setState] = useState(
       {
           count: props.initialCount,
           user: 'Diabysoft'
       }
   );

   const count = state.count;
   const user = state.user;
   
   const changeCount = (amount) => {
       setState(
           prevState => {
               return {...prevState,count: prevState.count + amount,user: amount > 0? 'Increment' : 'Decrement'}
           }
       );
       
   }

    return (
        <div>
            <h1>{user} </h1>
            <button onClick={changeCount.bind(this,-1)} >-</button>
            <span> {count} </span>
            <button onClick={changeCount.bind(this,1)} >+</button>
        </div>
    )
}

export default CounterF
