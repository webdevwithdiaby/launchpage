import React, {useState} from 'react'

function FormsApp() {
    const [name,setName] = useState();
    const onNameChange = e => setName(e.target.value);
    return (
        <div>
            <form action="#" className="login-form" onSubmit={()=> alert(name)}>
                <label htmlFor="name">
                    Name: 
                    <input 
                        type="text" 
                        className="login-form__input" 
                        placeholder='Name'
                        onChange={onNameChange.bind(this)}
                        />
                </label>
                <input 
                    type="submit" 
                    className="login-form__btn" 
                    value='Submit'/>
            </form>
        </div>
    )
}

export default FormsApp


const defaultUser = {
    firstName:'Adama',
    lastName:'Diaby',
    email:'adama.diaby5@gmail.com'
};

const App = () => {
    const [user,setUser] = useState(defaultUser);

    const handleUserChange = e => {
        setUser(prevUser => ({...prevUser,[e.target.name]:e.target.value}));
    }
   
    return (
        <div>
            <h1>User Infos</h1>
            <p> {user.firstName} </p>
            <p> {user.lastName} </p>
            <p> {user.email} </p>
          <form>
              <div>
                  <label htmlFor="firstName">First Name</label>
                  <input 
                    type="text" 
                    id='firstName'
                    name='firstName'
                    value={user.firstName}
                    onChange={handleUserChange}
                    />
              </div>
              <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input 
                    type="text"
                    id='lastName'
                    name='lastName'
                    value={user.lastName}
                    onChange={handleUserChange}
                    />
              </div>
              <div>
                  <label htmlFor="email">Email</label>
                  <input type="text" id='email' name='email' value={user.email} onChange={handleUserChange} />
              </div>

              <div>
                  <button type='submit'>Submit</button>
              </div>
          </form>
        </div>
    );
}


