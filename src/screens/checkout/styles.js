
import styled from 'styled-components/native';
import { BaseText } from '../styles';
import theme from '../../theme';

export const YourBagText = styled(BaseText)`
  fontSize: 20px;
  fontWeight: 500;
  marginLeft: 10px;
  marginTop: 10px;
`;

export const ItemAmountText = styled(BaseText)``;

export const AmountSectionKeyText = styled(BaseText)`
  fontSize: 18px;  
  marginLeft: 10px;  
`;

export const AmountSectionValueText = styled(BaseText)`
  fontSize: 18px;  
  marginRight: 10px;
  marginTop: 5px;
  fontWeight: 500;
`;

export const TotalKeyText = styled(BaseText)``;

export const TotalValueText = styled(BaseText)``;

export const CheckoutBtn = styled.TouchableHighlight`
  backgroundColor: ${theme.colors.primary};
  borderRadius: 8px;
  paddingVertical: 12px;
  paddingHorizontal: 12px;
  alignItems: center;
  justifyContent: center;
  marginHorizontal: 20px;
`;

export const ItemsSection = styled.View`
  padding: 10px;
`;

export const CheckoutText = styled(BaseText)`
  fontWeight: 500;
  color: #FFFFFF;
`;

export const AmountsSection = styled.View`  
  marginTop: 5px;
  marginBottom: 20px;
`;

export const AmountsSectionItem = styled.View`  
  flexDirection: row;
  marginHorizontal: 15px;
  marginVertical: 5px;
  justifyContent: space-between
`;

export const OrderDialogContainer = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  marginTop: 22px;  
  backgroundColor: rgba(0,0,0,0.7);
`;


export const OrderDialogModalContainer = styled.View`
  margin: 20px;
  backgroundColor: #FFFFFF;
  borderRadius: 20px;
  padding: 35px;
  alignItems: center;    
`;


export const OrderConfirmOkBtn = styled.TouchableHighlight`
  backgroundColor: ${theme.colors.primary};
  borderRadius: 8px;
  paddingVertical: 12px;
  paddingHorizontal: 12px;
  alignItems: center;
  justifyContent: center;
  margin: 20px;
`;

export const OrderConfirmOkText = styled(BaseText)`
  fontWeight: 500;
  color: #FFFFFF;
`;

export const OrderConfirmTitle = styled(BaseText)`
  fontWeight: 700;  
  marginBottom: 20px;
`;

