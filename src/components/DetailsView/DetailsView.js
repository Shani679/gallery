import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import trashIcon from '../../images/trash.png';
import editIcon from '../../images/edit.png';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Layout = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    width: 600px;
    background: #fff;
    box-shadow: 0 4px 5px rgba(0,0,0,.3);
    animation: ${fadeIn} 0.5s linear;
    > div:first-child{
        height: 400px;
        display: flex;
        justify-content: center;
        img{
            max-width: 100%;
            max-height: 400px;
        }
    }
    > div:last-child{
        padding: 15px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        position: relative;
        > div{
            padding: 0 5px;
            box-sizing: border-box;
            font-size: 13px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            > div{
                display: flex;
                img{
                    width: 17px;
                    cursor: pointer;
                }
            }
            &:last-child{
                margin-top: 20px;
            }
        }
    }
    @media(max-width: 768px){
        width: 85%;
        > div:first-child{
            height: unset;
        }
    }
`


const Input = styled.input`
    border-radius: 4px;
    border: 1px solid transparent;
    margin-bottom: 7px;
    &:hover{
        border: 1px solid #969494;
    }
    &:focus{
        border: 1px solid #605c5c;
    }
    background-color: #fff;
    padding: 7px 5px;
    
    outline: none;
    font-size: ${({id}) => id === "title" ? "15px" :"13px"};
    font-weight: ${({id}) => id === "title" && "700"};
    color: #5b616a;
`

const Button = styled.button`
    background: #0e2f5a;
    border: none;
    color: #fff;
    width: 70px;
    padding: 10px;
    box-sizing: border-box;
    outline: none;
    border-radius: 4px;
    font-family: inherit;
    cursor: pointer;
`
const DetailsView = ({item, updateItem, setCurrentItem, deleteItem}) => {
 
    const [title, setTitle] = useState(item.title);
    const [name, setName] = useState(item.name);
    const [editable, setEditable] = useState(null);

    const onKeyDownHandler = (e) => {
        if(e.keyCode === 13){
            e.target.blur();
        }
    }

    const onBlurHandler = () => {
        if(item.name !== name || title !== item.title){
            setEditable(null);
            const updatedItem = {
                ...item,
                name: name,
                title: title
            }
            updateItem(updatedItem);
        }
    }

    const onClose = e => {
        if(e.target.id === "popup"){
            setCurrentItem({})
        }
    }
    
    return(
        <Layout id="popup" onClick={onClose}>
            <Container>
                <div>
                    <img src={require(`../../images/gallery/${item.src}`)} alt={item.name}/>
                </div>
                <div>
                    <Input 
                        type="text"
                        id="title"
                        isEditable={editable === "title"} 
                        value={title} 
                        onFocus={e => setEditable(e.target.id)}
                        onBlur={onBlurHandler}
                        onKeyDown={onKeyDownHandler}
                        onChange={e => setTitle(e.target.value)}/>
                    <Input 
                        type="text"
                        id="name"
                        isEditable={editable === "name"} 
                        value={name} 
                        onFocus={e => setEditable(e.target.id)}
                        onBlur={onBlurHandler}
                        onKeyDown={onKeyDownHandler}
                        onChange={e => setName(e.target.value)}/>
                    <div>Type: {item.src.split(".")[1]}</div>
                    <div>
                        <Button onClick={() => setCurrentItem({})}>Close</Button>
                        <div>
                            <img src={editIcon} alt="edit" onClick={() => document.getElementById("title").focus()}/>
                            <img src={trashIcon} alt="delete" onClick={() => deleteItem(item.id)}/>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        updateItem: item => dispatch(actions.updateItem(item)),
        setCurrentItem: item => dispatch(actions.setCurrentItem(item)),
        deleteItem: itemId => dispatch(actions.deleteItem(itemId))
    };
};

export default connect(null, mapDispatchToProps)(DetailsView);