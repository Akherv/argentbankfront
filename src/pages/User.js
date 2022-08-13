import Accounts from "../components/Accounts";
import UserHeader from "../components/UserHeader";

function User() {
  return (
    <main className="main bg-dark">
      <UserHeader />
      <h2 className="sr-only">Accounts</h2>
      <Accounts />
    </main>
  );
}
export default User;
