import {styled} from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 80px;
    padding: 5px 50px ;
    background-color: white;
    img{
        width: 70px;
        height: 70px;
    }
    
`
export const Left = styled.div`
    display: flex;
    flex: 1;
`

export const Middle = styled.div`
    display: flex;
    flex: 2;
    align-items: center;
    justify-content: center;
    span{
        font-size: 16px;
        margin: 50px;
        cursor: Pointer;
        color: var(--TextBlack);

        &:hover{
            color: #3A59D1;
        }
    }

`

export const Right =styled.div`
    display: flex;
    flex: 1;
    justify-content:flex-end;
    aling-items: center;
`

export const Order = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    border-radius: 5px;
    background-color: #3A59D1;
    cursor:Pointer;
    margin-left: 100px;
    padding: 10px 24px;
    span{
        font-weight: 500;
        font-size: 16px;
        color: #f1f1f1;
    }
`

