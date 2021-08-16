import { createStore } from "vuex";
import {messaging} from "../firebaseinit";

export default createStore({
    state: {
        messagingToken: null
    },
    getters: {},
    mutations: {
        SET_MESSAGING_TOKEN(state, payload) {
            // Sets the messaging token
            state.messagingToken = payload;
        },
        UNSET_MESSAGING_TOKEN(state) {
            // Resets the messaging token
            state.messagingToken = null;
        },
    },
    actions: {
        messagingInit({commit}) {
            messaging.getToken({vapidKey: "BMis0AP8QGjFggZ61yW2P_tGUbbCXmcBz11lO_U6z6AjjOMa-M3esAnTtlT8l_EiZTrfVdPR8q22enU0VqUdfDc"}).then((currentToken)=>{
                if(currentToken) {
                    console.log("Got token", currentToken)
                    commit("SET_MESSAGING_TOKEN",currentToken)
                } else {
                    console.log('No registration token available. Request permission to generate one.');
                }
            }).catch((err)=>{
                console.log('An error occurred while retrieving token. ', err);
            })
        }
    }
})