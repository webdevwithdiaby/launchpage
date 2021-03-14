import React, {useState,useEffect} from 'react'
import data from '../CookingWithReact/data';

function App() {
    const [state,setState] = useState({
        isLoading: true,
        users:[],
        error:null
    });
    const {error,isLoading,users} = state;

    useEffect( ()=> {
        fetchUsers();
        
    }, []);

    const fetchUsers = () => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data =>
        setState(prevState => ({...prevState, users:data, isLoading: false}))
      )
      .catch(error => setState(prev => ({...prev, error, isLoading: false})));
    }

    return (
        <React.Fragment>
        <h1>Random User</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.map(user => {
            const { username, name, email } = user;
            return (
              <div key={username}>
                <p>Name: {name}</p>
                <p>Email Address: {email}</p>
                <hr />
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    )
}

export default App
