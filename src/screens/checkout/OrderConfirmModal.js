
import React from "react";
import {Modal, Text} from 'react-native'
import {OrderDialogContainer, OrderDialogModalContainer, OrderConfirmOkBtn, OrderConfirmOkText, OrderConfirmTitle} from './styles';

const OrderConfirmModal = props => {  
  const {modalVisible, hideModal, cartItemsFull} = props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {          
          hideModal();
        }}>
          <OrderDialogContainer>
              <OrderDialogModalContainer>
              <OrderConfirmTitle>Order Confirmed</OrderConfirmTitle>
              <Text>{JSON.stringify(cartItemsFull)}</Text>
              <OrderConfirmOkBtn onPress={hideModal}>
                  <OrderConfirmOkText>Ok</OrderConfirmOkText>
              </OrderConfirmOkBtn>
           </OrderDialogModalContainer>
          </OrderDialogContainer>
      </Modal>
    )
};

export default OrderConfirmModal;

