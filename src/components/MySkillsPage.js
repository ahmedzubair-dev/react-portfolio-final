import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, HTML, CSS, SP, JS, JAVA} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 1px solid ${props => props.theme.text};
color: ${props => props.theme.text};
// background-color: ${props => props.theme.body};
padding: 2rem;
width: 45vw;
height: 60vh;
z-index:3;
line-height: 1.5;
// cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: start;
gap:25px;

// &:hover{
//     color: ${props => props.theme.body};
//     background-color: ${props => props.theme.text};
// }
`
const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 1rem;
`
const Row2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding-top: 1rem;
`
const Row3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 0rem;
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);



&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


// ${Main}:hover &{
   
//         color:${props => props.theme.body};
    
// }

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
<Main style={{ borderRadius: "35px", background: "transparent", zIndex: "1", backdropFilter: "blur(4px)" }}>

<Title>
    <Design width={40} height={40} /> Skills
</Title>

<Row2>

<a>
    <SP width={5} height={5} />
  </a>

</Row2>

<Row>
      <a style={{ color: 'inherit' }}>
        <HTML width={5} height={5} />
      </a>

      <a>
        <CSS width={5} height={5} />
      </a>
        <a>
            <JS width={5} height={5}/>
        </a>
    
      
    </Row>

    <Row3>
    <a>
            <JAVA width={5} height={5}/>
        </a>
    </Row3>





            </Main>



            <BigTitle text="SKILLS" top="73%" right="12%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
