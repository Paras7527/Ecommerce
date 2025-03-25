import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const ProfileScreen = () => {
    const navigation = useNavigation();
    const settingsData = [
        { id: '1', icon: <Ionicons name="person" size={22} color="#c34c91" />, text: 'Edit Profile' },
        { id: '2', icon: <FontAwesome name="credit-card" size={20} color="#c34c91" />, text: 'Saved Credit/Debit & Gift Cards' },
        { id: '3', icon: <Ionicons name="location" size={22} color="#c34c91" />, text: 'Saved Addresses' },
        { id: '4', icon: <MaterialIcons name="language" size={22} color="#c34c91" />, text: 'Select Language' },
        { id: '5', icon: <Ionicons name="notifications" size={22} color="#c34c91" />, text: 'Notification Settings' },
        { id: '6', icon: <MaterialCommunityIcons name="shield-account" size={22} color="#c34c91" />, text: 'Privacy Activity' },
    ];
    const renderSettingItem = ({ item }) => (
        <TouchableOpacity style={styles.settingsItem}>
            <View style={styles.settingsIconContainer}>{item.icon}</View>
            <Text style={styles.settingsText}>{item.text}</Text>
            <Ionicons name="chevron-forward" size={20} color="#888" style={styles.arrowIcon} />
        </TouchableOpacity>
    );
    return (
        <LinearGradient colors={['#f8cbfb', '#FFFFFF']} style={styles.Container}>
            <FlatList
                data={settingsData}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <>
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
                                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('MyOrderScreen')}>
                                    <Text style={styles.boxText}>My Orders</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Wishlist')}>
                                    <Text style={styles.boxText}>Wishlist</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Second row */}
                            <View style={styles.row}>
                                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Coupons')}>
                                    <Text style={styles.boxText}>Coupons</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('HelpCenter')}>
                                    <Text style={styles.boxText}>Help Center</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <Text style={styles.sectionTitle}>Account Settings</Text>
                    </>
                }
                renderItem={renderSettingItem}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
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
        marginTop: 60,
        marginHorizontal: 20,
        alignItems: "center",
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 85,
        borderColor: "#c34c91",
        borderWidth: 2,

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
    settingsSection: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginHorizontal: 10,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#c34c91',
        paddingLeft: 5,
        marginTop: 15,
        marginLeft: 120,
    },
    settingsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    settingsIconContainer: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#faedf8',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
    settingsText: {
        flex: 1,
        fontSize: 15,
        color: '#333',
        marginLeft: 15,
    },
    arrowIcon: {
        marginRight: 20,
    },

})