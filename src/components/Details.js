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
                <span
                
            </PlayButton>

            <TrailerButton>
                
            </TrailerButton>

            <AddButton>

            </AddButton>

            <GroupWatchButton>

            </GroupWatchButton>


            </Controls>
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
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;


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
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  
  img {
    width: 32px;
  }



`

const TrailerButton = styled.button`
background: rgba(0, 0, 0, 0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
`
const AddButton = styled.button`
`
const  GroupWatchButton = styled.button`
`



export default Details

