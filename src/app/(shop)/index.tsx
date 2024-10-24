import { View, FlatList, StyleSheet } from 'react-native'
import { PRODUCTS } from '../../../assets/products'
import ProductListItem from '../../components/product-list-item'
import ListHeader from '../../components/list-header'
import { useAuth } from '../../providers/auth-provider'


export default function Home() {

  const {user} = useAuth()

  console.log('user =>', user);
  

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
