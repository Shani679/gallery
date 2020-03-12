import React, { memo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 250px;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0,0,0,.2);
    margin: 0 15px 15px 0;
    cursor: pointer;
    > .image-holder{
        width: 100%;
        height: 170px;
        display: flex;
        justify-content: center;
        > img{
            max-width: 100%;
            max-height: 100%;
        }
    }
    > .details-holder{
        padding: 10px;
        box-sizing: border-box;
        > h4{
            margin: 10px 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        > div:nth-child(2){
            font-size: 14px;
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        > div:last-child{
            font-size: 11px;
        }
    }
    &:hover{
        box-shadow: 0 4px 5px rgba(0,0,0,.3);
    }
    @media(max-width: 606px){
        margin: 0 0 15px;
    }
`

const shouldSkipUpdate = (prevProps, nextProps) => 
    (prevProps.id === nextProps.id && 
    prevProps.title === nextProps.title && 
    prevProps.name === nextProps.name);

export const Item = memo(({src, title, id, name, onClickHandler}) => {
    const type = src.split(".")[1];
    return (
        <Container onClick={() => onClickHandler(id)}>
            <div className="image-holder">
                <img src={require(`../../images/gallery/${src}`)} alt={name}/>
            </div>
            <div className="details-holder">
                <h4>{title}</h4>
                <div>{name}.{type}</div>
            </div>
        </Container>
    )
}, shouldSkipUpdate);

