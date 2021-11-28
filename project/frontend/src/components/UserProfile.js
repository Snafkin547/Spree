export default function UserProfile(props) {
    const {
        firstName,
        lastName,
        email
    } = props;

    return (
        <div>
            <h3>My Info</h3>
            <div>{firstName}</div>
            <div>{lastName}</div>
            <div>{email}</div>
        </div>
    );
}