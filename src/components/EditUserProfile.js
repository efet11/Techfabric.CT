import { useState } from 'react';

export default function EditUserProfile({ user, completeCallback = () => {} }) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);

  function handleCancelClicked() {
    completeCallback(null);
  }

  function handleSaveClicked() {
    completeCallback({ firstName, lastName, email });
  }

  return (
    <>
      <div>
        <h2>First Name:</h2>
        <input
          type='text'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <h2>Last Name:</h2>
        <input
          type='text'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <h2>Email:</h2>
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button data-cy='save' onClick={handleSaveClicked}>
          Save
        </button>
        <button data-cy='cancel' onClick={handleCancelClicked}>
          Cancel
        </button>
      </div>
    </>
  );
}
