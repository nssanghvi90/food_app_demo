/**
 * 
 * Menu Screen
 * 
 */

import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import axios from 'axios';
import { ScreenContainer } from "../styles";
import FoodItemListRow from "./FoodItemRow";
import { BottomBarContainer, BottomBarText } from "./styles";
import endpoints from "../../constants/endpoints";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from '../../redux/actions/cartActions';

const MenuScreen = ({navigation}) => {

  const [data, setData] = useState([]);  
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const cartState = useSelector(s => s.cart);

  console.log('cartState: '+JSON.stringify(cartState.cart));

  useEffect(() => {
    const getData = async () => {
      try{
        const result = await axios.get(endpoints.foodItems);        
        
        if(!result || !result.data){
          setError('Data not found')
          return;
        }
        // console.log('items: '+JSON.stringify(result.data.items));
        setData(result.data.items);

        // update master store
        dispatch(cartActions.updateFoodItemsData(result.data));
      }
      catch(e){
        console.log('error: '+e)
      }
    };

    getData();
  }, []);

  const goToCart = () => {
    // Check if any items are selected 
    if(Object.keys(cartState.cart).length === 0){
      alert('Please add an item to cart');
      return;
    }
    navigation.navigate('Cart');
  }

  const onRemoveItemFromCart = (itemId) => {
    dispatch(cartActions.removeFromCart(itemId));
    console.log('Removing item from cart: '+itemId);
  }

  const onItemAddToCart = (itemId) => {
    dispatch(cartActions.addToCart(itemId));
    console.log('Adding item to cart: '+itemId);
  }

  const renderFoodItemsList = () => {
    return (
      <FlatList
        data={data}
        renderItem={({item}) => <FoodItemListRow 
            item={item} 
            cartState={cartState}
            onItemAddToCart={onItemAddToCart} 
            onRemoveItemFromCart={onRemoveItemFromCart}
          />
        }
        keyExtractor={item => item.id}
      />
    );
  };

  const renderBottomBar = () => {
    return (
      <BottomBarContainer onPress={goToCart}>
        <BottomBarText>Go To Cart</BottomBarText>      
      </BottomBarContainer>
    );
  }

  const renderFilters = () => {
    return null
  }

  return (
    <ScreenContainer>            
      {renderFilters()}
      {renderFoodItemsList()}
      {renderBottomBar()}
    </ScreenContainer>
  );
};

export default MenuScreen;