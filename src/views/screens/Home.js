import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TextInput, TouchableOpacity, FlatList } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from "../../const/colors";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import pets from "../../const/data"; //pets=data


const { height } = Dimensions.get("window"); //!!

const petCategories = [
    { name: "CATS", icon: "cat" },
    { name: "DOGS", icon: "dog" },
    { name: "BIRDS", icon: "ladybug" },
    { name: "RABBIT", icon: "rabbit" },
]


const style = StyleSheet.create({
    header: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    name: {
        color: COLORS.secondary,
        fontWeight: "bold",
        fontSize: 16
    },
    profile: {
        height: 50,
        width: 50,
        borderRadius: 50
    },
    main: {
        minHeight: height,
        backgroundColor: COLORS.light,
        marginTop: 10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    searchInput: {
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: 5,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    categories: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,

    },
    categoryButton: {
        height: 50,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: COLORS.primary,
    },
    categoryName: {
        color: COLORS.dark,
        fontSize: 10,
        marginTop: 5,
        fontWeight: "bold",
        padding: 6
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    cardImage: {
        height: 130,
        width: 120,
        backgroundColor: COLORS.background,
        borderRadius: 50,
    },
    cardDetail: {
        height: 120,
        backgroundColor: COLORS.background,
        flex: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 20,
        justifyContent: "center",

    }
});

//pet items
const Card = ({ navigation, pet }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("DetailsScreen", pet)} //route detail
        >
            <View style={style.card}>
                <View style={style.cardImage}>
                    <Image source={pet.image} style={{ width: "100%", height: "100%" }} />
                </View>
                <View style={style.cardDetail}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontWeight: "bold", color: COLORS.dark, fontSize: 20 }}>{pet.name}</Text>
                        <View>
                            <Text style={{ fontSize: 10, marginTop: 5, color: COLORS.dark }}>{pet.type} </Text>
                            <Text style={{ fontSize: 10, marginTop: 5, color: COLORS.primary }}>{pet.age}</Text>
                        </View>
                        <View style={{ marginTop: 5, flexDirection: "row" }}>
                            <FontAwesome name="map-marker" size={18} color={COLORS.primary} />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity >
    );
};

const Home = ({ navigation }) => {

    //active-inactive category
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);


    //****
    //filter pets
    const [filteredPets, setFilteredPets] = useState([]);
    //cats-dogs bölümlerini ayırır !!
    const filterPet = index => {
        const currentPets = pets.filter(item => item?.pet?.toUpperCase() == petCategories[index].name,)[0].pets;
        //console.log(currentPets);
        setFilteredPets(currentPets);
    };

    useEffect(() => {
        filterPet(0)
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, color: COLORS.white }}>

            {/* //Header */}
            <View style={style.header}>
                <AntDesign name="menufold" size={28} onPress={navigation.toggleDrawer} />
                <Text style={style.name}>SİMGE ATLIHAN</Text>
                <Image style={style.profile} source={require("../../assets/person.jpg")} />
            </View>

            {/* //Main */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.main}>
                    {/* //search */}
                    <View style={style.searchInput}>
                        <Feather name="search" size={24} color={COLORS.grey} />
                        <TextInput
                            placeholder="Search Pet.."
                            placeholderTextColor={COLORS.grey}
                            style={{ flex: 1, paddingLeft: 10 }}
                        />
                        <MaterialCommunityIcons name="sort-ascending" size={24} color={COLORS.grey} />
                    </View>

                    {/* //Pet Categories */}
                    <View style={style.categories}>
                        {petCategories.map((item, index) => (
                            <View key={"pet" + index} style={{ alignItems: "center" }}>
                                {/* //active-inactive button color */}
                                <TouchableOpacity
                                    onPress={() => {
                                        filterPet(index); //**
                                        setSelectedCategoryIndex(index);
                                    }}
                                    style={style.categoryButton, { backgroundColor: selectedCategoryIndex === index ? COLORS.primary : COLORS.white }}>
                                    <Icon name={item.icon} size={40} color={selectedCategoryIndex === index ? COLORS.white : COLORS.primary} />
                                </TouchableOpacity>
                                <Text style={style.categoryName}>{item.name}</Text>
                            </View>
                        ))}
                    </View>

                    {/* //pet items */}
                    <View style={{ marginTop: 20 }}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={filteredPets}
                            renderItem={({ item }) =>
                                <Card
                                    pet={item}
                                    navigation={navigation}
                                />
                            }
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Home
