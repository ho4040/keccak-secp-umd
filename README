# Overview

UMD build from paulmillr's libraries

* secp256k1 : https://github.com/paulmillr/noble-secp256k1
* keccak256 : https://github.com/paulmillr/noble-hashes


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
```

### private key to Ethereum address
```js
let private_key = hexToBytes("00000000000000000000000000000000000000000000000000000000000000FF");
let public_key = getPublicKey(private_key);
let address = keccak_256(public_key.slice(1)).slice(-20);
```

### sign with private key
```js
let msg = utf8ToBytes("hello this is message");
let signature = await sign(msg, pk);
let sigHexStr = Noble.default.utils.bytesToHex(signature);
let sig = Noble.default.secp.Signature.fromHex(sigHexStr);
let sig_r = sig.r;
let sig_s = sig.s;
```