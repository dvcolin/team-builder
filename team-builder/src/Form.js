import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { theme } from './Theme';

const FormContainer = styled.div`
    width: 60%;
    background: ${theme.colors.lightBlue};
    margin: 0 auto;
    border-radius: 5px;
`;

const FormContent = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const FormTitle = styled.h2`
    font-size: 1.8rem;
    font-family: ${theme.fonts.josefinSans};
    padding-top: 1.5rem;
`;

const FormLabel = styled.label`
    font-size: 1.4rem;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin-left: 2.5rem;
    font-family: ${theme.fonts.josefinSans};
`;

const SubmitButton = styled.button`
    width: 20%;
    background: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1.5rem;
    text-transform: uppercase;
    margin: 1.5rem auto;
    font-size: 1.2rem;
`;

const Form = props => {

    const [user, setUser] = useState({ name: '', email: '', role: '' });

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
        console.log(user);
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Submitted', user);
    }
    return(
        <FormContainer>
            <FormContent onSubmit={handleSubmit}>
                <FormTitle>Sign Up</FormTitle>

                <div className='form-field'>
                    <FormLabel for='name'>Name
                        <input onChange={handleChange} type ='text' name='name' value={user.name}></input>
                    </FormLabel>
                </div>
                <div className='form-field'>
                    <FormLabel for='email'>Email
                        <input onChange={handleChange} type ='email' name='email' value={user.email}></input>
                    </FormLabel>
                </div>
                <div className='form-field'>
                    <FormLabel for='role'>Role
                        <input onChange={handleChange} type ='text' name='role' value={user.role}></input>
                    </FormLabel>
                </div>
                <SubmitButton>Submit</SubmitButton>
            </FormContent>
        </FormContainer>
    );
}

export default Form;