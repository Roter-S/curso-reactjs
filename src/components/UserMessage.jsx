const UserMessage = ({ user }) => (
    <h3>{user ? 'Online' : 'Offline'}</h3>
)
export default UserMessage