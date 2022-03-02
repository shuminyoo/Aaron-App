import styled from "styled-components";
//styled should match with the others



const Container = styled.div`
    background-image: url("https://images.pexels.com/photos/3671142/pexels-photo-3671142.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
    width: auto;
    height: 100vh;
    // background-color: #cdf7f3;
    display: flex; 
    flex-directionn: row;
`;

const LeftWrapper = styled.div` 
    // background-image: url("https://images.pexels.com/photos/3671142/pexels-photo-3671142.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
    width: 50%;
    // background-color: blue;
    padding-right: 10px;
`;

const TheLeft = styled.h1`
    margin-top:130px;
    font-size:100px;
    color: white;
    text-align: center;

`;

const RightWrapper = styled.div`
    z-index: 0;
    width: 50%;
    display:flex;
    flex-direction:column;
    // background-color: grey;
    // opacity: 0.2;
`;
const TheRight = styled.h1`
    margin-top: 200px;
    font-size: 50px;
    color: white;
    text-align: center;

`;


const LabelWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
`;
const LabelforLogin = styled.label`
    font-size: 30px;
    font-weight: bold;
    color: white;
    // text-align:center;
    // width: 100%;
    // height: 100%;

`;

const UsernameInput = styled.input`
    margin-left: 15px;
    // width: 60%;
    // height: 2.5%;

`;
const LabelforPassword= styled.label`
    margin-top: 30px;
    font-size: 30px;
    font-weight: bold;
    color: white;

    // text-align:center;
    // width: 100%;
    // height: 100%;
`;

const PasswordInput = styled.input`
    margin-left: 15px;
    margin-top: 30px;
    // width: 60%;
    // height: 2.5%;
`;

const LoginButton = styled.button`
    font-size: 15px;
    color: white;
    background-color: navy;
    border: 1px solid white;
    border-radius: 5%;
    width: 25%;
    margin-top: 30px;
`;

function LoginPage() {

    return ( 
        <Container>
            <LeftWrapper>
            <TheLeft>Connecting rail to you.</TheLeft> 
            </LeftWrapper>
            
            <RightWrapper>

                <TheRight>Welcome back.</TheRight> 

                <LabelWrapper>
                 <LabelforLogin for="user">Email Address</LabelforLogin>
                 <UsernameInput type="text" id="user"></UsernameInput>
                </LabelWrapper>
            
                <LabelWrapper>
                 <LabelforPassword for="sec">Password</LabelforPassword>
                 <PasswordInput type="password" id="sec"></PasswordInput>
                </LabelWrapper>

                <LabelWrapper>
                 <LoginButton>Log In</LoginButton>
                </LabelWrapper>
            
            </RightWrapper>

        </Container>
    )
}

export default LoginPage; //Basic Structure