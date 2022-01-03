const CryptoJS = require("crypto-js");

const secret = process.env.MIX_CYPHER_SECRET_KEY || "";

function setCypher(key, value) {
    let encrypted_text = CryptoJS.AES.encrypt(value, secret);

    let setValue = localStorage.setItem(key, encrypted_text);

    if (setValue) {
        return true;
    }

    return false;
}

function getCypher(key) {
    let token = localStorage.getItem(key);

    if (token) {
        let bytes = CryptoJS.AES.decrypt(token.toString(), secret);

        // console.log('bytes.toString(CryptoJS.enc.Utf8)',bytes.toString(CryptoJS.enc.Utf8))
        return bytes.toString(CryptoJS.enc.Utf8);
    } else {
        return "notfound";
    }
}

function revokeUser() {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userType");
    localStorage.removeItem("userID");
}

export { setCypher, getCypher, revokeUser };
