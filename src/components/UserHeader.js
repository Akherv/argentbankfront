import styled from "styled-components";

const UserHeaderContainer = styled.div`
color: #fff;
margin-bottom: 2rem;
  }
`;

const EditButton = styled.button`
color: #fff;
margin-bottom: 2rem;
border-color: #00bc77;
background-color: #00bc77;
color: #fff;
font-weight: bold;
padding: 10px;
  }
`;

function UserHeader() {
  return (
    <UserHeaderContainer>
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <EditButton>Edit Name</EditButton>
    </UserHeaderContainer>
  );
}
export default UserHeader;
