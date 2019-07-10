import React, { Component } from 'react';
import { View, Text,  Image, TouchableOpacity, } from 'react-native';
import styles from '../../stylesheet/dashboard.style'
import commonStyles from '../../stylesheet/common.style';

export default class DashboardCell extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { item, index, navigation } = this.props
 console.log(" Item o",item);
        return (
            <View style={styles.viewOuter}>
                <View style={styles.viewInner}>
                    <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }} onPress={()=> navigation.navigate('DetailView', {'data':item.item})}>

                        <View style={{ flexDirection: 'row', fontSize: 15}}>
                            <Image source={{ uri: item.item.picture }} style={{ width: 70, height: 70, borderRadius: 35
                         }} />
                         <View style={{marginLeft:'5%', marginTop:'3%'}}>
                         <Text style={[commonStyles.textTitleDashboard]}>
                            {item.item.name}
                        </Text>
                        <Text style={commonStyles.textDescriptionDashboard}>
                            {item.item.address}
                        </Text>
                        <Text style={commonStyles.textPriceDashboard}>
                                {item.item.phone_number}
                            </Text>
                         </View>

                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }

}