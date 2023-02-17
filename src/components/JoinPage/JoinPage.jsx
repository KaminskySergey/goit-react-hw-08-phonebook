
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth.operations";

// const initialState = {
//     name: '',
//     email: '',
//     password: '',
//   };

const JoinPage = () => {
    // const [values, setValue] = useState(initialState)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        const {name, value} = e.target
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'email': 
            setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e) => {
        console.log(e.target.elements.name)
        e.preventDefault()
        dispatch(register({name, email, password}))
        
        reset()
    }

    const reset = () => {
        setName('')
        setEmail('')
        setPassword('')
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Join Page</h2>
            <div>
                <label htmlFor='1'>
                    <input type="name" value={name} name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" onChange={(e) => handleChange(e)}/>
                </label>
            </div>
            <div>
                <label htmlFor='2'>
                    <input type="email" value={email} name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={(e) => handleChange(e)}/>
                </label>
            </div>
            <div>
                <label htmlFor='3'>
                    <input type="password" value={password} name="password" onChange={(e) => handleChange(e)}/>
                </label>
            </div>
            
            <button type="submit">SUBMIT</button>
        </form>
        </>
    )
}



export default JoinPage;