import styled from "styled-components"; //styled should match with the others
import React, { useState } from "react";
import { useHistory } from "react-router-dom";


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
    height: 70%;
    width: 25%;
    margin-top: 30px;
`;

function LoginPage() {
    const history = useHistory() //variable can be any name

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    // user.email // this is const {email, password} = user;
    // user.password //First load, needs to be empty but when user types, it needs to store the info
    //States will ve filled in when the user does not specifiy


    const { email, password } = user; //creats a function which routes to mainpage
    const  navtoMainPage = () =>  { 
        if (email === "shuminyoo@naver.com" && password === "0000") {
            alert("Email and Password is correct.")
            history.push("/main") //move to next page
            return ;
        } else if(email === "" || password === "") {
            alert("Please enter Email or Password")
            return ;
        } else {
            alert("Email or Password is incorrect. Please try again.")
        }
        //if id and email is empty and password is empty, alert, //other if id is equal to name and password is 1234, alert
    }

    const putUserInfo = (e) => { //e stand for events
        const { name, value } = e.target;
        console.log(user)
        setUser ({
            ...user, //command that add string, only for DOM
            [name] : value,
        })
    };


    return ( 
        <Container>
            <LeftWrapper>
            <TheLeft>Aaron's Webpage.</TheLeft> 
            </LeftWrapper>
            
            <RightWrapper>

                <TheRight>Welcome back.</TheRight> 

                <LabelWrapper>
                 <LabelforLogin>Email Address</LabelforLogin>
                 {/* //going to replace empty string forom above to input by the user * */}
                 <UsernameInput 
                 type = "text" 
                 value = {email} 
                 name = "email"
                 onChange = {putUserInfo} ></UsernameInput>
                </LabelWrapper>
            
                <LabelWrapper>
                 <LabelforPassword>Password</LabelforPassword>
                 <PasswordInput 
                 type = "password" 
                 value = {password}
                 name = "password"
                 onChange = {putUserInfo} ></PasswordInput>
                </LabelWrapper>

                <LabelWrapper>
                 <LoginButton onClick={navtoMainPage}>Log In</LoginButton> 
                </LabelWrapper>
            
            </RightWrapper>

        </Container>
    )
}

export default LoginPage; //Basic Structure