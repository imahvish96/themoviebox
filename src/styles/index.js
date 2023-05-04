import styled from "@emotion/styled";

const Menu = styled.header`
  width: 100%;
  color: #fff;
  font-size: 20px;
  padding: 5px 0;
  position:absolute;
  z-index: 2;
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
  gap: 1px;
  width:100%;
  box-sizing: border-box;
  padding: 10px;
  justify-content: space-between;
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

const MovieTitle = styled.h1`
  margin: 0px;
  padding:0px;
  color: #fff;
`;

const MovieInfo = styled.div`
  color: #fff;
  margin-top: 10px;
`;

const MovieOverview = styled.div`
  margin: 30px 0 0;
  & h3 {
    color: #fff;
    margin: 0px 0 10px 0;
  }
  & p {
    color: #fff;
    margin: 0px;
  }
`;

const MovieCast = styled.div`
  margin: 30px 0 0 0;
  & h3 {
    color: #fff;
    margin: 0px;
  }
`;

const HeroContainer = styled.div`
  width: 50%;
  color:#fff;
  text-align: center;
  font-size: 24px;
`;

const CastName = styled.div`
  font-size:0.8rem;
  color:#fff;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
  margin:5px 0;
`
const CastChracter = styled.div`
  font-size:0.8rem;
  color: #8a99a2;
  overflow: hidden;
  text-overflow: ellipsis;
`

export { 
  Menu,
  Grid,
  LogoHolder,
  SignIn,
  Search,
  Spinner,
  Container,
  MovieTitle,
  MovieInfo,
  MovieOverview,
  MovieCast,
  HeroContainer,
  CastName,
  CastChracter
};
