import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from './TeamMembers';
import Form from './Form';
import TeamMembersData from './TeamMembersData';
import TeamMemberCard from './TeamMemberCard';

function App() {

  const [team, setTeam] = useState(TeamMembersData);

  const addMember = member => {
    setTeam([...team, member]);
  }

  return (
    <div className="App">

      <Form submit={addMember} />

      <TeamMembers>
        {team.map(person => 
            <TeamMemberCard key={person.id} name={person.name} email={person.email} role={person.role} />
        )}
      </TeamMembers>

      
    </div>
  );
}

export default App;
