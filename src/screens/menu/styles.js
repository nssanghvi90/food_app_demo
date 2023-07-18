import styled from 'styled-components/native';
import { BaseText } from '../styles';
import theme from '../../theme';


export const FoodItemRowContainer = styled.View`  
  flexDirection: row;
  alignItems: center;  
  backgroundColor: white;  
  paddingHorizontal: 12px;
  paddingVertical: 15px;
  marginVertical: 5px;
  marginHorizontal: 12px;
  borderRadius: 8px;
  alignItems: center;
`;

export const FoodItemMiddleContainer = styled.View`
  flexDirection: column;
  flex: 1
`;

export const FoodItemLeftContainer = styled.View`
  flexDirection: column;
`;

export const FoodItemRightContainer = styled.View`
  flexDirection: column;
  marginLeft: 10px;
`;

export const FoodItemMiddleTopContainer = styled.View`
  flexDirection: row;
  flexWrap: wrap
`;

export const FoodItemName = styled(BaseText)`
  fontSize: 15px;
  fontWeight: 500;
`;

export const FoodItemPrice = styled(BaseText)`
  fontSize: 13px;
  fontWeight: 400;
  marginTop: 5px;
`;

export const FoodItemDesc = styled(BaseText)`
  fontSize: 12px;
  fontWeight: 200;
  marginTop: 8px;
`;

export const FootItemImage = styled.Image`
  width: 50px;
  height: 50px;
  marginRight: 15px;
  borderRadius: 8px;
`;

export const FootItemImagePlaceHolder = styled.View`
  width: 50px;
  height: 50px;
  marginRight: 15px;
  borderRadius: 8px;
  backgroundColor: #ADD8E6;
  opacity: 0.4
`;

export const VegNonVegIcon = styled.Image`
  width: 20px;
  height: 20px;  
  marginLeft: 5px;
`;

export const AddToCartButton = styled.TouchableHighlight`
  backgroundColor: ${theme.colors.primary};
  borderRadius: 8px;
  paddingVertical: 4px;
  paddingHorizontal: 4px;
`;

export const AddToCartText = styled(BaseText)`
  color: #FFFFFF;
  fontSize: 13px;
`;

export const BottomBarContainer = styled.TouchableHighlight`
  backgroundColor: ${theme.colors.primary};
  justifyContent: center;
  alignItems: center;
  paddingVertical: 15px;
`;

export const BottomBarText = styled(BaseText)`
  color: #FFFFFF;
`;