import React, { useContext } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Layout from '../komponent/Layout'
import background from '../assets/background.jpg'
import { GlobalContext } from '../provider/GlobalProvider';

const HomeScreen = ({navigation}) => {
    const {form, setForm} = useContext(GlobalContext)

    return(
        <Layout>
            <View>
                <TouchableOpacity onPress={() => {
                    setForm({...form, jenis_perkara : 'PERDATA'})
                }} style={{marginBottom : 30}}>
                    <ImageBackground source={background} imageStyle={{ borderRadius: 10}} style={{width : '100%'}}>
                        <View style={{justifyContent : 'center', alignItems : 'center'}}>
                            <Text style={{fontSize : 30, marginTop : 5, color : 'white'}}>
                                PERDATA
                            </Text>
                        </View>
                    <View style={{justifyContent : 'flex-end', alignItems : 'flex-end', marginVertical : 10}}>
                            <Text style={{color : 'white', marginRight : 10}}>Silahkan tekan untuk mendaftarkan antrian</Text>
                    </View>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setForm({...form, jenis_perkara : 'PIDANA'})
                    }}
                >
                    <ImageBackground source={background} imageStyle={{ borderRadius: 10}} style={{width : '100%'}}>
                        <View style={{justifyContent : 'center', alignItems : 'center'}}>
                            <Text style={{fontSize : 30, marginTop : 5, color : 'white'}}>
                                PIDANA
                            </Text>
                        </View>
                    <View style={{justifyContent : 'flex-end', alignItems : 'flex-end', marginVertical : 10}}>
                            <Text style={{color : 'white', marginRight : 10}}>Silahkan tekan untuk mendaftarkan antrian</Text>
                    </View>
                    </ImageBackground>
                </TouchableOpacity>
                
            </View>
        </Layout>
    )
}

export default HomeScreen