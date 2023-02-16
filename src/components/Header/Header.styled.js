import styled from "styled-components";

export const HeaderCont = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 64px;
background-color: black;
padding: 0 16px;
align-items: center;
`

export const List = styled.ul`
display: flex;
margin-left: auto;
li:not(:first-child){
    margin-left: 16px;
}
`