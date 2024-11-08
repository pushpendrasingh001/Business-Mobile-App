import { View,Image,Text,TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Colors,color } from './../../constants/Colors';
import Feather from '@expo/vector-icons/Feather';
export default function Header() {
  const {user}=useUser();
  return (
<View style={{padding:20,paddingTop:40,backgroundColor:Colors.PRIMARY}}>
    <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:10 }} >
      <Image source={{uri:user?.imageUrl}} style={{width:45, height:45,borderRadius:99,}} />
     
     <View >
         <Text style={{color:'white'}}>
             Welcome,
        </Text>
    <Text style={{fontFamily:'Outfit-SemiBold',color:'white'}}>
             {user?.fullName}
    </Text>
      </View>
      </View>
      <View style={{backgroundColor:'white',display
        :'flex',flexDirection:'row',gap:10, alignItems:'center',padding:10,marginVertical:10, marginTop:15,borderRadius:10
      }}>
       
        <Feather name="search" size={24} color={Colors.PRIMARY} />
        <TextInput placeholder='Search...' style={{fontSize:16,fontFamily:'Outfit-Regular',width:250,}}  />
        
      </View>
     </View>
  


  )
}