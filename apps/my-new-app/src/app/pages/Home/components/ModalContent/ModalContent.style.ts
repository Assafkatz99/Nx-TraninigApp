import styled from "styled-components";

const ModalBaseStyle = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background-color: white;
border-radius: 10px;
padding: 20px;
justify-content: start;
align-items: center;
display: flex;
flex-direction: column;
gap: 30px;
width: 40%;
`

export const CreateEditModalStyle = styled(ModalBaseStyle)`
min-height: 40vh;
height:fit-content;
`

export const DeleteModalStyle = styled(ModalBaseStyle)`
min-height: 50px;
height:fit-content;
`
