import React, { useState } from 'react';
import styled from 'styled-components';
import { Item } from './Item';
import DetailsView from '../DetailsView/DetailsView';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

const GridContainer = styled.main`
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    @media(max-width: 606px){
        flex-direction: column;
        align-items: center;
    }
`

const Grid = ({items, currentItem, setCurrentItem}) => {

    const onClickItemHandler = id => {
        const currentItem = items.find(item => item.id === id);
        setCurrentItem(currentItem);
    }

    return(
        <GridContainer>
            {items.map(item => <Item key={item.id} {...item} onClickHandler={id => onClickItemHandler(id)}/>)}
            {!!Object.keys(currentItem).length && <DetailsView item={currentItem}/>}
        </GridContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        // showViewDetails: state.showViewDetails,
        currentItem: state.currentItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // toggleDetailsView: flag => dispatch(actions.toggleDetailsView(flag)),
        setCurrentItem: item => dispatch(actions.setCurrentItem(item))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid);