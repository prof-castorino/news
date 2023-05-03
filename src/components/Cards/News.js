import { Text, Pressable } from "react-native"

export const CardDetach = (props) => {
    const onPress = () => {
        props.navigation.navigate('new', { ...props })
    }
    return (
        <Pressable onPress={() => { onPress() }}>
            <Text >{props.img}</Text>
            <Text >{props.title}</Text>
            <Text >{props.descrition}</Text>
            <Text >{props.date}</Text>
            <Text >{props.autor}</Text>
        </Pressable>
    )
}

export const CardNews = (props) => {
    const onPress = () => {
        props.navigation.navigate('new', { ...props })
    }
    return (
        <Pressable onPress={() => { onPress() }}>
            <Text >{props.img}</Text>
            <Text >{props.title}</Text>
            <Text >{props.descrition}</Text>
            <Text >{props.date}</Text>
            <Text >{props.autor}</Text>
        </Pressable>
    )
}