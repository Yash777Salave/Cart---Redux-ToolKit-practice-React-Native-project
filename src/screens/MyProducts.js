import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {products} from '../componant/Products';
import {useDispatch, useSelector} from 'react-redux';
import {addProducts} from '../redux/slice/AddProductSlice';

const MyProducts = () => {
  const dispatch = useDispatch();
  const storeProducts = useSelector(state => state.products);

  useEffect(() => {
    products.map(item => {
      if (storeProducts== 0) {
        dispatch(addProducts(item));
      }
    });
  }, []);
  console.log('All products-----------', storeProducts);
  return (
    <View style={styles.MainContainer}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={storeProducts}
        renderItem={({item, index}) =>
          item ? (
            <View style={styles.ProductCardContainer}>
              <View>
                <Image source={{uri: item.image}} style={styles.Images} />
              </View>
              <View style={{padding: 10}}>
                <Text style={styles.productTXT}>
                  {item.name.substring(0, 24) + '...'}
                </Text>
                <Text style={styles.brandTXT}>{item.brand}</Text>
                <Text style={[styles.brandTXT, {color: 'green', fontSize: 16}]}>
                  {'₹' + item.price}
                </Text>
                <View style={styles.MainPlusMinusCart}>
                  <View>
                    <TouchableOpacity style={styles.cartButton}>
                      <Text style={styles.cartButtonTXT}>Add To Cart</Text>
                    </TouchableOpacity>
                  </View>
                  {item.qty > 0 && (
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity style={styles.cartButton}>
                        <Text style={[styles.cartButtonTXT]}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.qty}>{'0'}</Text>
                      <TouchableOpacity style={styles.cartButton}>
                        <Text style={styles.cartButtonTXT}>+</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default MyProducts;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  ProductCardContainer: {
    // borderWidth: 1,
    height: 120,
    width: '94%',
    alignSelf: 'center',
    margin: 10,
    backgroundColor: '#ffff',
    elevation: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Images: {
    height: 100,
    width: 100,
  },
  productTXT: {
    fontSize: 15,
    // width: 200,
  },
  brandTXT: {
    fontSize: 14,
    width: 200,
    color: '#A8A8A8',
    fontWeight: 'bold',
  },
  cartButton: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 29,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    // width:
    margin: 10,
    marginTop: 10,
    borderRadius: 8,
  },
  cartButtonTXT: {
    fontSize: 15,
    color: '#ffff',
  },
  MainPlusMinusCart: {
    flexDirection: 'row',
  },
  qty: {
    padding: 5,
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 16,
    alignContent: 'center',
  },
});
