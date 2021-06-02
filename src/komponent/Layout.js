import React from 'react'
import { View, Text, ScrollView } from 'react-native'

const Layout = ({ children }) => {
    return (
        <View style={{flex : 1, backgroundColor : '#b3ffb3'}}>
            <ScrollView>
            <View style={{alignItems : 'center', justifyContent : 'center', height : 50, backgroundColor : 'green', marginBottom : 10}}>
                <Text style={{fontSize : 20, fontWeight : 'bold', color : 'white'}}>E-ARIS</Text>
            </View>
            <View style={{justifyContent : 'center', alignItems : 'center', marginBottom : 20}}>
                <Text style={{fontWeight : 'bold', fontSize : 20}}>Elektronik Antrian Informasi Sidang</Text>
                <Text style={{fontWeight : 'bold', fontSize : 20}}>Pengadilan Negeri Kefamenanu</Text>
            </View>
            
            <View style={{marginHorizontal : 10}}>
                {
                    children
                }
            </View>
            </ScrollView>
        </View>
    )
}

export default Layout