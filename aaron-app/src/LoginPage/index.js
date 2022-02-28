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
`;

const TheLeft = styled.h1`
    margin-top:130px;
    font-size:100px;
    color: white;
    text-align: center;

`;

const RightWrapper = styled.div`
    width: 50%;
    display:flex;
    flex-direction:column;
    // background-color: darkgreen;
`;
const TheRight = styled.h1`
    margin-top: 200px;
    font-size: 50px;
    color: white;
    text-align: center;

`;


const LabelWrapper = styled.div`
    display:flex;
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

    // width: 60%;
    // height: 2.5%;

`;
const LabelforPassword= styled.label`
    font-size: 30px;
    font-weight: bold;
    color: white;

    // text-align:center;
    // width: 100%;
    // height: 100%;
`;

const PasswordInput = styled.input`
    // width: 60%;
    // height: 2.5%;
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
            
            </RightWrapper>

        </Container>
    )
}

export default LoginPage; //Basic Structure