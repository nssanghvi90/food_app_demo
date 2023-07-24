/**
 * 
 * Menu Screen
 * 
 */

import React, { useEffect, useMemo, useState } from "react";
import { FlatList } from "react-native";
import axios from 'axios';
import { ScreenContainer } from "../styles";
import FoodItemListRow from "./FoodItemRow";
import { BottomBarContainer, BottomBarText, MenuFilterContainer, MenuFilterText, FiltersRow } from "./styles";
import endpoints from "../../constants/endpoints";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from '../../redux/actions/cartActions';
import { SearchBar } from 'react-native-elements';


const MenuScreen = ({navigation}) => {

  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const cartState = useSelector(s => s.cart);  
  const [searchTerm, setSearchTerm] = useState(null);
  const [vegFilterSelected, setVegFilterSelected] = useState(false);
  
  useEffect(() => {
    const getData = async () => {
      try{
        const result = await axios.get(endpoints.foodItems);        
        
        if(!result || !result.data){
          setError('Data not found')
          return;
        }        
        // setDisplayFoodItems(result.data.items);        
        dispatch(cartActions.updateFoodItemsData(result.data));
      }
      catch(e){
        console.log('error: '+e)
      }
    };

    getData();
  }, []);

  const displayFoodItems = useMemo(() => {       
    // filter rows
    return cartState.foodItems
      .filter(item => searchTerm ? item.name.includes(searchTerm): true)
      .filter(item => {
        console.log('item.item_type: '+item.item_type);
        return (vegFilterSelected ? (item.item_type === 'veg'): true) ;       
      });

  }, [cartState.foodItems, searchTerm, vegFilterSelected]);

  const goToCart = () => {
    // Check if any items are selected 
    const isCartEmpty = !Object.keys(cartState.cart).find(c => cartState.cart[c] > 0);

    if(isCartEmpty){      
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
        data={displayFoodItems}
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
    return (
      <FiltersRow>
        <MenuFilterContainer selected={vegFilterSelected} onPress={() => setVegFilterSelected(!vegFilterSelected)}>
            <MenuFilterText selected={vegFilterSelected}>Veg</MenuFilterText>
        </MenuFilterContainer>
      </FiltersRow>
    )
  }

  const renderSearchBar = () => {
    if(!cartState.cart || cartState.cart.length === 0){
      return null;
    }
    return (
      <SearchBar
        placeholder="Search here ..."
        onChangeText={(search) => setSearchTerm(search)}
        value={searchTerm}
        lightTheme
      />
    )
  }

  return (
    <ScreenContainer>  
      {renderSearchBar()}          
      {renderFilters()}
      {renderFoodItemsList()}
      {renderBottomBar()}
    </ScreenContainer>
  );
};

export default MenuScreen;