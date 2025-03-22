import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const ImageURI = "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const CartCard = ({item}) => {
    return (
        <SafeAreaView style={styles.Container}>
            <Image source={{ uri: item.image }} style={styles.coverimage} marginTop={20} />
            <SafeAreaView style={styles.CartContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <SafeAreaView style={styles.CircleSizeContainer}>
                    <View style={[styles.circle]} />
                    <View style={styles.sizecircle}>
                        <Text style={styles.SizeText}>L{item.size}</Text>
                    </View>
                </SafeAreaView>
            </SafeAreaView>
            <TouchableOpacity>
                <FontAwesome6 name={"trash"} size={20} color={"#ff6ee7"} marginHorizontal={20} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default CartCard

const styles = StyleSheet.create({
    Container: {
        marginLeft: 10,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    coverimage: {
        width: "30%",
        height: 170,
        borderRadius: 10,
    },
    CartContent: {
        flex: 1,
        marginHorizontal: 15,
    },
    title: {
        fontSize: 20,
        color: "#444444",
        fontWeight: 500,
    },
    price: {
        fontSize: 18,
        color: "#797979",
        marginTop: 10,
    },
    circle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#595959",
        justifyContent: "center",
        alignItems: "center",
    },
    CircleSizeContainer: {
        flexDirection: "row",
        marginTop: 10,
    },
    sizecircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#ff6ee7",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
    },
    SizeText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: 600,
        
    }

})