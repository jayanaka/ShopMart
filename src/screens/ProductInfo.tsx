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
} from 'react-native';

import {useAppDispatch, useAppSelector} from '../hooks/useRedux';
import FastImage from 'react-native-fast-image';
import {Header} from '../components/Header';
import Colors from '../theme/Colors';
import {addProductToCart} from '../redux/appSlice';
import {CartItem} from '../redux/appModal';

const ProductInfo = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const {selectedProduct} = useAppSelector(state => state.app);

  const width = Dimensions.get('window').width;

  useEffect(() => {}, []);

  //   const onPressProductAction = (item: Product) => {
  //     console.log('onPressProductAction-------------', item);
  //     dispatch(setSelectedProduct(item));

  //     navigation.navigate('ProductInfo');
  //   };

  const onPressBackAction = () => {
    navigation.goBack();
  };

  const onPressAddToCartAction = () => {
    console.log('onPressAddToCartAction-------------', selectedProduct);
    const item: CartItem = {
      id: selectedProduct?.id ?? '',
      SKU: selectedProduct?.SKU ?? '',
      name: selectedProduct?.name ?? '',
      brandName: selectedProduct?.brandName ?? '',
      mainImage: selectedProduct?.mainImage ?? '',
      price: selectedProduct?.price ?? null,
      size: selectedProduct?.sizes[0] ?? '',
      colour: selectedProduct?.colour ?? '',
      qty: 1,
    };
    dispatch(addProductToCart(item));
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.BACKGROUND_COLOR}}>
      <SafeAreaView />
      <Header title="" isShowBack={true} onBackPress={onPressBackAction} />
      <FastImage
        style={{width: width, height: width}}
        source={{
          uri: selectedProduct?.mainImage,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text>{selectedProduct?.name || ''}</Text>
      <Text>{`${selectedProduct?.price?.amount}${selectedProduct?.price?.currency}`}</Text>
      <TouchableOpacity
        onPress={() => {
          onPressAddToCartAction();
        }}>
        <Text>{'Add to cart'}</Text>
      </TouchableOpacity>
    </View>

    // <View></View>

    // <View className="flex-1 items-center justify-center bg-gray-200">
    //   <Text className="text-3xl font-bold text-blue-600">
    //     Hello, Tailwind CSS in React Native!
    //   </Text>
    //   <TouchableOpacity className="mt-6 px-6 py-3 bg-blue-500 rounded-lg">
    //     <Text className="text-white font-medium">Press Me</Text>
    //   </TouchableOpacity>
    // </View>

    // <View className='flex-[1] bg-white pt-8'>
    //   <SafeAreaView />
    //   <FlatList
    //     data={products}
    //     numColumns={numColumns}
    //     renderItem={(product_data) => {
    //       return (
    //         <ProductItem
    //           image_url={product_data.item.mainImage}
    //           name={product_data.item.name}
    //           price={product_data.item.price}
    //           column_width={column_width}
    //         />
    //       )
    //     }}
    //     keyExtractor={(item) => {
    //       return item.id
    //     }}
    //   />
    // </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.PRIMARY_COLOR,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     // width: Dimensions.WIDTH * 0.6,
//     // height: Dimensions.WIDTH * 0.6,
//   },
// });

export default ProductInfo;
