import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    z-index: 2;
    flex-basis: 60px;
    > header{
        position: fixed;
        width: 100%;
        display: flex;
        align-items: center;
        top: 0;
        left: 0;
        padding: 15px;
        box-sizing: border-box;
        height: 60px;
        background: #0e2f5a;
        > h1{
            color: #fff;
            margin: 0;
            font-size: 25px;
            line-height: 1;
        }
    }
`

export const Header = () => (
    <HeaderContainer>
        <header>
            <h1>Images Gallery</h1>
        </header>
    </HeaderContainer>
)