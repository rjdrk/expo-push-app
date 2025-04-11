import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import { usePushNotifications } from '@/hooks/usePushNotifications'

const PushApp = () => {
    const { expoPushToken, notifications } = usePushNotifications();

    return (
        <View style={style.container}>
            {/*<ThemedText>Token: {expoPushToken}</ThemedText>*/}
            <ThemedText style={style.text}>
                Notificaciones
            </ThemedText>
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.request.identifier}
                renderItem={({ item }) => (
                    <View>
                        <ThemedText style={style.textFlatlist}>
                            {item.request.content.title}
                        </ThemedText>
                        <ThemedText>
                            {item.request.content.body}
                        </ThemedText>
                        <ThemedText>
                            {JSON.stringify(item.request.content.data, null, 2)}
                        </ThemedText>
                    </View>
                )

                }
                ItemSeparatorComponent={() => <View style={style.separeator} />}
            />
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 5
    },
    text: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 25,
    },
    textFlatlist: {
        fontWeight: 'bold',
    },
    separeator: {
        height: 1,
        backgroundColor: 'gray',
        opacity: 0.2,
    }
})
export default PushApp
