import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import { updateInfoUser } from "../slices/infoSlice";

function UserHeader() {
  //Initialize the useDispatch hook for updating the store(info state)
  //Initialize the useSelector hook for getting the data from the store(info state)
  const dispatch = useDispatch();
  const info = useSelector((state) => state.info);

  // Manage the local state for the user datas
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  // Manage the local state for toggling the form
  const [editStatus, setEditStatus] = useState(false);

  //Handle the form submission & close the form & dispatch the updateInfoUser action
  const handleSubmit = (e) => {
    e.preventDefault();
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
    display: flex;
    justify-content: center;

    @media screen and (max-width: 400px) {
      flex-direction: column;
      align-items: center;
    }
  }
  & input {
    width: 200px;
    height: 2rem;
    margin: 10px;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
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
  margin: 10px;
`;

const CancelButton = styled.button`
  width: 100px;
  padding: 10px;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  margin: 10px;
`;
