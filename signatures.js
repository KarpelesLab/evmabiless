// Do not edit, automatically generated file.

module.exports = {
    "8c5be1e5": {
        "abi": "event Approval(address indexed owner, address indexed spender, uint256 value)",
        "compact": "Approval(address,address,uint256)",
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
            },
            {
                "internalType": "uint256",
                "name": "value",
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
    "4bf5d7e9": {
        "abi": "function CLOCK_MODE() public view virtual override returns (string memory)",
        "compact": "CLOCK_MODE()",
        "inputs": [],
        "name": "CLOCK_MODE",
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
    "dd4e2ba5": {
        "abi": "function COUNTING_MODE() public view virtual returns (string memory)",
        "compact": "COUNTING_MODE()",
        "inputs": [],
        "name": "COUNTING_MODE",
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
    "6339f15c": {
        "abi": "event ERC20PaymentReleased(IERC20 indexed token, address to, uint256 amount)",
        "compact": "ERC20PaymentReleased(IERC20,address,uint256)",
        "inputs": [
            {
                "internalType": "IERC20",
                "name": "token",
                "type": "IERC20"
            },
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
        "name": "ERC20PaymentReleased",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "c0e52349": {
        "abi": "event ERC20Released(address indexed token, uint256 amount)",
        "compact": "ERC20Released(address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "ERC20Released",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "da9d4e5f": {
        "abi": "event EtherReleased(uint256 amount)",
        "compact": "EtherReleased(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "EtherReleased",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
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
    "62e78cea": {
        "abi": "event Paused(address account)",
        "compact": "Paused(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "Paused",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "40c340f6": {
        "abi": "event PayeeAdded(address account, uint256 shares)",
        "compact": "PayeeAdded(address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "shares",
                "type": "uint256"
            }
        ],
        "name": "PayeeAdded",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "6ef95f06": {
        "abi": "event PaymentReceived(address from, uint256 amount)",
        "compact": "PaymentReceived(address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "PaymentReceived",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "df20fd1e": {
        "abi": "event PaymentReleased(address to, uint256 amount)",
        "compact": "PaymentReleased(address,uint256)",
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
        "name": "PaymentReleased",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "789cf55b": {
        "abi": "event ProposalCanceled(uint256 proposalId)",
        "compact": "ProposalCanceled(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "ProposalCanceled",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "7d84a626": {
        "abi": "event ProposalCreated(uint256 proposalId, address proposer, address[] targets, uint256[] values, string[] signatures, bytes[] calldatas, uint256 voteStart, uint256 voteEnd, string description)",
        "compact": "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "proposer",
                "type": "address"
            },
            {
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            },
            {
                "internalType": "string[]",
                "name": "signatures",
                "type": "string[]"
            },
            {
                "internalType": "bytes[]",
                "name": "calldatas",
                "type": "bytes[]"
            },
            {
                "internalType": "uint256",
                "name": "voteStart",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "voteEnd",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            }
        ],
        "name": "ProposalCreated",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "712ae138": {
        "abi": "event ProposalExecuted(uint256 proposalId)",
        "compact": "ProposalExecuted(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "ProposalExecuted",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "bd79b86f": {
        "abi": "event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)",
        "compact": "RoleAdminChanged(bytes32,bytes32,bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "2f878811": {
        "abi": "event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)",
        "compact": "RoleGranted(bytes32,address,address)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "f6391f5c": {
        "abi": "event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)",
        "compact": "RoleRevoked(bytes32,address,address)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "ddf252ad": {
        "abi": "event Transfer(address indexed from, address indexed to, uint256 value)",
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
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "4a39dc06": {
        "abi": "event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values)",
        "compact": "TransferBatch(address,address,address,uint256[],uint256[])",
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
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
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            }
        ],
        "name": "TransferBatch",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "c3d58168": {
        "abi": "event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)",
        "compact": "TransferSingle(address,address,address,uint256,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
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
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "TransferSingle",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "6bb7ff70": {
        "abi": "event URI(string value, uint256 indexed id)",
        "compact": "URI(string,uint256)",
        "inputs": [
            {
                "internalType": "string",
                "name": "value",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "URI",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "5db9ee0a": {
        "abi": "event Unpaused(address account)",
        "compact": "Unpaused(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "Unpaused",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "b8e13888": {
        "abi": "event VoteCast(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason)",
        "compact": "VoteCast(address,uint256,uint8,uint256,string)",
        "inputs": [
            {
                "internalType": "address",
                "name": "voter",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "support",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "weight",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "reason",
                "type": "string"
            }
        ],
        "name": "VoteCast",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "event"
    },
    "e2babfba": {
        "abi": "event VoteCastWithParams(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason, bytes params)",
        "compact": "VoteCastWithParams(address,uint256,uint8,uint256,string,bytes)",
        "inputs": [
            {
                "internalType": "address",
                "name": "voter",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "support",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "weight",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "reason",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "params",
                "type": "bytes"
            }
        ],
        "name": "VoteCastWithParams",
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
        "abi": "function approve(address spender, uint256 amount) external returns (bool)",
        "compact": "approve(address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
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
    "70a08231": {
        "abi": "function balanceOf(address account) external view returns (uint256)",
        "compact": "balanceOf(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
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
    "00fdd58e": {
        "abi": "function balanceOf(address account, uint256 id) external view returns (uint256)",
        "compact": "balanceOf(address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "balanceOf",
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
    "4e1273f4": {
        "abi": "function balanceOfBatch(address[] calldata accounts, uint256[] calldata ids) external view returns (uint256[] memory)",
        "compact": "balanceOfBatch(address[],uint256[])",
        "inputs": [
            {
                "internalType": "address[]",
                "name": "accounts",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            }
        ],
        "name": "balanceOfBatch",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "38af3eed": {
        "abi": "function beneficiary() public view virtual returns (address)",
        "compact": "beneficiary()",
        "inputs": [],
        "name": "beneficiary",
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
    "42966c68": {
        "abi": "function burn(uint256 amount) external",
        "compact": "burn(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "79cc6790": {
        "abi": "function burnFrom(address account, uint256 amount) external",
        "compact": "burnFrom(address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burnFrom",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "452115d6": {
        "abi": "function cancel(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) public virtual override returns (uint256)",
        "compact": "cancel(address[],uint256[],bytes[],bytes32)",
        "inputs": [
            {
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes[]",
                "name": "calldatas",
                "type": "bytes[]"
            },
            {
                "internalType": "bytes32",
                "name": "descriptionHash",
                "type": "bytes32"
            }
        ],
        "name": "cancel",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonPayable",
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
    "56781388": {
        "abi": "function castVote(uint256 proposalId, uint8 support) public virtual override returns (uint256)",
        "compact": "castVote(uint256,uint8)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "support",
                "type": "uint8"
            }
        ],
        "name": "castVote",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "3bccf4fd": {
        "abi": "function castVoteBySig(uint256 proposalId, uint8 support, uint8 v, bytes32 r, bytes32 s) public virtual override returns (uint256)",
        "compact": "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "support",
                "type": "uint8"
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
        "name": "castVoteBySig",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "7b3c71d3": {
        "abi": "function castVoteWithReason(uint256 proposalId, uint8 support, string calldata reason) public virtual override returns (uint256)",
        "compact": "castVoteWithReason(uint256,uint8,string)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "support",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "reason",
                "type": "string"
            }
        ],
        "name": "castVoteWithReason",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "5f398a14": {
        "abi": "function castVoteWithReasonAndParams(uint256 proposalId, uint8 support, string calldata reason, bytes memory params) public virtual override returns (uint256)",
        "compact": "castVoteWithReasonAndParams(uint256,uint8,string,bytes)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "support",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "reason",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "params",
                "type": "bytes"
            }
        ],
        "name": "castVoteWithReasonAndParams",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "03420181": {
        "abi": "function castVoteWithReasonAndParamsBySig(uint256 proposalId, uint8 support, string calldata reason, bytes memory params, uint8 v, bytes32 r, bytes32 s) public virtual override returns (uint256)",
        "compact": "castVoteWithReasonAndParamsBySig(uint256,uint8,string,bytes,uint8,bytes32,bytes32)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "support",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "reason",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "params",
                "type": "bytes"
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
        "name": "castVoteWithReasonAndParamsBySig",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "91ddadf4": {
        "abi": "function clock() public view virtual override returns (uint48)",
        "compact": "clock()",
        "inputs": [],
        "name": "clock",
        "outputs": [
            {
                "internalType": "uint48",
                "name": "",
                "type": "uint48"
            }
        ],
        "stateMutability": "view",
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
    "0fb5a6b4": {
        "abi": "function duration() public view virtual returns (uint256)",
        "compact": "duration()",
        "inputs": [],
        "name": "duration",
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
    "2d492ce2": {
        "abi": "function execute(ForwardRequest calldata req, bytes calldata signature) public payable returns (bool, bytes memory)",
        "compact": "execute(ForwardRequest,bytes)",
        "inputs": [
            {
                "internalType": "ForwardRequest",
                "name": "req",
                "type": "ForwardRequest"
            },
            {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
            }
        ],
        "name": "execute",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    "2656227d": {
        "abi": "function execute(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) public payable virtual override returns (uint256)",
        "compact": "execute(address[],uint256[],bytes[],bytes32)",
        "inputs": [
            {
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes[]",
                "name": "calldatas",
                "type": "bytes[]"
            },
            {
                "internalType": "bytes32",
                "name": "descriptionHash",
                "type": "bytes32"
            }
        ],
        "name": "execute",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
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
    "2d0335ab": {
        "abi": "function getNonce(address from) public view returns (uint256)",
        "compact": "getNonce(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            }
        ],
        "name": "getNonce",
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
    "248a9ca3": {
        "abi": "function getRoleAdmin(bytes32 role) external view returns (bytes32)",
        "compact": "getRoleAdmin(bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
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
    "eb9019d4": {
        "abi": "function getVotes(address account, uint256 timepoint) public view virtual override returns (uint256)",
        "compact": "getVotes(address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "timepoint",
                "type": "uint256"
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
    "9a802a6d": {
        "abi": "function getVotesWithParams(address account, uint256 timepoint, bytes memory params) public view virtual override returns (uint256)",
        "compact": "getVotesWithParams(address,uint256,bytes)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "timepoint",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "params",
                "type": "bytes"
            }
        ],
        "name": "getVotesWithParams",
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
    "2f2ff15d": {
        "abi": "function grantRole(bytes32 role, address account) external",
        "compact": "grantRole(bytes32,address)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "91d14854": {
        "abi": "function hasRole(bytes32 role, address account) external view returns (bool)",
        "compact": "hasRole(bytes32,address)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
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
    "43859632": {
        "abi": "function hasVoted(uint256 proposalId, address account) public view virtual returns (bool)",
        "compact": "hasVoted(uint256,address)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasVoted",
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
    "c59057e4": {
        "abi": "function hashProposal(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) public pure returns (uint256)",
        "compact": "hashProposal(address[],uint256[],bytes[],bytes32)",
        "inputs": [
            {
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes[]",
                "name": "calldatas",
                "type": "bytes[]"
            },
            {
                "internalType": "bytes32",
                "name": "descriptionHash",
                "type": "bytes32"
            }
        ],
        "name": "hashProposal",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
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
    "572b6c05": {
        "abi": "function isTrustedForwarder(address forwarder) public view virtual returns (bool)",
        "compact": "isTrustedForwarder(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "forwarder",
                "type": "address"
            }
        ],
        "name": "isTrustedForwarder",
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
    "40c10f19": {
        "abi": "function mint(address to, uint256 tokenId) public",
        "compact": "mint(address,uint256)",
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
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonPayable",
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
    "5c975abb": {
        "abi": "function paused() public view virtual returns (bool)",
        "compact": "paused()",
        "inputs": [],
        "name": "paused",
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
    "8b83209b": {
        "abi": "function payee(uint256 index) public view returns (address)",
        "compact": "payee(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "payee",
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
    "e2982c21": {
        "abi": "function payments(address dest) public view returns (uint256)",
        "compact": "payments(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "dest",
                "type": "address"
            }
        ],
        "name": "payments",
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
    "c01f9e37": {
        "abi": "function proposalDeadline(uint256 proposalId) public view virtual override returns (uint256)",
        "compact": "proposalDeadline(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "proposalDeadline",
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
    "143489d0": {
        "abi": "function proposalProposer(uint256 proposalId) public view virtual override returns (address)",
        "compact": "proposalProposer(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "proposalProposer",
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
    "2d63f693": {
        "abi": "function proposalSnapshot(uint256 proposalId) public view virtual override returns (uint256)",
        "compact": "proposalSnapshot(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "proposalSnapshot",
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
    "b58131b0": {
        "abi": "function proposalThreshold() public view virtual returns (uint256)",
        "compact": "proposalThreshold()",
        "inputs": [],
        "name": "proposalThreshold",
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
    "544ffc9c": {
        "abi": "function proposalVotes(uint256 proposalId) public view virtual returns (uint256 againstVotes, uint256 forVotes, uint256 abstainVotes)",
        "compact": "proposalVotes(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "proposalVotes",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "againstVotes",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "forVotes",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "abstainVotes",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "7d5e81e2": {
        "abi": "function propose(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, string memory description) public virtual override returns (uint256)",
        "compact": "propose(address[],uint256[],bytes[],string)",
        "inputs": [
            {
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes[]",
                "name": "calldatas",
                "type": "bytes[]"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            }
        ],
        "name": "propose",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "f8ce560a": {
        "abi": "function quorum(uint256 timepoint) public view virtual returns (uint256)",
        "compact": "quorum(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "timepoint",
                "type": "uint256"
            }
        ],
        "name": "quorum",
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
    "fbccedae": {
        "abi": "function releasable() public view virtual returns (uint256)",
        "compact": "releasable()",
        "inputs": [],
        "name": "releasable",
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
    "a11d2bd2": {
        "abi": "function releasable(IERC20 token, address account) public view returns (uint256)",
        "compact": "releasable(IERC20,address)",
        "inputs": [
            {
                "internalType": "IERC20",
                "name": "token",
                "type": "IERC20"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "releasable",
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
    "a3f8eace": {
        "abi": "function releasable(address account) public view returns (uint256)",
        "compact": "releasable(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "releasable",
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
    "86d1a69f": {
        "abi": "function release() public virtual",
        "compact": "release()",
        "inputs": [],
        "name": "release",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "3cefee6b": {
        "abi": "function release(IERC20 token, address account) public virtual",
        "compact": "release(IERC20,address)",
        "inputs": [
            {
                "internalType": "IERC20",
                "name": "token",
                "type": "IERC20"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "release",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "19165587": {
        "abi": "function release(address payable account) public virtual",
        "compact": "release(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "release",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "96132521": {
        "abi": "function released() public view virtual returns (uint256)",
        "compact": "released()",
        "inputs": [],
        "name": "released",
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
    "f7e6c74a": {
        "abi": "function released(IERC20 token, address account) public view returns (uint256)",
        "compact": "released(IERC20,address)",
        "inputs": [
            {
                "internalType": "IERC20",
                "name": "token",
                "type": "IERC20"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "released",
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
    "9852595c": {
        "abi": "function released(address account) public view returns (uint256)",
        "compact": "released(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "released",
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
    "36568abe": {
        "abi": "function renounceRole(bytes32 role, address account) external",
        "compact": "renounceRole(bytes32,address)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "d547741f": {
        "abi": "function revokeRole(bytes32 role, address account) external",
        "compact": "revokeRole(bytes32,address)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "2eb2c2d6": {
        "abi": "function safeBatchTransferFrom(address from, address to, uint256[] calldata ids, uint256[] calldata amounts, bytes calldata data) external",
        "compact": "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)",
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
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeBatchTransferFrom",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "40d097c3": {
        "abi": "function safeMint(address to) public",
        "compact": "safeMint(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "safeMint",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    },
    "a1448194": {
        "abi": "function safeMint(address to, uint256 tokenId) public",
        "compact": "safeMint(address,uint256)",
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
        "name": "safeMint",
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
    "f242432a": {
        "abi": "function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external",
        "compact": "safeTransferFrom(address,address,uint256,uint256,bytes)",
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
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
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
    "ce7c2ac2": {
        "abi": "function shares(address account) public view returns (uint256)",
        "compact": "shares(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "shares",
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
    "be9a6555": {
        "abi": "function start() public view virtual returns (uint256)",
        "compact": "start()",
        "inputs": [],
        "name": "start",
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
    "3e4f49e6": {
        "abi": "function state(uint256 proposalId) public view returns (ProposalState)",
        "compact": "state(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "state",
        "outputs": [
            {
                "internalType": "ProposalState",
                "name": "",
                "type": "ProposalState"
            }
        ],
        "stateMutability": "view",
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
    "fc0c546a": {
        "abi": "function token() public view returns (address)",
        "compact": "token()",
        "inputs": [],
        "name": "token",
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
    "e33b7de3": {
        "abi": "function totalReleased() public view returns (uint256)",
        "compact": "totalReleased()",
        "inputs": [],
        "name": "totalReleased",
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
    "d7f7a4e5": {
        "abi": "function totalReleased(IERC20 token) public view returns (uint256)",
        "compact": "totalReleased(IERC20)",
        "inputs": [
            {
                "internalType": "IERC20",
                "name": "token",
                "type": "IERC20"
            }
        ],
        "name": "totalReleased",
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
    "3a98ef39": {
        "abi": "function totalShares() public view returns (uint256)",
        "compact": "totalShares()",
        "inputs": [],
        "name": "totalShares",
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
        "abi": "function transferFrom(address from, address to, uint256 amount) external returns (bool)",
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
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
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
    "c1ea34fb": {
        "abi": "function verify(ForwardRequest calldata req, bytes calldata signature) public view returns (bool)",
        "compact": "verify(ForwardRequest,bytes)",
        "inputs": [
            {
                "internalType": "ForwardRequest",
                "name": "req",
                "type": "ForwardRequest"
            },
            {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
            }
        ],
        "name": "verify",
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
    "54fd4d50": {
        "abi": "function version() public view returns (string memory)",
        "compact": "version()",
        "inputs": [],
        "name": "version",
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
    "810ec23b": {
        "abi": "function vestedAmount(address token, uint64 timestamp) public view virtual returns (uint256)",
        "compact": "vestedAmount(address,uint64)",
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "uint64",
                "name": "timestamp",
                "type": "uint64"
            }
        ],
        "name": "vestedAmount",
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
    "0a17b06b": {
        "abi": "function vestedAmount(uint64 timestamp) public view virtual returns (uint256)",
        "compact": "vestedAmount(uint64)",
        "inputs": [
            {
                "internalType": "uint64",
                "name": "timestamp",
                "type": "uint64"
            }
        ],
        "name": "vestedAmount",
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
    "3932abb1": {
        "abi": "function votingDelay() public view virtual returns (uint256)",
        "compact": "votingDelay()",
        "inputs": [],
        "name": "votingDelay",
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
    "02a251a3": {
        "abi": "function votingPeriod() public view virtual returns (uint256)",
        "compact": "votingPeriod()",
        "inputs": [],
        "name": "votingPeriod",
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
    },
    "31b3eb94": {
        "abi": "function withdrawPayments(address payable payee) public virtual",
        "compact": "withdrawPayments(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "payee",
                "type": "address"
            }
        ],
        "name": "withdrawPayments",
        "outputs": [],
        "stateMutability": "nonPayable",
        "type": "function"
    }
};
