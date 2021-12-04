import React, { useState } from "react";
import { View, Modal, Text, StyleSheet, TouchableOpacity } from "react-native";
import moment from "moment";

function UpcomingRewardsModal({
    visible,
    setVisible
}) {
    // const date = moment(data.date).format("MMMM Do YYYY, h:mm A");
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => setVisible(!visible)}
        >
            <View style={styles.centeredView}>
                <TouchableOpacity
                    onPress={() => setVisible(!visible)}
                    style={styles.modalHide}
                >
                    <View style={styles.modalView}>

                    </View>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    btnClose: {
        backgroundColor: "black",
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        margin: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
    },
    modalView: {
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 1,
        backgroundColor: "#101010",
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 5,
        textAlign: "left",
        color: "white",
        fontWeight: "bold",
    },
    modalHide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
});
export default UpcomingRewardsModal;
