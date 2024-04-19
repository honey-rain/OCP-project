import React from 'react';
import AdminLetters from './AdminLetters'
import Letters from './Letters';
import Forms from './Forms'; 
import LogOut from './LogOut';


const CabinetContent = ({user}) => { 
  const { displayName, email } = user
  const isAdmin = email === 'opencommunityplatform@gmail.com'
  localStorage.removeItem('lettersArray')
  
  return (
    <div>
      <h2>Вміст кабінету</h2>
      {displayName}
      <LogOut />
      { isAdmin ? <AdminLetters /> : <Letters email={email} /> }
      <Forms /> 

    </div>
  );
};

export default CabinetContent;
