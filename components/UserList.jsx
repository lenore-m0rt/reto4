import React from 'react';
import { useSelector } from 'react-redux';

const UserList = () => {
  const users = useSelector(state => state.usersData.users);

  return (
    <div className='col-span-1 relative lg:h-[70vh] h-[50vh] overflow-y-auto h-screen'>
      <h2 className='font-bold text-primary-content text-lg mb-8 mt-4'>Usuarios registrados:</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index} className='w-2/4 mb-4'>
              <strong>Nombre: </strong>{user.firstName} {user.lastName}<br />
              <strong>Email: </strong>{user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-gray-600 text-sm'>No hay usuarios registrados</p>
      )}
    </div>
  );
};

export default UserList;