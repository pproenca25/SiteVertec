import styled from "styled-components";

export const Container = styled.div`
    
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 1px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
    width: 24%;
    min-width: 300px;
    height: 450px;
    margin-bottom: 12px;
    background-color: #fff;
    
`;

export const ImageCard =styled.div`
    width: 100%;
    top: 0;
    img{
        width: 100%;
        height: 230px;
    }
`;

export const Description = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px 5px;
    h3{
        margin-bottom: 10px;
        font-weight: 700;
    }
`;

export const Items = styled.div`
    margin-top: 10px;
    height: 100px;
    p{
        font-size: 17px;
        color: #616161;

    }
`;

export const Action = styled.div`
    display: flex;
    aling-items: flex-end;
    justify-content: space-between;
    height: 40px;
    display: flex;
    padding: 10px 8px;
    background: red;
    span{

    }
`;

export const Wrapper = styled.div`
    padding: 25px 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
`;