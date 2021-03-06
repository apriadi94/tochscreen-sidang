import React, { useState, useContext } from 'react'
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import Layout from '../komponent/Layout'
import { GlobalContext } from '../provider/GlobalProvider'
import axios from 'axios'
import moment from 'moment'

const InputScreen = ({navigation}) => {
    const {form, setForm} = useContext(GlobalContext)
    const [arrPihak, setArrPihak] = useState([])

    const pihak = {
        PERDATA : ["PENGGUGAT", "KUASA HUKUM PENGGUGAT", "PEMOHON", "KUASA HUKUM PEMOHON", "TERGUGAT", "KUASA HUKUM TERGUGAT", "TERMOHON", "KUASA HUKUM TERMOHON"],
        PIDANA : ["PENUNTUT UMUM", "PENASIHAT HUKUM"]
    }

    const makeNewArray = (pihak) => {
        const newPihak = []
        for(let i = 1; i <= 10; i++){
            if(!pihak.includes("KUASA HUKUM")){
                newPihak.push(`${pihak} ${i}`)
            }
        }

        setArrPihak(newPihak)
    }

    const [loading, setLoading] = useState(false)

    const saveAntrian = async () => {
        setLoading(true)
        await axios({
            method : 'post',
            url : `http://36.92.93.61:3789/api/notif`,
            data : {
                tanggal : moment().format('YYYY-MM-DD'),
                jenis_perkara: form.jenis_perkara, 
                nomor_perkara: form.nomor_perkara, 
                pihak: form.jenis_pihak
            }
        }).then(res => {
            setForm({
                jenis_perkara : '', nomor_perkara : '', jenis_pihak : '', action : ''
            })
            navigation.goBack()
        }).catch(err => {
            console.log(err)
        })
        setLoading(false)
    }

    return(
        <Layout>
            <View style={{width : 100}}>
                <Button title={'Kembali'} onPress={() => {
                    setForm({
                        jenis_perkara : '', nomor_perkara : '', jenis_pihak : '', action : ''
                    })
                    navigation.goBack()
                }}/>
            </View>
            <View style={{marginTop : 20, backgroundColor : '#e6ffcc', borderRadius : 5}}>
                <View style={{marginHorizontal : 10, marginVertical : 10}}>
                    <Text>Isikan Nomor Perkara Anda</Text>
                    <View style={{borderBottomWidth : 1, borderBottomColor : '#cccccc'}}>
                        <TextInput value={form.nomor_perkara} onChangeText={(e) => setForm({...form, nomor_perkara : e}) }/>
                    </View>
                    <Text style={{marginTop : 20}}>Pilih Jenis Pihak</Text>
                        <View style={{backgroundColor : '#80ff80', marginTop : 10}}>
                           {
                               form.jenis_perkara === 'PERDATA' ?
                               pihak.PERDATA.map((list, index) => 
                                <TouchableOpacity onPress={() => {
                                    setForm({...form, jenis_pihak : list})
                                    makeNewArray(list)
                                }} key={index} style={{marginBottom : 10, marginLeft : 10, marginTop : 10}}>
                                    {
                                        <Text style={{
                                            color : form.jenis_pihak === list ? 'red' : 'black'
                                        }}>{list}</Text>
                                    }
                                </TouchableOpacity>
                               ) :
                               pihak.PIDANA.map((list, index) => 
                               <TouchableOpacity onPress={() => setForm({...form, jenis_pihak : list})} key={index} style={{marginBottom : 10, marginLeft : 10, marginTop : 10}}>
                                    <Text style={{
                                        color : list === form.jenis_pihak ? 'red' : 'black'
                                    }}>{list}</Text>
                                </TouchableOpacity>
                               )
                           }

                        </View>

                        <View style={{marginTop : 20, backgroundColor : '#99ff66', marginHorizontal : 20, borderRadius : 10}}>
                        {
                               arrPihak.length > 0 ?
                               arrPihak.map((list, index) => 
                                    <TouchableOpacity onPress={() => {
                                        setForm({...form, jenis_pihak : list})
                                    }} key={index} style={{marginBottom : 10, marginLeft : 10, marginTop : 10}}>
                                        {
                                            <Text style={{
                                                color : form.jenis_pihak === list ? 'red' : 'black'
                                            }}>{list}</Text>
                                        }
                                    </TouchableOpacity>
                                )
                               :null
                           }
                        </View>
                    <View style={{marginTop : 20}}>
                        <Button color='grey' disabled={loading || form.nomor_perkara === '' || form.jenis_pihak === ''} onPress={saveAntrian} title={'Simpan'}/>
                    </View>
                </View>

            </View>
        </Layout>
    )
}

export default InputScreen