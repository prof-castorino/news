import { StyleSheet, Text, View } from 'react-native';
import { CardNew } from '../../components/Cards/News';

export function ScreenNew(props) {
    return (
        <View style={styles.container}>
            <CardNew {...props} />
            <View><Text>{props.text}</Text></View>
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
