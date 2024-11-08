import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from './../../constants/Colors'

export default function CategoryItem({category,onCategoryPress}) {
  return (
    <TouchableOpacity onPress={()=>onCategoryPress(category)}>
     <View style={{padding:15,backgroundColor:Colors.ICON_BG,borderRadius:99,marginRight:15}}>
  <Image
    source={{uri: category.icon}}
    style={{width: 60, height: 60,}}
/>
</View>
<Text style={{textAlign:'center',fontFamily:'Outfit-Medium',fontSize:15, marginLeft:-15, marginTop:5}}>
  {category.name}
 
</Text>
    </TouchableOpacity>
  )
}