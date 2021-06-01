import React from 'react'
import { View, Text } from 'react-native'

const Layout = ({ children }) => {
    return (
        <View style={{flex : 1, backgroundColor : '#b3ffb3'}}>
            <View style={{alignItems : 'center', justifyContent : 'center', height : 50, backgroundColor : 'green', marginBottom : 10}}>
                <Text style={{fontSize : 20, fontWeight : 'bold', color : 'white'}}>E-ARIS</Text>
            </View>
            <View style={{justifyContent : 'center', alignItems : 'center', marginBottom : 20}}>
                <Text style={{fontWeight : 'bold', fontSize : 20}}>Elektronik Antrias Informasi Sidang</Text>
                <Text style={{fontWeight : 'bold', fontSize : 20}}>Pengadilan Negeri Kefamenanu</Text>
            </View>
            
            <View style={{marginHorizontal : 10}}>
                {
                    children
                }
            </View>
        </View>
    )
}

export default Layout