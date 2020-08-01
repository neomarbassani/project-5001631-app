/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Container, Icon, ModalContainer, ModalText, ModalTitle} from './styles';
import Modal from 'react-native-modal';

import IconClose from 'react-native-vector-icons/Feather';

import {TouchableOpacity} from 'react-native';

const HelpButton = ({data, ...rest}) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Container {...rest} onPress={() => setIsVisible(true)}>
        <Icon>?</Icon>
      </Container>
      <Modal isVisible={isVisible}>
        <ModalContainer>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              padding: 5,
              zIndex: 1000,
            }}
            onPress={() => setIsVisible(false)}>
            <IconClose name="x" size={20} />
          </TouchableOpacity>
          <ModalTitle>{data.title}</ModalTitle>
          <ModalText>{data.content}</ModalText>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default HelpButton;