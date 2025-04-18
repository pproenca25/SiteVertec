import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 1px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
    width: 24%;
    margin-bottom: 12px;
    background-color: #fff;
    
`;

export const ImageCard =styled.div`
    width: 100%;
    img{
        width: 100%;
        height: auto;
    }
`;

export const Description = styled.div`
    padding: 10px 5px;
    h3{
        margin-bottom: 10px;
    }
`;

export const Items = styled.div`
    p{

    }
`;

export const Action = styled.div`
padding: 10px 5px;
    span{

    }
`;