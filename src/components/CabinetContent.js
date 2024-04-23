import React from 'react';
import AdminLetters from './AdminLetters';
import Letters from './Letters';
import Forms from './Forms'; 
import LogOut from './LogOut';

const CabinetContent = ({user}) => { 
  const { displayName, email } = user;
  const isAdmin = email === 'opencommunityplatform@gmail.com';
  localStorage.removeItem('lettersArray');
  
  return (
    <div className="user-info-container"> 
      <h2>Кабінет користувача</h2>
      <div className="user-info">{displayName}</div>
      <LogOut />
      { isAdmin ? <AdminLetters /> : <Letters email={email} /> }
      <Forms /> 
    </div>
  );
};

export default CabinetContent;