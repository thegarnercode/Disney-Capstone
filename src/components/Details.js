import React from 'react'
import styled from 'styled-components'




function Details() {
    return (
        <Container>
            <Background>
            <img src="https://media.vanityfair.com/photos/5fd8dd84b618bb8986a3bfbb/master/pass/soul-pixar-review.jpg" />
            </Background>
            <ImageTitle>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/ddjwtu5-c84ed198-7019-4019-8df2-e5b4106196d3.png/v1/fill/w_300,h_200,strp/pixar_s_soul__2020__logo_png__by_mintmovi3_ddjwtu5-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQ0IiwicGF0aCI6IlwvZlwvODQ2YTkwODYtOGE0MC00M2UwLWFhMTAtMmZjN2Q2ZDczNzMwXC9kZGp3dHU1LWM4NGVkMTk4LTcwMTktNDAxOS04ZGYyLWU1YjQxMDYxOTZkMy5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.XCurADotLvIfj6-RH904KtR3UnLS88LbP984tSk2X7w" />
            </ImageTitle>
            <Controls>
            
            <PlayButton>
                <img src="/images/play-icon-black.png" />
                <span>PLAY</span>
                </PlayButton>

            <TrailerButton>
            <img src="/images/play-icon-white.png" />
            <span>Trailer</span>
            </TrailerButton>

            <AddButton>
            <span>+</span>
            </AddButton>

            <GroupWatchButton>
                <img src="/images/group-icon.png" />
            </GroupWatchButton>


            </Controls>

            <SubTitle>
            PG  1h 40min  Animation, Comedy
            </SubTitle>

            <Description>
            What is it that makes you...YOU?
            Pixar Animation Studios’ feature film SOUL introduces Joe Gardner (voice of Jamie Foxx) – a middle-school band teacher 
            who gets the chance of a lifetime to play at the best jazz club in town. 
            But one small misstep takes him from the streets of New York City 
            to The Great Before – a fantastical place where new souls get their personalities, 
            quirks and interests before they go to Earth. Determined to return to his life, Joe teams up with a precocious soul, 
            22 (voice of Tina Fey), who has never understood the appeal of the human experience. 
            As Joe desperately tries to show 22 what’s great about living, he may just discover the answers to some of life’s most important questions.
            </Description>
       
        </Container>
           
        
    )
}


const Container = styled.div`
min-height: calc(100vh- 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
`

const Background = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: -1;
opacity: 0.8;

img{
    width: 100%
    height: 100%
    object-fit: cover;
}
`
const ImageTitle = styled.div`
height: 30vh;
min-height: 170px;
min-width: 200px;
width: 35vw;

img{
    width: 100%
    height: 100%
    object-fit: cover;

}
`
const Controls = styled.div`
  align-items: center;
  display: flex;
  


`
const PlayButton = styled.button`
font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgba(0,191,255 ,1 );
  border: none;
  color: rgb(249, 249, 249);

  &:hover {
      background: rgb(255,140,0);
  }

  
  img {
    width: 32px;
  }



`

const TrailerButton = styled.button`
font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  color: rgb(249, 249, 249);

  &:hover {
      background: rgb(255,140,0);
  }

  
  img {
    width: 32px;
  }

`
const AddButton = styled.button`
margin-right: 16px;
font-size: 30px;
height: 44px;
width: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white ;
background-color: rgba(0,0,0,0.3);
cursor: pointer;

span {
    font-size: 30px;
    color: rgba(0,191,255 ,1 );
    }




`
const  GroupWatchButton = styled(AddButton)`
background: rgba(0,0,0,0.3);

&:hover {
    background: rgb(255,140,0);
`
const SubTitle = styled.div`
color: rgb(249,249,249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;
`

const Description = styled.div`
line-height: 1.4;
font-size: 20px;
margin-top: 16px;
color: rgb(249,249,249);
`




export default Details

