import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { ProductComponent } from '../../../components/components';

const DetailProduk = ({navigation}) => {
  return (
    <View>
        <ProductComponent
            text={'Pending'}
            back={() => navigation.goBack()}
        />
    </View>
  );
};

export default DetailProduk;

const styles = StyleSheet.create({});