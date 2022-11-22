"use strict";
import { sha3_256, keccak_256  } from '@noble/hashes/sha3';
import * as secp from '@noble/secp256k1';
import * as utils from '@noble/hashes/utils'
let Noble = {
    hash: {
        sha3_256,
        keccak_256
    },
    utils,
    secp
}
 
export default Noble;
