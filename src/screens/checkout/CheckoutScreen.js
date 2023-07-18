/**
 * 
 * Menu Screen
 * 
 */


import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { FlatList } from "react-native";
import { ScreenContainer } from "../styles";
import { ItemsSection, 
  CheckoutText, 
  CheckoutBtn, 
  YourBagText, 
  AmountsSection, 
  AmountSectionKeyText, 
  AmountSectionValueText, 
  AmountsSectionItem  
} from "./styles";
import { Line } from "../styles";
import CartItemListRow from "./CartItemListRow";
import OrderConfirmModal from "./OrderConfirmModal";

const CheckoutScreen = () => {

  const cartItems = useSelector(s => s.cart.cart);
  const foodItems = useSelector(s => s.cart.foodItems);
  const taxApplicable = useSelector(s => s.cart.taxApplicable);
  const [modalVisible, setModalVisible] = useState(false);

  const cartItemsFull = useMemo(() => {
      
      if(!cartItems || !foodItems || Object.keys(cartItems).length === 0 || foodItems.length === 0){
        console.log("returning empty");
        return [];
      }
      
      const items = Object.keys(cartItems)
      .filter(item => cartItems[item] > 0)
      .map(item => {        
          console.log('item: '+JSON.stringify(item));          
          const foodItem = foodItems.find(fi => (fi.id == item));
          return foodItem;                    
      });

      return items;

  }, [cartItems, foodItems]);

  const subTotal = useMemo(() => {
    if(!cartItemsFull || cartItemsFull.length === 0){
      return '';
    }
    return cartItemsFull.reduce((accumulator, curr) => (accumulator + curr.price), 0);
  },[cartItemsFull]);

  const taxTotal = useMemo(() => {
    if(!cartItemsFull || cartItemsFull.length === 0 || !taxApplicable){
      return '';
    }
    return cartItemsFull.reduce((accumulator, curr) => (accumulator + (curr.price * taxApplicable.value * 0.01)), 0);
  },[cartItemsFull]);

  const grandTotal = useMemo(() => {  
    return taxTotal + subTotal;
  },[subTotal, grandTotal]);

  console.log('cartItem: '+JSON.stringify(cartItemsFull));

  const renderAmounts = () => {
    return (
      <AmountsSection>
        <AmountsSectionItem>
          <AmountSectionKeyText>SubTotal:</AmountSectionKeyText>      
          <AmountSectionValueText>INR {subTotal.toFixed(2)}</AmountSectionValueText>
        </AmountsSectionItem>    
        <AmountsSectionItem>
          <AmountSectionKeyText>Tax Total:</AmountSectionKeyText>      
          <AmountSectionValueText>INR {taxTotal.toFixed(2)}</AmountSectionValueText>
        </AmountsSectionItem>    
        <AmountsSectionItem>
          <AmountSectionKeyText>Grand Total:</AmountSectionKeyText>      
          <AmountSectionValueText>INR {grandTotal.toFixed(2)}</AmountSectionValueText>
        </AmountsSectionItem>    
      </AmountsSection>
    );
  };

  const renderItemsSection = () => {
    return (
      <ItemsSection>
        <YourBagText>Your Bag</YourBagText>
        <Line />
        <FlatList
          data={cartItemsFull}
          renderItem={({item}) => <CartItemListRow item={item}/>}
          keyExtractor={item => item.id}
        />
        <Line />       
      </ItemsSection>
    );
  };

  return (
    <ScreenContainer>
      {renderItemsSection()}
      {renderAmounts()}      
      <CheckoutBtn onPress={() => setModalVisible(true)}>
        <CheckoutText>Checkout</CheckoutText>      
      </CheckoutBtn>
      <OrderConfirmModal 
        cartItemsFull={cartItemsFull}        
        modalVisible={modalVisible} 
        hideModal={() => setModalVisible(false)}
      />
    </ScreenContainer>
  )
};

export default CheckoutScreen;