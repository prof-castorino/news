import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ScreenCategory } from './News/ScreenCategory';
import { ScreenNew } from './News/ScreenNew';

const Stack = createNativeStackNavigator();

export function NewsCategory() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={Category} name='news' options={{ title: "Categoria" }} />
                <Stack.Screen component={New} name='new' />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Category({ navigation }) {
    return (
        <View style={styles.container}>
            <ScreenCategory navigation={navigation} />
        </View>
    );
}
function New({ navigation, route }) {
    console.log(route.params)
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
