import Banner from "../Components/Banner"
import Header from "../Components/Header"
import { 
    Wrapper,
    Card,
    ImageCard,
    Description,
    Items,
    Action
} from "./styles"
import InfraIMG from '../assets/Images/infraIMG1.jpg'
import segInfo from '../assets/Images/segurancaInfo.jpg'
import conectividade from '../assets/Images/conectividade.jpg'
import {FaArrowRight} from 'react-icons/fa' 
import react, {useRef}from 'react'

const Home = () =>{
const servicosRef = useRef(null)
const contatoRef = useRef(null)

 function ScrollToSection(ref){ //funcao feita para calcular e arrastar a tela ate o servicos
        const offHeader = -80 //desconsidera o tamanho do header
        const y = ref.current.getBoundingClientRect().top + window.pageYOffset + offHeader //pega a posiçao do item cujo a referencia é a que esta na variavel

        window.scrollTo({ //rola a pagina ate a posiçao calculada anteriormente
            top:y,
            behavior:"smooth" //suaviza o movimento de scrolling
        })
    }

    return(
        <>
            <Header onScrollToSection={() => ScrollToSection(servicosRef) }/> {/*aqui estou exportando a funcao ja com a variavel via props la para o componente */} 
            <Banner />
            <Wrapper ref={servicosRef}>
                 <Card>
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
                </Card>

                <Card>
                    <ImageCard>
                        <img src={segInfo} alt="" />
                    </ImageCard>
        
                    <Description>
                            <h3>Segurança da Informação</h3>
                            
                            <Items>
                                <p>Protegemos os dados da sua empresa contra acessos não autorizados, ataques cibernéticos e vazamentos, garantindo confidencialidade, integridade e disponibilidade das informações.</p>
                            </Items>
                    </Description>
                    <Action>
                        <h4>Detalhes</h4>
                    </Action>
                </Card>

                <Card>
                    <ImageCard>
                        <img src={conectividade} alt="" />
                    </ImageCard>
        
                    <Description>
                            <h3>Gestão de infraestrutura</h3>
                            
                            <Items>
                                <p>Somos especialistas em projetar e implementar redes de alta Conectividade,  através de técnicas inovadoras analisamos seu ambiente e as particularidades do seu negócio.</p>
                            </Items>
                    </Description>
                    <Action>
                        <h4>Detalhes</h4>
                    </Action>
                </Card>

                <Card>
                    <ImageCard>
                        <img src="https://plus.unsplash.com/premium_photo-1661766112409-837bef9f809c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXQlMjBzdXBwb3J0fGVufDB8fDB8fHww" alt="" />
                    </ImageCard>
        
                    <Description>
                            <h3>Desenvolvimento de Software</h3>
                            
                            <Items>
                                <p>Criação de site totalmente personalizado, sem uso de plataformas prontas, desenvolvido de acordo com as necessidades do seu negócio!</p>
                            </Items>
                    </Description>
                    <Action>
                        <h4>Detalhes</h4>
                        <FaArrowRight />
                    </Action>
                </Card>

                
            </Wrapper>
        
        </>
    )
}


export default Home

