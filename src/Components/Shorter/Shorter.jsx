import React, { useState } from 'react';
import styled from 'styled-components';
import { Arrow90degRight } from 'styled-icons/bootstrap'
import { Axios, AxiosGet, AxiosPost } from '../../utilities/Axios/Axios';

const Shorter = () => {

  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [modal, setModalState] = useState(false);

  const [data, setData] = React.useState({
    message: 'Data yüklendi',
    status: false
  });

  const linkSendHandler = () => {

    AxiosPost("/", {
      url: text
    }).then(
      res => {
        setUrl(res.data.code);
        console.log(res.data.code);
        setText("");
      }
    )
  }


  return (
    <PaddingBox>
      <div>
        <h1>Shortener</h1>
        <pre>One link. One Click.<Arrow90degRight /></pre>
        <CustomInput >
          <input
            value={text}
            onChange={(e) => {
              setText(e.currentTarget.value);
            }} type="text" placeholder="Enter URL"></input>
        </CustomInput>
        <Button onClick={linkSendHandler}>Shorten</Button>
      </div>
    </PaddingBox>)
};

const Button = styled.button`
  border:none;
  outline:none;
  background: var(--primary);
  width: 540px;
  padding:20px;
  border-radius:180px;
  margin-top:40px;
  color:white;
  font-size:25px;
`;
const CustomInput = styled.div`
  background:white;
  padding:20px 20px;
  width: 500px;
  border-radius:180px;
  input{
    font-size:20px;
    width: 100%;
    border:none;
    outline:none;
    background:transparent;

  }
`

const PaddingBox = styled.div`
  padding-left:100px;
  padding-right:100px;

    h1{
      font-size:40px;
      color:white;
      }
    pre{
      color:white;
      font-size:20px;
      width: 500px;
      height:100px;

      position:relative;
      white-space:pre-wrap;
      svg{
        margin-top:20px;
        width:60px;
        margin-left:10px;
        transform:rotate(90deg)
      }
    }

`


export default Shorter;
