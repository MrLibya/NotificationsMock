import React, { useState } from 'react';
import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { NotificationItem } from '../components';
import AddNotificationModal from '../modals/AddNotificationModal';

const HomeScreen = () => {
    const [notifications, setNotifications] = useState([])
    const [modalVisiable, setModalVisiable] = useState(false)

    const removeNotification = (index) => {
        const newArr = [...notifications]
        newArr.splice(index, 1)
        setNotifications(newArr)
    }

    const renderItem = ({ item, index }) => {
        return <TouchableOpacity onPress={() => removeNotification(index)}>
            <NotificationItem title={item.title} desc={item.description} />
        </TouchableOpacity>
    }

    const renderHeader = () => {
        return <View>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisiable(true)}>
                <Text style={styles.btnText}>Add Notification</Text>
            </TouchableOpacity>
            <View style={[styles.divider, { marginTop: 27 }]} />
        </View>
    }

    const renderEmpty = () => {
        return <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.empty}>You don't have any notifications, start adding to view here</Text>
        </View>
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={notifications}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItem}
                ItemSeparatorComponent={<View style={styles.divider} />}
                ListHeaderComponent={renderHeader}
                ListEmptyComponent={renderEmpty}
                contentContainerStyle={{ flexGrow: 1 }}
            />

            <AddNotificationModal
                setNotifications={setNotifications}
                visible={modalVisiable}
                onClose={() => setModalVisiable(false)}
                lastId={notifications?.[notifications.length - 1]?.id ?? 0}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 24,
        backgroundColor: 'white'
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3',
        // marginVertical: 1
    },
    button: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 12,
        backgroundColor: '#008CBA',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 25
    },
    btnText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white'
    },
    empty: {
        fontSize: 22,
        textAlign: 'center',
        alignSelf: 'center'
    }
});

export default HomeScreen;
