export default function UserProfile({ user, editCallback }) {
  return (
    <div>
      <div>
        <h2>First Name:</h2> {user.firstName}
      </div>
      <div>
        <h2>Last Name:</h2> {user.lastName}
      </div>
      <div>
        <h2>Email:</h2> {user.email}
      </div>
      <div>
        <button onClick={editCallback}>Edit</button>
      </div>
    </div>
  );
}
