import {
    Container,
    ContainerIMG,
    ContantContainer,
    SpanButton,
    Text
} from './styles'
import Logo from '../../assets/Images/VertecLogo.png'
import {FaArrowRight} from 'react-icons/fa'

const Banner = ()=>{
    return(
        <Container>
        <ContantContainer>
            <ContainerIMG>
                <img src={Logo} alt="" />
            </ContainerIMG>
            <Text>
                <h1>Somos Especialistas em Gestão e Desenvolvimento de Tecnologia</h1>
            </Text>
            <SpanButton>
                <span>Quero Tecnologia Para Minha Empresa! <FaArrowRight /></span>
            </SpanButton>
        </ContantContainer>
            
        </Container>
    )

}

export default Banner