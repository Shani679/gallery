import React from 'react';
import styled from 'styled-components';
import { Header } from './components/Header/Header';
import Grid from './components/Gallery/Grid';

const View = styled.div`
  background: #e4ebf1;
  min-height: 100vh;
  color: #5b616a;
  display: flex;
  flex-direction: column;
  font-family: Helvetica,sans-serif;
`

const App = () => {
  return (
    <View>
      <Header/>
      <Grid/>
    </View>
  );
}

export default App;
