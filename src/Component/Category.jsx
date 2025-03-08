import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Category = ({ item, selectedCategory, setSelectedCategory }) => {
    console.log('selectedCategory',selectedCategory);
    return (
        <TouchableOpacity onPress={()=>setSelectedCategory(item)}>
            <Text style={[styles.Category, selectedCategory === item &&
                { color: "#FFFFFF", backgroundColor: "#71c3ff" }]}>
                {item}
            </Text>
        </TouchableOpacity>
    )
}

export default Category

const styles = StyleSheet.create({
    Category: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#545454",
        backgroundColor: "#cacaca",
        marginTop: 20,
        padding: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        textAlign: "center",
        borderRadius: 20,
        marginHorizontal: 10,

    }
})