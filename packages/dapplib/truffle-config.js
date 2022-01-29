require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note miss essay inflict entry broken tent'; 
let testAccounts = [
"0xcdf9339dda280050e0388d8165af65bf2044deb81176790afa2a455b5b426156",
"0xb2ba62776511f8e4148588be281ecfb85f2c0296bb7eaed82c7e152b0677020a",
"0x3f8b8d688f46eee26c72654e775fd5a0c724f9855c6bf04518d32ea7285cf91b",
"0x804f4e331bec0f3414c84504b0e26c491d1aedb100f120a0e807fd01684ad8bb",
"0x5fba8edf698491f29f7c94dcf86df121c2258e0bb172350d02735873f0cb8a80",
"0x9f8b4bec2ea1cb7f8002862d3cf56ee33d24f9bcb5b91dd1ade9e1740af455e0",
"0x73743b576e5619f52dd42222c0b49e05209012b2defafd847c27820c1b14e48c",
"0x662be479bdb44fd161d409214c14c8a0af99e172846b0ba34da88f81d1b40a85",
"0x7fab3866daaf3766a901f00a999e6d434d36160938e0789c6b27e7e1208e2cb4",
"0xb994ebe7e0af21b06f75ea89de1166c23fb8fdc6487b24615eeaa5e7eeff48a8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


