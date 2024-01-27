package evmabiless

// Do not edit, automatically generated file.

var signatures = map[MethodPrefix]*Abi{
	MethodPrefix{0x75, 0xb2, 0x38, 0xfc}: &Abi{
		Name:            "ADMIN_ROLE",
		ABI:             "function ADMIN_ROLE() returns (uint64)",
		Compact:         "ADMIN_ROLE()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
	},
	MethodPrefix{0x66, 0x97, 0xb2, 0x32}: &Abi{
		Name:    "AccessControlBadConfirmation",
		ABI:     "error AccessControlBadConfirmation()",
		Compact: "AccessControlBadConfirmation()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x19, 0xca, 0x5e, 0xbb}: &Abi{
		Name:    "AccessControlEnforcedDefaultAdminDelay",
		ABI:     "error AccessControlEnforcedDefaultAdminDelay(uint48 schedule)",
		Compact: "AccessControlEnforcedDefaultAdminDelay(uint48)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "schedule",
				Type:         "uint48",
				InternalType: "uint48",
			},
		},
	},
	MethodPrefix{0x3f, 0xc3, 0xc2, 0x7a}: &Abi{
		Name:    "AccessControlEnforcedDefaultAdminRules",
		ABI:     "error AccessControlEnforcedDefaultAdminRules()",
		Compact: "AccessControlEnforcedDefaultAdminRules()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0xc2, 0x2c, 0x80, 0x22}: &Abi{
		Name:    "AccessControlInvalidDefaultAdmin",
		ABI:     "error AccessControlInvalidDefaultAdmin(address defaultAdmin)",
		Compact: "AccessControlInvalidDefaultAdmin(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "defaultAdmin",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xe2, 0x51, 0x7d, 0x3f}: &Abi{
		Name:    "AccessControlUnauthorizedAccount",
		ABI:     "error AccessControlUnauthorizedAccount(address account, bytes32 neededRole)",
		Compact: "AccessControlUnauthorizedAccount(address,bytes32)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "neededRole",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0xc2, 0xf3, 0x1e, 0x5e}: &Abi{
		Name:    "AccessManagedInvalidAuthority",
		ABI:     "error AccessManagedInvalidAuthority(address authority)",
		Compact: "AccessManagedInvalidAuthority(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "authority",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xaf, 0x77, 0x16, 0x9d}: &Abi{
		Name:    "AccessManagedRequiredDelay",
		ABI:     "error AccessManagedRequiredDelay(address caller, uint32 delay)",
		Compact: "AccessManagedRequiredDelay(address,uint32)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "caller",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "delay",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
	},
	MethodPrefix{0x06, 0x8c, 0xa9, 0xd8}: &Abi{
		Name:    "AccessManagedUnauthorized",
		ABI:     "error AccessManagedUnauthorized(address caller)",
		Compact: "AccessManagedUnauthorized(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "caller",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x81, 0x3e, 0x94, 0x59}: &Abi{
		Name:    "AccessManagerAlreadyScheduled",
		ABI:     "error AccessManagerAlreadyScheduled(bytes32 operationId)",
		Compact: "AccessManagerAlreadyScheduled(bytes32)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operationId",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x5f, 0x15, 0x9e, 0x63}: &Abi{
		Name:    "AccessManagerBadConfirmation",
		ABI:     "error AccessManagerBadConfirmation()",
		Compact: "AccessManagerBadConfirmation()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x78, 0xa5, 0xd6, 0xe4}: &Abi{
		Name:    "AccessManagerExpired",
		ABI:     "error AccessManagerExpired(bytes32 operationId)",
		Compact: "AccessManagerExpired(bytes32)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operationId",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x42, 0x0c, 0xf4, 0x7a}: &Abi{
		Name:    "AccessManagerIgnoredSet",
		ABI:     "event AccessManagerIgnoredSet(address target, bytes4 selector, bool ignored)",
		Compact: "AccessManagerIgnoredSet(address,bytes4,bool)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "selector",
				Type:         "bytes4",
				InternalType: "bytes4",
			},
			&AbiIO{
				Name:         "ignored",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x08, 0x13, 0xad, 0xa2}: &Abi{
		Name:    "AccessManagerInvalidInitialAdmin",
		ABI:     "error AccessManagerInvalidInitialAdmin(address initialAdmin)",
		Compact: "AccessManagerInvalidInitialAdmin(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "initialAdmin",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x5a, 0x06, 0x8b, 0xc8}: &Abi{
		Name:    "AccessManagerLockedAccount",
		ABI:     "error AccessManagerLockedAccount(address account)",
		Compact: "AccessManagerLockedAccount(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x18, 0x71, 0xa9, 0x0c}: &Abi{
		Name:    "AccessManagerLockedRole",
		ABI:     "error AccessManagerLockedRole(uint64 roleId)",
		Compact: "AccessManagerLockedRole(uint64)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
	},
	MethodPrefix{0x18, 0xcb, 0x6b, 0x7a}: &Abi{
		Name:    "AccessManagerNotReady",
		ABI:     "error AccessManagerNotReady(bytes32 operationId)",
		Compact: "AccessManagerNotReady(bytes32)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operationId",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x60, 0xa2, 0x99, 0xb0}: &Abi{
		Name:    "AccessManagerNotScheduled",
		ABI:     "error AccessManagerNotScheduled(bytes32 operationId)",
		Compact: "AccessManagerNotScheduled(bytes32)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operationId",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0xf0, 0x7e, 0x03, 0x8f}: &Abi{
		Name:    "AccessManagerUnauthorizedAccount",
		ABI:     "error AccessManagerUnauthorizedAccount(address msgsender, uint64 roleId)",
		Compact: "AccessManagerUnauthorizedAccount(address,uint64)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "msgsender",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
	},
	MethodPrefix{0x81, 0xc6, 0xf2, 0x4b}: &Abi{
		Name:    "AccessManagerUnauthorizedCall",
		ABI:     "error AccessManagerUnauthorizedCall(address caller, address target, bytes4 selector)",
		Compact: "AccessManagerUnauthorizedCall(address,address,bytes4)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "caller",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "selector",
				Type:         "bytes4",
				InternalType: "bytes4",
			},
		},
	},
	MethodPrefix{0x3f, 0xe2, 0x75, 0x1c}: &Abi{
		Name:    "AccessManagerUnauthorizedCancel",
		ABI:     "error AccessManagerUnauthorizedCancel(address msgsender, address caller, address target, bytes4 selector)",
		Compact: "AccessManagerUnauthorizedCancel(address,address,address,bytes4)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "msgsender",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "caller",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "selector",
				Type:         "bytes4",
				InternalType: "bytes4",
			},
		},
	},
	MethodPrefix{0x32, 0x0f, 0xf7, 0x48}: &Abi{
		Name:    "AccessManagerUnauthorizedConsume",
		ABI:     "error AccessManagerUnauthorizedConsume(address target)",
		Compact: "AccessManagerUnauthorizedConsume(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x99, 0x96, 0xb3, 0x15}: &Abi{
		Name:    "AddressEmptyCode",
		ABI:     "error AddressEmptyCode(address target)",
		Compact: "AddressEmptyCode(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xcd, 0x78, 0x60, 0x59}: &Abi{
		Name:    "AddressInsufficientBalance",
		ABI:     "error AddressInsufficientBalance(address account)",
		Compact: "AddressInsufficientBalance(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x7e, 0x64, 0x4d, 0x79}: &Abi{
		Name:    "AdminChanged",
		ABI:     "event AdminChanged(address previousAdmin, address newAdmin)",
		Compact: "AdminChanged(address,address)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "previousAdmin",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "newAdmin",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x8c, 0x5b, 0xe1, 0xe5}: &Abi{
		Name:    "Approval",
		ABI:     "event Approval(address indexed owner, address indexed spender, uint256 value)",
		Compact: "Approval(address,address,uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "spender",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x17, 0x30, 0x7e, 0xab}: &Abi{
		Name:    "ApprovalForAll",
		ABI:     "event ApprovalForAll(address indexed owner, address indexed operator, bool approved)",
		Compact: "ApprovalForAll(address,address,bool)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "approved",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x2f, 0x65, 0x8b, 0x44}: &Abi{
		Name:    "AuthorityUpdated",
		ABI:     "event AuthorityUpdated(address authority)",
		Compact: "AuthorityUpdated(address)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "authority",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xf4, 0xca, 0xeb, 0x2d}: &Abi{
		Name:    "AuthorizedOperator",
		ABI:     "event AuthorizedOperator(address indexed operator, address indexed tokenHolder)",
		Compact: "AuthorizedOperator(address,address)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "tokenHolder",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xde, 0xaa, 0xa7, 0xcc}: &Abi{
		Name:            "BALLOT_TYPEHASH",
		ABI:             "function BALLOT_TYPEHASH() returns (bytes32)",
		Compact:         "BALLOT_TYPEHASH()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x65, 0x13, 0x5e, 0x4d}: &Abi{
		Name:    "BaseDelaySet",
		ABI:     "event BaseDelaySet(uint32 oldBaseDelaySeconds, uint32 newBaseDelaySeconds)",
		Compact: "BaseDelaySet(uint32,uint32)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "oldBaseDelaySeconds",
				Type:         "uint32",
				InternalType: "uint32",
			},
			&AbiIO{
				Name:         "newBaseDelaySeconds",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
	},
	MethodPrefix{0x6b, 0xd5, 0xc9, 0x50}: &Abi{
		Name:    "BatchMetadataUpdate",
		ABI:     "event BatchMetadataUpdate(uint256 _fromTokenId, uint256 _toTokenId)",
		Compact: "BatchMetadataUpdate(uint256,uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "_fromTokenId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "_toTokenId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x84, 0x7a, 0xc5, 0x64}: &Abi{
		Name:    "BeaconInvalidImplementation",
		ABI:     "error BeaconInvalidImplementation(address implementation)",
		Compact: "BeaconInvalidImplementation(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "implementation",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x1c, 0xf3, 0xb0, 0x3a}: &Abi{
		Name:    "BeaconUpgraded",
		ABI:     "event BeaconUpgraded(address indexed beacon)",
		Compact: "BeaconUpgraded(address)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "beacon",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xa7, 0x8a, 0x9b, 0xe3}: &Abi{
		Name:    "Burned",
		ABI:     "event Burned(address indexed operator, address indexed from, uint256 amount, bytes data, bytes operatorData)",
		Compact: "Burned(address,address,uint256,bytes,bytes)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "from",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "operatorData",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
	},
	MethodPrefix{0xb0, 0x8e, 0x51, 0xc0}: &Abi{
		Name:            "CANCELLER_ROLE",
		ABI:             "function CANCELLER_ROLE() returns (bytes32)",
		Compact:         "CANCELLER_ROLE()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x4b, 0xf5, 0xd7, 0xe9}: &Abi{
		Name:            "CLOCK_MODE",
		ABI:             "function CLOCK_MODE() returns (string)",
		Compact:         "CLOCK_MODE()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "string",
				InternalType: "string",
			},
		},
	},
	MethodPrefix{0xdd, 0x4e, 0x2b, 0xa5}: &Abi{
		Name:            "COUNTING_MODE",
		ABI:             "function COUNTING_MODE() returns (string)",
		Compact:         "COUNTING_MODE()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "string",
				InternalType: "string",
			},
		},
	},
	MethodPrefix{0xc2, 0x61, 0x7e, 0xfa}: &Abi{
		Name:    "CallExecuted",
		ABI:     "event CallExecuted(bytes32 indexed id, uint256 indexed index, address target, uint256 value, bytes data)",
		Compact: "CallExecuted(bytes32,uint256,address,uint256,bytes)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "id",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "index",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
	},
	MethodPrefix{0x20, 0xfd, 0xa5, 0xfd}: &Abi{
		Name:    "CallSalt",
		ABI:     "event CallSalt(bytes32 indexed id, bytes32 salt)",
		Compact: "CallSalt(bytes32,bytes32)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "id",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "salt",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x4c, 0xf4, 0x41, 0x0c}: &Abi{
		Name:    "CallScheduled",
		ABI:     "event CallScheduled(bytes32 indexed id, uint256 indexed index, address target, uint256 value, bytes data, bytes32 predecessor, uint256 delay)",
		Compact: "CallScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "id",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "index",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "predecessor",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "delay",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x2f, 0xff, 0xc0, 0x91}: &Abi{
		Name:    "CancelTransaction",
		ABI:     "event CancelTransaction(bytes32 indexed txHash, address indexed target, uint256 value, string signature, bytes data, uint256 eta)",
		Compact: "CancelTransaction(bytes32,address,uint256,string,bytes,uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "txHash",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "signature",
				Type:         "string",
				InternalType: "string",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "eta",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xba, 0xa1, 0xeb, 0x22}: &Abi{
		Name:    "Cancelled",
		ABI:     "event Cancelled(bytes32 indexed id)",
		Compact: "Cancelled(bytes32)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "id",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x25, 0x20, 0x60, 0x1d}: &Abi{
		Name:    "CheckpointUnorderedInsertion",
		ABI:     "error CheckpointUnorderedInsertion()",
		Compact: "CheckpointUnorderedInsertion()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0xde, 0xaa, 0x91, 0xb6}: &Abi{
		Name:    "ConsecutiveTransfer",
		ABI:     "event ConsecutiveTransfer(uint256 indexed fromTokenId, uint256 toTokenId, address indexed fromAddress, address indexed toAddress)",
		Compact: "ConsecutiveTransfer(uint256,uint256,address,address)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "fromTokenId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "toTokenId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "fromAddress",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "toAddress",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x4c, 0xa2, 0x49, 0xdc}: &Abi{
		Name:    "Create2EmptyBytecode",
		ABI:     "error Create2EmptyBytecode()",
		Compact: "Create2EmptyBytecode()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x74, 0x17, 0x52, 0xc2}: &Abi{
		Name:    "Create2FailedDeployment",
		ABI:     "error Create2FailedDeployment()",
		Compact: "Create2FailedDeployment()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0xe4, 0xbb, 0xec, 0xac}: &Abi{
		Name:    "Create2InsufficientBalance",
		ABI:     "error Create2InsufficientBalance(uint256 balance, uint256 needed)",
		Compact: "Create2InsufficientBalance(uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "balance",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "needed",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xa2, 0x17, 0xfd, 0xdf}: &Abi{
		Name:            "DEFAULT_ADMIN_ROLE",
		ABI:             "function DEFAULT_ADMIN_ROLE() returns (bytes32)",
		Compact:         "DEFAULT_ADMIN_ROLE()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x36, 0x44, 0xe5, 0x15}: &Abi{
		Name:            "DOMAIN_SEPARATOR",
		ABI:             "function DOMAIN_SEPARATOR() returns (bytes32)",
		Compact:         "DOMAIN_SEPARATOR()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x2b, 0x1f, 0xa2, 0xed}: &Abi{
		Name:    "DefaultAdminDelayChangeCanceled",
		ABI:     "event DefaultAdminDelayChangeCanceled()",
		Compact: "DefaultAdminDelayChangeCanceled()",
		Type:    "event",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0xf1, 0x03, 0x8c, 0x18}: &Abi{
		Name:    "DefaultAdminDelayChangeScheduled",
		ABI:     "event DefaultAdminDelayChangeScheduled(uint48 newDelay, uint48 effectSchedule)",
		Compact: "DefaultAdminDelayChangeScheduled(uint48,uint48)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "newDelay",
				Type:         "uint48",
				InternalType: "uint48",
			},
			&AbiIO{
				Name:         "effectSchedule",
				Type:         "uint48",
				InternalType: "uint48",
			},
		},
	},
	MethodPrefix{0x88, 0x86, 0xeb, 0xfc}: &Abi{
		Name:    "DefaultAdminTransferCanceled",
		ABI:     "event DefaultAdminTransferCanceled()",
		Compact: "DefaultAdminTransferCanceled()",
		Type:    "event",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x33, 0x77, 0xdc, 0x44}: &Abi{
		Name:    "DefaultAdminTransferScheduled",
		ABI:     "event DefaultAdminTransferScheduled(address indexed newAdmin, uint48 acceptSchedule)",
		Compact: "DefaultAdminTransferScheduled(address,uint48)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "newAdmin",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "acceptSchedule",
				Type:         "uint48",
				InternalType: "uint48",
			},
		},
	},
	MethodPrefix{0x31, 0x34, 0xe8, 0xa2}: &Abi{
		Name:    "DelegateChanged",
		ABI:     "event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate)",
		Compact: "DelegateChanged(address,address,address)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "delegator",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "fromDelegate",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "toDelegate",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xde, 0xc2, 0xba, 0xcd}: &Abi{
		Name:    "DelegateVotesChanged",
		ABI:     "event DelegateVotesChanged(address indexed delegate, uint256 previousVotes, uint256 newVotes)",
		Compact: "DelegateVotesChanged(address,uint256,uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "delegate",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "previousVotes",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "newVotes",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xdc, 0xbc, 0x1c, 0x05}: &Abi{
		Name:    "Deposit",
		ABI:     "event Deposit(address indexed sender, address indexed owner, uint256 assets, uint256 shares)",
		Compact: "Deposit(address,address,uint256,uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "sender",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "assets",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "shares",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xf6, 0x45, 0xee, 0xdf}: &Abi{
		Name:    "ECDSAInvalidSignature",
		ABI:     "error ECDSAInvalidSignature()",
		Compact: "ECDSAInvalidSignature()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0xfc, 0xe6, 0x98, 0xf7}: &Abi{
		Name:    "ECDSAInvalidSignatureLength",
		ABI:     "error ECDSAInvalidSignatureLength(uint256 length)",
		Compact: "ECDSAInvalidSignatureLength(uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "length",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xd7, 0x8b, 0xce, 0x0c}: &Abi{
		Name:    "ECDSAInvalidSignatureS",
		ABI:     "error ECDSAInvalidSignatureS(bytes32 s)",
		Compact: "ECDSAInvalidSignatureS(bytes32)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "s",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x0a, 0x63, 0x87, 0xc9}: &Abi{
		Name:    "EIP712DomainChanged",
		ABI:     "event EIP712DomainChanged()",
		Compact: "EIP712DomainChanged()",
		Type:    "event",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x03, 0xde, 0xe4, 0xc5}: &Abi{
		Name:    "ERC1155InsufficientBalance",
		ABI:     "error ERC1155InsufficientBalance(address sender, uint256 balance, uint256 needed, uint256 tokenId)",
		Compact: "ERC1155InsufficientBalance(address,uint256,uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "sender",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "balance",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "needed",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "tokenId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x3e, 0x31, 0x88, 0x4e}: &Abi{
		Name:    "ERC1155InvalidApprover",
		ABI:     "error ERC1155InvalidApprover(address approver)",
		Compact: "ERC1155InvalidApprover(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "approver",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x5b, 0x05, 0x99, 0x91}: &Abi{
		Name:    "ERC1155InvalidArrayLength",
		ABI:     "error ERC1155InvalidArrayLength(uint256 idsLength, uint256 valuesLength)",
		Compact: "ERC1155InvalidArrayLength(uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "idsLength",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "valuesLength",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xce, 0xd3, 0xe1, 0x00}: &Abi{
		Name:    "ERC1155InvalidOperator",
		ABI:     "error ERC1155InvalidOperator(address operator)",
		Compact: "ERC1155InvalidOperator(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x57, 0xf4, 0x47, 0xce}: &Abi{
		Name:    "ERC1155InvalidReceiver",
		ABI:     "error ERC1155InvalidReceiver(address receiver)",
		Compact: "ERC1155InvalidReceiver(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "receiver",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x01, 0xa8, 0x35, 0x14}: &Abi{
		Name:    "ERC1155InvalidSender",
		ABI:     "error ERC1155InvalidSender(address sender)",
		Compact: "ERC1155InvalidSender(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "sender",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xe2, 0x37, 0xd9, 0x22}: &Abi{
		Name:    "ERC1155MissingApprovalForAll",
		ABI:     "error ERC1155MissingApprovalForAll(address operator, address owner)",
		Compact: "ERC1155MissingApprovalForAll(address,address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xc2, 0xf8, 0x68, 0xf4}: &Abi{
		Name:    "ERC1167FailedCreateClone",
		ABI:     "error ERC1167FailedCreateClone()",
		Compact: "ERC1167FailedCreateClone()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x62, 0xe7, 0x7b, 0xa2}: &Abi{
		Name:    "ERC1967InvalidAdmin",
		ABI:     "error ERC1967InvalidAdmin(address admin)",
		Compact: "ERC1967InvalidAdmin(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "admin",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x64, 0xce, 0xd0, 0xec}: &Abi{
		Name:    "ERC1967InvalidBeacon",
		ABI:     "error ERC1967InvalidBeacon(address beacon)",
		Compact: "ERC1967InvalidBeacon(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "beacon",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x4c, 0x9c, 0x8c, 0xe3}: &Abi{
		Name:    "ERC1967InvalidImplementation",
		ABI:     "error ERC1967InvalidImplementation(address implementation)",
		Compact: "ERC1967InvalidImplementation(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "implementation",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xb3, 0x98, 0x97, 0x9f}: &Abi{
		Name:    "ERC1967NonPayable",
		ABI:     "error ERC1967NonPayable()",
		Compact: "ERC1967NonPayable()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x9e, 0x79, 0xf8, 0x54}: &Abi{
		Name:    "ERC20ExceededCap",
		ABI:     "error ERC20ExceededCap(uint256 increasedSupply, uint256 cap)",
		Compact: "ERC20ExceededCap(uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "increasedSupply",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "cap",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x1c, 0xb1, 0x5d, 0x26}: &Abi{
		Name:    "ERC20ExceededSafeSupply",
		ABI:     "error ERC20ExceededSafeSupply(uint256 increasedSupply, uint256 cap)",
		Compact: "ERC20ExceededSafeSupply(uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "increasedSupply",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "cap",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xfb, 0x8f, 0x41, 0xb2}: &Abi{
		Name:    "ERC20InsufficientAllowance",
		ABI:     "error ERC20InsufficientAllowance(address spender, uint256 allowance, uint256 needed)",
		Compact: "ERC20InsufficientAllowance(address,uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "spender",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "allowance",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "needed",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xe4, 0x50, 0xd3, 0x8c}: &Abi{
		Name:    "ERC20InsufficientBalance",
		ABI:     "error ERC20InsufficientBalance(address sender, uint256 balance, uint256 needed)",
		Compact: "ERC20InsufficientBalance(address,uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "sender",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "balance",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "needed",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xe6, 0x02, 0xdf, 0x05}: &Abi{
		Name:    "ERC20InvalidApprover",
		ABI:     "error ERC20InvalidApprover(address approver)",
		Compact: "ERC20InvalidApprover(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "approver",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x39, 0x2e, 0x1e, 0x27}: &Abi{
		Name:    "ERC20InvalidCap",
		ABI:     "error ERC20InvalidCap(uint256 cap)",
		Compact: "ERC20InvalidCap(uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "cap",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xec, 0x44, 0x2f, 0x05}: &Abi{
		Name:    "ERC20InvalidReceiver",
		ABI:     "error ERC20InvalidReceiver(address receiver)",
		Compact: "ERC20InvalidReceiver(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "receiver",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x96, 0xc6, 0xfd, 0x1e}: &Abi{
		Name:    "ERC20InvalidSender",
		ABI:     "error ERC20InvalidSender(address sender)",
		Compact: "ERC20InvalidSender(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "sender",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x94, 0x28, 0x0d, 0x62}: &Abi{
		Name:    "ERC20InvalidSpender",
		ABI:     "error ERC20InvalidSpender(address spender)",
		Compact: "ERC20InvalidSpender(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "spender",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x43, 0x8d, 0x6f, 0xe3}: &Abi{
		Name:    "ERC20InvalidUnderlying",
		ABI:     "error ERC20InvalidUnderlying(address token)",
		Compact: "ERC20InvalidUnderlying(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "token",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xc0, 0xe5, 0x23, 0x49}: &Abi{
		Name:    "ERC20Released",
		ABI:     "event ERC20Released(address indexed token, uint256 amount)",
		Compact: "ERC20Released(address,uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "token",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x62, 0x79, 0x13, 0x02}: &Abi{
		Name:    "ERC2612ExpiredSignature",
		ABI:     "error ERC2612ExpiredSignature(uint256 deadline)",
		Compact: "ERC2612ExpiredSignature(uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "deadline",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x4b, 0x80, 0x0e, 0x46}: &Abi{
		Name:    "ERC2612InvalidSigner",
		ABI:     "error ERC2612InvalidSigner(address signer, address owner)",
		Compact: "ERC2612InvalidSigner(address,address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "signer",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x94, 0xee, 0xf5, 0x8a}: &Abi{
		Name:    "ERC2771ForwarderExpiredRequest",
		ABI:     "error ERC2771ForwarderExpiredRequest(uint48 deadline)",
		Compact: "ERC2771ForwarderExpiredRequest(uint48)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "deadline",
				Type:         "uint48",
				InternalType: "uint48",
			},
		},
	},
	MethodPrefix{0xc8, 0x45, 0xa0, 0x56}: &Abi{
		Name:    "ERC2771ForwarderInvalidSigner",
		ABI:     "error ERC2771ForwarderInvalidSigner(address signer, address from)",
		Compact: "ERC2771ForwarderInvalidSigner(address,address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "signer",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "from",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x70, 0x64, 0x7f, 0x79}: &Abi{
		Name:    "ERC2771ForwarderMismatchedValue",
		ABI:     "error ERC2771ForwarderMismatchedValue(uint256 requestedValue, uint256 msgValue)",
		Compact: "ERC2771ForwarderMismatchedValue(uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "requestedValue",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "msgValue",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xd2, 0x65, 0x0c, 0xd1}: &Abi{
		Name:    "ERC2771UntrustfulTarget",
		ABI:     "error ERC2771UntrustfulTarget(address target, address forwarder)",
		Compact: "ERC2771UntrustfulTarget(address,address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "forwarder",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x6f, 0x48, 0x3d, 0x09}: &Abi{
		Name:    "ERC2981InvalidDefaultRoyalty",
		ABI:     "error ERC2981InvalidDefaultRoyalty(uint256 numerator, uint256 denominator)",
		Compact: "ERC2981InvalidDefaultRoyalty(uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "numerator",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "denominator",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xb6, 0xd9, 0x90, 0x0a}: &Abi{
		Name:    "ERC2981InvalidDefaultRoyaltyReceiver",
		ABI:     "error ERC2981InvalidDefaultRoyaltyReceiver(address receiver)",
		Compact: "ERC2981InvalidDefaultRoyaltyReceiver(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "receiver",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xdf, 0xd1, 0xfc, 0x1b}: &Abi{
		Name:    "ERC2981InvalidTokenRoyalty",
		ABI:     "error ERC2981InvalidTokenRoyalty(uint256 tokenId, uint256 numerator, uint256 denominator)",
		Compact: "ERC2981InvalidTokenRoyalty(uint256,uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "tokenId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "numerator",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "denominator",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x96, 0x9f, 0x08, 0x52}: &Abi{
		Name:    "ERC2981InvalidTokenRoyaltyReceiver",
		ABI:     "error ERC2981InvalidTokenRoyaltyReceiver(uint256 tokenId, address receiver)",
		Compact: "ERC2981InvalidTokenRoyaltyReceiver(uint256,address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "tokenId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "receiver",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xfd, 0x9a, 0x76, 0x09}: &Abi{
		Name:    "ERC3156ExceededMaxLoan",
		ABI:     "error ERC3156ExceededMaxLoan(uint256 maxLoan)",
		Compact: "ERC3156ExceededMaxLoan(uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "maxLoan",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x67, 0x8c, 0x5b, 0x00}: &Abi{
		Name:    "ERC3156InvalidReceiver",
		ABI:     "error ERC3156InvalidReceiver(address receiver)",
		Compact: "ERC3156InvalidReceiver(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "receiver",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xb5, 0xa7, 0xdb, 0x92}: &Abi{
		Name:    "ERC3156UnsupportedToken",
		ABI:     "error ERC3156UnsupportedToken(address token)",
		Compact: "ERC3156UnsupportedToken(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "token",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x79, 0x01, 0x2f, 0xb2}: &Abi{
		Name:    "ERC4626ExceededMaxDeposit",
		ABI:     "error ERC4626ExceededMaxDeposit(address receiver, uint256 assets, uint256 max)",
		Compact: "ERC4626ExceededMaxDeposit(address,uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "receiver",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "assets",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "max",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x28, 0x4f, 0xf6, 0x67}: &Abi{
		Name:    "ERC4626ExceededMaxMint",
		ABI:     "error ERC4626ExceededMaxMint(address receiver, uint256 shares, uint256 max)",
		Compact: "ERC4626ExceededMaxMint(address,uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "receiver",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "shares",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "max",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xb9, 0x4a, 0xbe, 0xec}: &Abi{
		Name:    "ERC4626ExceededMaxRedeem",
		ABI:     "error ERC4626ExceededMaxRedeem(address owner, uint256 shares, uint256 max)",
		Compact: "ERC4626ExceededMaxRedeem(address,uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "shares",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "max",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xfe, 0x9c, 0xce, 0xec}: &Abi{
		Name:    "ERC4626ExceededMaxWithdraw",
		ABI:     "error ERC4626ExceededMaxWithdraw(address owner, uint256 assets, uint256 max)",
		Compact: "ERC4626ExceededMaxWithdraw(address,uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "assets",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "max",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xec, 0xd3, 0xf8, 0x1e}: &Abi{
		Name:    "ERC5805FutureLookup",
		ABI:     "error ERC5805FutureLookup(uint256 timepoint, uint48 clock)",
		Compact: "ERC5805FutureLookup(uint256,uint48)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "timepoint",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "clock",
				Type:         "uint48",
				InternalType: "uint48",
			},
		},
	},
	MethodPrefix{0x6f, 0xf0, 0x71, 0x40}: &Abi{
		Name:    "ERC6372InconsistentClock",
		ABI:     "error ERC6372InconsistentClock()",
		Compact: "ERC6372InconsistentClock()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x59, 0x17, 0x1f, 0xc1}: &Abi{
		Name:    "ERC721EnumerableForbiddenBatchMint",
		ABI:     "error ERC721EnumerableForbiddenBatchMint()",
		Compact: "ERC721EnumerableForbiddenBatchMint()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x8f, 0x58, 0xe5, 0x70}: &Abi{
		Name:    "ERC721ExceededMaxBatchMint",
		ABI:     "error ERC721ExceededMaxBatchMint(uint256 batchSize, uint256 maxBatch)",
		Compact: "ERC721ExceededMaxBatchMint(uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "batchSize",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "maxBatch",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x1d, 0x08, 0x91, 0x65}: &Abi{
		Name:    "ERC721ForbiddenBatchBurn",
		ABI:     "error ERC721ForbiddenBatchBurn()",
		Compact: "ERC721ForbiddenBatchBurn()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x53, 0x9f, 0x90, 0x62}: &Abi{
		Name:    "ERC721ForbiddenBatchMint",
		ABI:     "error ERC721ForbiddenBatchMint()",
		Compact: "ERC721ForbiddenBatchMint()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0xad, 0x89, 0x50, 0x52}: &Abi{
		Name:    "ERC721ForbiddenMint",
		ABI:     "error ERC721ForbiddenMint()",
		Compact: "ERC721ForbiddenMint()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x64, 0x28, 0x3d, 0x7b}: &Abi{
		Name:    "ERC721IncorrectOwner",
		ABI:     "error ERC721IncorrectOwner(address sender, uint256 tokenId, address owner)",
		Compact: "ERC721IncorrectOwner(address,uint256,address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "sender",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "tokenId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x17, 0x7e, 0x80, 0x2f}: &Abi{
		Name:    "ERC721InsufficientApproval",
		ABI:     "error ERC721InsufficientApproval(address operator, uint256 tokenId)",
		Compact: "ERC721InsufficientApproval(address,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "tokenId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xa9, 0xfb, 0xf5, 0x1f}: &Abi{
		Name:    "ERC721InvalidApprover",
		ABI:     "error ERC721InvalidApprover(address approver)",
		Compact: "ERC721InvalidApprover(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "approver",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x5b, 0x08, 0xba, 0x18}: &Abi{
		Name:    "ERC721InvalidOperator",
		ABI:     "error ERC721InvalidOperator(address operator)",
		Compact: "ERC721InvalidOperator(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x89, 0xc6, 0x2b, 0x64}: &Abi{
		Name:    "ERC721InvalidOwner",
		ABI:     "error ERC721InvalidOwner(address owner)",
		Compact: "ERC721InvalidOwner(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x64, 0xa0, 0xae, 0x92}: &Abi{
		Name:    "ERC721InvalidReceiver",
		ABI:     "error ERC721InvalidReceiver(address receiver)",
		Compact: "ERC721InvalidReceiver(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "receiver",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x73, 0xc6, 0xac, 0x6e}: &Abi{
		Name:    "ERC721InvalidSender",
		ABI:     "error ERC721InvalidSender(address sender)",
		Compact: "ERC721InvalidSender(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "sender",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x7e, 0x27, 0x32, 0x89}: &Abi{
		Name:    "ERC721NonexistentToken",
		ABI:     "error ERC721NonexistentToken(uint256 tokenId)",
		Compact: "ERC721NonexistentToken(uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "tokenId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xa5, 0x7d, 0x13, 0xdc}: &Abi{
		Name:    "ERC721OutOfBoundsIndex",
		ABI:     "error ERC721OutOfBoundsIndex(address owner, uint256 index)",
		Compact: "ERC721OutOfBoundsIndex(address,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "index",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xc7, 0xd8, 0x37, 0xc6}: &Abi{
		Name:    "ERC721UnsupportedToken",
		ABI:     "error ERC721UnsupportedToken(address token)",
		Compact: "ERC721UnsupportedToken(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "token",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x07, 0xbd, 0x02, 0x65}: &Abi{
		Name:            "EXECUTOR_ROLE",
		ABI:             "function EXECUTOR_ROLE() returns (bytes32)",
		Compact:         "EXECUTOR_ROLE()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x2f, 0xe3, 0xe2, 0x61}: &Abi{
		Name:            "EXTENDED_BALLOT_TYPEHASH",
		ABI:             "function EXTENDED_BALLOT_TYPEHASH() returns (bytes32)",
		Compact:         "EXTENDED_BALLOT_TYPEHASH()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0xd9, 0x3c, 0x06, 0x65}: &Abi{
		Name:    "EnforcedPause",
		ABI:     "error EnforcedPause()",
		Compact: "EnforcedPause()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x02, 0xb5, 0x66, 0x86}: &Abi{
		Name:    "EnumerableMapNonexistentKey",
		ABI:     "error EnumerableMapNonexistentKey(bytes32 key)",
		Compact: "EnumerableMapNonexistentKey(bytes32)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "key",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0xda, 0x9d, 0x4e, 0x5f}: &Abi{
		Name:    "EtherReleased",
		ABI:     "event EtherReleased(uint256 amount)",
		Compact: "EtherReleased(uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xa5, 0x60, 0xe3, 0x19}: &Abi{
		Name:    "ExecuteTransaction",
		ABI:     "event ExecuteTransaction(bytes32 indexed txHash, address indexed target, uint256 value, string signature, bytes data, uint256 eta)",
		Compact: "ExecuteTransaction(bytes32,address,uint256,string,bytes,uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "txHash",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "signature",
				Type:         "string",
				InternalType: "string",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "eta",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x84, 0x2f, 0xb2, 0x4a}: &Abi{
		Name:    "ExecutedForwardRequest",
		ABI:     "event ExecutedForwardRequest(address indexed signer, uint256 nonce, bool success)",
		Compact: "ExecutedForwardRequest(address,uint256,bool)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "signer",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "nonce",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "success",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x8d, 0xfc, 0x20, 0x2b}: &Abi{
		Name:    "ExpectedPause",
		ABI:     "error ExpectedPause()",
		Compact: "ExpectedPause()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x14, 0x25, 0xea, 0x42}: &Abi{
		Name:    "FailedInnerCall",
		ABI:     "error FailedInnerCall()",
		Compact: "FailedInnerCall()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0xc1, 0xa2, 0x87, 0xe2}: &Abi{
		Name:            "GRACE_PERIOD",
		ABI:             "function GRACE_PERIOD() returns (uint256)",
		Compact:         "GRACE_PERIOD()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x71, 0xc6, 0xaf, 0x49}: &Abi{
		Name:    "GovernorAlreadyCastVote",
		ABI:     "error GovernorAlreadyCastVote(address voter)",
		Compact: "GovernorAlreadyCastVote(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "voter",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xf2, 0x0e, 0x7d, 0x37}: &Abi{
		Name:    "GovernorAlreadyQueuedProposal",
		ABI:     "error GovernorAlreadyQueuedProposal(uint256 proposalId)",
		Compact: "GovernorAlreadyQueuedProposal(uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xe9, 0x0a, 0x65, 0x1e}: &Abi{
		Name:    "GovernorDisabledDeposit",
		ABI:     "error GovernorDisabledDeposit()",
		Compact: "GovernorDisabledDeposit()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0xc2, 0x42, 0xee, 0x16}: &Abi{
		Name:    "GovernorInsufficientProposerVotes",
		ABI:     "error GovernorInsufficientProposerVotes(address proposer, uint256 votes, uint256 threshold)",
		Compact: "GovernorInsufficientProposerVotes(address,uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposer",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "votes",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "threshold",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x44, 0x7b, 0x05, 0xd0}: &Abi{
		Name:    "GovernorInvalidProposalLength",
		ABI:     "error GovernorInvalidProposalLength(uint256 targets, uint256 calldatas, uint256 values)",
		Compact: "GovernorInvalidProposalLength(uint256,uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "targets",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "calldatas",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "values",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x24, 0x3e, 0x54, 0x45}: &Abi{
		Name:    "GovernorInvalidQuorumFraction",
		ABI:     "error GovernorInvalidQuorumFraction(uint256 quorumNumerator, uint256 quorumDenominator)",
		Compact: "GovernorInvalidQuorumFraction(uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "quorumNumerator",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "quorumDenominator",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x94, 0xab, 0x6c, 0x07}: &Abi{
		Name:    "GovernorInvalidSignature",
		ABI:     "error GovernorInvalidSignature(address voter)",
		Compact: "GovernorInvalidSignature(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "voter",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x06, 0xb3, 0x37, 0xc2}: &Abi{
		Name:    "GovernorInvalidVoteType",
		ABI:     "error GovernorInvalidVoteType()",
		Compact: "GovernorInvalidVoteType()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0xf1, 0xcf, 0xbf, 0x05}: &Abi{
		Name:    "GovernorInvalidVotingPeriod",
		ABI:     "error GovernorInvalidVotingPeriod(uint256 votingPeriod)",
		Compact: "GovernorInvalidVotingPeriod(uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "votingPeriod",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xe5, 0x47, 0xfc, 0x11}: &Abi{
		Name:    "GovernorLockedIgnore",
		ABI:     "error GovernorLockedIgnore()",
		Compact: "GovernorLockedIgnore()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x18, 0xee, 0x8b, 0xef}: &Abi{
		Name:    "GovernorMismatchedNonce",
		ABI:     "error GovernorMismatchedNonce(uint256 proposalId, uint256 expectedNonce, uint256 actualNonce)",
		Compact: "GovernorMismatchedNonce(uint256,uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "expectedNonce",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "actualNonce",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x6a, 0xd0, 0x60, 0x75}: &Abi{
		Name:    "GovernorNonexistentProposal",
		ABI:     "error GovernorNonexistentProposal(uint256 proposalId)",
		Compact: "GovernorNonexistentProposal(uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xd5, 0xdd, 0xb8, 0x25}: &Abi{
		Name:    "GovernorNotQueuedProposal",
		ABI:     "error GovernorNotQueuedProposal(uint256 proposalId)",
		Compact: "GovernorNotQueuedProposal(uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x47, 0x09, 0x6e, 0x47}: &Abi{
		Name:    "GovernorOnlyExecutor",
		ABI:     "error GovernorOnlyExecutor(address account)",
		Compact: "GovernorOnlyExecutor(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x23, 0x3d, 0x98, 0xe3}: &Abi{
		Name:    "GovernorOnlyProposer",
		ABI:     "error GovernorOnlyProposer(address account)",
		Compact: "GovernorOnlyProposer(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x90, 0x88, 0x4a, 0x46}: &Abi{
		Name:    "GovernorQueueNotImplemented",
		ABI:     "error GovernorQueueNotImplemented()",
		Compact: "GovernorQueueNotImplemented()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0xd9, 0xb3, 0x95, 0x57}: &Abi{
		Name:    "GovernorRestrictedProposer",
		ABI:     "error GovernorRestrictedProposer(address proposer)",
		Compact: "GovernorRestrictedProposer(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposer",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x31, 0xb7, 0x5e, 0x4d}: &Abi{
		Name:    "GovernorUnexpectedProposalState",
		ABI:     "error GovernorUnexpectedProposalState(uint256 proposalId, enum IGovernor.ProposalState current, bytes32 expectedStates)",
		Compact: "GovernorUnexpectedProposalState(uint256,uint8,bytes32)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "current",
				Type:         "uint8",
				InternalType: "enum IGovernor.ProposalState",
			},
			&AbiIO{
				Name:         "expectedStates",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0xfe, 0x58, 0x9f, 0x3f}: &Abi{
		Name:    "GovernorUnmetDelay",
		ABI:     "error GovernorUnmetDelay(uint256 proposalId, uint256 neededTimestamp)",
		Compact: "GovernorUnmetDelay(uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "neededTimestamp",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xc7, 0xf5, 0x05, 0xb2}: &Abi{
		Name:    "Initialized",
		ABI:     "event Initialized(uint64 version)",
		Compact: "Initialized(uint64)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "version",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
	},
	MethodPrefix{0x93, 0xba, 0xa6, 0xef}: &Abi{
		Name:    "InterfaceImplementerSet",
		ABI:     "event InterfaceImplementerSet(address indexed account, bytes32 indexed interfaceHash, address indexed implementer)",
		Compact: "InterfaceImplementerSet(address,bytes32,address)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "interfaceHash",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "implementer",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x75, 0x2d, 0x88, 0xc0}: &Abi{
		Name:    "InvalidAccountNonce",
		ABI:     "error InvalidAccountNonce(address account, uint256 currentNonce)",
		Compact: "InvalidAccountNonce(address,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "currentNonce",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xf9, 0x2e, 0xe8, 0xa9}: &Abi{
		Name:    "InvalidInitialization",
		ABI:     "error InvalidInitialization()",
		Compact: "InvalidInitialization()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0xb3, 0x51, 0x2b, 0x0c}: &Abi{
		Name:    "InvalidShortString",
		ABI:     "error InvalidShortString()",
		Compact: "InvalidShortString()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x7c, 0xa4, 0xac, 0x11}: &Abi{
		Name:    "LateQuorumVoteExtensionSet",
		ABI:     "event LateQuorumVoteExtensionSet(uint64 oldVoteExtension, uint64 newVoteExtension)",
		Compact: "LateQuorumVoteExtensionSet(uint64,uint64)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "oldVoteExtension",
				Type:         "uint64",
				InternalType: "uint64",
			},
			&AbiIO{
				Name:         "newVoteExtension",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
	},
	MethodPrefix{0x7d, 0x64, 0x5f, 0xab}: &Abi{
		Name:            "MAXIMUM_DELAY",
		ABI:             "function MAXIMUM_DELAY() returns (uint256)",
		Compact:         "MAXIMUM_DELAY()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xb1, 0xb4, 0x3a, 0xe5}: &Abi{
		Name:            "MINIMUM_DELAY",
		ABI:             "function MINIMUM_DELAY() returns (uint256)",
		Compact:         "MINIMUM_DELAY()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x60, 0x5c, 0x2d, 0xbf}: &Abi{
		Name:    "ManagerChanged",
		ABI:     "event ManagerChanged(address indexed account, address indexed newManager)",
		Compact: "ManagerChanged(address,address)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "newManager",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x22, 0x7b, 0xc1, 0x53}: &Abi{
		Name:    "MathOverflowedMulDiv",
		ABI:     "error MathOverflowedMulDiv()",
		Compact: "MathOverflowedMulDiv()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x35, 0x14, 0x04, 0x92}: &Abi{
		Name:    "MerkleProofInvalidMultiproof",
		ABI:     "error MerkleProofInvalidMultiproof()",
		Compact: "MerkleProofInvalidMultiproof()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0xf8, 0xe1, 0xa1, 0x5a}: &Abi{
		Name:    "MetadataUpdate",
		ABI:     "event MetadataUpdate(uint256 _tokenId)",
		Compact: "MetadataUpdate(uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "_tokenId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x11, 0xc2, 0x4f, 0x4e}: &Abi{
		Name:    "MinDelayChange",
		ABI:     "event MinDelayChange(uint256 oldDuration, uint256 newDuration)",
		Compact: "MinDelayChange(uint256,uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "oldDuration",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "newDuration",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x2f, 0xe5, 0xbe, 0x01}: &Abi{
		Name:    "Minted",
		ABI:     "event Minted(address indexed operator, address indexed to, uint256 amount, bytes data, bytes operatorData)",
		Compact: "Minted(address,address,uint256,bytes,bytes)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "to",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "operatorData",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
	},
	MethodPrefix{0x71, 0x61, 0x40, 0x71}: &Abi{
		Name:    "NewAdmin",
		ABI:     "event NewAdmin(address indexed newAdmin)",
		Compact: "NewAdmin(address)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "newAdmin",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x94, 0x8b, 0x1f, 0x6a}: &Abi{
		Name:    "NewDelay",
		ABI:     "event NewDelay(uint256 indexed newDelay)",
		Compact: "NewDelay(uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "newDelay",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x69, 0xd7, 0x8e, 0x38}: &Abi{
		Name:    "NewPendingAdmin",
		ABI:     "event NewPendingAdmin(address indexed newPendingAdmin)",
		Compact: "NewPendingAdmin(address)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "newPendingAdmin",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xd7, 0xe6, 0xbc, 0xf8}: &Abi{
		Name:    "NotInitializing",
		ABI:     "error NotInitializing()",
		Compact: "NotInitializing()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0xbd, 0x9a, 0xc6, 0x7a}: &Abi{
		Name:    "OperationCanceled",
		ABI:     "event OperationCanceled(bytes32 indexed operationId, uint32 indexed nonce)",
		Compact: "OperationCanceled(bytes32,uint32)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operationId",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "nonce",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
	},
	MethodPrefix{0x76, 0xa2, 0xa4, 0x69}: &Abi{
		Name:    "OperationExecuted",
		ABI:     "event OperationExecuted(bytes32 indexed operationId, uint32 indexed nonce)",
		Compact: "OperationExecuted(bytes32,uint32)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operationId",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "nonce",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
	},
	MethodPrefix{0x82, 0xa2, 0xda, 0x5d}: &Abi{
		Name:    "OperationScheduled",
		ABI:     "event OperationScheduled(bytes32 indexed operationId, uint32 indexed nonce, uint48 schedule, address caller, address target, bytes data)",
		Compact: "OperationScheduled(bytes32,uint32,uint48,address,address,bytes)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operationId",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "nonce",
				Type:         "uint32",
				InternalType: "uint32",
			},
			&AbiIO{
				Name:         "schedule",
				Type:         "uint48",
				InternalType: "uint48",
			},
			&AbiIO{
				Name:         "caller",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
	},
	MethodPrefix{0x1e, 0x4f, 0xbd, 0xf7}: &Abi{
		Name:    "OwnableInvalidOwner",
		ABI:     "error OwnableInvalidOwner(address owner)",
		Compact: "OwnableInvalidOwner(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x11, 0x8c, 0xda, 0xa7}: &Abi{
		Name:    "OwnableUnauthorizedAccount",
		ABI:     "error OwnableUnauthorizedAccount(address account)",
		Compact: "OwnableUnauthorizedAccount(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x38, 0xd1, 0x6b, 0x8c}: &Abi{
		Name:    "OwnershipTransferStarted",
		ABI:     "event OwnershipTransferStarted(address indexed previousOwner, address indexed newOwner)",
		Compact: "OwnershipTransferStarted(address,address)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "previousOwner",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "newOwner",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x8b, 0xe0, 0x07, 0x9c}: &Abi{
		Name:    "OwnershipTransferred",
		ABI:     "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
		Compact: "OwnershipTransferred(address,address)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "previousOwner",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "newOwner",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x8f, 0x61, 0xf4, 0xf5}: &Abi{
		Name:            "PROPOSER_ROLE",
		ABI:             "function PROPOSER_ROLE() returns (bytes32)",
		Compact:         "PROPOSER_ROLE()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x3c, 0xa7, 0xc0, 0x2a}: &Abi{
		Name:            "PUBLIC_ROLE",
		ABI:             "function PUBLIC_ROLE() returns (uint64)",
		Compact:         "PUBLIC_ROLE()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
	},
	MethodPrefix{0x62, 0xe7, 0x8c, 0xea}: &Abi{
		Name:    "Paused",
		ABI:     "event Paused(address account)",
		Compact: "Paused(address)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x78, 0x9c, 0xf5, 0x5b}: &Abi{
		Name:    "ProposalCanceled",
		ABI:     "event ProposalCanceled(uint256 proposalId)",
		Compact: "ProposalCanceled(uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x7d, 0x84, 0xa6, 0x26}: &Abi{
		Name:    "ProposalCreated",
		ABI:     "event ProposalCreated(uint256 proposalId, address proposer, address[] targets, uint256[] values, string[] signatures, bytes[] calldatas, uint256 voteStart, uint256 voteEnd, string description)",
		Compact: "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "proposer",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "targets",
				Type:         "address[]",
				InternalType: "address[]",
			},
			&AbiIO{
				Name:         "values",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
			&AbiIO{
				Name:         "signatures",
				Type:         "string[]",
				InternalType: "string[]",
			},
			&AbiIO{
				Name:         "calldatas",
				Type:         "bytes[]",
				InternalType: "bytes[]",
			},
			&AbiIO{
				Name:         "voteStart",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "voteEnd",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "description",
				Type:         "string",
				InternalType: "string",
			},
		},
	},
	MethodPrefix{0x71, 0x2a, 0xe1, 0x38}: &Abi{
		Name:    "ProposalExecuted",
		ABI:     "event ProposalExecuted(uint256 proposalId)",
		Compact: "ProposalExecuted(uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x54, 0x1f, 0x72, 0x5f}: &Abi{
		Name:    "ProposalExtended",
		ABI:     "event ProposalExtended(uint256 indexed proposalId, uint64 extendedDeadline)",
		Compact: "ProposalExtended(uint256,uint64)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "extendedDeadline",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
	},
	MethodPrefix{0x9a, 0x2e, 0x42, 0xfd}: &Abi{
		Name:    "ProposalQueued",
		ABI:     "event ProposalQueued(uint256 proposalId, uint256 etaSeconds)",
		Compact: "ProposalQueued(uint256,uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "etaSeconds",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xcc, 0xb4, 0x5d, 0xa8}: &Abi{
		Name:    "ProposalThresholdSet",
		ABI:     "event ProposalThresholdSet(uint256 oldProposalThreshold, uint256 newProposalThreshold)",
		Compact: "ProposalThresholdSet(uint256,uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "oldProposalThreshold",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "newProposalThreshold",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xd2, 0xb5, 0x76, 0xec}: &Abi{
		Name:    "ProxyDeniedAdminAccess",
		ABI:     "error ProxyDeniedAdminAccess()",
		Compact: "ProxyDeniedAdminAccess()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x75, 0xe5, 0x2f, 0x4f}: &Abi{
		Name:    "QueueEmpty",
		ABI:     "error QueueEmpty()",
		Compact: "QueueEmpty()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x8a, 0xcb, 0x5f, 0x27}: &Abi{
		Name:    "QueueFull",
		ABI:     "error QueueFull()",
		Compact: "QueueFull()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x58, 0x08, 0x21, 0xe7}: &Abi{
		Name:    "QueueOutOfBounds",
		ABI:     "error QueueOutOfBounds()",
		Compact: "QueueOutOfBounds()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x76, 0xe2, 0x79, 0x6d}: &Abi{
		Name:    "QueueTransaction",
		ABI:     "event QueueTransaction(bytes32 indexed txHash, address indexed target, uint256 value, string signature, bytes data, uint256 eta)",
		Compact: "QueueTransaction(bytes32,address,uint256,string,bytes,uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "txHash",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "signature",
				Type:         "string",
				InternalType: "string",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "eta",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x05, 0x53, 0x47, 0x6b}: &Abi{
		Name:    "QuorumNumeratorUpdated",
		ABI:     "event QuorumNumeratorUpdated(uint256 oldQuorumNumerator, uint256 newQuorumNumerator)",
		Compact: "QuorumNumeratorUpdated(uint256,uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "oldQuorumNumerator",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "newQuorumNumerator",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x3e, 0xe5, 0xae, 0xb5}: &Abi{
		Name:    "ReentrancyGuardReentrantCall",
		ABI:     "error ReentrancyGuardReentrantCall()",
		Compact: "ReentrancyGuardReentrantCall()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0x50, 0x54, 0x6e, 0x66}: &Abi{
		Name:    "RevokedOperator",
		ABI:     "event RevokedOperator(address indexed operator, address indexed tokenHolder)",
		Compact: "RevokedOperator(address,address)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "tokenHolder",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xbd, 0x79, 0xb8, 0x6f}: &Abi{
		Name:    "RoleAdminChanged",
		ABI:     "event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)",
		Compact: "RoleAdminChanged(bytes32,bytes32,bytes32)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "role",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "previousAdminRole",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "newAdminRole",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x1f, 0xd6, 0xdd, 0x76}: &Abi{
		Name:    "RoleAdminChanged",
		ABI:     "event RoleAdminChanged(uint64 indexed roleId, uint64 indexed admin)",
		Compact: "RoleAdminChanged(uint64,uint64)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
			&AbiIO{
				Name:         "admin",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
	},
	MethodPrefix{0xfe, 0xb6, 0x90, 0x18}: &Abi{
		Name:    "RoleGrantDelayChanged",
		ABI:     "event RoleGrantDelayChanged(uint64 indexed roleId, uint32 delay, uint48 since)",
		Compact: "RoleGrantDelayChanged(uint64,uint32,uint48)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
			&AbiIO{
				Name:         "delay",
				Type:         "uint32",
				InternalType: "uint32",
			},
			&AbiIO{
				Name:         "since",
				Type:         "uint48",
				InternalType: "uint48",
			},
		},
	},
	MethodPrefix{0x2f, 0x87, 0x88, 0x11}: &Abi{
		Name:    "RoleGranted",
		ABI:     "event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)",
		Compact: "RoleGranted(bytes32,address,address)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "role",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "sender",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xf9, 0x84, 0x48, 0xb9}: &Abi{
		Name:    "RoleGranted",
		ABI:     "event RoleGranted(uint64 indexed roleId, address indexed account, uint32 delay, uint48 since, bool newMember)",
		Compact: "RoleGranted(uint64,address,uint32,uint48,bool)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "delay",
				Type:         "uint32",
				InternalType: "uint32",
			},
			&AbiIO{
				Name:         "since",
				Type:         "uint48",
				InternalType: "uint48",
			},
			&AbiIO{
				Name:         "newMember",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x7a, 0x80, 0x59, 0x63}: &Abi{
		Name:    "RoleGuardianChanged",
		ABI:     "event RoleGuardianChanged(uint64 indexed roleId, uint64 indexed guardian)",
		Compact: "RoleGuardianChanged(uint64,uint64)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
			&AbiIO{
				Name:         "guardian",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
	},
	MethodPrefix{0x12, 0x56, 0xf5, 0xb5}: &Abi{
		Name:    "RoleLabel",
		ABI:     "event RoleLabel(uint64 indexed roleId, string label)",
		Compact: "RoleLabel(uint64,string)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
			&AbiIO{
				Name:         "label",
				Type:         "string",
				InternalType: "string",
			},
		},
	},
	MethodPrefix{0xf6, 0x39, 0x1f, 0x5c}: &Abi{
		Name:    "RoleRevoked",
		ABI:     "event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)",
		Compact: "RoleRevoked(bytes32,address,address)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "role",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "sender",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xf2, 0x29, 0xba, 0xa5}: &Abi{
		Name:    "RoleRevoked",
		ABI:     "event RoleRevoked(uint64 indexed roleId, address indexed account)",
		Compact: "RoleRevoked(uint64,address)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x32, 0x72, 0x69, 0xa7}: &Abi{
		Name:    "SafeCastOverflowedIntDowncast",
		ABI:     "error SafeCastOverflowedIntDowncast(uint8 bits, int256 value)",
		Compact: "SafeCastOverflowedIntDowncast(uint8,int256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "bits",
				Type:         "uint8",
				InternalType: "uint8",
			},
			&AbiIO{
				Name:         "value",
				Type:         "int256",
				InternalType: "int256",
			},
		},
	},
	MethodPrefix{0xa8, 0xce, 0x44, 0x32}: &Abi{
		Name:    "SafeCastOverflowedIntToUint",
		ABI:     "error SafeCastOverflowedIntToUint(int256 value)",
		Compact: "SafeCastOverflowedIntToUint(int256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "value",
				Type:         "int256",
				InternalType: "int256",
			},
		},
	},
	MethodPrefix{0x6d, 0xfc, 0xc6, 0x50}: &Abi{
		Name:    "SafeCastOverflowedUintDowncast",
		ABI:     "error SafeCastOverflowedUintDowncast(uint8 bits, uint256 value)",
		Compact: "SafeCastOverflowedUintDowncast(uint8,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "bits",
				Type:         "uint8",
				InternalType: "uint8",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x24, 0x77, 0x5e, 0x06}: &Abi{
		Name:    "SafeCastOverflowedUintToInt",
		ABI:     "error SafeCastOverflowedUintToInt(uint256 value)",
		Compact: "SafeCastOverflowedUintToInt(uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xe5, 0x70, 0x11, 0x0f}: &Abi{
		Name:    "SafeERC20FailedDecreaseAllowance",
		ABI:     "error SafeERC20FailedDecreaseAllowance(address spender, uint256 currentAllowance, uint256 requestedDecrease)",
		Compact: "SafeERC20FailedDecreaseAllowance(address,uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "spender",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "currentAllowance",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "requestedDecrease",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x52, 0x74, 0xaf, 0xe7}: &Abi{
		Name:    "SafeERC20FailedOperation",
		ABI:     "error SafeERC20FailedOperation(address token)",
		Compact: "SafeERC20FailedOperation(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "token",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x06, 0xb5, 0x41, 0xdd}: &Abi{
		Name:    "Sent",
		ABI:     "event Sent(address indexed operator, address indexed from, address indexed to, uint256 amount, bytes data, bytes operatorData)",
		Compact: "Sent(address,address,address,uint256,bytes,bytes)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "from",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "to",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "operatorData",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
	},
	MethodPrefix{0x30, 0x5a, 0x27, 0xa9}: &Abi{
		Name:    "StringTooLong",
		ABI:     "error StringTooLong(string str)",
		Compact: "StringTooLong(string)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "str",
				Type:         "string",
				InternalType: "string",
			},
		},
	},
	MethodPrefix{0xe2, 0x2e, 0x27, 0xeb}: &Abi{
		Name:    "StringsInsufficientHexLength",
		ABI:     "error StringsInsufficientHexLength(uint256 value, uint256 length)",
		Compact: "StringsInsufficientHexLength(uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "length",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xa5, 0x6b, 0x76, 0x01}: &Abi{
		Name:    "TargetAdminDelayUpdated",
		ABI:     "event TargetAdminDelayUpdated(address indexed target, uint32 delay, uint48 since)",
		Compact: "TargetAdminDelayUpdated(address,uint32,uint48)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "delay",
				Type:         "uint32",
				InternalType: "uint32",
			},
			&AbiIO{
				Name:         "since",
				Type:         "uint48",
				InternalType: "uint48",
			},
		},
	},
	MethodPrefix{0x90, 0xd4, 0xe7, 0xbb}: &Abi{
		Name:    "TargetClosed",
		ABI:     "event TargetClosed(address indexed target, bool closed)",
		Compact: "TargetClosed(address,bool)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "closed",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x9e, 0xa6, 0x79, 0x0c}: &Abi{
		Name:    "TargetFunctionRoleUpdated",
		ABI:     "event TargetFunctionRoleUpdated(address indexed target, bytes4 selector, uint64 indexed roleId)",
		Compact: "TargetFunctionRoleUpdated(address,bytes4,uint64)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "selector",
				Type:         "bytes4",
				InternalType: "bytes4",
			},
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
	},
	MethodPrefix{0x08, 0xf7, 0x4e, 0xa4}: &Abi{
		Name:    "TimelockChange",
		ABI:     "event TimelockChange(address oldTimelock, address newTimelock)",
		Compact: "TimelockChange(address,address)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "oldTimelock",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "newTimelock",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x54, 0x33, 0x66, 0x09}: &Abi{
		Name:    "TimelockInsufficientDelay",
		ABI:     "error TimelockInsufficientDelay(uint256 delay, uint256 minDelay)",
		Compact: "TimelockInsufficientDelay(uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "delay",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "minDelay",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xff, 0xb0, 0x32, 0x11}: &Abi{
		Name:    "TimelockInvalidOperationLength",
		ABI:     "error TimelockInvalidOperationLength(uint256 targets, uint256 payloads, uint256 values)",
		Compact: "TimelockInvalidOperationLength(uint256,uint256,uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "targets",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "payloads",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "values",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xe2, 0x85, 0x0c, 0x59}: &Abi{
		Name:    "TimelockUnauthorizedCaller",
		ABI:     "error TimelockUnauthorizedCaller(address caller)",
		Compact: "TimelockUnauthorizedCaller(address)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "caller",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x90, 0xa9, 0xa6, 0x18}: &Abi{
		Name:    "TimelockUnexecutedPredecessor",
		ABI:     "error TimelockUnexecutedPredecessor(bytes32 predecessorId)",
		Compact: "TimelockUnexecutedPredecessor(bytes32)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "predecessorId",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x5e, 0xad, 0x8e, 0xb5}: &Abi{
		Name:    "TimelockUnexpectedOperationState",
		ABI:     "error TimelockUnexpectedOperationState(bytes32 operationId, bytes32 expectedStates)",
		Compact: "TimelockUnexpectedOperationState(bytes32,bytes32)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operationId",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "expectedStates",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0xdd, 0xf2, 0x52, 0xad}: &Abi{
		Name:    "Transfer",
		ABI:     "event Transfer(address indexed from, address indexed to, uint256 value)",
		Compact: "Transfer(address,address,uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "from",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "to",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x4a, 0x39, 0xdc, 0x06}: &Abi{
		Name:    "TransferBatch",
		ABI:     "event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values)",
		Compact: "TransferBatch(address,address,address,uint256[],uint256[])",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "from",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "to",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "ids",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
			&AbiIO{
				Name:         "values",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
		},
	},
	MethodPrefix{0xc3, 0xd5, 0x81, 0x68}: &Abi{
		Name:    "TransferSingle",
		ABI:     "event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)",
		Compact: "TransferSingle(address,address,address,uint256,uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "from",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "to",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "id",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xad, 0x3c, 0xb1, 0xcc}: &Abi{
		Name:            "UPGRADE_INTERFACE_VERSION",
		ABI:             "function UPGRADE_INTERFACE_VERSION() returns (string)",
		Compact:         "UPGRADE_INTERFACE_VERSION()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "string",
				InternalType: "string",
			},
		},
	},
	MethodPrefix{0x6b, 0xb7, 0xff, 0x70}: &Abi{
		Name:    "URI",
		ABI:     "event URI(string value, uint256 indexed id)",
		Compact: "URI(string,uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "value",
				Type:         "string",
				InternalType: "string",
			},
			&AbiIO{
				Name:         "id",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xe0, 0x7c, 0x8d, 0xba}: &Abi{
		Name:    "UUPSUnauthorizedCallContext",
		ABI:     "error UUPSUnauthorizedCallContext()",
		Compact: "UUPSUnauthorizedCallContext()",
		Type:    "error",
		Inputs:  []*AbiIO{},
	},
	MethodPrefix{0xaa, 0x1d, 0x49, 0xa4}: &Abi{
		Name:    "UUPSUnsupportedProxiableUUID",
		ABI:     "error UUPSUnsupportedProxiableUUID(bytes32 slot)",
		Compact: "UUPSUnsupportedProxiableUUID(bytes32)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "slot",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x5d, 0xb9, 0xee, 0x0a}: &Abi{
		Name:    "Unpaused",
		ABI:     "event Unpaused(address account)",
		Compact: "Unpaused(address)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xbc, 0x7c, 0xd7, 0x5a}: &Abi{
		Name:    "Upgraded",
		ABI:     "event Upgraded(address indexed implementation)",
		Compact: "Upgraded(address)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "implementation",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xb8, 0xe1, 0x38, 0x88}: &Abi{
		Name:    "VoteCast",
		ABI:     "event VoteCast(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason)",
		Compact: "VoteCast(address,uint256,uint8,uint256,string)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "voter",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "support",
				Type:         "uint8",
				InternalType: "uint8",
			},
			&AbiIO{
				Name:         "weight",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "reason",
				Type:         "string",
				InternalType: "string",
			},
		},
	},
	MethodPrefix{0xe2, 0xba, 0xbf, 0xba}: &Abi{
		Name:    "VoteCastWithParams",
		ABI:     "event VoteCastWithParams(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason, bytes params)",
		Compact: "VoteCastWithParams(address,uint256,uint8,uint256,string,bytes)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "voter",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "support",
				Type:         "uint8",
				InternalType: "uint8",
			},
			&AbiIO{
				Name:         "weight",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "reason",
				Type:         "string",
				InternalType: "string",
			},
			&AbiIO{
				Name:         "params",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
	},
	MethodPrefix{0x46, 0x83, 0xaf, 0x0e}: &Abi{
		Name:    "VotesExpiredSignature",
		ABI:     "error VotesExpiredSignature(uint256 expiry)",
		Compact: "VotesExpiredSignature(uint256)",
		Type:    "error",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "expiry",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xc5, 0x65, 0xb0, 0x45}: &Abi{
		Name:    "VotingDelaySet",
		ABI:     "event VotingDelaySet(uint256 oldVotingDelay, uint256 newVotingDelay)",
		Compact: "VotingDelaySet(uint256,uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "oldVotingDelay",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "newVotingDelay",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x7e, 0x3f, 0x7f, 0x07}: &Abi{
		Name:    "VotingPeriodSet",
		ABI:     "event VotingPeriodSet(uint256 oldVotingPeriod, uint256 newVotingPeriod)",
		Compact: "VotingPeriodSet(uint256,uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "oldVotingPeriod",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "newVotingPeriod",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xfb, 0xde, 0x79, 0x7d}: &Abi{
		Name:    "Withdraw",
		ABI:     "event Withdraw(address indexed sender, address indexed receiver, address indexed owner, uint256 assets, uint256 shares)",
		Compact: "Withdraw(address,address,address,uint256,uint256)",
		Type:    "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "sender",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "receiver",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "assets",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "shares",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xb9, 0xa6, 0x19, 0x61}: &Abi{
		Name:            "__acceptAdmin",
		ABI:             "function __acceptAdmin()",
		Compact:         "__acceptAdmin()",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs:         []*AbiIO{},
	},
	MethodPrefix{0x0e, 0x18, 0xb6, 0x81}: &Abi{
		Name:            "acceptAdmin",
		ABI:             "function acceptAdmin()",
		Compact:         "acceptAdmin()",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs:         []*AbiIO{},
	},
	MethodPrefix{0xce, 0xfc, 0x14, 0x29}: &Abi{
		Name:            "acceptDefaultAdminTransfer",
		ABI:             "function acceptDefaultAdminTransfer()",
		Compact:         "acceptDefaultAdminTransfer()",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs:         []*AbiIO{},
	},
	MethodPrefix{0x79, 0xba, 0x50, 0x97}: &Abi{
		Name:            "acceptOwnership",
		ABI:             "function acceptOwnership()",
		Compact:         "acceptOwnership()",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs:         []*AbiIO{},
	},
	MethodPrefix{0xfd, 0xcb, 0x60, 0x68}: &Abi{
		Name:            "accessManager",
		ABI:             "function accessManager() returns (contract IAccessManager)",
		Compact:         "accessManager()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "contract IAccessManager",
			},
		},
	},
	MethodPrefix{0xf8, 0x51, 0xa4, 0x40}: &Abi{
		Name:            "admin",
		ABI:             "function admin() returns (address)",
		Compact:         "admin()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xdd, 0x62, 0xed, 0x3e}: &Abi{
		Name:            "allowance",
		ABI:             "function allowance(address owner, address spender) returns (uint256)",
		Compact:         "allowance(address,address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "spender",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x09, 0x5e, 0xa7, 0xb3}: &Abi{
		Name:            "approve",
		ABI:             "function approve(address spender, uint256 value) returns (bool)",
		Compact:         "approve(address,uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "spender",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x31, 0x77, 0x02, 0x9f}: &Abi{
		Name:            "approveAndCall",
		ABI:             "function approveAndCall(address spender, uint256 amount) returns (bool)",
		Compact:         "approveAndCall(address,uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "spender",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0xca, 0xe9, 0xca, 0x51}: &Abi{
		Name:            "approveAndCall",
		ABI:             "function approveAndCall(address spender, uint256 amount, bytes data) returns (bool)",
		Compact:         "approveAndCall(address,uint256,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "spender",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x38, 0xd5, 0x2e, 0x0f}: &Abi{
		Name:            "asset",
		ABI:             "function asset() returns (address assetTokenAddress)",
		Compact:         "asset()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "assetTokenAddress",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xbf, 0x7e, 0x21, 0x4f}: &Abi{
		Name:            "authority",
		ABI:             "function authority() returns (address)",
		Compact:         "authority()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x95, 0x9b, 0x8c, 0x3f}: &Abi{
		Name:            "authorizeOperator",
		ABI:             "function authorizeOperator(address operator)",
		Compact:         "authorizeOperator(address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x70, 0xa0, 0x82, 0x31}: &Abi{
		Name:            "balanceOf",
		ABI:             "function balanceOf(address account) returns (uint256)",
		Compact:         "balanceOf(address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x00, 0xfd, 0xd5, 0x8e}: &Abi{
		Name:            "balanceOf",
		ABI:             "function balanceOf(address account, uint256 id) returns (uint256)",
		Compact:         "balanceOf(address,uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "id",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x4e, 0x12, 0x73, 0xf4}: &Abi{
		Name:            "balanceOfBatch",
		ABI:             "function balanceOfBatch(address[] accounts, uint256[] ids) returns (uint256[])",
		Compact:         "balanceOfBatch(address[],uint256[])",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "accounts",
				Type:         "address[]",
				InternalType: "address[]",
			},
			&AbiIO{
				Name:         "ids",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
		},
	},
	MethodPrefix{0x57, 0x55, 0x2f, 0xcb}: &Abi{
		Name:            "baseDelaySeconds",
		ABI:             "function baseDelaySeconds() returns (uint32)",
		Compact:         "baseDelaySeconds()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
	},
	MethodPrefix{0x63, 0x4e, 0x93, 0xda}: &Abi{
		Name:            "beginDefaultAdminTransfer",
		ABI:             "function beginDefaultAdminTransfer(address newAdmin)",
		Compact:         "beginDefaultAdminTransfer(address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "newAdmin",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xf5, 0x29, 0x8a, 0xca}: &Abi{
		Name:            "burn",
		ABI:             "function burn(address account, uint256 id, uint256 value)",
		Compact:         "burn(address,uint256,uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "id",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x42, 0x96, 0x6c, 0x68}: &Abi{
		Name:            "burn",
		ABI:             "function burn(uint256 value)",
		Compact:         "burn(uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xfe, 0x9d, 0x93, 0x03}: &Abi{
		Name:            "burn",
		ABI:             "function burn(uint256 amount, bytes data)",
		Compact:         "burn(uint256,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x6b, 0x20, 0xc4, 0x54}: &Abi{
		Name:            "burnBatch",
		ABI:             "function burnBatch(address account, uint256[] ids, uint256[] values)",
		Compact:         "burnBatch(address,uint256[],uint256[])",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "ids",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
			&AbiIO{
				Name:         "values",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x79, 0xcc, 0x67, 0x90}: &Abi{
		Name:            "burnFrom",
		ABI:             "function burnFrom(address account, uint256 value)",
		Compact:         "burnFrom(address,uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xb7, 0x00, 0x96, 0x13}: &Abi{
		Name:            "canCall",
		ABI:             "function canCall(address caller, address target, bytes4 selector) returns (bool immediate, uint32 delay)",
		Compact:         "canCall(address,address,bytes4)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "caller",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "selector",
				Type:         "bytes4",
				InternalType: "bytes4",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "immediate",
				Type:         "bool",
				InternalType: "bool",
			},
			&AbiIO{
				Name:         "delay",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
	},
	MethodPrefix{0x24, 0x9c, 0xb3, 0xfa}: &Abi{
		Name:            "canImplementInterfaceForAddress",
		ABI:             "function canImplementInterfaceForAddress(bytes32 interfaceHash, address account) returns (bytes32)",
		Compact:         "canImplementInterfaceForAddress(bytes32,address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "interfaceHash",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0xd6, 0xbb, 0x62, 0xc6}: &Abi{
		Name:            "cancel",
		ABI:             "function cancel(address caller, address target, bytes data) returns (uint32)",
		Compact:         "cancel(address,address,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "caller",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
	},
	MethodPrefix{0x45, 0x21, 0x15, 0xd6}: &Abi{
		Name:            "cancel",
		ABI:             "function cancel(address[] targets, uint256[] values, bytes[] calldatas, bytes32 descriptionHash) returns (uint256)",
		Compact:         "cancel(address[],uint256[],bytes[],bytes32)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "targets",
				Type:         "address[]",
				InternalType: "address[]",
			},
			&AbiIO{
				Name:         "values",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
			&AbiIO{
				Name:         "calldatas",
				Type:         "bytes[]",
				InternalType: "bytes[]",
			},
			&AbiIO{
				Name:         "descriptionHash",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xc4, 0xd2, 0x52, 0xf5}: &Abi{
		Name:            "cancel",
		ABI:             "function cancel(bytes32 id)",
		Compact:         "cancel(bytes32)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "id",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x40, 0xe5, 0x8e, 0xe5}: &Abi{
		Name:            "cancel",
		ABI:             "function cancel(uint256 proposalId)",
		Compact:         "cancel(uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xd6, 0x02, 0xb9, 0xfd}: &Abi{
		Name:            "cancelDefaultAdminTransfer",
		ABI:             "function cancelDefaultAdminTransfer()",
		Compact:         "cancelDefaultAdminTransfer()",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs:         []*AbiIO{},
	},
	MethodPrefix{0x59, 0x1f, 0xcd, 0xfe}: &Abi{
		Name:            "cancelTransaction",
		ABI:             "function cancelTransaction(address target, uint256 value, string signature, bytes data, uint256 eta)",
		Compact:         "cancelTransaction(address,uint256,string,bytes,uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "signature",
				Type:         "string",
				InternalType: "string",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "eta",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x35, 0x52, 0x74, 0xea}: &Abi{
		Name:            "cap",
		ABI:             "function cap() returns (uint256)",
		Compact:         "cap()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x56, 0x78, 0x13, 0x88}: &Abi{
		Name:            "castVote",
		ABI:             "function castVote(uint256 proposalId, uint8 support) returns (uint256)",
		Compact:         "castVote(uint256,uint8)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "support",
				Type:         "uint8",
				InternalType: "uint8",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x8f, 0xf2, 0x62, 0xe3}: &Abi{
		Name:            "castVoteBySig",
		ABI:             "function castVoteBySig(uint256 proposalId, uint8 support, address voter, bytes signature) returns (uint256)",
		Compact:         "castVoteBySig(uint256,uint8,address,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "support",
				Type:         "uint8",
				InternalType: "uint8",
			},
			&AbiIO{
				Name:         "voter",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "signature",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x7b, 0x3c, 0x71, 0xd3}: &Abi{
		Name:            "castVoteWithReason",
		ABI:             "function castVoteWithReason(uint256 proposalId, uint8 support, string reason) returns (uint256)",
		Compact:         "castVoteWithReason(uint256,uint8,string)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "support",
				Type:         "uint8",
				InternalType: "uint8",
			},
			&AbiIO{
				Name:         "reason",
				Type:         "string",
				InternalType: "string",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x5f, 0x39, 0x8a, 0x14}: &Abi{
		Name:            "castVoteWithReasonAndParams",
		ABI:             "function castVoteWithReasonAndParams(uint256 proposalId, uint8 support, string reason, bytes params) returns (uint256)",
		Compact:         "castVoteWithReasonAndParams(uint256,uint8,string,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "support",
				Type:         "uint8",
				InternalType: "uint8",
			},
			&AbiIO{
				Name:         "reason",
				Type:         "string",
				InternalType: "string",
			},
			&AbiIO{
				Name:         "params",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x5b, 0x8d, 0x0e, 0x0d}: &Abi{
		Name:            "castVoteWithReasonAndParamsBySig",
		ABI:             "function castVoteWithReasonAndParamsBySig(uint256 proposalId, uint8 support, address voter, string reason, bytes params, bytes signature) returns (uint256)",
		Compact:         "castVoteWithReasonAndParamsBySig(uint256,uint8,address,string,bytes,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "support",
				Type:         "uint8",
				InternalType: "uint8",
			},
			&AbiIO{
				Name:         "voter",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "reason",
				Type:         "string",
				InternalType: "string",
			},
			&AbiIO{
				Name:         "params",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "signature",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x64, 0x9a, 0x5e, 0xc7}: &Abi{
		Name:            "changeDefaultAdminDelay",
		ABI:             "function changeDefaultAdminDelay(uint48 newDelay)",
		Compact:         "changeDefaultAdminDelay(uint48)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "newDelay",
				Type:         "uint48",
				InternalType: "uint48",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xf1, 0x12, 0x7e, 0xd8}: &Abi{
		Name:            "checkpoints",
		ABI:             "function checkpoints(address account, uint32 pos) returns (struct Checkpoints.Checkpoint208)",
		Compact:         "checkpoints(address,uint32)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "pos",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "tuple",
				InternalType: "struct Checkpoints.Checkpoint208",
			},
		},
	},
	MethodPrefix{0x91, 0xdd, 0xad, 0xf4}: &Abi{
		Name:            "clock",
		ABI:             "function clock() returns (uint48)",
		Compact:         "clock()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint48",
				InternalType: "uint48",
			},
		},
	},
	MethodPrefix{0x94, 0xc7, 0xd7, 0xee}: &Abi{
		Name:            "consumeScheduledOp",
		ABI:             "function consumeScheduledOp(address caller, bytes data)",
		Compact:         "consumeScheduledOp(address,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "caller",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x07, 0xa2, 0xd1, 0x3a}: &Abi{
		Name:            "convertToAssets",
		ABI:             "function convertToAssets(uint256 shares) returns (uint256 assets)",
		Compact:         "convertToAssets(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "shares",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "assets",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xc6, 0xe6, 0xf5, 0x92}: &Abi{
		Name:            "convertToShares",
		ABI:             "function convertToShares(uint256 assets) returns (uint256 shares)",
		Compact:         "convertToShares(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "assets",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "shares",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x31, 0x3c, 0xe5, 0x67}: &Abi{
		Name:            "decimals",
		ABI:             "function decimals() returns (uint8)",
		Compact:         "decimals()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint8",
				InternalType: "uint8",
			},
		},
	},
	MethodPrefix{0x84, 0xef, 0x8f, 0xfc}: &Abi{
		Name:            "defaultAdmin",
		ABI:             "function defaultAdmin() returns (address)",
		Compact:         "defaultAdmin()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xcc, 0x84, 0x63, 0xc8}: &Abi{
		Name:            "defaultAdminDelay",
		ABI:             "function defaultAdminDelay() returns (uint48)",
		Compact:         "defaultAdminDelay()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint48",
				InternalType: "uint48",
			},
		},
	},
	MethodPrefix{0x02, 0x2d, 0x63, 0xfb}: &Abi{
		Name:            "defaultAdminDelayIncreaseWait",
		ABI:             "function defaultAdminDelayIncreaseWait() returns (uint48)",
		Compact:         "defaultAdminDelayIncreaseWait()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint48",
				InternalType: "uint48",
			},
		},
	},
	MethodPrefix{0x06, 0xe4, 0x85, 0x38}: &Abi{
		Name:            "defaultOperators",
		ABI:             "function defaultOperators() returns (address[])",
		Compact:         "defaultOperators()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address[]",
				InternalType: "address[]",
			},
		},
	},
	MethodPrefix{0x6a, 0x42, 0xb8, 0xf8}: &Abi{
		Name:            "delay",
		ABI:             "function delay() returns (uint256)",
		Compact:         "delay()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x5c, 0x19, 0xa9, 0x5c}: &Abi{
		Name:            "delegate",
		ABI:             "function delegate(address delegatee)",
		Compact:         "delegate(address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "delegatee",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xc3, 0xcd, 0xa5, 0x20}: &Abi{
		Name:            "delegateBySig",
		ABI:             "function delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s)",
		Compact:         "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "delegatee",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "nonce",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "expiry",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "v",
				Type:         "uint8",
				InternalType: "uint8",
			},
			&AbiIO{
				Name:         "r",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "s",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x58, 0x7c, 0xde, 0x1e}: &Abi{
		Name:            "delegates",
		ABI:             "function delegates(address account) returns (address)",
		Compact:         "delegates(address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x6e, 0x55, 0x3f, 0x65}: &Abi{
		Name:            "deposit",
		ABI:             "function deposit(uint256 assets, address receiver) returns (uint256 shares)",
		Compact:         "deposit(uint256,address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "assets",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "receiver",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "shares",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x2f, 0x4f, 0x21, 0xe2}: &Abi{
		Name:            "depositFor",
		ABI:             "function depositFor(address account, uint256 value) returns (bool)",
		Compact:         "depositFor(address,uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0xca, 0xce, 0x6e, 0xb2}: &Abi{
		Name:            "depositFor",
		ABI:             "function depositFor(address account, uint256[] tokenIds) returns (bool)",
		Compact:         "depositFor(address,uint256[])",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "tokenIds",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x0f, 0xb5, 0xa6, 0xb4}: &Abi{
		Name:            "duration",
		ABI:             "function duration() returns (uint256)",
		Compact:         "duration()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x84, 0xb0, 0x19, 0x6e}: &Abi{
		Name:            "eip712Domain",
		ABI:             "function eip712Domain() returns (bytes1 fields, string name, string version, uint256 chainId, address verifyingContract, bytes32 salt, uint256[] extensions)",
		Compact:         "eip712Domain()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "fields",
				Type:         "bytes1",
				InternalType: "bytes1",
			},
			&AbiIO{
				Name:         "name",
				Type:         "string",
				InternalType: "string",
			},
			&AbiIO{
				Name:         "version",
				Type:         "string",
				InternalType: "string",
			},
			&AbiIO{
				Name:         "chainId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "verifyingContract",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "salt",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "extensions",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
		},
	},
	MethodPrefix{0xef, 0xbe, 0x1c, 0x1c}: &Abi{
		Name:            "end",
		ABI:             "function end() returns (uint256)",
		Compact:         "end()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xdf, 0x90, 0x5c, 0xaf}: &Abi{
		Name:            "execute",
		ABI:             "function execute(struct ERC2771Forwarder.ForwardRequestData request)",
		Compact:         "execute((address,address,uint256,uint256,uint48,bytes,bytes))",
		StateMutability: "payable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "request",
				Type:         "tuple",
				InternalType: "struct ERC2771Forwarder.ForwardRequestData",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x1c, 0xff, 0x79, 0xcd}: &Abi{
		Name:            "execute",
		ABI:             "function execute(address target, bytes data) returns (uint32)",
		Compact:         "execute(address,bytes)",
		StateMutability: "payable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
	},
	MethodPrefix{0x13, 0x40, 0x08, 0xd3}: &Abi{
		Name:            "execute",
		ABI:             "function execute(address target, uint256 value, bytes payload, bytes32 predecessor, bytes32 salt)",
		Compact:         "execute(address,uint256,bytes,bytes32,bytes32)",
		StateMutability: "payable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "payload",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "predecessor",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "salt",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x26, 0x56, 0x22, 0x7d}: &Abi{
		Name:            "execute",
		ABI:             "function execute(address[] targets, uint256[] values, bytes[] calldatas, bytes32 descriptionHash) returns (uint256)",
		Compact:         "execute(address[],uint256[],bytes[],bytes32)",
		StateMutability: "payable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "targets",
				Type:         "address[]",
				InternalType: "address[]",
			},
			&AbiIO{
				Name:         "values",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
			&AbiIO{
				Name:         "calldatas",
				Type:         "bytes[]",
				InternalType: "bytes[]",
			},
			&AbiIO{
				Name:         "descriptionHash",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xfe, 0x0d, 0x94, 0xc1}: &Abi{
		Name:            "execute",
		ABI:             "function execute(uint256 proposalId)",
		Compact:         "execute(uint256)",
		StateMutability: "payable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xcc, 0xf9, 0x6b, 0x4a}: &Abi{
		Name:            "executeBatch",
		ABI:             "function executeBatch(struct ERC2771Forwarder.ForwardRequestData[] requests, address payable refundReceiver)",
		Compact:         "executeBatch((address,address,uint256,uint256,uint48,bytes,bytes)[],address)",
		StateMutability: "payable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "requests",
				Type:         "tuple[]",
				InternalType: "struct ERC2771Forwarder.ForwardRequestData[]",
			},
			&AbiIO{
				Name:         "refundReceiver",
				Type:         "address",
				InternalType: "address payable",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xe3, 0x83, 0x35, 0xe5}: &Abi{
		Name:            "executeBatch",
		ABI:             "function executeBatch(address[] targets, uint256[] values, bytes[] payloads, bytes32 predecessor, bytes32 salt)",
		Compact:         "executeBatch(address[],uint256[],bytes[],bytes32,bytes32)",
		StateMutability: "payable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "targets",
				Type:         "address[]",
				InternalType: "address[]",
			},
			&AbiIO{
				Name:         "values",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
			&AbiIO{
				Name:         "payloads",
				Type:         "bytes[]",
				InternalType: "bytes[]",
			},
			&AbiIO{
				Name:         "predecessor",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "salt",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x08, 0x25, 0xf3, 0x8f}: &Abi{
		Name:            "executeTransaction",
		ABI:             "function executeTransaction(address target, uint256 value, string signature, bytes data, uint256 eta) returns (bytes)",
		Compact:         "executeTransaction(address,uint256,string,bytes,uint256)",
		StateMutability: "payable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "signature",
				Type:         "string",
				InternalType: "string",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "eta",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
	},
	MethodPrefix{0x4f, 0x55, 0x8e, 0x79}: &Abi{
		Name:            "exists",
		ABI:             "function exists(uint256 id) returns (bool)",
		Compact:         "exists(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "id",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x46, 0x65, 0x09, 0x6d}: &Abi{
		Name:            "expiration",
		ABI:             "function expiration() returns (uint32)",
		Compact:         "expiration()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
	},
	MethodPrefix{0xd9, 0xd9, 0x8c, 0xe4}: &Abi{
		Name:            "flashFee",
		ABI:             "function flashFee(address token, uint256 amount) returns (uint256)",
		Compact:         "flashFee(address,uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "token",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x5c, 0xff, 0xe9, 0xde}: &Abi{
		Name:            "flashLoan",
		ABI:             "function flashLoan(contract IERC3156FlashBorrower receiver, address token, uint256 amount, bytes data) returns (bool)",
		Compact:         "flashLoan(address,address,uint256,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "receiver",
				Type:         "address",
				InternalType: "contract IERC3156FlashBorrower",
			},
			&AbiIO{
				Name:         "token",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x30, 0x78, 0xf1, 0x14}: &Abi{
		Name:            "getAccess",
		ABI:             "function getAccess(uint64 roleId, address account) returns (uint48 since, uint32 currentDelay, uint32 pendingDelay, uint48 effect)",
		Compact:         "getAccess(uint64,address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "since",
				Type:         "uint48",
				InternalType: "uint48",
			},
			&AbiIO{
				Name:         "currentDelay",
				Type:         "uint32",
				InternalType: "uint32",
			},
			&AbiIO{
				Name:         "pendingDelay",
				Type:         "uint32",
				InternalType: "uint32",
			},
			&AbiIO{
				Name:         "effect",
				Type:         "uint48",
				InternalType: "uint48",
			},
		},
	},
	MethodPrefix{0x08, 0x18, 0x12, 0xfc}: &Abi{
		Name:            "getApproved",
		ABI:             "function getApproved(uint256 tokenId) returns (address operator)",
		Compact:         "getApproved(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "tokenId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xaa, 0xbb, 0xb8, 0xca}: &Abi{
		Name:            "getInterfaceImplementer",
		ABI:             "function getInterfaceImplementer(address account, bytes32 _interfaceHash) returns (address)",
		Compact:         "getInterfaceImplementer(address,bytes32)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "_interfaceHash",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x3d, 0x58, 0x40, 0x63}: &Abi{
		Name:            "getManager",
		ABI:             "function getManager(address account) returns (address)",
		Compact:         "getManager(address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xf2, 0x7a, 0x0c, 0x92}: &Abi{
		Name:            "getMinDelay",
		ABI:             "function getMinDelay() returns (uint256)",
		Compact:         "getMinDelay()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x41, 0x36, 0xa3, 0x3c}: &Abi{
		Name:            "getNonce",
		ABI:             "function getNonce(bytes32 id) returns (uint32)",
		Compact:         "getNonce(bytes32)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "id",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
	},
	MethodPrefix{0x79, 0x58, 0x00, 0x4c}: &Abi{
		Name:            "getOperationState",
		ABI:             "function getOperationState(bytes32 id) returns (enum TimelockController.OperationState)",
		Compact:         "getOperationState(bytes32)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "id",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint8",
				InternalType: "enum TimelockController.OperationState",
			},
		},
	},
	MethodPrefix{0x8e, 0x53, 0x9e, 0x8c}: &Abi{
		Name:            "getPastTotalSupply",
		ABI:             "function getPastTotalSupply(uint256 timepoint) returns (uint256)",
		Compact:         "getPastTotalSupply(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "timepoint",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x3a, 0x46, 0xb1, 0xa8}: &Abi{
		Name:            "getPastVotes",
		ABI:             "function getPastVotes(address account, uint256 timepoint) returns (uint256)",
		Compact:         "getPastVotes(address,uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "timepoint",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x24, 0x8a, 0x9c, 0xa3}: &Abi{
		Name:            "getRoleAdmin",
		ABI:             "function getRoleAdmin(bytes32 role) returns (bytes32)",
		Compact:         "getRoleAdmin(bytes32)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "role",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x53, 0x0d, 0xd4, 0x56}: &Abi{
		Name:            "getRoleAdmin",
		ABI:             "function getRoleAdmin(uint64 roleId) returns (uint64)",
		Compact:         "getRoleAdmin(uint64)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
	},
	MethodPrefix{0x12, 0xbe, 0x87, 0x27}: &Abi{
		Name:            "getRoleGrantDelay",
		ABI:             "function getRoleGrantDelay(uint64 roleId) returns (uint32)",
		Compact:         "getRoleGrantDelay(uint64)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
	},
	MethodPrefix{0x0b, 0x0a, 0x93, 0xba}: &Abi{
		Name:            "getRoleGuardian",
		ABI:             "function getRoleGuardian(uint64 roleId) returns (uint64)",
		Compact:         "getRoleGuardian(uint64)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
	},
	MethodPrefix{0x90, 0x10, 0xd0, 0x7c}: &Abi{
		Name:            "getRoleMember",
		ABI:             "function getRoleMember(bytes32 role, uint256 index) returns (address)",
		Compact:         "getRoleMember(bytes32,uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "role",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "index",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xca, 0x15, 0xc8, 0x73}: &Abi{
		Name:            "getRoleMemberCount",
		ABI:             "function getRoleMemberCount(bytes32 role) returns (uint256)",
		Compact:         "getRoleMemberCount(bytes32)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "role",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x3a, 0xdc, 0x27, 0x7a}: &Abi{
		Name:            "getSchedule",
		ABI:             "function getSchedule(bytes32 id) returns (uint48)",
		Compact:         "getSchedule(bytes32)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "id",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint48",
				InternalType: "uint48",
			},
		},
	},
	MethodPrefix{0x4c, 0x1d, 0xa1, 0xe2}: &Abi{
		Name:            "getTargetAdminDelay",
		ABI:             "function getTargetAdminDelay(address target) returns (uint32)",
		Compact:         "getTargetAdminDelay(address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
	},
	MethodPrefix{0x6d, 0x51, 0x15, 0xbd}: &Abi{
		Name:            "getTargetFunctionRole",
		ABI:             "function getTargetFunctionRole(address target, bytes4 selector) returns (uint64)",
		Compact:         "getTargetFunctionRole(address,bytes4)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "selector",
				Type:         "bytes4",
				InternalType: "bytes4",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
	},
	MethodPrefix{0xd4, 0x5c, 0x44, 0x35}: &Abi{
		Name:            "getTimestamp",
		ABI:             "function getTimestamp(bytes32 id) returns (uint256)",
		Compact:         "getTimestamp(bytes32)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "id",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x9a, 0xb2, 0x4e, 0xb0}: &Abi{
		Name:            "getVotes",
		ABI:             "function getVotes(address account) returns (uint256)",
		Compact:         "getVotes(address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xeb, 0x90, 0x19, 0xd4}: &Abi{
		Name:            "getVotes",
		ABI:             "function getVotes(address account, uint256 timepoint) returns (uint256)",
		Compact:         "getVotes(address,uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "timepoint",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x9a, 0x80, 0x2a, 0x6d}: &Abi{
		Name:            "getVotesWithParams",
		ABI:             "function getVotesWithParams(address account, uint256 timepoint, bytes params) returns (uint256)",
		Compact:         "getVotesWithParams(address,uint256,bytes)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "timepoint",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "params",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x2f, 0x2f, 0xf1, 0x5d}: &Abi{
		Name:            "grantRole",
		ABI:             "function grantRole(bytes32 role, address account)",
		Compact:         "grantRole(bytes32,address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "role",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x25, 0xc4, 0x71, 0xa0}: &Abi{
		Name:            "grantRole",
		ABI:             "function grantRole(uint64 roleId, address account, uint32 executionDelay)",
		Compact:         "grantRole(uint64,address,uint32)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "executionDelay",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x55, 0x6f, 0x0d, 0xc7}: &Abi{
		Name:            "granularity",
		ABI:             "function granularity() returns (uint256)",
		Compact:         "granularity()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x91, 0xd1, 0x48, 0x54}: &Abi{
		Name:            "hasRole",
		ABI:             "function hasRole(bytes32 role, address account) returns (bool)",
		Compact:         "hasRole(bytes32,address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "role",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0xd1, 0xf8, 0x56, 0xee}: &Abi{
		Name:            "hasRole",
		ABI:             "function hasRole(uint64 roleId, address account) returns (bool isMember, uint32 executionDelay)",
		Compact:         "hasRole(uint64,address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "isMember",
				Type:         "bool",
				InternalType: "bool",
			},
			&AbiIO{
				Name:         "executionDelay",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
	},
	MethodPrefix{0x43, 0x85, 0x96, 0x32}: &Abi{
		Name:            "hasVoted",
		ABI:             "function hasVoted(uint256 proposalId, address account) returns (bool)",
		Compact:         "hasVoted(uint256,address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0xab, 0xd9, 0xbd, 0x2a}: &Abi{
		Name:            "hashOperation",
		ABI:             "function hashOperation(address caller, address target, bytes data) returns (bytes32)",
		Compact:         "hashOperation(address,address,bytes)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "caller",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x80, 0x65, 0x65, 0x7f}: &Abi{
		Name:            "hashOperation",
		ABI:             "function hashOperation(address target, uint256 value, bytes data, bytes32 predecessor, bytes32 salt) returns (bytes32)",
		Compact:         "hashOperation(address,uint256,bytes,bytes32,bytes32)",
		StateMutability: "pure",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "predecessor",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "salt",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0xb1, 0xc5, 0xf4, 0x27}: &Abi{
		Name:            "hashOperationBatch",
		ABI:             "function hashOperationBatch(address[] targets, uint256[] values, bytes[] payloads, bytes32 predecessor, bytes32 salt) returns (bytes32)",
		Compact:         "hashOperationBatch(address[],uint256[],bytes[],bytes32,bytes32)",
		StateMutability: "pure",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "targets",
				Type:         "address[]",
				InternalType: "address[]",
			},
			&AbiIO{
				Name:         "values",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
			&AbiIO{
				Name:         "payloads",
				Type:         "bytes[]",
				InternalType: "bytes[]",
			},
			&AbiIO{
				Name:         "predecessor",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "salt",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0xc5, 0x90, 0x57, 0xe4}: &Abi{
		Name:            "hashProposal",
		ABI:             "function hashProposal(address[] targets, uint256[] values, bytes[] calldatas, bytes32 descriptionHash) returns (uint256)",
		Compact:         "hashProposal(address[],uint256[],bytes[],bytes32)",
		StateMutability: "pure",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "targets",
				Type:         "address[]",
				InternalType: "address[]",
			},
			&AbiIO{
				Name:         "values",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
			&AbiIO{
				Name:         "calldatas",
				Type:         "bytes[]",
				InternalType: "bytes[]",
			},
			&AbiIO{
				Name:         "descriptionHash",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x5c, 0x60, 0xda, 0x1b}: &Abi{
		Name:            "implementation",
		ABI:             "function implementation() returns (address)",
		Compact:         "implementation()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xf7, 0x12, 0xf3, 0xe8}: &Abi{
		Name:            "implementsERC165Interface",
		ABI:             "function implementsERC165Interface(address account, bytes4 interfaceId) returns (bool)",
		Compact:         "implementsERC165Interface(address,bytes4)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "interfaceId",
				Type:         "bytes4",
				InternalType: "bytes4",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0xb7, 0x05, 0x67, 0x65}: &Abi{
		Name:            "implementsERC165InterfaceNoCache",
		ABI:             "function implementsERC165InterfaceNoCache(address account, bytes4 interfaceId) returns (bool)",
		Compact:         "implementsERC165InterfaceNoCache(address,bytes4)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "interfaceId",
				Type:         "bytes4",
				InternalType: "bytes4",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x65, 0xba, 0x36, 0xc1}: &Abi{
		Name:            "interfaceHash",
		ABI:             "function interfaceHash(string interfaceName) returns (bytes32)",
		Compact:         "interfaceHash(string)",
		StateMutability: "pure",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "interfaceName",
				Type:         "string",
				InternalType: "string",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x82, 0xe4, 0x93, 0x86}: &Abi{
		Name:            "isAccessManagerIgnored",
		ABI:             "function isAccessManagerIgnored(address target, bytes4 selector) returns (bool)",
		Compact:         "isAccessManagerIgnored(address,bytes4)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "selector",
				Type:         "bytes4",
				InternalType: "bytes4",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0xe9, 0x85, 0xe9, 0xc5}: &Abi{
		Name:            "isApprovedForAll",
		ABI:             "function isApprovedForAll(address owner, address operator) returns (bool)",
		Compact:         "isApprovedForAll(address,address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x8f, 0xb3, 0x60, 0x37}: &Abi{
		Name:            "isConsumingScheduledOp",
		ABI:             "function isConsumingScheduledOp() returns (bytes4)",
		Compact:         "isConsumingScheduledOp()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes4",
				InternalType: "bytes4",
			},
		},
	},
	MethodPrefix{0x31, 0xd5, 0x07, 0x50}: &Abi{
		Name:            "isOperation",
		ABI:             "function isOperation(bytes32 id) returns (bool)",
		Compact:         "isOperation(bytes32)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "id",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x2a, 0xb0, 0xf5, 0x29}: &Abi{
		Name:            "isOperationDone",
		ABI:             "function isOperationDone(bytes32 id) returns (bool)",
		Compact:         "isOperationDone(bytes32)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "id",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x58, 0x4b, 0x15, 0x3e}: &Abi{
		Name:            "isOperationPending",
		ABI:             "function isOperationPending(bytes32 id) returns (bool)",
		Compact:         "isOperationPending(bytes32)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "id",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x13, 0xbc, 0x9f, 0x20}: &Abi{
		Name:            "isOperationReady",
		ABI:             "function isOperationReady(bytes32 id) returns (bool)",
		Compact:         "isOperationReady(bytes32)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "id",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0xd9, 0x5b, 0x63, 0x71}: &Abi{
		Name:            "isOperatorFor",
		ABI:             "function isOperatorFor(address operator, address tokenHolder) returns (bool)",
		Compact:         "isOperatorFor(address,address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "tokenHolder",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0xa1, 0x66, 0xaa, 0x89}: &Abi{
		Name:            "isTargetClosed",
		ABI:             "function isTargetClosed(address target) returns (bool)",
		Compact:         "isTargetClosed(address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x57, 0x2b, 0x6c, 0x05}: &Abi{
		Name:            "isTrustedForwarder",
		ABI:             "function isTrustedForwarder(address forwarder) returns (bool)",
		Compact:         "isTrustedForwarder(address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "forwarder",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x16, 0x26, 0xba, 0x7e}: &Abi{
		Name:            "isValidSignature",
		ABI:             "function isValidSignature(bytes32 hash, bytes signature) returns (bytes4 magicValue)",
		Compact:         "isValidSignature(bytes32,bytes)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "hash",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "signature",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "magicValue",
				Type:         "bytes4",
				InternalType: "bytes4",
			},
		},
	},
	MethodPrefix{0x85, 0x35, 0x51, 0xb8}: &Abi{
		Name:            "labelRole",
		ABI:             "function labelRole(uint64 roleId, string label)",
		Compact:         "labelRole(uint64,string)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
			&AbiIO{
				Name:         "label",
				Type:         "string",
				InternalType: "string",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x32, 0xb8, 0x11, 0x3e}: &Abi{
		Name:            "lateQuorumVoteExtension",
		ABI:             "function lateQuorumVoteExtension() returns (uint48)",
		Compact:         "lateQuorumVoteExtension()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint48",
				InternalType: "uint48",
			},
		},
	},
	MethodPrefix{0x40, 0x2d, 0x26, 0x7d}: &Abi{
		Name:            "maxDeposit",
		ABI:             "function maxDeposit(address receiver) returns (uint256 maxAssets)",
		Compact:         "maxDeposit(address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "receiver",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "maxAssets",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x61, 0x32, 0x55, 0xab}: &Abi{
		Name:            "maxFlashLoan",
		ABI:             "function maxFlashLoan(address token) returns (uint256)",
		Compact:         "maxFlashLoan(address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "token",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xc6, 0x3d, 0x75, 0xb6}: &Abi{
		Name:            "maxMint",
		ABI:             "function maxMint(address receiver) returns (uint256 maxShares)",
		Compact:         "maxMint(address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "receiver",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "maxShares",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xd9, 0x05, 0x77, 0x7e}: &Abi{
		Name:            "maxRedeem",
		ABI:             "function maxRedeem(address owner) returns (uint256 maxShares)",
		Compact:         "maxRedeem(address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "maxShares",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xce, 0x96, 0xcb, 0x77}: &Abi{
		Name:            "maxWithdraw",
		ABI:             "function maxWithdraw(address owner) returns (uint256 maxAssets)",
		Compact:         "maxWithdraw(address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "maxAssets",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xcc, 0x1b, 0x6c, 0x81}: &Abi{
		Name:            "minSetback",
		ABI:             "function minSetback() returns (uint32)",
		Compact:         "minSetback()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
	},
	MethodPrefix{0x94, 0xbf, 0x80, 0x4d}: &Abi{
		Name:            "mint",
		ABI:             "function mint(uint256 shares, address receiver) returns (uint256 assets)",
		Compact:         "mint(uint256,address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "shares",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "receiver",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "assets",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xac, 0x96, 0x50, 0xd8}: &Abi{
		Name:            "multicall",
		ABI:             "function multicall(bytes[] data) returns (bytes[] results)",
		Compact:         "multicall(bytes[])",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "data",
				Type:         "bytes[]",
				InternalType: "bytes[]",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "results",
				Type:         "bytes[]",
				InternalType: "bytes[]",
			},
		},
	},
	MethodPrefix{0x06, 0xfd, 0xde, 0x03}: &Abi{
		Name:            "name",
		ABI:             "function name() returns (string)",
		Compact:         "name()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "string",
				InternalType: "string",
			},
		},
	},
	MethodPrefix{0x7e, 0xce, 0xbe, 0x00}: &Abi{
		Name:            "nonces",
		ABI:             "function nonces(address owner) returns (uint256)",
		Compact:         "nonces(address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x6f, 0xcf, 0xff, 0x45}: &Abi{
		Name:            "numCheckpoints",
		ABI:             "function numCheckpoints(address account) returns (uint32)",
		Compact:         "numCheckpoints(address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
	},
	MethodPrefix{0x7b, 0x04, 0xa2, 0xd0}: &Abi{
		Name:            "onApprovalReceived",
		ABI:             "function onApprovalReceived(address owner, uint256 amount, bytes data) returns (bytes4)",
		Compact:         "onApprovalReceived(address,uint256,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes4",
				InternalType: "bytes4",
			},
		},
	},
	MethodPrefix{0xbc, 0x19, 0x7c, 0x81}: &Abi{
		Name:            "onERC1155BatchReceived",
		ABI:             "function onERC1155BatchReceived(address, address, uint256[], uint256[], bytes) returns (bytes4)",
		Compact:         "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
			&AbiIO{
				Name:         "",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
			&AbiIO{
				Name:         "",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes4",
				InternalType: "bytes4",
			},
		},
	},
	MethodPrefix{0xf2, 0x3a, 0x6e, 0x61}: &Abi{
		Name:            "onERC1155Received",
		ABI:             "function onERC1155Received(address, address, uint256, uint256, bytes) returns (bytes4)",
		Compact:         "onERC1155Received(address,address,uint256,uint256,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes4",
				InternalType: "bytes4",
			},
		},
	},
	MethodPrefix{0x15, 0x0b, 0x7a, 0x02}: &Abi{
		Name:            "onERC721Received",
		ABI:             "function onERC721Received(address, address, uint256, bytes) returns (bytes4)",
		Compact:         "onERC721Received(address,address,uint256,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes4",
				InternalType: "bytes4",
			},
		},
	},
	MethodPrefix{0x23, 0xe3, 0x0c, 0x8b}: &Abi{
		Name:            "onFlashLoan",
		ABI:             "function onFlashLoan(address initiator, address token, uint256 amount, uint256 fee, bytes data) returns (bytes32)",
		Compact:         "onFlashLoan(address,address,uint256,uint256,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "initiator",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "token",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "fee",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x88, 0xa7, 0xca, 0x5c}: &Abi{
		Name:            "onTransferReceived",
		ABI:             "function onTransferReceived(address operator, address from, uint256 amount, bytes data) returns (bytes4)",
		Compact:         "onTransferReceived(address,address,uint256,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "from",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes4",
				InternalType: "bytes4",
			},
		},
	},
	MethodPrefix{0xfc, 0x67, 0x3c, 0x4f}: &Abi{
		Name:            "operatorBurn",
		ABI:             "function operatorBurn(address account, uint256 amount, bytes data, bytes operatorData)",
		Compact:         "operatorBurn(address,uint256,bytes,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "operatorData",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x62, 0xad, 0x1b, 0x83}: &Abi{
		Name:            "operatorSend",
		ABI:             "function operatorSend(address sender, address recipient, uint256 amount, bytes data, bytes operatorData)",
		Compact:         "operatorSend(address,address,uint256,bytes,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "sender",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "recipient",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "operatorData",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x8d, 0xa5, 0xcb, 0x5b}: &Abi{
		Name:            "owner",
		ABI:             "function owner() returns (address)",
		Compact:         "owner()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x63, 0x52, 0x21, 0x1e}: &Abi{
		Name:            "ownerOf",
		ABI:             "function ownerOf(uint256 tokenId) returns (address owner)",
		Compact:         "ownerOf(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "tokenId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x5c, 0x97, 0x5a, 0xbb}: &Abi{
		Name:            "paused",
		ABI:             "function paused() returns (bool)",
		Compact:         "paused()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x26, 0x78, 0x22, 0x47}: &Abi{
		Name:            "pendingAdmin",
		ABI:             "function pendingAdmin() returns (address)",
		Compact:         "pendingAdmin()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xcf, 0x6e, 0xef, 0xb7}: &Abi{
		Name:            "pendingDefaultAdmin",
		ABI:             "function pendingDefaultAdmin() returns (address newAdmin, uint48 schedule)",
		Compact:         "pendingDefaultAdmin()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "newAdmin",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "schedule",
				Type:         "uint48",
				InternalType: "uint48",
			},
		},
	},
	MethodPrefix{0xa1, 0xed, 0xa5, 0x3c}: &Abi{
		Name:            "pendingDefaultAdminDelay",
		ABI:             "function pendingDefaultAdminDelay() returns (uint48 newDelay, uint48 schedule)",
		Compact:         "pendingDefaultAdminDelay()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "newDelay",
				Type:         "uint48",
				InternalType: "uint48",
			},
			&AbiIO{
				Name:         "schedule",
				Type:         "uint48",
				InternalType: "uint48",
			},
		},
	},
	MethodPrefix{0xe3, 0x0c, 0x39, 0x78}: &Abi{
		Name:            "pendingOwner",
		ABI:             "function pendingOwner() returns (address)",
		Compact:         "pendingOwner()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xd5, 0x05, 0xac, 0xcf}: &Abi{
		Name:            "permit",
		ABI:             "function permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s)",
		Compact:         "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "spender",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "deadline",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "v",
				Type:         "uint8",
				InternalType: "uint8",
			},
			&AbiIO{
				Name:         "r",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "s",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xef, 0x8b, 0x30, 0xf7}: &Abi{
		Name:            "previewDeposit",
		ABI:             "function previewDeposit(uint256 assets) returns (uint256 shares)",
		Compact:         "previewDeposit(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "assets",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "shares",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xb3, 0xd7, 0xf6, 0xb9}: &Abi{
		Name:            "previewMint",
		ABI:             "function previewMint(uint256 shares) returns (uint256 assets)",
		Compact:         "previewMint(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "shares",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "assets",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x4c, 0xda, 0xd5, 0x06}: &Abi{
		Name:            "previewRedeem",
		ABI:             "function previewRedeem(uint256 shares) returns (uint256 assets)",
		Compact:         "previewRedeem(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "shares",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "assets",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x0a, 0x28, 0xa4, 0x77}: &Abi{
		Name:            "previewWithdraw",
		ABI:             "function previewWithdraw(uint256 assets) returns (uint256 shares)",
		Compact:         "previewWithdraw(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "assets",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "shares",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xda, 0x35, 0xc6, 0x64}: &Abi{
		Name:            "proposalCount",
		ABI:             "function proposalCount() returns (uint256)",
		Compact:         "proposalCount()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xc0, 0x1f, 0x9e, 0x37}: &Abi{
		Name:            "proposalDeadline",
		ABI:             "function proposalDeadline(uint256 proposalId) returns (uint256)",
		Compact:         "proposalDeadline(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x16, 0xe9, 0xea, 0xec}: &Abi{
		Name:            "proposalDetails",
		ABI:             "function proposalDetails(uint256 proposalId) returns (address[], uint256[], bytes[], bytes32)",
		Compact:         "proposalDetails(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address[]",
				InternalType: "address[]",
			},
			&AbiIO{
				Name:         "",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
			&AbiIO{
				Name:         "",
				Type:         "bytes[]",
				InternalType: "bytes[]",
			},
			&AbiIO{
				Name:         "",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x2e, 0x82, 0xdb, 0x94}: &Abi{
		Name:            "proposalDetailsAt",
		ABI:             "function proposalDetailsAt(uint256 index) returns (uint256, address[], uint256[], bytes[], bytes32)",
		Compact:         "proposalDetailsAt(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "index",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "",
				Type:         "address[]",
				InternalType: "address[]",
			},
			&AbiIO{
				Name:         "",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
			&AbiIO{
				Name:         "",
				Type:         "bytes[]",
				InternalType: "bytes[]",
			},
			&AbiIO{
				Name:         "",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0xab, 0x58, 0xfb, 0x8e}: &Abi{
		Name:            "proposalEta",
		ABI:             "function proposalEta(uint256 proposalId) returns (uint256)",
		Compact:         "proposalEta(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x36, 0x36, 0x95, 0x47}: &Abi{
		Name:            "proposalExecutionPlan",
		ABI:             "function proposalExecutionPlan(uint256 proposalId) returns (uint32 delay, bool[] indirect, bool[] withDelay)",
		Compact:         "proposalExecutionPlan(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "delay",
				Type:         "uint32",
				InternalType: "uint32",
			},
			&AbiIO{
				Name:         "indirect",
				Type:         "bool[]",
				InternalType: "bool[]",
			},
			&AbiIO{
				Name:         "withDelay",
				Type:         "bool[]",
				InternalType: "bool[]",
			},
		},
	},
	MethodPrefix{0xa9, 0xa9, 0x52, 0x94}: &Abi{
		Name:            "proposalNeedsQueuing",
		ABI:             "function proposalNeedsQueuing(uint256) returns (bool)",
		Compact:         "proposalNeedsQueuing(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x14, 0x34, 0x89, 0xd0}: &Abi{
		Name:            "proposalProposer",
		ABI:             "function proposalProposer(uint256 proposalId) returns (address)",
		Compact:         "proposalProposer(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x2d, 0x63, 0xf6, 0x93}: &Abi{
		Name:            "proposalSnapshot",
		ABI:             "function proposalSnapshot(uint256 proposalId) returns (uint256)",
		Compact:         "proposalSnapshot(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xb5, 0x81, 0x31, 0xb0}: &Abi{
		Name:            "proposalThreshold",
		ABI:             "function proposalThreshold() returns (uint256)",
		Compact:         "proposalThreshold()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x54, 0x4f, 0xfc, 0x9c}: &Abi{
		Name:            "proposalVotes",
		ABI:             "function proposalVotes(uint256 proposalId) returns (uint256 againstVotes, uint256 forVotes, uint256 abstainVotes)",
		Compact:         "proposalVotes(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "againstVotes",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "forVotes",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "abstainVotes",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x7d, 0x5e, 0x81, 0xe2}: &Abi{
		Name:            "propose",
		ABI:             "function propose(address[] targets, uint256[] values, bytes[] calldatas, string description) returns (uint256)",
		Compact:         "propose(address[],uint256[],bytes[],string)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "targets",
				Type:         "address[]",
				InternalType: "address[]",
			},
			&AbiIO{
				Name:         "values",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
			&AbiIO{
				Name:         "calldatas",
				Type:         "bytes[]",
				InternalType: "bytes[]",
			},
			&AbiIO{
				Name:         "description",
				Type:         "string",
				InternalType: "string",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x52, 0xd1, 0x90, 0x2d}: &Abi{
		Name:            "proxiableUUID",
		ABI:             "function proxiableUUID() returns (bytes32)",
		Compact:         "proxiableUUID()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0x16, 0x0c, 0xbe, 0xd7}: &Abi{
		Name:            "queue",
		ABI:             "function queue(address[] targets, uint256[] values, bytes[] calldatas, bytes32 descriptionHash) returns (uint256)",
		Compact:         "queue(address[],uint256[],bytes[],bytes32)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "targets",
				Type:         "address[]",
				InternalType: "address[]",
			},
			&AbiIO{
				Name:         "values",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
			&AbiIO{
				Name:         "calldatas",
				Type:         "bytes[]",
				InternalType: "bytes[]",
			},
			&AbiIO{
				Name:         "descriptionHash",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xdd, 0xf0, 0xb0, 0x09}: &Abi{
		Name:            "queue",
		ABI:             "function queue(uint256 proposalId)",
		Compact:         "queue(uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x3a, 0x66, 0xf9, 0x01}: &Abi{
		Name:            "queueTransaction",
		ABI:             "function queueTransaction(address target, uint256 value, string signature, bytes data, uint256 eta) returns (bytes32)",
		Compact:         "queueTransaction(address,uint256,string,bytes,uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "signature",
				Type:         "string",
				InternalType: "string",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "eta",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
	},
	MethodPrefix{0xf2, 0xb0, 0x65, 0x37}: &Abi{
		Name:            "queuedTransactions",
		ABI:             "function queuedTransactions(bytes32) returns (bool)",
		Compact:         "queuedTransactions(bytes32)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0xf8, 0xce, 0x56, 0x0a}: &Abi{
		Name:            "quorum",
		ABI:             "function quorum(uint256 timepoint) returns (uint256)",
		Compact:         "quorum(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "timepoint",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x97, 0xc3, 0xd3, 0x34}: &Abi{
		Name:            "quorumDenominator",
		ABI:             "function quorumDenominator() returns (uint256)",
		Compact:         "quorumDenominator()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xa7, 0x71, 0x3a, 0x70}: &Abi{
		Name:            "quorumNumerator",
		ABI:             "function quorumNumerator() returns (uint256)",
		Compact:         "quorumNumerator()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x60, 0xc4, 0x24, 0x7f}: &Abi{
		Name:            "quorumNumerator",
		ABI:             "function quorumNumerator(uint256 timepoint) returns (uint256)",
		Compact:         "quorumNumerator(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "timepoint",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xba, 0x08, 0x76, 0x52}: &Abi{
		Name:            "redeem",
		ABI:             "function redeem(uint256 shares, address receiver, address owner) returns (uint256 assets)",
		Compact:         "redeem(uint256,address,address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "shares",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "receiver",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "assets",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xc2, 0x8b, 0xc2, 0xfa}: &Abi{
		Name:            "relay",
		ABI:             "function relay(address target, uint256 value, bytes data)",
		Compact:         "relay(address,uint256,bytes)",
		StateMutability: "payable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xfb, 0xcc, 0xed, 0xae}: &Abi{
		Name:            "releasable",
		ABI:             "function releasable() returns (uint256)",
		Compact:         "releasable()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xa3, 0xf8, 0xea, 0xce}: &Abi{
		Name:            "releasable",
		ABI:             "function releasable(address token) returns (uint256)",
		Compact:         "releasable(address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "token",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x86, 0xd1, 0xa6, 0x9f}: &Abi{
		Name:            "release",
		ABI:             "function release()",
		Compact:         "release()",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs:         []*AbiIO{},
	},
	MethodPrefix{0x19, 0x16, 0x55, 0x87}: &Abi{
		Name:            "release",
		ABI:             "function release(address token)",
		Compact:         "release(address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "token",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x96, 0x13, 0x25, 0x21}: &Abi{
		Name:            "released",
		ABI:             "function released() returns (uint256)",
		Compact:         "released()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x98, 0x52, 0x59, 0x5c}: &Abi{
		Name:            "released",
		ABI:             "function released(address token) returns (uint256)",
		Compact:         "released(address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "token",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x71, 0x50, 0x18, 0xa6}: &Abi{
		Name:            "renounceOwnership",
		ABI:             "function renounceOwnership()",
		Compact:         "renounceOwnership()",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs:         []*AbiIO{},
	},
	MethodPrefix{0x36, 0x56, 0x8a, 0xbe}: &Abi{
		Name:            "renounceRole",
		ABI:             "function renounceRole(bytes32 role, address callerConfirmation)",
		Compact:         "renounceRole(bytes32,address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "role",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "callerConfirmation",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xfe, 0x07, 0x76, 0xf5}: &Abi{
		Name:            "renounceRole",
		ABI:             "function renounceRole(uint64 roleId, address callerConfirmation)",
		Compact:         "renounceRole(uint64,address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
			&AbiIO{
				Name:         "callerConfirmation",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xfa, 0xd8, 0xb3, 0x2a}: &Abi{
		Name:            "revokeOperator",
		ABI:             "function revokeOperator(address operator)",
		Compact:         "revokeOperator(address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xd5, 0x47, 0x74, 0x1f}: &Abi{
		Name:            "revokeRole",
		ABI:             "function revokeRole(bytes32 role, address account)",
		Compact:         "revokeRole(bytes32,address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "role",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xb7, 0xd2, 0xb1, 0x62}: &Abi{
		Name:            "revokeRole",
		ABI:             "function revokeRole(uint64 roleId, address account)",
		Compact:         "revokeRole(uint64,address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x0a, 0xa6, 0x22, 0x0b}: &Abi{
		Name:            "rollbackDefaultAdminDelay",
		ABI:             "function rollbackDefaultAdminDelay()",
		Compact:         "rollbackDefaultAdminDelay()",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs:         []*AbiIO{},
	},
	MethodPrefix{0x2a, 0x55, 0x20, 0x5a}: &Abi{
		Name:            "royaltyInfo",
		ABI:             "function royaltyInfo(uint256 tokenId, uint256 salePrice) returns (address receiver, uint256 royaltyAmount)",
		Compact:         "royaltyInfo(uint256,uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "tokenId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "salePrice",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "receiver",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "royaltyAmount",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x2e, 0xb2, 0xc2, 0xd6}: &Abi{
		Name:            "safeBatchTransferFrom",
		ABI:             "function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] values, bytes data)",
		Compact:         "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "from",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "to",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "ids",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
			&AbiIO{
				Name:         "values",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x42, 0x84, 0x2e, 0x0e}: &Abi{
		Name:            "safeTransferFrom",
		ABI:             "function safeTransferFrom(address from, address to, uint256 tokenId)",
		Compact:         "safeTransferFrom(address,address,uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "from",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "to",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "tokenId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xb8, 0x8d, 0x4f, 0xde}: &Abi{
		Name:            "safeTransferFrom",
		ABI:             "function safeTransferFrom(address from, address to, uint256 tokenId, bytes data)",
		Compact:         "safeTransferFrom(address,address,uint256,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "from",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "to",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "tokenId",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xf2, 0x42, 0x43, 0x2a}: &Abi{
		Name:            "safeTransferFrom",
		ABI:             "function safeTransferFrom(address from, address to, uint256 id, uint256 value, bytes data)",
		Compact:         "safeTransferFrom(address,address,uint256,uint256,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "from",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "to",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "id",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xf8, 0x01, 0xa6, 0x98}: &Abi{
		Name:            "schedule",
		ABI:             "function schedule(address target, bytes data, uint48 when) returns (bytes32 operationId, uint32 nonce)",
		Compact:         "schedule(address,bytes,uint48)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "when",
				Type:         "uint48",
				InternalType: "uint48",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "operationId",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "nonce",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
	},
	MethodPrefix{0x01, 0xd5, 0x06, 0x2a}: &Abi{
		Name:            "schedule",
		ABI:             "function schedule(address target, uint256 value, bytes data, bytes32 predecessor, bytes32 salt, uint256 delay)",
		Compact:         "schedule(address,uint256,bytes,bytes32,bytes32,uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "predecessor",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "salt",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "delay",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x8f, 0x2a, 0x0b, 0xb0}: &Abi{
		Name:            "scheduleBatch",
		ABI:             "function scheduleBatch(address[] targets, uint256[] values, bytes[] payloads, bytes32 predecessor, bytes32 salt, uint256 delay)",
		Compact:         "scheduleBatch(address[],uint256[],bytes[],bytes32,bytes32,uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "targets",
				Type:         "address[]",
				InternalType: "address[]",
			},
			&AbiIO{
				Name:         "values",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
			&AbiIO{
				Name:         "payloads",
				Type:         "bytes[]",
				InternalType: "bytes[]",
			},
			&AbiIO{
				Name:         "predecessor",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "salt",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "delay",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x9b, 0xd9, 0xbb, 0xc6}: &Abi{
		Name:            "send",
		ABI:             "function send(address recipient, uint256 amount, bytes data)",
		Compact:         "send(address,uint256,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "recipient",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xcc, 0x3b, 0xac, 0x57}: &Abi{
		Name:            "setAccessManagerIgnored",
		ABI:             "function setAccessManagerIgnored(address target, bytes4[] selectors, bool ignored)",
		Compact:         "setAccessManagerIgnored(address,bytes4[],bool)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "selectors",
				Type:         "bytes4[]",
				InternalType: "bytes4[]",
			},
			&AbiIO{
				Name:         "ignored",
				Type:         "bool",
				InternalType: "bool",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xa2, 0x2c, 0xb4, 0x65}: &Abi{
		Name:            "setApprovalForAll",
		ABI:             "function setApprovalForAll(address operator, bool approved)",
		Compact:         "setApprovalForAll(address,bool)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "approved",
				Type:         "bool",
				InternalType: "bool",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x7a, 0x9e, 0x5e, 0x4b}: &Abi{
		Name:            "setAuthority",
		ABI:             "function setAuthority(address newAuthority)",
		Compact:         "setAuthority(address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "newAuthority",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x0a, 0x2a, 0x55, 0x0d}: &Abi{
		Name:            "setBaseDelaySeconds",
		ABI:             "function setBaseDelaySeconds(uint32 newBaseDelay)",
		Compact:         "setBaseDelaySeconds(uint32)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "newBaseDelay",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xe1, 0x77, 0x24, 0x6e}: &Abi{
		Name:            "setDelay",
		ABI:             "function setDelay(uint256)",
		Compact:         "setDelay(uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xa6, 0x4d, 0x95, 0xce}: &Abi{
		Name:            "setGrantDelay",
		ABI:             "function setGrantDelay(uint64 roleId, uint32 newDelay)",
		Compact:         "setGrantDelay(uint64,uint32)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
			&AbiIO{
				Name:         "newDelay",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x29, 0x96, 0x5a, 0x1d}: &Abi{
		Name:            "setInterfaceImplementer",
		ABI:             "function setInterfaceImplementer(address account, bytes32 _interfaceHash, address implementer)",
		Compact:         "setInterfaceImplementer(address,bytes32,address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "_interfaceHash",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "implementer",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x33, 0x0d, 0xf7, 0xff}: &Abi{
		Name:            "setLateQuorumVoteExtension",
		ABI:             "function setLateQuorumVoteExtension(uint48 newVoteExtension)",
		Compact:         "setLateQuorumVoteExtension(uint48)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "newVoteExtension",
				Type:         "uint48",
				InternalType: "uint48",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x5d, 0xf8, 0x12, 0x2f}: &Abi{
		Name:            "setManager",
		ABI:             "function setManager(address account, address newManager)",
		Compact:         "setManager(address,address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "newManager",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x4d, 0xd1, 0x8b, 0xf5}: &Abi{
		Name:            "setPendingAdmin",
		ABI:             "function setPendingAdmin(address)",
		Compact:         "setPendingAdmin(address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xec, 0xe4, 0x0c, 0xc1}: &Abi{
		Name:            "setProposalThreshold",
		ABI:             "function setProposalThreshold(uint256 newProposalThreshold)",
		Compact:         "setProposalThreshold(uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "newProposalThreshold",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x30, 0xca, 0xe1, 0x87}: &Abi{
		Name:            "setRoleAdmin",
		ABI:             "function setRoleAdmin(uint64 roleId, uint64 admin)",
		Compact:         "setRoleAdmin(uint64,uint64)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
			&AbiIO{
				Name:         "admin",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x52, 0x96, 0x29, 0x52}: &Abi{
		Name:            "setRoleGuardian",
		ABI:             "function setRoleGuardian(uint64 roleId, uint64 guardian)",
		Compact:         "setRoleGuardian(uint64,uint64)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
			&AbiIO{
				Name:         "guardian",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xd2, 0x2b, 0x59, 0x89}: &Abi{
		Name:            "setTargetAdminDelay",
		ABI:             "function setTargetAdminDelay(address target, uint32 newDelay)",
		Compact:         "setTargetAdminDelay(address,uint32)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "newDelay",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x16, 0x7b, 0xd3, 0x95}: &Abi{
		Name:            "setTargetClosed",
		ABI:             "function setTargetClosed(address target, bool closed)",
		Compact:         "setTargetClosed(address,bool)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "closed",
				Type:         "bool",
				InternalType: "bool",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x08, 0xd6, 0x12, 0x2d}: &Abi{
		Name:            "setTargetFunctionRole",
		ABI:             "function setTargetFunctionRole(address target, bytes4[] selectors, uint64 roleId)",
		Compact:         "setTargetFunctionRole(address,bytes4[],uint64)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "selectors",
				Type:         "bytes4[]",
				InternalType: "bytes4[]",
			},
			&AbiIO{
				Name:         "roleId",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x79, 0x05, 0x18, 0x87}: &Abi{
		Name:            "setVotingDelay",
		ABI:             "function setVotingDelay(uint48 newVotingDelay)",
		Compact:         "setVotingDelay(uint48)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "newVotingDelay",
				Type:         "uint48",
				InternalType: "uint48",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xe5, 0x40, 0xd0, 0x1d}: &Abi{
		Name:            "setVotingPeriod",
		ABI:             "function setVotingPeriod(uint32 newVotingPeriod)",
		Compact:         "setVotingPeriod(uint32)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "newVotingPeriod",
				Type:         "uint32",
				InternalType: "uint32",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xbe, 0x9a, 0x65, 0x55}: &Abi{
		Name:            "start",
		ABI:             "function start() returns (uint256)",
		Compact:         "start()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x3e, 0x4f, 0x49, 0xe6}: &Abi{
		Name:            "state",
		ABI:             "function state(uint256 proposalId) returns (enum IGovernor.ProposalState)",
		Compact:         "state(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint8",
				InternalType: "enum IGovernor.ProposalState",
			},
		},
	},
	MethodPrefix{0x01, 0xff, 0xc9, 0xa7}: &Abi{
		Name:            "supportsInterface",
		ABI:             "function supportsInterface(bytes4 interfaceId) returns (bool)",
		Compact:         "supportsInterface(bytes4)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "interfaceId",
				Type:         "bytes4",
				InternalType: "bytes4",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x95, 0xd8, 0x9b, 0x41}: &Abi{
		Name:            "symbol",
		ABI:             "function symbol() returns (string)",
		Compact:         "symbol()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "string",
				InternalType: "string",
			},
		},
	},
	MethodPrefix{0xd3, 0x32, 0x19, 0xb4}: &Abi{
		Name:            "timelock",
		ABI:             "function timelock() returns (address)",
		Compact:         "timelock()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xfc, 0x0c, 0x54, 0x6a}: &Abi{
		Name:            "token",
		ABI:             "function token() returns (contract IERC5805)",
		Compact:         "token()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "contract IERC5805",
			},
		},
	},
	MethodPrefix{0x4f, 0x6c, 0xcc, 0xe7}: &Abi{
		Name:            "tokenByIndex",
		ABI:             "function tokenByIndex(uint256 index) returns (uint256)",
		Compact:         "tokenByIndex(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "index",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x2f, 0x74, 0x5c, 0x59}: &Abi{
		Name:            "tokenOfOwnerByIndex",
		ABI:             "function tokenOfOwnerByIndex(address owner, uint256 index) returns (uint256)",
		Compact:         "tokenOfOwnerByIndex(address,uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "index",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xc8, 0x7b, 0x56, 0xdd}: &Abi{
		Name:            "tokenURI",
		ABI:             "function tokenURI(uint256 tokenId) returns (string)",
		Compact:         "tokenURI(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "tokenId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "string",
				InternalType: "string",
			},
		},
	},
	MethodPrefix{0x00, 0x23, 0xde, 0x29}: &Abi{
		Name:            "tokensReceived",
		ABI:             "function tokensReceived(address operator, address from, address to, uint256 amount, bytes userData, bytes operatorData)",
		Compact:         "tokensReceived(address,address,address,uint256,bytes,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "from",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "to",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "userData",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "operatorData",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x75, 0xab, 0x97, 0x82}: &Abi{
		Name:            "tokensToSend",
		ABI:             "function tokensToSend(address operator, address from, address to, uint256 amount, bytes userData, bytes operatorData)",
		Compact:         "tokensToSend(address,address,address,uint256,bytes,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "from",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "to",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "userData",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "operatorData",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x01, 0xe1, 0xd1, 0x14}: &Abi{
		Name:            "totalAssets",
		ABI:             "function totalAssets() returns (uint256 totalManagedAssets)",
		Compact:         "totalAssets()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "totalManagedAssets",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x18, 0x16, 0x0d, 0xdd}: &Abi{
		Name:            "totalSupply",
		ABI:             "function totalSupply() returns (uint256)",
		Compact:         "totalSupply()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xbd, 0x85, 0xb0, 0x39}: &Abi{
		Name:            "totalSupply",
		ABI:             "function totalSupply(uint256 id) returns (uint256)",
		Compact:         "totalSupply(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "id",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xa9, 0x05, 0x9c, 0xbb}: &Abi{
		Name:            "transfer",
		ABI:             "function transfer(address to, uint256 value) returns (bool)",
		Compact:         "transfer(address,uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "to",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x12, 0x96, 0xee, 0x62}: &Abi{
		Name:            "transferAndCall",
		ABI:             "function transferAndCall(address to, uint256 amount) returns (bool)",
		Compact:         "transferAndCall(address,uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "to",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x40, 0x00, 0xae, 0xa0}: &Abi{
		Name:            "transferAndCall",
		ABI:             "function transferAndCall(address to, uint256 amount, bytes data) returns (bool)",
		Compact:         "transferAndCall(address,uint256,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "to",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x23, 0xb8, 0x72, 0xdd}: &Abi{
		Name:            "transferFrom",
		ABI:             "function transferFrom(address from, address to, uint256 value) returns (bool)",
		Compact:         "transferFrom(address,address,uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "from",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "to",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0xd8, 0xfb, 0xe9, 0x94}: &Abi{
		Name:            "transferFromAndCall",
		ABI:             "function transferFromAndCall(address from, address to, uint256 amount) returns (bool)",
		Compact:         "transferFromAndCall(address,address,uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "from",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "to",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0xc1, 0xd3, 0x4b, 0x89}: &Abi{
		Name:            "transferFromAndCall",
		ABI:             "function transferFromAndCall(address from, address to, uint256 amount, bytes data) returns (bool)",
		Compact:         "transferFromAndCall(address,address,uint256,bytes)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "from",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "to",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0xf2, 0xfd, 0xe3, 0x8b}: &Abi{
		Name:            "transferOwnership",
		ABI:             "function transferOwnership(address newOwner)",
		Compact:         "transferOwnership(address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "newOwner",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x7d, 0xa0, 0xa8, 0x77}: &Abi{
		Name:            "trustedForwarder",
		ABI:             "function trustedForwarder() returns (address)",
		Compact:         "trustedForwarder()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0x6f, 0x30, 0x7d, 0xc3}: &Abi{
		Name:            "underlying",
		ABI:             "function underlying() returns (contract IERC20)",
		Compact:         "underlying()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "contract IERC20",
			},
		},
	},
	MethodPrefix{0x18, 0xff, 0x18, 0x3c}: &Abi{
		Name:            "updateAuthority",
		ABI:             "function updateAuthority(address target, address newAuthority)",
		Compact:         "updateAuthority(address,address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "target",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "newAuthority",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x64, 0xd6, 0x23, 0x53}: &Abi{
		Name:            "updateDelay",
		ABI:             "function updateDelay(uint256 newDelay)",
		Compact:         "updateDelay(uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "newDelay",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xa4, 0x1e, 0x7d, 0x51}: &Abi{
		Name:            "updateERC165Cache",
		ABI:             "function updateERC165Cache(address account, bytes4 interfaceId)",
		Compact:         "updateERC165Cache(address,bytes4)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "interfaceId",
				Type:         "bytes4",
				InternalType: "bytes4",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x06, 0xf3, 0xf9, 0xe6}: &Abi{
		Name:            "updateQuorumNumerator",
		ABI:             "function updateQuorumNumerator(uint256 newQuorumNumerator)",
		Compact:         "updateQuorumNumerator(uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "newQuorumNumerator",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xa8, 0x90, 0xc9, 0x10}: &Abi{
		Name:            "updateTimelock",
		ABI:             "function updateTimelock(contract ICompoundTimelock newTimelock)",
		Compact:         "updateTimelock(address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "newTimelock",
				Type:         "address",
				InternalType: "contract ICompoundTimelock",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x96, 0x23, 0x60, 0x9d}: &Abi{
		Name:            "upgradeAndCall",
		ABI:             "function upgradeAndCall(contract ITransparentUpgradeableProxy proxy, address implementation, bytes data)",
		Compact:         "upgradeAndCall(address,address,bytes)",
		StateMutability: "payable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proxy",
				Type:         "address",
				InternalType: "contract ITransparentUpgradeableProxy",
			},
			&AbiIO{
				Name:         "implementation",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x36, 0x59, 0xcf, 0xe6}: &Abi{
		Name:            "upgradeTo",
		ABI:             "function upgradeTo(address newImplementation)",
		Compact:         "upgradeTo(address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "newImplementation",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x4f, 0x1e, 0xf2, 0x86}: &Abi{
		Name:            "upgradeToAndCall",
		ABI:             "function upgradeToAndCall(address, bytes)",
		Compact:         "upgradeToAndCall(address,bytes)",
		StateMutability: "payable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x0e, 0x89, 0x34, 0x1c}: &Abi{
		Name:            "uri",
		ABI:             "function uri(uint256) returns (string)",
		Compact:         "uri(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "string",
				InternalType: "string",
			},
		},
	},
	MethodPrefix{0x19, 0xd8, 0xd3, 0x8c}: &Abi{
		Name:            "verify",
		ABI:             "function verify(struct ERC2771Forwarder.ForwardRequestData request) returns (bool)",
		Compact:         "verify((address,address,uint256,uint256,uint48,bytes,bytes))",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "request",
				Type:         "tuple",
				InternalType: "struct ERC2771Forwarder.ForwardRequestData",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x54, 0xfd, 0x4d, 0x50}: &Abi{
		Name:            "version",
		ABI:             "function version() returns (string)",
		Compact:         "version()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "string",
				InternalType: "string",
			},
		},
	},
	MethodPrefix{0x81, 0x0e, 0xc2, 0x3b}: &Abi{
		Name:            "vestedAmount",
		ABI:             "function vestedAmount(address token, uint64 timestamp) returns (uint256)",
		Compact:         "vestedAmount(address,uint64)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "token",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "timestamp",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x0a, 0x17, 0xb0, 0x6b}: &Abi{
		Name:            "vestedAmount",
		ABI:             "function vestedAmount(uint64 timestamp) returns (uint256)",
		Compact:         "vestedAmount(uint64)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "timestamp",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x39, 0x32, 0xab, 0xb1}: &Abi{
		Name:            "votingDelay",
		ABI:             "function votingDelay() returns (uint256)",
		Compact:         "votingDelay()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x02, 0xa2, 0x51, 0xa3}: &Abi{
		Name:            "votingPeriod",
		ABI:             "function votingPeriod() returns (uint256)",
		Compact:         "votingPeriod()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xb4, 0x60, 0xaf, 0x94}: &Abi{
		Name:            "withdraw",
		ABI:             "function withdraw(uint256 assets, address receiver, address owner) returns (uint256 shares)",
		Compact:         "withdraw(uint256,address,address)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "assets",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "receiver",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "owner",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "shares",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x20, 0x5c, 0x28, 0x78}: &Abi{
		Name:            "withdrawTo",
		ABI:             "function withdrawTo(address account, uint256 value) returns (bool)",
		Compact:         "withdrawTo(address,uint256)",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "value",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x7c, 0x1b, 0x12, 0x6c}: &Abi{
		Name:            "withdrawTo",
		ABI:             "function withdrawTo(address account, uint256[] tokenIds) returns (bool)",
		Compact:         "withdrawTo(address,uint256[])",
		StateMutability: "nonpayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "tokenIds",
				Type:         "uint256[]",
				InternalType: "uint256[]",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
}
