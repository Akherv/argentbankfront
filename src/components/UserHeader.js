import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

function UserHeader() {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.info);

  return (
    <UserHeaderContainer>
      <h1>
        Welcome back
        <br />
        {info.firstName} {info.lastName}!
      </h1>
      <EditButton>Edit Name</EditButton>
    </UserHeaderContainer>
  );
}
export default UserHeader;

const UserHeaderContainer = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`;

const EditButton = styled.button`
  color: #fff;
  margin-bottom: 2rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;
