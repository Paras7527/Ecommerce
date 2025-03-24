import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
    return (
        <LinearGradient colors={['#f8cbfb', '#FFFFFF']} style={styles.Container}>

            <TouchableOpacity
                style={styles.settingsButton}
                onPress={() => console.log('Settings pressed')}
            >
                <Ionicons name="settings" size={30} color="#c34c91" style={styles.settingicon}/>
            </TouchableOpacity>
            <View style={styles.profileContainer}>
                <Image
                    source={require('../assets/Paras.jpeg')}
                    style={styles.profileImage}
                />
                <Text style={styles.profileText}>Paras Kulkarni</Text>
                <Text style={styles.profileContact}>+917020366322</Text>
            </View>

            <View style={styles.boxesContainer}>
                {/* First row */}
                <View style={styles.row}>
                    <TouchableOpacity style={styles.box}>
                        <Text style={styles.boxText}>My Orders</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.box}>
                        <Text style={styles.boxText}>Wishlist</Text>
                    </TouchableOpacity>
                </View>

                {/* Second row */}
                <View style={styles.row}>
                    <TouchableOpacity style={styles.box}>
                        <Text style={styles.boxText}>Coupons</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.box}>
                        <Text style={styles.boxText}>Help Center</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 15,
    },
    profileContainer: {
        marginTop: 40,
        marginHorizontal: 20,
        alignItems: "center",
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 85,
        borderColor: "#c34c91",

    },
    profileText: {
        fontSize: 24,
        color: "#000",
        fontWeight: "bold",
        marginTop: 20,
    },
    profileContact: {
        fontSize: 15,
        color: "#000",
        marginTop: 5,
    },
    boxesContainer: {
        marginTop: 30,
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    box: {
        backgroundColor: '#fff',
        width: '48%',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.65,
        shadowRadius: 3.84,
        elevation: 5,
    },
    boxText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#c34c91',
    },
    settingicon:{
        marginLeft:370,
        marginTop:30,
    }

})