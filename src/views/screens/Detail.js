import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, StatusBar, View, ImageBackground, Image } from "react-native"
import COLORS from "../../const/colors"
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const style = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20
    },
    detailContainer: {
        height: 120,
        backgroundColor: COLORS.white,
        padding: 10,
        marginHorizontal: 20,
        elevation: 20,
        borderRadius: 16,
        justifyContent: "center"
    },
    comment: {
        marginTop: 10,
        fontSize: 12.5,
        color: COLORS.dark,
        lineHeight: 20,
        marginHorizontal: 20,
    },
    footer: {
        height: 100,
        backgroundColor: COLORS.light,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 30,
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    icon: {
        backgroundColor: COLORS.primary,
        width: 50,
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    button: {
        backgroundColor: COLORS.primary,
        flex: 1,
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const Detail = ({ navigation, route }) => {

    const pet = route.params;
    //console.log(pet); //detail

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar backgroundColor={COLORS.background} />
            {/* //MAIN */}
            <View style={{ height: 200, backgroundColor: COLORS.background }}>
                {/* //Image */}
                <ImageBackground
                    source={pet.image}
                    resizeMode="contain"
                    style={{ height: 400, top: 5 }}>
                    {/* //Header */}
                    <View style={style.header}>
                        <AntDesign
                            name="arrowleft"
                            size={24}
                            color={COLORS.dark}
                            onPress={navigation.goBack} //*** HomeScreen
                        />
                        <MaterialCommunityIcons
                            name="dots-horizontal-circle-outline"
                            size={24}
                            color={COLORS.dark}
                        />
                    </View>
                </ImageBackground>

                {/* //Detail */}
                <View style={style.detailContainer}>
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row"
                    }}>
                        <Text style={{ color: COLORS.dark, fontSize: 20, fontWeight: "bold" }}>{pet.name}</Text>
                        <Foundation name="male-symbol" style={{ fontSize: 24, color: COLORS.primary }} />
                    </View>
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row",
                        marginTop: 2,
                    }}>
                        <Text style={{ fontSize: 12, color: COLORS.dark }}>{pet.type}</Text>
                        <Text style={{ fontSize: 13, color: COLORS.dark }}>{pet.age}</Text>
                    </View>
                    <View style={{
                        marginTop: 5,
                        flexDirection: "row"
                    }}>
                        <Ionicons name="location" size={22} color={COLORS.primary} />
                        <Text style={{ fontSize: 14, color: COLORS.primary, marginLeft: 5 }}>Turkey</Text>
                    </View>
                </View>

                {/* //Button */}
                <View style={style.footer}>
                    <View style={style.icon}>
                        <MaterialIcons name="favorite-border" size={24} color={COLORS.white} />
                    </View>
                    <View style={style.button}>
                        <Text style={{ color: COLORS.white, fontWeight: "bold" }}>ADOPTION</Text>
                    </View>
                </View>

                {/* //Comment */}
                <View style={{
                    marginTop: 40,
                    justifyContent: "space-between",
                    flex: 1

                }}>
                    <View>
                        <View style={{
                            flexDirection: "row",
                            paddingHorizontal: 20
                        }}>
                            <Image
                                source={require("../../assets/person.jpg")}
                                style={{ height: 50, width: 50, borderRadius: 50 }}
                            />
                            <View style={{ paddingLeft: 20, height: 20 }}>
                                <Text style={{ fontSize: 12, fontWeight: "bold", color: COLORS.dark }}>Simge Atlıhan</Text>
                                <Text style={{ fontSize: 11, fontWeight: "bold", color: COLORS.grey, marginTop: 2 }}>Owner</Text>
                                <Text style={style.comment}>
                                    I'm looking for someone who can take care of...
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default Detail
