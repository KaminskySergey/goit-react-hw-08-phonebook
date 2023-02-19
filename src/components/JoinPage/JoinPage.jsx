
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Input, Label, Title } from "./JoinPage.styled";
import { register } from "redux/auth/auth.operations";
import Box from "components/Box/Box";


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
        // console.log(e.target.elements.name)
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
        <Form onSubmit={handleSubmit}>
            <Title style={{textAlign: "center"}}>REGISTRATION</Title>
            <Box display='flex' flexDirection='column'alignItems='flex-start' mb={16}>
            
                <Label>
                <label htmlFor='1'>
                Name:
                    <Input style={{marginLeft: 41}} placeholder='Name' type="name" value={name} name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" onChange={(e) => handleChange(e)}/>
                </label>
                </Label>
            
            
                <Label>
                <label htmlFor='2'>
                Email:
                    <Input style={{marginLeft: 44}} placeholder='Email'  type="email" value={email} name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={(e) => handleChange(e)}/>
                </label>
                </Label>
            
            
                <Label>
                <label htmlFor='3'>
                Password:
                    <Input style={{marginLeft: 16}} placeholder='Password'  type="password" value={password} name="password" onChange={(e) => handleChange(e)}/>
                </label>
                </Label>
            
            </Box>
            
            <Button type="submit">OK</Button>
        </Form>
        </>
    )
}



export default JoinPage;