import React from 'react';
import { StyleSheet,
     Text,
     View,
    StatusBar } from 'react-native';
import propTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"]
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"]
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"]
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Clear",
        subtitle: "Just go outside."
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"]
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar     
                barStyle="light-content"
                />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    name={weatherOptions[condition].iconName} 
                    size={96} 
                    color="white" 
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24,
    },
    halfContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        alignItems: "flex-start",
        paddingHorizontal: 20
    }

})
