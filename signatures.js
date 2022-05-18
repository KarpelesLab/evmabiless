// Do not edit, automatically generated file.

module.exports = {
    "8c5be1e5": {
        "abi": "event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)",
        "compact": "Approval(address,address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "17307eab": {
        "abi": "event ApprovalForAll(address indexed owner, address indexed operator, bool approved)",
        "compact": "ApprovalForAll(address,address,bool)",
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "3644e515": {
        "abi": "function DOMAIN_SEPARATOR() external view returns (bytes32)",
        "compact": "DOMAIN_SEPARATOR()",
        "inputs": [],
        "name": "DOMAIN_SEPARATOR",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "8be0079c": {
        "abi": "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
        "compact": "OwnershipTransferred(address,address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "ddf252ad": {
        "abi": "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
        "compact": "Transfer(address,address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "802aabe8": {
        "abi": "function _totalRelayers() public view returns (uint)",
        "compact": "_totalRelayers()",
        "inputs": [],
        "name": "_totalRelayers",
        "outputs": [
            {
                "internalType": "uint",
                "name": "",
                "type": "uint"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "cdb0f73a": {
        "abi": "function adminAddRelayer(address relayerAddress) external",
        "compact": "adminAddRelayer(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "relayerAddress",
                "type": "address"
            }
        ],
        "name": "adminAddRelayer",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "8b63aebf": {
        "abi": "function adminChangeFeeHandler(address newFeeHandler) external",
        "compact": "adminChangeFeeHandler(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "newFeeHandler",
                "type": "address"
            }
        ],
        "name": "adminChangeFeeHandler",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "4e056005": {
        "abi": "function adminChangeRelayerThreshold(uint256 newThreshold) external",
        "compact": "adminChangeRelayerThreshold(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newThreshold",
                "type": "uint256"
            }
        ],
        "name": "adminChangeRelayerThreshold",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "80ae1c28": {
        "abi": "function adminPauseTransfers() external",
        "compact": "adminPauseTransfers()",
        "inputs": [],
        "name": "adminPauseTransfers",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "9d82dd63": {
        "abi": "function adminRemoveRelayer(address relayerAddress) external",
        "compact": "adminRemoveRelayer(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "relayerAddress",
                "type": "address"
            }
        ],
        "name": "adminRemoveRelayer",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "8c0c2631": {
        "abi": "function adminSetBurnable(address handlerAddress, address tokenAddress) external",
        "compact": "adminSetBurnable(address,address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "handlerAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            }
        ],
        "name": "adminSetBurnable",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "edc20c3c": {
        "abi": "function adminSetDepositNonce(uint8 domainID, uint64 nonce) external",
        "compact": "adminSetDepositNonce(uint8,uint64)",
        "inputs": [
            {
                "internalType": "uint8",
                "name": "domainID",
                "type": "uint8"
            },
            {
                "internalType": "uint64",
                "name": "nonce",
                "type": "uint64"
            }
        ],
        "name": "adminSetDepositNonce",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "d15ef64e": {
        "abi": "function adminSetForwarder(address forwarder, bool valid) external",
        "compact": "adminSetForwarder(address,bool)",
        "inputs": [
            {
                "internalType": "address",
                "name": "forwarder",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "valid",
                "type": "bool"
            }
        ],
        "name": "adminSetForwarder",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "5a1ad87c": {
        "abi": "function adminSetGenericResource(address handlerAddress, bytes32 resourceID, address contractAddress, bytes4 depositFunctionSig, uint256 depositFunctionDepositerOffset, bytes4 executeFunctionSig) external",
        "compact": "adminSetGenericResource(address,bytes32,address,bytes4,uint256,bytes4)",
        "inputs": [
            {
                "internalType": "address",
                "name": "handlerAddress",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "resourceID",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "contractAddress",
                "type": "address"
            },
            {
                "internalType": "bytes4",
                "name": "depositFunctionSig",
                "type": "bytes4"
            },
            {
                "internalType": "uint256",
                "name": "depositFunctionDepositerOffset",
                "type": "uint256"
            },
            {
                "internalType": "bytes4",
                "name": "executeFunctionSig",
                "type": "bytes4"
            }
        ],
        "name": "adminSetGenericResource",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "cb10f215": {
        "abi": "function adminSetResource(address handlerAddress, bytes32 resourceID, address tokenAddress) external",
        "compact": "adminSetResource(address,bytes32,address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "handlerAddress",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "resourceID",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            }
        ],
        "name": "adminSetResource",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "ffaac0eb": {
        "abi": "function adminUnpauseTransfers() external",
        "compact": "adminUnpauseTransfers()",
        "inputs": [],
        "name": "adminUnpauseTransfers",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "bd2a1820": {
        "abi": "function adminWithdraw(address handlerAddress, bytes memory data) external",
        "compact": "adminWithdraw(address,bytes)",
        "inputs": [
            {
                "internalType": "address",
                "name": "handlerAddress",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "adminWithdraw",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "dd62ed3e": {
        "abi": "function allowance(address owner, address spender) external view returns (uint256)",
        "compact": "allowance(address,address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "095ea7b3": {
        "abi": "function approve(address to, uint256 tokenId) external",
        "compact": "approve(address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "70a08231": {
        "abi": "function balanceOf(address owner) external view returns (uint256 balance)",
        "compact": "balanceOf(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "17f03ce5": {
        "abi": "function cancelProposal(uint8 domainID, uint64 depositNonce, bytes32 dataHash) public",
        "compact": "cancelProposal(uint8,uint64,bytes32)",
        "inputs": [
            {
                "internalType": "uint8",
                "name": "domainID",
                "type": "uint8"
            },
            {
                "internalType": "uint64",
                "name": "depositNonce",
                "type": "uint64"
            },
            {
                "internalType": "bytes32",
                "name": "dataHash",
                "type": "bytes32"
            }
        ],
        "name": "cancelProposal",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "313ce567": {
        "abi": "function decimals() external view returns (uint8)",
        "compact": "decimals()",
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "5c19a95c": {
        "abi": "function delegate(address delegatee) public override",
        "compact": "delegate(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "delegatee",
                "type": "address"
            }
        ],
        "name": "delegate",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "c3cda520": {
        "abi": "function delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s) public override",
        "compact": "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)",
        "inputs": [
            {
                "internalType": "address",
                "name": "delegatee",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "nonce",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "expiry",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "v",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "r",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            }
        ],
        "name": "delegateBySig",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "587cde1e": {
        "abi": "function delegates(address account) public view override returns (address)",
        "compact": "delegates(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "delegates",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "b07e54bb": {
        "abi": "function deposit(bytes32 resourceID, address depositer, bytes calldata data) external override returns (bytes memory)",
        "compact": "deposit(bytes32,address,bytes)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "resourceID",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "depositer",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "deposit",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "05e2ca17": {
        "abi": "function deposit(uint8 destinationChainID, bytes32 resourceID, bytes calldata data) external payable",
        "compact": "deposit(uint8,bytes32,bytes)",
        "inputs": [
            {
                "internalType": "uint8",
                "name": "destinationChainID",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "resourceID",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    "73c45c98": {
        "abi": "function deposit(uint8 destinationDomainID, bytes32 resourceID, bytes calldata depositData, bytes calldata feeData) external payable",
        "compact": "deposit(uint8,bytes32,bytes,bytes)",
        "inputs": [
            {
                "internalType": "uint8",
                "name": "destinationDomainID",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "resourceID",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "depositData",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "feeData",
                "type": "bytes"
            }
        ],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    "e248cff2": {
        "abi": "function executeProposal(bytes32 resourceID, bytes calldata data) external override",
        "compact": "executeProposal(bytes32,bytes)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "resourceID",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "executeProposal",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "206a98fd": {
        "abi": "function executeProposal(uint8 domainID, uint64 depositNonce, bytes calldata data, bytes32 resourceID, bool revertOnFail) public",
        "compact": "executeProposal(uint8,uint64,bytes,bytes32,bool)",
        "inputs": [
            {
                "internalType": "uint8",
                "name": "domainID",
                "type": "uint8"
            },
            {
                "internalType": "uint64",
                "name": "depositNonce",
                "type": "uint64"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "internalType": "bytes32",
                "name": "resourceID",
                "type": "bytes32"
            },
            {
                "internalType": "bool",
                "name": "revertOnFail",
                "type": "bool"
            }
        ],
        "name": "executeProposal",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "081812fc": {
        "abi": "function getApproved(uint256 tokenId) external view returns (address operator)",
        "compact": "getApproved(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "8e539e8c": {
        "abi": "function getPastTotalSupply(uint256 blockNumber) public view override returns (uint256)",
        "compact": "getPastTotalSupply(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "blockNumber",
                "type": "uint256"
            }
        ],
        "name": "getPastTotalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "3a46b1a8": {
        "abi": "function getPastVotes(address account, uint256 blockNumber) public view override returns (uint256)",
        "compact": "getPastVotes(address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "blockNumber",
                "type": "uint256"
            }
        ],
        "name": "getPastVotes",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "a9cf69fa": {
        "abi": "function getProposal(uint8 originDomainID, uint64 depositNonce, bytes32 dataHash) external view returns (Proposal memory)",
        "compact": "getProposal(uint8,uint64,bytes32)",
        "inputs": [
            {
                "internalType": "uint8",
                "name": "originDomainID",
                "type": "uint8"
            },
            {
                "internalType": "uint64",
                "name": "depositNonce",
                "type": "uint64"
            },
            {
                "internalType": "bytes32",
                "name": "dataHash",
                "type": "bytes32"
            }
        ],
        "name": "getProposal",
        "outputs": [
            {
                "internalType": "Proposal",
                "name": "",
                "type": "Proposal"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "9ab24eb0": {
        "abi": "function getVotes(address account) public view override returns (uint256)",
        "compact": "getVotes(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "getVotes",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "e985e9c5": {
        "abi": "function isApprovedForAll(address owner, address operator) external view returns (bool)",
        "compact": "isApprovedForAll(address,address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "541d5548": {
        "abi": "function isRelayer(address relayer) external view returns (bool)",
        "compact": "isRelayer(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "relayer",
                "type": "address"
            }
        ],
        "name": "isRelayer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "06fdde03": {
        "abi": "function name() external view returns (string memory)",
        "compact": "name()",
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "7ecebe00": {
        "abi": "function nonces(address owner) public view returns (uint256)",
        "compact": "nonces(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "nonces",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "8da5cb5b": {
        "abi": "function owner() public view returns (address)",
        "compact": "owner()",
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "6352211e": {
        "abi": "function ownerOf(uint256 tokenId) external view returns (address owner)",
        "compact": "ownerOf(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "5e1fab0f": {
        "abi": "function renounceAdmin(address newAdmin) external",
        "compact": "renounceAdmin(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "newAdmin",
                "type": "address"
            }
        ],
        "name": "renounceAdmin",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "715018a6": {
        "abi": "function renounceOwnership() public",
        "compact": "renounceOwnership()",
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "42842e0e": {
        "abi": "function safeTransferFrom(address from, address to, uint256 tokenId) external",
        "compact": "safeTransferFrom(address,address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "b88d4fde": {
        "abi": "function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external",
        "compact": "safeTransferFrom(address,address,uint256,bytes)",
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "a22cb465": {
        "abi": "function setApprovalForAll(address operator, bool _approved) external",
        "compact": "setApprovalForAll(address,bool)",
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "_approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "01ffc9a7": {
        "abi": "function supportsInterface(bytes4 interfaceId) public view override returns (bool)",
        "compact": "supportsInterface(bytes4)",
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "95d89b41": {
        "abi": "function symbol() external view returns (string memory)",
        "compact": "symbol()",
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "c87b56dd": {
        "abi": "function tokenURI(uint256 tokenId) external view returns (string memory)",
        "compact": "tokenURI(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "18160ddd": {
        "abi": "function totalSupply() external view returns (uint256)",
        "compact": "totalSupply()",
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "a9059cbb": {
        "abi": "function transfer(address to, uint256 amount) external returns (bool)",
        "compact": "transfer(address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "23b872dd": {
        "abi": "function transferFrom(address from, address to, uint256 tokenId) external",
        "compact": "transferFrom(address,address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "f2fde38b": {
        "abi": "function transferOwnership(address newOwner) public",
        "compact": "transferOwnership(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "c0331b3e": {
        "abi": "function voteProposal(uint8 domainID, uint64 depositNonce, bytes32 resourceID, bytes calldata data) external",
        "compact": "voteProposal(uint8,uint64,bytes32,bytes)",
        "inputs": [
            {
                "internalType": "uint8",
                "name": "domainID",
                "type": "uint8"
            },
            {
                "internalType": "uint64",
                "name": "depositNonce",
                "type": "uint64"
            },
            {
                "internalType": "bytes32",
                "name": "resourceID",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "voteProposal",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "0968f264": {
        "abi": "function withdraw(bytes memory data) external override",
        "compact": "withdraw(bytes)",
        "inputs": [
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    }
};
