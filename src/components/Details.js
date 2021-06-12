import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import db from "../firebase";
import { useHistory, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom"



function Details () {
    const { id } = useParams();
    const [state, setState] = useState({});
   
   
    const [movie, setMovie] = useState();
    useEffect (() => {
        if (id) {
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                // save movie data
                setMovie(doc.data());
            } else {
               
            }
        });
        } else {
            
        } 
        return () => {
            setState({});
        };


    }, []);
   
    return (
            <Container>
                {movie && (
                    <>
                <Background>
                   <img src={movie.backgroundImg} alt="" />
                </Background>
                <ImageTitle>
                   <img src={movie.titleImg} />
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
            {movie.subTitle}
            </SubTitle>

            <Description>
            {movie.description}
            </Description>
            </>
                )}
        
       
        </Container>
           
        
    );
}


const Container = styled.div`
min-height: calc(100vh- 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
`;

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
width: 35vw;
min-height: 170px;
min-width: 200px;
margin-top: 60px;
margin-bottom: 20px;

img{
    width: 100%
    height: 100%
    object-fit: contain;

}
`
const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  heigt: 125px;


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
max-width: 76 0px;
margin-bottom: 20px
`




export default Details

