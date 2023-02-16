const { useState } = require("react");

const initialState = {
    email: '',
    password: '',
  };

  const LoginPage = () => {
    const [value, setValue] = useState(initialState)
  
    const handleChange = (e) => {
        const {name, value} = e.target;
        setValue(pS => ({...pS, [name]: value}))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Join Page</h2>
            <div>
                <label>
                    <input type="email" value={value.email} name="email" onChange={(e) => handleChange(e)}/>
                </label>
            </div>
            <div>
                <label>
                    <input type="password" value={value.password} name="password" onChange={(e) => handleChange(e)}/>
                </label>
            </div>
            
            <button type="submit">SUBMIT</button>
        </form>
        </>
    )
  }

  export default LoginPage;