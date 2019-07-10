import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../stylesheet/detailView.style'
import HeaderMenuAndBell from './common/HeaderMenuAndBell';
import { SafeAreaView } from 'react-navigation';

export default class DetailView extends Component {
    render() {
        console.log(" pro=====", this.props.navigation.state.params);
        const { name, address, phone_number, picture } = this.props.navigation.state.params.data;
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                <View style={styles.container}>

                    <HeaderMenuAndBell viewName={'Detail information'} navigation={this.props.navigation} isShowRightButton={false} isShowLeftButton={true}/>

                    <View style={{ alignSelf: 'center', marginTop: '5%' }}>

                        <Image style={{ width: 150, height: 150, borderRadius: 75 }} source={{ uri: picture }} />
                        <View style={styles.viewNameDescription}>
                            <Text> Name: {name} </Text>
                            <Text>Address: {address}</Text>
                            <Text>Phone Numbe: {phone_number}</Text>
                        </View>

                    </View>
                    <View style={styles.viewSingleLine}></View>



                </View>
            </SafeAreaView>

        )
    }
}
