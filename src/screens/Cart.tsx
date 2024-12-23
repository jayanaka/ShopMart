import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  Alert,
} from 'react-native';

import {useAppDispatch, useAppSelector} from '../hooks/useRedux';
import {Header} from '../components/Header';
import FastImage from 'react-native-fast-image';
import {CartItem} from '../redux/appModal';
import {removeCartItem} from '../redux/appSlice';
import {IconDelete} from '../assets/icons/SVGIcons';
import Toast from 'react-native-toast-message';
import {SUCCESS} from '../common/Constants';

const Cart = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const {cart} = useAppSelector(state => state.app);

  const onPressBackAction = () => {
    navigation.goBack();
  };

  const confirmDeleteItem = (item: CartItem) => {
    Alert.alert(
      'Delete Item',
      `Are you sure you want to delete "${item.name}-Size(${item.size})" from the cart?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => removeItem(item),
          style: 'destructive',
        },
      ],
      {cancelable: true},
    );
  };

  const removeItem = (item: CartItem) => {
    dispatch(removeCartItem(item));
    Toast.show({
      type: SUCCESS,
      text1: 'Success',
      text2: 'Cart item successfully deleted',
    });
  };

  const calculateTotal = () => {
    return cart
      .reduce(
        (total, item) =>
          total + parseFloat(item.price?.amount || '0') * item.qty,
        0,
      )
      .toFixed(2);
  };

  const renderEmptyCart = () => (
    <View className="flex-1 justify-center items-center bg-white">
      <Image
        source={require('../assets/images/ic_empty_cart/ic_empty_cart.png')}
        className="w-20 h-20 mb-4"
      />
      <Text className="text-lg font-bold text-gray-400">
        {'Your cart is empty!'}
      </Text>
    </View>
  );

  const renderItem = ({item, index}: any) => {
    return (
      <View className="flex-row bg-white p-4 mb-3 rounded-lg shadow items-center">
        <FastImage
          className="w-20 h-20 rounded-lg"
          source={{
            uri: item.mainImage,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View className="flex-1 px-4">
          <Text className="text-lg font-medium mb-1" numberOfLines={2}>
            {item.name}
          </Text>
          <Text className="text-s font-medium mb-1">
            Size: {item.size} | Color: {item.colour}
          </Text>
          <Text className="text-s mb-1">Qty: {item.qty}</Text>
          <Text className="text-black-600 text-lg font-bold">
            {item.price.currency}
            {item.price.amount}
          </Text>
        </View>
        <TouchableOpacity
          className="h-20 justify-center items-center"
          onPress={() => confirmDeleteItem(item)}>
          <IconDelete />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <Header
          title="Cart"
          isShowBack={true}
          onBackPress={onPressBackAction}
        />
        {cart.length > 0 ? (
          <FlatList
            className="p-3"
            data={cart}
            keyExtractor={(item, index) => `ci${index}-${item.id}`}
            renderItem={renderItem}
          />
        ) : (
          renderEmptyCart()
        )}

        <View className="p-4 bg-white border-t border-gray-200 items-center">
          <Text className="text-xl font-bold">
            Total Amount : GBP{calculateTotal()}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
