// import React from 'react';
// import AdminLetters from './AdminLetters'
// import Letters from './Letters';
// import Forms from './Forms'; 
// import { auth } from './firebase'; 


// const ProfileMenu = ({ user }) => { 
//   const { email } = user;
//   const isAdmin = email === 'opencommunityplatform@gmail.com';

//   const handleLogOut = async () => {
//     try {
//       await auth.signOut();
//     } catch (error) {
//       console.error('Помилка виходу:', error);
//     }
//   };

//   return (
//     <div className="profile-menu">
//       <ul>
//         <li>Мої звернення</li>
//         <li onClick={handleLogOut}>Вихід</li>
//       </ul>
//       {isAdmin ? <AdminLetters /> : <Letters email={email} />}
//       <Forms /> 
//     </div>
//   );
// };

// export default ProfileMenu;
