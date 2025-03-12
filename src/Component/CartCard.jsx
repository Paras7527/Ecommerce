import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const ImageURI = "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const CartCard = () => {
    return (
        <SafeAreaView style={styles.Container}>
            <Image source={{ uri: ImageURI }} style={styles.coverimage} marginTop={20} />
            <SafeAreaView style={styles.CartContent}>
                <Text style={styles.title}>Jacket Jeans</Text>
                <Text style={styles.price}>$37.9</Text>
                <SafeAreaView style={styles.CircleSizeContainer}>
                    <View style={styles.circle} />
                    <View style={styles.sizecircle}>
                        <Text style={styles.SizeText}>L</Text>
                    </View>
                </SafeAreaView>
            </SafeAreaView>
            <FontAwesome6 name={"trash"} size={20} color={"#ff6ee7"} marginHorizontal={20} />
        </SafeAreaView>
    )
}

export default CartCard

const styles = StyleSheet.create({
    Container: {
        marginLeft: 20,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    coverimage: {
        width: "25%",
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