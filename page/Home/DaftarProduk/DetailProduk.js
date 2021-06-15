import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ProductComponent } from '../../../components/components';
import { Fire } from '../../../config';

const DetailProduk = ({ navigation }) => {
  const [productDetail, setProductDetail] = useState([])
  useEffect(() => {
    Fire.database()
      .ref('product/')
      .once('value')
      .then(res => {
        console.log('data: ', res.val())
        if (res.val()) {
          console.log('a', Object.values(res.val()))
          setProductDetail(Object.values(res.val()))
        }
      })
      .catch(err => {
        const errorMessage = error.message
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: '#E06379',
          color: '#FFFFFF'
        })
        console.log('error: ', error)
      })
  }, [])
  return (
    <View>
      {productDetail.map(item => {
        return (
          <ProductComponent
            key={item.id}
            status={'Pending'}
            name={item.name}
            price={item.price}
            images={[
              item.images.image,
              item.images.image1,
              item.images.image2,
              item.images.image3,
              item.images.image4,
              item.images.image5
            ]}
            location={item.location}
            kilometer={item.kilometer}
            ref_code={item.ref_code}
            year={item.year}
            date={item.date}
            desc={item.desc}
            back={() => navigation.goBack()}
          />
        )
      })}
    </View>
  );
};

export default DetailProduk;

const styles = StyleSheet.create({});