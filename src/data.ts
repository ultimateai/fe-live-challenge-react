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
        "trainingData": {
            "expressionCount": 170,
            "expressions": [
                {
                    "id": "6399fd6989984c7b871c6301744b0af5",
                    "text": "Hello"
                },
                {
                    "id": "68bafebc2a2e4843a56a221c2ceb12ed",
                    "text": "Hi"
                },
                {
                    "id": "b2a3208dc801432992812638368e0668",
                    "text": "Good morning!"
                }
            ]
        },
        "reply": {
            "id": "f35d7e0936a44102bac9cb96c81eec3b",
            "text": "Hello :) How can I help you?"
        }
    },
    {
        "id": "b6ec3deac5f94500aef55d9c410e37f7",
        "name": "Goodbye",
        "description": "The user says goodbye.",
        "trainingData": {
            "expressionCount": 94,
            "expressions": [
                {
                    "id": "6bb364d2e3364e03b4ca30c6e46ea1dd",
                    "text": "Thanks, bye!"
                },
                {
                    "id": "2bc38310a4d1450f9e7c9e7903e458b9",
                    "text": "Goodbye!"
                },
                {
                    "id": "611c935266c1402ab76f5235827370f8",
                    "text": "See you"
                }
            ]
        },
        "reply": {
            "id": "9ba88034a89e4fdbb532bdb092717fa1",
            "text": "Goodbye, have a nice day!"
        }
    },
    {
        "id": "61e218983f8b49f79405e8cf22992e61",
        "name": "Affirmative",
        "description": "The user confirms that something is true / correct.",
        "trainingData": {
            "expressionCount": 94,
            "expressions": [
                {
                    "id": "13039d5bff7b4e3c951c716826f3598d",
                    "text": "Yeah"
                },
                {
                    "id": "c677b5a2efe44bd8a92e2c35124a6ab1",
                    "text": "yep"
                },
                {
                    "id": "f990846d295a4b2289439efd8abedb7b",
                    "text": "yes, please"
                }
            ]
        },
        "reply": {
            "id": "3c9029f14fd74a6aac3a571d403bab35",
            "text": "Great!"
        }
    },
    {
        "id": "5a13917dac654cfaa10619de37a673c4",
        "name": "Negative",
        "description": "The user confirms that they don't need help / something is not true or similar.",
        "trainingData": {
            "expressionCount": 129,
            "expressions": [
                {
                    "id": "438303d11e3a4833973c7319cdf23275",
                    "text": "No thanks!"
                },
                {
                    "id": "5db9342ebc644d6c824911323d23e568",
                    "text": "nope"
                },
                {
                    "id": "060224b8c36347f79d11bb6a73a078f6",
                    "text": "please don't"
                }
            ]
        },
        "reply": {
            "id": "133957c37f954d6a8c0b721fbc3b652a",
            "text": "Alright, please let me know if I can help you with anything else!"
        }
    },
    {
        "id": "629ebabd5d714900bbc7eb2c9eceb927",
        "name": "Thanks",
        "description": "The user says thank you.",
        "trainingData": {
            "expressionCount": 72,
            "expressions": [
                {
                    "id": "71dbc302036d4257bbb6c477e0e0a7fc",
                    "text": "Brilliant! Thanks!"
                },
                {
                    "id": "0fa23ff354fb41b29da47ecd7fbbdaee",
                    "text": "thx"
                },
                {
                    "id": "9d8a7691475e45c0b06304b34721ce38",
                    "text": "thank you"
                }
            ]
        },
        "reply": {
            "id": "17134b01d2e343bc81e48fad4ec2ca00",
            "text": "It was a pleasure to be of help :)"
        }
    },
    {
        "id": "f83a8f67dd8e4eef8c743a0f324aeca0",
        "name": "Are you a bot?",
        "description": "The user wants to know if they are talking to a bot or a human.",
        "trainingData": {
            "expressionCount": 83,
            "expressions": [
                {
                    "id": "7b943480157041ae971c019a4f60b0f4",
                    "text": "Are u human?"
                },
                {
                    "id": "0b06b67653e749e9a23df1a504962f39",
                    "text": "Are you a bot?"
                },
                {
                    "id": "037f9c3ef28540078527349c1c56e1d9",
                    "text": "Is this a robot?"
                }
            ]
        },
        "reply": {
            "id": "7d169954803d4bb4a40588c53eda620c",
            "text": "I'm an AI bot, and I'm here to help you with your questions."
        }
    },
    {
        "id": "f505432f6dcd40548983e4eab1675429",
        "name": "Transfer to agent",
        "description": "The user wants to speak to a human agent.",
        "trainingData": {
            "expressionCount": 59,
            "expressions": [
                {
                    "id": "78f4760adc1545229e32b0b453d20362",
                    "text": "Can I talk to a human?"
                },
                {
                    "id": "71d413bc26cd4a85ac98f99198c324d0",
                    "text": "I want to speak to an agent."
                },
                {
                    "id": "27fa5c9224934952aa5dfe6f6a229ba5",
                    "text": "transfer to a human"
                }
            ]
        },
        "reply": {
            "id": "6ad4f9d516c44eb8ad765f557ecc3ca6",
            "text": "Let me transfer you to the first available agent."
        }
    },
    {
        "id": "0edf4a33873d482f857bfa0a5c16b7ce",
        "name": "Login Problems",
        "description": "The user has trouble logging in.",
        "trainingData": {
            "expressionCount": 101,
            "expressions": [
                {
                    "id": "ec7e980908c84822b18e331e2496045a",
                    "text": "I can't sign in"
                },
                {
                    "id": "f81537f3f69b4b729fe1c71f83e7e25e",
                    "text": "The login is giving me an error."
                },
                {
                    "id": "d748c7a9bc124abc9fa3a3147fb11651",
                    "text": "Can you help me change my password, can't log in!"
                }
            ]
        },
        "reply": {
            "id": "6dc10b2946cf4099a02c14d8416fcb02",
            "text": "Oh no! Please give me your email and I will fix it."
        }
    },
    {
        "id": "29a0d3b7cecc4fe5955f6c5c30fbcf6b",
        "name": "Open Account",
        "description": "The user wants to create a new account.",
        "trainingData": {
            "expressionCount": 65,
            "expressions": [
                {
                    "id": "5216d8a096f44cf681b54cac19b8f29a",
                    "text": "Where do I open a new account?"
                },
                {
                    "id": "bd959fc688404f188bc23dd1abefc772",
                    "text": "how to start an account "
                },
                {
                    "id": "a34e39f190f0491f8953a6a215261f2e",
                    "text": "i need help creating an account"
                }
            ]
        },
        "reply": {
            "id": "d1bf934c18634586962758fb98ff44a1",
            "text": "Please follow these instructions \"LINK\" to open a new account."
        }
    },
    {
        "id": "847042444ac24dea946a6e99c018e7e5",
        "name": "Close Account",
        "description": "The user wants to close their account.",
        "trainingData": {
            "expressionCount": 65,
            "expressions": [
                {
                    "id": "5a970b47424744339c75a19c2e5e8e49",
                    "text": "How do I cancel my account."
                },
                {
                    "id": "18189f0aad2545819e3bf8125af896f9",
                    "text": "Close my account."
                },
                {
                    "id": "3ba1dc0ffef8461582c05d3cc7451f07",
                    "text": "Can you delete my account and all my data"
                }
            ]
        },
        "reply": {
            "id": "490ad9dd029045f8bea920b00be27cfc",
            "text": "To close your account, please log in and go to \"LINK\""
        }
    }
]