require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area skull rent remember place gravity coral light army genius'; 
let testAccounts = [
"0x1ac1f39ae3ee064f87217675b89416fdde009aee56a10722f29d49a88ebb8733",
"0x1e9a95c10f4c6cc5232371d97403c56c28b5617fda1370da7c8fdc61e1e59ef6",
"0xa1b02aa8f429e076ef1973769a3758ac5377aaa83c28e253820255f7532021f3",
"0x8a0d14956f6280bcc5ae002a668d556255d3590682043ad5b3aa5e5c5da3d412",
"0x6508fe5c1a28eac14578c258b22b721e91766ead2b072af8855568ee6f9976c3",
"0x48f69c48035a6a496eca85278270ea21c023e2c3e0f6959cddd629901239cc00",
"0x66c54644e67e5a3ee0b2806e8dda6c54c000e24ec47db5be7fa8c70970e2c106",
"0xb064f61fe0028f83a56ac5e0024c09dd5bb837983ead8c3c5dc0eb8cfa84e823",
"0xb3e4cfc38f0e0e6e661fb0461b314b458794f044624425f7bacbf8aab26d8459",
"0xf700c315c388762f333aaf7bcc2dc5edf4a4f39368374a92daab13fd02c48f73"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

