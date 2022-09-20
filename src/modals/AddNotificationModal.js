import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Modal,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Text
} from "react-native";
import generateText from "../utils/generateText";

const AddNotificationModal = ({ visible, onClose, setNotifications, lastId }) => {
    const [title, setTitle] = useState(`Notification ${lastId + 1}`)
    const [description, setDescription] = useState(generateText(24))

    const onSubmit = () => {
        const notification = {
            id: lastId + 1,
            title,
            description
        }
        setNotifications(prev => [...prev, notification])
        onClose()
    }

    React.useEffect(() => {
        setTitle(`Notification ${lastId + 1}`)
        setDescription(generateText(24))
    }, [visible])

    return (
        <Modal
            transparent
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.container}>
                    <View style={styles.childContainer}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setTitle}
                            value={title}
                            placeholder="Notification title"
                        />
                        <TextInput
                            style={[styles.input, { marginTop: 13 }]}
                            onChangeText={setDescription}
                            value={description}
                            placeholder="Notification description"
                        />

                        <TouchableOpacity style={styles.button} onPress={onSubmit}>
                            <Text style={styles.btnText}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>

        </Modal>
    );
};

export default AddNotificationModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    childContainer: {
        padding: 20,
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
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
});
