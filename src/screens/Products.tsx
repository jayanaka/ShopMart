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

import Colors from '../theme/Colors';
import Toast from 'react-native-toast-message';
import {ErrorResponse} from '../networking/APIManager';
import {useAppDispatch, useAppSelector} from '../hooks/useRedux';
import {getProductList} from '../redux/appAction';
import ProductItem from '../components/ProductItem';
import { Product } from '../redux/appModal';
import { setSelectedProduct } from '../redux/appSlice';
import { Header } from '../components/Header';

const Products = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const {loading, products} = useAppSelector(state => state.app);

  const numColumns = 2;
  const screen_width = Dimensions.get('window').width;
  const column_width = screen_width / numColumns;

  useEffect(() => {
    initAction();
  }, []);

  const initAction = async () => {
    dispatch(
      getProductList((error: ErrorResponse) => {
        Toast.show({
          type: error.type,
          text1: error.title,
          text2: error.message,
        });
      }),
    );
  };

  const onPressProductAction = (item: Product) => {
    console.log('onPressProductAction-------------', item);
    dispatch(setSelectedProduct(item));
 
    navigation.navigate('ProductInfo');
  };

  const onPressCartAction = () => {
    navigation.navigate('Cart');
  };

  const renderProductItemData = ({item, index}: any) => {
    return (
      <ProductItem index={index} item={item} column_width={column_width} onPressHandler={(item: Product) => {
        onPressProductAction(item);
      }} />
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.BACKGROUND_COLOR}}>
      <SafeAreaView />
      <Header title='ShopMart' isShowCart={true} onCartPress={onPressCartAction}/>
      <FlatList
        data={products}
        numColumns={numColumns}
        keyExtractor={(item, index) => `pi${index}`}
        renderItem={renderProductItemData}
      />
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

export default Products;
