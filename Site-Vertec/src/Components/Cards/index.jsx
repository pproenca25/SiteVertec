import { Action, Container, Description, ImageCard, Items } from "./styles"
import InfraIMG from '../../assets/Images/infraIMG1.jpg'
const Cards = () => {
    return(
        <Container>
            <ImageCard>
                <img src={InfraIMG} alt="" />
            </ImageCard>

            <Description>
                    <h3>Gestão de infraestrutura</h3>
                   
                   <Items>
                     <p>A VERTEC é especialista em implementar <b>redes estruturadas</b>, a partir da ultilização de boas práticas, normas e das melhores metodoligias do mercado de tecnologia</p>
                    </Items>
            </Description>
            <Action>
                <h4>Detalhes</h4>
            </Action>
        </Container>
    )

}

export default Cards