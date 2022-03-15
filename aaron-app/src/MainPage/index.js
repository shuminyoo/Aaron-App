import styled from "styled-components"



const Container = styled.div`
    background-image: url("https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
    width: auto;
    height: 100vh;
    display: inlineflex; 
    flex-directionn: row;
    background-size: cover;
    background-repeat: no-repeat;

`

const Title = styled.h1`
    position: relative;
    text-align: center;
    top:300px; 
    color:white;
    font-size: 75px;
    text-shadow: 9px 9px 10px black;
`;

const Welcome = styled.h1`
    position: relative;
    text-align: center;
    top: 230px; 
    color:white;
    font-size: 40px;
    text-shadow: 9px 9px 10px black;

`;

const Bar = styled.p`
    position: relative;
    justify-content: center;
    left: 25%;
    top: 225px;
    background-color:black;
    height: 7px;
    width: 50%;
    color:white;
    border-radius: 30px;
`
const Socials = styled.div`
    display:flex;
    justify-content: center;
    position: relative;
    top: 220px;
    // border:3px solid black;
`
const Insta = styled.a`
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png");
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 10px;

`
const Twitter = styled.a`
    background-image: url("https://www.lifepng.com/wp-content/uploads/2020/10/580b57fcd9996e24bc43c53e.png");
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 10px;
`
const Pexels = styled.a`
    background-image: url("https://apkloo.com/wp-content/uploads/2021/06/Pexels-Mod-Apk-300x300.png");
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 10px;
`
const Youtube = styled.a`
    background-image: url("https://w7.pngwing.com/pngs/441/880/png-transparent-youtube-logo-youtube-computer-icons-logo-android-joystick-angle-electronics-rectangle.png");
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 10px;
`

function MainPage() {
    return (
        <Container>
            <Title>Aaron's Personal Webpage</Title><br></br>
            <Welcome>Student at BCC | Amateur Photographer | History Enthusiast</Welcome>
            <Bar></Bar>
            
            <Socials>
                <Insta href="https://www.instagram.com/shuminyoo05/?hl=ko"></Insta>
                <Twitter href="https://twitter.com/sarangserounshu"></Twitter>
                <Pexels href="https://www.pexels.com/@shumin-yoo-139936891/collections/"></Pexels>
                <Youtube href="https://youtu.be/dQw4w9WgXcQ?t=1"></Youtube>
            </Socials> 
        </Container>

    )
}

//the github is workting
export default MainPage;