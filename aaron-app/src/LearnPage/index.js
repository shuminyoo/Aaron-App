import styled from "styled-components"
import { ProgressBar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Me from "./Face.jpeg"
import CodeImage from "./CodeImage_1.jpeg"
import ShamazonSurvey from "./WebImage_1.png"
import ShamazonEats from "./WebImage_2.png"


const SuperContainer = styled.div`
    flex-direction: column;
    height: 100%;
    display: flex;
`
const Container = styled.div`
    background-color: #F4F3EF;
    width: auto;
    height: 100vh;
    display: flex; 
    flex-direction: row;
`
const TextWrapper = styled.div`
    width: 50%;
    padding-left: 20px;
`
const Welcome = styled.h3`
    padding-top: 30%;
    color:black;
    font-family: 'Lobster', cursive;

`
const Bar_1 = styled.p`
    position: relative;
    justify-content: center;
    background-color:black;
    height: 4px;
    width: 80%;
    border-radius: 30px;
`
const Bar_2 = styled.p`
    position: relative;
    justify-content: center;
    background-color:black;
    height: 4px;
    width: 80%;
    border-radius: 30px;
`
const Info = styled.p`
    color: #818181;
    font-family: 'Lobster', cursive;
    
`

const ContactsWrapper = styled.div`
    background-color: #F4F3EF;
    width: auto;
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
const MeImage = styled.img`
    width: 50%;
    margin-top: 30%;
    margin-left: 25%;
    border: 3px solid black;
    border-radius: 10px;
`

const UnderContainer = styled.div`
    background-color:teal;
`
const RowContainer = styled.div`
    background-color:teal;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 80px;
`
const Title = styled.h2` 
    text-align:center;
    color:yellow;
    font-family: 'Lobster', cursive;
    margin-bottom: 20px;

`
const RowBarContainer = styled.div`
    display:flex;
    margin-bottom: 20px;
`
const SampleText = styled.p`
    color:white;
    width: 100px;
    margin-right: 50px;
`

const BajaContainer = styled.div`
    background-color: #81d3e3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const RowofAward = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;

`
const Award = styled.div`
    display:flex;
    flex-direction: column;
    margin:20px 20px;
`
const AwardImage = styled.img`
    width:150px;
    height:150px;
    border:1px solid black;
    border-radius:5px;
`
const AwardLabel = styled.p`
    color: #5171db;
    font-family: 'Lobster', cursive;
    
`

const BajaContainerSur = styled.div`
    background-color: #294C60;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const NewPictureWrapper_1 = styled.div`
    width: 50%;
    margin-right:200px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`
const NewPictureWrapper_2 = styled.div`
    width: 50%;
    margin:50px 0px 50px 200px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`
const NewPictureWrapper_3 = styled.div`
    width: 50%;
    margin:0px 300px 50px 0px;
    display:flex;
    flex-direction; row;
    justify-content: center;
    align-items: center;

`

const WorkImage1 = styled.img`
    width: 100%;
    border: 3px solid white;
    border-radius: 10px;
`
const WorkImage2 = styled.img`
    width: 130%;
    border: 3px solid white;
    border-radius: 10px;
`
const ImgDes = styled.p`
    width: 100%;
    color: white;
    padding-left:20px;

`
const ImgDes_2 = styled.p`
    height: 100%;
    color: white;
    padding-right:20px;

`
function LearnPage() {
    const barStyle = {
        width: "200px",
        backgroundColor: "#e0f9ff",
        height: "30px",
    }

    return (
     <SuperContainer>
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
                {/* <Image>TestingTestingTestingTesting</Image> */}
                <MeImage src={Me} />
            </PictureWrapper>
        </Container>

        <UnderContainer>
            <RowContainer>

                <Title>Skill level</Title>

                <RowBarContainer>
                    <SampleText>Talking</SampleText>
                    <ProgressBar  
                     style= {barStyle}
                     label={`7.3/10.0`}
                     max={10.0}
                     min={0.0}
                     now={7.3} 
                    />
                </RowBarContainer>

                <RowBarContainer>
                    <SampleText>Reading</SampleText>
                    <ProgressBar  
                     style= {barStyle}
                     label={`120/180`}
                     max={180.0}
                     min={0.0}
                     now={120.0} 
                    />
                </RowBarContainer>

                <RowBarContainer>
                    <SampleText>Photography</SampleText>
                    <ProgressBar  
                     style= {barStyle}
                     label={`1/3`}
                     max={3.0}
                     min={0.0}
                     now={1.0} 
                    />
                </RowBarContainer>

                <RowBarContainer>
                    <SampleText>TOEFL</SampleText>
                    <ProgressBar  
                     style= {barStyle}
                     label= {`107/120`}
                     max={120}
                     min={0.0}
                     now={107} 
                    />
                </RowBarContainer>

                <RowBarContainer>
                    <SampleText>Math</SampleText>
                    <ProgressBar  
                     style= {barStyle}
                     label={`15/25`}
                     max={25.0}
                     min={0.0}
                     now={15.0} 
                    />
                </RowBarContainer>

                <RowBarContainer>
                    <SampleText>jokes</SampleText>
                    <ProgressBar  
                     style= {barStyle}
                     label={`3/420`}
                     max={420.0}
                     min={0.0}
                     now={3.0} 
                    />
                </RowBarContainer>

            </RowContainer>
        </UnderContainer>

        <BajaContainer>

                <Title>Awards</Title>
                
                <RowofAward>
                    <Award>
                        <AwardImage src="http://www.lila.es.kr/data/cheditor4/1711/ebec5abb57d7fa3ae5c6c1094a9b6b97_20171115105837_zypqmvwt.jpg"></AwardImage>
                        <AwardLabel>Golden Bell Award</AwardLabel>
                    </Award>
                    <Award>
                        <AwardImage src="https://img.danawa.com/images/descFiles/4/397/3396656_1497000996212.png"></AwardImage>
                        <AwardLabel>BCC Honor Student</AwardLabel>
                    </Award>
                    <Award>
                        <AwardImage src="https://as1.ftcdn.net/v2/jpg/02/52/27/26/1000_F_252272632_AktibshzaSMfZdNaFJTZNMa8z1u64OP5.jpg"></AwardImage>
                        <AwardLabel>National Clown Award</AwardLabel>
                    </Award>
                </RowofAward>

        </BajaContainer>

        <BajaContainerSur>
            <Title>Works</Title>

            <NewPictureWrapper_1>
                <WorkImage1 src={CodeImage} />
                <ImgDes> This is the code of this webpage.</ImgDes>
            </NewPictureWrapper_1>

            <NewPictureWrapper_2>
                <ImgDes_2>This is a survey form that I made.</ImgDes_2>
                <WorkImage2 src={ShamazonSurvey} />
            </NewPictureWrapper_2>

            <NewPictureWrapper_3>
                <WorkImage1 src={ShamazonEats} />
                <ImgDes> This is an online ordering system template that I made.</ImgDes>
            </NewPictureWrapper_3>


        </BajaContainerSur>

     </SuperContainer>
    )
}

export default LearnPage;