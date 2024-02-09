import { useState } from 'react';
import './App.css';
import EditUserProfile from './components/EditUserProfile';
import UserProfile from './components/UserProfile';

function App() {
  const [editMode, setEditMode] = useState(true);
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('john.doe@techfabric.com');
  const savedData = { firstName, lastName, email };

  function handleEditComplete(result) {
    if (result != null) {
      setFirstName(result.firstName);
      setLastName(result.lastName);
      setEmail(result.email);
    }
    setEditMode(false);
  }

  return (
    <div className='container'>
      <div className='App'>
        {editMode ? (
          <>
            <h1>Edit User Profile</h1>
            <EditUserProfile
              user={savedData}
              completeCallback={handleEditComplete}
            />
          </>
        ) : (
          <>
            <h1>View User Profile</h1>
            <UserProfile
              user={savedData}
              editCallback={() => setEditMode(true)}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
