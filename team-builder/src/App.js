import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from './TeamMembers';
import Form from './Form';
import TeamMembersData from './TeamMembersData';
import TeamMemberCard from './TeamMemberCard';

function App() {

  const [members, setMembers] = useState(TeamMembersData);

  return (
    <div className="App">

      <Form />

      <TeamMembers>
        {TeamMembersData.map(person => 
            <TeamMemberCard key={person.id} name={person.name} email={person.email} role={person.role} />
        )}
      </TeamMembers>

      
    </div>
  );
}

export default App;
