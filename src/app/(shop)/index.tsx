import { View, FlatList, StyleSheet } from 'react-native'
import { PRODUCTS } from '../../../assets/products'
import ProductListItem from '../../components/product-list-item'
import ListHeader from '../../components/list-header'
import Auth from '../auth'


export default function Home() {
  return (
    <View>
      <FlatList 
        data={PRODUCTS} renderItem={({item}) => (
          <ProductListItem product={item}/>
        )} 
        keyExtractor={item => item.id.toString()} 
        numColumns={2}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.flatlistContent}
        columnWrapperStyle={styles.flatlistColumn}
        style={styles.flatlist}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  flatlist: {
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  flatlistContent: {
    paddingBottom: 20,
  },
  flatlistColumn: {
    justifyContent: 'space-between'
  }
})
