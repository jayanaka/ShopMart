import {FC} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
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
            // style={styles.itemView}
            onPress={() => {
              onPressHandler(item);
            }}>
    <View style={{width: column_width}}>
      {/* <Image width={column_width*0.8} height={column_width*0.8} source={item.mainImage || ''} /> */}
      <FastImage
        style={{width: column_width * 0.8, height: column_width * 0.8}}
        source={{
          uri: item.mainImage,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text>{item.name}</Text>
      <Text>{`${item.price?.amount}${item.price?.currency}`}</Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default ProductItem;

// import { View, Text, Image } from 'react-native'

// export default function Product({ image_url, name, price, column_width }) {
//   return (
//     <View style={{ width: column_width }} className='justify-center p-3'>
//       <Image
//         className='m-5 h-56 w-full mx-auto object-cover bg-slate-500 rounded-lg'
//         source={image_url}
//       />
//       <Text className='text-dark mb-3'>
//         {name.substring(0, 30) + '...'}
//       </Text>
//       <Text className='text-dark dark:text-white font-bold'>{`$${price}.00`}</Text>
//     </View>
//   )
// }
