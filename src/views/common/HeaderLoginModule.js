import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default class HeaderLoginModule extends Component {

    onPressBack = () => {

        this.props.navigation.goBack();
    }
    render() {

        return (
            <View style={styles.headerView}>
                <TouchableOpacity style={styles.backButton} onPress={()=>this.onPressBack()}>
                    <Icon name="arrowleft" style={{fontSize:30,padding:10, color:'black'}}/>
                </TouchableOpacity>
                <Text style={styles.titleStyle}> {this.props.viewName}</Text>
                <View style={{flex:0.2}}/>
            </View>
        )
    }
}

const styles = {
    headerView: {
        backgroundColor: 'rgb(246, 205, 74)',
        flexDirection: 'row',
        height: 64,
        justifyContent: 'center',
       // flex:1,
       // marginTop: Platform.OS === 'ios' ? '-12%' : '0%'
    },
    backButton: {
        flex:0.2,
       height:'100%', 
        justifyContent: 'center',

    },
    titleStyle: {
        marginLeft: '-0.2%',
        flex:0.6,
        color: 'black',
        // fontFamily: 'Montserrat-Regular',
        // fontWeight:'200',
        fontSize: 20,
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'center',

    },
   
}