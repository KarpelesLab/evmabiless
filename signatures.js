// Do not edit, automatically generated file.

module.exports = {
    "75b238fc": {
        "abi": "function ADMIN_ROLE() returns (uint64)",
        "compact": "ADMIN_ROLE()",
        "inputs": [],
        "name": "ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "6697b232": {
        "abi": "error AccessControlBadConfirmation()",
        "compact": "AccessControlBadConfirmation()",
        "inputs": [],
        "name": "AccessControlBadConfirmation",
        "type": "error"
    },
    "19ca5ebb": {
        "abi": "error AccessControlEnforcedDefaultAdminDelay(uint48 schedule)",
        "compact": "AccessControlEnforcedDefaultAdminDelay(uint48)",
        "inputs": [
            {
                "internalType": "uint48",
                "name": "schedule",
                "type": "uint48"
            }
        ],
        "name": "AccessControlEnforcedDefaultAdminDelay",
        "type": "error"
    },
    "3fc3c27a": {
        "abi": "error AccessControlEnforcedDefaultAdminRules()",
        "compact": "AccessControlEnforcedDefaultAdminRules()",
        "inputs": [],
        "name": "AccessControlEnforcedDefaultAdminRules",
        "type": "error"
    },
    "c22c8022": {
        "abi": "error AccessControlInvalidDefaultAdmin(address defaultAdmin)",
        "compact": "AccessControlInvalidDefaultAdmin(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "defaultAdmin",
                "type": "address"
            }
        ],
        "name": "AccessControlInvalidDefaultAdmin",
        "type": "error"
    },
    "e2517d3f": {
        "abi": "error AccessControlUnauthorizedAccount(address account, bytes32 neededRole)",
        "compact": "AccessControlUnauthorizedAccount(address,bytes32)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "neededRole",
                "type": "bytes32"
            }
        ],
        "name": "AccessControlUnauthorizedAccount",
        "type": "error"
    },
    "c2f31e5e": {
        "abi": "error AccessManagedInvalidAuthority(address authority)",
        "compact": "AccessManagedInvalidAuthority(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "authority",
                "type": "address"
            }
        ],
        "name": "AccessManagedInvalidAuthority",
        "type": "error"
    },
    "af77169d": {
        "abi": "error AccessManagedRequiredDelay(address caller, uint32 delay)",
        "compact": "AccessManagedRequiredDelay(address,uint32)",
        "inputs": [
            {
                "internalType": "address",
                "name": "caller",
                "type": "address"
            },
            {
                "internalType": "uint32",
                "name": "delay",
                "type": "uint32"
            }
        ],
        "name": "AccessManagedRequiredDelay",
        "type": "error"
    },
    "068ca9d8": {
        "abi": "error AccessManagedUnauthorized(address caller)",
        "compact": "AccessManagedUnauthorized(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "caller",
                "type": "address"
            }
        ],
        "name": "AccessManagedUnauthorized",
        "type": "error"
    },
    "813e9459": {
        "abi": "error AccessManagerAlreadyScheduled(bytes32 operationId)",
        "compact": "AccessManagerAlreadyScheduled(bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "operationId",
                "type": "bytes32"
            }
        ],
        "name": "AccessManagerAlreadyScheduled",
        "type": "error"
    },
    "5f159e63": {
        "abi": "error AccessManagerBadConfirmation()",
        "compact": "AccessManagerBadConfirmation()",
        "inputs": [],
        "name": "AccessManagerBadConfirmation",
        "type": "error"
    },
    "78a5d6e4": {
        "abi": "error AccessManagerExpired(bytes32 operationId)",
        "compact": "AccessManagerExpired(bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "operationId",
                "type": "bytes32"
            }
        ],
        "name": "AccessManagerExpired",
        "type": "error"
    },
    "420cf47a": {
        "abi": "event AccessManagerIgnoredSet(address target, bytes4 selector, bool ignored)",
        "anonymous": false,
        "compact": "AccessManagerIgnoredSet(address,bytes4,bool)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes4",
                "name": "selector",
                "type": "bytes4"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "ignored",
                "type": "bool"
            }
        ],
        "name": "AccessManagerIgnoredSet",
        "type": "event"
    },
    "0813ada2": {
        "abi": "error AccessManagerInvalidInitialAdmin(address initialAdmin)",
        "compact": "AccessManagerInvalidInitialAdmin(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "initialAdmin",
                "type": "address"
            }
        ],
        "name": "AccessManagerInvalidInitialAdmin",
        "type": "error"
    },
    "5a068bc8": {
        "abi": "error AccessManagerLockedAccount(address account)",
        "compact": "AccessManagerLockedAccount(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "AccessManagerLockedAccount",
        "type": "error"
    },
    "1871a90c": {
        "abi": "error AccessManagerLockedRole(uint64 roleId)",
        "compact": "AccessManagerLockedRole(uint64)",
        "inputs": [
            {
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            }
        ],
        "name": "AccessManagerLockedRole",
        "type": "error"
    },
    "18cb6b7a": {
        "abi": "error AccessManagerNotReady(bytes32 operationId)",
        "compact": "AccessManagerNotReady(bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "operationId",
                "type": "bytes32"
            }
        ],
        "name": "AccessManagerNotReady",
        "type": "error"
    },
    "60a299b0": {
        "abi": "error AccessManagerNotScheduled(bytes32 operationId)",
        "compact": "AccessManagerNotScheduled(bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "operationId",
                "type": "bytes32"
            }
        ],
        "name": "AccessManagerNotScheduled",
        "type": "error"
    },
    "f07e038f": {
        "abi": "error AccessManagerUnauthorizedAccount(address msgsender, uint64 roleId)",
        "compact": "AccessManagerUnauthorizedAccount(address,uint64)",
        "inputs": [
            {
                "internalType": "address",
                "name": "msgsender",
                "type": "address"
            },
            {
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            }
        ],
        "name": "AccessManagerUnauthorizedAccount",
        "type": "error"
    },
    "81c6f24b": {
        "abi": "error AccessManagerUnauthorizedCall(address caller, address target, bytes4 selector)",
        "compact": "AccessManagerUnauthorizedCall(address,address,bytes4)",
        "inputs": [
            {
                "internalType": "address",
                "name": "caller",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "bytes4",
                "name": "selector",
                "type": "bytes4"
            }
        ],
        "name": "AccessManagerUnauthorizedCall",
        "type": "error"
    },
    "3fe2751c": {
        "abi": "error AccessManagerUnauthorizedCancel(address msgsender, address caller, address target, bytes4 selector)",
        "compact": "AccessManagerUnauthorizedCancel(address,address,address,bytes4)",
        "inputs": [
            {
                "internalType": "address",
                "name": "msgsender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "caller",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "bytes4",
                "name": "selector",
                "type": "bytes4"
            }
        ],
        "name": "AccessManagerUnauthorizedCancel",
        "type": "error"
    },
    "320ff748": {
        "abi": "error AccessManagerUnauthorizedConsume(address target)",
        "compact": "AccessManagerUnauthorizedConsume(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            }
        ],
        "name": "AccessManagerUnauthorizedConsume",
        "type": "error"
    },
    "9996b315": {
        "abi": "error AddressEmptyCode(address target)",
        "compact": "AddressEmptyCode(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            }
        ],
        "name": "AddressEmptyCode",
        "type": "error"
    },
    "cd786059": {
        "abi": "error AddressInsufficientBalance(address account)",
        "compact": "AddressInsufficientBalance(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "AddressInsufficientBalance",
        "type": "error"
    },
    "7e644d79": {
        "abi": "event AdminChanged(address previousAdmin, address newAdmin)",
        "anonymous": false,
        "compact": "AdminChanged(address,address)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "previousAdmin",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "newAdmin",
                "type": "address"
            }
        ],
        "name": "AdminChanged",
        "type": "event"
    },
    "8c5be1e5": {
        "abi": "event Approval(address indexed owner, address indexed spender, uint256 value)",
        "anonymous": false,
        "compact": "Approval(address,address,uint256)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    "17307eab": {
        "abi": "event ApprovalForAll(address indexed owner, address indexed operator, bool approved)",
        "anonymous": false,
        "compact": "ApprovalForAll(address,address,bool)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    "2f658b44": {
        "abi": "event AuthorityUpdated(address authority)",
        "anonymous": false,
        "compact": "AuthorityUpdated(address)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "authority",
                "type": "address"
            }
        ],
        "name": "AuthorityUpdated",
        "type": "event"
    },
    "f4caeb2d": {
        "abi": "event AuthorizedOperator(address indexed operator, address indexed tokenHolder)",
        "anonymous": false,
        "compact": "AuthorizedOperator(address,address)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "tokenHolder",
                "type": "address"
            }
        ],
        "name": "AuthorizedOperator",
        "type": "event"
    },
    "deaaa7cc": {
        "abi": "function BALLOT_TYPEHASH() returns (bytes32)",
        "compact": "BALLOT_TYPEHASH()",
        "inputs": [],
        "name": "BALLOT_TYPEHASH",
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
    "65135e4d": {
        "abi": "event BaseDelaySet(uint32 oldBaseDelaySeconds, uint32 newBaseDelaySeconds)",
        "anonymous": false,
        "compact": "BaseDelaySet(uint32,uint32)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "oldBaseDelaySeconds",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "newBaseDelaySeconds",
                "type": "uint32"
            }
        ],
        "name": "BaseDelaySet",
        "type": "event"
    },
    "6bd5c950": {
        "abi": "event BatchMetadataUpdate(uint256 _fromTokenId, uint256 _toTokenId)",
        "anonymous": false,
        "compact": "BatchMetadataUpdate(uint256,uint256)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_fromTokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_toTokenId",
                "type": "uint256"
            }
        ],
        "name": "BatchMetadataUpdate",
        "type": "event"
    },
    "847ac564": {
        "abi": "error BeaconInvalidImplementation(address implementation)",
        "compact": "BeaconInvalidImplementation(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "implementation",
                "type": "address"
            }
        ],
        "name": "BeaconInvalidImplementation",
        "type": "error"
    },
    "1cf3b03a": {
        "abi": "event BeaconUpgraded(address indexed beacon)",
        "anonymous": false,
        "compact": "BeaconUpgraded(address)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "beacon",
                "type": "address"
            }
        ],
        "name": "BeaconUpgraded",
        "type": "event"
    },
    "a78a9be3": {
        "abi": "event Burned(address indexed operator, address indexed from, uint256 amount, bytes data, bytes operatorData)",
        "anonymous": false,
        "compact": "Burned(address,address,uint256,bytes,bytes)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "operatorData",
                "type": "bytes"
            }
        ],
        "name": "Burned",
        "type": "event"
    },
    "b08e51c0": {
        "abi": "function CANCELLER_ROLE() returns (bytes32)",
        "compact": "CANCELLER_ROLE()",
        "inputs": [],
        "name": "CANCELLER_ROLE",
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
    "4bf5d7e9": {
        "abi": "function CLOCK_MODE() returns (string)",
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
        "abi": "function COUNTING_MODE() returns (string)",
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
    "c2617efa": {
        "abi": "event CallExecuted(bytes32 indexed id, uint256 indexed index, address target, uint256 value, bytes data)",
        "anonymous": false,
        "compact": "CallExecuted(bytes32,uint256,address,uint256,bytes)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "CallExecuted",
        "type": "event"
    },
    "20fda5fd": {
        "abi": "event CallSalt(bytes32 indexed id, bytes32 salt)",
        "anonymous": false,
        "compact": "CallSalt(bytes32,bytes32)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            }
        ],
        "name": "CallSalt",
        "type": "event"
    },
    "4cf4410c": {
        "abi": "event CallScheduled(bytes32 indexed id, uint256 indexed index, address target, uint256 value, bytes data, bytes32 predecessor, uint256 delay)",
        "anonymous": false,
        "compact": "CallScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "predecessor",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "delay",
                "type": "uint256"
            }
        ],
        "name": "CallScheduled",
        "type": "event"
    },
    "2fffc091": {
        "abi": "event CancelTransaction(bytes32 indexed txHash, address indexed target, uint256 value, string signature, bytes data, uint256 eta)",
        "anonymous": false,
        "compact": "CancelTransaction(bytes32,address,uint256,string,bytes,uint256)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "txHash",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "signature",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "eta",
                "type": "uint256"
            }
        ],
        "name": "CancelTransaction",
        "type": "event"
    },
    "baa1eb22": {
        "abi": "event Cancelled(bytes32 indexed id)",
        "anonymous": false,
        "compact": "Cancelled(bytes32)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "Cancelled",
        "type": "event"
    },
    "2520601d": {
        "abi": "error CheckpointUnorderedInsertion()",
        "compact": "CheckpointUnorderedInsertion()",
        "inputs": [],
        "name": "CheckpointUnorderedInsertion",
        "type": "error"
    },
    "deaa91b6": {
        "abi": "event ConsecutiveTransfer(uint256 indexed fromTokenId, uint256 toTokenId, address indexed fromAddress, address indexed toAddress)",
        "anonymous": false,
        "compact": "ConsecutiveTransfer(uint256,uint256,address,address)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "fromTokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "toTokenId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "fromAddress",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "toAddress",
                "type": "address"
            }
        ],
        "name": "ConsecutiveTransfer",
        "type": "event"
    },
    "4ca249dc": {
        "abi": "error Create2EmptyBytecode()",
        "compact": "Create2EmptyBytecode()",
        "inputs": [],
        "name": "Create2EmptyBytecode",
        "type": "error"
    },
    "741752c2": {
        "abi": "error Create2FailedDeployment()",
        "compact": "Create2FailedDeployment()",
        "inputs": [],
        "name": "Create2FailedDeployment",
        "type": "error"
    },
    "e4bbecac": {
        "abi": "error Create2InsufficientBalance(uint256 balance, uint256 needed)",
        "compact": "Create2InsufficientBalance(uint256,uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            }
        ],
        "name": "Create2InsufficientBalance",
        "type": "error"
    },
    "a217fddf": {
        "abi": "function DEFAULT_ADMIN_ROLE() returns (bytes32)",
        "compact": "DEFAULT_ADMIN_ROLE()",
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
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
    "3644e515": {
        "abi": "function DOMAIN_SEPARATOR() returns (bytes32)",
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
    "2b1fa2ed": {
        "abi": "event DefaultAdminDelayChangeCanceled()",
        "anonymous": false,
        "compact": "DefaultAdminDelayChangeCanceled()",
        "inputs": [],
        "name": "DefaultAdminDelayChangeCanceled",
        "type": "event"
    },
    "f1038c18": {
        "abi": "event DefaultAdminDelayChangeScheduled(uint48 newDelay, uint48 effectSchedule)",
        "anonymous": false,
        "compact": "DefaultAdminDelayChangeScheduled(uint48,uint48)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint48",
                "name": "newDelay",
                "type": "uint48"
            },
            {
                "indexed": false,
                "internalType": "uint48",
                "name": "effectSchedule",
                "type": "uint48"
            }
        ],
        "name": "DefaultAdminDelayChangeScheduled",
        "type": "event"
    },
    "8886ebfc": {
        "abi": "event DefaultAdminTransferCanceled()",
        "anonymous": false,
        "compact": "DefaultAdminTransferCanceled()",
        "inputs": [],
        "name": "DefaultAdminTransferCanceled",
        "type": "event"
    },
    "3377dc44": {
        "abi": "event DefaultAdminTransferScheduled(address indexed newAdmin, uint48 acceptSchedule)",
        "anonymous": false,
        "compact": "DefaultAdminTransferScheduled(address,uint48)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "newAdmin",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint48",
                "name": "acceptSchedule",
                "type": "uint48"
            }
        ],
        "name": "DefaultAdminTransferScheduled",
        "type": "event"
    },
    "3134e8a2": {
        "abi": "event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate)",
        "anonymous": false,
        "compact": "DelegateChanged(address,address,address)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "delegator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "fromDelegate",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "toDelegate",
                "type": "address"
            }
        ],
        "name": "DelegateChanged",
        "type": "event"
    },
    "dec2bacd": {
        "abi": "event DelegateVotesChanged(address indexed delegate, uint256 previousVotes, uint256 newVotes)",
        "anonymous": false,
        "compact": "DelegateVotesChanged(address,uint256,uint256)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "delegate",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "previousVotes",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newVotes",
                "type": "uint256"
            }
        ],
        "name": "DelegateVotesChanged",
        "type": "event"
    },
    "dcbc1c05": {
        "abi": "event Deposit(address indexed sender, address indexed owner, uint256 assets, uint256 shares)",
        "anonymous": false,
        "compact": "Deposit(address,address,uint256,uint256)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assets",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "shares",
                "type": "uint256"
            }
        ],
        "name": "Deposit",
        "type": "event"
    },
    "f645eedf": {
        "abi": "error ECDSAInvalidSignature()",
        "compact": "ECDSAInvalidSignature()",
        "inputs": [],
        "name": "ECDSAInvalidSignature",
        "type": "error"
    },
    "fce698f7": {
        "abi": "error ECDSAInvalidSignatureLength(uint256 length)",
        "compact": "ECDSAInvalidSignatureLength(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "length",
                "type": "uint256"
            }
        ],
        "name": "ECDSAInvalidSignatureLength",
        "type": "error"
    },
    "d78bce0c": {
        "abi": "error ECDSAInvalidSignatureS(bytes32 s)",
        "compact": "ECDSAInvalidSignatureS(bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            }
        ],
        "name": "ECDSAInvalidSignatureS",
        "type": "error"
    },
    "0a6387c9": {
        "abi": "event EIP712DomainChanged()",
        "anonymous": false,
        "compact": "EIP712DomainChanged()",
        "inputs": [],
        "name": "EIP712DomainChanged",
        "type": "event"
    },
    "03dee4c5": {
        "abi": "error ERC1155InsufficientBalance(address sender, uint256 balance, uint256 needed, uint256 tokenId)",
        "compact": "ERC1155InsufficientBalance(address,uint256,uint256,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ERC1155InsufficientBalance",
        "type": "error"
    },
    "3e31884e": {
        "abi": "error ERC1155InvalidApprover(address approver)",
        "compact": "ERC1155InvalidApprover(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "approver",
                "type": "address"
            }
        ],
        "name": "ERC1155InvalidApprover",
        "type": "error"
    },
    "5b059991": {
        "abi": "error ERC1155InvalidArrayLength(uint256 idsLength, uint256 valuesLength)",
        "compact": "ERC1155InvalidArrayLength(uint256,uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "idsLength",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "valuesLength",
                "type": "uint256"
            }
        ],
        "name": "ERC1155InvalidArrayLength",
        "type": "error"
    },
    "ced3e100": {
        "abi": "error ERC1155InvalidOperator(address operator)",
        "compact": "ERC1155InvalidOperator(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "ERC1155InvalidOperator",
        "type": "error"
    },
    "57f447ce": {
        "abi": "error ERC1155InvalidReceiver(address receiver)",
        "compact": "ERC1155InvalidReceiver(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC1155InvalidReceiver",
        "type": "error"
    },
    "01a83514": {
        "abi": "error ERC1155InvalidSender(address sender)",
        "compact": "ERC1155InvalidSender(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "ERC1155InvalidSender",
        "type": "error"
    },
    "e237d922": {
        "abi": "error ERC1155MissingApprovalForAll(address operator, address owner)",
        "compact": "ERC1155MissingApprovalForAll(address,address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC1155MissingApprovalForAll",
        "type": "error"
    },
    "c2f868f4": {
        "abi": "error ERC1167FailedCreateClone()",
        "compact": "ERC1167FailedCreateClone()",
        "inputs": [],
        "name": "ERC1167FailedCreateClone",
        "type": "error"
    },
    "62e77ba2": {
        "abi": "error ERC1967InvalidAdmin(address admin)",
        "compact": "ERC1967InvalidAdmin(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "admin",
                "type": "address"
            }
        ],
        "name": "ERC1967InvalidAdmin",
        "type": "error"
    },
    "64ced0ec": {
        "abi": "error ERC1967InvalidBeacon(address beacon)",
        "compact": "ERC1967InvalidBeacon(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "beacon",
                "type": "address"
            }
        ],
        "name": "ERC1967InvalidBeacon",
        "type": "error"
    },
    "4c9c8ce3": {
        "abi": "error ERC1967InvalidImplementation(address implementation)",
        "compact": "ERC1967InvalidImplementation(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "implementation",
                "type": "address"
            }
        ],
        "name": "ERC1967InvalidImplementation",
        "type": "error"
    },
    "b398979f": {
        "abi": "error ERC1967NonPayable()",
        "compact": "ERC1967NonPayable()",
        "inputs": [],
        "name": "ERC1967NonPayable",
        "type": "error"
    },
    "9e79f854": {
        "abi": "error ERC20ExceededCap(uint256 increasedSupply, uint256 cap)",
        "compact": "ERC20ExceededCap(uint256,uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "increasedSupply",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "cap",
                "type": "uint256"
            }
        ],
        "name": "ERC20ExceededCap",
        "type": "error"
    },
    "1cb15d26": {
        "abi": "error ERC20ExceededSafeSupply(uint256 increasedSupply, uint256 cap)",
        "compact": "ERC20ExceededSafeSupply(uint256,uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "increasedSupply",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "cap",
                "type": "uint256"
            }
        ],
        "name": "ERC20ExceededSafeSupply",
        "type": "error"
    },
    "fb8f41b2": {
        "abi": "error ERC20InsufficientAllowance(address spender, uint256 allowance, uint256 needed)",
        "compact": "ERC20InsufficientAllowance(address,uint256,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "allowance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            }
        ],
        "name": "ERC20InsufficientAllowance",
        "type": "error"
    },
    "e450d38c": {
        "abi": "error ERC20InsufficientBalance(address sender, uint256 balance, uint256 needed)",
        "compact": "ERC20InsufficientBalance(address,uint256,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            }
        ],
        "name": "ERC20InsufficientBalance",
        "type": "error"
    },
    "e602df05": {
        "abi": "error ERC20InvalidApprover(address approver)",
        "compact": "ERC20InvalidApprover(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "approver",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidApprover",
        "type": "error"
    },
    "392e1e27": {
        "abi": "error ERC20InvalidCap(uint256 cap)",
        "compact": "ERC20InvalidCap(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "cap",
                "type": "uint256"
            }
        ],
        "name": "ERC20InvalidCap",
        "type": "error"
    },
    "ec442f05": {
        "abi": "error ERC20InvalidReceiver(address receiver)",
        "compact": "ERC20InvalidReceiver(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidReceiver",
        "type": "error"
    },
    "96c6fd1e": {
        "abi": "error ERC20InvalidSender(address sender)",
        "compact": "ERC20InvalidSender(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidSender",
        "type": "error"
    },
    "94280d62": {
        "abi": "error ERC20InvalidSpender(address spender)",
        "compact": "ERC20InvalidSpender(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidSpender",
        "type": "error"
    },
    "438d6fe3": {
        "abi": "error ERC20InvalidUnderlying(address token)",
        "compact": "ERC20InvalidUnderlying(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidUnderlying",
        "type": "error"
    },
    "c0e52349": {
        "abi": "event ERC20Released(address indexed token, uint256 amount)",
        "anonymous": false,
        "compact": "ERC20Released(address,uint256)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "token",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "ERC20Released",
        "type": "event"
    },
    "62791302": {
        "abi": "error ERC2612ExpiredSignature(uint256 deadline)",
        "compact": "ERC2612ExpiredSignature(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }
        ],
        "name": "ERC2612ExpiredSignature",
        "type": "error"
    },
    "4b800e46": {
        "abi": "error ERC2612InvalidSigner(address signer, address owner)",
        "compact": "ERC2612InvalidSigner(address,address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "signer",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC2612InvalidSigner",
        "type": "error"
    },
    "94eef58a": {
        "abi": "error ERC2771ForwarderExpiredRequest(uint48 deadline)",
        "compact": "ERC2771ForwarderExpiredRequest(uint48)",
        "inputs": [
            {
                "internalType": "uint48",
                "name": "deadline",
                "type": "uint48"
            }
        ],
        "name": "ERC2771ForwarderExpiredRequest",
        "type": "error"
    },
    "c845a056": {
        "abi": "error ERC2771ForwarderInvalidSigner(address signer, address from)",
        "compact": "ERC2771ForwarderInvalidSigner(address,address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "signer",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            }
        ],
        "name": "ERC2771ForwarderInvalidSigner",
        "type": "error"
    },
    "70647f79": {
        "abi": "error ERC2771ForwarderMismatchedValue(uint256 requestedValue, uint256 msgValue)",
        "compact": "ERC2771ForwarderMismatchedValue(uint256,uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "requestedValue",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "msgValue",
                "type": "uint256"
            }
        ],
        "name": "ERC2771ForwarderMismatchedValue",
        "type": "error"
    },
    "d2650cd1": {
        "abi": "error ERC2771UntrustfulTarget(address target, address forwarder)",
        "compact": "ERC2771UntrustfulTarget(address,address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "forwarder",
                "type": "address"
            }
        ],
        "name": "ERC2771UntrustfulTarget",
        "type": "error"
    },
    "6f483d09": {
        "abi": "error ERC2981InvalidDefaultRoyalty(uint256 numerator, uint256 denominator)",
        "compact": "ERC2981InvalidDefaultRoyalty(uint256,uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "numerator",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "denominator",
                "type": "uint256"
            }
        ],
        "name": "ERC2981InvalidDefaultRoyalty",
        "type": "error"
    },
    "b6d9900a": {
        "abi": "error ERC2981InvalidDefaultRoyaltyReceiver(address receiver)",
        "compact": "ERC2981InvalidDefaultRoyaltyReceiver(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC2981InvalidDefaultRoyaltyReceiver",
        "type": "error"
    },
    "dfd1fc1b": {
        "abi": "error ERC2981InvalidTokenRoyalty(uint256 tokenId, uint256 numerator, uint256 denominator)",
        "compact": "ERC2981InvalidTokenRoyalty(uint256,uint256,uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "numerator",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "denominator",
                "type": "uint256"
            }
        ],
        "name": "ERC2981InvalidTokenRoyalty",
        "type": "error"
    },
    "969f0852": {
        "abi": "error ERC2981InvalidTokenRoyaltyReceiver(uint256 tokenId, address receiver)",
        "compact": "ERC2981InvalidTokenRoyaltyReceiver(uint256,address)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC2981InvalidTokenRoyaltyReceiver",
        "type": "error"
    },
    "fd9a7609": {
        "abi": "error ERC3156ExceededMaxLoan(uint256 maxLoan)",
        "compact": "ERC3156ExceededMaxLoan(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "maxLoan",
                "type": "uint256"
            }
        ],
        "name": "ERC3156ExceededMaxLoan",
        "type": "error"
    },
    "678c5b00": {
        "abi": "error ERC3156InvalidReceiver(address receiver)",
        "compact": "ERC3156InvalidReceiver(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC3156InvalidReceiver",
        "type": "error"
    },
    "b5a7db92": {
        "abi": "error ERC3156UnsupportedToken(address token)",
        "compact": "ERC3156UnsupportedToken(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "ERC3156UnsupportedToken",
        "type": "error"
    },
    "79012fb2": {
        "abi": "error ERC4626ExceededMaxDeposit(address receiver, uint256 assets, uint256 max)",
        "compact": "ERC4626ExceededMaxDeposit(address,uint256,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "assets",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "max",
                "type": "uint256"
            }
        ],
        "name": "ERC4626ExceededMaxDeposit",
        "type": "error"
    },
    "284ff667": {
        "abi": "error ERC4626ExceededMaxMint(address receiver, uint256 shares, uint256 max)",
        "compact": "ERC4626ExceededMaxMint(address,uint256,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "shares",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "max",
                "type": "uint256"
            }
        ],
        "name": "ERC4626ExceededMaxMint",
        "type": "error"
    },
    "b94abeec": {
        "abi": "error ERC4626ExceededMaxRedeem(address owner, uint256 shares, uint256 max)",
        "compact": "ERC4626ExceededMaxRedeem(address,uint256,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "shares",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "max",
                "type": "uint256"
            }
        ],
        "name": "ERC4626ExceededMaxRedeem",
        "type": "error"
    },
    "fe9cceec": {
        "abi": "error ERC4626ExceededMaxWithdraw(address owner, uint256 assets, uint256 max)",
        "compact": "ERC4626ExceededMaxWithdraw(address,uint256,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "assets",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "max",
                "type": "uint256"
            }
        ],
        "name": "ERC4626ExceededMaxWithdraw",
        "type": "error"
    },
    "ecd3f81e": {
        "abi": "error ERC5805FutureLookup(uint256 timepoint, uint48 clock)",
        "compact": "ERC5805FutureLookup(uint256,uint48)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "timepoint",
                "type": "uint256"
            },
            {
                "internalType": "uint48",
                "name": "clock",
                "type": "uint48"
            }
        ],
        "name": "ERC5805FutureLookup",
        "type": "error"
    },
    "6ff07140": {
        "abi": "error ERC6372InconsistentClock()",
        "compact": "ERC6372InconsistentClock()",
        "inputs": [],
        "name": "ERC6372InconsistentClock",
        "type": "error"
    },
    "59171fc1": {
        "abi": "error ERC721EnumerableForbiddenBatchMint()",
        "compact": "ERC721EnumerableForbiddenBatchMint()",
        "inputs": [],
        "name": "ERC721EnumerableForbiddenBatchMint",
        "type": "error"
    },
    "8f58e570": {
        "abi": "error ERC721ExceededMaxBatchMint(uint256 batchSize, uint256 maxBatch)",
        "compact": "ERC721ExceededMaxBatchMint(uint256,uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "batchSize",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxBatch",
                "type": "uint256"
            }
        ],
        "name": "ERC721ExceededMaxBatchMint",
        "type": "error"
    },
    "1d089165": {
        "abi": "error ERC721ForbiddenBatchBurn()",
        "compact": "ERC721ForbiddenBatchBurn()",
        "inputs": [],
        "name": "ERC721ForbiddenBatchBurn",
        "type": "error"
    },
    "539f9062": {
        "abi": "error ERC721ForbiddenBatchMint()",
        "compact": "ERC721ForbiddenBatchMint()",
        "inputs": [],
        "name": "ERC721ForbiddenBatchMint",
        "type": "error"
    },
    "ad895052": {
        "abi": "error ERC721ForbiddenMint()",
        "compact": "ERC721ForbiddenMint()",
        "inputs": [],
        "name": "ERC721ForbiddenMint",
        "type": "error"
    },
    "64283d7b": {
        "abi": "error ERC721IncorrectOwner(address sender, uint256 tokenId, address owner)",
        "compact": "ERC721IncorrectOwner(address,uint256,address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC721IncorrectOwner",
        "type": "error"
    },
    "177e802f": {
        "abi": "error ERC721InsufficientApproval(address operator, uint256 tokenId)",
        "compact": "ERC721InsufficientApproval(address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ERC721InsufficientApproval",
        "type": "error"
    },
    "a9fbf51f": {
        "abi": "error ERC721InvalidApprover(address approver)",
        "compact": "ERC721InvalidApprover(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "approver",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidApprover",
        "type": "error"
    },
    "5b08ba18": {
        "abi": "error ERC721InvalidOperator(address operator)",
        "compact": "ERC721InvalidOperator(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidOperator",
        "type": "error"
    },
    "89c62b64": {
        "abi": "error ERC721InvalidOwner(address owner)",
        "compact": "ERC721InvalidOwner(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidOwner",
        "type": "error"
    },
    "64a0ae92": {
        "abi": "error ERC721InvalidReceiver(address receiver)",
        "compact": "ERC721InvalidReceiver(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidReceiver",
        "type": "error"
    },
    "73c6ac6e": {
        "abi": "error ERC721InvalidSender(address sender)",
        "compact": "ERC721InvalidSender(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidSender",
        "type": "error"
    },
    "7e273289": {
        "abi": "error ERC721NonexistentToken(uint256 tokenId)",
        "compact": "ERC721NonexistentToken(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ERC721NonexistentToken",
        "type": "error"
    },
    "a57d13dc": {
        "abi": "error ERC721OutOfBoundsIndex(address owner, uint256 index)",
        "compact": "ERC721OutOfBoundsIndex(address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "ERC721OutOfBoundsIndex",
        "type": "error"
    },
    "c7d837c6": {
        "abi": "error ERC721UnsupportedToken(address token)",
        "compact": "ERC721UnsupportedToken(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "ERC721UnsupportedToken",
        "type": "error"
    },
    "07bd0265": {
        "abi": "function EXECUTOR_ROLE() returns (bytes32)",
        "compact": "EXECUTOR_ROLE()",
        "inputs": [],
        "name": "EXECUTOR_ROLE",
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
    "2fe3e261": {
        "abi": "function EXTENDED_BALLOT_TYPEHASH() returns (bytes32)",
        "compact": "EXTENDED_BALLOT_TYPEHASH()",
        "inputs": [],
        "name": "EXTENDED_BALLOT_TYPEHASH",
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
    "d93c0665": {
        "abi": "error EnforcedPause()",
        "compact": "EnforcedPause()",
        "inputs": [],
        "name": "EnforcedPause",
        "type": "error"
    },
    "02b56686": {
        "abi": "error EnumerableMapNonexistentKey(bytes32 key)",
        "compact": "EnumerableMapNonexistentKey(bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "key",
                "type": "bytes32"
            }
        ],
        "name": "EnumerableMapNonexistentKey",
        "type": "error"
    },
    "da9d4e5f": {
        "abi": "event EtherReleased(uint256 amount)",
        "anonymous": false,
        "compact": "EtherReleased(uint256)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "EtherReleased",
        "type": "event"
    },
    "a560e319": {
        "abi": "event ExecuteTransaction(bytes32 indexed txHash, address indexed target, uint256 value, string signature, bytes data, uint256 eta)",
        "anonymous": false,
        "compact": "ExecuteTransaction(bytes32,address,uint256,string,bytes,uint256)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "txHash",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "signature",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "eta",
                "type": "uint256"
            }
        ],
        "name": "ExecuteTransaction",
        "type": "event"
    },
    "842fb24a": {
        "abi": "event ExecutedForwardRequest(address indexed signer, uint256 nonce, bool success)",
        "anonymous": false,
        "compact": "ExecutedForwardRequest(address,uint256,bool)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "signer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "nonce",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "name": "ExecutedForwardRequest",
        "type": "event"
    },
    "8dfc202b": {
        "abi": "error ExpectedPause()",
        "compact": "ExpectedPause()",
        "inputs": [],
        "name": "ExpectedPause",
        "type": "error"
    },
    "1425ea42": {
        "abi": "error FailedInnerCall()",
        "compact": "FailedInnerCall()",
        "inputs": [],
        "name": "FailedInnerCall",
        "type": "error"
    },
    "c1a287e2": {
        "abi": "function GRACE_PERIOD() returns (uint256)",
        "compact": "GRACE_PERIOD()",
        "inputs": [],
        "name": "GRACE_PERIOD",
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
    "71c6af49": {
        "abi": "error GovernorAlreadyCastVote(address voter)",
        "compact": "GovernorAlreadyCastVote(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "voter",
                "type": "address"
            }
        ],
        "name": "GovernorAlreadyCastVote",
        "type": "error"
    },
    "f20e7d37": {
        "abi": "error GovernorAlreadyQueuedProposal(uint256 proposalId)",
        "compact": "GovernorAlreadyQueuedProposal(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "GovernorAlreadyQueuedProposal",
        "type": "error"
    },
    "e90a651e": {
        "abi": "error GovernorDisabledDeposit()",
        "compact": "GovernorDisabledDeposit()",
        "inputs": [],
        "name": "GovernorDisabledDeposit",
        "type": "error"
    },
    "c242ee16": {
        "abi": "error GovernorInsufficientProposerVotes(address proposer, uint256 votes, uint256 threshold)",
        "compact": "GovernorInsufficientProposerVotes(address,uint256,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "proposer",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "votes",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "threshold",
                "type": "uint256"
            }
        ],
        "name": "GovernorInsufficientProposerVotes",
        "type": "error"
    },
    "447b05d0": {
        "abi": "error GovernorInvalidProposalLength(uint256 targets, uint256 calldatas, uint256 values)",
        "compact": "GovernorInvalidProposalLength(uint256,uint256,uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "targets",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "calldatas",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "values",
                "type": "uint256"
            }
        ],
        "name": "GovernorInvalidProposalLength",
        "type": "error"
    },
    "243e5445": {
        "abi": "error GovernorInvalidQuorumFraction(uint256 quorumNumerator, uint256 quorumDenominator)",
        "compact": "GovernorInvalidQuorumFraction(uint256,uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "quorumNumerator",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "quorumDenominator",
                "type": "uint256"
            }
        ],
        "name": "GovernorInvalidQuorumFraction",
        "type": "error"
    },
    "94ab6c07": {
        "abi": "error GovernorInvalidSignature(address voter)",
        "compact": "GovernorInvalidSignature(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "voter",
                "type": "address"
            }
        ],
        "name": "GovernorInvalidSignature",
        "type": "error"
    },
    "06b337c2": {
        "abi": "error GovernorInvalidVoteType()",
        "compact": "GovernorInvalidVoteType()",
        "inputs": [],
        "name": "GovernorInvalidVoteType",
        "type": "error"
    },
    "f1cfbf05": {
        "abi": "error GovernorInvalidVotingPeriod(uint256 votingPeriod)",
        "compact": "GovernorInvalidVotingPeriod(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "votingPeriod",
                "type": "uint256"
            }
        ],
        "name": "GovernorInvalidVotingPeriod",
        "type": "error"
    },
    "e547fc11": {
        "abi": "error GovernorLockedIgnore()",
        "compact": "GovernorLockedIgnore()",
        "inputs": [],
        "name": "GovernorLockedIgnore",
        "type": "error"
    },
    "18ee8bef": {
        "abi": "error GovernorMismatchedNonce(uint256 proposalId, uint256 expectedNonce, uint256 actualNonce)",
        "compact": "GovernorMismatchedNonce(uint256,uint256,uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "expectedNonce",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "actualNonce",
                "type": "uint256"
            }
        ],
        "name": "GovernorMismatchedNonce",
        "type": "error"
    },
    "6ad06075": {
        "abi": "error GovernorNonexistentProposal(uint256 proposalId)",
        "compact": "GovernorNonexistentProposal(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "GovernorNonexistentProposal",
        "type": "error"
    },
    "d5ddb825": {
        "abi": "error GovernorNotQueuedProposal(uint256 proposalId)",
        "compact": "GovernorNotQueuedProposal(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "GovernorNotQueuedProposal",
        "type": "error"
    },
    "47096e47": {
        "abi": "error GovernorOnlyExecutor(address account)",
        "compact": "GovernorOnlyExecutor(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "GovernorOnlyExecutor",
        "type": "error"
    },
    "233d98e3": {
        "abi": "error GovernorOnlyProposer(address account)",
        "compact": "GovernorOnlyProposer(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "GovernorOnlyProposer",
        "type": "error"
    },
    "90884a46": {
        "abi": "error GovernorQueueNotImplemented()",
        "compact": "GovernorQueueNotImplemented()",
        "inputs": [],
        "name": "GovernorQueueNotImplemented",
        "type": "error"
    },
    "d9b39557": {
        "abi": "error GovernorRestrictedProposer(address proposer)",
        "compact": "GovernorRestrictedProposer(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "proposer",
                "type": "address"
            }
        ],
        "name": "GovernorRestrictedProposer",
        "type": "error"
    },
    "31b75e4d": {
        "abi": "error GovernorUnexpectedProposalState(uint256 proposalId, enum IGovernor.ProposalState current, bytes32 expectedStates)",
        "compact": "GovernorUnexpectedProposalState(uint256,uint8,bytes32)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "enum IGovernor.ProposalState",
                "name": "current",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "expectedStates",
                "type": "bytes32"
            }
        ],
        "name": "GovernorUnexpectedProposalState",
        "type": "error"
    },
    "fe589f3f": {
        "abi": "error GovernorUnmetDelay(uint256 proposalId, uint256 neededTimestamp)",
        "compact": "GovernorUnmetDelay(uint256,uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "neededTimestamp",
                "type": "uint256"
            }
        ],
        "name": "GovernorUnmetDelay",
        "type": "error"
    },
    "c7f505b2": {
        "abi": "event Initialized(uint64 version)",
        "anonymous": false,
        "compact": "Initialized(uint64)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint64",
                "name": "version",
                "type": "uint64"
            }
        ],
        "name": "Initialized",
        "type": "event"
    },
    "93baa6ef": {
        "abi": "event InterfaceImplementerSet(address indexed account, bytes32 indexed interfaceHash, address indexed implementer)",
        "anonymous": false,
        "compact": "InterfaceImplementerSet(address,bytes32,address)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "interfaceHash",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "implementer",
                "type": "address"
            }
        ],
        "name": "InterfaceImplementerSet",
        "type": "event"
    },
    "752d88c0": {
        "abi": "error InvalidAccountNonce(address account, uint256 currentNonce)",
        "compact": "InvalidAccountNonce(address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "currentNonce",
                "type": "uint256"
            }
        ],
        "name": "InvalidAccountNonce",
        "type": "error"
    },
    "f92ee8a9": {
        "abi": "error InvalidInitialization()",
        "compact": "InvalidInitialization()",
        "inputs": [],
        "name": "InvalidInitialization",
        "type": "error"
    },
    "b3512b0c": {
        "abi": "error InvalidShortString()",
        "compact": "InvalidShortString()",
        "inputs": [],
        "name": "InvalidShortString",
        "type": "error"
    },
    "7ca4ac11": {
        "abi": "event LateQuorumVoteExtensionSet(uint64 oldVoteExtension, uint64 newVoteExtension)",
        "anonymous": false,
        "compact": "LateQuorumVoteExtensionSet(uint64,uint64)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint64",
                "name": "oldVoteExtension",
                "type": "uint64"
            },
            {
                "indexed": false,
                "internalType": "uint64",
                "name": "newVoteExtension",
                "type": "uint64"
            }
        ],
        "name": "LateQuorumVoteExtensionSet",
        "type": "event"
    },
    "7d645fab": {
        "abi": "function MAXIMUM_DELAY() returns (uint256)",
        "compact": "MAXIMUM_DELAY()",
        "inputs": [],
        "name": "MAXIMUM_DELAY",
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
    "b1b43ae5": {
        "abi": "function MINIMUM_DELAY() returns (uint256)",
        "compact": "MINIMUM_DELAY()",
        "inputs": [],
        "name": "MINIMUM_DELAY",
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
    "605c2dbf": {
        "abi": "event ManagerChanged(address indexed account, address indexed newManager)",
        "anonymous": false,
        "compact": "ManagerChanged(address,address)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newManager",
                "type": "address"
            }
        ],
        "name": "ManagerChanged",
        "type": "event"
    },
    "227bc153": {
        "abi": "error MathOverflowedMulDiv()",
        "compact": "MathOverflowedMulDiv()",
        "inputs": [],
        "name": "MathOverflowedMulDiv",
        "type": "error"
    },
    "35140492": {
        "abi": "error MerkleProofInvalidMultiproof()",
        "compact": "MerkleProofInvalidMultiproof()",
        "inputs": [],
        "name": "MerkleProofInvalidMultiproof",
        "type": "error"
    },
    "f8e1a15a": {
        "abi": "event MetadataUpdate(uint256 _tokenId)",
        "anonymous": false,
        "compact": "MetadataUpdate(uint256)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "MetadataUpdate",
        "type": "event"
    },
    "11c24f4e": {
        "abi": "event MinDelayChange(uint256 oldDuration, uint256 newDuration)",
        "anonymous": false,
        "compact": "MinDelayChange(uint256,uint256)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "oldDuration",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newDuration",
                "type": "uint256"
            }
        ],
        "name": "MinDelayChange",
        "type": "event"
    },
    "2fe5be01": {
        "abi": "event Minted(address indexed operator, address indexed to, uint256 amount, bytes data, bytes operatorData)",
        "anonymous": false,
        "compact": "Minted(address,address,uint256,bytes,bytes)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "operatorData",
                "type": "bytes"
            }
        ],
        "name": "Minted",
        "type": "event"
    },
    "71614071": {
        "abi": "event NewAdmin(address indexed newAdmin)",
        "anonymous": false,
        "compact": "NewAdmin(address)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "newAdmin",
                "type": "address"
            }
        ],
        "name": "NewAdmin",
        "type": "event"
    },
    "948b1f6a": {
        "abi": "event NewDelay(uint256 indexed newDelay)",
        "anonymous": false,
        "compact": "NewDelay(uint256)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "newDelay",
                "type": "uint256"
            }
        ],
        "name": "NewDelay",
        "type": "event"
    },
    "69d78e38": {
        "abi": "event NewPendingAdmin(address indexed newPendingAdmin)",
        "anonymous": false,
        "compact": "NewPendingAdmin(address)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "newPendingAdmin",
                "type": "address"
            }
        ],
        "name": "NewPendingAdmin",
        "type": "event"
    },
    "d7e6bcf8": {
        "abi": "error NotInitializing()",
        "compact": "NotInitializing()",
        "inputs": [],
        "name": "NotInitializing",
        "type": "error"
    },
    "bd9ac67a": {
        "abi": "event OperationCanceled(bytes32 indexed operationId, uint32 indexed nonce)",
        "anonymous": false,
        "compact": "OperationCanceled(bytes32,uint32)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "operationId",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "uint32",
                "name": "nonce",
                "type": "uint32"
            }
        ],
        "name": "OperationCanceled",
        "type": "event"
    },
    "76a2a469": {
        "abi": "event OperationExecuted(bytes32 indexed operationId, uint32 indexed nonce)",
        "anonymous": false,
        "compact": "OperationExecuted(bytes32,uint32)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "operationId",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "uint32",
                "name": "nonce",
                "type": "uint32"
            }
        ],
        "name": "OperationExecuted",
        "type": "event"
    },
    "82a2da5d": {
        "abi": "event OperationScheduled(bytes32 indexed operationId, uint32 indexed nonce, uint48 schedule, address caller, address target, bytes data)",
        "anonymous": false,
        "compact": "OperationScheduled(bytes32,uint32,uint48,address,address,bytes)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "operationId",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "uint32",
                "name": "nonce",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint48",
                "name": "schedule",
                "type": "uint48"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "OperationScheduled",
        "type": "event"
    },
    "1e4fbdf7": {
        "abi": "error OwnableInvalidOwner(address owner)",
        "compact": "OwnableInvalidOwner(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    "118cdaa7": {
        "abi": "error OwnableUnauthorizedAccount(address account)",
        "compact": "OwnableUnauthorizedAccount(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    "38d16b8c": {
        "abi": "event OwnershipTransferStarted(address indexed previousOwner, address indexed newOwner)",
        "anonymous": false,
        "compact": "OwnershipTransferStarted(address,address)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferStarted",
        "type": "event"
    },
    "8be0079c": {
        "abi": "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
        "anonymous": false,
        "compact": "OwnershipTransferred(address,address)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    "8f61f4f5": {
        "abi": "function PROPOSER_ROLE() returns (bytes32)",
        "compact": "PROPOSER_ROLE()",
        "inputs": [],
        "name": "PROPOSER_ROLE",
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
    "3ca7c02a": {
        "abi": "function PUBLIC_ROLE() returns (uint64)",
        "compact": "PUBLIC_ROLE()",
        "inputs": [],
        "name": "PUBLIC_ROLE",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "62e78cea": {
        "abi": "event Paused(address account)",
        "anonymous": false,
        "compact": "Paused(address)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "Paused",
        "type": "event"
    },
    "789cf55b": {
        "abi": "event ProposalCanceled(uint256 proposalId)",
        "anonymous": false,
        "compact": "ProposalCanceled(uint256)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "ProposalCanceled",
        "type": "event"
    },
    "7d84a626": {
        "abi": "event ProposalCreated(uint256 proposalId, address proposer, address[] targets, uint256[] values, string[] signatures, bytes[] calldatas, uint256 voteStart, uint256 voteEnd, string description)",
        "anonymous": false,
        "compact": "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "proposer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            },
            {
                "indexed": false,
                "internalType": "string[]",
                "name": "signatures",
                "type": "string[]"
            },
            {
                "indexed": false,
                "internalType": "bytes[]",
                "name": "calldatas",
                "type": "bytes[]"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "voteStart",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "voteEnd",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "description",
                "type": "string"
            }
        ],
        "name": "ProposalCreated",
        "type": "event"
    },
    "712ae138": {
        "abi": "event ProposalExecuted(uint256 proposalId)",
        "anonymous": false,
        "compact": "ProposalExecuted(uint256)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "ProposalExecuted",
        "type": "event"
    },
    "541f725f": {
        "abi": "event ProposalExtended(uint256 indexed proposalId, uint64 extendedDeadline)",
        "anonymous": false,
        "compact": "ProposalExtended(uint256,uint64)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint64",
                "name": "extendedDeadline",
                "type": "uint64"
            }
        ],
        "name": "ProposalExtended",
        "type": "event"
    },
    "9a2e42fd": {
        "abi": "event ProposalQueued(uint256 proposalId, uint256 etaSeconds)",
        "anonymous": false,
        "compact": "ProposalQueued(uint256,uint256)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "etaSeconds",
                "type": "uint256"
            }
        ],
        "name": "ProposalQueued",
        "type": "event"
    },
    "ccb45da8": {
        "abi": "event ProposalThresholdSet(uint256 oldProposalThreshold, uint256 newProposalThreshold)",
        "anonymous": false,
        "compact": "ProposalThresholdSet(uint256,uint256)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "oldProposalThreshold",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newProposalThreshold",
                "type": "uint256"
            }
        ],
        "name": "ProposalThresholdSet",
        "type": "event"
    },
    "d2b576ec": {
        "abi": "error ProxyDeniedAdminAccess()",
        "compact": "ProxyDeniedAdminAccess()",
        "inputs": [],
        "name": "ProxyDeniedAdminAccess",
        "type": "error"
    },
    "75e52f4f": {
        "abi": "error QueueEmpty()",
        "compact": "QueueEmpty()",
        "inputs": [],
        "name": "QueueEmpty",
        "type": "error"
    },
    "8acb5f27": {
        "abi": "error QueueFull()",
        "compact": "QueueFull()",
        "inputs": [],
        "name": "QueueFull",
        "type": "error"
    },
    "580821e7": {
        "abi": "error QueueOutOfBounds()",
        "compact": "QueueOutOfBounds()",
        "inputs": [],
        "name": "QueueOutOfBounds",
        "type": "error"
    },
    "76e2796d": {
        "abi": "event QueueTransaction(bytes32 indexed txHash, address indexed target, uint256 value, string signature, bytes data, uint256 eta)",
        "anonymous": false,
        "compact": "QueueTransaction(bytes32,address,uint256,string,bytes,uint256)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "txHash",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "signature",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "eta",
                "type": "uint256"
            }
        ],
        "name": "QueueTransaction",
        "type": "event"
    },
    "0553476b": {
        "abi": "event QuorumNumeratorUpdated(uint256 oldQuorumNumerator, uint256 newQuorumNumerator)",
        "anonymous": false,
        "compact": "QuorumNumeratorUpdated(uint256,uint256)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "oldQuorumNumerator",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newQuorumNumerator",
                "type": "uint256"
            }
        ],
        "name": "QuorumNumeratorUpdated",
        "type": "event"
    },
    "3ee5aeb5": {
        "abi": "error ReentrancyGuardReentrantCall()",
        "compact": "ReentrancyGuardReentrantCall()",
        "inputs": [],
        "name": "ReentrancyGuardReentrantCall",
        "type": "error"
    },
    "50546e66": {
        "abi": "event RevokedOperator(address indexed operator, address indexed tokenHolder)",
        "anonymous": false,
        "compact": "RevokedOperator(address,address)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "tokenHolder",
                "type": "address"
            }
        ],
        "name": "RevokedOperator",
        "type": "event"
    },
    "bd79b86f": {
        "abi": "event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)",
        "anonymous": false,
        "compact": "RoleAdminChanged(bytes32,bytes32,bytes32)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    "1fd6dd76": {
        "abi": "event RoleAdminChanged(uint64 indexed roleId, uint64 indexed admin)",
        "anonymous": false,
        "compact": "RoleAdminChanged(uint64,uint64)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            },
            {
                "indexed": true,
                "internalType": "uint64",
                "name": "admin",
                "type": "uint64"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    "feb69018": {
        "abi": "event RoleGrantDelayChanged(uint64 indexed roleId, uint32 delay, uint48 since)",
        "anonymous": false,
        "compact": "RoleGrantDelayChanged(uint64,uint32,uint48)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "delay",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint48",
                "name": "since",
                "type": "uint48"
            }
        ],
        "name": "RoleGrantDelayChanged",
        "type": "event"
    },
    "2f878811": {
        "abi": "event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)",
        "anonymous": false,
        "compact": "RoleGranted(bytes32,address,address)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    "f98448b9": {
        "abi": "event RoleGranted(uint64 indexed roleId, address indexed account, uint32 delay, uint48 since, bool newMember)",
        "anonymous": false,
        "compact": "RoleGranted(uint64,address,uint32,uint48,bool)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "delay",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint48",
                "name": "since",
                "type": "uint48"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "newMember",
                "type": "bool"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    "7a805963": {
        "abi": "event RoleGuardianChanged(uint64 indexed roleId, uint64 indexed guardian)",
        "anonymous": false,
        "compact": "RoleGuardianChanged(uint64,uint64)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            },
            {
                "indexed": true,
                "internalType": "uint64",
                "name": "guardian",
                "type": "uint64"
            }
        ],
        "name": "RoleGuardianChanged",
        "type": "event"
    },
    "1256f5b5": {
        "abi": "event RoleLabel(uint64 indexed roleId, string label)",
        "anonymous": false,
        "compact": "RoleLabel(uint64,string)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "label",
                "type": "string"
            }
        ],
        "name": "RoleLabel",
        "type": "event"
    },
    "f6391f5c": {
        "abi": "event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)",
        "anonymous": false,
        "compact": "RoleRevoked(bytes32,address,address)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    "f229baa5": {
        "abi": "event RoleRevoked(uint64 indexed roleId, address indexed account)",
        "anonymous": false,
        "compact": "RoleRevoked(uint64,address)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    "327269a7": {
        "abi": "error SafeCastOverflowedIntDowncast(uint8 bits, int256 value)",
        "compact": "SafeCastOverflowedIntDowncast(uint8,int256)",
        "inputs": [
            {
                "internalType": "uint8",
                "name": "bits",
                "type": "uint8"
            },
            {
                "internalType": "int256",
                "name": "value",
                "type": "int256"
            }
        ],
        "name": "SafeCastOverflowedIntDowncast",
        "type": "error"
    },
    "a8ce4432": {
        "abi": "error SafeCastOverflowedIntToUint(int256 value)",
        "compact": "SafeCastOverflowedIntToUint(int256)",
        "inputs": [
            {
                "internalType": "int256",
                "name": "value",
                "type": "int256"
            }
        ],
        "name": "SafeCastOverflowedIntToUint",
        "type": "error"
    },
    "6dfcc650": {
        "abi": "error SafeCastOverflowedUintDowncast(uint8 bits, uint256 value)",
        "compact": "SafeCastOverflowedUintDowncast(uint8,uint256)",
        "inputs": [
            {
                "internalType": "uint8",
                "name": "bits",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "SafeCastOverflowedUintDowncast",
        "type": "error"
    },
    "24775e06": {
        "abi": "error SafeCastOverflowedUintToInt(uint256 value)",
        "compact": "SafeCastOverflowedUintToInt(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "SafeCastOverflowedUintToInt",
        "type": "error"
    },
    "e570110f": {
        "abi": "error SafeERC20FailedDecreaseAllowance(address spender, uint256 currentAllowance, uint256 requestedDecrease)",
        "compact": "SafeERC20FailedDecreaseAllowance(address,uint256,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "currentAllowance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "requestedDecrease",
                "type": "uint256"
            }
        ],
        "name": "SafeERC20FailedDecreaseAllowance",
        "type": "error"
    },
    "5274afe7": {
        "abi": "error SafeERC20FailedOperation(address token)",
        "compact": "SafeERC20FailedOperation(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "SafeERC20FailedOperation",
        "type": "error"
    },
    "06b541dd": {
        "abi": "event Sent(address indexed operator, address indexed from, address indexed to, uint256 amount, bytes data, bytes operatorData)",
        "anonymous": false,
        "compact": "Sent(address,address,address,uint256,bytes,bytes)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "operatorData",
                "type": "bytes"
            }
        ],
        "name": "Sent",
        "type": "event"
    },
    "305a27a9": {
        "abi": "error StringTooLong(string str)",
        "compact": "StringTooLong(string)",
        "inputs": [
            {
                "internalType": "string",
                "name": "str",
                "type": "string"
            }
        ],
        "name": "StringTooLong",
        "type": "error"
    },
    "e22e27eb": {
        "abi": "error StringsInsufficientHexLength(uint256 value, uint256 length)",
        "compact": "StringsInsufficientHexLength(uint256,uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "length",
                "type": "uint256"
            }
        ],
        "name": "StringsInsufficientHexLength",
        "type": "error"
    },
    "a56b7601": {
        "abi": "event TargetAdminDelayUpdated(address indexed target, uint32 delay, uint48 since)",
        "anonymous": false,
        "compact": "TargetAdminDelayUpdated(address,uint32,uint48)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "delay",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint48",
                "name": "since",
                "type": "uint48"
            }
        ],
        "name": "TargetAdminDelayUpdated",
        "type": "event"
    },
    "90d4e7bb": {
        "abi": "event TargetClosed(address indexed target, bool closed)",
        "anonymous": false,
        "compact": "TargetClosed(address,bool)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "closed",
                "type": "bool"
            }
        ],
        "name": "TargetClosed",
        "type": "event"
    },
    "9ea6790c": {
        "abi": "event TargetFunctionRoleUpdated(address indexed target, bytes4 selector, uint64 indexed roleId)",
        "anonymous": false,
        "compact": "TargetFunctionRoleUpdated(address,bytes4,uint64)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes4",
                "name": "selector",
                "type": "bytes4"
            },
            {
                "indexed": true,
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            }
        ],
        "name": "TargetFunctionRoleUpdated",
        "type": "event"
    },
    "08f74ea4": {
        "abi": "event TimelockChange(address oldTimelock, address newTimelock)",
        "anonymous": false,
        "compact": "TimelockChange(address,address)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "oldTimelock",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "newTimelock",
                "type": "address"
            }
        ],
        "name": "TimelockChange",
        "type": "event"
    },
    "54336609": {
        "abi": "error TimelockInsufficientDelay(uint256 delay, uint256 minDelay)",
        "compact": "TimelockInsufficientDelay(uint256,uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "delay",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "minDelay",
                "type": "uint256"
            }
        ],
        "name": "TimelockInsufficientDelay",
        "type": "error"
    },
    "ffb03211": {
        "abi": "error TimelockInvalidOperationLength(uint256 targets, uint256 payloads, uint256 values)",
        "compact": "TimelockInvalidOperationLength(uint256,uint256,uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "targets",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "payloads",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "values",
                "type": "uint256"
            }
        ],
        "name": "TimelockInvalidOperationLength",
        "type": "error"
    },
    "e2850c59": {
        "abi": "error TimelockUnauthorizedCaller(address caller)",
        "compact": "TimelockUnauthorizedCaller(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "caller",
                "type": "address"
            }
        ],
        "name": "TimelockUnauthorizedCaller",
        "type": "error"
    },
    "90a9a618": {
        "abi": "error TimelockUnexecutedPredecessor(bytes32 predecessorId)",
        "compact": "TimelockUnexecutedPredecessor(bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "predecessorId",
                "type": "bytes32"
            }
        ],
        "name": "TimelockUnexecutedPredecessor",
        "type": "error"
    },
    "5ead8eb5": {
        "abi": "error TimelockUnexpectedOperationState(bytes32 operationId, bytes32 expectedStates)",
        "compact": "TimelockUnexpectedOperationState(bytes32,bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "operationId",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "expectedStates",
                "type": "bytes32"
            }
        ],
        "name": "TimelockUnexpectedOperationState",
        "type": "error"
    },
    "ddf252ad": {
        "abi": "event Transfer(address indexed from, address indexed to, uint256 value)",
        "anonymous": false,
        "compact": "Transfer(address,address,uint256)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    "4a39dc06": {
        "abi": "event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values)",
        "anonymous": false,
        "compact": "TransferBatch(address,address,address,uint256[],uint256[])",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            }
        ],
        "name": "TransferBatch",
        "type": "event"
    },
    "c3d58168": {
        "abi": "event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)",
        "anonymous": false,
        "compact": "TransferSingle(address,address,address,uint256,uint256)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "TransferSingle",
        "type": "event"
    },
    "ad3cb1cc": {
        "abi": "function UPGRADE_INTERFACE_VERSION() returns (string)",
        "compact": "UPGRADE_INTERFACE_VERSION()",
        "inputs": [],
        "name": "UPGRADE_INTERFACE_VERSION",
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
    "6bb7ff70": {
        "abi": "event URI(string value, uint256 indexed id)",
        "anonymous": false,
        "compact": "URI(string,uint256)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "value",
                "type": "string"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "URI",
        "type": "event"
    },
    "e07c8dba": {
        "abi": "error UUPSUnauthorizedCallContext()",
        "compact": "UUPSUnauthorizedCallContext()",
        "inputs": [],
        "name": "UUPSUnauthorizedCallContext",
        "type": "error"
    },
    "aa1d49a4": {
        "abi": "error UUPSUnsupportedProxiableUUID(bytes32 slot)",
        "compact": "UUPSUnsupportedProxiableUUID(bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            }
        ],
        "name": "UUPSUnsupportedProxiableUUID",
        "type": "error"
    },
    "5db9ee0a": {
        "abi": "event Unpaused(address account)",
        "anonymous": false,
        "compact": "Unpaused(address)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "Unpaused",
        "type": "event"
    },
    "bc7cd75a": {
        "abi": "event Upgraded(address indexed implementation)",
        "anonymous": false,
        "compact": "Upgraded(address)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "implementation",
                "type": "address"
            }
        ],
        "name": "Upgraded",
        "type": "event"
    },
    "b8e13888": {
        "abi": "event VoteCast(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason)",
        "anonymous": false,
        "compact": "VoteCast(address,uint256,uint8,uint256,string)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "voter",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "support",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "weight",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "reason",
                "type": "string"
            }
        ],
        "name": "VoteCast",
        "type": "event"
    },
    "e2babfba": {
        "abi": "event VoteCastWithParams(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason, bytes params)",
        "anonymous": false,
        "compact": "VoteCastWithParams(address,uint256,uint8,uint256,string,bytes)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "voter",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "support",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "weight",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "reason",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "params",
                "type": "bytes"
            }
        ],
        "name": "VoteCastWithParams",
        "type": "event"
    },
    "4683af0e": {
        "abi": "error VotesExpiredSignature(uint256 expiry)",
        "compact": "VotesExpiredSignature(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "expiry",
                "type": "uint256"
            }
        ],
        "name": "VotesExpiredSignature",
        "type": "error"
    },
    "c565b045": {
        "abi": "event VotingDelaySet(uint256 oldVotingDelay, uint256 newVotingDelay)",
        "anonymous": false,
        "compact": "VotingDelaySet(uint256,uint256)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "oldVotingDelay",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newVotingDelay",
                "type": "uint256"
            }
        ],
        "name": "VotingDelaySet",
        "type": "event"
    },
    "7e3f7f07": {
        "abi": "event VotingPeriodSet(uint256 oldVotingPeriod, uint256 newVotingPeriod)",
        "anonymous": false,
        "compact": "VotingPeriodSet(uint256,uint256)",
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "oldVotingPeriod",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newVotingPeriod",
                "type": "uint256"
            }
        ],
        "name": "VotingPeriodSet",
        "type": "event"
    },
    "fbde797d": {
        "abi": "event Withdraw(address indexed sender, address indexed receiver, address indexed owner, uint256 assets, uint256 shares)",
        "anonymous": false,
        "compact": "Withdraw(address,address,address,uint256,uint256)",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assets",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "shares",
                "type": "uint256"
            }
        ],
        "name": "Withdraw",
        "type": "event"
    },
    "b9a61961": {
        "abi": "function __acceptAdmin()",
        "compact": "__acceptAdmin()",
        "inputs": [],
        "name": "__acceptAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "0e18b681": {
        "abi": "function acceptAdmin()",
        "compact": "acceptAdmin()",
        "inputs": [],
        "name": "acceptAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "cefc1429": {
        "abi": "function acceptDefaultAdminTransfer()",
        "compact": "acceptDefaultAdminTransfer()",
        "inputs": [],
        "name": "acceptDefaultAdminTransfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "79ba5097": {
        "abi": "function acceptOwnership()",
        "compact": "acceptOwnership()",
        "inputs": [],
        "name": "acceptOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "fdcb6068": {
        "abi": "function accessManager() returns (contract IAccessManager)",
        "compact": "accessManager()",
        "inputs": [],
        "name": "accessManager",
        "outputs": [
            {
                "internalType": "contract IAccessManager",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "f851a440": {
        "abi": "function admin() returns (address)",
        "compact": "admin()",
        "inputs": [],
        "name": "admin",
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
    "dd62ed3e": {
        "abi": "function allowance(address owner, address spender) returns (uint256)",
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
        "abi": "function approve(address spender, uint256 value) returns (bool)",
        "compact": "approve(address,uint256)",
        "inputs": [
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
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "3177029f": {
        "abi": "function approveAndCall(address spender, uint256 amount) returns (bool)",
        "compact": "approveAndCall(address,uint256)",
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
        "name": "approveAndCall",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "cae9ca51": {
        "abi": "function approveAndCall(address spender, uint256 amount, bytes data) returns (bool)",
        "compact": "approveAndCall(address,uint256,bytes)",
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
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "approveAndCall",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "38d52e0f": {
        "abi": "function asset() returns (address assetTokenAddress)",
        "compact": "asset()",
        "inputs": [],
        "name": "asset",
        "outputs": [
            {
                "internalType": "address",
                "name": "assetTokenAddress",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "bf7e214f": {
        "abi": "function authority() returns (address)",
        "compact": "authority()",
        "inputs": [],
        "name": "authority",
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
    "959b8c3f": {
        "abi": "function authorizeOperator(address operator)",
        "compact": "authorizeOperator(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "authorizeOperator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "70a08231": {
        "abi": "function balanceOf(address account) returns (uint256)",
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
        "abi": "function balanceOf(address account, uint256 id) returns (uint256)",
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
        "abi": "function balanceOfBatch(address[] accounts, uint256[] ids) returns (uint256[])",
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
    "57552fcb": {
        "abi": "function baseDelaySeconds() returns (uint32)",
        "compact": "baseDelaySeconds()",
        "inputs": [],
        "name": "baseDelaySeconds",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "634e93da": {
        "abi": "function beginDefaultAdminTransfer(address newAdmin)",
        "compact": "beginDefaultAdminTransfer(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "newAdmin",
                "type": "address"
            }
        ],
        "name": "beginDefaultAdminTransfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "f5298aca": {
        "abi": "function burn(address account, uint256 id, uint256 value)",
        "compact": "burn(address,uint256,uint256)",
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
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "42966c68": {
        "abi": "function burn(uint256 value)",
        "compact": "burn(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "fe9d9303": {
        "abi": "function burn(uint256 amount, bytes data)",
        "compact": "burn(uint256,bytes)",
        "inputs": [
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
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "6b20c454": {
        "abi": "function burnBatch(address account, uint256[] ids, uint256[] values)",
        "compact": "burnBatch(address,uint256[],uint256[])",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
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
        "name": "burnBatch",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "79cc6790": {
        "abi": "function burnFrom(address account, uint256 value)",
        "compact": "burnFrom(address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "burnFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "b7009613": {
        "abi": "function canCall(address caller, address target, bytes4 selector) returns (bool immediate, uint32 delay)",
        "compact": "canCall(address,address,bytes4)",
        "inputs": [
            {
                "internalType": "address",
                "name": "caller",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "bytes4",
                "name": "selector",
                "type": "bytes4"
            }
        ],
        "name": "canCall",
        "outputs": [
            {
                "internalType": "bool",
                "name": "immediate",
                "type": "bool"
            },
            {
                "internalType": "uint32",
                "name": "delay",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "249cb3fa": {
        "abi": "function canImplementInterfaceForAddress(bytes32 interfaceHash, address account) returns (bytes32)",
        "compact": "canImplementInterfaceForAddress(bytes32,address)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "interfaceHash",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "canImplementInterfaceForAddress",
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
    "d6bb62c6": {
        "abi": "function cancel(address caller, address target, bytes data) returns (uint32)",
        "compact": "cancel(address,address,bytes)",
        "inputs": [
            {
                "internalType": "address",
                "name": "caller",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "cancel",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "452115d6": {
        "abi": "function cancel(address[] targets, uint256[] values, bytes[] calldatas, bytes32 descriptionHash) returns (uint256)",
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "c4d252f5": {
        "abi": "function cancel(bytes32 id)",
        "compact": "cancel(bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "cancel",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "40e58ee5": {
        "abi": "function cancel(uint256 proposalId)",
        "compact": "cancel(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "cancel",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "d602b9fd": {
        "abi": "function cancelDefaultAdminTransfer()",
        "compact": "cancelDefaultAdminTransfer()",
        "inputs": [],
        "name": "cancelDefaultAdminTransfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "591fcdfe": {
        "abi": "function cancelTransaction(address target, uint256 value, string signature, bytes data, uint256 eta)",
        "compact": "cancelTransaction(address,uint256,string,bytes,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "signature",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "eta",
                "type": "uint256"
            }
        ],
        "name": "cancelTransaction",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "355274ea": {
        "abi": "function cap() returns (uint256)",
        "compact": "cap()",
        "inputs": [],
        "name": "cap",
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
    "56781388": {
        "abi": "function castVote(uint256 proposalId, uint8 support) returns (uint256)",
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "8ff262e3": {
        "abi": "function castVoteBySig(uint256 proposalId, uint8 support, address voter, bytes signature) returns (uint256)",
        "compact": "castVoteBySig(uint256,uint8,address,bytes)",
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
                "internalType": "address",
                "name": "voter",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "7b3c71d3": {
        "abi": "function castVoteWithReason(uint256 proposalId, uint8 support, string reason) returns (uint256)",
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "5f398a14": {
        "abi": "function castVoteWithReasonAndParams(uint256 proposalId, uint8 support, string reason, bytes params) returns (uint256)",
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "5b8d0e0d": {
        "abi": "function castVoteWithReasonAndParamsBySig(uint256 proposalId, uint8 support, address voter, string reason, bytes params, bytes signature) returns (uint256)",
        "compact": "castVoteWithReasonAndParamsBySig(uint256,uint8,address,string,bytes,bytes)",
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
                "internalType": "address",
                "name": "voter",
                "type": "address"
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
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "649a5ec7": {
        "abi": "function changeDefaultAdminDelay(uint48 newDelay)",
        "compact": "changeDefaultAdminDelay(uint48)",
        "inputs": [
            {
                "internalType": "uint48",
                "name": "newDelay",
                "type": "uint48"
            }
        ],
        "name": "changeDefaultAdminDelay",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "f1127ed8": {
        "abi": "function checkpoints(address account, uint32 pos) returns (struct Checkpoints.Checkpoint208)",
        "compact": "checkpoints(address,uint32)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint32",
                "name": "pos",
                "type": "uint32"
            }
        ],
        "name": "checkpoints",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint48",
                        "name": "_key",
                        "type": "uint48"
                    },
                    {
                        "internalType": "uint208",
                        "name": "_value",
                        "type": "uint208"
                    }
                ],
                "internalType": "struct Checkpoints.Checkpoint208",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "91ddadf4": {
        "abi": "function clock() returns (uint48)",
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
    "94c7d7ee": {
        "abi": "function consumeScheduledOp(address caller, bytes data)",
        "compact": "consumeScheduledOp(address,bytes)",
        "inputs": [
            {
                "internalType": "address",
                "name": "caller",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "consumeScheduledOp",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "07a2d13a": {
        "abi": "function convertToAssets(uint256 shares) returns (uint256 assets)",
        "compact": "convertToAssets(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "shares",
                "type": "uint256"
            }
        ],
        "name": "convertToAssets",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "assets",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "c6e6f592": {
        "abi": "function convertToShares(uint256 assets) returns (uint256 shares)",
        "compact": "convertToShares(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "assets",
                "type": "uint256"
            }
        ],
        "name": "convertToShares",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "shares",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "313ce567": {
        "abi": "function decimals() returns (uint8)",
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
    "84ef8ffc": {
        "abi": "function defaultAdmin() returns (address)",
        "compact": "defaultAdmin()",
        "inputs": [],
        "name": "defaultAdmin",
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
    "cc8463c8": {
        "abi": "function defaultAdminDelay() returns (uint48)",
        "compact": "defaultAdminDelay()",
        "inputs": [],
        "name": "defaultAdminDelay",
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
    "022d63fb": {
        "abi": "function defaultAdminDelayIncreaseWait() returns (uint48)",
        "compact": "defaultAdminDelayIncreaseWait()",
        "inputs": [],
        "name": "defaultAdminDelayIncreaseWait",
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
    "06e48538": {
        "abi": "function defaultOperators() returns (address[])",
        "compact": "defaultOperators()",
        "inputs": [],
        "name": "defaultOperators",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "6a42b8f8": {
        "abi": "function delay() returns (uint256)",
        "compact": "delay()",
        "inputs": [],
        "name": "delay",
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
    "5c19a95c": {
        "abi": "function delegate(address delegatee)",
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "c3cda520": {
        "abi": "function delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s)",
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "587cde1e": {
        "abi": "function delegates(address account) returns (address)",
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
    "6e553f65": {
        "abi": "function deposit(uint256 assets, address receiver) returns (uint256 shares)",
        "compact": "deposit(uint256,address)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "assets",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "deposit",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "shares",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "2f4f21e2": {
        "abi": "function depositFor(address account, uint256 value) returns (bool)",
        "compact": "depositFor(address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "depositFor",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "cace6eb2": {
        "abi": "function depositFor(address account, uint256[] tokenIds) returns (bool)",
        "compact": "depositFor(address,uint256[])",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "tokenIds",
                "type": "uint256[]"
            }
        ],
        "name": "depositFor",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "0fb5a6b4": {
        "abi": "function duration() returns (uint256)",
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
    "84b0196e": {
        "abi": "function eip712Domain() returns (bytes1 fields, string name, string version, uint256 chainId, address verifyingContract, bytes32 salt, uint256[] extensions)",
        "compact": "eip712Domain()",
        "inputs": [],
        "name": "eip712Domain",
        "outputs": [
            {
                "internalType": "bytes1",
                "name": "fields",
                "type": "bytes1"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "version",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "chainId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "verifyingContract",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            },
            {
                "internalType": "uint256[]",
                "name": "extensions",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "efbe1c1c": {
        "abi": "function end() returns (uint256)",
        "compact": "end()",
        "inputs": [],
        "name": "end",
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
    "df905caf": {
        "abi": "function execute(struct ERC2771Forwarder.ForwardRequestData request)",
        "compact": "execute((address,address,uint256,uint256,uint48,bytes,bytes))",
        "inputs": [
            {
                "components": [
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
                    },
                    {
                        "internalType": "uint256",
                        "name": "gas",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint48",
                        "name": "deadline",
                        "type": "uint48"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "signature",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct ERC2771Forwarder.ForwardRequestData",
                "name": "request",
                "type": "tuple"
            }
        ],
        "name": "execute",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    "1cff79cd": {
        "abi": "function execute(address target, bytes data) returns (uint32)",
        "compact": "execute(address,bytes)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "execute",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    "134008d3": {
        "abi": "function execute(address target, uint256 value, bytes payload, bytes32 predecessor, bytes32 salt)",
        "compact": "execute(address,uint256,bytes,bytes32,bytes32)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "payload",
                "type": "bytes"
            },
            {
                "internalType": "bytes32",
                "name": "predecessor",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            }
        ],
        "name": "execute",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    "2656227d": {
        "abi": "function execute(address[] targets, uint256[] values, bytes[] calldatas, bytes32 descriptionHash) returns (uint256)",
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
    "fe0d94c1": {
        "abi": "function execute(uint256 proposalId)",
        "compact": "execute(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "execute",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    "ccf96b4a": {
        "abi": "function executeBatch(struct ERC2771Forwarder.ForwardRequestData[] requests, address payable refundReceiver)",
        "compact": "executeBatch((address,address,uint256,uint256,uint48,bytes,bytes)[],address)",
        "inputs": [
            {
                "components": [
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
                    },
                    {
                        "internalType": "uint256",
                        "name": "gas",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint48",
                        "name": "deadline",
                        "type": "uint48"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "signature",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct ERC2771Forwarder.ForwardRequestData[]",
                "name": "requests",
                "type": "tuple[]"
            },
            {
                "internalType": "address payable",
                "name": "refundReceiver",
                "type": "address"
            }
        ],
        "name": "executeBatch",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    "e38335e5": {
        "abi": "function executeBatch(address[] targets, uint256[] values, bytes[] payloads, bytes32 predecessor, bytes32 salt)",
        "compact": "executeBatch(address[],uint256[],bytes[],bytes32,bytes32)",
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
                "name": "payloads",
                "type": "bytes[]"
            },
            {
                "internalType": "bytes32",
                "name": "predecessor",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            }
        ],
        "name": "executeBatch",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    "0825f38f": {
        "abi": "function executeTransaction(address target, uint256 value, string signature, bytes data, uint256 eta) returns (bytes)",
        "compact": "executeTransaction(address,uint256,string,bytes,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "signature",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "eta",
                "type": "uint256"
            }
        ],
        "name": "executeTransaction",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    "4f558e79": {
        "abi": "function exists(uint256 id) returns (bool)",
        "compact": "exists(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "exists",
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
    "4665096d": {
        "abi": "function expiration() returns (uint32)",
        "compact": "expiration()",
        "inputs": [],
        "name": "expiration",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "d9d98ce4": {
        "abi": "function flashFee(address token, uint256 amount) returns (uint256)",
        "compact": "flashFee(address,uint256)",
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
        "name": "flashFee",
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
    "5cffe9de": {
        "abi": "function flashLoan(contract IERC3156FlashBorrower receiver, address token, uint256 amount, bytes data) returns (bool)",
        "compact": "flashLoan(address,address,uint256,bytes)",
        "inputs": [
            {
                "internalType": "contract IERC3156FlashBorrower",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
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
        "name": "flashLoan",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "3078f114": {
        "abi": "function getAccess(uint64 roleId, address account) returns (uint48 since, uint32 currentDelay, uint32 pendingDelay, uint48 effect)",
        "compact": "getAccess(uint64,address)",
        "inputs": [
            {
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "getAccess",
        "outputs": [
            {
                "internalType": "uint48",
                "name": "since",
                "type": "uint48"
            },
            {
                "internalType": "uint32",
                "name": "currentDelay",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "pendingDelay",
                "type": "uint32"
            },
            {
                "internalType": "uint48",
                "name": "effect",
                "type": "uint48"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "081812fc": {
        "abi": "function getApproved(uint256 tokenId) returns (address operator)",
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
    "aabbb8ca": {
        "abi": "function getInterfaceImplementer(address account, bytes32 _interfaceHash) returns (address)",
        "compact": "getInterfaceImplementer(address,bytes32)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "_interfaceHash",
                "type": "bytes32"
            }
        ],
        "name": "getInterfaceImplementer",
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
    "3d584063": {
        "abi": "function getManager(address account) returns (address)",
        "compact": "getManager(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "getManager",
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
    "f27a0c92": {
        "abi": "function getMinDelay() returns (uint256)",
        "compact": "getMinDelay()",
        "inputs": [],
        "name": "getMinDelay",
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
    "4136a33c": {
        "abi": "function getNonce(bytes32 id) returns (uint32)",
        "compact": "getNonce(bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "getNonce",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "7958004c": {
        "abi": "function getOperationState(bytes32 id) returns (enum TimelockController.OperationState)",
        "compact": "getOperationState(bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "getOperationState",
        "outputs": [
            {
                "internalType": "enum TimelockController.OperationState",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "8e539e8c": {
        "abi": "function getPastTotalSupply(uint256 timepoint) returns (uint256)",
        "compact": "getPastTotalSupply(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "timepoint",
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
        "abi": "function getPastVotes(address account, uint256 timepoint) returns (uint256)",
        "compact": "getPastVotes(address,uint256)",
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
    "248a9ca3": {
        "abi": "function getRoleAdmin(bytes32 role) returns (bytes32)",
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
    "530dd456": {
        "abi": "function getRoleAdmin(uint64 roleId) returns (uint64)",
        "compact": "getRoleAdmin(uint64)",
        "inputs": [
            {
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "12be8727": {
        "abi": "function getRoleGrantDelay(uint64 roleId) returns (uint32)",
        "compact": "getRoleGrantDelay(uint64)",
        "inputs": [
            {
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            }
        ],
        "name": "getRoleGrantDelay",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "0b0a93ba": {
        "abi": "function getRoleGuardian(uint64 roleId) returns (uint64)",
        "compact": "getRoleGuardian(uint64)",
        "inputs": [
            {
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            }
        ],
        "name": "getRoleGuardian",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "9010d07c": {
        "abi": "function getRoleMember(bytes32 role, uint256 index) returns (address)",
        "compact": "getRoleMember(bytes32,uint256)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getRoleMember",
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
    "ca15c873": {
        "abi": "function getRoleMemberCount(bytes32 role) returns (uint256)",
        "compact": "getRoleMemberCount(bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleMemberCount",
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
    "3adc277a": {
        "abi": "function getSchedule(bytes32 id) returns (uint48)",
        "compact": "getSchedule(bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "getSchedule",
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
    "4c1da1e2": {
        "abi": "function getTargetAdminDelay(address target) returns (uint32)",
        "compact": "getTargetAdminDelay(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            }
        ],
        "name": "getTargetAdminDelay",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "6d5115bd": {
        "abi": "function getTargetFunctionRole(address target, bytes4 selector) returns (uint64)",
        "compact": "getTargetFunctionRole(address,bytes4)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "bytes4",
                "name": "selector",
                "type": "bytes4"
            }
        ],
        "name": "getTargetFunctionRole",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "d45c4435": {
        "abi": "function getTimestamp(bytes32 id) returns (uint256)",
        "compact": "getTimestamp(bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "getTimestamp",
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
    "9ab24eb0": {
        "abi": "function getVotes(address account) returns (uint256)",
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
        "abi": "function getVotes(address account, uint256 timepoint) returns (uint256)",
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
        "abi": "function getVotesWithParams(address account, uint256 timepoint, bytes params) returns (uint256)",
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
        "abi": "function grantRole(bytes32 role, address account)",
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "25c471a0": {
        "abi": "function grantRole(uint64 roleId, address account, uint32 executionDelay)",
        "compact": "grantRole(uint64,address,uint32)",
        "inputs": [
            {
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint32",
                "name": "executionDelay",
                "type": "uint32"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "556f0dc7": {
        "abi": "function granularity() returns (uint256)",
        "compact": "granularity()",
        "inputs": [],
        "name": "granularity",
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
    "91d14854": {
        "abi": "function hasRole(bytes32 role, address account) returns (bool)",
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
    "d1f856ee": {
        "abi": "function hasRole(uint64 roleId, address account) returns (bool isMember, uint32 executionDelay)",
        "compact": "hasRole(uint64,address)",
        "inputs": [
            {
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
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
                "name": "isMember",
                "type": "bool"
            },
            {
                "internalType": "uint32",
                "name": "executionDelay",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "43859632": {
        "abi": "function hasVoted(uint256 proposalId, address account) returns (bool)",
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
    "abd9bd2a": {
        "abi": "function hashOperation(address caller, address target, bytes data) returns (bytes32)",
        "compact": "hashOperation(address,address,bytes)",
        "inputs": [
            {
                "internalType": "address",
                "name": "caller",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "hashOperation",
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
    "8065657f": {
        "abi": "function hashOperation(address target, uint256 value, bytes data, bytes32 predecessor, bytes32 salt) returns (bytes32)",
        "compact": "hashOperation(address,uint256,bytes,bytes32,bytes32)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "internalType": "bytes32",
                "name": "predecessor",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            }
        ],
        "name": "hashOperation",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    "b1c5f427": {
        "abi": "function hashOperationBatch(address[] targets, uint256[] values, bytes[] payloads, bytes32 predecessor, bytes32 salt) returns (bytes32)",
        "compact": "hashOperationBatch(address[],uint256[],bytes[],bytes32,bytes32)",
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
                "name": "payloads",
                "type": "bytes[]"
            },
            {
                "internalType": "bytes32",
                "name": "predecessor",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            }
        ],
        "name": "hashOperationBatch",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    "c59057e4": {
        "abi": "function hashProposal(address[] targets, uint256[] values, bytes[] calldatas, bytes32 descriptionHash) returns (uint256)",
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
    "5c60da1b": {
        "abi": "function implementation() returns (address)",
        "compact": "implementation()",
        "inputs": [],
        "name": "implementation",
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
    "f712f3e8": {
        "abi": "function implementsERC165Interface(address account, bytes4 interfaceId) returns (bool)",
        "compact": "implementsERC165Interface(address,bytes4)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "implementsERC165Interface",
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
    "b7056765": {
        "abi": "function implementsERC165InterfaceNoCache(address account, bytes4 interfaceId) returns (bool)",
        "compact": "implementsERC165InterfaceNoCache(address,bytes4)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "implementsERC165InterfaceNoCache",
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
    "65ba36c1": {
        "abi": "function interfaceHash(string interfaceName) returns (bytes32)",
        "compact": "interfaceHash(string)",
        "inputs": [
            {
                "internalType": "string",
                "name": "interfaceName",
                "type": "string"
            }
        ],
        "name": "interfaceHash",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    "82e49386": {
        "abi": "function isAccessManagerIgnored(address target, bytes4 selector) returns (bool)",
        "compact": "isAccessManagerIgnored(address,bytes4)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "bytes4",
                "name": "selector",
                "type": "bytes4"
            }
        ],
        "name": "isAccessManagerIgnored",
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
    "e985e9c5": {
        "abi": "function isApprovedForAll(address owner, address operator) returns (bool)",
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
    "8fb36037": {
        "abi": "function isConsumingScheduledOp() returns (bytes4)",
        "compact": "isConsumingScheduledOp()",
        "inputs": [],
        "name": "isConsumingScheduledOp",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "31d50750": {
        "abi": "function isOperation(bytes32 id) returns (bool)",
        "compact": "isOperation(bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "isOperation",
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
    "2ab0f529": {
        "abi": "function isOperationDone(bytes32 id) returns (bool)",
        "compact": "isOperationDone(bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "isOperationDone",
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
    "584b153e": {
        "abi": "function isOperationPending(bytes32 id) returns (bool)",
        "compact": "isOperationPending(bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "isOperationPending",
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
    "13bc9f20": {
        "abi": "function isOperationReady(bytes32 id) returns (bool)",
        "compact": "isOperationReady(bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "isOperationReady",
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
    "d95b6371": {
        "abi": "function isOperatorFor(address operator, address tokenHolder) returns (bool)",
        "compact": "isOperatorFor(address,address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "tokenHolder",
                "type": "address"
            }
        ],
        "name": "isOperatorFor",
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
    "a166aa89": {
        "abi": "function isTargetClosed(address target) returns (bool)",
        "compact": "isTargetClosed(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            }
        ],
        "name": "isTargetClosed",
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
        "abi": "function isTrustedForwarder(address forwarder) returns (bool)",
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
    "1626ba7e": {
        "abi": "function isValidSignature(bytes32 hash, bytes signature) returns (bytes4 magicValue)",
        "compact": "isValidSignature(bytes32,bytes)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
            }
        ],
        "name": "isValidSignature",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "magicValue",
                "type": "bytes4"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "853551b8": {
        "abi": "function labelRole(uint64 roleId, string label)",
        "compact": "labelRole(uint64,string)",
        "inputs": [
            {
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            },
            {
                "internalType": "string",
                "name": "label",
                "type": "string"
            }
        ],
        "name": "labelRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "32b8113e": {
        "abi": "function lateQuorumVoteExtension() returns (uint48)",
        "compact": "lateQuorumVoteExtension()",
        "inputs": [],
        "name": "lateQuorumVoteExtension",
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
    "402d267d": {
        "abi": "function maxDeposit(address receiver) returns (uint256 maxAssets)",
        "compact": "maxDeposit(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "maxDeposit",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "maxAssets",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "613255ab": {
        "abi": "function maxFlashLoan(address token) returns (uint256)",
        "compact": "maxFlashLoan(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "maxFlashLoan",
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
    "c63d75b6": {
        "abi": "function maxMint(address receiver) returns (uint256 maxShares)",
        "compact": "maxMint(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "maxMint",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "maxShares",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "d905777e": {
        "abi": "function maxRedeem(address owner) returns (uint256 maxShares)",
        "compact": "maxRedeem(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "maxRedeem",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "maxShares",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "ce96cb77": {
        "abi": "function maxWithdraw(address owner) returns (uint256 maxAssets)",
        "compact": "maxWithdraw(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "maxWithdraw",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "maxAssets",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "cc1b6c81": {
        "abi": "function minSetback() returns (uint32)",
        "compact": "minSetback()",
        "inputs": [],
        "name": "minSetback",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "94bf804d": {
        "abi": "function mint(uint256 shares, address receiver) returns (uint256 assets)",
        "compact": "mint(uint256,address)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "shares",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "mint",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "assets",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "ac9650d8": {
        "abi": "function multicall(bytes[] data) returns (bytes[] results)",
        "compact": "multicall(bytes[])",
        "inputs": [
            {
                "internalType": "bytes[]",
                "name": "data",
                "type": "bytes[]"
            }
        ],
        "name": "multicall",
        "outputs": [
            {
                "internalType": "bytes[]",
                "name": "results",
                "type": "bytes[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "06fdde03": {
        "abi": "function name() returns (string)",
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
        "abi": "function nonces(address owner) returns (uint256)",
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
    "6fcfff45": {
        "abi": "function numCheckpoints(address account) returns (uint32)",
        "compact": "numCheckpoints(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "numCheckpoints",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "7b04a2d0": {
        "abi": "function onApprovalReceived(address owner, uint256 amount, bytes data) returns (bytes4)",
        "compact": "onApprovalReceived(address,uint256,bytes)",
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
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
        "name": "onApprovalReceived",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "bc197c81": {
        "abi": "function onERC1155BatchReceived(address, address, uint256[], uint256[], bytes) returns (bytes4)",
        "compact": "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)",
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC1155BatchReceived",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "f23a6e61": {
        "abi": "function onERC1155Received(address, address, uint256, uint256, bytes) returns (bytes4)",
        "compact": "onERC1155Received(address,address,uint256,uint256,bytes)",
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC1155Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "150b7a02": {
        "abi": "function onERC721Received(address, address, uint256, bytes) returns (bytes4)",
        "compact": "onERC721Received(address,address,uint256,bytes)",
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC721Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "23e30c8b": {
        "abi": "function onFlashLoan(address initiator, address token, uint256 amount, uint256 fee, bytes data) returns (bytes32)",
        "compact": "onFlashLoan(address,address,uint256,uint256,bytes)",
        "inputs": [
            {
                "internalType": "address",
                "name": "initiator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "onFlashLoan",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "88a7ca5c": {
        "abi": "function onTransferReceived(address operator, address from, uint256 amount, bytes data) returns (bytes4)",
        "compact": "onTransferReceived(address,address,uint256,bytes)",
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
        "name": "onTransferReceived",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "fc673c4f": {
        "abi": "function operatorBurn(address account, uint256 amount, bytes data, bytes operatorData)",
        "compact": "operatorBurn(address,uint256,bytes,bytes)",
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
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "operatorData",
                "type": "bytes"
            }
        ],
        "name": "operatorBurn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "62ad1b83": {
        "abi": "function operatorSend(address sender, address recipient, uint256 amount, bytes data, bytes operatorData)",
        "compact": "operatorSend(address,address,uint256,bytes,bytes)",
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
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
            },
            {
                "internalType": "bytes",
                "name": "operatorData",
                "type": "bytes"
            }
        ],
        "name": "operatorSend",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "8da5cb5b": {
        "abi": "function owner() returns (address)",
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
        "abi": "function ownerOf(uint256 tokenId) returns (address owner)",
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
        "abi": "function paused() returns (bool)",
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
    "26782247": {
        "abi": "function pendingAdmin() returns (address)",
        "compact": "pendingAdmin()",
        "inputs": [],
        "name": "pendingAdmin",
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
    "cf6eefb7": {
        "abi": "function pendingDefaultAdmin() returns (address newAdmin, uint48 schedule)",
        "compact": "pendingDefaultAdmin()",
        "inputs": [],
        "name": "pendingDefaultAdmin",
        "outputs": [
            {
                "internalType": "address",
                "name": "newAdmin",
                "type": "address"
            },
            {
                "internalType": "uint48",
                "name": "schedule",
                "type": "uint48"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "a1eda53c": {
        "abi": "function pendingDefaultAdminDelay() returns (uint48 newDelay, uint48 schedule)",
        "compact": "pendingDefaultAdminDelay()",
        "inputs": [],
        "name": "pendingDefaultAdminDelay",
        "outputs": [
            {
                "internalType": "uint48",
                "name": "newDelay",
                "type": "uint48"
            },
            {
                "internalType": "uint48",
                "name": "schedule",
                "type": "uint48"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "e30c3978": {
        "abi": "function pendingOwner() returns (address)",
        "compact": "pendingOwner()",
        "inputs": [],
        "name": "pendingOwner",
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
    "d505accf": {
        "abi": "function permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s)",
        "compact": "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)",
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
            },
            {
                "internalType": "uint256",
                "name": "deadline",
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
        "name": "permit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "ef8b30f7": {
        "abi": "function previewDeposit(uint256 assets) returns (uint256 shares)",
        "compact": "previewDeposit(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "assets",
                "type": "uint256"
            }
        ],
        "name": "previewDeposit",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "shares",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "b3d7f6b9": {
        "abi": "function previewMint(uint256 shares) returns (uint256 assets)",
        "compact": "previewMint(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "shares",
                "type": "uint256"
            }
        ],
        "name": "previewMint",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "assets",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "4cdad506": {
        "abi": "function previewRedeem(uint256 shares) returns (uint256 assets)",
        "compact": "previewRedeem(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "shares",
                "type": "uint256"
            }
        ],
        "name": "previewRedeem",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "assets",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "0a28a477": {
        "abi": "function previewWithdraw(uint256 assets) returns (uint256 shares)",
        "compact": "previewWithdraw(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "assets",
                "type": "uint256"
            }
        ],
        "name": "previewWithdraw",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "shares",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "da35c664": {
        "abi": "function proposalCount() returns (uint256)",
        "compact": "proposalCount()",
        "inputs": [],
        "name": "proposalCount",
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
        "abi": "function proposalDeadline(uint256 proposalId) returns (uint256)",
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
    "16e9eaec": {
        "abi": "function proposalDetails(uint256 proposalId) returns (address[], uint256[], bytes[], bytes32)",
        "compact": "proposalDetails(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "proposalDetails",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes[]",
                "name": "",
                "type": "bytes[]"
            },
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "2e82db94": {
        "abi": "function proposalDetailsAt(uint256 index) returns (uint256, address[], uint256[], bytes[], bytes32)",
        "compact": "proposalDetailsAt(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "proposalDetailsAt",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes[]",
                "name": "",
                "type": "bytes[]"
            },
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "ab58fb8e": {
        "abi": "function proposalEta(uint256 proposalId) returns (uint256)",
        "compact": "proposalEta(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "proposalEta",
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
    "36369547": {
        "abi": "function proposalExecutionPlan(uint256 proposalId) returns (uint32 delay, bool[] indirect, bool[] withDelay)",
        "compact": "proposalExecutionPlan(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "proposalExecutionPlan",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "delay",
                "type": "uint32"
            },
            {
                "internalType": "bool[]",
                "name": "indirect",
                "type": "bool[]"
            },
            {
                "internalType": "bool[]",
                "name": "withDelay",
                "type": "bool[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "a9a95294": {
        "abi": "function proposalNeedsQueuing(uint256) returns (bool)",
        "compact": "proposalNeedsQueuing(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "proposalNeedsQueuing",
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
    "143489d0": {
        "abi": "function proposalProposer(uint256 proposalId) returns (address)",
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
        "abi": "function proposalSnapshot(uint256 proposalId) returns (uint256)",
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
        "abi": "function proposalThreshold() returns (uint256)",
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
        "abi": "function proposalVotes(uint256 proposalId) returns (uint256 againstVotes, uint256 forVotes, uint256 abstainVotes)",
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
        "abi": "function propose(address[] targets, uint256[] values, bytes[] calldatas, string description) returns (uint256)",
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "52d1902d": {
        "abi": "function proxiableUUID() returns (bytes32)",
        "compact": "proxiableUUID()",
        "inputs": [],
        "name": "proxiableUUID",
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
    "160cbed7": {
        "abi": "function queue(address[] targets, uint256[] values, bytes[] calldatas, bytes32 descriptionHash) returns (uint256)",
        "compact": "queue(address[],uint256[],bytes[],bytes32)",
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
        "name": "queue",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "ddf0b009": {
        "abi": "function queue(uint256 proposalId)",
        "compact": "queue(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "queue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "3a66f901": {
        "abi": "function queueTransaction(address target, uint256 value, string signature, bytes data, uint256 eta) returns (bytes32)",
        "compact": "queueTransaction(address,uint256,string,bytes,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "signature",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "eta",
                "type": "uint256"
            }
        ],
        "name": "queueTransaction",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "f2b06537": {
        "abi": "function queuedTransactions(bytes32) returns (bool)",
        "compact": "queuedTransactions(bytes32)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "queuedTransactions",
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
    "f8ce560a": {
        "abi": "function quorum(uint256 timepoint) returns (uint256)",
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
    "97c3d334": {
        "abi": "function quorumDenominator() returns (uint256)",
        "compact": "quorumDenominator()",
        "inputs": [],
        "name": "quorumDenominator",
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
    "a7713a70": {
        "abi": "function quorumNumerator() returns (uint256)",
        "compact": "quorumNumerator()",
        "inputs": [],
        "name": "quorumNumerator",
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
    "60c4247f": {
        "abi": "function quorumNumerator(uint256 timepoint) returns (uint256)",
        "compact": "quorumNumerator(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "timepoint",
                "type": "uint256"
            }
        ],
        "name": "quorumNumerator",
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
    "ba087652": {
        "abi": "function redeem(uint256 shares, address receiver, address owner) returns (uint256 assets)",
        "compact": "redeem(uint256,address,address)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "shares",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "redeem",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "assets",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "c28bc2fa": {
        "abi": "function relay(address target, uint256 value, bytes data)",
        "compact": "relay(address,uint256,bytes)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "relay",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    "fbccedae": {
        "abi": "function releasable() returns (uint256)",
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
    "a3f8eace": {
        "abi": "function releasable(address token) returns (uint256)",
        "compact": "releasable(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
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
        "abi": "function release()",
        "compact": "release()",
        "inputs": [],
        "name": "release",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "19165587": {
        "abi": "function release(address token)",
        "compact": "release(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "release",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "96132521": {
        "abi": "function released() returns (uint256)",
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
    "9852595c": {
        "abi": "function released(address token) returns (uint256)",
        "compact": "released(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
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
    "715018a6": {
        "abi": "function renounceOwnership()",
        "compact": "renounceOwnership()",
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "36568abe": {
        "abi": "function renounceRole(bytes32 role, address callerConfirmation)",
        "compact": "renounceRole(bytes32,address)",
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "callerConfirmation",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "fe0776f5": {
        "abi": "function renounceRole(uint64 roleId, address callerConfirmation)",
        "compact": "renounceRole(uint64,address)",
        "inputs": [
            {
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            },
            {
                "internalType": "address",
                "name": "callerConfirmation",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "fad8b32a": {
        "abi": "function revokeOperator(address operator)",
        "compact": "revokeOperator(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "revokeOperator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "d547741f": {
        "abi": "function revokeRole(bytes32 role, address account)",
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "b7d2b162": {
        "abi": "function revokeRole(uint64 roleId, address account)",
        "compact": "revokeRole(uint64,address)",
        "inputs": [
            {
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "0aa6220b": {
        "abi": "function rollbackDefaultAdminDelay()",
        "compact": "rollbackDefaultAdminDelay()",
        "inputs": [],
        "name": "rollbackDefaultAdminDelay",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "2a55205a": {
        "abi": "function royaltyInfo(uint256 tokenId, uint256 salePrice) returns (address receiver, uint256 royaltyAmount)",
        "compact": "royaltyInfo(uint256,uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "salePrice",
                "type": "uint256"
            }
        ],
        "name": "royaltyInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "royaltyAmount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "2eb2c2d6": {
        "abi": "function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] values, bytes data)",
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
                "name": "values",
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "42842e0e": {
        "abi": "function safeTransferFrom(address from, address to, uint256 tokenId)",
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "b88d4fde": {
        "abi": "function safeTransferFrom(address from, address to, uint256 tokenId, bytes data)",
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "f242432a": {
        "abi": "function safeTransferFrom(address from, address to, uint256 id, uint256 value, bytes data)",
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
                "name": "value",
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "f801a698": {
        "abi": "function schedule(address target, bytes data, uint48 when) returns (bytes32 operationId, uint32 nonce)",
        "compact": "schedule(address,bytes,uint48)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "internalType": "uint48",
                "name": "when",
                "type": "uint48"
            }
        ],
        "name": "schedule",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "operationId",
                "type": "bytes32"
            },
            {
                "internalType": "uint32",
                "name": "nonce",
                "type": "uint32"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "01d5062a": {
        "abi": "function schedule(address target, uint256 value, bytes data, bytes32 predecessor, bytes32 salt, uint256 delay)",
        "compact": "schedule(address,uint256,bytes,bytes32,bytes32,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "internalType": "bytes32",
                "name": "predecessor",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "delay",
                "type": "uint256"
            }
        ],
        "name": "schedule",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "8f2a0bb0": {
        "abi": "function scheduleBatch(address[] targets, uint256[] values, bytes[] payloads, bytes32 predecessor, bytes32 salt, uint256 delay)",
        "compact": "scheduleBatch(address[],uint256[],bytes[],bytes32,bytes32,uint256)",
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
                "name": "payloads",
                "type": "bytes[]"
            },
            {
                "internalType": "bytes32",
                "name": "predecessor",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "delay",
                "type": "uint256"
            }
        ],
        "name": "scheduleBatch",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "9bd9bbc6": {
        "abi": "function send(address recipient, uint256 amount, bytes data)",
        "compact": "send(address,uint256,bytes)",
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
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
        "name": "send",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "cc3bac57": {
        "abi": "function setAccessManagerIgnored(address target, bytes4[] selectors, bool ignored)",
        "compact": "setAccessManagerIgnored(address,bytes4[],bool)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "bytes4[]",
                "name": "selectors",
                "type": "bytes4[]"
            },
            {
                "internalType": "bool",
                "name": "ignored",
                "type": "bool"
            }
        ],
        "name": "setAccessManagerIgnored",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "a22cb465": {
        "abi": "function setApprovalForAll(address operator, bool approved)",
        "compact": "setApprovalForAll(address,bool)",
        "inputs": [
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
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "7a9e5e4b": {
        "abi": "function setAuthority(address newAuthority)",
        "compact": "setAuthority(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "newAuthority",
                "type": "address"
            }
        ],
        "name": "setAuthority",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "0a2a550d": {
        "abi": "function setBaseDelaySeconds(uint32 newBaseDelay)",
        "compact": "setBaseDelaySeconds(uint32)",
        "inputs": [
            {
                "internalType": "uint32",
                "name": "newBaseDelay",
                "type": "uint32"
            }
        ],
        "name": "setBaseDelaySeconds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "e177246e": {
        "abi": "function setDelay(uint256)",
        "compact": "setDelay(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "setDelay",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "a64d95ce": {
        "abi": "function setGrantDelay(uint64 roleId, uint32 newDelay)",
        "compact": "setGrantDelay(uint64,uint32)",
        "inputs": [
            {
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            },
            {
                "internalType": "uint32",
                "name": "newDelay",
                "type": "uint32"
            }
        ],
        "name": "setGrantDelay",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "29965a1d": {
        "abi": "function setInterfaceImplementer(address account, bytes32 _interfaceHash, address implementer)",
        "compact": "setInterfaceImplementer(address,bytes32,address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "_interfaceHash",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "implementer",
                "type": "address"
            }
        ],
        "name": "setInterfaceImplementer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "330df7ff": {
        "abi": "function setLateQuorumVoteExtension(uint48 newVoteExtension)",
        "compact": "setLateQuorumVoteExtension(uint48)",
        "inputs": [
            {
                "internalType": "uint48",
                "name": "newVoteExtension",
                "type": "uint48"
            }
        ],
        "name": "setLateQuorumVoteExtension",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "5df8122f": {
        "abi": "function setManager(address account, address newManager)",
        "compact": "setManager(address,address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "newManager",
                "type": "address"
            }
        ],
        "name": "setManager",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "4dd18bf5": {
        "abi": "function setPendingAdmin(address)",
        "compact": "setPendingAdmin(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "setPendingAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "ece40cc1": {
        "abi": "function setProposalThreshold(uint256 newProposalThreshold)",
        "compact": "setProposalThreshold(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newProposalThreshold",
                "type": "uint256"
            }
        ],
        "name": "setProposalThreshold",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "30cae187": {
        "abi": "function setRoleAdmin(uint64 roleId, uint64 admin)",
        "compact": "setRoleAdmin(uint64,uint64)",
        "inputs": [
            {
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            },
            {
                "internalType": "uint64",
                "name": "admin",
                "type": "uint64"
            }
        ],
        "name": "setRoleAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "52962952": {
        "abi": "function setRoleGuardian(uint64 roleId, uint64 guardian)",
        "compact": "setRoleGuardian(uint64,uint64)",
        "inputs": [
            {
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            },
            {
                "internalType": "uint64",
                "name": "guardian",
                "type": "uint64"
            }
        ],
        "name": "setRoleGuardian",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "d22b5989": {
        "abi": "function setTargetAdminDelay(address target, uint32 newDelay)",
        "compact": "setTargetAdminDelay(address,uint32)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint32",
                "name": "newDelay",
                "type": "uint32"
            }
        ],
        "name": "setTargetAdminDelay",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "167bd395": {
        "abi": "function setTargetClosed(address target, bool closed)",
        "compact": "setTargetClosed(address,bool)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "closed",
                "type": "bool"
            }
        ],
        "name": "setTargetClosed",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "08d6122d": {
        "abi": "function setTargetFunctionRole(address target, bytes4[] selectors, uint64 roleId)",
        "compact": "setTargetFunctionRole(address,bytes4[],uint64)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "bytes4[]",
                "name": "selectors",
                "type": "bytes4[]"
            },
            {
                "internalType": "uint64",
                "name": "roleId",
                "type": "uint64"
            }
        ],
        "name": "setTargetFunctionRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "79051887": {
        "abi": "function setVotingDelay(uint48 newVotingDelay)",
        "compact": "setVotingDelay(uint48)",
        "inputs": [
            {
                "internalType": "uint48",
                "name": "newVotingDelay",
                "type": "uint48"
            }
        ],
        "name": "setVotingDelay",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "e540d01d": {
        "abi": "function setVotingPeriod(uint32 newVotingPeriod)",
        "compact": "setVotingPeriod(uint32)",
        "inputs": [
            {
                "internalType": "uint32",
                "name": "newVotingPeriod",
                "type": "uint32"
            }
        ],
        "name": "setVotingPeriod",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "be9a6555": {
        "abi": "function start() returns (uint256)",
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
        "abi": "function state(uint256 proposalId) returns (enum IGovernor.ProposalState)",
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
                "internalType": "enum IGovernor.ProposalState",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "01ffc9a7": {
        "abi": "function supportsInterface(bytes4 interfaceId) returns (bool)",
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
        "abi": "function symbol() returns (string)",
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
    "d33219b4": {
        "abi": "function timelock() returns (address)",
        "compact": "timelock()",
        "inputs": [],
        "name": "timelock",
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
    "fc0c546a": {
        "abi": "function token() returns (contract IERC5805)",
        "compact": "token()",
        "inputs": [],
        "name": "token",
        "outputs": [
            {
                "internalType": "contract IERC5805",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "4f6ccce7": {
        "abi": "function tokenByIndex(uint256 index) returns (uint256)",
        "compact": "tokenByIndex(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenByIndex",
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
    "2f745c59": {
        "abi": "function tokenOfOwnerByIndex(address owner, uint256 index) returns (uint256)",
        "compact": "tokenOfOwnerByIndex(address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
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
    "c87b56dd": {
        "abi": "function tokenURI(uint256 tokenId) returns (string)",
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
    "0023de29": {
        "abi": "function tokensReceived(address operator, address from, address to, uint256 amount, bytes userData, bytes operatorData)",
        "compact": "tokensReceived(address,address,address,uint256,bytes,bytes)",
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
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "userData",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "operatorData",
                "type": "bytes"
            }
        ],
        "name": "tokensReceived",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "75ab9782": {
        "abi": "function tokensToSend(address operator, address from, address to, uint256 amount, bytes userData, bytes operatorData)",
        "compact": "tokensToSend(address,address,address,uint256,bytes,bytes)",
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
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "userData",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "operatorData",
                "type": "bytes"
            }
        ],
        "name": "tokensToSend",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "01e1d114": {
        "abi": "function totalAssets() returns (uint256 totalManagedAssets)",
        "compact": "totalAssets()",
        "inputs": [],
        "name": "totalAssets",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "totalManagedAssets",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "18160ddd": {
        "abi": "function totalSupply() returns (uint256)",
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
    "bd85b039": {
        "abi": "function totalSupply(uint256 id) returns (uint256)",
        "compact": "totalSupply(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
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
        "abi": "function transfer(address to, uint256 value) returns (bool)",
        "compact": "transfer(address,uint256)",
        "inputs": [
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
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "1296ee62": {
        "abi": "function transferAndCall(address to, uint256 amount) returns (bool)",
        "compact": "transferAndCall(address,uint256)",
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
        "name": "transferAndCall",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "4000aea0": {
        "abi": "function transferAndCall(address to, uint256 amount, bytes data) returns (bool)",
        "compact": "transferAndCall(address,uint256,bytes)",
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
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "transferAndCall",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "23b872dd": {
        "abi": "function transferFrom(address from, address to, uint256 value) returns (bool)",
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
                "name": "value",
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "d8fbe994": {
        "abi": "function transferFromAndCall(address from, address to, uint256 amount) returns (bool)",
        "compact": "transferFromAndCall(address,address,uint256)",
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
        "name": "transferFromAndCall",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "c1d34b89": {
        "abi": "function transferFromAndCall(address from, address to, uint256 amount, bytes data) returns (bool)",
        "compact": "transferFromAndCall(address,address,uint256,bytes)",
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
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "transferFromAndCall",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "f2fde38b": {
        "abi": "function transferOwnership(address newOwner)",
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
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "7da0a877": {
        "abi": "function trustedForwarder() returns (address)",
        "compact": "trustedForwarder()",
        "inputs": [],
        "name": "trustedForwarder",
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
    "6f307dc3": {
        "abi": "function underlying() returns (contract IERC20)",
        "compact": "underlying()",
        "inputs": [],
        "name": "underlying",
        "outputs": [
            {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    "18ff183c": {
        "abi": "function updateAuthority(address target, address newAuthority)",
        "compact": "updateAuthority(address,address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "newAuthority",
                "type": "address"
            }
        ],
        "name": "updateAuthority",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "64d62353": {
        "abi": "function updateDelay(uint256 newDelay)",
        "compact": "updateDelay(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newDelay",
                "type": "uint256"
            }
        ],
        "name": "updateDelay",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "a41e7d51": {
        "abi": "function updateERC165Cache(address account, bytes4 interfaceId)",
        "compact": "updateERC165Cache(address,bytes4)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "updateERC165Cache",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "06f3f9e6": {
        "abi": "function updateQuorumNumerator(uint256 newQuorumNumerator)",
        "compact": "updateQuorumNumerator(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newQuorumNumerator",
                "type": "uint256"
            }
        ],
        "name": "updateQuorumNumerator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "a890c910": {
        "abi": "function updateTimelock(contract ICompoundTimelock newTimelock)",
        "compact": "updateTimelock(address)",
        "inputs": [
            {
                "internalType": "contract ICompoundTimelock",
                "name": "newTimelock",
                "type": "address"
            }
        ],
        "name": "updateTimelock",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "9623609d": {
        "abi": "function upgradeAndCall(contract ITransparentUpgradeableProxy proxy, address implementation, bytes data)",
        "compact": "upgradeAndCall(address,address,bytes)",
        "inputs": [
            {
                "internalType": "contract ITransparentUpgradeableProxy",
                "name": "proxy",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "implementation",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "upgradeAndCall",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    "3659cfe6": {
        "abi": "function upgradeTo(address newImplementation)",
        "compact": "upgradeTo(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "newImplementation",
                "type": "address"
            }
        ],
        "name": "upgradeTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "4f1ef286": {
        "abi": "function upgradeToAndCall(address, bytes)",
        "compact": "upgradeToAndCall(address,bytes)",
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "upgradeToAndCall",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    "0e89341c": {
        "abi": "function uri(uint256) returns (string)",
        "compact": "uri(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "uri",
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
    "19d8d38c": {
        "abi": "function verify(struct ERC2771Forwarder.ForwardRequestData request) returns (bool)",
        "compact": "verify((address,address,uint256,uint256,uint48,bytes,bytes))",
        "inputs": [
            {
                "components": [
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
                    },
                    {
                        "internalType": "uint256",
                        "name": "gas",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint48",
                        "name": "deadline",
                        "type": "uint48"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "signature",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct ERC2771Forwarder.ForwardRequestData",
                "name": "request",
                "type": "tuple"
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
        "abi": "function version() returns (string)",
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
        "abi": "function vestedAmount(address token, uint64 timestamp) returns (uint256)",
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
        "abi": "function vestedAmount(uint64 timestamp) returns (uint256)",
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
    "3932abb1": {
        "abi": "function votingDelay() returns (uint256)",
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
        "abi": "function votingPeriod() returns (uint256)",
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
    "b460af94": {
        "abi": "function withdraw(uint256 assets, address receiver, address owner) returns (uint256 shares)",
        "compact": "withdraw(uint256,address,address)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "assets",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "withdraw",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "shares",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "205c2878": {
        "abi": "function withdrawTo(address account, uint256 value) returns (bool)",
        "compact": "withdrawTo(address,uint256)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "withdrawTo",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "7c1b126c": {
        "abi": "function withdrawTo(address account, uint256[] tokenIds) returns (bool)",
        "compact": "withdrawTo(address,uint256[])",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "tokenIds",
                "type": "uint256[]"
            }
        ],
        "name": "withdrawTo",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
};
