import React from "react";
import { 
  FoodItemRowContainer, 
  FoodItemName, 
  FoodItemLeftContainer, 
  FoodItemMiddleContainer,
  FoodItemRightContainer,
  FoodItemPrice,
  FootItemImage,
  FootItemImagePlaceHolder,
  VegNonVegIcon,
  FoodItemMiddleTopContainer
} from "../menu/styles";

const CartItemListRow = props => {  
  const {item} = props; 

  return (        
      <FoodItemRowContainer>    
        <FoodItemLeftContainer>
            {item.image ? <FootItemImage source={{uri: item.image}}/>: <FootItemImagePlaceHolder/>}
          </FoodItemLeftContainer> 
        <FoodItemMiddleContainer>
          <FoodItemMiddleTopContainer>
            <FoodItemName>{item.name}</FoodItemName>
            <VegNonVegIcon source={require('../../images/veg_icon.png')}/>                   
          </FoodItemMiddleTopContainer>          
        </FoodItemMiddleContainer>      
        <FoodItemRightContainer>                    
          <FoodItemPrice>INR {item.price}</FoodItemPrice>    
        </FoodItemRightContainer>
      </FoodItemRowContainer>      
  );
};

export default CartItemListRow;