import React from 'react';
import { StyleSheet, View,} from 'react-native';

const Card = props => {
    return <View style={{ ...style.card, ...props.style }}>
        {props.children}
    </View>
}

export default Card;

const style = StyleSheet.create({
    card: {
        shadowOffset: 0.26,
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowRadius: 8,
        backgroundColor: "white",
        elevation: 5,
        padding: 20,
        borderRadius: 10
    }
})
