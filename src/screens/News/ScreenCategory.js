import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { GetNews } from '../../contexts/News';
import { CardAnuncio } from '../../components/Cards/Anuncio'
import { CardDetach, CardNews } from '../../components/Cards/News';

const Dismember = () => {
    var detach = {}
    const filter = []
    for (item of GetNews) {
        if (!detach.title && item.img.length !== 0) {
            detach = item;
        } else {
            filter.push(item)
        }
    }
    return { detach, filter }
}

export function ScreenCategory(props) {
    var { detach, filter } = Dismember()
    return (
        <View style={styles.container}>
            <ScrollView>
                <Detach {...props} {...detach} />
                <News filter={filter} {...props} />
            </ScrollView>
        </View>
    );
}

const News = (props) => {
    return (<View style={styles.container}>
        {
            props.filter.map(
                (item) => {
                    return (<CardNews {...item} {...props} />)
                }
            )
        }
    </View>
    )
}

const Detach = (props) => {
    console.log(props.title)
    return (<View>
        <Text>
            {
                (props.title) ?
                    <CardDetach {...props} />
                    : <CardAnuncio />
            }
        </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
