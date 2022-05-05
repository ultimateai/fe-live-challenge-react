import {Intent} from "./types";

/**
 * fetchIntents simulates a network request to Ultimate's API to fetch
 * a list of intents.
 * returns: Promise that resolves to an array of `Intent`
 */
export const fetchIntents: () => Promise<{ data: Intent[] }> = async () => {
    return Promise.resolve({data: intents})
}

// Below is test data, no need to change this.
const intents = [
    {
        "id": "34d7831e137a4016a55f98926800a643",
        "name": "Greeting",
        "description": "The user says hello.",
    },
    {
        "id": "b6ec3deac5f94500aef55d9c410e37f7",
        "name": "Goodbye",
        "description": "The user says goodbye.",
    },
    {
        "id": "61e218983f8b49f79405e8cf22992e61",
        "name": "Affirmative",
        "description": "The user confirms that something is true / correct.",
    },
    {
        "id": "5a13917dac654cfaa10619de37a673c4",
        "name": "Negative",
        "description": "The user confirms that they don't need help / something is not true or similar.",
    },
    {
        "id": "629ebabd5d714900bbc7eb2c9eceb927",
        "name": "Thanks",
        "description": "The user says thank you.",
    },
    {
        "id": "f83a8f67dd8e4eef8c743a0f324aeca0",
        "name": "Are you a bot?",
        "description": "The user wants to know if they are talking to a bot or a human.",
    },
    {
        "id": "f505432f6dcd40548983e4eab1675429",
        "name": "Transfer to agent",
        "description": "The user wants to speak to a human agent.",
    },
    {
        "id": "0edf4a33873d482f857bfa0a5c16b7ce",
        "name": "Login Problems",
        "description": "The user has trouble logging in.",
    },
    {
        "id": "29a0d3b7cecc4fe5955f6c5c30fbcf6b",
        "name": "Open Account",
        "description": "The user wants to create a new account.",
    },
    {
        "id": "847042444ac24dea946a6e99c018e7e5",
        "name": "Close Account",
        "description": "The user wants to close their account.",
    }
]