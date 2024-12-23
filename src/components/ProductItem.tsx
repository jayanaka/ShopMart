/* eslint-disable react/react-in-jsx-scope */
import {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Product} from '../redux/appModal';
import FastImage from 'react-native-fast-image';

interface ProductItemItemProps {
  index: number;
  item: Product;
  column_width: number;
  onPressHandler: (iItem: Product) => void;
}

const ProductItem: FC<ProductItemItemProps> = (props: ProductItemItemProps) => {
  const {index, item, column_width, onPressHandler} = props;

  return (
    <TouchableOpacity
      key={index}
      className="bg-white rounded-lg shadow m-1"
      onPress={() => {
        onPressHandler(item);
      }}>
      <View style={{width: column_width}} className="justify-center p-2">
        <FastImage
          className="m-5 h-56 w-full mx-auto object-cover bg-white rounded-lg"
          source={{
            uri: item.mainImage,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text className="text-dark text-lg mb-1 font-" numberOfLines={1}>{item.name}</Text>
        <Text className="text-dark dark:text-white font-bold">{`${item.price?.currency}${item.price?.amount}`}</Text>
        <View className={`absolute w-2.5 h-2.5 rounded-full ${item.stockStatus === 'IN STOCK' ? 'bg-green-500' : 'bg-red-500'} top-1.5 right-1.5`} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
