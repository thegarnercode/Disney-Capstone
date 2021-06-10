import { ScatterPlot, SportsRugbySharp } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
          <h4> Recommended for you </h4>
          <Content>
           <Wrap>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwalVkVp9gBg4mQ2uRny3yIfI2wp9Qokq_cMh3MbNTW4IJAQk6ztfZz9yBgSV&s=10" />
           </Wrap>

           <Wrap>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwalVkVp9gBg4mQ2uRny3yIfI2wp9Qokq_cMh3MbNTW4IJAQk6ztfZz9yBgSV&s=10" />
           </Wrap>

           <Wrap>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwalVkVp9gBg4mQ2uRny3yIfI2wp9Qokq_cMh3MbNTW4IJAQk6ztfZz9yBgSV&s=10" />
           </Wrap>

           <Wrap>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwalVkVp9gBg4mQ2uRny3yIfI2wp9Qokq_cMh3MbNTW4IJAQk6ztfZz9yBgSV&s=10" />
           </Wrap>

           <Wrap>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwalVkVp9gBg4mQ2uRny3yIfI2wp9Qokq_cMh3MbNTW4IJAQk6ztfZz9yBgSV&s=10" />
           </Wrap>

           <Wrap>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwalVkVp9gBg4mQ2uRny3yIfI2wp9Qokq_cMh3MbNTW4IJAQk6ztfZz9yBgSV&s=10" />
           </Wrap>

           <Wrap>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwalVkVp9gBg4mQ2uRny3yIfI2wp9Qokq_cMh3MbNTW4IJAQk6ztfZz9yBgSV&s=10" />
           </Wrap>

           <Wrap>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwalVkVp9gBg4mQ2uRny3yIfI2wp9Qokq_cMh3MbNTW4IJAQk6ztfZz9yBgSV&s=10" />
           </Wrap>

          </Content>
        </Container>
            
        
    )
}
const Container = styled.div`

`
const Content =styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0,1fr));
border-radius: 10px
overflow: 3px solid rgba(249,249,249, 0.1)
`

const Wrap = styled.div`
border-radius: 10px;
cursor: pointer;
overflow: hidden;
border: 3px, solid, rgba(249,249,249,0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0/ 73%) 0px 16px 10px -10px; 
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


img {
    width: 100%
    height: 100%
    object-fit: cover;
}

&:hover  {
transform: scale(1.05);
box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px
rgb(0 0 0 / 72%) 0px 30px 22px -10px;
border-color: rgba(255,140,0, 1);
}

`



export default Movies
