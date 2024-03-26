import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { defaultStyles } from '@/constants/Styles';


interface Props {
    listing: any[];
    category: string
}

const Listing = ({ listing, category }: Props) => {
    useEffect(() => {
        console.log("Reloading Listing:",listing.length)
    }, [category])

    return (
        <View style={defaultStyles.container}>
            <Text>Listing</Text>
        </View>
    )
}

export default Listing