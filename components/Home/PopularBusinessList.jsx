import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'
import PopularBusinessCard from './PopularBusinessCard'

export default function PopularBusinessList() {
  const [businessList, setBusinessList] = useState([])
  useEffect(()=>{
    GetBusinessList();
  },[])
  const GetBusinessList=async ()=>{
    setBusinessList([])  
    const q=query(collection(db,'BusinessList'),limit(10))
    const querySnapshot=await getDocs(q)
querySnapshot.forEach((doc)=>{
  // console.log(doc.data());
  setBusinessList(prev=>[...prev,doc.data()])
  
})
  }
  return (
    <View>

<View style={{padding:20,display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10,alignItems:'center'}}>
      <Text  style={{ fontFamily: 'Outfit-SemiBold', fontSize: 20,marginBottom:10 }}>Popular Business </Text>
      <Text style={{fontFamily: 'Outfit-Medium',fontSize:15,color:Colors.PRIMARY}}>
        View all
      </Text>
    </View>
    <FlatList
    data={businessList}
    horizontal={true}
renderItem={({item,index})=>(
  <PopularBusinessCard business={item} key={index}/>
  )}
    />
    </View>
  )
}