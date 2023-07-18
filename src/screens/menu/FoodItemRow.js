import React from "react";
import { 
  FoodItemRowContainer, 
  FoodItemName, 
  FoodItemDesc, 
  FoodItemLeftContainer, 
  FoodItemMiddleContainer,
  FoodItemRightContainer,
  FoodItemPrice,
  FootItemImage,
  FootItemImagePlaceHolder,
  VegNonVegIcon,
  AddToCartButton,
  AddToCartText,
  FoodItemMiddleTopContainer
} from "./styles";

const FoodItemListRow = props => {  
  const {item, cartState, onItemAddToCart, onRemoveItemFromCart} = props; 
  const isPartOfCart = !!Object.keys(cartState.cart).find(c => c == item.id && cartState.cart[c] > 0) ;
  return (        
      <FoodItemRowContainer>    
        <FoodItemLeftContainer>
            {item.image ? <FootItemImage source={{uri: item.image}}/>: <FootItemImagePlaceHolder/>}
          </FoodItemLeftContainer> 
        <FoodItemMiddleContainer>
          <FoodItemMiddleTopContainer>
            <FoodItemName>{item.name}</FoodItemName>   
            <VegNonVegIcon source={item.item_type === 'veg' ? require('../../images/veg_icon.png'): require('../../images/non_veg_icon.png')}/>                   
          </FoodItemMiddleTopContainer>
          <FoodItemPrice>INR {item.price}</FoodItemPrice>    
          <FoodItemDesc numberOfLines={2} ellipsizeMode='tail'>{item.description}</FoodItemDesc>        
        </FoodItemMiddleContainer>      
        <FoodItemRightContainer>                    
          <AddToCartButton onPress={() => (!isPartOfCart ? onItemAddToCart(item.id): onRemoveItemFromCart(item.id))}>
            <AddToCartText>{!isPartOfCart ? 'Add +': 'Remove X'}</AddToCartText>            
          </AddToCartButton>            
        </FoodItemRightContainer> 
      </FoodItemRowContainer>      
  );
};

export default FoodItemListRow;