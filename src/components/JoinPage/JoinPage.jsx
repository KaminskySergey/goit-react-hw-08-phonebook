import { useState } from "react";

const initialState = {
    email: '',
    first_name: '',
    last_name: '',
    password: '',
  };

const JoinPage = () => {
    const [value, setValue] = useState(initialState)

    const handleChange = (e) => {
        const {name, value} = e.target
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
                    <input type="first_name" value={value.first_name} name="first_name" onChange={(e) => handleChange(e)}/>
                </label>
            </div>
            <div>
                <label>
                    <input type="last_name" value={value.last_name} name="last_name" onChange={(e) => handleChange(e)}/>
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



export default JoinPage;