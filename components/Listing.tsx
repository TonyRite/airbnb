import { View, Text, FlatList, ListRenderItem, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { defaultStyles } from '@/constants/Styles';
import { Link } from 'expo-router';



interface Props {
    listing: any[];
    category: string
}

const Listing = ({ listing:items, category }: Props) => {
const [loading ,setLoading] = useState(false);
const listRef = useRef<FlatList>(null);

    useEffect(() => {
        console.log("Reloading Listing:",items.length);
        setLoading(true);

        setTimeout(()=>{
            setLoading(false);
        },200)
    }, [category])

    const renderRow: ListRenderItem<any> =({item}) =>(
        <Link href ={`/listing/${item.id}`}>
            {/* Go there */}
            <TouchableOpacity>
                <View>
                    <Image source={{uri:item.medium_url}}/>
                </View>
            </TouchableOpacity>
            </Link>
    )

    return (
        <View style={defaultStyles.container}>
           <FlatList renderItem={renderRow} ref={listRef} data={loading?[]:items}/>
        </View>
    )
}

export default Listing