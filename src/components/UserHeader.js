import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import { updateInfoUser } from "../slices/infoSlice";

function UserHeader() {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.info);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  const [editStatus, setEditStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    e.target.reset();
    setEditStatus(!editStatus);
    dispatch(updateInfoUser(user));
  };
  return (
    <UserHeaderContainer>
      <h1>
        Welcome back
        <br />
        {info.firstName} {info.lastName}!
      </h1>

      {editStatus ? (
        <FormStyled onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="firstName"
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              required
            />
            <input
              type="text"
              id="lastName"
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              required
            />
          </div>
          <div>
            <SaveButton type="submit">Save</SaveButton>
            <CancelButton onClick={() => setEditStatus(!editStatus)}>
              Cancel
            </CancelButton>
          </div>
        </FormStyled>
      ) : (
        <EditButton onClick={() => setEditStatus(!editStatus)}>
          Edit Name
        </EditButton>
      )}
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

const FormStyled = styled.form`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  & div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
    justify-items: center;
  }
  & input {
    width: 200px;
    height: 2rem;
  }
`;

const SaveButton = styled.button`
  width: 100px;
  padding: 10px;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  margin: 0 auto;
`;

const CancelButton = styled.button`
  width: 100px;
  padding: 10px;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  margin: 0 auto;
`;
