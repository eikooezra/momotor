import React, {Component} from 'react';
import axios from 'axios'
import {
    View,
    FlatList,
    ListItem,
    StyleSheet,
    Text
} from 'react-native'

class Test extends Component{
    constructor(props){
        super(props)
        this.state = {
            dataSource: [],
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`, {
            params: {
                _limit: 1
            }
        })
          .then(res => {
            const dataSource = res.data;
            console.log(dataSource);
            this.setState({ dataSource });
          })
      }

    _renderItem = ({ item, index }) => {
        return(
            <View>
                <Text>{item.title}</Text>
            </View>
        )
    }

    render(){
        let {dataSource} = this.state
        return(
            <View style={styles.container}>
                    <FlatList
                        data={dataSource}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
            </View>
        )
    }
}

export default Test

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})