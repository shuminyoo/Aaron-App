import styled from "styled-components"

const Container = styled.div`
    background-color: #F4F3EF
    width: auto;
    height: 100vh;
    display: flex; 
    flex-directionn: row;
`


const TextWrapper = styled.div`
    width: 50%;
    padding-left: 10px;
    background-color:yellow;
`
const Welcome = styled.h3`
    padding-top: 30%;
    color:black;

`

const Testbox = styled.p`
    background-color:blue;
    color:white;
`
const Bar_1 = styled.p`
    position: relative;
    justify-content: center;
    background-color:black;
    height: 7px;
    width: 80%;
    border-radius: 30px;
`
const Bar_2 = styled.p`
    position: relative;
    justify-content: center;
    background-color:black;
    height: 7px;
    width: 80%;
    border-radius: 30px;
`
const Info = styled.p`
`


const ContactsWrapper = styled.div`
    background-color: #F4F3EF
    width: auto;
    height: 100vh;
    display: flex; 
    flex-directionn: row;
`
const ContactsLeft = styled.div`  
    width: 50%;
    padding-right: 10px;

`
const ConstactsRight =styled.div`
    width: 50%;
    padding-right: 10px;
`
const Name = styled.p`
    color:#818181
`
const Email = styled.p`
    color:#818181
`
const Phone = styled.p`
    color:#818181
`
const DOB = styled.p`
    color:#818181
`
const Name_A = styled.p`
    color:#818181
`
const Email_A = styled.p`
    color:#818181
`
const Phone_A = styled.p`
    color:#818181
`
const DOB_A = styled.p`
    color:#818181
`



const PictureWrapper = styled.div`
    width: 50%;
    padding-right: 10px;
`
const Image = styled.p`
    width:80%;
    height:auto;
`



function LearnPage() {
    
    return (
        <Container>

            <TextWrapper>
                
                <Welcome>Hi! Welcome to my Website! I'm a Student!</Welcome>

                <Bar_1></Bar_1>
                    <Info>
                        I'm Aaron Yoo, who created this website.<br></br>
                        I'm a highschool student who likes taking photos, playing CIV and reading about history!<br></br><br></br>

                        Currently, this website is under construction, and will constantly change. <br></br>
                        Right now, I don't even have a gallery, but soon it will be ready! <br></br><br></br>

                        I plan on posting more content here on this website! <br></br>
                        Feel free to look around!<br></br>
                        Thanks, Aaron<br></br>
 
                    </Info>
                <Bar_2></Bar_2>

                    <ContactsWrapper>

                        <ContactsLeft>
                            <Name>Name :</Name>
                            <Email>Email :</Email>
                            <Phone>Phone :</Phone>
                            <DOB>Date of Birth :</DOB>
                        </ContactsLeft>

                        <ConstactsRight>
                            <Name_A>Aaron Yoo</Name_A>
                            <Email_A>2024aaronyoo@usbccollegiate.org</Email_A>
                            <Phone_A>+82 10 XXXX XXXX</Phone_A>
                            <DOB_A>2005/03/04</DOB_A>
                        </ConstactsRight>

                    </ContactsWrapper>

            </TextWrapper>

            <PictureWrapper>
                <Image src="Face_1.png">Testing</Image>
            </PictureWrapper>

        </Container>
    )
}

export default LearnPage;