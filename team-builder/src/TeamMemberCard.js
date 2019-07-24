import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { theme } from './Theme';

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

const TeamMemberCard = props => {
    return(
        <TeamMember>
            <TeamMemberName>{props.name}</TeamMemberName>
            <TeamMemberInfo>
                <TeamMemberItem>{props.email}</TeamMemberItem>
                <TeamMemberItem>{props.role}</TeamMemberItem>
            </TeamMemberInfo>
        </TeamMember>
    )
}

export default TeamMemberCard;