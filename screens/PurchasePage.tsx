import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type PurchasePageNavigationProp = StackNavigationProp<RootStackParamList, 'Purchase'>;

interface Props {
  navigation: PurchasePageNavigationProp;
}

const PurchasePage: React.FC<Props> = ({ navigation }) => {
  const [purchaseCount, setPurchaseCount] = useState<number>(0);

  const handleIncrement = () => {
    setPurchaseCount(purchaseCount + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>購入数: {purchaseCount}</Text>
      <Button title="購入数を増やす" onPress={handleIncrement} />
      <Button title="チャットページへ" onPress={() => navigation.navigate('Chat')} />
      <Button title="新規商品登録ページへ" onPress={() => navigation.navigate('NewProduct')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default PurchasePage;
