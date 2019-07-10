import React, { Component } from 'react';
import { View, FlatList, TextInput, isEmpty } from 'react-native';
import styles from '../stylesheet/dashboard.style'
import HeaderMenuAndBell from './common/HeaderMenuAndBell';
import IconEvilIcons from "react-native-vector-icons/EvilIcons";

import { SafeAreaView } from 'react-navigation';
import * as CONST from '../constants/Constant';
import DashboardCell from '../views/common/DashboardCell';
import Customers from '../../assets/Customers.json';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearchbarDataShow: false,
            isCrossClick: false,
            searchBarBgColor: 'rgb(64,66, 67)',
            searchTextColor: 'white',
            searchIconColor: 'white',
            textSearch: '',
            query: "",
            visible: true,

            isCurrentActivitySelected: true,
            isActiveBids: true,
            isDeliveries: false,
            isPendingReviews: false,
            isRefundRequests: false,
            arrayData:Customers,
            allValues:Customers,
        }
        

    }

    /* Search functionality*/
   
    _onChange = (name, value) => {
        let text = value;
        if (text.length > 0) {
            this.setState({
                isSearchbarDataShow: true,
                searchBarBgColor: 'white',
                searchTextColor: 'black',
                searchIconColor: 'black'
            })
        } else {
            this.setState({
                isSearchbarDataShow: false,
                searchBarBgColor: 'rgb(64,66, 67)',
                searchTextColor: 'white',
                searchIconColor: 'white',
            })
        }
        this.setState(
            {
                [name]: value
            },
            () => {
                const query = value.trim();
                if (query.length>0) {
                    this.SearchFilterFunction(query);
                }else{
                    this.setState({
                        arrayData:this.state.allValues
                    })
                }
            }
        );
    };

    SearchFilterFunction(text) {
     let data; 
        data = this.state.allValues.filter(item=>{
         return (
             item.name.toLowerCase().includes(text.toLowerCase())|| item.phone_number.toLowerCase().includes(text.toLowerCase())|| item.address.toLowerCase().includes(text.toLowerCase())
         )})
         this.setState({
             arrayData:data
         })
      }

    renderItem = (item, index) => {
        console.log(" Item is ", item.item);

        return (
            <DashboardCell navigation ={this.props.navigation} item={item} index={index} />
        );
    }
    render() {

        return (

            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                <View style={{ flex: 1 }}>

                    <HeaderMenuAndBell viewName={'Dashboard'} navigation={this.props.navigation} isShowRightButton={false} isShowLeftButton={false}/>

                    <View style={[styles.searchBarView, { backgroundColor: this.state.searchBarBgColor }]}>
                        <IconEvilIcons name="search" color={this.state.searchIconColor} style={{ position: 'absolute', marginLeft: '3%', marginTop: '4%', marginRight: '1%', fontSize: 40 }} />
                        <TextInput
                            placeholderTextColor={this.state.searchTextColor}
                            placeholder='Search ...'
                            style={[styles.inputSearchStyle, { color: 'black' }]}
                            value={this.state.query}
                            onChangeText={text => this._onChange("query", text)}
                            name="query"
                        />
                    </View>
                   

                    <FlatList style={styles.flatListCurrentActivity}
                        data={this.state.arrayData}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
  

                </View>
            </SafeAreaView>

        )
    }
}

