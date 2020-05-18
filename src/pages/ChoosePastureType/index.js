import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CalcActions from '../../store/ducks/calc';

import Container from '../../layout/App/Container';

import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import ChooseItemButton from '../../components/ChooseItemButton';

import { Content, ContentToSelect } from './styles';

const SupplementSupplyQuantity = ({ navigation }) => {
  const TitleOfPage = useSelector((state) => state.calc.calc.value);

  const dispatch = useDispatch();

  return (
    <Container>
      <Title size={24} value={TitleOfPage} />
      <Content>
        <SubTitle value="Tipo de pastagem" size={16} />
        <ContentToSelect>
          <ChooseItemButton
            content="Campo Nativo"
            onPress={() => {
              navigation.navigate('SupplementSupplyQuantity');

              dispatch(
                CalcActions.setPastureConfig({
                  name: 'Tipo de pastagem',
                  value: 'Campo Nativo',
                }),
              );
            }}
          />
          <ChooseItemButton
            content="Aveia-Azevém"
            onPress={() => {
              navigation.navigate('SupplementSupplyQuantity');

              dispatch(
                CalcActions.setPastureConfig({
                  name: 'Tipo de pastagem',
                  value: 'Aveia-Azevém',
                }),
              );
            }}
          />
          <ChooseItemButton
            content="Sudão"
            onPress={() => {
              navigation.navigate('SupplementSupplyQuantity');

              dispatch(
                CalcActions.setPastureConfig({
                  name: 'Tipo de pastagem',
                  value: 'Sudão',
                }),
              );
            }}
          />
          <ChooseItemButton
            content="Campo nativo melhorado"
            onPress={() => {
              navigation.navigate('SupplementSupplyQuantity');

              dispatch(
                CalcActions.setPastureConfig({
                  name: 'Tipo de pastagem',
                  value: 'Campo nativo melhorado',
                }),
              );
            }}
          />
          <ChooseItemButton
            content="Sorgo"
            onPress={() => {
              navigation.navigate('SupplementSupplyQuantity');

              dispatch(
                CalcActions.setPastureConfig({
                  name: 'Tipo de pastagem',
                  value: 'Sorgo',
                }),
              );
            }}
          />
        </ContentToSelect>
      </Content>
    </Container>
  );
};

export default SupplementSupplyQuantity;
