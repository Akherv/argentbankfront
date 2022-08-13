import AccountItem from "../components/AccountsItem";

function Accounts() {
  return (
    <>
      <AccountItem
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available"
      />
      <AccountItem
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available"
      />
      <AccountItem
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current"
      />
    </>
  );
}
export default Accounts;
