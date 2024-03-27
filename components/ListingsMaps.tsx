import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps'
import { defaultStyles } from '@/constants/Styles'
import { useRouter } from 'expo-router'
import MapView from 'react-native-map-clustering'

interface Props{
 listing:any
}
const INITIAL_REGION ={
latitude:37.33,
longitude:-122,
latitudeDelta:9,
longitudeDelta:9,
};

const ListingsMaps = ({listing}:Props) => {
    const router = useRouter();

    const onMarkerSelected =(item:listingGeo)=>{
        router.push(`/listing/${item.properties.id}`)
    }
  return (
    <View style={defaultStyles.container}>
       <MapView
       animationEnabled={false}
       style={StyleSheet.absoluteFill}
       provider={PROVIDER_DEFAULT}
       showsUserLocation
       showsMyLocationButton
       initialRegion={INITIAL_REGION}
       clusterColor='#fff'
       clusterTextColor='#000'
       clusterFontFamily='mon-sb'
       >
        {
            listing.features.map((item: listingGeo)=>(
                <Marker
                key={item.properties.id}
                onPress={()=>onMarkerSelected(item)}
                coordinate={{
                    latitude:+item.properties.latitude,
                    longitude:+item.properties.longitude
                }}
                >
                    <View style={styles.marker}>
                        <Text style={styles.markerText}> $ {item.properties.price}</Text>
                    </View>
                </Marker>

            ))
        }
       </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    marker:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    padding:6,
    borderRadius:12,
    elevation:5,
    shadowColor:'#000',
    shadowOpacity:0.1,
    shadowRadius:6,
    shadowOffset:{
        width:1,
        height:10
    },
    },
    markerText:{
        fontSize:14,
        fontFamily:'mon-sb'
    }
})
export default ListingsMaps