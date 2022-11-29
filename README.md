# Overview

UMD build from paulmillr's libraries

* secp256k1 : https://github.com/paulmillr/noble-secp256k1
* keccak256 : https://github.com/paulmillr/noble-hashes

You can test it on [Demo page](https://ho4040.github.io/keccak-secp-umd/)


# Build

```bash
cd ./keccak-secp-umd
npm install

npm install webpack -g
npm install webpack-cli -g
webpack

```

# Demo

```bash
npm install http-server -g
cd keccak-secp-umd
http-server
```

# Usage

```js
const hexToBytes = Noble.default.utils.hexToBytes;
const getPublicKey = Noble.default.secp.getPublicKey;
const keccak_256 = Noble.default.hash.keccak_256;
const utf8ToBytes = Noble.default.utils.utf8ToBytes;
const sign = Noble.default.secp.sign;
const bytesToHex = Noble.default.utils.bytesToHex;
const signatureFromHex = Noble.default.secp.Signature.fromHex;
```

### private key to Ethereum address
```js
let privateKey = hexToBytes("00000000000000000000000000000000000000000000000000000000000000FF");
let publicKey = getPublicKey(privateKey);
let address = keccak_256(publicKey.slice(1)).slice(-20);
```

### sign with private key
```js
let msg = utf8ToBytes("hello this is message");
let signature = await sign(msg, privateKey);
let sigHexStr = bytesToHex(signature);
let sig = signatureFromHex(sigHexStr);
let sig_r = sig.r;
let sig_s = sig.s;
```
