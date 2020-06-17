import React from 'react';

import {Container, Home, Icon, Page} from './styles';

import aboutUs from '../../assets/aboutUs.png';
import history from '../../assets/history.png';
import home from '../../assets/home.png';
import profile from '../../assets/profile.png';
import sendMessage from '../../assets/sendMessage.png';

const TabBar = ({state, descriptors, navigation}) => {
  console.log(state.routeNames[state.index]);
  return (
    <Container resizeMode="cover">
      <Page disabled>
        <Icon source={aboutUs} resizeMode="contain" />
      </Page>
      <Page onPress={() => navigation.navigate('Historico')}>
        <Icon
          source={history}
          resizeMode="contain"
          focused={state.routeNames[state.index] === 'Historico'}
        />
      </Page>
      <Home onPress={() => navigation.navigate('Início')}>
        <Icon
          source={home}
          resizeMode="contain"
          focused={state.routeNames[state.index] === 'Início'}
        />
      </Home>
      <Page disabled>
        <Icon source={sendMessage} resizeMode="contain" />
      </Page>
      <Page onPress={() => navigation.navigate('Perfil')}>
        <Icon
          source={profile}
          resizeMode="contain"
          focused={state.routeNames[state.index] === 'Perfil'}
        />
      </Page>
    </Container>
  );
};

export default TabBar;
