import styled from "styled-components";
//styled should match with the others



const Container = styled.div`
    height: 100vh;
    background-color: #9abee6;
    display: flex; 
    flex-directionn: row;
    
`;
const TheLeft = styled.h1`
    font-size: 100px;
    color: white;
    text-align: center;
    width: 50%;
    background-color: #d4193f;
`;

const TheRight = styled.h1`
    font-size: 100px;
    color: white;
    text-align: center;
    width: 50%;
    background-color: #3946d4;
`;
function LoginPage() {
    return ( 
        <Container>
            <TheLeft>LEFT</TheLeft> 
            <TheRight>RIGHT</TheRight> 
        </Container>
    )
}

export default LoginPage; //Basic Structure