import {
    Container,
    Left,
    Middle,
    Order,
    Right
} from './styles'
import LogoVertec from '../../assets/Images/VertecLogo.png'

const Header = ({onScrollToSection})=>{
    return(
        <Container>
        
                <Left>
                    <img src={LogoVertec} alt="" />
                
                </Left>
            
                <Middle>
                   
                    <span>Home</span>
                    <span>Sobre</span>
                    <span onClick={onScrollToSection}>Serviços</span>
                    <span>Contato</span>
                </Middle>
               
               <Right>
                <Order>
                    <span>Orçamento</span>
                </Order>
                </Right>
        </Container>
    )

}

export default Header