import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { theme } from './Theme';
import TeamMembersData from './TeamMembersData';

const TeamMember = styled.div`
    width: 60%;
    margin: 2.5rem auto;
    display: flex;
    justify-content: space-around;
    background: ${theme.colors.lightBlue};
    padding: 2.5rem;
    border-radius: 5px;

`;

const TeamMemberName = styled.h2`
    font-size: 2rem;
`;

const TeamMemberInfo = styled.div`
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
`;

const TeamMemberItem = styled.div`
    margin: 1rem 0;
`;

const EditButton = styled.button`
    background: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1.5rem;
    text-transform: uppercase;
    margin: 1.5rem auto;
    font-size: 1.2rem;
`;

const TeamMemberCard = props => {

    const [user, setUser] = useState({props});

    const [editing, setEditing] = useState(false);

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
        console.log(user);
    }

    return(
        <TeamMember>
            <TeamMemberName>{props.name}</TeamMemberName>
            <TeamMemberInfo>
                <TeamMemberItem>{props.email}</TeamMemberItem>
                <TeamMemberItem>{props.role}</TeamMemberItem>
                <EditButton>Edit</EditButton>
            </TeamMemberInfo>
            
        </TeamMember>
    )
}

export default TeamMemberCard;