import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { theme } from './Theme';

const TeamMembersHeader = styled.h1`
    font-size: 2.5rem;
    font-family: ${theme.fonts.josefinSans};
    text-transform: uppercase;
    margin-top: 2.5rem;
`;

const TeamMembers = props => {
    return (
        <div className='team-members'>
            {props.children}
            <TeamMembersHeader>Team Members</TeamMembersHeader>
        </div>
    );
}

export default TeamMembers;