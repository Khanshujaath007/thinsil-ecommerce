import styled from "styled-components";

/*
Announcement Component-> to make deal announcement 
on top of any page above navbar
*/
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: wheat;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

function Announcement() {
  return <Container>Super Deal!! Free Shipping on Orders Over 89$</Container>;
}

export default Announcement;
