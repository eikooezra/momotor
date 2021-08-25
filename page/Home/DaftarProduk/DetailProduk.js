import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ProductComponent } from '../../../components/components';
import { Fire } from '../../../config';
import { getData } from '../../../utils/localstorage/localstorage';

const DetailProduk = ({ navigation, route }) => {
  const detail = route.params
  const [productDetail, setProductDetail] = useState([])
  useEffect(() => {
    getDetailById(detail.ProductId)
  }, [])

  const getDetailById = (id) => {
    console.log('all data :',detail)
    console.log('id', id)
    getData('user').then(res => {
      Fire.database()
        .ref('product/' + res.uid + '/')
        .orderByChild('ProductId')
        .equalTo(id)
        .once('value')
        .then(res => {
          console.log('a: ', res.val())
          if (res.val()) {
            console.log('b', Object.values(res.val()))
            setProductDetail(Object.values(res.val()))
          }
        })
        .catch(error => {
          const errorMessage = error.message
          showMessage({
            message: errorMessage,
            type: 'default',
            backgroundColor: '#E06379',
            color: '#FFFFFF'
          })
          console.log('error: ', error)
        })
    })
  }

  return (
    <View>
      {productDetail.map(item => {
        console.log('c', item)
        return (
          <ProductComponent
            id={item.id}
            status={item.status}
            name={item.name}
            price={item.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
            images={[
              item.images.image,
              item.images.image1,
              item.images.image2,
              item.images.image3,
              item.images.image4,
              item.images.image5
            ]}
            location={item.location}
            kilometer={item.kilometer.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
            ref_code={item.ref_code}
            year={item.year}
            date={item.date}
            desc={item.desc}
            back={() => navigation.goBack()}
            onPress={() => navigation.navigate('EditProduct', item)}
          />
        )
      })}
    </View>
  );
};

export default DetailProduk;

const styles = StyleSheet.create({});