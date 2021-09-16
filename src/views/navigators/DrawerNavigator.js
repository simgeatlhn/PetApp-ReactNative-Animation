import React from 'react'
import 'react-native-gesture-handler';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    //animation effect
    useDrawerProgress
} from "@react-navigation/drawer"
import Animated from 'react-native-reanimated';
import { View, Image, Text } from 'react-native';
import HomeScreen from "../screens/Home"
import COLORS from '../../const/colors';
//icons
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';




const Drawer = createDrawerNavigator();

//menu detail
const CustomDrawerContent = props => {
    return <DrawerContentScrollView style={{ paddingVertical: 30 }}>
        <View style={{ marginLeft: 15, marginVertical: 50 }}>
            <Image
                source={require("../../assets/person.jpg")}
                style={{ height: 60, width: 60, borderRadius: 50 }}
            />
            <Text style={{ color: COLORS.white, fontWeight: "bold", fontSize: 12, marginTop: 10 }}>Simge Atlıhan</Text>
        </View>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>
}

const DrawerScreenContainer = ({ children }) => {
    //animation effect
    const progress = useDrawerProgress();
    const scale = Animated.interpolateNode(progress,
        { inputRange: [0, 1], outputRange: [1, 0.8] }
    )
    const borderRadius = Animated.interpolateNode(progress,
        { inputRange: [0, 1], outputRange: [0, 25] }
    )
    return (
        <Animated.View
            style={{ backgroundColor: COLORS.white, flex: 1, borderRadius, transform: [{ scale }], overflow: "hidden" }}>
            {children}
        </Animated.View>

    );
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                //title
                headerShown: false,

                //drawer menu
                drawerType: "slide", //headerShown:false ile icon kapatılır ve slide ile drawer açılır
                drawerStyle: {
                    width: 200,
                    backgroundColor: COLORS.primary
                },
                overlayColor: null, //menu açıldığında homescreen in rengi

                //for animate color
                sceneContainerStyle: {
                    backgroundColor: COLORS.primary
                },

                //drawer list styles
                drawerActiveTintColor: COLORS.white,
                drawerInactiveTintColor: COLORS.secondary,
                drawerItemStyle: { backgroundColor: null },
                drawerLabelStyle: {
                    fontWeight: "bold"
                }
            }}
            drawerContent={props => <CustomDrawerContent {...props} />} //!!! menu items
        >
            <Drawer.Screen
                name="ADOPTION"
                options={{
                    title: "ADOPTION", drawerIcon: ({ color }) => (
                        <FontAwesome
                            name="paw"
                            size={24}
                            color={color}
                            style={{ marginTop: -4 }}
                        />
                    ),
                }}>
                {/* //props DrawerNavigator da navigation.toggleDrawer ile bağlantı kurar */}
                {props => (
                    <DrawerScreenContainer>
                        <HomeScreen  {...props} />
                    </DrawerScreenContainer>
                )}
            </Drawer.Screen>

            <Drawer.Screen
                name="DONATION"
                options={{
                    title: "DONATION", drawerIcon: ({ color }) => (
                        <Feather
                            name="gift"
                            size={24}
                            color={color}
                            style={{ marginTop: -4 }}
                        />
                    ),
                }}>
                {props => (
                    <DrawerScreenContainer>
                        <HomeScreen  {...props} />
                    </DrawerScreenContainer>
                )}
            </Drawer.Screen>


            <Drawer.Screen
                name="ADD PET"
                options={{
                    title: "ADD PET", drawerIcon: ({ color }) => (
                        <Ionicons
                            name="ios-add-circle-outline"
                            size={24}
                            color={color}
                            style={{ marginTop: -4 }}
                        />
                    ),
                }}>
                {props => (
                    <DrawerScreenContainer>
                        <HomeScreen  {...props} />
                    </DrawerScreenContainer>
                )}
            </Drawer.Screen>

            <Drawer.Screen
                name="FAVORITES"
                options={{
                    title: "FAVORITES", drawerIcon: ({ color }) => (
                        <MaterialIcons
                            name="favorite-border"
                            size={24}
                            color={color}
                            style={{ marginTop: -4 }}
                        />
                    ),
                }}>
                {props => (
                    <DrawerScreenContainer>
                        <HomeScreen  {...props} />
                    </DrawerScreenContainer>
                )}
            </Drawer.Screen>

            <Drawer.Screen
                name="PROFILE"
                options={{
                    title: "PROFILE", drawerIcon: ({ color }) => (
                        <Ionicons
                            name="person-outline"
                            size={24}
                            color={color}
                            style={{ marginTop: -4 }}
                        />
                    ),
                }}>
                {props => (
                    <DrawerScreenContainer>
                        <HomeScreen  {...props} />
                    </DrawerScreenContainer>
                )}
            </Drawer.Screen>

        </Drawer.Navigator>
    );
};

export default DrawerNavigator
