// Do not edit, automatically generated file.

module.exports = {
    "75b238fcfe57c335a03dd53fc4e92497cb515c943e5b3bb6c303dd55b6a02046": {
        "abi": "function ADMIN_ROLE() returns (uint64)",
        "compact": "ADMIN_ROLE()",
        "hash": "75b238fcfe57c335a03dd53fc4e92497cb515c943e5b3bb6c303dd55b6a02046",
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
    "6697b23232a647058342c0724fe7c415cab25915b54e5dbc03f233173d37b41c": {
        "abi": "error AccessControlBadConfirmation()",
        "compact": "AccessControlBadConfirmation()",
        "hash": "6697b23232a647058342c0724fe7c415cab25915b54e5dbc03f233173d37b41c",
        "inputs": [],
        "name": "AccessControlBadConfirmation",
        "type": "error"
    },
    "19ca5ebb8fb33f00e502c9392eddab1501674629178bf69b853cf037aaf4bb5d": {
        "abi": "error AccessControlEnforcedDefaultAdminDelay(uint48 schedule)",
        "compact": "AccessControlEnforcedDefaultAdminDelay(uint48)",
        "hash": "19ca5ebb8fb33f00e502c9392eddab1501674629178bf69b853cf037aaf4bb5d",
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
    "3fc3c27ae3db78c81b8f6e685172134623efa268ee8cd8d54be38ad2a74fc13b": {
        "abi": "error AccessControlEnforcedDefaultAdminRules()",
        "compact": "AccessControlEnforcedDefaultAdminRules()",
        "hash": "3fc3c27ae3db78c81b8f6e685172134623efa268ee8cd8d54be38ad2a74fc13b",
        "inputs": [],
        "name": "AccessControlEnforcedDefaultAdminRules",
        "type": "error"
    },
    "c22c8022f2a840d6b6a9f113407715f5bbd4e88c1b0dd9434dc00700ba609ed4": {
        "abi": "error AccessControlInvalidDefaultAdmin(address defaultAdmin)",
        "compact": "AccessControlInvalidDefaultAdmin(address)",
        "hash": "c22c8022f2a840d6b6a9f113407715f5bbd4e88c1b0dd9434dc00700ba609ed4",
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
    "e2517d3fbfae6f8515ef5ff1ccedc3933ab0cbbda0b492c06eb54ad10ef03b3e": {
        "abi": "error AccessControlUnauthorizedAccount(address account, bytes32 neededRole)",
        "compact": "AccessControlUnauthorizedAccount(address,bytes32)",
        "hash": "e2517d3fbfae6f8515ef5ff1ccedc3933ab0cbbda0b492c06eb54ad10ef03b3e",
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
    "c2f31e5ee06c96eddd5864bf58d26da15afa7233cb6f74e000aa686fca7a7a0b": {
        "abi": "error AccessManagedInvalidAuthority(address authority)",
        "compact": "AccessManagedInvalidAuthority(address)",
        "hash": "c2f31e5ee06c96eddd5864bf58d26da15afa7233cb6f74e000aa686fca7a7a0b",
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
    "af77169dad650be42a753d4bbd4f4ad0d10be80053e495da3bb1525746eda4e4": {
        "abi": "error AccessManagedRequiredDelay(address caller, uint32 delay)",
        "compact": "AccessManagedRequiredDelay(address,uint32)",
        "hash": "af77169dad650be42a753d4bbd4f4ad0d10be80053e495da3bb1525746eda4e4",
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
    "068ca9d827f779c08fd30d7fda45faef5f2a6b2e57f8b809b3c6bbed99f5fb1f": {
        "abi": "error AccessManagedUnauthorized(address caller)",
        "compact": "AccessManagedUnauthorized(address)",
        "hash": "068ca9d827f779c08fd30d7fda45faef5f2a6b2e57f8b809b3c6bbed99f5fb1f",
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
    "813e9459e53966c88032ec53fbd6e1058cc6feb1aff4ae0043d5b773e2ae0ef4": {
        "abi": "error AccessManagerAlreadyScheduled(bytes32 operationId)",
        "compact": "AccessManagerAlreadyScheduled(bytes32)",
        "hash": "813e9459e53966c88032ec53fbd6e1058cc6feb1aff4ae0043d5b773e2ae0ef4",
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
    "5f159e63bdf7fa483a8497c4d8f6afcaf0a66cc4f6ffe3be0c30213ac5334413": {
        "abi": "error AccessManagerBadConfirmation()",
        "compact": "AccessManagerBadConfirmation()",
        "hash": "5f159e63bdf7fa483a8497c4d8f6afcaf0a66cc4f6ffe3be0c30213ac5334413",
        "inputs": [],
        "name": "AccessManagerBadConfirmation",
        "type": "error"
    },
    "78a5d6e4cc0cfe57c6580d6da7ece47e380d660b94e1dd802140e6b1a0e4c9d0": {
        "abi": "error AccessManagerExpired(bytes32 operationId)",
        "compact": "AccessManagerExpired(bytes32)",
        "hash": "78a5d6e4cc0cfe57c6580d6da7ece47e380d660b94e1dd802140e6b1a0e4c9d0",
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
    "420cf47a8bf6c3ac65f850426acfe52d2eabee4997fbff83a80265ee36222c04": {
        "abi": "event AccessManagerIgnoredSet(address target, bytes4 selector, bool ignored)",
        "anonymous": false,
        "compact": "AccessManagerIgnoredSet(address,bytes4,bool)",
        "hash": "420cf47a8bf6c3ac65f850426acfe52d2eabee4997fbff83a80265ee36222c04",
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
    "0813ada2dac5907da0ca4608377ae3cc33c414663de3392def346dcb2241566f": {
        "abi": "error AccessManagerInvalidInitialAdmin(address initialAdmin)",
        "compact": "AccessManagerInvalidInitialAdmin(address)",
        "hash": "0813ada2dac5907da0ca4608377ae3cc33c414663de3392def346dcb2241566f",
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
    "5a068bc825fa4c8b5b7c19e3d94bb54ec2db50f5e44cee292c45a6285923a6aa": {
        "abi": "error AccessManagerLockedAccount(address account)",
        "compact": "AccessManagerLockedAccount(address)",
        "hash": "5a068bc825fa4c8b5b7c19e3d94bb54ec2db50f5e44cee292c45a6285923a6aa",
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
    "1871a90c826f4d46dea9efe540d94eec60a6d0514c23f2746135a0475d14671d": {
        "abi": "error AccessManagerLockedRole(uint64 roleId)",
        "compact": "AccessManagerLockedRole(uint64)",
        "hash": "1871a90c826f4d46dea9efe540d94eec60a6d0514c23f2746135a0475d14671d",
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
    "18cb6b7a3581f53edb610add14f2c612e552cf34cafe6206aaed7afe9f4f18e5": {
        "abi": "error AccessManagerNotReady(bytes32 operationId)",
        "compact": "AccessManagerNotReady(bytes32)",
        "hash": "18cb6b7a3581f53edb610add14f2c612e552cf34cafe6206aaed7afe9f4f18e5",
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
    "60a299b0449ed9476d746f7f6a1b03b53b1a5285d3ebaa60cec39ee0c4f5cccd": {
        "abi": "error AccessManagerNotScheduled(bytes32 operationId)",
        "compact": "AccessManagerNotScheduled(bytes32)",
        "hash": "60a299b0449ed9476d746f7f6a1b03b53b1a5285d3ebaa60cec39ee0c4f5cccd",
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
    "f07e038f25f1d26a9f36b3f0d0d7f99c99ff897943a8e3ba86785c9e479df693": {
        "abi": "error AccessManagerUnauthorizedAccount(address msgsender, uint64 roleId)",
        "compact": "AccessManagerUnauthorizedAccount(address,uint64)",
        "hash": "f07e038f25f1d26a9f36b3f0d0d7f99c99ff897943a8e3ba86785c9e479df693",
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
    "81c6f24b0d2ecbbcba4609a067f29c09d1e5c0c07f268a3d2ae8dc537ea30f2a": {
        "abi": "error AccessManagerUnauthorizedCall(address caller, address target, bytes4 selector)",
        "compact": "AccessManagerUnauthorizedCall(address,address,bytes4)",
        "hash": "81c6f24b0d2ecbbcba4609a067f29c09d1e5c0c07f268a3d2ae8dc537ea30f2a",
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
    "3fe2751c3db829c28295899aeb3fc14784aaed498aa4a4a42accc046883ffa62": {
        "abi": "error AccessManagerUnauthorizedCancel(address msgsender, address caller, address target, bytes4 selector)",
        "compact": "AccessManagerUnauthorizedCancel(address,address,address,bytes4)",
        "hash": "3fe2751c3db829c28295899aeb3fc14784aaed498aa4a4a42accc046883ffa62",
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
    "320ff7489be961cad7668c9ff49d284dd1606170a29c683487f631092d07e028": {
        "abi": "error AccessManagerUnauthorizedConsume(address target)",
        "compact": "AccessManagerUnauthorizedConsume(address)",
        "hash": "320ff7489be961cad7668c9ff49d284dd1606170a29c683487f631092d07e028",
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
    "9996b315c842ff135b8fc4a08ad5df1c344efbc03d2687aecc0678050d2aac89": {
        "abi": "error AddressEmptyCode(address target)",
        "compact": "AddressEmptyCode(address)",
        "hash": "9996b315c842ff135b8fc4a08ad5df1c344efbc03d2687aecc0678050d2aac89",
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
    "cd7860599b9fd41bcf04bec8b7a59cb8b83ebbb59480bead3f13259df2ace421": {
        "abi": "error AddressInsufficientBalance(address account)",
        "compact": "AddressInsufficientBalance(address)",
        "hash": "cd7860599b9fd41bcf04bec8b7a59cb8b83ebbb59480bead3f13259df2ace421",
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
    "7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f": {
        "abi": "event AdminChanged(address previousAdmin, address newAdmin)",
        "anonymous": false,
        "compact": "AdminChanged(address,address)",
        "hash": "7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f",
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
    "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
        "abi": "event Approval(address indexed owner, address indexed spender, uint256 value)",
        "anonymous": false,
        "compact": "Approval(address,address,uint256)",
        "hash": "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
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
    "17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
        "abi": "event ApprovalForAll(address indexed owner, address indexed operator, bool approved)",
        "anonymous": false,
        "compact": "ApprovalForAll(address,address,bool)",
        "hash": "17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31",
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
    "2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad": {
        "abi": "event AuthorityUpdated(address authority)",
        "anonymous": false,
        "compact": "AuthorityUpdated(address)",
        "hash": "2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad",
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
    "f4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f9": {
        "abi": "event AuthorizedOperator(address indexed operator, address indexed tokenHolder)",
        "anonymous": false,
        "compact": "AuthorizedOperator(address,address)",
        "hash": "f4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f9",
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
    "deaaa7cc774d8c4ca395900550c6af1c10353667f19261332b215dd6ff7b757d": {
        "abi": "function BALLOT_TYPEHASH() returns (bytes32)",
        "compact": "BALLOT_TYPEHASH()",
        "hash": "deaaa7cc774d8c4ca395900550c6af1c10353667f19261332b215dd6ff7b757d",
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
    "65135e4d9e214a272631f85c3ab68685271bccecf1ad1336709c14e139b3328d": {
        "abi": "event BaseDelaySet(uint32 oldBaseDelaySeconds, uint32 newBaseDelaySeconds)",
        "anonymous": false,
        "compact": "BaseDelaySet(uint32,uint32)",
        "hash": "65135e4d9e214a272631f85c3ab68685271bccecf1ad1336709c14e139b3328d",
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
    "6bd5c950a8d8df17f772f5af37cb3655737899cbf903264b9795592da439661c": {
        "abi": "event BatchMetadataUpdate(uint256 _fromTokenId, uint256 _toTokenId)",
        "anonymous": false,
        "compact": "BatchMetadataUpdate(uint256,uint256)",
        "hash": "6bd5c950a8d8df17f772f5af37cb3655737899cbf903264b9795592da439661c",
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
    "847ac564dfcbc7a4f3fcf5f667697f798703b4fd8218b3f80c185d8eb4dfecdf": {
        "abi": "error BeaconInvalidImplementation(address implementation)",
        "compact": "BeaconInvalidImplementation(address)",
        "hash": "847ac564dfcbc7a4f3fcf5f667697f798703b4fd8218b3f80c185d8eb4dfecdf",
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
    "1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e": {
        "abi": "event BeaconUpgraded(address indexed beacon)",
        "anonymous": false,
        "compact": "BeaconUpgraded(address)",
        "hash": "1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e",
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
    "a78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098": {
        "abi": "event Burned(address indexed operator, address indexed from, uint256 amount, bytes data, bytes operatorData)",
        "anonymous": false,
        "compact": "Burned(address,address,uint256,bytes,bytes)",
        "hash": "a78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098",
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
    "b08e51c00acbd4560dedff89e133da3c491afde99541ac9f78b702e7fbf79c23": {
        "abi": "function CANCELLER_ROLE() returns (bytes32)",
        "compact": "CANCELLER_ROLE()",
        "hash": "b08e51c00acbd4560dedff89e133da3c491afde99541ac9f78b702e7fbf79c23",
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
    "4bf5d7e9b6c61a22cbf64ce287b6d2ab7d20c1daf2af0387ee347ff904cd25f5": {
        "abi": "function CLOCK_MODE() returns (string)",
        "compact": "CLOCK_MODE()",
        "hash": "4bf5d7e9b6c61a22cbf64ce287b6d2ab7d20c1daf2af0387ee347ff904cd25f5",
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
    "dd4e2ba51a4181e995df5435b20f6d7ac7d271124517e345ec91b18db647ef0c": {
        "abi": "function COUNTING_MODE() returns (string)",
        "compact": "COUNTING_MODE()",
        "hash": "dd4e2ba51a4181e995df5435b20f6d7ac7d271124517e345ec91b18db647ef0c",
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
    "c2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b58": {
        "abi": "event CallExecuted(bytes32 indexed id, uint256 indexed index, address target, uint256 value, bytes data)",
        "anonymous": false,
        "compact": "CallExecuted(bytes32,uint256,address,uint256,bytes)",
        "hash": "c2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b58",
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
    "20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d0387": {
        "abi": "event CallSalt(bytes32 indexed id, bytes32 salt)",
        "anonymous": false,
        "compact": "CallSalt(bytes32,bytes32)",
        "hash": "20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d0387",
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
    "4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca": {
        "abi": "event CallScheduled(bytes32 indexed id, uint256 indexed index, address target, uint256 value, bytes data, bytes32 predecessor, uint256 delay)",
        "anonymous": false,
        "compact": "CallScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)",
        "hash": "4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca",
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
    "2fffc091a501fd91bfbff27141450d3acb40fb8e6d8382b243ec7a812a3aaf87": {
        "abi": "event CancelTransaction(bytes32 indexed txHash, address indexed target, uint256 value, string signature, bytes data, uint256 eta)",
        "anonymous": false,
        "compact": "CancelTransaction(bytes32,address,uint256,string,bytes,uint256)",
        "hash": "2fffc091a501fd91bfbff27141450d3acb40fb8e6d8382b243ec7a812a3aaf87",
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
    "baa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb70": {
        "abi": "event Cancelled(bytes32 indexed id)",
        "anonymous": false,
        "compact": "Cancelled(bytes32)",
        "hash": "baa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb70",
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
    "2520601d9d60b717c34a36ad270857824c5a1ebbfd08ff39aba6930089495cfa": {
        "abi": "error CheckpointUnorderedInsertion()",
        "compact": "CheckpointUnorderedInsertion()",
        "hash": "2520601d9d60b717c34a36ad270857824c5a1ebbfd08ff39aba6930089495cfa",
        "inputs": [],
        "name": "CheckpointUnorderedInsertion",
        "type": "error"
    },
    "deaa91b6123d068f5821d0fb0678463d1a8a6079fe8af5de3ce5e896dcf9133d": {
        "abi": "event ConsecutiveTransfer(uint256 indexed fromTokenId, uint256 toTokenId, address indexed fromAddress, address indexed toAddress)",
        "anonymous": false,
        "compact": "ConsecutiveTransfer(uint256,uint256,address,address)",
        "hash": "deaa91b6123d068f5821d0fb0678463d1a8a6079fe8af5de3ce5e896dcf9133d",
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
    "4ca249dcffe41558ef8b961d71c905e4fa4317a1663f377b9610642e4e0abdb6": {
        "abi": "error Create2EmptyBytecode()",
        "compact": "Create2EmptyBytecode()",
        "hash": "4ca249dcffe41558ef8b961d71c905e4fa4317a1663f377b9610642e4e0abdb6",
        "inputs": [],
        "name": "Create2EmptyBytecode",
        "type": "error"
    },
    "741752c230668e742e04d0e799d480a7e72f164f9fad2c3b19de2700f5fe3753": {
        "abi": "error Create2FailedDeployment()",
        "compact": "Create2FailedDeployment()",
        "hash": "741752c230668e742e04d0e799d480a7e72f164f9fad2c3b19de2700f5fe3753",
        "inputs": [],
        "name": "Create2FailedDeployment",
        "type": "error"
    },
    "e4bbecacd30b7be9ec05b101a92eb15e6d3b29f5adfe61558b405569efa76ef8": {
        "abi": "error Create2InsufficientBalance(uint256 balance, uint256 needed)",
        "compact": "Create2InsufficientBalance(uint256,uint256)",
        "hash": "e4bbecacd30b7be9ec05b101a92eb15e6d3b29f5adfe61558b405569efa76ef8",
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
    "a217fddfde7807bb766525e432eeeecaaf4de889a05e8df9fb827257fb978cf4": {
        "abi": "function DEFAULT_ADMIN_ROLE() returns (bytes32)",
        "compact": "DEFAULT_ADMIN_ROLE()",
        "hash": "a217fddfde7807bb766525e432eeeecaaf4de889a05e8df9fb827257fb978cf4",
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
    "3644e5157256d68e3eeedd2ead302507a9c4ffaff665547d2c3623a1e9e7edf4": {
        "abi": "function DOMAIN_SEPARATOR() returns (bytes32)",
        "compact": "DOMAIN_SEPARATOR()",
        "hash": "3644e5157256d68e3eeedd2ead302507a9c4ffaff665547d2c3623a1e9e7edf4",
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
    "2b1fa2edafe6f7b9e97c1a9e0c3660e645beb2dcaa2d45bdbf9beaf5472e1ec5": {
        "abi": "event DefaultAdminDelayChangeCanceled()",
        "anonymous": false,
        "compact": "DefaultAdminDelayChangeCanceled()",
        "hash": "2b1fa2edafe6f7b9e97c1a9e0c3660e645beb2dcaa2d45bdbf9beaf5472e1ec5",
        "inputs": [],
        "name": "DefaultAdminDelayChangeCanceled",
        "type": "event"
    },
    "f1038c18cf84a56e432fdbfaf746924b7ea511dfe03a6506a0ceba4888788d9b": {
        "abi": "event DefaultAdminDelayChangeScheduled(uint48 newDelay, uint48 effectSchedule)",
        "anonymous": false,
        "compact": "DefaultAdminDelayChangeScheduled(uint48,uint48)",
        "hash": "f1038c18cf84a56e432fdbfaf746924b7ea511dfe03a6506a0ceba4888788d9b",
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
    "8886ebfc4259abdbc16601dd8fb5678e54878f47b3c34836cfc51154a9605109": {
        "abi": "event DefaultAdminTransferCanceled()",
        "anonymous": false,
        "compact": "DefaultAdminTransferCanceled()",
        "hash": "8886ebfc4259abdbc16601dd8fb5678e54878f47b3c34836cfc51154a9605109",
        "inputs": [],
        "name": "DefaultAdminTransferCanceled",
        "type": "event"
    },
    "3377dc44241e779dd06afab5b788a35ca5f3b778836e2990bdb26a2a4b2e5ed6": {
        "abi": "event DefaultAdminTransferScheduled(address indexed newAdmin, uint48 acceptSchedule)",
        "anonymous": false,
        "compact": "DefaultAdminTransferScheduled(address,uint48)",
        "hash": "3377dc44241e779dd06afab5b788a35ca5f3b778836e2990bdb26a2a4b2e5ed6",
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
    "3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f": {
        "abi": "event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate)",
        "anonymous": false,
        "compact": "DelegateChanged(address,address,address)",
        "hash": "3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f",
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
    "dec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724": {
        "abi": "event DelegateVotesChanged(address indexed delegate, uint256 previousVotes, uint256 newVotes)",
        "anonymous": false,
        "compact": "DelegateVotesChanged(address,uint256,uint256)",
        "hash": "dec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724",
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
    "dcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7": {
        "abi": "event Deposit(address indexed sender, address indexed owner, uint256 assets, uint256 shares)",
        "anonymous": false,
        "compact": "Deposit(address,address,uint256,uint256)",
        "hash": "dcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7",
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
    "f645eedf0193584640b6b90cb9477e4c95b98636c148a891d4c0a146dc46e75a": {
        "abi": "error ECDSAInvalidSignature()",
        "compact": "ECDSAInvalidSignature()",
        "hash": "f645eedf0193584640b6b90cb9477e4c95b98636c148a891d4c0a146dc46e75a",
        "inputs": [],
        "name": "ECDSAInvalidSignature",
        "type": "error"
    },
    "fce698f7e8e5342cd615f641317bc45fe7e1e4a8b0a14dd1383ff8dc9c41917f": {
        "abi": "error ECDSAInvalidSignatureLength(uint256 length)",
        "compact": "ECDSAInvalidSignatureLength(uint256)",
        "hash": "fce698f7e8e5342cd615f641317bc45fe7e1e4a8b0a14dd1383ff8dc9c41917f",
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
    "d78bce0cccb935155ed6428d1c13e50b7f3550fd2b66b9fe266006fea4a5e1eb": {
        "abi": "error ECDSAInvalidSignatureS(bytes32 s)",
        "compact": "ECDSAInvalidSignatureS(bytes32)",
        "hash": "d78bce0cccb935155ed6428d1c13e50b7f3550fd2b66b9fe266006fea4a5e1eb",
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
    "0a6387c9ea3628b88a633bb4f3b151770f70085117a15f9bf3787cda53f13d31": {
        "abi": "event EIP712DomainChanged()",
        "anonymous": false,
        "compact": "EIP712DomainChanged()",
        "hash": "0a6387c9ea3628b88a633bb4f3b151770f70085117a15f9bf3787cda53f13d31",
        "inputs": [],
        "name": "EIP712DomainChanged",
        "type": "event"
    },
    "03dee4c573c982787b5f3537d6323ffaca9d864448aa6bd828ada9e5d0837036": {
        "abi": "error ERC1155InsufficientBalance(address sender, uint256 balance, uint256 needed, uint256 tokenId)",
        "compact": "ERC1155InsufficientBalance(address,uint256,uint256,uint256)",
        "hash": "03dee4c573c982787b5f3537d6323ffaca9d864448aa6bd828ada9e5d0837036",
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
    "3e31884e33c33ce0039d1905e3c252950ae3b95240f36d4fff81f5ff6752ef99": {
        "abi": "error ERC1155InvalidApprover(address approver)",
        "compact": "ERC1155InvalidApprover(address)",
        "hash": "3e31884e33c33ce0039d1905e3c252950ae3b95240f36d4fff81f5ff6752ef99",
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
    "5b0599913619cfa5633692652638ed25cafcd079c9beae8c251b12c23dcc83f2": {
        "abi": "error ERC1155InvalidArrayLength(uint256 idsLength, uint256 valuesLength)",
        "compact": "ERC1155InvalidArrayLength(uint256,uint256)",
        "hash": "5b0599913619cfa5633692652638ed25cafcd079c9beae8c251b12c23dcc83f2",
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
    "ced3e10010b9d2aa24827119d0db4a8feec73aea48b4b3e470d8a9f3ff723569": {
        "abi": "error ERC1155InvalidOperator(address operator)",
        "compact": "ERC1155InvalidOperator(address)",
        "hash": "ced3e10010b9d2aa24827119d0db4a8feec73aea48b4b3e470d8a9f3ff723569",
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
    "57f447ceed621d9e134e26de5772c88799abb7322ce2a87f95dce247d47105c6": {
        "abi": "error ERC1155InvalidReceiver(address receiver)",
        "compact": "ERC1155InvalidReceiver(address)",
        "hash": "57f447ceed621d9e134e26de5772c88799abb7322ce2a87f95dce247d47105c6",
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
    "01a83514e94b34009110b75cac6742ba33bd7c62f18a3616bafea52855d3b175": {
        "abi": "error ERC1155InvalidSender(address sender)",
        "compact": "ERC1155InvalidSender(address)",
        "hash": "01a83514e94b34009110b75cac6742ba33bd7c62f18a3616bafea52855d3b175",
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
    "e237d922be9fac42efeaaaffb42cc6b57e0ff95d94a1b74daeff69adc7657754": {
        "abi": "error ERC1155MissingApprovalForAll(address operator, address owner)",
        "compact": "ERC1155MissingApprovalForAll(address,address)",
        "hash": "e237d922be9fac42efeaaaffb42cc6b57e0ff95d94a1b74daeff69adc7657754",
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
    "c2f868f43c8041d1e8faef4ca653bb9576fa10531d340cadf0be962c9d0dd316": {
        "abi": "error ERC1167FailedCreateClone()",
        "compact": "ERC1167FailedCreateClone()",
        "hash": "c2f868f43c8041d1e8faef4ca653bb9576fa10531d340cadf0be962c9d0dd316",
        "inputs": [],
        "name": "ERC1167FailedCreateClone",
        "type": "error"
    },
    "62e77ba29fe9122a94e84b52c1153f52dc5bd59527150c583cc2afd92259963f": {
        "abi": "error ERC1967InvalidAdmin(address admin)",
        "compact": "ERC1967InvalidAdmin(address)",
        "hash": "62e77ba29fe9122a94e84b52c1153f52dc5bd59527150c583cc2afd92259963f",
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
    "64ced0ece10d3f255d366f738253b047af18e833e0d579faf1f0587af8c0d9c2": {
        "abi": "error ERC1967InvalidBeacon(address beacon)",
        "compact": "ERC1967InvalidBeacon(address)",
        "hash": "64ced0ece10d3f255d366f738253b047af18e833e0d579faf1f0587af8c0d9c2",
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
    "4c9c8ce3ceb3130f17f7cdba48d89b5b0129f266a8bac114e6e315a41879b617": {
        "abi": "error ERC1967InvalidImplementation(address implementation)",
        "compact": "ERC1967InvalidImplementation(address)",
        "hash": "4c9c8ce3ceb3130f17f7cdba48d89b5b0129f266a8bac114e6e315a41879b617",
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
    "b398979fa84f543c8e222f17890372c487baf85e062276c127fef521eea7224b": {
        "abi": "error ERC1967NonPayable()",
        "compact": "ERC1967NonPayable()",
        "hash": "b398979fa84f543c8e222f17890372c487baf85e062276c127fef521eea7224b",
        "inputs": [],
        "name": "ERC1967NonPayable",
        "type": "error"
    },
    "9e79f854e7e443a7e81774a004f97452fde67fc40f1ae7a0ecb8c360c4f564ac": {
        "abi": "error ERC20ExceededCap(uint256 increasedSupply, uint256 cap)",
        "compact": "ERC20ExceededCap(uint256,uint256)",
        "hash": "9e79f854e7e443a7e81774a004f97452fde67fc40f1ae7a0ecb8c360c4f564ac",
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
    "1cb15d26dea6ae78228522d00b5965f950275bea9a67abeec04cb99806defd4c": {
        "abi": "error ERC20ExceededSafeSupply(uint256 increasedSupply, uint256 cap)",
        "compact": "ERC20ExceededSafeSupply(uint256,uint256)",
        "hash": "1cb15d26dea6ae78228522d00b5965f950275bea9a67abeec04cb99806defd4c",
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
    "fb8f41b23e99d2101d86da76cdfa87dd51c82ed07d3cb62cbc473e469dbc75c3": {
        "abi": "error ERC20InsufficientAllowance(address spender, uint256 allowance, uint256 needed)",
        "compact": "ERC20InsufficientAllowance(address,uint256,uint256)",
        "hash": "fb8f41b23e99d2101d86da76cdfa87dd51c82ed07d3cb62cbc473e469dbc75c3",
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
    "e450d38cd8d9f7d95077d567d60ed49c7254716e6ad08fc9872816c97e0ffec6": {
        "abi": "error ERC20InsufficientBalance(address sender, uint256 balance, uint256 needed)",
        "compact": "ERC20InsufficientBalance(address,uint256,uint256)",
        "hash": "e450d38cd8d9f7d95077d567d60ed49c7254716e6ad08fc9872816c97e0ffec6",
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
    "e602df05cc75712490294c6c104ab7c17f4030363910a7a2626411c6d3118847": {
        "abi": "error ERC20InvalidApprover(address approver)",
        "compact": "ERC20InvalidApprover(address)",
        "hash": "e602df05cc75712490294c6c104ab7c17f4030363910a7a2626411c6d3118847",
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
    "392e1e27cbe1cbe0653ae0435ec8f503f6a25b76c3c7164a5cacb005b0b68677": {
        "abi": "error ERC20InvalidCap(uint256 cap)",
        "compact": "ERC20InvalidCap(uint256)",
        "hash": "392e1e27cbe1cbe0653ae0435ec8f503f6a25b76c3c7164a5cacb005b0b68677",
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
    "ec442f055133b72f3b2f9f0bb351c406b178527de2040a7d1feb4e058771f613": {
        "abi": "error ERC20InvalidReceiver(address receiver)",
        "compact": "ERC20InvalidReceiver(address)",
        "hash": "ec442f055133b72f3b2f9f0bb351c406b178527de2040a7d1feb4e058771f613",
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
    "96c6fd1edd0cd6ef7ff0ecc0facdf53148dc0048b57fe58af65755250a7a96bd": {
        "abi": "error ERC20InvalidSender(address sender)",
        "compact": "ERC20InvalidSender(address)",
        "hash": "96c6fd1edd0cd6ef7ff0ecc0facdf53148dc0048b57fe58af65755250a7a96bd",
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
    "94280d62c347d8d9f4d59a76ea321452406db88df38e0c9da304f58b57b373a2": {
        "abi": "error ERC20InvalidSpender(address spender)",
        "compact": "ERC20InvalidSpender(address)",
        "hash": "94280d62c347d8d9f4d59a76ea321452406db88df38e0c9da304f58b57b373a2",
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
    "438d6fe34193b439efbab782534ca7fefd5f4aadc000b978c2422cbc1ac4d25d": {
        "abi": "error ERC20InvalidUnderlying(address token)",
        "compact": "ERC20InvalidUnderlying(address)",
        "hash": "438d6fe34193b439efbab782534ca7fefd5f4aadc000b978c2422cbc1ac4d25d",
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
    "c0e523490dd523c33b1878c9eb14ff46991e3f5b2cd33710918618f2a39cba1b": {
        "abi": "event ERC20Released(address indexed token, uint256 amount)",
        "anonymous": false,
        "compact": "ERC20Released(address,uint256)",
        "hash": "c0e523490dd523c33b1878c9eb14ff46991e3f5b2cd33710918618f2a39cba1b",
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
    "627913023c184eaad13735d5a3d2657ae76ec9a872a70e0fc57522ef1a114d58": {
        "abi": "error ERC2612ExpiredSignature(uint256 deadline)",
        "compact": "ERC2612ExpiredSignature(uint256)",
        "hash": "627913023c184eaad13735d5a3d2657ae76ec9a872a70e0fc57522ef1a114d58",
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
    "4b800e463b323b1d856edf9dec70329a639d13874a57f5c28219ff57128756db": {
        "abi": "error ERC2612InvalidSigner(address signer, address owner)",
        "compact": "ERC2612InvalidSigner(address,address)",
        "hash": "4b800e463b323b1d856edf9dec70329a639d13874a57f5c28219ff57128756db",
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
    "94eef58a33b817a1b65237e0f9d0e329b852d5ae15f050799b8441eae4390556": {
        "abi": "error ERC2771ForwarderExpiredRequest(uint48 deadline)",
        "compact": "ERC2771ForwarderExpiredRequest(uint48)",
        "hash": "94eef58a33b817a1b65237e0f9d0e329b852d5ae15f050799b8441eae4390556",
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
    "c845a056973bc1f7f2d7cd71736668c2145d9639779c36b557dd323c0d18f784": {
        "abi": "error ERC2771ForwarderInvalidSigner(address signer, address from)",
        "compact": "ERC2771ForwarderInvalidSigner(address,address)",
        "hash": "c845a056973bc1f7f2d7cd71736668c2145d9639779c36b557dd323c0d18f784",
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
    "70647f79f9d7612ec5cfa541f407ca826be01b69a9a7b3e583781b1002fd93c7": {
        "abi": "error ERC2771ForwarderMismatchedValue(uint256 requestedValue, uint256 msgValue)",
        "compact": "ERC2771ForwarderMismatchedValue(uint256,uint256)",
        "hash": "70647f79f9d7612ec5cfa541f407ca826be01b69a9a7b3e583781b1002fd93c7",
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
    "d2650cd17abcf9f73bc10fd31970fbe854729f4bab904be0d9865a7e3773aa63": {
        "abi": "error ERC2771UntrustfulTarget(address target, address forwarder)",
        "compact": "ERC2771UntrustfulTarget(address,address)",
        "hash": "d2650cd17abcf9f73bc10fd31970fbe854729f4bab904be0d9865a7e3773aa63",
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
    "6f483d09b3a1c4c035367ae09146a8a08a718cb6617416cc12a2457ab3d65514": {
        "abi": "error ERC2981InvalidDefaultRoyalty(uint256 numerator, uint256 denominator)",
        "compact": "ERC2981InvalidDefaultRoyalty(uint256,uint256)",
        "hash": "6f483d09b3a1c4c035367ae09146a8a08a718cb6617416cc12a2457ab3d65514",
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
    "b6d9900a710828c2d05fe8061d6309d02a20eaa45cd00228c2c2dfbfa2b86fc3": {
        "abi": "error ERC2981InvalidDefaultRoyaltyReceiver(address receiver)",
        "compact": "ERC2981InvalidDefaultRoyaltyReceiver(address)",
        "hash": "b6d9900a710828c2d05fe8061d6309d02a20eaa45cd00228c2c2dfbfa2b86fc3",
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
    "dfd1fc1b5658265f0993b87b75dd02b2fdcb36b128879bccdcf260effa0856bf": {
        "abi": "error ERC2981InvalidTokenRoyalty(uint256 tokenId, uint256 numerator, uint256 denominator)",
        "compact": "ERC2981InvalidTokenRoyalty(uint256,uint256,uint256)",
        "hash": "dfd1fc1b5658265f0993b87b75dd02b2fdcb36b128879bccdcf260effa0856bf",
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
    "969f0852135afead3ca9a1ff1e4fe485d35593f81a91d5dbe3a5737302cdbda8": {
        "abi": "error ERC2981InvalidTokenRoyaltyReceiver(uint256 tokenId, address receiver)",
        "compact": "ERC2981InvalidTokenRoyaltyReceiver(uint256,address)",
        "hash": "969f0852135afead3ca9a1ff1e4fe485d35593f81a91d5dbe3a5737302cdbda8",
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
    "fd9a760963b22e2dff202296e7e042c4db12101593102bcb48f23100e1096670": {
        "abi": "error ERC3156ExceededMaxLoan(uint256 maxLoan)",
        "compact": "ERC3156ExceededMaxLoan(uint256)",
        "hash": "fd9a760963b22e2dff202296e7e042c4db12101593102bcb48f23100e1096670",
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
    "678c5b001ca6cf8e7f105b2b4eb8c0fb398a620150a9ad96238c4d061393c0a8": {
        "abi": "error ERC3156InvalidReceiver(address receiver)",
        "compact": "ERC3156InvalidReceiver(address)",
        "hash": "678c5b001ca6cf8e7f105b2b4eb8c0fb398a620150a9ad96238c4d061393c0a8",
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
    "b5a7db92dabd93cc129b0058393908541a5d4295ecef2ef20c4fd2d91b9c32e9": {
        "abi": "error ERC3156UnsupportedToken(address token)",
        "compact": "ERC3156UnsupportedToken(address)",
        "hash": "b5a7db92dabd93cc129b0058393908541a5d4295ecef2ef20c4fd2d91b9c32e9",
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
    "79012fb2819fcdc1de669c08773dbcd6bdc757862642f75fb1c584dadf259dfe": {
        "abi": "error ERC4626ExceededMaxDeposit(address receiver, uint256 assets, uint256 max)",
        "compact": "ERC4626ExceededMaxDeposit(address,uint256,uint256)",
        "hash": "79012fb2819fcdc1de669c08773dbcd6bdc757862642f75fb1c584dadf259dfe",
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
    "284ff667dc615a39438518c22e8955b9470327d9de8a4d7e21c926b260d65176": {
        "abi": "error ERC4626ExceededMaxMint(address receiver, uint256 shares, uint256 max)",
        "compact": "ERC4626ExceededMaxMint(address,uint256,uint256)",
        "hash": "284ff667dc615a39438518c22e8955b9470327d9de8a4d7e21c926b260d65176",
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
    "b94abeec0557d36b5f0bc8f115deec7b184dcbff94ac66d55e37c8f301e75269": {
        "abi": "error ERC4626ExceededMaxRedeem(address owner, uint256 shares, uint256 max)",
        "compact": "ERC4626ExceededMaxRedeem(address,uint256,uint256)",
        "hash": "b94abeec0557d36b5f0bc8f115deec7b184dcbff94ac66d55e37c8f301e75269",
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
    "fe9cceec2bd1f9b68641914cc354eacaeb1cc2169f5ba0639930f241e87142f0": {
        "abi": "error ERC4626ExceededMaxWithdraw(address owner, uint256 assets, uint256 max)",
        "compact": "ERC4626ExceededMaxWithdraw(address,uint256,uint256)",
        "hash": "fe9cceec2bd1f9b68641914cc354eacaeb1cc2169f5ba0639930f241e87142f0",
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
    "ecd3f81ef0a2e77b4e11bb288f0a162344834f778af7e47bdbee611607f14457": {
        "abi": "error ERC5805FutureLookup(uint256 timepoint, uint48 clock)",
        "compact": "ERC5805FutureLookup(uint256,uint48)",
        "hash": "ecd3f81ef0a2e77b4e11bb288f0a162344834f778af7e47bdbee611607f14457",
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
    "6ff07140ae905cb0f8e72fb38f5dd8e756c387b0065be0e1bf85bd0621a43dc7": {
        "abi": "error ERC6372InconsistentClock()",
        "compact": "ERC6372InconsistentClock()",
        "hash": "6ff07140ae905cb0f8e72fb38f5dd8e756c387b0065be0e1bf85bd0621a43dc7",
        "inputs": [],
        "name": "ERC6372InconsistentClock",
        "type": "error"
    },
    "59171fc140fcc403c6e5785fa53a46bfd95b95ccab17163db749de3e197203f4": {
        "abi": "error ERC721EnumerableForbiddenBatchMint()",
        "compact": "ERC721EnumerableForbiddenBatchMint()",
        "hash": "59171fc140fcc403c6e5785fa53a46bfd95b95ccab17163db749de3e197203f4",
        "inputs": [],
        "name": "ERC721EnumerableForbiddenBatchMint",
        "type": "error"
    },
    "8f58e570e482ac263433e2400208dd80361afd517aecca0056606f6fa5aa1c2d": {
        "abi": "error ERC721ExceededMaxBatchMint(uint256 batchSize, uint256 maxBatch)",
        "compact": "ERC721ExceededMaxBatchMint(uint256,uint256)",
        "hash": "8f58e570e482ac263433e2400208dd80361afd517aecca0056606f6fa5aa1c2d",
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
    "1d089165ffd8fdb45fcf7f5a32f2da0c67a91b9e6e5e86801f170210e9be2cfa": {
        "abi": "error ERC721ForbiddenBatchBurn()",
        "compact": "ERC721ForbiddenBatchBurn()",
        "hash": "1d089165ffd8fdb45fcf7f5a32f2da0c67a91b9e6e5e86801f170210e9be2cfa",
        "inputs": [],
        "name": "ERC721ForbiddenBatchBurn",
        "type": "error"
    },
    "539f9062af54b92e1b8457f39cf34f30589e8356dab18c00591575bfe2da3f0f": {
        "abi": "error ERC721ForbiddenBatchMint()",
        "compact": "ERC721ForbiddenBatchMint()",
        "hash": "539f9062af54b92e1b8457f39cf34f30589e8356dab18c00591575bfe2da3f0f",
        "inputs": [],
        "name": "ERC721ForbiddenBatchMint",
        "type": "error"
    },
    "ad89505281e829a5670119df4e6992a27bd61d1dd1046ce56e49e99a900a6a9d": {
        "abi": "error ERC721ForbiddenMint()",
        "compact": "ERC721ForbiddenMint()",
        "hash": "ad89505281e829a5670119df4e6992a27bd61d1dd1046ce56e49e99a900a6a9d",
        "inputs": [],
        "name": "ERC721ForbiddenMint",
        "type": "error"
    },
    "64283d7b313c8117c125f736876fa2b4e90ea3831a4716dfdb87d2f540e26289": {
        "abi": "error ERC721IncorrectOwner(address sender, uint256 tokenId, address owner)",
        "compact": "ERC721IncorrectOwner(address,uint256,address)",
        "hash": "64283d7b313c8117c125f736876fa2b4e90ea3831a4716dfdb87d2f540e26289",
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
    "177e802f6f313bc89797ecace66d6d29ab4719cbaaacbb87367264048b1eb861": {
        "abi": "error ERC721InsufficientApproval(address operator, uint256 tokenId)",
        "compact": "ERC721InsufficientApproval(address,uint256)",
        "hash": "177e802f6f313bc89797ecace66d6d29ab4719cbaaacbb87367264048b1eb861",
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
    "a9fbf51f86b8e03595d59dc726bb10c329bb24f62589be276d8dd193ca0b69ea": {
        "abi": "error ERC721InvalidApprover(address approver)",
        "compact": "ERC721InvalidApprover(address)",
        "hash": "a9fbf51f86b8e03595d59dc726bb10c329bb24f62589be276d8dd193ca0b69ea",
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
    "5b08ba185e8f577075361f3a3555a6580a227ce22734dcc979c1aeadf894658b": {
        "abi": "error ERC721InvalidOperator(address operator)",
        "compact": "ERC721InvalidOperator(address)",
        "hash": "5b08ba185e8f577075361f3a3555a6580a227ce22734dcc979c1aeadf894658b",
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
    "89c62b6479af2e623826dcc39c5133061d35b66d72de92833401dd2fd6567480": {
        "abi": "error ERC721InvalidOwner(address owner)",
        "compact": "ERC721InvalidOwner(address)",
        "hash": "89c62b6479af2e623826dcc39c5133061d35b66d72de92833401dd2fd6567480",
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
    "64a0ae9278f805eaf991dcd18ca78756d280b7508b764ef1b255c55845c11df9": {
        "abi": "error ERC721InvalidReceiver(address receiver)",
        "compact": "ERC721InvalidReceiver(address)",
        "hash": "64a0ae9278f805eaf991dcd18ca78756d280b7508b764ef1b255c55845c11df9",
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
    "73c6ac6e10798e95d99e1f130d923eb40193ecb8d094ec3dce93292564eb3b17": {
        "abi": "error ERC721InvalidSender(address sender)",
        "compact": "ERC721InvalidSender(address)",
        "hash": "73c6ac6e10798e95d99e1f130d923eb40193ecb8d094ec3dce93292564eb3b17",
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
    "7e273289a3a9ef6670f06df7dca227856fc925e956db96980692764a8bc734d7": {
        "abi": "error ERC721NonexistentToken(uint256 tokenId)",
        "compact": "ERC721NonexistentToken(uint256)",
        "hash": "7e273289a3a9ef6670f06df7dca227856fc925e956db96980692764a8bc734d7",
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
    "a57d13dc78ab2b1f1191d9429a298559c44d02b5951a92c2376aa50074cc4509": {
        "abi": "error ERC721OutOfBoundsIndex(address owner, uint256 index)",
        "compact": "ERC721OutOfBoundsIndex(address,uint256)",
        "hash": "a57d13dc78ab2b1f1191d9429a298559c44d02b5951a92c2376aa50074cc4509",
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
    "c7d837c62e45dfa8d61baf8b61aa8079686d4c8a70d324e3a2859cad9a39ea77": {
        "abi": "error ERC721UnsupportedToken(address token)",
        "compact": "ERC721UnsupportedToken(address)",
        "hash": "c7d837c62e45dfa8d61baf8b61aa8079686d4c8a70d324e3a2859cad9a39ea77",
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
    "07bd02659643fb3b4009c814a4ce3e4d376f63b7eddca356d883a6d22aa5b1a7": {
        "abi": "function EXECUTOR_ROLE() returns (bytes32)",
        "compact": "EXECUTOR_ROLE()",
        "hash": "07bd02659643fb3b4009c814a4ce3e4d376f63b7eddca356d883a6d22aa5b1a7",
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
    "2fe3e261378e4d845a28fbf4de40e8f7c49c0677ef45cf83eb57763c285ef22d": {
        "abi": "function EXTENDED_BALLOT_TYPEHASH() returns (bytes32)",
        "compact": "EXTENDED_BALLOT_TYPEHASH()",
        "hash": "2fe3e261378e4d845a28fbf4de40e8f7c49c0677ef45cf83eb57763c285ef22d",
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
    "d93c0665d6c96d04a8f174024fc4ddd66c250604aff22bbec808de86dd3637e3": {
        "abi": "error EnforcedPause()",
        "compact": "EnforcedPause()",
        "hash": "d93c0665d6c96d04a8f174024fc4ddd66c250604aff22bbec808de86dd3637e3",
        "inputs": [],
        "name": "EnforcedPause",
        "type": "error"
    },
    "02b566865b1da2a2deb61443712fe7f812ffd7a1fce56446ff0fe3db9f3484ef": {
        "abi": "error EnumerableMapNonexistentKey(bytes32 key)",
        "compact": "EnumerableMapNonexistentKey(bytes32)",
        "hash": "02b566865b1da2a2deb61443712fe7f812ffd7a1fce56446ff0fe3db9f3484ef",
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
    "da9d4e5f101b8b9b1c5b76d0c5a9f7923571acfc02376aa076b75a8c080c956b": {
        "abi": "event EtherReleased(uint256 amount)",
        "anonymous": false,
        "compact": "EtherReleased(uint256)",
        "hash": "da9d4e5f101b8b9b1c5b76d0c5a9f7923571acfc02376aa076b75a8c080c956b",
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
    "a560e3198060a2f10670c1ec5b403077ea6ae93ca8de1c32b451dc1a943cd6e7": {
        "abi": "event ExecuteTransaction(bytes32 indexed txHash, address indexed target, uint256 value, string signature, bytes data, uint256 eta)",
        "anonymous": false,
        "compact": "ExecuteTransaction(bytes32,address,uint256,string,bytes,uint256)",
        "hash": "a560e3198060a2f10670c1ec5b403077ea6ae93ca8de1c32b451dc1a943cd6e7",
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
    "842fb24a83793558587a3dab2be7674da4a51d09c5542d6dd354e5d0ea70813c": {
        "abi": "event ExecutedForwardRequest(address indexed signer, uint256 nonce, bool success)",
        "anonymous": false,
        "compact": "ExecutedForwardRequest(address,uint256,bool)",
        "hash": "842fb24a83793558587a3dab2be7674da4a51d09c5542d6dd354e5d0ea70813c",
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
    "8dfc202bcfe9a735b559bee70674422512bc5c30f687046ae8778315fb81da44": {
        "abi": "error ExpectedPause()",
        "compact": "ExpectedPause()",
        "hash": "8dfc202bcfe9a735b559bee70674422512bc5c30f687046ae8778315fb81da44",
        "inputs": [],
        "name": "ExpectedPause",
        "type": "error"
    },
    "1425ea42df7c932537f94e8b917ea9c5931f140fb6e8098822ef05dc56222ca9": {
        "abi": "error FailedInnerCall()",
        "compact": "FailedInnerCall()",
        "hash": "1425ea42df7c932537f94e8b917ea9c5931f140fb6e8098822ef05dc56222ca9",
        "inputs": [],
        "name": "FailedInnerCall",
        "type": "error"
    },
    "c1a287e276bd61a23a8ab93e8805e9d9729fc6a7fb611ed7e3d001462fd70221": {
        "abi": "function GRACE_PERIOD() returns (uint256)",
        "compact": "GRACE_PERIOD()",
        "hash": "c1a287e276bd61a23a8ab93e8805e9d9729fc6a7fb611ed7e3d001462fd70221",
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
    "71c6af4932ed543cdb181fcbb800f4b9940a2ccceeaee5e6e141de8c50856ede": {
        "abi": "error GovernorAlreadyCastVote(address voter)",
        "compact": "GovernorAlreadyCastVote(address)",
        "hash": "71c6af4932ed543cdb181fcbb800f4b9940a2ccceeaee5e6e141de8c50856ede",
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
    "f20e7d374e58691196b2e081c7753efc94203ab3520c58efe153076e279fde0a": {
        "abi": "error GovernorAlreadyQueuedProposal(uint256 proposalId)",
        "compact": "GovernorAlreadyQueuedProposal(uint256)",
        "hash": "f20e7d374e58691196b2e081c7753efc94203ab3520c58efe153076e279fde0a",
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
    "e90a651e5fdea7022846d10b5f36994c22e1f46db4b5021aa3e26ad83b24bfd8": {
        "abi": "error GovernorDisabledDeposit()",
        "compact": "GovernorDisabledDeposit()",
        "hash": "e90a651e5fdea7022846d10b5f36994c22e1f46db4b5021aa3e26ad83b24bfd8",
        "inputs": [],
        "name": "GovernorDisabledDeposit",
        "type": "error"
    },
    "c242ee16ab08d11dbce60e744efdbd91b4e07ac4c074d993992519795a6324d0": {
        "abi": "error GovernorInsufficientProposerVotes(address proposer, uint256 votes, uint256 threshold)",
        "compact": "GovernorInsufficientProposerVotes(address,uint256,uint256)",
        "hash": "c242ee16ab08d11dbce60e744efdbd91b4e07ac4c074d993992519795a6324d0",
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
    "447b05d0c41e339e22932be48ca2091a47f3c39df25e2152ad11a8729753b2b4": {
        "abi": "error GovernorInvalidProposalLength(uint256 targets, uint256 calldatas, uint256 values)",
        "compact": "GovernorInvalidProposalLength(uint256,uint256,uint256)",
        "hash": "447b05d0c41e339e22932be48ca2091a47f3c39df25e2152ad11a8729753b2b4",
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
    "243e5445050913bb1c3de7a2f82eba0c3b0b8a55c2aacf660392fa35087a1919": {
        "abi": "error GovernorInvalidQuorumFraction(uint256 quorumNumerator, uint256 quorumDenominator)",
        "compact": "GovernorInvalidQuorumFraction(uint256,uint256)",
        "hash": "243e5445050913bb1c3de7a2f82eba0c3b0b8a55c2aacf660392fa35087a1919",
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
    "94ab6c07905fb25046d2809e4563b09690f891c9495bfe19551d602e7eddbb1b": {
        "abi": "error GovernorInvalidSignature(address voter)",
        "compact": "GovernorInvalidSignature(address)",
        "hash": "94ab6c07905fb25046d2809e4563b09690f891c9495bfe19551d602e7eddbb1b",
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
    "06b337c26289d63178b4d4ed5fd513f38a1d8832d0edd309ef07bfc9ba5caf49": {
        "abi": "error GovernorInvalidVoteType()",
        "compact": "GovernorInvalidVoteType()",
        "hash": "06b337c26289d63178b4d4ed5fd513f38a1d8832d0edd309ef07bfc9ba5caf49",
        "inputs": [],
        "name": "GovernorInvalidVoteType",
        "type": "error"
    },
    "f1cfbf057db43f9730bc42a52728d66da9151a5c6929758ee824e299f82f5689": {
        "abi": "error GovernorInvalidVotingPeriod(uint256 votingPeriod)",
        "compact": "GovernorInvalidVotingPeriod(uint256)",
        "hash": "f1cfbf057db43f9730bc42a52728d66da9151a5c6929758ee824e299f82f5689",
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
    "e547fc115471353baf73ce4265f3506cf70b639546a4bbdcb9d8d967014b5f48": {
        "abi": "error GovernorLockedIgnore()",
        "compact": "GovernorLockedIgnore()",
        "hash": "e547fc115471353baf73ce4265f3506cf70b639546a4bbdcb9d8d967014b5f48",
        "inputs": [],
        "name": "GovernorLockedIgnore",
        "type": "error"
    },
    "18ee8beff21b5331041a643f51d9bbc015f83beb2503b49c39410000d7c6a53d": {
        "abi": "error GovernorMismatchedNonce(uint256 proposalId, uint256 expectedNonce, uint256 actualNonce)",
        "compact": "GovernorMismatchedNonce(uint256,uint256,uint256)",
        "hash": "18ee8beff21b5331041a643f51d9bbc015f83beb2503b49c39410000d7c6a53d",
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
    "6ad06075316ea071ccae80931b756598be5aad3433b2c47b38607a8eec344a70": {
        "abi": "error GovernorNonexistentProposal(uint256 proposalId)",
        "compact": "GovernorNonexistentProposal(uint256)",
        "hash": "6ad06075316ea071ccae80931b756598be5aad3433b2c47b38607a8eec344a70",
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
    "d5ddb8255ec3d5fb4ee2dd5d919eb1db6a2f1e4420bb74c3741830500cfb6a4f": {
        "abi": "error GovernorNotQueuedProposal(uint256 proposalId)",
        "compact": "GovernorNotQueuedProposal(uint256)",
        "hash": "d5ddb8255ec3d5fb4ee2dd5d919eb1db6a2f1e4420bb74c3741830500cfb6a4f",
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
    "47096e4749c231af946d5efc74a7fd817371e756031e98787f18bf70aaa7753c": {
        "abi": "error GovernorOnlyExecutor(address account)",
        "compact": "GovernorOnlyExecutor(address)",
        "hash": "47096e4749c231af946d5efc74a7fd817371e756031e98787f18bf70aaa7753c",
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
    "233d98e30d7c7bc1bce41338e192d25302ac64793ba2c92e37474004d22d5701": {
        "abi": "error GovernorOnlyProposer(address account)",
        "compact": "GovernorOnlyProposer(address)",
        "hash": "233d98e30d7c7bc1bce41338e192d25302ac64793ba2c92e37474004d22d5701",
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
    "90884a46490684db0a73766419939e5ace793ae0f80195a286e159115c6628a0": {
        "abi": "error GovernorQueueNotImplemented()",
        "compact": "GovernorQueueNotImplemented()",
        "hash": "90884a46490684db0a73766419939e5ace793ae0f80195a286e159115c6628a0",
        "inputs": [],
        "name": "GovernorQueueNotImplemented",
        "type": "error"
    },
    "d9b395579c6f1566cc7608394c53136f366f7fa719d01a941bee075ef8c704f4": {
        "abi": "error GovernorRestrictedProposer(address proposer)",
        "compact": "GovernorRestrictedProposer(address)",
        "hash": "d9b395579c6f1566cc7608394c53136f366f7fa719d01a941bee075ef8c704f4",
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
    "31b75e4d4f8317c390cf01cbc79dfe4f67ce2d27f65a099074fdc67f00f76908": {
        "abi": "error GovernorUnexpectedProposalState(uint256 proposalId, enum IGovernor.ProposalState current, bytes32 expectedStates)",
        "compact": "GovernorUnexpectedProposalState(uint256,uint8,bytes32)",
        "hash": "31b75e4d4f8317c390cf01cbc79dfe4f67ce2d27f65a099074fdc67f00f76908",
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
    "fe589f3fdc650a8b27be5d02469d336a2efcfd4cf17fd87e497c9395b6bb1d94": {
        "abi": "error GovernorUnmetDelay(uint256 proposalId, uint256 neededTimestamp)",
        "compact": "GovernorUnmetDelay(uint256,uint256)",
        "hash": "fe589f3fdc650a8b27be5d02469d336a2efcfd4cf17fd87e497c9395b6bb1d94",
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
    "c7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2": {
        "abi": "event Initialized(uint64 version)",
        "anonymous": false,
        "compact": "Initialized(uint64)",
        "hash": "c7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2",
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
    "93baa6efbd2244243bfee6ce4cfdd1d04fc4c0e9a786abd3a41313bd352db153": {
        "abi": "event InterfaceImplementerSet(address indexed account, bytes32 indexed interfaceHash, address indexed implementer)",
        "anonymous": false,
        "compact": "InterfaceImplementerSet(address,bytes32,address)",
        "hash": "93baa6efbd2244243bfee6ce4cfdd1d04fc4c0e9a786abd3a41313bd352db153",
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
    "752d88c0de02638abf10e8e31861e4c68dc1f3a1e7d840e580683f2c282bfc7a": {
        "abi": "error InvalidAccountNonce(address account, uint256 currentNonce)",
        "compact": "InvalidAccountNonce(address,uint256)",
        "hash": "752d88c0de02638abf10e8e31861e4c68dc1f3a1e7d840e580683f2c282bfc7a",
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
    "f92ee8a957075833165f68c320933b1a1294aafc84ee6e0dd3fb178008f9aaf5": {
        "abi": "error InvalidInitialization()",
        "compact": "InvalidInitialization()",
        "hash": "f92ee8a957075833165f68c320933b1a1294aafc84ee6e0dd3fb178008f9aaf5",
        "inputs": [],
        "name": "InvalidInitialization",
        "type": "error"
    },
    "b3512b0c6163e5f0bafab72bb631b9d58cd7a731b082f910338aa21c83d5c274": {
        "abi": "error InvalidShortString()",
        "compact": "InvalidShortString()",
        "hash": "b3512b0c6163e5f0bafab72bb631b9d58cd7a731b082f910338aa21c83d5c274",
        "inputs": [],
        "name": "InvalidShortString",
        "type": "error"
    },
    "7ca4ac117ed3cdce75c1161d8207c440389b1a15d69d096831664657c07dafc2": {
        "abi": "event LateQuorumVoteExtensionSet(uint64 oldVoteExtension, uint64 newVoteExtension)",
        "anonymous": false,
        "compact": "LateQuorumVoteExtensionSet(uint64,uint64)",
        "hash": "7ca4ac117ed3cdce75c1161d8207c440389b1a15d69d096831664657c07dafc2",
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
    "7d645fabaff5740e46210a2e8cc75b14af7b700441530a0249b75ba99941ba81": {
        "abi": "function MAXIMUM_DELAY() returns (uint256)",
        "compact": "MAXIMUM_DELAY()",
        "hash": "7d645fabaff5740e46210a2e8cc75b14af7b700441530a0249b75ba99941ba81",
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
    "b1b43ae599f45fc6a89dbeeb900b018b91c59fa22304d107d427b51dc4cbe763": {
        "abi": "function MINIMUM_DELAY() returns (uint256)",
        "compact": "MINIMUM_DELAY()",
        "hash": "b1b43ae599f45fc6a89dbeeb900b018b91c59fa22304d107d427b51dc4cbe763",
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
    "605c2dbf762e5f7d60a546d42e7205dcb1b011ebc62a61736a57c9089d3a4350": {
        "abi": "event ManagerChanged(address indexed account, address indexed newManager)",
        "anonymous": false,
        "compact": "ManagerChanged(address,address)",
        "hash": "605c2dbf762e5f7d60a546d42e7205dcb1b011ebc62a61736a57c9089d3a4350",
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
    "227bc15363d4cef823f97dfe7ee13e9d7fd5d6baf94ddad1b9023fc7b1b91154": {
        "abi": "error MathOverflowedMulDiv()",
        "compact": "MathOverflowedMulDiv()",
        "hash": "227bc15363d4cef823f97dfe7ee13e9d7fd5d6baf94ddad1b9023fc7b1b91154",
        "inputs": [],
        "name": "MathOverflowedMulDiv",
        "type": "error"
    },
    "351404920163d662c9e55a2ededa2a037e643758bbfddef8b612fa4d17ed11ea": {
        "abi": "error MerkleProofInvalidMultiproof()",
        "compact": "MerkleProofInvalidMultiproof()",
        "hash": "351404920163d662c9e55a2ededa2a037e643758bbfddef8b612fa4d17ed11ea",
        "inputs": [],
        "name": "MerkleProofInvalidMultiproof",
        "type": "error"
    },
    "f8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7": {
        "abi": "event MetadataUpdate(uint256 _tokenId)",
        "anonymous": false,
        "compact": "MetadataUpdate(uint256)",
        "hash": "f8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7",
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
    "11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5": {
        "abi": "event MinDelayChange(uint256 oldDuration, uint256 newDuration)",
        "anonymous": false,
        "compact": "MinDelayChange(uint256,uint256)",
        "hash": "11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5",
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
    "2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d": {
        "abi": "event Minted(address indexed operator, address indexed to, uint256 amount, bytes data, bytes operatorData)",
        "anonymous": false,
        "compact": "Minted(address,address,uint256,bytes,bytes)",
        "hash": "2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d",
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
    "71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c": {
        "abi": "event NewAdmin(address indexed newAdmin)",
        "anonymous": false,
        "compact": "NewAdmin(address)",
        "hash": "71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c",
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
    "948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c": {
        "abi": "event NewDelay(uint256 indexed newDelay)",
        "anonymous": false,
        "compact": "NewDelay(uint256)",
        "hash": "948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c",
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
    "69d78e38a01985fbb1462961809b4b2d65531bc93b2b94037f3334b82ca4a756": {
        "abi": "event NewPendingAdmin(address indexed newPendingAdmin)",
        "anonymous": false,
        "compact": "NewPendingAdmin(address)",
        "hash": "69d78e38a01985fbb1462961809b4b2d65531bc93b2b94037f3334b82ca4a756",
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
    "d7e6bcf8597daa127dc9f0048d2f08d5ef140a2cb659feabd700beff1f7a8302": {
        "abi": "error NotInitializing()",
        "compact": "NotInitializing()",
        "hash": "d7e6bcf8597daa127dc9f0048d2f08d5ef140a2cb659feabd700beff1f7a8302",
        "inputs": [],
        "name": "NotInitializing",
        "type": "error"
    },
    "bd9ac67a6e2f6463b80927326310338bcbb4bdb7936ce1365ea3e01067e7b9f7": {
        "abi": "event OperationCanceled(bytes32 indexed operationId, uint32 indexed nonce)",
        "anonymous": false,
        "compact": "OperationCanceled(bytes32,uint32)",
        "hash": "bd9ac67a6e2f6463b80927326310338bcbb4bdb7936ce1365ea3e01067e7b9f7",
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
    "76a2a46953689d4861a5d3f6ed883ad7e6af674a21f8e162707159fc9dde614d": {
        "abi": "event OperationExecuted(bytes32 indexed operationId, uint32 indexed nonce)",
        "anonymous": false,
        "compact": "OperationExecuted(bytes32,uint32)",
        "hash": "76a2a46953689d4861a5d3f6ed883ad7e6af674a21f8e162707159fc9dde614d",
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
    "82a2da5dee54ea8021c6545b4444620291e07ee83be6dd57edb175062715f3b4": {
        "abi": "event OperationScheduled(bytes32 indexed operationId, uint32 indexed nonce, uint48 schedule, address caller, address target, bytes data)",
        "anonymous": false,
        "compact": "OperationScheduled(bytes32,uint32,uint48,address,address,bytes)",
        "hash": "82a2da5dee54ea8021c6545b4444620291e07ee83be6dd57edb175062715f3b4",
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
    "1e4fbdf7f3ef8bcaa855599e3abf48b232380f183f08f6f813d9ffa5bd585188": {
        "abi": "error OwnableInvalidOwner(address owner)",
        "compact": "OwnableInvalidOwner(address)",
        "hash": "1e4fbdf7f3ef8bcaa855599e3abf48b232380f183f08f6f813d9ffa5bd585188",
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
    "118cdaa7a341953d1887a2245fd6665d741c67c8c50581daa59e1d03373fa188": {
        "abi": "error OwnableUnauthorizedAccount(address account)",
        "compact": "OwnableUnauthorizedAccount(address)",
        "hash": "118cdaa7a341953d1887a2245fd6665d741c67c8c50581daa59e1d03373fa188",
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
    "38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e22700": {
        "abi": "event OwnershipTransferStarted(address indexed previousOwner, address indexed newOwner)",
        "anonymous": false,
        "compact": "OwnershipTransferStarted(address,address)",
        "hash": "38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e22700",
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
    "8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
        "abi": "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
        "anonymous": false,
        "compact": "OwnershipTransferred(address,address)",
        "hash": "8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
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
    "8f61f4f5c0ff153e826dfa7e5493e5dbf59eb01fa8ebc1f6eaa2b4295adbfb2c": {
        "abi": "function PROPOSER_ROLE() returns (bytes32)",
        "compact": "PROPOSER_ROLE()",
        "hash": "8f61f4f5c0ff153e826dfa7e5493e5dbf59eb01fa8ebc1f6eaa2b4295adbfb2c",
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
    "3ca7c02a752a46a5b01175bd19e64092aa7a2419a29c3fe13c4962c654815e3e": {
        "abi": "function PUBLIC_ROLE() returns (uint64)",
        "compact": "PUBLIC_ROLE()",
        "hash": "3ca7c02a752a46a5b01175bd19e64092aa7a2419a29c3fe13c4962c654815e3e",
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
    "62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258": {
        "abi": "event Paused(address account)",
        "anonymous": false,
        "compact": "Paused(address)",
        "hash": "62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258",
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
    "789cf55be980739dad1d0699b93b58e806b51c9d96619bfa8fe0a28abaa7b30c": {
        "abi": "event ProposalCanceled(uint256 proposalId)",
        "anonymous": false,
        "compact": "ProposalCanceled(uint256)",
        "hash": "789cf55be980739dad1d0699b93b58e806b51c9d96619bfa8fe0a28abaa7b30c",
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
    "7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e0": {
        "abi": "event ProposalCreated(uint256 proposalId, address proposer, address[] targets, uint256[] values, string[] signatures, bytes[] calldatas, uint256 voteStart, uint256 voteEnd, string description)",
        "anonymous": false,
        "compact": "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)",
        "hash": "7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e0",
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
    "712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f": {
        "abi": "event ProposalExecuted(uint256 proposalId)",
        "anonymous": false,
        "compact": "ProposalExecuted(uint256)",
        "hash": "712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f",
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
    "541f725fb9f7c98a30cc9c0ff32fbb14358cd7159c847a3aa20a2bdc442ba511": {
        "abi": "event ProposalExtended(uint256 indexed proposalId, uint64 extendedDeadline)",
        "anonymous": false,
        "compact": "ProposalExtended(uint256,uint64)",
        "hash": "541f725fb9f7c98a30cc9c0ff32fbb14358cd7159c847a3aa20a2bdc442ba511",
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
    "9a2e42fd6722813d69113e7d0079d3d940171428df7373df9c7f7617cfda2892": {
        "abi": "event ProposalQueued(uint256 proposalId, uint256 etaSeconds)",
        "anonymous": false,
        "compact": "ProposalQueued(uint256,uint256)",
        "hash": "9a2e42fd6722813d69113e7d0079d3d940171428df7373df9c7f7617cfda2892",
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
    "ccb45da8d5717e6c4544694297c4ba5cf151d455c9bb0ed4fc7a38411bc05461": {
        "abi": "event ProposalThresholdSet(uint256 oldProposalThreshold, uint256 newProposalThreshold)",
        "anonymous": false,
        "compact": "ProposalThresholdSet(uint256,uint256)",
        "hash": "ccb45da8d5717e6c4544694297c4ba5cf151d455c9bb0ed4fc7a38411bc05461",
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
    "d2b576ece55c2a2cd529989c46cf677bc4504444e955201cfc9e82176ead8c00": {
        "abi": "error ProxyDeniedAdminAccess()",
        "compact": "ProxyDeniedAdminAccess()",
        "hash": "d2b576ece55c2a2cd529989c46cf677bc4504444e955201cfc9e82176ead8c00",
        "inputs": [],
        "name": "ProxyDeniedAdminAccess",
        "type": "error"
    },
    "75e52f4f0c5412c0ad4722576bc22ab70833a60e80272537e05cbcd06f604bf6": {
        "abi": "error QueueEmpty()",
        "compact": "QueueEmpty()",
        "hash": "75e52f4f0c5412c0ad4722576bc22ab70833a60e80272537e05cbcd06f604bf6",
        "inputs": [],
        "name": "QueueEmpty",
        "type": "error"
    },
    "8acb5f270eb71ab6efae9985a490313ae8d1c55a4a6188614061b9bb39dd3625": {
        "abi": "error QueueFull()",
        "compact": "QueueFull()",
        "hash": "8acb5f270eb71ab6efae9985a490313ae8d1c55a4a6188614061b9bb39dd3625",
        "inputs": [],
        "name": "QueueFull",
        "type": "error"
    },
    "580821e77776a91a2d2c2610147da43f69cc5839a64dfb04f95ed278d5b67597": {
        "abi": "error QueueOutOfBounds()",
        "compact": "QueueOutOfBounds()",
        "hash": "580821e77776a91a2d2c2610147da43f69cc5839a64dfb04f95ed278d5b67597",
        "inputs": [],
        "name": "QueueOutOfBounds",
        "type": "error"
    },
    "76e2796dc3a81d57b0e8504b647febcbeeb5f4af818e164f11eef8131a6a763f": {
        "abi": "event QueueTransaction(bytes32 indexed txHash, address indexed target, uint256 value, string signature, bytes data, uint256 eta)",
        "anonymous": false,
        "compact": "QueueTransaction(bytes32,address,uint256,string,bytes,uint256)",
        "hash": "76e2796dc3a81d57b0e8504b647febcbeeb5f4af818e164f11eef8131a6a763f",
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
    "0553476bf02ef2726e8ce5ced78d63e26e602e4a2257b1f559418e24b4633997": {
        "abi": "event QuorumNumeratorUpdated(uint256 oldQuorumNumerator, uint256 newQuorumNumerator)",
        "anonymous": false,
        "compact": "QuorumNumeratorUpdated(uint256,uint256)",
        "hash": "0553476bf02ef2726e8ce5ced78d63e26e602e4a2257b1f559418e24b4633997",
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
    "3ee5aeb571de7fc460830b4d0017439a1ca56fb0bc39062227ade4fe4a24c1ca": {
        "abi": "error ReentrancyGuardReentrantCall()",
        "compact": "ReentrancyGuardReentrantCall()",
        "hash": "3ee5aeb571de7fc460830b4d0017439a1ca56fb0bc39062227ade4fe4a24c1ca",
        "inputs": [],
        "name": "ReentrancyGuardReentrantCall",
        "type": "error"
    },
    "50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa1": {
        "abi": "event RevokedOperator(address indexed operator, address indexed tokenHolder)",
        "anonymous": false,
        "compact": "RevokedOperator(address,address)",
        "hash": "50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa1",
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
    "bd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff": {
        "abi": "event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)",
        "anonymous": false,
        "compact": "RoleAdminChanged(bytes32,bytes32,bytes32)",
        "hash": "bd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff",
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
    "1fd6dd7631312dfac2205b52913f99de03b4d7e381d5d27d3dbfe0713e6e6340": {
        "abi": "event RoleAdminChanged(uint64 indexed roleId, uint64 indexed admin)",
        "anonymous": false,
        "compact": "RoleAdminChanged(uint64,uint64)",
        "hash": "1fd6dd7631312dfac2205b52913f99de03b4d7e381d5d27d3dbfe0713e6e6340",
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
    "feb69018ee8b8fd50ea86348f1267d07673379f72cffdeccec63853ee8ce8b48": {
        "abi": "event RoleGrantDelayChanged(uint64 indexed roleId, uint32 delay, uint48 since)",
        "anonymous": false,
        "compact": "RoleGrantDelayChanged(uint64,uint32,uint48)",
        "hash": "feb69018ee8b8fd50ea86348f1267d07673379f72cffdeccec63853ee8ce8b48",
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
    "2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d": {
        "abi": "event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)",
        "anonymous": false,
        "compact": "RoleGranted(bytes32,address,address)",
        "hash": "2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d",
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
    "f98448b987f1428e0e230e1f3c6e2ce15b5693eaf31827fbd0b1ec4b424ae7cf": {
        "abi": "event RoleGranted(uint64 indexed roleId, address indexed account, uint32 delay, uint48 since, bool newMember)",
        "anonymous": false,
        "compact": "RoleGranted(uint64,address,uint32,uint48,bool)",
        "hash": "f98448b987f1428e0e230e1f3c6e2ce15b5693eaf31827fbd0b1ec4b424ae7cf",
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
    "7a8059630b897b5de4c08ade69f8b90c3ead1f8596d62d10b6c4d14a0afb4ae2": {
        "abi": "event RoleGuardianChanged(uint64 indexed roleId, uint64 indexed guardian)",
        "anonymous": false,
        "compact": "RoleGuardianChanged(uint64,uint64)",
        "hash": "7a8059630b897b5de4c08ade69f8b90c3ead1f8596d62d10b6c4d14a0afb4ae2",
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
    "1256f5b5ecb89caec12db449738f2fbcd1ba5806cf38f35413f4e5c15bf6a450": {
        "abi": "event RoleLabel(uint64 indexed roleId, string label)",
        "anonymous": false,
        "compact": "RoleLabel(uint64,string)",
        "hash": "1256f5b5ecb89caec12db449738f2fbcd1ba5806cf38f35413f4e5c15bf6a450",
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
    "f6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b": {
        "abi": "event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)",
        "anonymous": false,
        "compact": "RoleRevoked(bytes32,address,address)",
        "hash": "f6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b",
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
    "f229baa593af28c41b1d16b748cd7688f0c83aaf92d4be41c44005defe84c166": {
        "abi": "event RoleRevoked(uint64 indexed roleId, address indexed account)",
        "anonymous": false,
        "compact": "RoleRevoked(uint64,address)",
        "hash": "f229baa593af28c41b1d16b748cd7688f0c83aaf92d4be41c44005defe84c166",
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
    "327269a7f29c3c5436f42eeed1c1adf0d4d525f36360483f4e83ab79e98f9089": {
        "abi": "error SafeCastOverflowedIntDowncast(uint8 bits, int256 value)",
        "compact": "SafeCastOverflowedIntDowncast(uint8,int256)",
        "hash": "327269a7f29c3c5436f42eeed1c1adf0d4d525f36360483f4e83ab79e98f9089",
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
    "a8ce4432b175c373e5f41aba830358e5361584f628450fd436c066323ad91ac2": {
        "abi": "error SafeCastOverflowedIntToUint(int256 value)",
        "compact": "SafeCastOverflowedIntToUint(int256)",
        "hash": "a8ce4432b175c373e5f41aba830358e5361584f628450fd436c066323ad91ac2",
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
    "6dfcc6503a32754ce7a89698e18201fc5294fd4aad43edefee786f88423b1a12": {
        "abi": "error SafeCastOverflowedUintDowncast(uint8 bits, uint256 value)",
        "compact": "SafeCastOverflowedUintDowncast(uint8,uint256)",
        "hash": "6dfcc6503a32754ce7a89698e18201fc5294fd4aad43edefee786f88423b1a12",
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
    "24775e0629ae69d78c11bae050651b81820407f300ff750ff2be51e4ce75c37f": {
        "abi": "error SafeCastOverflowedUintToInt(uint256 value)",
        "compact": "SafeCastOverflowedUintToInt(uint256)",
        "hash": "24775e0629ae69d78c11bae050651b81820407f300ff750ff2be51e4ce75c37f",
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
    "e570110f6442b67a6af46cc6256768fdeea752b9a2bf133dfca3339c55404187": {
        "abi": "error SafeERC20FailedDecreaseAllowance(address spender, uint256 currentAllowance, uint256 requestedDecrease)",
        "compact": "SafeERC20FailedDecreaseAllowance(address,uint256,uint256)",
        "hash": "e570110f6442b67a6af46cc6256768fdeea752b9a2bf133dfca3339c55404187",
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
    "5274afe73c98b4749fc91ffae6b7b574e7842cb2144a159e9377a5f20b32edf9": {
        "abi": "error SafeERC20FailedOperation(address token)",
        "compact": "SafeERC20FailedOperation(address)",
        "hash": "5274afe73c98b4749fc91ffae6b7b574e7842cb2144a159e9377a5f20b32edf9",
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
    "06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987": {
        "abi": "event Sent(address indexed operator, address indexed from, address indexed to, uint256 amount, bytes data, bytes operatorData)",
        "anonymous": false,
        "compact": "Sent(address,address,address,uint256,bytes,bytes)",
        "hash": "06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987",
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
    "305a27a93f8e33b7392df0a0f91d6fc63847395853c45991eec52dbf24d72381": {
        "abi": "error StringTooLong(string str)",
        "compact": "StringTooLong(string)",
        "hash": "305a27a93f8e33b7392df0a0f91d6fc63847395853c45991eec52dbf24d72381",
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
    "e22e27eb9593f9947dc34771120a3349dd201c662753f0b60502fc1d8e422233": {
        "abi": "error StringsInsufficientHexLength(uint256 value, uint256 length)",
        "compact": "StringsInsufficientHexLength(uint256,uint256)",
        "hash": "e22e27eb9593f9947dc34771120a3349dd201c662753f0b60502fc1d8e422233",
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
    "a56b76017453f399ec2327ba00375dbfb1fd070ff854341ad6191e6a2e2de19c": {
        "abi": "event TargetAdminDelayUpdated(address indexed target, uint32 delay, uint48 since)",
        "anonymous": false,
        "compact": "TargetAdminDelayUpdated(address,uint32,uint48)",
        "hash": "a56b76017453f399ec2327ba00375dbfb1fd070ff854341ad6191e6a2e2de19c",
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
    "90d4e7bb7e5d933792b3562e1741306f8be94837e1348dacef9b6f1df56eb138": {
        "abi": "event TargetClosed(address indexed target, bool closed)",
        "anonymous": false,
        "compact": "TargetClosed(address,bool)",
        "hash": "90d4e7bb7e5d933792b3562e1741306f8be94837e1348dacef9b6f1df56eb138",
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
    "9ea6790c7dadfd01c9f8b9762b3682607af2c7e79e05a9f9fdf5580dde949151": {
        "abi": "event TargetFunctionRoleUpdated(address indexed target, bytes4 selector, uint64 indexed roleId)",
        "anonymous": false,
        "compact": "TargetFunctionRoleUpdated(address,bytes4,uint64)",
        "hash": "9ea6790c7dadfd01c9f8b9762b3682607af2c7e79e05a9f9fdf5580dde949151",
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
    "08f74ea46ef7894f65eabfb5e6e695de773a000b47c529ab559178069b226401": {
        "abi": "event TimelockChange(address oldTimelock, address newTimelock)",
        "anonymous": false,
        "compact": "TimelockChange(address,address)",
        "hash": "08f74ea46ef7894f65eabfb5e6e695de773a000b47c529ab559178069b226401",
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
    "543366097fc46a718a4890a59e5216cbbc872f61973a9e2a6666ecccaa1a07ca": {
        "abi": "error TimelockInsufficientDelay(uint256 delay, uint256 minDelay)",
        "compact": "TimelockInsufficientDelay(uint256,uint256)",
        "hash": "543366097fc46a718a4890a59e5216cbbc872f61973a9e2a6666ecccaa1a07ca",
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
    "ffb0321166292613ddbe36e2eb9b9b1e8877aa314505f6d35f0f4ae660e8ada3": {
        "abi": "error TimelockInvalidOperationLength(uint256 targets, uint256 payloads, uint256 values)",
        "compact": "TimelockInvalidOperationLength(uint256,uint256,uint256)",
        "hash": "ffb0321166292613ddbe36e2eb9b9b1e8877aa314505f6d35f0f4ae660e8ada3",
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
    "e2850c5900ceb2d1b367e63ffd96510279f191862fece2dde12a1b1bce580ebd": {
        "abi": "error TimelockUnauthorizedCaller(address caller)",
        "compact": "TimelockUnauthorizedCaller(address)",
        "hash": "e2850c5900ceb2d1b367e63ffd96510279f191862fece2dde12a1b1bce580ebd",
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
    "90a9a618cfd84aabd2505bb50bbc6c95924a5d4f10d2bf500768fcbf91f51cab": {
        "abi": "error TimelockUnexecutedPredecessor(bytes32 predecessorId)",
        "compact": "TimelockUnexecutedPredecessor(bytes32)",
        "hash": "90a9a618cfd84aabd2505bb50bbc6c95924a5d4f10d2bf500768fcbf91f51cab",
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
    "5ead8eb51d1c1b7ef2eb1ef3ec2f009cfba25e924d04ccc853f25803ea40b489": {
        "abi": "error TimelockUnexpectedOperationState(bytes32 operationId, bytes32 expectedStates)",
        "compact": "TimelockUnexpectedOperationState(bytes32,bytes32)",
        "hash": "5ead8eb51d1c1b7ef2eb1ef3ec2f009cfba25e924d04ccc853f25803ea40b489",
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
    "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
        "abi": "event Transfer(address indexed from, address indexed to, uint256 value)",
        "anonymous": false,
        "compact": "Transfer(address,address,uint256)",
        "hash": "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
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
    "4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb": {
        "abi": "event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values)",
        "anonymous": false,
        "compact": "TransferBatch(address,address,address,uint256[],uint256[])",
        "hash": "4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb",
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
    "c3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62": {
        "abi": "event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)",
        "anonymous": false,
        "compact": "TransferSingle(address,address,address,uint256,uint256)",
        "hash": "c3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
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
    "ad3cb1cc5c2df3b903ea43f30f77a80ecfeefbed7932a4a8e68c92af99e41dfd": {
        "abi": "function UPGRADE_INTERFACE_VERSION() returns (string)",
        "compact": "UPGRADE_INTERFACE_VERSION()",
        "hash": "ad3cb1cc5c2df3b903ea43f30f77a80ecfeefbed7932a4a8e68c92af99e41dfd",
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
    "6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b": {
        "abi": "event URI(string value, uint256 indexed id)",
        "anonymous": false,
        "compact": "URI(string,uint256)",
        "hash": "6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b",
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
    "e07c8dba242a06571ac65fe4bbe20522c9fb111cb33599b799ff8039c1ed18f4": {
        "abi": "error UUPSUnauthorizedCallContext()",
        "compact": "UUPSUnauthorizedCallContext()",
        "hash": "e07c8dba242a06571ac65fe4bbe20522c9fb111cb33599b799ff8039c1ed18f4",
        "inputs": [],
        "name": "UUPSUnauthorizedCallContext",
        "type": "error"
    },
    "aa1d49a4c084bfa9aeeee2a0be65267a7f19ba7e1476b114dac513d2c14cb563": {
        "abi": "error UUPSUnsupportedProxiableUUID(bytes32 slot)",
        "compact": "UUPSUnsupportedProxiableUUID(bytes32)",
        "hash": "aa1d49a4c084bfa9aeeee2a0be65267a7f19ba7e1476b114dac513d2c14cb563",
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
    "5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa": {
        "abi": "event Unpaused(address account)",
        "anonymous": false,
        "compact": "Unpaused(address)",
        "hash": "5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa",
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
    "bc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b": {
        "abi": "event Upgraded(address indexed implementation)",
        "anonymous": false,
        "compact": "Upgraded(address)",
        "hash": "bc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b",
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
    "b8e138887d0aa13bab447e82de9d5c1777041ecd21ca36ba824ff1e6c07ddda4": {
        "abi": "event VoteCast(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason)",
        "anonymous": false,
        "compact": "VoteCast(address,uint256,uint8,uint256,string)",
        "hash": "b8e138887d0aa13bab447e82de9d5c1777041ecd21ca36ba824ff1e6c07ddda4",
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
    "e2babfbac5889a709b63bb7f598b324e08bc5a4fb9ec647fb3cbc9ec07eb8712": {
        "abi": "event VoteCastWithParams(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason, bytes params)",
        "anonymous": false,
        "compact": "VoteCastWithParams(address,uint256,uint8,uint256,string,bytes)",
        "hash": "e2babfbac5889a709b63bb7f598b324e08bc5a4fb9ec647fb3cbc9ec07eb8712",
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
    "4683af0ecae671986a1b991272ba6e7bcb633f179b33ccfb3beb636962b1efde": {
        "abi": "error VotesExpiredSignature(uint256 expiry)",
        "compact": "VotesExpiredSignature(uint256)",
        "hash": "4683af0ecae671986a1b991272ba6e7bcb633f179b33ccfb3beb636962b1efde",
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
    "c565b045403dc03c2eea82b81a0465edad9e2e7fc4d97e11421c209da93d7a93": {
        "abi": "event VotingDelaySet(uint256 oldVotingDelay, uint256 newVotingDelay)",
        "anonymous": false,
        "compact": "VotingDelaySet(uint256,uint256)",
        "hash": "c565b045403dc03c2eea82b81a0465edad9e2e7fc4d97e11421c209da93d7a93",
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
    "7e3f7f0708a84de9203036abaa450dccc85ad5ff52f78c170f3edb55cf5e8828": {
        "abi": "event VotingPeriodSet(uint256 oldVotingPeriod, uint256 newVotingPeriod)",
        "anonymous": false,
        "compact": "VotingPeriodSet(uint256,uint256)",
        "hash": "7e3f7f0708a84de9203036abaa450dccc85ad5ff52f78c170f3edb55cf5e8828",
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
    "fbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db": {
        "abi": "event Withdraw(address indexed sender, address indexed receiver, address indexed owner, uint256 assets, uint256 shares)",
        "anonymous": false,
        "compact": "Withdraw(address,address,address,uint256,uint256)",
        "hash": "fbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db",
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
    "b9a619615b30d7fdc8de089082ccfd68ac895d1badd43b3daaae0d82760c6da0": {
        "abi": "function __acceptAdmin()",
        "compact": "__acceptAdmin()",
        "hash": "b9a619615b30d7fdc8de089082ccfd68ac895d1badd43b3daaae0d82760c6da0",
        "inputs": [],
        "name": "__acceptAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "0e18b681b0844e0279b0fb466853e600ba5f6314531f39f611ef2f816f3fcbf6": {
        "abi": "function acceptAdmin()",
        "compact": "acceptAdmin()",
        "hash": "0e18b681b0844e0279b0fb466853e600ba5f6314531f39f611ef2f816f3fcbf6",
        "inputs": [],
        "name": "acceptAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "cefc14296c3e78fbeac43bee8f9f43ba37eb6ea27e8e8cb22c4e95c0dd29f090": {
        "abi": "function acceptDefaultAdminTransfer()",
        "compact": "acceptDefaultAdminTransfer()",
        "hash": "cefc14296c3e78fbeac43bee8f9f43ba37eb6ea27e8e8cb22c4e95c0dd29f090",
        "inputs": [],
        "name": "acceptDefaultAdminTransfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "79ba5097e5519a381a52113cdcc59540d13f73fd9d26abc0453484a096cc96f2": {
        "abi": "function acceptOwnership()",
        "compact": "acceptOwnership()",
        "hash": "79ba5097e5519a381a52113cdcc59540d13f73fd9d26abc0453484a096cc96f2",
        "inputs": [],
        "name": "acceptOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "fdcb60685640f93403b5667aa85d381520a4b928efdfc1dd693847fdef700edd": {
        "abi": "function accessManager() returns (contract IAccessManager)",
        "compact": "accessManager()",
        "hash": "fdcb60685640f93403b5667aa85d381520a4b928efdfc1dd693847fdef700edd",
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
    "f851a44064d54ebc488774050c771bacc14f01dd7456abacb48978dba9cd92a4": {
        "abi": "function admin() returns (address)",
        "compact": "admin()",
        "hash": "f851a44064d54ebc488774050c771bacc14f01dd7456abacb48978dba9cd92a4",
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
    "dd62ed3e90e97b3d417db9c0c7522647811bafca5afc6694f143588d255fdfb4": {
        "abi": "function allowance(address owner, address spender) returns (uint256)",
        "compact": "allowance(address,address)",
        "hash": "dd62ed3e90e97b3d417db9c0c7522647811bafca5afc6694f143588d255fdfb4",
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
    "095ea7b334ae44009aa867bfb386f5c3b4b443ac6f0ee573fa91c4608fbadfba": {
        "abi": "function approve(address spender, uint256 value) returns (bool)",
        "compact": "approve(address,uint256)",
        "hash": "095ea7b334ae44009aa867bfb386f5c3b4b443ac6f0ee573fa91c4608fbadfba",
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
    "3177029fdd2b36d90f4971843fd2ce05eec4f1edce4ed3a3a3feb2aec8e1c631": {
        "abi": "function approveAndCall(address spender, uint256 amount) returns (bool)",
        "compact": "approveAndCall(address,uint256)",
        "hash": "3177029fdd2b36d90f4971843fd2ce05eec4f1edce4ed3a3a3feb2aec8e1c631",
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
    "cae9ca5133009d821214ac8231b3d170f22d822ee165adb631578070b6316fc9": {
        "abi": "function approveAndCall(address spender, uint256 amount, bytes data) returns (bool)",
        "compact": "approveAndCall(address,uint256,bytes)",
        "hash": "cae9ca5133009d821214ac8231b3d170f22d822ee165adb631578070b6316fc9",
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
    "38d52e0f1dbe7a70d1f1bbce52487d111fd5a226368cd8ae0e1fc641c0299139": {
        "abi": "function asset() returns (address assetTokenAddress)",
        "compact": "asset()",
        "hash": "38d52e0f1dbe7a70d1f1bbce52487d111fd5a226368cd8ae0e1fc641c0299139",
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
    "bf7e214f31a3f38fe9f4a469084b43f7ba2b08baeee33415b5739f90405e315f": {
        "abi": "function authority() returns (address)",
        "compact": "authority()",
        "hash": "bf7e214f31a3f38fe9f4a469084b43f7ba2b08baeee33415b5739f90405e315f",
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
    "959b8c3fa5f1ac78a7061180563d67096686864ae5178e2a1c5dc4cafe65647f": {
        "abi": "function authorizeOperator(address operator)",
        "compact": "authorizeOperator(address)",
        "hash": "959b8c3fa5f1ac78a7061180563d67096686864ae5178e2a1c5dc4cafe65647f",
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
    "70a08231b98ef4ca268c9cc3f6b4590e4bfec28280db06bb5d45e689f2a360be": {
        "abi": "function balanceOf(address account) returns (uint256)",
        "compact": "balanceOf(address)",
        "hash": "70a08231b98ef4ca268c9cc3f6b4590e4bfec28280db06bb5d45e689f2a360be",
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
    "00fdd58ea0325fd79f486f8008ad3fad17dcb1cd2ee8474215c114771d87863e": {
        "abi": "function balanceOf(address account, uint256 id) returns (uint256)",
        "compact": "balanceOf(address,uint256)",
        "hash": "00fdd58ea0325fd79f486f8008ad3fad17dcb1cd2ee8474215c114771d87863e",
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
    "4e1273f46c229233ffb464c9596131917915848124c0e2e01ddcbd310b2609d4": {
        "abi": "function balanceOfBatch(address[] accounts, uint256[] ids) returns (uint256[])",
        "compact": "balanceOfBatch(address[],uint256[])",
        "hash": "4e1273f46c229233ffb464c9596131917915848124c0e2e01ddcbd310b2609d4",
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
    "57552fcb5b0e64d85975a630fcebe64bfdaa818e72dbd93c508b71c532d99c9e": {
        "abi": "function baseDelaySeconds() returns (uint32)",
        "compact": "baseDelaySeconds()",
        "hash": "57552fcb5b0e64d85975a630fcebe64bfdaa818e72dbd93c508b71c532d99c9e",
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
    "634e93da731de1ab508773ee1ad3f938ffe9d5c79121d39076b3f2a7abd13177": {
        "abi": "function beginDefaultAdminTransfer(address newAdmin)",
        "compact": "beginDefaultAdminTransfer(address)",
        "hash": "634e93da731de1ab508773ee1ad3f938ffe9d5c79121d39076b3f2a7abd13177",
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
    "f5298acae4baa3384bddc4e6891b4a982b854db8c0ad0ae8b971379a90a3ef87": {
        "abi": "function burn(address account, uint256 id, uint256 value)",
        "compact": "burn(address,uint256,uint256)",
        "hash": "f5298acae4baa3384bddc4e6891b4a982b854db8c0ad0ae8b971379a90a3ef87",
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
    "42966c689b5afe9b9b3f8a7103b2a19980d59629bfd6a20a60972312ed41d836": {
        "abi": "function burn(uint256 value)",
        "compact": "burn(uint256)",
        "hash": "42966c689b5afe9b9b3f8a7103b2a19980d59629bfd6a20a60972312ed41d836",
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
    "fe9d9303e79d04e189cef961eb7b3ed8271cbefc87b5bc7f1e67dff4a0c724a1": {
        "abi": "function burn(uint256 amount, bytes data)",
        "compact": "burn(uint256,bytes)",
        "hash": "fe9d9303e79d04e189cef961eb7b3ed8271cbefc87b5bc7f1e67dff4a0c724a1",
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
    "6b20c4541d8ef5ccd269c963bf9b934b8d7a51e501b598f87e9244e55b3eaee8": {
        "abi": "function burnBatch(address account, uint256[] ids, uint256[] values)",
        "compact": "burnBatch(address,uint256[],uint256[])",
        "hash": "6b20c4541d8ef5ccd269c963bf9b934b8d7a51e501b598f87e9244e55b3eaee8",
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
    "79cc679044ee9a2021f0a26c0fdec02ac39179cd005bb971a471b7f9f17c576c": {
        "abi": "function burnFrom(address account, uint256 value)",
        "compact": "burnFrom(address,uint256)",
        "hash": "79cc679044ee9a2021f0a26c0fdec02ac39179cd005bb971a471b7f9f17c576c",
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
    "b7009613e63fb13fd59a2fa4c206a992c1f090a44e5d530be255aa17fed0b3dd": {
        "abi": "function canCall(address caller, address target, bytes4 selector) returns (bool immediate, uint32 delay)",
        "compact": "canCall(address,address,bytes4)",
        "hash": "b7009613e63fb13fd59a2fa4c206a992c1f090a44e5d530be255aa17fed0b3dd",
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
    "249cb3faca845c567fa2f484b639425561d6b04f52c4e4f9c659e684f0d02d04": {
        "abi": "function canImplementInterfaceForAddress(bytes32 interfaceHash, address account) returns (bytes32)",
        "compact": "canImplementInterfaceForAddress(bytes32,address)",
        "hash": "249cb3faca845c567fa2f484b639425561d6b04f52c4e4f9c659e684f0d02d04",
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
    "d6bb62c6bb7c0b695131cf2febd3f440284ccf4ef796ccb9a3f1e8f4865cace8": {
        "abi": "function cancel(address caller, address target, bytes data) returns (uint32)",
        "compact": "cancel(address,address,bytes)",
        "hash": "d6bb62c6bb7c0b695131cf2febd3f440284ccf4ef796ccb9a3f1e8f4865cace8",
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
    "452115d665cb84bafb4b107a48753a780a70e80c19a1eb9d8241b099a5ec10db": {
        "abi": "function cancel(address[] targets, uint256[] values, bytes[] calldatas, bytes32 descriptionHash) returns (uint256)",
        "compact": "cancel(address[],uint256[],bytes[],bytes32)",
        "hash": "452115d665cb84bafb4b107a48753a780a70e80c19a1eb9d8241b099a5ec10db",
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
    "c4d252f50b443574fd08ee62009955d75a9b1c857437a9df3696d235adce2e3f": {
        "abi": "function cancel(bytes32 id)",
        "compact": "cancel(bytes32)",
        "hash": "c4d252f50b443574fd08ee62009955d75a9b1c857437a9df3696d235adce2e3f",
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
    "40e58ee57cbfe74d40a14ae6415beb600e320cffce987b1449899a4608d2fbf8": {
        "abi": "function cancel(uint256 proposalId)",
        "compact": "cancel(uint256)",
        "hash": "40e58ee57cbfe74d40a14ae6415beb600e320cffce987b1449899a4608d2fbf8",
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
    "d602b9fd53350fadba85542027e29651d3ab30281767cb9483a5d5796b07318a": {
        "abi": "function cancelDefaultAdminTransfer()",
        "compact": "cancelDefaultAdminTransfer()",
        "hash": "d602b9fd53350fadba85542027e29651d3ab30281767cb9483a5d5796b07318a",
        "inputs": [],
        "name": "cancelDefaultAdminTransfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "591fcdfe59cccb0276eb7a1aca5309fb037c1e16cbde40e5787cdfc0fee00ba6": {
        "abi": "function cancelTransaction(address target, uint256 value, string signature, bytes data, uint256 eta)",
        "compact": "cancelTransaction(address,uint256,string,bytes,uint256)",
        "hash": "591fcdfe59cccb0276eb7a1aca5309fb037c1e16cbde40e5787cdfc0fee00ba6",
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
    "355274ea4c5084069935a4456a1ac3001e99e7cb12c33ca22e251b993bb2c183": {
        "abi": "function cap() returns (uint256)",
        "compact": "cap()",
        "hash": "355274ea4c5084069935a4456a1ac3001e99e7cb12c33ca22e251b993bb2c183",
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
    "567813887e9a02f0fdc9e5cce34dad3f5e8ac785aa0259ba5d30339dd056cd23": {
        "abi": "function castVote(uint256 proposalId, uint8 support) returns (uint256)",
        "compact": "castVote(uint256,uint8)",
        "hash": "567813887e9a02f0fdc9e5cce34dad3f5e8ac785aa0259ba5d30339dd056cd23",
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
    "8ff262e363de60acdcf48b91285238962d3ea10e7d8ebc28f53b7675c0850d3f": {
        "abi": "function castVoteBySig(uint256 proposalId, uint8 support, address voter, bytes signature) returns (uint256)",
        "compact": "castVoteBySig(uint256,uint8,address,bytes)",
        "hash": "8ff262e363de60acdcf48b91285238962d3ea10e7d8ebc28f53b7675c0850d3f",
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
    "7b3c71d3e957d656561f955d2b095a7e5a3f5aa2cd7e96ca02305a507cd038d0": {
        "abi": "function castVoteWithReason(uint256 proposalId, uint8 support, string reason) returns (uint256)",
        "compact": "castVoteWithReason(uint256,uint8,string)",
        "hash": "7b3c71d3e957d656561f955d2b095a7e5a3f5aa2cd7e96ca02305a507cd038d0",
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
    "5f398a14c68aab5fc639e5916e2dd62f34a479c462b944bc06fbeec7334b1482": {
        "abi": "function castVoteWithReasonAndParams(uint256 proposalId, uint8 support, string reason, bytes params) returns (uint256)",
        "compact": "castVoteWithReasonAndParams(uint256,uint8,string,bytes)",
        "hash": "5f398a14c68aab5fc639e5916e2dd62f34a479c462b944bc06fbeec7334b1482",
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
    "5b8d0e0d63ef0d485464facdb5f3aac3b265bdc527e10a4b46f98f771c2c940d": {
        "abi": "function castVoteWithReasonAndParamsBySig(uint256 proposalId, uint8 support, address voter, string reason, bytes params, bytes signature) returns (uint256)",
        "compact": "castVoteWithReasonAndParamsBySig(uint256,uint8,address,string,bytes,bytes)",
        "hash": "5b8d0e0d63ef0d485464facdb5f3aac3b265bdc527e10a4b46f98f771c2c940d",
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
    "649a5ec7c2ae1a0f93c8b8bcca37ce2a4f85c90342b4cc5ca186bd755bd195e9": {
        "abi": "function changeDefaultAdminDelay(uint48 newDelay)",
        "compact": "changeDefaultAdminDelay(uint48)",
        "hash": "649a5ec7c2ae1a0f93c8b8bcca37ce2a4f85c90342b4cc5ca186bd755bd195e9",
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
    "f1127ed8f49a6a045736a6df176c1fa78d71e7f58a78c0678b9c716132cda4d8": {
        "abi": "function checkpoints(address account, uint32 pos) returns (struct Checkpoints.Checkpoint208)",
        "compact": "checkpoints(address,uint32)",
        "hash": "f1127ed8f49a6a045736a6df176c1fa78d71e7f58a78c0678b9c716132cda4d8",
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
    "91ddadf40f7f6ebb77645f9e322f9b8d0ad46a2c9cb2f52a073cd7c5e16d557a": {
        "abi": "function clock() returns (uint48)",
        "compact": "clock()",
        "hash": "91ddadf40f7f6ebb77645f9e322f9b8d0ad46a2c9cb2f52a073cd7c5e16d557a",
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
    "94c7d7ee728ffbb492b94942ca7e7973bdc2d40e1d0e505bbfeeeb3fc3df0532": {
        "abi": "function consumeScheduledOp(address caller, bytes data)",
        "compact": "consumeScheduledOp(address,bytes)",
        "hash": "94c7d7ee728ffbb492b94942ca7e7973bdc2d40e1d0e505bbfeeeb3fc3df0532",
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
    "07a2d13addb87fe4b871c7a7ed785ea40eb373aa4328e5835df32153f89e2be7": {
        "abi": "function convertToAssets(uint256 shares) returns (uint256 assets)",
        "compact": "convertToAssets(uint256)",
        "hash": "07a2d13addb87fe4b871c7a7ed785ea40eb373aa4328e5835df32153f89e2be7",
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
    "c6e6f5920ab9d3ed18e775f95f68b651e74148ef95e22e169f51deec917a7357": {
        "abi": "function convertToShares(uint256 assets) returns (uint256 shares)",
        "compact": "convertToShares(uint256)",
        "hash": "c6e6f5920ab9d3ed18e775f95f68b651e74148ef95e22e169f51deec917a7357",
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
    "313ce567add4d438edf58b94ff345d7d38c45b17dfc0f947988d7819dca364f9": {
        "abi": "function decimals() returns (uint8)",
        "compact": "decimals()",
        "hash": "313ce567add4d438edf58b94ff345d7d38c45b17dfc0f947988d7819dca364f9",
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
    "84ef8ffcff676669515a1e6c698710ea9197a6572d3d3f8678aa7a93ccce9576": {
        "abi": "function defaultAdmin() returns (address)",
        "compact": "defaultAdmin()",
        "hash": "84ef8ffcff676669515a1e6c698710ea9197a6572d3d3f8678aa7a93ccce9576",
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
    "cc8463c82b43b6c3c162938fb800709b46198ccdcdc3510253d13716759f4d56": {
        "abi": "function defaultAdminDelay() returns (uint48)",
        "compact": "defaultAdminDelay()",
        "hash": "cc8463c82b43b6c3c162938fb800709b46198ccdcdc3510253d13716759f4d56",
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
    "022d63fb3ec652113390b9c2c9a902852c9e0053f53a23e7b2ac070d79fbda45": {
        "abi": "function defaultAdminDelayIncreaseWait() returns (uint48)",
        "compact": "defaultAdminDelayIncreaseWait()",
        "hash": "022d63fb3ec652113390b9c2c9a902852c9e0053f53a23e7b2ac070d79fbda45",
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
    "06e485385cf29deb9a8a1b7063b1318c309eaf898f126cfc9db7a541554a38e8": {
        "abi": "function defaultOperators() returns (address[])",
        "compact": "defaultOperators()",
        "hash": "06e485385cf29deb9a8a1b7063b1318c309eaf898f126cfc9db7a541554a38e8",
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
    "6a42b8f87c891515a117e25c0080d113cd7673ba63c38e5813f968c6e9d81de4": {
        "abi": "function delay() returns (uint256)",
        "compact": "delay()",
        "hash": "6a42b8f87c891515a117e25c0080d113cd7673ba63c38e5813f968c6e9d81de4",
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
    "5c19a95c96fe5699f69181241d04ecef12a0c89506c08c7360f0f7e9a556859f": {
        "abi": "function delegate(address delegatee)",
        "compact": "delegate(address)",
        "hash": "5c19a95c96fe5699f69181241d04ecef12a0c89506c08c7360f0f7e9a556859f",
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
    "c3cda520413c90ac2c469da30542aa0b90cd877a87f60aecc55e99ec7019c59e": {
        "abi": "function delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s)",
        "compact": "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)",
        "hash": "c3cda520413c90ac2c469da30542aa0b90cd877a87f60aecc55e99ec7019c59e",
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
    "587cde1e7a8c573b1844af1585c2f1cfd2d254aa7bdef08253e217600cd8476c": {
        "abi": "function delegates(address account) returns (address)",
        "compact": "delegates(address)",
        "hash": "587cde1e7a8c573b1844af1585c2f1cfd2d254aa7bdef08253e217600cd8476c",
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
    "6e553f653991036c188afcef45e14f9ecb45269ff9c675358bbb3a2eeb78e03b": {
        "abi": "function deposit(uint256 assets, address receiver) returns (uint256 shares)",
        "compact": "deposit(uint256,address)",
        "hash": "6e553f653991036c188afcef45e14f9ecb45269ff9c675358bbb3a2eeb78e03b",
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
    "2f4f21e2bac235effca37c036f883ec633f058b37f2ac7e78df9d0f9d04a29bd": {
        "abi": "function depositFor(address account, uint256 value) returns (bool)",
        "compact": "depositFor(address,uint256)",
        "hash": "2f4f21e2bac235effca37c036f883ec633f058b37f2ac7e78df9d0f9d04a29bd",
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
    "cace6eb2818ca2853a5ce087c06415f147cfda56caaaed9bc8cae8663215b0cc": {
        "abi": "function depositFor(address account, uint256[] tokenIds) returns (bool)",
        "compact": "depositFor(address,uint256[])",
        "hash": "cace6eb2818ca2853a5ce087c06415f147cfda56caaaed9bc8cae8663215b0cc",
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
    "0fb5a6b40d15bfee72e58fd4a3fbc0824854616197205c3f48946b53286fd328": {
        "abi": "function duration() returns (uint256)",
        "compact": "duration()",
        "hash": "0fb5a6b40d15bfee72e58fd4a3fbc0824854616197205c3f48946b53286fd328",
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
    "84b0196e4b78e1918928c3b71e1f57a2bfc6d4a368fe07990ccc1367172719fb": {
        "abi": "function eip712Domain() returns (bytes1 fields, string name, string version, uint256 chainId, address verifyingContract, bytes32 salt, uint256[] extensions)",
        "compact": "eip712Domain()",
        "hash": "84b0196e4b78e1918928c3b71e1f57a2bfc6d4a368fe07990ccc1367172719fb",
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
    "efbe1c1ca17841a6aacc78b39fe2541c8bb21e409035e2408b6d17aee00db20f": {
        "abi": "function end() returns (uint256)",
        "compact": "end()",
        "hash": "efbe1c1ca17841a6aacc78b39fe2541c8bb21e409035e2408b6d17aee00db20f",
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
    "df905cafdf7126df4491b139d95eab706537eade0222660f57c5f920ee8b8864": {
        "abi": "function execute(struct ERC2771Forwarder.ForwardRequestData request)",
        "compact": "execute((address,address,uint256,uint256,uint48,bytes,bytes))",
        "hash": "df905cafdf7126df4491b139d95eab706537eade0222660f57c5f920ee8b8864",
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
    "1cff79cde515a86f6cc1adbebe8ae25888905561371faf11c8102211f56b4870": {
        "abi": "function execute(address target, bytes data) returns (uint32)",
        "compact": "execute(address,bytes)",
        "hash": "1cff79cde515a86f6cc1adbebe8ae25888905561371faf11c8102211f56b4870",
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
    "134008d3a30dcebb0bda7c2a59914d8d2101082f28e3777c5b323a0ba9e23743": {
        "abi": "function execute(address target, uint256 value, bytes payload, bytes32 predecessor, bytes32 salt)",
        "compact": "execute(address,uint256,bytes,bytes32,bytes32)",
        "hash": "134008d3a30dcebb0bda7c2a59914d8d2101082f28e3777c5b323a0ba9e23743",
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
    "2656227de60b16802e66289dd98a618010fbb43ee84a8bd5d9687df281cda69d": {
        "abi": "function execute(address[] targets, uint256[] values, bytes[] calldatas, bytes32 descriptionHash) returns (uint256)",
        "compact": "execute(address[],uint256[],bytes[],bytes32)",
        "hash": "2656227de60b16802e66289dd98a618010fbb43ee84a8bd5d9687df281cda69d",
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
    "fe0d94c1a8f5608a1172c49cc7704ac011b690506896af15ba9aab651ff44e1b": {
        "abi": "function execute(uint256 proposalId)",
        "compact": "execute(uint256)",
        "hash": "fe0d94c1a8f5608a1172c49cc7704ac011b690506896af15ba9aab651ff44e1b",
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
    "ccf96b4a4012ef9a43eb18f0d368580b6bbf644c6e0a60560647164ce2eab4d1": {
        "abi": "function executeBatch(struct ERC2771Forwarder.ForwardRequestData[] requests, address payable refundReceiver)",
        "compact": "executeBatch((address,address,uint256,uint256,uint48,bytes,bytes)[],address)",
        "hash": "ccf96b4a4012ef9a43eb18f0d368580b6bbf644c6e0a60560647164ce2eab4d1",
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
    "e38335e538545b221322518604fed4c68b1db0584b8769f10c34ac8e9abadae3": {
        "abi": "function executeBatch(address[] targets, uint256[] values, bytes[] payloads, bytes32 predecessor, bytes32 salt)",
        "compact": "executeBatch(address[],uint256[],bytes[],bytes32,bytes32)",
        "hash": "e38335e538545b221322518604fed4c68b1db0584b8769f10c34ac8e9abadae3",
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
    "0825f38f4c4290e4c0d8abca0e03288532de8aaf9ea05bb680c1e5889493dc6e": {
        "abi": "function executeTransaction(address target, uint256 value, string signature, bytes data, uint256 eta) returns (bytes)",
        "compact": "executeTransaction(address,uint256,string,bytes,uint256)",
        "hash": "0825f38f4c4290e4c0d8abca0e03288532de8aaf9ea05bb680c1e5889493dc6e",
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
    "4f558e79ad2ccf645b907b8eadfa47c36cd66aa5afb8bec709f0e2c20c0d364c": {
        "abi": "function exists(uint256 id) returns (bool)",
        "compact": "exists(uint256)",
        "hash": "4f558e79ad2ccf645b907b8eadfa47c36cd66aa5afb8bec709f0e2c20c0d364c",
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
    "4665096dc7c6235c491856d14511fccbb09b3071040b11ec50529c26fa30b835": {
        "abi": "function expiration() returns (uint32)",
        "compact": "expiration()",
        "hash": "4665096dc7c6235c491856d14511fccbb09b3071040b11ec50529c26fa30b835",
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
    "d9d98ce47efcce23be9e2c7eca20697e2d1a09618758be34105f4223996ef925": {
        "abi": "function flashFee(address token, uint256 amount) returns (uint256)",
        "compact": "flashFee(address,uint256)",
        "hash": "d9d98ce47efcce23be9e2c7eca20697e2d1a09618758be34105f4223996ef925",
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
    "5cffe9dec7c4bb529499c4658dad5e733cbcee2e31a993ca00b0540de20b0b69": {
        "abi": "function flashLoan(contract IERC3156FlashBorrower receiver, address token, uint256 amount, bytes data) returns (bool)",
        "compact": "flashLoan(address,address,uint256,bytes)",
        "hash": "5cffe9dec7c4bb529499c4658dad5e733cbcee2e31a993ca00b0540de20b0b69",
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
    "3078f114b3a1bc7bb865c6b641469831e4aaedb4ef0b72e23b5bf8c72130ee44": {
        "abi": "function getAccess(uint64 roleId, address account) returns (uint48 since, uint32 currentDelay, uint32 pendingDelay, uint48 effect)",
        "compact": "getAccess(uint64,address)",
        "hash": "3078f114b3a1bc7bb865c6b641469831e4aaedb4ef0b72e23b5bf8c72130ee44",
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
    "081812fc55e34fdc7cf5d8b5cf4e3621fa6423fde952ec6ab24afdc0d85c0b2e": {
        "abi": "function getApproved(uint256 tokenId) returns (address operator)",
        "compact": "getApproved(uint256)",
        "hash": "081812fc55e34fdc7cf5d8b5cf4e3621fa6423fde952ec6ab24afdc0d85c0b2e",
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
    "aabbb8ca5077ad77ee74d09abca69060954dc1e7e935c6125dbfbdac2f7cb4d5": {
        "abi": "function getInterfaceImplementer(address account, bytes32 _interfaceHash) returns (address)",
        "compact": "getInterfaceImplementer(address,bytes32)",
        "hash": "aabbb8ca5077ad77ee74d09abca69060954dc1e7e935c6125dbfbdac2f7cb4d5",
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
    "3d584063924dd854adbe829663eb0c0909eeb5858efe56e76f85b64f4908d93c": {
        "abi": "function getManager(address account) returns (address)",
        "compact": "getManager(address)",
        "hash": "3d584063924dd854adbe829663eb0c0909eeb5858efe56e76f85b64f4908d93c",
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
    "f27a0c924af38e9f77beff26dd3b553fbe08a2eefee20cdfd7244000b678968f": {
        "abi": "function getMinDelay() returns (uint256)",
        "compact": "getMinDelay()",
        "hash": "f27a0c924af38e9f77beff26dd3b553fbe08a2eefee20cdfd7244000b678968f",
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
    "4136a33cd0e5e0d6a151b51794e4fb011abba74b206be5522e1e5053faabf209": {
        "abi": "function getNonce(bytes32 id) returns (uint32)",
        "compact": "getNonce(bytes32)",
        "hash": "4136a33cd0e5e0d6a151b51794e4fb011abba74b206be5522e1e5053faabf209",
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
    "7958004c5e1c73ad67ba7f24e2cfa516ef54553966b2b4f962096b16024654cd": {
        "abi": "function getOperationState(bytes32 id) returns (enum TimelockController.OperationState)",
        "compact": "getOperationState(bytes32)",
        "hash": "7958004c5e1c73ad67ba7f24e2cfa516ef54553966b2b4f962096b16024654cd",
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
    "8e539e8cdd1232187a9d8c56f9b41797e02317e9b81e0dc9a4e7b8f5d36557cc": {
        "abi": "function getPastTotalSupply(uint256 timepoint) returns (uint256)",
        "compact": "getPastTotalSupply(uint256)",
        "hash": "8e539e8cdd1232187a9d8c56f9b41797e02317e9b81e0dc9a4e7b8f5d36557cc",
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
    "3a46b1a8034ed3adfd5d8c1bf75e426a415502bced856c6b8d65c6d81fd746ce": {
        "abi": "function getPastVotes(address account, uint256 timepoint) returns (uint256)",
        "compact": "getPastVotes(address,uint256)",
        "hash": "3a46b1a8034ed3adfd5d8c1bf75e426a415502bced856c6b8d65c6d81fd746ce",
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
    "248a9ca39e7e298ea3bbd193e7d36b87492efea84ff513fd03940aaa5bc0d98f": {
        "abi": "function getRoleAdmin(bytes32 role) returns (bytes32)",
        "compact": "getRoleAdmin(bytes32)",
        "hash": "248a9ca39e7e298ea3bbd193e7d36b87492efea84ff513fd03940aaa5bc0d98f",
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
    "530dd4568a1dbdef03c7a0348f6486bd5568697c3753d3736b1985cfab93ca6d": {
        "abi": "function getRoleAdmin(uint64 roleId) returns (uint64)",
        "compact": "getRoleAdmin(uint64)",
        "hash": "530dd4568a1dbdef03c7a0348f6486bd5568697c3753d3736b1985cfab93ca6d",
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
    "12be87276e9e57a9e923e2ac543c4d3316df7555ff35c0460866d23bea304e69": {
        "abi": "function getRoleGrantDelay(uint64 roleId) returns (uint32)",
        "compact": "getRoleGrantDelay(uint64)",
        "hash": "12be87276e9e57a9e923e2ac543c4d3316df7555ff35c0460866d23bea304e69",
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
    "0b0a93baec353ba910c91860c3c43460dda67114d68773e08613f2ffaefe6747": {
        "abi": "function getRoleGuardian(uint64 roleId) returns (uint64)",
        "compact": "getRoleGuardian(uint64)",
        "hash": "0b0a93baec353ba910c91860c3c43460dda67114d68773e08613f2ffaefe6747",
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
    "9010d07c35d39c6d4cd0e3e64f2d5224175be836ce7811540697d664e50bd5b0": {
        "abi": "function getRoleMember(bytes32 role, uint256 index) returns (address)",
        "compact": "getRoleMember(bytes32,uint256)",
        "hash": "9010d07c35d39c6d4cd0e3e64f2d5224175be836ce7811540697d664e50bd5b0",
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
    "ca15c87324184fe11fcfd1b62f305b0106b501a357855ca24a74263983ccd675": {
        "abi": "function getRoleMemberCount(bytes32 role) returns (uint256)",
        "compact": "getRoleMemberCount(bytes32)",
        "hash": "ca15c87324184fe11fcfd1b62f305b0106b501a357855ca24a74263983ccd675",
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
    "3adc277ac0d54e2d8d652e40ed2fec9361d21d912681be61dda69b0e533e6ca8": {
        "abi": "function getSchedule(bytes32 id) returns (uint48)",
        "compact": "getSchedule(bytes32)",
        "hash": "3adc277ac0d54e2d8d652e40ed2fec9361d21d912681be61dda69b0e533e6ca8",
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
    "4c1da1e2b0e0995820e8b7f14d856dde98cf4b9a5a28520c52434819512a090b": {
        "abi": "function getTargetAdminDelay(address target) returns (uint32)",
        "compact": "getTargetAdminDelay(address)",
        "hash": "4c1da1e2b0e0995820e8b7f14d856dde98cf4b9a5a28520c52434819512a090b",
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
    "6d5115bdacb2fcf464171358a23cd10a468aad0405d8eb7942dd28d0dabd2cf2": {
        "abi": "function getTargetFunctionRole(address target, bytes4 selector) returns (uint64)",
        "compact": "getTargetFunctionRole(address,bytes4)",
        "hash": "6d5115bdacb2fcf464171358a23cd10a468aad0405d8eb7942dd28d0dabd2cf2",
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
    "d45c4435851b01c1d0081def47b2aaa33d0e1ad0765ec5cca4b5d61ce60baad1": {
        "abi": "function getTimestamp(bytes32 id) returns (uint256)",
        "compact": "getTimestamp(bytes32)",
        "hash": "d45c4435851b01c1d0081def47b2aaa33d0e1ad0765ec5cca4b5d61ce60baad1",
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
    "9ab24eb0086abe93529cb36564cc78c9de7e8a990a4616ff863202cfd413aa9e": {
        "abi": "function getVotes(address account) returns (uint256)",
        "compact": "getVotes(address)",
        "hash": "9ab24eb0086abe93529cb36564cc78c9de7e8a990a4616ff863202cfd413aa9e",
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
    "eb9019d40cffb1338f9b970f610581449ec06e8348c107ebd0fe839d92546a17": {
        "abi": "function getVotes(address account, uint256 timepoint) returns (uint256)",
        "compact": "getVotes(address,uint256)",
        "hash": "eb9019d40cffb1338f9b970f610581449ec06e8348c107ebd0fe839d92546a17",
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
    "9a802a6d084c1e7651b7214f1714707c5e9a507197229e65681f1bcb04fa083b": {
        "abi": "function getVotesWithParams(address account, uint256 timepoint, bytes params) returns (uint256)",
        "compact": "getVotesWithParams(address,uint256,bytes)",
        "hash": "9a802a6d084c1e7651b7214f1714707c5e9a507197229e65681f1bcb04fa083b",
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
    "2f2ff15deca029b64bbc0874ae59c8f39be024a95aa718b4c13ca407db350be8": {
        "abi": "function grantRole(bytes32 role, address account)",
        "compact": "grantRole(bytes32,address)",
        "hash": "2f2ff15deca029b64bbc0874ae59c8f39be024a95aa718b4c13ca407db350be8",
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
    "25c471a0b11d240b01f2be8b3fb7fbd4131c8acf3ca0f089cee85dccc52ed358": {
        "abi": "function grantRole(uint64 roleId, address account, uint32 executionDelay)",
        "compact": "grantRole(uint64,address,uint32)",
        "hash": "25c471a0b11d240b01f2be8b3fb7fbd4131c8acf3ca0f089cee85dccc52ed358",
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
    "556f0dc7c27917e5fbcf81d768e3f14e5e91388a9bbf5489fc807a3b25713a85": {
        "abi": "function granularity() returns (uint256)",
        "compact": "granularity()",
        "hash": "556f0dc7c27917e5fbcf81d768e3f14e5e91388a9bbf5489fc807a3b25713a85",
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
    "91d1485424b278bc736d5d34907ed48280c7188845bc82b33370da2b4dc1194e": {
        "abi": "function hasRole(bytes32 role, address account) returns (bool)",
        "compact": "hasRole(bytes32,address)",
        "hash": "91d1485424b278bc736d5d34907ed48280c7188845bc82b33370da2b4dc1194e",
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
    "d1f856ee966a9a1f7ecb88d946495da7df911972c1a750b8202c4398cecc8123": {
        "abi": "function hasRole(uint64 roleId, address account) returns (bool isMember, uint32 executionDelay)",
        "compact": "hasRole(uint64,address)",
        "hash": "d1f856ee966a9a1f7ecb88d946495da7df911972c1a750b8202c4398cecc8123",
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
    "43859632f1012e68dc131a941d4fccfd2c6fb50b3d38d65c48aa57accd7a2b9e": {
        "abi": "function hasVoted(uint256 proposalId, address account) returns (bool)",
        "compact": "hasVoted(uint256,address)",
        "hash": "43859632f1012e68dc131a941d4fccfd2c6fb50b3d38d65c48aa57accd7a2b9e",
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
    "abd9bd2aa9e39026edd75bad3df880b857a26889bb37bdd236909f6b0f494a76": {
        "abi": "function hashOperation(address caller, address target, bytes data) returns (bytes32)",
        "compact": "hashOperation(address,address,bytes)",
        "hash": "abd9bd2aa9e39026edd75bad3df880b857a26889bb37bdd236909f6b0f494a76",
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
    "8065657f87a402a28cec2e2784b26c76b930171dc84564c72d8a824510473459": {
        "abi": "function hashOperation(address target, uint256 value, bytes data, bytes32 predecessor, bytes32 salt) returns (bytes32)",
        "compact": "hashOperation(address,uint256,bytes,bytes32,bytes32)",
        "hash": "8065657f87a402a28cec2e2784b26c76b930171dc84564c72d8a824510473459",
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
    "b1c5f427327ae3e3639a58b329f7628e2fe0ff13a871cdf85ea2b5ec0973400f": {
        "abi": "function hashOperationBatch(address[] targets, uint256[] values, bytes[] payloads, bytes32 predecessor, bytes32 salt) returns (bytes32)",
        "compact": "hashOperationBatch(address[],uint256[],bytes[],bytes32,bytes32)",
        "hash": "b1c5f427327ae3e3639a58b329f7628e2fe0ff13a871cdf85ea2b5ec0973400f",
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
    "c59057e4083fea9deb423118e3529aff28d635d0204228e9b694a0517722e325": {
        "abi": "function hashProposal(address[] targets, uint256[] values, bytes[] calldatas, bytes32 descriptionHash) returns (uint256)",
        "compact": "hashProposal(address[],uint256[],bytes[],bytes32)",
        "hash": "c59057e4083fea9deb423118e3529aff28d635d0204228e9b694a0517722e325",
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
    "5c60da1b04210c25e1974b6edfcf5bb7c7365b6a88c42319fcbd024464075cc2": {
        "abi": "function implementation() returns (address)",
        "compact": "implementation()",
        "hash": "5c60da1b04210c25e1974b6edfcf5bb7c7365b6a88c42319fcbd024464075cc2",
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
    "f712f3e885feefd4d819ffb61e08e67f0090bc5a5fe8b38272e3134e9d255486": {
        "abi": "function implementsERC165Interface(address account, bytes4 interfaceId) returns (bool)",
        "compact": "implementsERC165Interface(address,bytes4)",
        "hash": "f712f3e885feefd4d819ffb61e08e67f0090bc5a5fe8b38272e3134e9d255486",
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
    "b705676510cec9438fe759af9cd9a319054c29d249f48050897ff539683f9795": {
        "abi": "function implementsERC165InterfaceNoCache(address account, bytes4 interfaceId) returns (bool)",
        "compact": "implementsERC165InterfaceNoCache(address,bytes4)",
        "hash": "b705676510cec9438fe759af9cd9a319054c29d249f48050897ff539683f9795",
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
    "65ba36c1f0f2ec5afddc385a4247497aa93ec59323839661a18201fb2f491c95": {
        "abi": "function interfaceHash(string interfaceName) returns (bytes32)",
        "compact": "interfaceHash(string)",
        "hash": "65ba36c1f0f2ec5afddc385a4247497aa93ec59323839661a18201fb2f491c95",
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
    "82e49386cd78c426df68d0155bedd839fc6cb0f6bad00840ba787ecfb4668533": {
        "abi": "function isAccessManagerIgnored(address target, bytes4 selector) returns (bool)",
        "compact": "isAccessManagerIgnored(address,bytes4)",
        "hash": "82e49386cd78c426df68d0155bedd839fc6cb0f6bad00840ba787ecfb4668533",
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
    "e985e9c5c6636c6879256001057b28ccac7718ef0ac56553ff9b926452cab8a3": {
        "abi": "function isApprovedForAll(address owner, address operator) returns (bool)",
        "compact": "isApprovedForAll(address,address)",
        "hash": "e985e9c5c6636c6879256001057b28ccac7718ef0ac56553ff9b926452cab8a3",
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
    "8fb360371b4a91c52d4438e929079942d9e7a4a71ec4811fe18ecb85a02bdb76": {
        "abi": "function isConsumingScheduledOp() returns (bytes4)",
        "compact": "isConsumingScheduledOp()",
        "hash": "8fb360371b4a91c52d4438e929079942d9e7a4a71ec4811fe18ecb85a02bdb76",
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
    "31d50750d641470e8cdfda26e8cf6dcba3ddbff6fa186d4723d527a56e9db07d": {
        "abi": "function isOperation(bytes32 id) returns (bool)",
        "compact": "isOperation(bytes32)",
        "hash": "31d50750d641470e8cdfda26e8cf6dcba3ddbff6fa186d4723d527a56e9db07d",
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
    "2ab0f5290d1e1b403d0a0af57f1a03f82e89e81d326545fa01141421855deb93": {
        "abi": "function isOperationDone(bytes32 id) returns (bool)",
        "compact": "isOperationDone(bytes32)",
        "hash": "2ab0f5290d1e1b403d0a0af57f1a03f82e89e81d326545fa01141421855deb93",
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
    "584b153ee26ee7f05b985ee8914940eb2e2a5b195f6573f30ca652261a5f202a": {
        "abi": "function isOperationPending(bytes32 id) returns (bool)",
        "compact": "isOperationPending(bytes32)",
        "hash": "584b153ee26ee7f05b985ee8914940eb2e2a5b195f6573f30ca652261a5f202a",
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
    "13bc9f20cd87256e591db65dead56b9128acd029d191cf0e8460f98012f7677a": {
        "abi": "function isOperationReady(bytes32 id) returns (bool)",
        "compact": "isOperationReady(bytes32)",
        "hash": "13bc9f20cd87256e591db65dead56b9128acd029d191cf0e8460f98012f7677a",
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
    "d95b637183979f2fdf9ceace279bd59bdcd8e8a1f8156cae1a7bde441d293ee0": {
        "abi": "function isOperatorFor(address operator, address tokenHolder) returns (bool)",
        "compact": "isOperatorFor(address,address)",
        "hash": "d95b637183979f2fdf9ceace279bd59bdcd8e8a1f8156cae1a7bde441d293ee0",
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
    "a166aa89dc4f2b65e7f76b873208ef472277b2fdacd3d730a402771126107a0d": {
        "abi": "function isTargetClosed(address target) returns (bool)",
        "compact": "isTargetClosed(address)",
        "hash": "a166aa89dc4f2b65e7f76b873208ef472277b2fdacd3d730a402771126107a0d",
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
    "572b6c05a6f37e87b98203e751110ab0ebd8a08f3a4d94300055a81fe78656b1": {
        "abi": "function isTrustedForwarder(address forwarder) returns (bool)",
        "compact": "isTrustedForwarder(address)",
        "hash": "572b6c05a6f37e87b98203e751110ab0ebd8a08f3a4d94300055a81fe78656b1",
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
    "1626ba7e356f5979dd355a3d2bfb43e80420a480c3b854edce286a82d7496869": {
        "abi": "function isValidSignature(bytes32 hash, bytes signature) returns (bytes4 magicValue)",
        "compact": "isValidSignature(bytes32,bytes)",
        "hash": "1626ba7e356f5979dd355a3d2bfb43e80420a480c3b854edce286a82d7496869",
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
    "853551b806162e0fccefb91ebe504991308e7018f6e5a74cc720d39c09392f32": {
        "abi": "function labelRole(uint64 roleId, string label)",
        "compact": "labelRole(uint64,string)",
        "hash": "853551b806162e0fccefb91ebe504991308e7018f6e5a74cc720d39c09392f32",
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
    "32b8113e639f44fbcb61ea1ec4a2675a8accd5ee0451db854839b35055438aed": {
        "abi": "function lateQuorumVoteExtension() returns (uint48)",
        "compact": "lateQuorumVoteExtension()",
        "hash": "32b8113e639f44fbcb61ea1ec4a2675a8accd5ee0451db854839b35055438aed",
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
    "402d267d68336aa646ef8ec29881846fe65b505496b0e3c0d66c3c71ebca0b9d": {
        "abi": "function maxDeposit(address receiver) returns (uint256 maxAssets)",
        "compact": "maxDeposit(address)",
        "hash": "402d267d68336aa646ef8ec29881846fe65b505496b0e3c0d66c3c71ebca0b9d",
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
    "613255ab7201df92bfcd1f721b20a2451991be434fa7b6cad3c176dee2a7cf09": {
        "abi": "function maxFlashLoan(address token) returns (uint256)",
        "compact": "maxFlashLoan(address)",
        "hash": "613255ab7201df92bfcd1f721b20a2451991be434fa7b6cad3c176dee2a7cf09",
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
    "c63d75b6db33f8f33f081cb1034d0189537c4967e609cbdbd35a6ac96a38dbce": {
        "abi": "function maxMint(address receiver) returns (uint256 maxShares)",
        "compact": "maxMint(address)",
        "hash": "c63d75b6db33f8f33f081cb1034d0189537c4967e609cbdbd35a6ac96a38dbce",
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
    "d905777e6188a52d95537f77f9293d7c55ab6da19483be4a797af4b2329d6078": {
        "abi": "function maxRedeem(address owner) returns (uint256 maxShares)",
        "compact": "maxRedeem(address)",
        "hash": "d905777e6188a52d95537f77f9293d7c55ab6da19483be4a797af4b2329d6078",
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
    "ce96cb771ee0ee5438eec17718897557e7db15d685a5c83b309cbd37b191b8c4": {
        "abi": "function maxWithdraw(address owner) returns (uint256 maxAssets)",
        "compact": "maxWithdraw(address)",
        "hash": "ce96cb771ee0ee5438eec17718897557e7db15d685a5c83b309cbd37b191b8c4",
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
    "cc1b6c8147e172b239820767463dc77aa7e5060cee24447cf637d5b5eeb0a8f8": {
        "abi": "function minSetback() returns (uint32)",
        "compact": "minSetback()",
        "hash": "cc1b6c8147e172b239820767463dc77aa7e5060cee24447cf637d5b5eeb0a8f8",
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
    "94bf804d99f2e506274f8f54327419cf422bd9efa05b9d7afe19d8049dcab16d": {
        "abi": "function mint(uint256 shares, address receiver) returns (uint256 assets)",
        "compact": "mint(uint256,address)",
        "hash": "94bf804d99f2e506274f8f54327419cf422bd9efa05b9d7afe19d8049dcab16d",
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
    "ac9650d882acfa253cba1ed543b9ff47351da99c3bd00a89625e5cdb2099009c": {
        "abi": "function multicall(bytes[] data) returns (bytes[] results)",
        "compact": "multicall(bytes[])",
        "hash": "ac9650d882acfa253cba1ed543b9ff47351da99c3bd00a89625e5cdb2099009c",
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
    "06fdde0383f15d582d1a74511486c9ddf862a882fb7904b3d9fe9b8b8e58a796": {
        "abi": "function name() returns (string)",
        "compact": "name()",
        "hash": "06fdde0383f15d582d1a74511486c9ddf862a882fb7904b3d9fe9b8b8e58a796",
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
    "7ecebe00bc8d5df94a191da8e29b79e67a22b668e14b756a81ef2f5fa215cb0c": {
        "abi": "function nonces(address owner) returns (uint256)",
        "compact": "nonces(address)",
        "hash": "7ecebe00bc8d5df94a191da8e29b79e67a22b668e14b756a81ef2f5fa215cb0c",
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
    "6fcfff45ce8ff40d0569afaae2fa7e62a581884e78d559cee21b28f3c93f8860": {
        "abi": "function numCheckpoints(address account) returns (uint32)",
        "compact": "numCheckpoints(address)",
        "hash": "6fcfff45ce8ff40d0569afaae2fa7e62a581884e78d559cee21b28f3c93f8860",
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
    "7b04a2d00e3f6fe0be0938737d978f1599a31d846000681b01400a7413a8faa2": {
        "abi": "function onApprovalReceived(address owner, uint256 amount, bytes data) returns (bytes4)",
        "compact": "onApprovalReceived(address,uint256,bytes)",
        "hash": "7b04a2d00e3f6fe0be0938737d978f1599a31d846000681b01400a7413a8faa2",
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
    "bc197c819b3e337a6f9652dd10becd7eef83032af3b9d958d3d42f6694146621": {
        "abi": "function onERC1155BatchReceived(address, address, uint256[], uint256[], bytes) returns (bytes4)",
        "compact": "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)",
        "hash": "bc197c819b3e337a6f9652dd10becd7eef83032af3b9d958d3d42f6694146621",
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
    "f23a6e612e1ff4830e658fe43f4e3cb4a5f8170bd5d9e69fb5d7a7fa9e4fdf97": {
        "abi": "function onERC1155Received(address, address, uint256, uint256, bytes) returns (bytes4)",
        "compact": "onERC1155Received(address,address,uint256,uint256,bytes)",
        "hash": "f23a6e612e1ff4830e658fe43f4e3cb4a5f8170bd5d9e69fb5d7a7fa9e4fdf97",
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
    "150b7a023d4804d13e8c85fb27262cb750cf6ba9f9dd3bb30d90f482ceeb4b1f": {
        "abi": "function onERC721Received(address, address, uint256, bytes) returns (bytes4)",
        "compact": "onERC721Received(address,address,uint256,bytes)",
        "hash": "150b7a023d4804d13e8c85fb27262cb750cf6ba9f9dd3bb30d90f482ceeb4b1f",
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
    "23e30c8befea46c90c801b1cfde6f862ddf06a447649e492ab84a0333ed83c65": {
        "abi": "function onFlashLoan(address initiator, address token, uint256 amount, uint256 fee, bytes data) returns (bytes32)",
        "compact": "onFlashLoan(address,address,uint256,uint256,bytes)",
        "hash": "23e30c8befea46c90c801b1cfde6f862ddf06a447649e492ab84a0333ed83c65",
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
    "88a7ca5c75456956db1e96e88ee87aca8bdad85895835c2dc76fcc96396569cf": {
        "abi": "function onTransferReceived(address operator, address from, uint256 amount, bytes data) returns (bytes4)",
        "compact": "onTransferReceived(address,address,uint256,bytes)",
        "hash": "88a7ca5c75456956db1e96e88ee87aca8bdad85895835c2dc76fcc96396569cf",
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
    "fc673c4f8d4aaaabaea06e9dd5779b22b049a95ce54fdeba7078d6693e645c46": {
        "abi": "function operatorBurn(address account, uint256 amount, bytes data, bytes operatorData)",
        "compact": "operatorBurn(address,uint256,bytes,bytes)",
        "hash": "fc673c4f8d4aaaabaea06e9dd5779b22b049a95ce54fdeba7078d6693e645c46",
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
    "62ad1b837f387fbdadad12dd83cd2819ceec25be196e8335374cb8f285fa5b82": {
        "abi": "function operatorSend(address sender, address recipient, uint256 amount, bytes data, bytes operatorData)",
        "compact": "operatorSend(address,address,uint256,bytes,bytes)",
        "hash": "62ad1b837f387fbdadad12dd83cd2819ceec25be196e8335374cb8f285fa5b82",
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
    "8da5cb5b36e7f68c1d2e56001220cdbdd3ba2616072f718acfda4a06441a807d": {
        "abi": "function owner() returns (address)",
        "compact": "owner()",
        "hash": "8da5cb5b36e7f68c1d2e56001220cdbdd3ba2616072f718acfda4a06441a807d",
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
    "6352211e6566aa027e75ac9dbf2423197fbd9b82b9d981a3ab367d355866aa1c": {
        "abi": "function ownerOf(uint256 tokenId) returns (address owner)",
        "compact": "ownerOf(uint256)",
        "hash": "6352211e6566aa027e75ac9dbf2423197fbd9b82b9d981a3ab367d355866aa1c",
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
    "5c975abbf8c4d6efa68fc896e233763eb503f2318260b7bf59b19412913788b2": {
        "abi": "function paused() returns (bool)",
        "compact": "paused()",
        "hash": "5c975abbf8c4d6efa68fc896e233763eb503f2318260b7bf59b19412913788b2",
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
    "2678224762ab5e83952f65359881b0d7a0fee54378e0fc5c741b0053fe6596d8": {
        "abi": "function pendingAdmin() returns (address)",
        "compact": "pendingAdmin()",
        "hash": "2678224762ab5e83952f65359881b0d7a0fee54378e0fc5c741b0053fe6596d8",
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
    "cf6eefb70924435b69c880ecc747ce469058b0afd8c200587463709fc51db3a9": {
        "abi": "function pendingDefaultAdmin() returns (address newAdmin, uint48 schedule)",
        "compact": "pendingDefaultAdmin()",
        "hash": "cf6eefb70924435b69c880ecc747ce469058b0afd8c200587463709fc51db3a9",
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
    "a1eda53c0f74a34f3c286b80a10855ea69713c1c56c9593bf7b003d5c61fa81a": {
        "abi": "function pendingDefaultAdminDelay() returns (uint48 newDelay, uint48 schedule)",
        "compact": "pendingDefaultAdminDelay()",
        "hash": "a1eda53c0f74a34f3c286b80a10855ea69713c1c56c9593bf7b003d5c61fa81a",
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
    "e30c3978ddd82956a01b5cb08d17f1a2d73e636aeefb7b36f896e41d4c2aab90": {
        "abi": "function pendingOwner() returns (address)",
        "compact": "pendingOwner()",
        "hash": "e30c3978ddd82956a01b5cb08d17f1a2d73e636aeefb7b36f896e41d4c2aab90",
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
    "d505accfee7b46ac3ce97322c21f328b64073d188137e16f7ef87f8de076b51c": {
        "abi": "function permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s)",
        "compact": "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)",
        "hash": "d505accfee7b46ac3ce97322c21f328b64073d188137e16f7ef87f8de076b51c",
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
    "ef8b30f73f706809e695608f776076874a713cf88edd86595a08e925f20c217f": {
        "abi": "function previewDeposit(uint256 assets) returns (uint256 shares)",
        "compact": "previewDeposit(uint256)",
        "hash": "ef8b30f73f706809e695608f776076874a713cf88edd86595a08e925f20c217f",
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
    "b3d7f6b9638bbc33e68026f247be37f99ef5e7a0a876c11b709f75b175ec170d": {
        "abi": "function previewMint(uint256 shares) returns (uint256 assets)",
        "compact": "previewMint(uint256)",
        "hash": "b3d7f6b9638bbc33e68026f247be37f99ef5e7a0a876c11b709f75b175ec170d",
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
    "4cdad506b0d2802827e85739d7f82f09a428af7a9aa4806240ca073483c7fa7b": {
        "abi": "function previewRedeem(uint256 shares) returns (uint256 assets)",
        "compact": "previewRedeem(uint256)",
        "hash": "4cdad506b0d2802827e85739d7f82f09a428af7a9aa4806240ca073483c7fa7b",
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
    "0a28a477d2fbe6a0242a8363413ce82b248f4001016791c1a6be68e82529ff3e": {
        "abi": "function previewWithdraw(uint256 assets) returns (uint256 shares)",
        "compact": "previewWithdraw(uint256)",
        "hash": "0a28a477d2fbe6a0242a8363413ce82b248f4001016791c1a6be68e82529ff3e",
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
    "da35c6643cf6b532e8dc9eba2c30b97cb7e0ae19d4122efa4d6abee43d614076": {
        "abi": "function proposalCount() returns (uint256)",
        "compact": "proposalCount()",
        "hash": "da35c6643cf6b532e8dc9eba2c30b97cb7e0ae19d4122efa4d6abee43d614076",
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
    "c01f9e372d0a3b1eae80563df8ffd65cb7a727674246fdda76a2150f22a144c4": {
        "abi": "function proposalDeadline(uint256 proposalId) returns (uint256)",
        "compact": "proposalDeadline(uint256)",
        "hash": "c01f9e372d0a3b1eae80563df8ffd65cb7a727674246fdda76a2150f22a144c4",
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
    "16e9eaec2f8d689b25bc8cb583fbc3acc98275ce21d519ca2317f1464f59bd3c": {
        "abi": "function proposalDetails(uint256 proposalId) returns (address[], uint256[], bytes[], bytes32)",
        "compact": "proposalDetails(uint256)",
        "hash": "16e9eaec2f8d689b25bc8cb583fbc3acc98275ce21d519ca2317f1464f59bd3c",
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
    "2e82db94fcb54dd5c904d37d465d85bc80847ec03f4c585120a81a54e14ec7f2": {
        "abi": "function proposalDetailsAt(uint256 index) returns (uint256, address[], uint256[], bytes[], bytes32)",
        "compact": "proposalDetailsAt(uint256)",
        "hash": "2e82db94fcb54dd5c904d37d465d85bc80847ec03f4c585120a81a54e14ec7f2",
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
    "ab58fb8eba53cea23e5d9dd34414daa51c4ddbb7b72e33a982de7fc0394799a3": {
        "abi": "function proposalEta(uint256 proposalId) returns (uint256)",
        "compact": "proposalEta(uint256)",
        "hash": "ab58fb8eba53cea23e5d9dd34414daa51c4ddbb7b72e33a982de7fc0394799a3",
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
    "363695470b0bd1c9b157bf3415d3c70719155feaaa46cd7fe2caf50ed71c56b0": {
        "abi": "function proposalExecutionPlan(uint256 proposalId) returns (uint32 delay, bool[] indirect, bool[] withDelay)",
        "compact": "proposalExecutionPlan(uint256)",
        "hash": "363695470b0bd1c9b157bf3415d3c70719155feaaa46cd7fe2caf50ed71c56b0",
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
    "a9a952947f5a7af9cb8f0fce339371543e8ad80a8ac7276ddbc454ce922d27b7": {
        "abi": "function proposalNeedsQueuing(uint256) returns (bool)",
        "compact": "proposalNeedsQueuing(uint256)",
        "hash": "a9a952947f5a7af9cb8f0fce339371543e8ad80a8ac7276ddbc454ce922d27b7",
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
    "143489d04e6bf40d99d6d4e13b0351f099cf18d8f54c1caae7e4cf57845f82ee": {
        "abi": "function proposalProposer(uint256 proposalId) returns (address)",
        "compact": "proposalProposer(uint256)",
        "hash": "143489d04e6bf40d99d6d4e13b0351f099cf18d8f54c1caae7e4cf57845f82ee",
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
    "2d63f693083490e362115e919500ae9629842f1285170fde6afd5966ed7c2978": {
        "abi": "function proposalSnapshot(uint256 proposalId) returns (uint256)",
        "compact": "proposalSnapshot(uint256)",
        "hash": "2d63f693083490e362115e919500ae9629842f1285170fde6afd5966ed7c2978",
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
    "b58131b029789bd1e105fa19b9d4d3b27dab0cfa22dfabbc92fe4ec87102d94d": {
        "abi": "function proposalThreshold() returns (uint256)",
        "compact": "proposalThreshold()",
        "hash": "b58131b029789bd1e105fa19b9d4d3b27dab0cfa22dfabbc92fe4ec87102d94d",
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
    "544ffc9c44a51a2de0af4200593cbf198949430d390cff8e2745e846955bf10e": {
        "abi": "function proposalVotes(uint256 proposalId) returns (uint256 againstVotes, uint256 forVotes, uint256 abstainVotes)",
        "compact": "proposalVotes(uint256)",
        "hash": "544ffc9c44a51a2de0af4200593cbf198949430d390cff8e2745e846955bf10e",
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
    "7d5e81e2899975abda514709e9e0bd57357e66833b705e64273458e9d45f101f": {
        "abi": "function propose(address[] targets, uint256[] values, bytes[] calldatas, string description) returns (uint256)",
        "compact": "propose(address[],uint256[],bytes[],string)",
        "hash": "7d5e81e2899975abda514709e9e0bd57357e66833b705e64273458e9d45f101f",
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
    "52d1902ddf94a87b87c42e6ab3aff7da3c30beb57dc65dd86cb2543522a55a4c": {
        "abi": "function proxiableUUID() returns (bytes32)",
        "compact": "proxiableUUID()",
        "hash": "52d1902ddf94a87b87c42e6ab3aff7da3c30beb57dc65dd86cb2543522a55a4c",
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
    "160cbed73698d30ea4e77a946e771ca9fcd8e0a89bc2bfff1f3515f175283411": {
        "abi": "function queue(address[] targets, uint256[] values, bytes[] calldatas, bytes32 descriptionHash) returns (uint256)",
        "compact": "queue(address[],uint256[],bytes[],bytes32)",
        "hash": "160cbed73698d30ea4e77a946e771ca9fcd8e0a89bc2bfff1f3515f175283411",
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
    "ddf0b009236b99b4aac46c018147c786f557cd208867172b41001866ed198dee": {
        "abi": "function queue(uint256 proposalId)",
        "compact": "queue(uint256)",
        "hash": "ddf0b009236b99b4aac46c018147c786f557cd208867172b41001866ed198dee",
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
    "3a66f901bd553feb27c1b4bb3be72734538d06aebe750e7e347782fb0c0f81bf": {
        "abi": "function queueTransaction(address target, uint256 value, string signature, bytes data, uint256 eta) returns (bytes32)",
        "compact": "queueTransaction(address,uint256,string,bytes,uint256)",
        "hash": "3a66f901bd553feb27c1b4bb3be72734538d06aebe750e7e347782fb0c0f81bf",
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
    "f2b06537fd88e4601c4e09b1a3b13cbfe54ef57e7642127190bd5f119b798254": {
        "abi": "function queuedTransactions(bytes32) returns (bool)",
        "compact": "queuedTransactions(bytes32)",
        "hash": "f2b06537fd88e4601c4e09b1a3b13cbfe54ef57e7642127190bd5f119b798254",
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
    "f8ce560ace89380fa3a9ceb035d43381694cd997b5b9464ff30ddb5b2a35cd6b": {
        "abi": "function quorum(uint256 timepoint) returns (uint256)",
        "compact": "quorum(uint256)",
        "hash": "f8ce560ace89380fa3a9ceb035d43381694cd997b5b9464ff30ddb5b2a35cd6b",
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
    "97c3d3340b4c914260dfbc4b6bebd3f1c2002aa32c35807c9204ba5e3081f5f2": {
        "abi": "function quorumDenominator() returns (uint256)",
        "compact": "quorumDenominator()",
        "hash": "97c3d3340b4c914260dfbc4b6bebd3f1c2002aa32c35807c9204ba5e3081f5f2",
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
    "a7713a70c3ab02ac38da6de1c6a016c5f7207e728c793c97751dce8fa53276b7": {
        "abi": "function quorumNumerator() returns (uint256)",
        "compact": "quorumNumerator()",
        "hash": "a7713a70c3ab02ac38da6de1c6a016c5f7207e728c793c97751dce8fa53276b7",
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
    "60c4247f9dde25f452f73b1b8eb924360d41a0faa9110f3ba7b28faa2f46c556": {
        "abi": "function quorumNumerator(uint256 timepoint) returns (uint256)",
        "compact": "quorumNumerator(uint256)",
        "hash": "60c4247f9dde25f452f73b1b8eb924360d41a0faa9110f3ba7b28faa2f46c556",
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
    "ba087652ef750b77b3f3b86ecd8aac56de04fbc0d6751abdd0992cabce379054": {
        "abi": "function redeem(uint256 shares, address receiver, address owner) returns (uint256 assets)",
        "compact": "redeem(uint256,address,address)",
        "hash": "ba087652ef750b77b3f3b86ecd8aac56de04fbc0d6751abdd0992cabce379054",
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
    "c28bc2faac1fe36310fa24088decee1602945d06315afb57ecf1519b1cebb791": {
        "abi": "function relay(address target, uint256 value, bytes data)",
        "compact": "relay(address,uint256,bytes)",
        "hash": "c28bc2faac1fe36310fa24088decee1602945d06315afb57ecf1519b1cebb791",
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
    "fbccedae1e4679751917a458385f8c58c2f9cf313d3417c7e49c6ce5db7be0bf": {
        "abi": "function releasable() returns (uint256)",
        "compact": "releasable()",
        "hash": "fbccedae1e4679751917a458385f8c58c2f9cf313d3417c7e49c6ce5db7be0bf",
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
    "a3f8eaceb8363f2351a3aa940ef4282b526eda545e5d30ad782a94b33aeb2303": {
        "abi": "function releasable(address token) returns (uint256)",
        "compact": "releasable(address)",
        "hash": "a3f8eaceb8363f2351a3aa940ef4282b526eda545e5d30ad782a94b33aeb2303",
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
    "86d1a69fe35ca4d8b9269cd16ebb4ab21745497893818e21ff028c3cfd06e91b": {
        "abi": "function release()",
        "compact": "release()",
        "hash": "86d1a69fe35ca4d8b9269cd16ebb4ab21745497893818e21ff028c3cfd06e91b",
        "inputs": [],
        "name": "release",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "19165587d81f9d3d0d57225d38f5bb5163beb87e4b5fafa3a2f80c53398d9874": {
        "abi": "function release(address token)",
        "compact": "release(address)",
        "hash": "19165587d81f9d3d0d57225d38f5bb5163beb87e4b5fafa3a2f80c53398d9874",
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
    "961325219ee3a4baef0c66ad5a4479ab33c69e544a19cafe411c98510bc56224": {
        "abi": "function released() returns (uint256)",
        "compact": "released()",
        "hash": "961325219ee3a4baef0c66ad5a4479ab33c69e544a19cafe411c98510bc56224",
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
    "9852595c0fbd961d727982297e4c952a54c25835b2c098f8db439cef15df7ced": {
        "abi": "function released(address token) returns (uint256)",
        "compact": "released(address)",
        "hash": "9852595c0fbd961d727982297e4c952a54c25835b2c098f8db439cef15df7ced",
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
    "715018a616b5f2044428f6fadb7deef4ce9ca76ef60ea57978964ad137bbe7ae": {
        "abi": "function renounceOwnership()",
        "compact": "renounceOwnership()",
        "hash": "715018a616b5f2044428f6fadb7deef4ce9ca76ef60ea57978964ad137bbe7ae",
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "36568abe2c7e6c1d662bad0fe1760ac72cf2f9478a86be824d68ec83895c49e9": {
        "abi": "function renounceRole(bytes32 role, address callerConfirmation)",
        "compact": "renounceRole(bytes32,address)",
        "hash": "36568abe2c7e6c1d662bad0fe1760ac72cf2f9478a86be824d68ec83895c49e9",
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
    "fe0776f5f6175bcf7077e9fcfa3095f4cc94488f749056a77d121e8f29482fcc": {
        "abi": "function renounceRole(uint64 roleId, address callerConfirmation)",
        "compact": "renounceRole(uint64,address)",
        "hash": "fe0776f5f6175bcf7077e9fcfa3095f4cc94488f749056a77d121e8f29482fcc",
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
    "fad8b32a12ce11ea2887e7e753dadc4570ca76ac4dc839eae40921f5ca040305": {
        "abi": "function revokeOperator(address operator)",
        "compact": "revokeOperator(address)",
        "hash": "fad8b32a12ce11ea2887e7e753dadc4570ca76ac4dc839eae40921f5ca040305",
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
    "d547741fd8d55981251e167708119763c372f2b41e85a1468b0a759b055a009f": {
        "abi": "function revokeRole(bytes32 role, address account)",
        "compact": "revokeRole(bytes32,address)",
        "hash": "d547741fd8d55981251e167708119763c372f2b41e85a1468b0a759b055a009f",
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
    "b7d2b162e1ab35ef5ce4b7d4cb6a053f86953d1948b4919d5054370244592a87": {
        "abi": "function revokeRole(uint64 roleId, address account)",
        "compact": "revokeRole(uint64,address)",
        "hash": "b7d2b162e1ab35ef5ce4b7d4cb6a053f86953d1948b4919d5054370244592a87",
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
    "0aa6220b23bc05bf175124b544a67f6bd6d4fa1e30f3016d3233aaebbe23211d": {
        "abi": "function rollbackDefaultAdminDelay()",
        "compact": "rollbackDefaultAdminDelay()",
        "hash": "0aa6220b23bc05bf175124b544a67f6bd6d4fa1e30f3016d3233aaebbe23211d",
        "inputs": [],
        "name": "rollbackDefaultAdminDelay",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    "2a55205a9d4720a297dfcf892a8ff23e6f95ca084ce993231bd653f83741ac42": {
        "abi": "function royaltyInfo(uint256 tokenId, uint256 salePrice) returns (address receiver, uint256 royaltyAmount)",
        "compact": "royaltyInfo(uint256,uint256)",
        "hash": "2a55205a9d4720a297dfcf892a8ff23e6f95ca084ce993231bd653f83741ac42",
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
    "2eb2c2d667cf048e1ec82a4537b123e459951729e09ec737ac88a8e82fb2d1db": {
        "abi": "function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] values, bytes data)",
        "compact": "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)",
        "hash": "2eb2c2d667cf048e1ec82a4537b123e459951729e09ec737ac88a8e82fb2d1db",
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
    "42842e0eb38857a7775b4e7364b2775df7325074d088e7fb39590cd6281184ed": {
        "abi": "function safeTransferFrom(address from, address to, uint256 tokenId)",
        "compact": "safeTransferFrom(address,address,uint256)",
        "hash": "42842e0eb38857a7775b4e7364b2775df7325074d088e7fb39590cd6281184ed",
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
    "b88d4fde60196325a28bb7f99a2582e0b46de55b18761e960c14ad7a32099465": {
        "abi": "function safeTransferFrom(address from, address to, uint256 tokenId, bytes data)",
        "compact": "safeTransferFrom(address,address,uint256,bytes)",
        "hash": "b88d4fde60196325a28bb7f99a2582e0b46de55b18761e960c14ad7a32099465",
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
    "f242432a01954b0e0efb67e72c9b3b8ed77690657780385b256ac9aba0e35f0b": {
        "abi": "function safeTransferFrom(address from, address to, uint256 id, uint256 value, bytes data)",
        "compact": "safeTransferFrom(address,address,uint256,uint256,bytes)",
        "hash": "f242432a01954b0e0efb67e72c9b3b8ed77690657780385b256ac9aba0e35f0b",
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
    "f801a69801c85b65741536cc6a0d4970fba0295e92dee04887ddde0d050068e8": {
        "abi": "function schedule(address target, bytes data, uint48 when) returns (bytes32 operationId, uint32 nonce)",
        "compact": "schedule(address,bytes,uint48)",
        "hash": "f801a69801c85b65741536cc6a0d4970fba0295e92dee04887ddde0d050068e8",
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
    "01d5062a5467d3b7b1628160c8300270d0a61631a11733f7e29686d9c0bf2663": {
        "abi": "function schedule(address target, uint256 value, bytes data, bytes32 predecessor, bytes32 salt, uint256 delay)",
        "compact": "schedule(address,uint256,bytes,bytes32,bytes32,uint256)",
        "hash": "01d5062a5467d3b7b1628160c8300270d0a61631a11733f7e29686d9c0bf2663",
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
    "8f2a0bb0720e43552ff48c3771689e697e1df4c8ef90faf7acce47bcfa9dfdd9": {
        "abi": "function scheduleBatch(address[] targets, uint256[] values, bytes[] payloads, bytes32 predecessor, bytes32 salt, uint256 delay)",
        "compact": "scheduleBatch(address[],uint256[],bytes[],bytes32,bytes32,uint256)",
        "hash": "8f2a0bb0720e43552ff48c3771689e697e1df4c8ef90faf7acce47bcfa9dfdd9",
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
    "9bd9bbc68c9d2d57236e56ab2cc196bd1614295e6e32ba6eba9004e8c27143b6": {
        "abi": "function send(address recipient, uint256 amount, bytes data)",
        "compact": "send(address,uint256,bytes)",
        "hash": "9bd9bbc68c9d2d57236e56ab2cc196bd1614295e6e32ba6eba9004e8c27143b6",
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
    "cc3bac57a30b1932ac52c93b54fd01db9df3f3a9281ac32d9641090f23dec7f5": {
        "abi": "function setAccessManagerIgnored(address target, bytes4[] selectors, bool ignored)",
        "compact": "setAccessManagerIgnored(address,bytes4[],bool)",
        "hash": "cc3bac57a30b1932ac52c93b54fd01db9df3f3a9281ac32d9641090f23dec7f5",
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
    "a22cb4651ab9570f89bb516380c40ce76762284fb1f21337ceaf6adab99e7d4a": {
        "abi": "function setApprovalForAll(address operator, bool approved)",
        "compact": "setApprovalForAll(address,bool)",
        "hash": "a22cb4651ab9570f89bb516380c40ce76762284fb1f21337ceaf6adab99e7d4a",
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
    "7a9e5e4b0fcd5d26f54a5ddb833b014450a2d8c913fa9b2622bbd5aad903cdf4": {
        "abi": "function setAuthority(address newAuthority)",
        "compact": "setAuthority(address)",
        "hash": "7a9e5e4b0fcd5d26f54a5ddb833b014450a2d8c913fa9b2622bbd5aad903cdf4",
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
    "0a2a550d9a01e4be8b536d3fe9d058cdccf11e85730a654ac8428ca5708424ef": {
        "abi": "function setBaseDelaySeconds(uint32 newBaseDelay)",
        "compact": "setBaseDelaySeconds(uint32)",
        "hash": "0a2a550d9a01e4be8b536d3fe9d058cdccf11e85730a654ac8428ca5708424ef",
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
    "e177246ee86d7987bcb95a39b66640c483bf09ab38acca7424382ade7ac410d8": {
        "abi": "function setDelay(uint256)",
        "compact": "setDelay(uint256)",
        "hash": "e177246ee86d7987bcb95a39b66640c483bf09ab38acca7424382ade7ac410d8",
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
    "a64d95cec926c5d5068dba09ee2c58561ac6f406193532b912f2510400f40525": {
        "abi": "function setGrantDelay(uint64 roleId, uint32 newDelay)",
        "compact": "setGrantDelay(uint64,uint32)",
        "hash": "a64d95cec926c5d5068dba09ee2c58561ac6f406193532b912f2510400f40525",
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
    "29965a1dd17c60032c757c6eac6dd148280625a6723b0f37a399c515773e824b": {
        "abi": "function setInterfaceImplementer(address account, bytes32 _interfaceHash, address implementer)",
        "compact": "setInterfaceImplementer(address,bytes32,address)",
        "hash": "29965a1dd17c60032c757c6eac6dd148280625a6723b0f37a399c515773e824b",
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
    "330df7ff3b9c1dc656f750759664d4fc898ac1a8ec855a96e4015226f2f8e988": {
        "abi": "function setLateQuorumVoteExtension(uint48 newVoteExtension)",
        "compact": "setLateQuorumVoteExtension(uint48)",
        "hash": "330df7ff3b9c1dc656f750759664d4fc898ac1a8ec855a96e4015226f2f8e988",
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
    "5df8122f7e200b7f3718bd782c13bd84af63ca1e905e2a214189fde9d437916b": {
        "abi": "function setManager(address account, address newManager)",
        "compact": "setManager(address,address)",
        "hash": "5df8122f7e200b7f3718bd782c13bd84af63ca1e905e2a214189fde9d437916b",
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
    "4dd18bf55ce7f29dcfaf98cdd1107659d19d0be3b61dbef73e05ac221f0e8e28": {
        "abi": "function setPendingAdmin(address)",
        "compact": "setPendingAdmin(address)",
        "hash": "4dd18bf55ce7f29dcfaf98cdd1107659d19d0be3b61dbef73e05ac221f0e8e28",
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
    "ece40cc16893e6d4d17eb85895a0a8929bbf87875ae86562c80bb977f04d5d7f": {
        "abi": "function setProposalThreshold(uint256 newProposalThreshold)",
        "compact": "setProposalThreshold(uint256)",
        "hash": "ece40cc16893e6d4d17eb85895a0a8929bbf87875ae86562c80bb977f04d5d7f",
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
    "30cae187df26af9fe53997b9a9c5467dda5efd625e986e879b885e3a9e38c01d": {
        "abi": "function setRoleAdmin(uint64 roleId, uint64 admin)",
        "compact": "setRoleAdmin(uint64,uint64)",
        "hash": "30cae187df26af9fe53997b9a9c5467dda5efd625e986e879b885e3a9e38c01d",
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
    "52962952221c4d62c378c3706d2321e4abc3f5f81f72919a5148c781d6d1bc89": {
        "abi": "function setRoleGuardian(uint64 roleId, uint64 guardian)",
        "compact": "setRoleGuardian(uint64,uint64)",
        "hash": "52962952221c4d62c378c3706d2321e4abc3f5f81f72919a5148c781d6d1bc89",
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
    "d22b598957e925284d75382f57f356d63228157fd17e20476573712ef43af1b8": {
        "abi": "function setTargetAdminDelay(address target, uint32 newDelay)",
        "compact": "setTargetAdminDelay(address,uint32)",
        "hash": "d22b598957e925284d75382f57f356d63228157fd17e20476573712ef43af1b8",
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
    "167bd3955ec1879c6b40f19a7c37bd0e2fe81d3a3c3b112dc1ca8b5582d63601": {
        "abi": "function setTargetClosed(address target, bool closed)",
        "compact": "setTargetClosed(address,bool)",
        "hash": "167bd3955ec1879c6b40f19a7c37bd0e2fe81d3a3c3b112dc1ca8b5582d63601",
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
    "08d6122db9b28b1174853a1c3c32ddf18e828fd4929280e15df1d7fd4f4f1281": {
        "abi": "function setTargetFunctionRole(address target, bytes4[] selectors, uint64 roleId)",
        "compact": "setTargetFunctionRole(address,bytes4[],uint64)",
        "hash": "08d6122db9b28b1174853a1c3c32ddf18e828fd4929280e15df1d7fd4f4f1281",
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
    "7905188754c9f74c0de94269903ee558e946645af0fb914d0353f0cfb8617e79": {
        "abi": "function setVotingDelay(uint48 newVotingDelay)",
        "compact": "setVotingDelay(uint48)",
        "hash": "7905188754c9f74c0de94269903ee558e946645af0fb914d0353f0cfb8617e79",
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
    "e540d01d12d950a585edf9b2c8460eb5e8e24e82163968ae54acf4f6ea5687e5": {
        "abi": "function setVotingPeriod(uint32 newVotingPeriod)",
        "compact": "setVotingPeriod(uint32)",
        "hash": "e540d01d12d950a585edf9b2c8460eb5e8e24e82163968ae54acf4f6ea5687e5",
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
    "be9a655586dceb82dfa0af992b5d8ae7fa45053cb7fd6f141f541da7572978c7": {
        "abi": "function start() returns (uint256)",
        "compact": "start()",
        "hash": "be9a655586dceb82dfa0af992b5d8ae7fa45053cb7fd6f141f541da7572978c7",
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
    "3e4f49e652f693984dd7275f5fc4408373a2319382f06b947da322ee252665a0": {
        "abi": "function state(uint256 proposalId) returns (enum IGovernor.ProposalState)",
        "compact": "state(uint256)",
        "hash": "3e4f49e652f693984dd7275f5fc4408373a2319382f06b947da322ee252665a0",
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
    "01ffc9a7a5cef8baa21ed3c5c0d7e23accb804b619e9333b597f47a0d84076e2": {
        "abi": "function supportsInterface(bytes4 interfaceId) returns (bool)",
        "compact": "supportsInterface(bytes4)",
        "hash": "01ffc9a7a5cef8baa21ed3c5c0d7e23accb804b619e9333b597f47a0d84076e2",
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
    "95d89b41e2f5f391a79ec54e9d87c79d6e777c63e32c28da95b4e9e4a79250ec": {
        "abi": "function symbol() returns (string)",
        "compact": "symbol()",
        "hash": "95d89b41e2f5f391a79ec54e9d87c79d6e777c63e32c28da95b4e9e4a79250ec",
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
    "d33219b4ea2f8596b0b021af72a59510b01c5f3b998fadc3e6d9797eb22bd622": {
        "abi": "function timelock() returns (address)",
        "compact": "timelock()",
        "hash": "d33219b4ea2f8596b0b021af72a59510b01c5f3b998fadc3e6d9797eb22bd622",
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
    "fc0c546a8dce9d6e9b97c086302918c9106d97a17809f6bcacfe02124763cb39": {
        "abi": "function token() returns (contract IERC5805)",
        "compact": "token()",
        "hash": "fc0c546a8dce9d6e9b97c086302918c9106d97a17809f6bcacfe02124763cb39",
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
    "4f6ccce7c41aed90ec1f1887c4a821594c0f73758d8941d0ccaa2cde813b7298": {
        "abi": "function tokenByIndex(uint256 index) returns (uint256)",
        "compact": "tokenByIndex(uint256)",
        "hash": "4f6ccce7c41aed90ec1f1887c4a821594c0f73758d8941d0ccaa2cde813b7298",
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
    "2f745c59a57ba1667616e5a9707eeaa36ec97c283ee24190b75d9c8d14bcb215": {
        "abi": "function tokenOfOwnerByIndex(address owner, uint256 index) returns (uint256)",
        "compact": "tokenOfOwnerByIndex(address,uint256)",
        "hash": "2f745c59a57ba1667616e5a9707eeaa36ec97c283ee24190b75d9c8d14bcb215",
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
    "c87b56dda752230262935940d907f047a9f86bb5ee6aa33511fc86db33fea6cc": {
        "abi": "function tokenURI(uint256 tokenId) returns (string)",
        "compact": "tokenURI(uint256)",
        "hash": "c87b56dda752230262935940d907f047a9f86bb5ee6aa33511fc86db33fea6cc",
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
    "0023de29d10a6df0f505e653de9273d99777900150e66e85d025c9286228ccd6": {
        "abi": "function tokensReceived(address operator, address from, address to, uint256 amount, bytes userData, bytes operatorData)",
        "compact": "tokensReceived(address,address,address,uint256,bytes,bytes)",
        "hash": "0023de29d10a6df0f505e653de9273d99777900150e66e85d025c9286228ccd6",
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
    "75ab978210412a3566582b5c48035d6acbaa23439a0abe84589f753d95591523": {
        "abi": "function tokensToSend(address operator, address from, address to, uint256 amount, bytes userData, bytes operatorData)",
        "compact": "tokensToSend(address,address,address,uint256,bytes,bytes)",
        "hash": "75ab978210412a3566582b5c48035d6acbaa23439a0abe84589f753d95591523",
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
    "01e1d114555339877359e7bf87ceaa25576f6f649af8416cb9480f56ce6774f0": {
        "abi": "function totalAssets() returns (uint256 totalManagedAssets)",
        "compact": "totalAssets()",
        "hash": "01e1d114555339877359e7bf87ceaa25576f6f649af8416cb9480f56ce6774f0",
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
    "18160ddd7f15c72528c2f94fd8dfe3c8d5aa26e2c50c7d81f4bc7bee8d4b7932": {
        "abi": "function totalSupply() returns (uint256)",
        "compact": "totalSupply()",
        "hash": "18160ddd7f15c72528c2f94fd8dfe3c8d5aa26e2c50c7d81f4bc7bee8d4b7932",
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
    "bd85b039b9a7f37098d2e4b53d09e5f30943e1b957ac0be596d2535b0f8e8abe": {
        "abi": "function totalSupply(uint256 id) returns (uint256)",
        "compact": "totalSupply(uint256)",
        "hash": "bd85b039b9a7f37098d2e4b53d09e5f30943e1b957ac0be596d2535b0f8e8abe",
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
    "a9059cbb2ab09eb219583f4a59a5d0623ade346d962bcd4e46b11da047c9049b": {
        "abi": "function transfer(address to, uint256 value) returns (bool)",
        "compact": "transfer(address,uint256)",
        "hash": "a9059cbb2ab09eb219583f4a59a5d0623ade346d962bcd4e46b11da047c9049b",
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
    "1296ee6229cbd38b2b6a4120f066d2a0f66eb1e2b851093264872922acf5947b": {
        "abi": "function transferAndCall(address to, uint256 amount) returns (bool)",
        "compact": "transferAndCall(address,uint256)",
        "hash": "1296ee6229cbd38b2b6a4120f066d2a0f66eb1e2b851093264872922acf5947b",
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
    "4000aea038e4acde4ff65b413088ec658ae209bdf83ccba2ffbbaa2d9ce48cde": {
        "abi": "function transferAndCall(address to, uint256 amount, bytes data) returns (bool)",
        "compact": "transferAndCall(address,uint256,bytes)",
        "hash": "4000aea038e4acde4ff65b413088ec658ae209bdf83ccba2ffbbaa2d9ce48cde",
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
    "23b872dd7302113369cda2901243429419bec145408fa8b352b3dd92b66c680b": {
        "abi": "function transferFrom(address from, address to, uint256 value) returns (bool)",
        "compact": "transferFrom(address,address,uint256)",
        "hash": "23b872dd7302113369cda2901243429419bec145408fa8b352b3dd92b66c680b",
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
    "d8fbe9943963369a6ec55b024b56e8566805e558b69ab95c3cee1ad8b151f376": {
        "abi": "function transferFromAndCall(address from, address to, uint256 amount) returns (bool)",
        "compact": "transferFromAndCall(address,address,uint256)",
        "hash": "d8fbe9943963369a6ec55b024b56e8566805e558b69ab95c3cee1ad8b151f376",
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
    "c1d34b893a35286aae2bf0e96b3c6bf8584251d828cfe2797765e35927368ce6": {
        "abi": "function transferFromAndCall(address from, address to, uint256 amount, bytes data) returns (bool)",
        "compact": "transferFromAndCall(address,address,uint256,bytes)",
        "hash": "c1d34b893a35286aae2bf0e96b3c6bf8584251d828cfe2797765e35927368ce6",
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
    "f2fde38b092330466c661fc723d5289b90272a3e580e3187d1d7ef788506c557": {
        "abi": "function transferOwnership(address newOwner)",
        "compact": "transferOwnership(address)",
        "hash": "f2fde38b092330466c661fc723d5289b90272a3e580e3187d1d7ef788506c557",
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
    "7da0a87733a6f385e0f208e3a24e2f831efb188826ebeea6e180d0bbd26a4a63": {
        "abi": "function trustedForwarder() returns (address)",
        "compact": "trustedForwarder()",
        "hash": "7da0a87733a6f385e0f208e3a24e2f831efb188826ebeea6e180d0bbd26a4a63",
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
    "6f307dc33eda939db5102f62714675974157fd7019165a7f825f844496510d79": {
        "abi": "function underlying() returns (contract IERC20)",
        "compact": "underlying()",
        "hash": "6f307dc33eda939db5102f62714675974157fd7019165a7f825f844496510d79",
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
    "18ff183c0b125f9065177ced9b3f1645bef1c50a28f9920ceb9cd3b00e0a2866": {
        "abi": "function updateAuthority(address target, address newAuthority)",
        "compact": "updateAuthority(address,address)",
        "hash": "18ff183c0b125f9065177ced9b3f1645bef1c50a28f9920ceb9cd3b00e0a2866",
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
    "64d62353e0a38418662172c9bac1ceecd2406724c94ead62e5e2e7eab3a613ee": {
        "abi": "function updateDelay(uint256 newDelay)",
        "compact": "updateDelay(uint256)",
        "hash": "64d62353e0a38418662172c9bac1ceecd2406724c94ead62e5e2e7eab3a613ee",
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
    "a41e7d51c5b4eeba8079bc0f66285a2953e8d97cae9e56174001e47da6a65b9c": {
        "abi": "function updateERC165Cache(address account, bytes4 interfaceId)",
        "compact": "updateERC165Cache(address,bytes4)",
        "hash": "a41e7d51c5b4eeba8079bc0f66285a2953e8d97cae9e56174001e47da6a65b9c",
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
    "06f3f9e6e098206cabdf9ec2d19008ba4326f1148a2591feeca600e0c3fd6ffa": {
        "abi": "function updateQuorumNumerator(uint256 newQuorumNumerator)",
        "compact": "updateQuorumNumerator(uint256)",
        "hash": "06f3f9e6e098206cabdf9ec2d19008ba4326f1148a2591feeca600e0c3fd6ffa",
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
    "a890c9106334b172bdbaf74a61e4aa6f3328b8b6557a41bf65b19ef2d2d46ad8": {
        "abi": "function updateTimelock(contract ICompoundTimelock newTimelock)",
        "compact": "updateTimelock(address)",
        "hash": "a890c9106334b172bdbaf74a61e4aa6f3328b8b6557a41bf65b19ef2d2d46ad8",
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
    "9623609deed4b45a9ee8abe874ceddbff059010729997683586e99fbef74606d": {
        "abi": "function upgradeAndCall(contract ITransparentUpgradeableProxy proxy, address implementation, bytes data)",
        "compact": "upgradeAndCall(address,address,bytes)",
        "hash": "9623609deed4b45a9ee8abe874ceddbff059010729997683586e99fbef74606d",
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
    "3659cfe672549963da205df855ebfb8672cda4801e0255183bd6a6f536855df7": {
        "abi": "function upgradeTo(address newImplementation)",
        "compact": "upgradeTo(address)",
        "hash": "3659cfe672549963da205df855ebfb8672cda4801e0255183bd6a6f536855df7",
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
    "4f1ef2866b98625bdfefae89411f7a82754ac4089eff8e78c8832329a538337f": {
        "abi": "function upgradeToAndCall(address, bytes)",
        "compact": "upgradeToAndCall(address,bytes)",
        "hash": "4f1ef2866b98625bdfefae89411f7a82754ac4089eff8e78c8832329a538337f",
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
    "0e89341c5b7431e95282621bb9c54e51fb5c29234df43f9e19151d3892fb0380": {
        "abi": "function uri(uint256) returns (string)",
        "compact": "uri(uint256)",
        "hash": "0e89341c5b7431e95282621bb9c54e51fb5c29234df43f9e19151d3892fb0380",
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
    "19d8d38ca323137bef1c9ce515e9766141df04120dee291c688a95534cf81791": {
        "abi": "function verify(struct ERC2771Forwarder.ForwardRequestData request) returns (bool)",
        "compact": "verify((address,address,uint256,uint256,uint48,bytes,bytes))",
        "hash": "19d8d38ca323137bef1c9ce515e9766141df04120dee291c688a95534cf81791",
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
    "54fd4d50fce680dbc2593d9e893064bfa880e5642d0036394e1a1849f7fc0749": {
        "abi": "function version() returns (string)",
        "compact": "version()",
        "hash": "54fd4d50fce680dbc2593d9e893064bfa880e5642d0036394e1a1849f7fc0749",
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
    "810ec23b44a88244ba551e95bc42bd74a535a8acc1c9bbaa99bdca571499cf9a": {
        "abi": "function vestedAmount(address token, uint64 timestamp) returns (uint256)",
        "compact": "vestedAmount(address,uint64)",
        "hash": "810ec23b44a88244ba551e95bc42bd74a535a8acc1c9bbaa99bdca571499cf9a",
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
    "0a17b06b0f4a7923edaed4cc4ea2a8a404892f3e4a021c3bf6d6579efe08bb5a": {
        "abi": "function vestedAmount(uint64 timestamp) returns (uint256)",
        "compact": "vestedAmount(uint64)",
        "hash": "0a17b06b0f4a7923edaed4cc4ea2a8a404892f3e4a021c3bf6d6579efe08bb5a",
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
    "3932abb147ca4e152f434db4172640dc1782009c61fbbca67ebb087a9fe0a44c": {
        "abi": "function votingDelay() returns (uint256)",
        "compact": "votingDelay()",
        "hash": "3932abb147ca4e152f434db4172640dc1782009c61fbbca67ebb087a9fe0a44c",
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
    "02a251a3c27fae516703e1a6b6b00e095049734567eea4eba2ff5baf7b6f5d25": {
        "abi": "function votingPeriod() returns (uint256)",
        "compact": "votingPeriod()",
        "hash": "02a251a3c27fae516703e1a6b6b00e095049734567eea4eba2ff5baf7b6f5d25",
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
    "b460af94a08911df9ce375fb2a190ee15b3a9dfdda8ede7986fb72478f042661": {
        "abi": "function withdraw(uint256 assets, address receiver, address owner) returns (uint256 shares)",
        "compact": "withdraw(uint256,address,address)",
        "hash": "b460af94a08911df9ce375fb2a190ee15b3a9dfdda8ede7986fb72478f042661",
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
    "205c2878e2b9718d4efa336821ca468d100691993725642feda873d86ff02469": {
        "abi": "function withdrawTo(address account, uint256 value) returns (bool)",
        "compact": "withdrawTo(address,uint256)",
        "hash": "205c2878e2b9718d4efa336821ca468d100691993725642feda873d86ff02469",
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
    "7c1b126c8b6c6f6e11dcf4e8d4ddd8e2fa9be15a0c8605fa93ac30c8f01b469a": {
        "abi": "function withdrawTo(address account, uint256[] tokenIds) returns (bool)",
        "compact": "withdrawTo(address,uint256[])",
        "hash": "7c1b126c8b6c6f6e11dcf4e8d4ddd8e2fa9be15a0c8605fa93ac30c8f01b469a",
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
