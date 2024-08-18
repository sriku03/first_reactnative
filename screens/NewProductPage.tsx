import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type NewProductPageNavigationProp = StackNavigationProp<RootStackParamList, 'NewProduct'>;

interface Props {
  navigation: NewProductPageNavigationProp;
}

const NewProductPage: React.FC<Props> = ({ navigation }) => {
  const [productName, setProductName] = useState<string>('');

  const handleRegister = () => {
    // 商品登録のロジックをここに追加
    console.log(`新規商品登録: ${productName}`);
    setProductName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>新規商品登録ページ</Text>
      <TextInput
        style={styles.input}
        placeholder="商品名を入力"
        value={productName}
        onChangeText={setProductName}
      />
      <Button title="商品を登録" onPress={handleRegister} />
      <Button title="購入数ページへ" onPress={() => navigation.navigate('Purchase')} />
      <Button title="チャットページへ" onPress={() => navigation.navigate('Chat')} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
  },
});

export default NewProductPage;
