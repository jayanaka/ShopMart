/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {View, SafeAreaView, FlatList, Dimensions, RefreshControl} from 'react-native';

import Toast from 'react-native-toast-message';
import {ErrorResponse} from '../networking/APIManager';
import {useAppDispatch, useAppSelector} from '../hooks/useRedux';
import {getProductList} from '../redux/appAction';
import ProductItem from '../components/ProductItem';
import {Product} from '../redux/appModal';
import {setSelectedProduct} from '../redux/appSlice';
import {Header} from '../components/Header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Products = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  
  const {loading, products} = useAppSelector(state => state.app);
  const bottomSafeAreaSpace = insets.bottom;

  const numColumns = 2;
  const screen_width = Dimensions.get('window').width;
  const column_width = (screen_width - 24) / numColumns;

  useEffect(() => {
    initAction(false);
  }, []);

  const initAction = async (isRefresh: boolean) => {
    dispatch(
      getProductList(isRefresh, (error: ErrorResponse) => {
        Toast.show({
          type: error.type,
          text1: error.title,
          text2: error.message,
        });
      }),
    );
  };

  const onRefresh = () => {
    initAction(true);
  };

  const onPressProductAction = (item: Product) => {
    dispatch(setSelectedProduct(item));
    navigation.navigate('ProductInfo');
  };

  const onPressCartAction = () => {
    navigation.navigate('Cart');
  };

  const renderProductItemData = ({item, index}: any) => {
    return (
      <ProductItem
        index={index}
        item={item}
        column_width={column_width}
        onPressHandler={(item: Product) => {
          onPressProductAction(item);
        }}
      />
    );
  };

  return (
    <View className="flex-[1] bg-white pt-8">
      <SafeAreaView />
      <Header
        title="ShopMart"
        isShowCart={true}
        onCartPress={onPressCartAction}
      />
      <FlatList
        className="pl-1"
        data={products}
        numColumns={numColumns}
        keyExtractor={(item, index) => `pi${index}-${item.id}`}
        renderItem={renderProductItemData}
        contentContainerStyle={{paddingBottom: bottomSafeAreaSpace + 24}}
        refreshControl={
          <RefreshControl
            refreshing={loading === 2 ? true : false}
            onRefresh={onRefresh}
            colors={['grey']}
            progressBackgroundColor={'black'}
          />
        }
      />
    </View>
  );
};

export default Products;
