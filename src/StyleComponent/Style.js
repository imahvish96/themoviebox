import styled from "@emotion/styled";

const Menu = styled.header`
  width: 100%;
  color: #fff;
  font-size: 20px;
  padding: 5px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 78.6% 1% 13% 5%;
  grid-gap: 0.5%;
`;

const LogoHolder = styled.div`
  width: 13%;
  text-align: center;
  padding: 9px 1%;
  color: #fff;
`;

const SignIn = styled.button`
  background: #e428a1;
  border: none;
  outline: none;
  color: #fff;
  padding: 5px;
  border-radius: 30px;
  width: 89%;
`;

const Search = styled.input`
  width: 86%;
  color: #fff;
  font-size: 14px;
  background: none;
  outline: none;
  border: 1px solid white;
  border-radius: 30px;
  padding: 13px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width:100%;
  box-sizing: border-box;
  padding: 10px;
  justify-content: center;
`;

const Spinner = styled.div`
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #16d47b; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { Menu, Grid, LogoHolder, SignIn, Search, Spinner, Container };
