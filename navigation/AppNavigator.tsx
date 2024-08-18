import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PurchasePage from '../screens/PurchasePage';
import ChatPage from '../screens/ChatPage';
import NewProductPage from '../screens/NewProductPage';

export type RootStackParamList = {
  Purchase: undefined;
  Chat: undefined;
  NewProduct: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Purchase">
      <Stack.Screen name="Purchase" component={PurchasePage} options={{ title: '購入数ページ' }} />
      <Stack.Screen name="Chat" component={ChatPage} options={{ title: 'チャットページ' }} />
      <Stack.Screen name="NewProduct" component={NewProductPage} options={{ title: '新規商品登録ページ' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
