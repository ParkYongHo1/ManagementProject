import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function Main(props) {
    const [content, setContent] = useState({
        name : '',
        email : '',
        phone : ''
    });

    const [divBox , setDivBox] = useState([]);
    const changeInput = (e) => {
        const { name, value} = e.target; 
        setContent({...content , [name]:value}); // name -> e.target.name , value -> e.target.value
        console.log(content);
    }
    const onSubmitInput =  (e) => {
        e.preventDefault();
        setDivBox([...divBox, content]);
        setContent({
                name : '',
                email : '',
                phone : ''
            })
    }
  
    return (
        <>
            <form onSubmit={onSubmitInput}>
                <div>
                    <input type='text' onChange={changeInput} name="name" value={content.name} placeholder='name'/>
                    <input type='text' onChange={changeInput} name="email" value={content.email} placeholder='email'/>
                    <input type='text' onChange={changeInput} name="phone" value={content.phone} placeholder='phone'/>
                </div>
                <button type='submit'> submit</button>
            </form>
            <div>
                {divBox.map((content,index)=>{
                    return(
                        <div key={index}>
                            <span>{content.name}</span>
                            <span>{content.email}</span>
                            <span>{content.phone}</span>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Main;
