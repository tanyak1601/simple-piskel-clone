module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "GIF": "readonly",
        "gapi": "readonly",
        "auth2": "readonly",
        "jest": "readonly",
        "beforeEach": "readonly",
        "expect": "readonly",
        "describe": "readonly",
        "it": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": "off",
        "no-param-reassign": ["error", { "props": true, "ignorePropertyModificationsFor": ["context"] }],
        "no-unused-vars": ["error", { varsIgnorePattern: "googleUser"}],
        "no-global-assign": ["error", {"exceptions": ["auth2"]}],
        "no-shadow": ["error", { allow: ["googleUser"]}],
        "no-underscore-dangle": ["error", { "allow": ["__getDrawCalls"] }]
    }
};
