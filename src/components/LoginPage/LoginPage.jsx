import { useDispatch } from "react-redux";
import { Button, Form, Input, Label, Title } from "./LoginPage.styled";
import { logIn } from "redux/auth/auth.operations";
import Box from "components/Box/Box";

const { useState } = require("react");

const initialState = {
    email: '',
    password: '',
  };

  const LoginPage = () => {
    const [value, setValue] = useState(initialState)
    // console.log(value, 'value')
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const {name, value} = e.target;
        setValue(pS => ({...pS, [name]: value}))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(logIn(value))
    }
    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Title>LOG IN</Title>
            <Box display='flex' flexDirection='column'alignItems='flex-start' mb={16}>
            <Label>
                <label>
                Email:
                    <Input style={{marginLeft: 44}} placeholder='Email'  type="email" value={value.email} name="email" onChange={(e) => handleChange(e)}/>
                </label>
            </Label>
            <Label>
                <label>
                Password:
                    <Input style={{marginLeft: 16}} placeholder='Password'  type="password" value={value.password} name="password" onChange={(e) => handleChange(e)}/>
                </label>
            </Label>
            </Box>
            <Button type="submit">OK</Button>
        </Form>
        </>
    )
  }

  export default LoginPage;