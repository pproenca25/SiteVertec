import styled from 'styled-components'
import banner from '../../assets/Images/Banner.jpg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url(${banner});
    background-size: cover;
    position: relative;
    background-position: center;
    padding: 30px 150px;
    width: 100%;
    height: 500px;
    z-index: 0;
    :before{
        background-color: rgba(255, 255, 255, 0.3);
        content:'';
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

export const ContantContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;    
        z-index: 1;
        
`

export const SpanButton = styled.div`
            margin-top: 25px;
            position: relative;
            width: 100%;
            max-width: 600px;
            text-align: center;
            padding: 10px;
           span {
                font-size: 18px;
                letter-spacing: 2px;
                text-transform: uppercase;
                display: inline-block;
                text-align: center;
                font-weight: bold;
                padding: 0.7em 2em;
                border: 3px solid #FF0072;
                border-radius: 2px;
                position: relative;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
                color: #FF0072;
                text-decoration: none;
                transition: 0.3s ease all;
                z-index: 1;
                cursor: pointer;
                }

                span:before {
                transition: 0.5s all ease;
                position: absolute;
                top: 0;
                left: 50%;
                right: 50%;
                bottom: 0;
                opacity: 0;
                content: '';
                background-color: #FF0072;
                z-index: -1;
                }

                span:hover, span:focus {
                color: white;
                }

                span:hover:before, span:focus:before {
                transition: 0.5s all ease;
                left: 0;
                right: 0;
                opacity: 1;
                }

                span:active {
                transform: scale(0.9);
                }
`

export const Text = styled.div`
    width: 50%;
    text-align: center;
    font-weight: 900;
    h1{
        color: var(--TextBlack);
    }
`

export const ContainerIMG = styled.div`
    img{
        width: 250px;
        height: 250px;
        

    }
`