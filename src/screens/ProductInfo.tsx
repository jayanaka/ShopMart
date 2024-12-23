import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';

import {useAppDispatch, useAppSelector} from '../hooks/useRedux';
import {Header} from '../components/Header';
import {addProductToCart} from '../redux/appSlice';
import {CartItem} from '../redux/appModal';
import Toast from 'react-native-toast-message';
import { SUCCESS } from '../common/Constants';

const ProductInfo = ({navigation}: any) => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const {selectedProduct} = useAppSelector(state => state.app);
  const bottomSafeAreaSpace = insets.bottom;

  const width = Dimensions.get('window').width;
  const [selectSizeIndex, setSelectSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const onPressBackAction = () => {
    navigation.goBack();
  };

  const onPressSizeAction = (index: number) => {
    setSelectSizeIndex(index);
  };

  const onPressAddToCartAction = () => {
    const item: CartItem = {
      id: selectedProduct?.id ?? '',
      SKU: selectedProduct?.SKU ?? '',
      name: selectedProduct?.name ?? '',
      brandName: selectedProduct?.brandName ?? '',
      mainImage: selectedProduct?.mainImage ?? '',
      price: selectedProduct?.price ?? null,
      size: selectedProduct?.sizes[selectSizeIndex] ?? '',
      colour: selectedProduct?.colour ?? '',
      qty: quantity,
    };
    dispatch(addProductToCart(item));
    Toast.show({
      type: SUCCESS,
      text1: 'Success',
      text2: 'Cart item successfully added',
    });
    onPressBackAction();
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView />
      <Header title="" isShowBack={true} onBackPress={onPressBackAction} />
      <ScrollView
        className="flex-1 bg-white p-4"
        contentContainerStyle={{paddingBottom: bottomSafeAreaSpace}}>
        {/* Main Image */}
        <FastImage
          style={{width: width, height: width * 0.8}}
          source={{
            uri: selectedProduct?.mainImage,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />

        {/* Product Name */}
        <Text className="text-3xl font-bold mt-4">
          {selectedProduct?.name ?? ''}
        </Text>
        <Text className="text-xl text-gray-600">
          {selectedProduct?.brandName ?? ''}
        </Text>

        {/* Price */}
        <Text className="text-2xl font-bold text-black mt-2">
          {selectedProduct?.price?.currency ?? ''}{' '}
          {selectedProduct?.price?.amount ?? ''}
        </Text>

        {/* Stock Status */}
        <Text
          className={`text-base text-${
            (selectedProduct?.stockStatus ?? '') === 'IN STOCK'
              ? 'green'
              : 'red'
          }-600 mt-1`}>
          {selectedProduct?.stockStatus ?? ''}
        </Text>

        {/* Color */}
        <Text className="text-md text-gray-700 mt-2">
          Color: {selectedProduct?.colour ?? ''}
        </Text>

        {/* Sizes */}
        <View className="flex-row flex-wrap mt-3">
          {(selectedProduct?.sizes || []).map((size, index) => (
            <TouchableOpacity
              key={index}
              className={`w-16 justify-center items-center ${
                selectSizeIndex === index
                  ? 'border-2 border-green-600'
                  : 'border border-gray-400'
              } rounded-lg pt-4 pb-4 mr-2 mb-2`}
              onPress={() => {
                onPressSizeAction(index);
              }}>
              <View>
                <Text className="text-lg">{size}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quantity Selector */}
        {(selectedProduct?.stockStatus ?? '') === 'IN STOCK' ? (
          <View className="flex-row items-center mt-4">
            <Text className="text-lg font-semibold mr-4">Quantity:</Text>

            {/* Minus Button */}
            <TouchableOpacity
              onPress={decrementQuantity}
              className="w-12 justify-center items-center bg-gray-300 rounded-lg p-2">
              <Text className="text-xl text-black">-</Text>
            </TouchableOpacity>

            {/* Quantity Display */}
            <Text className="mx-6 text-lg">{quantity}</Text>

            {/* Plus Button */}
            <TouchableOpacity
              onPress={incrementQuantity}
              className="w-12 justify-center items-center bg-gray-300 rounded-lg p-2">
              <Text className="text-xl text-black">+</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {/* Description */}
        <Text className="text-xl text-gray-800 mt-4 pb-8">
          {selectedProduct?.description ?? ''}
        </Text>

        {(selectedProduct?.stockStatus ?? '') === 'IN STOCK' ? (
          <TouchableOpacity
            className="bg-blue-500 py-4 px-4 rounded-lg hover:bg-blue-600 active:bg-blue-700 justify-center items-center mb-8"
            onPress={() => onPressAddToCartAction()}>
            <Text className="text-white text-xl font-semibold">
              {'Add to cart'}
            </Text>
          </TouchableOpacity>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default ProductInfo;
