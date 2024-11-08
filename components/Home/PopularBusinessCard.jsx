import { View,Image,Text } from 'react-native'
import React from 'react'
import {Colors} from './../../constants/Colors'

export default function PopularBusinessCard({business}) {
  return (
    <View style={{
      marginLeft:20,
      padding:10,
      backgroundColor:'#fff',
      borderRadius:15,
     

    }}>
   <Image source={{uri:business?.imageUrl}}
   style={{width:200, height:130, borderRadius:15
   }}/> 
 <View style={{marginTop:7,gap:5}}>
 <Text style={{fontFamily:'Outfit-SemiBold',fontSize:17, marginLeft:5}}>
   {business?.name}
   </Text>
   <Text style={{fontFamily:'Outfit-Regular',fontSize:13, marginLeft:5,color:Colors.GRAY}}>
   {business?.address}
   </Text>
   <View style={{display:'flex',flexDirection:'row' ,gap:8, alignItems:'center',justifyContent:'space-between'}} >
<View style={{display:'flex',flexDirection:'row' ,gap:8, alignItems:'center'}}>
<Image source={require('./../../assets/images/star.png')}
   style={{ width:15, height:15, marginLeft:5}} />
   <Text style={{fontFamily:'Outfit-Regular',color:Colors.GRAY}}>4.5</Text>
</View>
<Text style={{fontFamily:'Outfit-Medium'}}>
  {business?.category}
</Text>
</View>
 </View>
    </View>
  )
}