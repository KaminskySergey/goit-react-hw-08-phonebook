import styled from "styled-components";

export const Form = styled.form`
border: 2px solid red;
border-radius: 5px;
padding: 20px;
width: 500px;
text-align: center;
display: flex;
flex-direction: column;
background-color: rgba(0, 0, 0, 0.7);
`

export const Title = styled.h3`
color: gold;
display: inline;
`
export const Label = styled.label`
color: white;
&:not(:first-child){
    margin-top: 8px;
}
`
export const Input = styled.input`
width: 300px;
height: 32px;
border: none;
border-radius: 16px;
padding: 16px 4px;
padding-left: 24px;
transition: all 250ms;
background-color: rgba(0, 125, 215, 0.2);
color: gold;
&:hover, &:focus {
    outline: 3px solid gold;
    transform: scale(0.9);
}
`
export const Button = styled.button`
width: 128px;
padding: 8px;
margin-left: auto;
margin-right: auto;
border-radius: 16px;
cursor: pointer;
transition: all 250ms;
&:hover, &:focus {
    background-color: blue;
    color: wheat;
}
`