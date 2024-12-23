import React, {useState} from 'react';
import {useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';

import {useAppDispatch, useAppSelector} from '../hooks/useRedux';
import { Header } from '../components/Header';
import Colors from '../theme/Colors';
import FastImage from 'react-native-fast-image';
import { CartItem } from '../redux/appModal';

const Cart = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const {cart} = useAppSelector(state => state.app);

  const width = Dimensions.get('window').width;

  useEffect(() => {}, []);

  const onPressBackAction = () => {
    navigation.goBack();
  };

  const removeItem = (id) => {
    // setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price?.amount || '0') * item.qty, 0).toFixed(2);
  };

  const renderItem = ({item, index}: any) => {
    return (
        <View style={styles.itemContainer}>
        <Image source={{ uri: item.mainImage }} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text>Quantity: {item.qty}</Text>
          <Text>Size: {item.size}</Text>
          <Text>Price: {item.price?.currency} {item.price?.amount}</Text>
          <Text>Total: {item.price?.currency} {(item.qty * parseFloat(item.price?.amount ?? '0')).toFixed(2)}</Text>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => removeItem(item.id)}
          >
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
      <View style={{flex: 1, backgroundColor: Colors.BACKGROUND_COLOR}}>
        <SafeAreaView />
        <Header title='' isShowBack={true} onBackPress={onPressBackAction}/>
    <FlatList
      data={cart}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
    />
    <View style={styles.totalContainer}>
      <Text style={styles.totalText}>Total Amount: GBP {calculateTotal()}</Text>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
      },
      listContainer: {
        padding: 10,
      },
      itemContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      },
      itemImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 10,
      },
      itemDetails: {
        flex: 1,
        justifyContent: 'space-between',
      },
      itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      removeButton: {
        marginTop: 10,
        backgroundColor: '#ff4d4d',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
      },
      removeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      totalContainer: {
        padding: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
      },
      totalText: {
        fontSize: 18,
        fontWeight: 'bold',
      },
});

export default Cart;
