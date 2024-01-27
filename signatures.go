package evmabiless

// Do not edit, automatically generated file.

var signatures = map[MethodPrefix]*Abi{
	MethodPrefix{0x8c, 0x5b, 0xe1, 0xe5}: &Abi{
		Name:            "Approval",
		ABI:             "event Approval(address indexed owner, address indexed spender, uint256 value)",
		Compact:         "Approval(address,address,uint256)",
		StateMutability: "nonPayable",
		Type:            "event",
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
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x17, 0x30, 0x7e, 0xab}: &Abi{
		Name:            "ApprovalForAll",
		ABI:             "event ApprovalForAll(address indexed owner, address indexed operator, bool approved)",
		Compact:         "ApprovalForAll(address,address,bool)",
		StateMutability: "nonPayable",
		Type:            "event",
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
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x4b, 0xf5, 0xd7, 0xe9}: &Abi{
		Name:            "CLOCK_MODE",
		ABI:             "function CLOCK_MODE() public view virtual override returns (string memory)",
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
		ABI:             "function COUNTING_MODE() public view virtual returns (string memory)",
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
	MethodPrefix{0x36, 0x44, 0xe5, 0x15}: &Abi{
		Name:            "DOMAIN_SEPARATOR",
		ABI:             "function DOMAIN_SEPARATOR() external view returns (bytes32)",
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
	MethodPrefix{0x63, 0x39, 0xf1, 0x5c}: &Abi{
		Name:            "ERC20PaymentReleased",
		ABI:             "event ERC20PaymentReleased(IERC20 indexed token, address to, uint256 amount)",
		Compact:         "ERC20PaymentReleased(IERC20,address,uint256)",
		StateMutability: "nonPayable",
		Type:            "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "token",
				Type:         "IERC20",
				InternalType: "IERC20",
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
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xc0, 0xe5, 0x23, 0x49}: &Abi{
		Name:            "ERC20Released",
		ABI:             "event ERC20Released(address indexed token, uint256 amount)",
		Compact:         "ERC20Released(address,uint256)",
		StateMutability: "nonPayable",
		Type:            "event",
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
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xda, 0x9d, 0x4e, 0x5f}: &Abi{
		Name:            "EtherReleased",
		ABI:             "event EtherReleased(uint256 amount)",
		Compact:         "EtherReleased(uint256)",
		StateMutability: "nonPayable",
		Type:            "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x8b, 0xe0, 0x07, 0x9c}: &Abi{
		Name:            "OwnershipTransferred",
		ABI:             "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
		Compact:         "OwnershipTransferred(address,address)",
		StateMutability: "nonPayable",
		Type:            "event",
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
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x62, 0xe7, 0x8c, 0xea}: &Abi{
		Name:            "Paused",
		ABI:             "event Paused(address account)",
		Compact:         "Paused(address)",
		StateMutability: "nonPayable",
		Type:            "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x40, 0xc3, 0x40, 0xf6}: &Abi{
		Name:            "PayeeAdded",
		ABI:             "event PayeeAdded(address account, uint256 shares)",
		Compact:         "PayeeAdded(address,uint256)",
		StateMutability: "nonPayable",
		Type:            "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "shares",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x6e, 0xf9, 0x5f, 0x06}: &Abi{
		Name:            "PaymentReceived",
		ABI:             "event PaymentReceived(address from, uint256 amount)",
		Compact:         "PaymentReceived(address,uint256)",
		StateMutability: "nonPayable",
		Type:            "event",
		Inputs: []*AbiIO{
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
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xdf, 0x20, 0xfd, 0x1e}: &Abi{
		Name:            "PaymentReleased",
		ABI:             "event PaymentReleased(address to, uint256 amount)",
		Compact:         "PaymentReleased(address,uint256)",
		StateMutability: "nonPayable",
		Type:            "event",
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
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x78, 0x9c, 0xf5, 0x5b}: &Abi{
		Name:            "ProposalCanceled",
		ABI:             "event ProposalCanceled(uint256 proposalId)",
		Compact:         "ProposalCanceled(uint256)",
		StateMutability: "nonPayable",
		Type:            "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x7d, 0x84, 0xa6, 0x26}: &Abi{
		Name:            "ProposalCreated",
		ABI:             "event ProposalCreated(uint256 proposalId, address proposer, address[] targets, uint256[] values, string[] signatures, bytes[] calldatas, uint256 voteStart, uint256 voteEnd, string description)",
		Compact:         "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)",
		StateMutability: "nonPayable",
		Type:            "event",
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
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x71, 0x2a, 0xe1, 0x38}: &Abi{
		Name:            "ProposalExecuted",
		ABI:             "event ProposalExecuted(uint256 proposalId)",
		Compact:         "ProposalExecuted(uint256)",
		StateMutability: "nonPayable",
		Type:            "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "proposalId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xbd, 0x79, 0xb8, 0x6f}: &Abi{
		Name:            "RoleAdminChanged",
		ABI:             "event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)",
		Compact:         "RoleAdminChanged(bytes32,bytes32,bytes32)",
		StateMutability: "nonPayable",
		Type:            "event",
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
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x2f, 0x87, 0x88, 0x11}: &Abi{
		Name:            "RoleGranted",
		ABI:             "event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)",
		Compact:         "RoleGranted(bytes32,address,address)",
		StateMutability: "nonPayable",
		Type:            "event",
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
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xf6, 0x39, 0x1f, 0x5c}: &Abi{
		Name:            "RoleRevoked",
		ABI:             "event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)",
		Compact:         "RoleRevoked(bytes32,address,address)",
		StateMutability: "nonPayable",
		Type:            "event",
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
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xdd, 0xf2, 0x52, 0xad}: &Abi{
		Name:            "Transfer",
		ABI:             "event Transfer(address indexed from, address indexed to, uint256 value)",
		Compact:         "Transfer(address,address,uint256)",
		StateMutability: "nonPayable",
		Type:            "event",
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
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x4a, 0x39, 0xdc, 0x06}: &Abi{
		Name:            "TransferBatch",
		ABI:             "event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values)",
		Compact:         "TransferBatch(address,address,address,uint256[],uint256[])",
		StateMutability: "nonPayable",
		Type:            "event",
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
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xc3, 0xd5, 0x81, 0x68}: &Abi{
		Name:            "TransferSingle",
		ABI:             "event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)",
		Compact:         "TransferSingle(address,address,address,uint256,uint256)",
		StateMutability: "nonPayable",
		Type:            "event",
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
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x6b, 0xb7, 0xff, 0x70}: &Abi{
		Name:            "URI",
		ABI:             "event URI(string value, uint256 indexed id)",
		Compact:         "URI(string,uint256)",
		StateMutability: "nonPayable",
		Type:            "event",
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
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x5d, 0xb9, 0xee, 0x0a}: &Abi{
		Name:            "Unpaused",
		ABI:             "event Unpaused(address account)",
		Compact:         "Unpaused(address)",
		StateMutability: "nonPayable",
		Type:            "event",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xb8, 0xe1, 0x38, 0x88}: &Abi{
		Name:            "VoteCast",
		ABI:             "event VoteCast(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason)",
		Compact:         "VoteCast(address,uint256,uint8,uint256,string)",
		StateMutability: "nonPayable",
		Type:            "event",
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
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xe2, 0xba, 0xbf, 0xba}: &Abi{
		Name:            "VoteCastWithParams",
		ABI:             "event VoteCastWithParams(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason, bytes params)",
		Compact:         "VoteCastWithParams(address,uint256,uint8,uint256,string,bytes)",
		StateMutability: "nonPayable",
		Type:            "event",
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
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x80, 0x2a, 0xab, 0xe8}: &Abi{
		Name:            "_totalRelayers",
		ABI:             "function _totalRelayers() public view returns (uint)",
		Compact:         "_totalRelayers()",
		StateMutability: "view",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint",
				InternalType: "uint",
			},
		},
	},
	MethodPrefix{0xcd, 0xb0, 0xf7, 0x3a}: &Abi{
		Name:            "adminAddRelayer",
		ABI:             "function adminAddRelayer(address relayerAddress) external",
		Compact:         "adminAddRelayer(address)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "relayerAddress",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x8b, 0x63, 0xae, 0xbf}: &Abi{
		Name:            "adminChangeFeeHandler",
		ABI:             "function adminChangeFeeHandler(address newFeeHandler) external",
		Compact:         "adminChangeFeeHandler(address)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "newFeeHandler",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x4e, 0x05, 0x60, 0x05}: &Abi{
		Name:            "adminChangeRelayerThreshold",
		ABI:             "function adminChangeRelayerThreshold(uint256 newThreshold) external",
		Compact:         "adminChangeRelayerThreshold(uint256)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "newThreshold",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x80, 0xae, 0x1c, 0x28}: &Abi{
		Name:            "adminPauseTransfers",
		ABI:             "function adminPauseTransfers() external",
		Compact:         "adminPauseTransfers()",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs:         []*AbiIO{},
	},
	MethodPrefix{0x9d, 0x82, 0xdd, 0x63}: &Abi{
		Name:            "adminRemoveRelayer",
		ABI:             "function adminRemoveRelayer(address relayerAddress) external",
		Compact:         "adminRemoveRelayer(address)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "relayerAddress",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x8c, 0x0c, 0x26, 0x31}: &Abi{
		Name:            "adminSetBurnable",
		ABI:             "function adminSetBurnable(address handlerAddress, address tokenAddress) external",
		Compact:         "adminSetBurnable(address,address)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "handlerAddress",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "tokenAddress",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xed, 0xc2, 0x0c, 0x3c}: &Abi{
		Name:            "adminSetDepositNonce",
		ABI:             "function adminSetDepositNonce(uint8 domainID, uint64 nonce) external",
		Compact:         "adminSetDepositNonce(uint8,uint64)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "domainID",
				Type:         "uint8",
				InternalType: "uint8",
			},
			&AbiIO{
				Name:         "nonce",
				Type:         "uint64",
				InternalType: "uint64",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xd1, 0x5e, 0xf6, 0x4e}: &Abi{
		Name:            "adminSetForwarder",
		ABI:             "function adminSetForwarder(address forwarder, bool valid) external",
		Compact:         "adminSetForwarder(address,bool)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "forwarder",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "valid",
				Type:         "bool",
				InternalType: "bool",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x5a, 0x1a, 0xd8, 0x7c}: &Abi{
		Name:            "adminSetGenericResource",
		ABI:             "function adminSetGenericResource(address handlerAddress, bytes32 resourceID, address contractAddress, bytes4 depositFunctionSig, uint256 depositFunctionDepositerOffset, bytes4 executeFunctionSig) external",
		Compact:         "adminSetGenericResource(address,bytes32,address,bytes4,uint256,bytes4)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "handlerAddress",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "resourceID",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "contractAddress",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "depositFunctionSig",
				Type:         "bytes4",
				InternalType: "bytes4",
			},
			&AbiIO{
				Name:         "depositFunctionDepositerOffset",
				Type:         "uint256",
				InternalType: "uint256",
			},
			&AbiIO{
				Name:         "executeFunctionSig",
				Type:         "bytes4",
				InternalType: "bytes4",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xcb, 0x10, 0xf2, 0x15}: &Abi{
		Name:            "adminSetResource",
		ABI:             "function adminSetResource(address handlerAddress, bytes32 resourceID, address tokenAddress) external",
		Compact:         "adminSetResource(address,bytes32,address)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "handlerAddress",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "resourceID",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "tokenAddress",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xff, 0xaa, 0xc0, 0xeb}: &Abi{
		Name:            "adminUnpauseTransfers",
		ABI:             "function adminUnpauseTransfers() external",
		Compact:         "adminUnpauseTransfers()",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs:         []*AbiIO{},
	},
	MethodPrefix{0xbd, 0x2a, 0x18, 0x20}: &Abi{
		Name:            "adminWithdraw",
		ABI:             "function adminWithdraw(address handlerAddress, bytes memory data) external",
		Compact:         "adminWithdraw(address,bytes)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "handlerAddress",
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
	MethodPrefix{0xdd, 0x62, 0xed, 0x3e}: &Abi{
		Name:            "allowance",
		ABI:             "function allowance(address owner, address spender) external view returns (uint256)",
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
		ABI:             "function approve(address spender, uint256 amount) external returns (bool)",
		Compact:         "approve(address,uint256)",
		StateMutability: "nonPayable",
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
	MethodPrefix{0x70, 0xa0, 0x82, 0x31}: &Abi{
		Name:            "balanceOf",
		ABI:             "function balanceOf(address account) external view returns (uint256)",
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
		ABI:             "function balanceOf(address account, uint256 id) external view returns (uint256)",
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
		ABI:             "function balanceOfBatch(address[] calldata accounts, uint256[] calldata ids) external view returns (uint256[] memory)",
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
	MethodPrefix{0x38, 0xaf, 0x3e, 0xed}: &Abi{
		Name:            "beneficiary",
		ABI:             "function beneficiary() public view virtual returns (address)",
		Compact:         "beneficiary()",
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
	MethodPrefix{0x42, 0x96, 0x6c, 0x68}: &Abi{
		Name:            "burn",
		ABI:             "function burn(uint256 amount) external",
		Compact:         "burn(uint256)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "amount",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x79, 0xcc, 0x67, 0x90}: &Abi{
		Name:            "burnFrom",
		ABI:             "function burnFrom(address account, uint256 amount) external",
		Compact:         "burnFrom(address,uint256)",
		StateMutability: "nonPayable",
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
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x45, 0x21, 0x15, 0xd6}: &Abi{
		Name:            "cancel",
		ABI:             "function cancel(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) public virtual override returns (uint256)",
		Compact:         "cancel(address[],uint256[],bytes[],bytes32)",
		StateMutability: "nonPayable",
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
	MethodPrefix{0x17, 0xf0, 0x3c, 0xe5}: &Abi{
		Name:            "cancelProposal",
		ABI:             "function cancelProposal(uint8 domainID, uint64 depositNonce, bytes32 dataHash) public",
		Compact:         "cancelProposal(uint8,uint64,bytes32)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "domainID",
				Type:         "uint8",
				InternalType: "uint8",
			},
			&AbiIO{
				Name:         "depositNonce",
				Type:         "uint64",
				InternalType: "uint64",
			},
			&AbiIO{
				Name:         "dataHash",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x56, 0x78, 0x13, 0x88}: &Abi{
		Name:            "castVote",
		ABI:             "function castVote(uint256 proposalId, uint8 support) public virtual override returns (uint256)",
		Compact:         "castVote(uint256,uint8)",
		StateMutability: "nonPayable",
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
	MethodPrefix{0x3b, 0xcc, 0xf4, 0xfd}: &Abi{
		Name:            "castVoteBySig",
		ABI:             "function castVoteBySig(uint256 proposalId, uint8 support, uint8 v, bytes32 r, bytes32 s) public virtual override returns (uint256)",
		Compact:         "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)",
		StateMutability: "nonPayable",
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
		ABI:             "function castVoteWithReason(uint256 proposalId, uint8 support, string calldata reason) public virtual override returns (uint256)",
		Compact:         "castVoteWithReason(uint256,uint8,string)",
		StateMutability: "nonPayable",
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
		ABI:             "function castVoteWithReasonAndParams(uint256 proposalId, uint8 support, string calldata reason, bytes memory params) public virtual override returns (uint256)",
		Compact:         "castVoteWithReasonAndParams(uint256,uint8,string,bytes)",
		StateMutability: "nonPayable",
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
	MethodPrefix{0x03, 0x42, 0x01, 0x81}: &Abi{
		Name:            "castVoteWithReasonAndParamsBySig",
		ABI:             "function castVoteWithReasonAndParamsBySig(uint256 proposalId, uint8 support, string calldata reason, bytes memory params, uint8 v, bytes32 r, bytes32 s) public virtual override returns (uint256)",
		Compact:         "castVoteWithReasonAndParamsBySig(uint256,uint8,string,bytes,uint8,bytes32,bytes32)",
		StateMutability: "nonPayable",
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
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x91, 0xdd, 0xad, 0xf4}: &Abi{
		Name:            "clock",
		ABI:             "function clock() public view virtual override returns (uint48)",
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
	MethodPrefix{0x31, 0x3c, 0xe5, 0x67}: &Abi{
		Name:            "decimals",
		ABI:             "function decimals() external view returns (uint8)",
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
	MethodPrefix{0x5c, 0x19, 0xa9, 0x5c}: &Abi{
		Name:            "delegate",
		ABI:             "function delegate(address delegatee) public override",
		Compact:         "delegate(address)",
		StateMutability: "nonPayable",
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
		ABI:             "function delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s) public override",
		Compact:         "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)",
		StateMutability: "nonPayable",
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
		ABI:             "function delegates(address account) public view override returns (address)",
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
	MethodPrefix{0xb0, 0x7e, 0x54, 0xbb}: &Abi{
		Name:            "deposit",
		ABI:             "function deposit(bytes32 resourceID, address depositer, bytes calldata data) external override returns (bytes memory)",
		Compact:         "deposit(bytes32,address,bytes)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "resourceID",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "depositer",
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
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
	},
	MethodPrefix{0x05, 0xe2, 0xca, 0x17}: &Abi{
		Name:            "deposit",
		ABI:             "function deposit(uint8 destinationChainID, bytes32 resourceID, bytes calldata data) external payable",
		Compact:         "deposit(uint8,bytes32,bytes)",
		StateMutability: "payable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "destinationChainID",
				Type:         "uint8",
				InternalType: "uint8",
			},
			&AbiIO{
				Name:         "resourceID",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x73, 0xc4, 0x5c, 0x98}: &Abi{
		Name:            "deposit",
		ABI:             "function deposit(uint8 destinationDomainID, bytes32 resourceID, bytes calldata depositData, bytes calldata feeData) external payable",
		Compact:         "deposit(uint8,bytes32,bytes,bytes)",
		StateMutability: "payable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "destinationDomainID",
				Type:         "uint8",
				InternalType: "uint8",
			},
			&AbiIO{
				Name:         "resourceID",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "depositData",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "feeData",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x0f, 0xb5, 0xa6, 0xb4}: &Abi{
		Name:            "duration",
		ABI:             "function duration() public view virtual returns (uint256)",
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
	MethodPrefix{0x2d, 0x49, 0x2c, 0xe2}: &Abi{
		Name:            "execute",
		ABI:             "function execute(ForwardRequest calldata req, bytes calldata signature) public payable returns (bool, bytes memory)",
		Compact:         "execute(ForwardRequest,bytes)",
		StateMutability: "payable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "req",
				Type:         "ForwardRequest",
				InternalType: "ForwardRequest",
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
				Type:         "bool",
				InternalType: "bool",
			},
			&AbiIO{
				Name:         "",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
	},
	MethodPrefix{0x26, 0x56, 0x22, 0x7d}: &Abi{
		Name:            "execute",
		ABI:             "function execute(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) public payable virtual override returns (uint256)",
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
	MethodPrefix{0xe2, 0x48, 0xcf, 0xf2}: &Abi{
		Name:            "executeProposal",
		ABI:             "function executeProposal(bytes32 resourceID, bytes calldata data) external override",
		Compact:         "executeProposal(bytes32,bytes)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "resourceID",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x20, 0x6a, 0x98, 0xfd}: &Abi{
		Name:            "executeProposal",
		ABI:             "function executeProposal(uint8 domainID, uint64 depositNonce, bytes calldata data, bytes32 resourceID, bool revertOnFail) public",
		Compact:         "executeProposal(uint8,uint64,bytes,bytes32,bool)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "domainID",
				Type:         "uint8",
				InternalType: "uint8",
			},
			&AbiIO{
				Name:         "depositNonce",
				Type:         "uint64",
				InternalType: "uint64",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
			&AbiIO{
				Name:         "resourceID",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "revertOnFail",
				Type:         "bool",
				InternalType: "bool",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x08, 0x18, 0x12, 0xfc}: &Abi{
		Name:            "getApproved",
		ABI:             "function getApproved(uint256 tokenId) external view returns (address operator)",
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
	MethodPrefix{0x2d, 0x03, 0x35, 0xab}: &Abi{
		Name:            "getNonce",
		ABI:             "function getNonce(address from) public view returns (uint256)",
		Compact:         "getNonce(address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "from",
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
	MethodPrefix{0x8e, 0x53, 0x9e, 0x8c}: &Abi{
		Name:            "getPastTotalSupply",
		ABI:             "function getPastTotalSupply(uint256 blockNumber) public view override returns (uint256)",
		Compact:         "getPastTotalSupply(uint256)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "blockNumber",
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
		ABI:             "function getPastVotes(address account, uint256 blockNumber) public view override returns (uint256)",
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
				Name:         "blockNumber",
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
	MethodPrefix{0xa9, 0xcf, 0x69, 0xfa}: &Abi{
		Name:            "getProposal",
		ABI:             "function getProposal(uint8 originDomainID, uint64 depositNonce, bytes32 dataHash) external view returns (Proposal memory)",
		Compact:         "getProposal(uint8,uint64,bytes32)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "originDomainID",
				Type:         "uint8",
				InternalType: "uint8",
			},
			&AbiIO{
				Name:         "depositNonce",
				Type:         "uint64",
				InternalType: "uint64",
			},
			&AbiIO{
				Name:         "dataHash",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "Proposal",
				InternalType: "Proposal",
			},
		},
	},
	MethodPrefix{0x24, 0x8a, 0x9c, 0xa3}: &Abi{
		Name:            "getRoleAdmin",
		ABI:             "function getRoleAdmin(bytes32 role) external view returns (bytes32)",
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
	MethodPrefix{0x9a, 0xb2, 0x4e, 0xb0}: &Abi{
		Name:            "getVotes",
		ABI:             "function getVotes(address account) public view override returns (uint256)",
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
		ABI:             "function getVotes(address account, uint256 timepoint) public view virtual override returns (uint256)",
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
		ABI:             "function getVotesWithParams(address account, uint256 timepoint, bytes memory params) public view virtual override returns (uint256)",
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
		ABI:             "function grantRole(bytes32 role, address account) external",
		Compact:         "grantRole(bytes32,address)",
		StateMutability: "nonPayable",
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
	MethodPrefix{0x91, 0xd1, 0x48, 0x54}: &Abi{
		Name:            "hasRole",
		ABI:             "function hasRole(bytes32 role, address account) external view returns (bool)",
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
	MethodPrefix{0x43, 0x85, 0x96, 0x32}: &Abi{
		Name:            "hasVoted",
		ABI:             "function hasVoted(uint256 proposalId, address account) public view virtual returns (bool)",
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
	MethodPrefix{0xc5, 0x90, 0x57, 0xe4}: &Abi{
		Name:            "hashProposal",
		ABI:             "function hashProposal(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) public pure returns (uint256)",
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
	MethodPrefix{0xe9, 0x85, 0xe9, 0xc5}: &Abi{
		Name:            "isApprovedForAll",
		ABI:             "function isApprovedForAll(address owner, address operator) external view returns (bool)",
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
	MethodPrefix{0x54, 0x1d, 0x55, 0x48}: &Abi{
		Name:            "isRelayer",
		ABI:             "function isRelayer(address relayer) external view returns (bool)",
		Compact:         "isRelayer(address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "relayer",
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
		ABI:             "function isTrustedForwarder(address forwarder) public view virtual returns (bool)",
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
	MethodPrefix{0x40, 0xc1, 0x0f, 0x19}: &Abi{
		Name:            "mint",
		ABI:             "function mint(address to, uint256 tokenId) public",
		Compact:         "mint(address,uint256)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
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
	MethodPrefix{0x06, 0xfd, 0xde, 0x03}: &Abi{
		Name:            "name",
		ABI:             "function name() external view returns (string memory)",
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
		ABI:             "function nonces(address owner) public view returns (uint256)",
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
	MethodPrefix{0x8d, 0xa5, 0xcb, 0x5b}: &Abi{
		Name:            "owner",
		ABI:             "function owner() public view returns (address)",
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
		ABI:             "function ownerOf(uint256 tokenId) external view returns (address owner)",
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
		ABI:             "function paused() public view virtual returns (bool)",
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
	MethodPrefix{0x8b, 0x83, 0x20, 0x9b}: &Abi{
		Name:            "payee",
		ABI:             "function payee(uint256 index) public view returns (address)",
		Compact:         "payee(uint256)",
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
				Type:         "address",
				InternalType: "address",
			},
		},
	},
	MethodPrefix{0xe2, 0x98, 0x2c, 0x21}: &Abi{
		Name:            "payments",
		ABI:             "function payments(address dest) public view returns (uint256)",
		Compact:         "payments(address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "dest",
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
	MethodPrefix{0xc0, 0x1f, 0x9e, 0x37}: &Abi{
		Name:            "proposalDeadline",
		ABI:             "function proposalDeadline(uint256 proposalId) public view virtual override returns (uint256)",
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
	MethodPrefix{0x14, 0x34, 0x89, 0xd0}: &Abi{
		Name:            "proposalProposer",
		ABI:             "function proposalProposer(uint256 proposalId) public view virtual override returns (address)",
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
		ABI:             "function proposalSnapshot(uint256 proposalId) public view virtual override returns (uint256)",
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
		ABI:             "function proposalThreshold() public view virtual returns (uint256)",
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
	MethodPrefix{0x7d, 0x5e, 0x81, 0xe2}: &Abi{
		Name:            "propose",
		ABI:             "function propose(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, string memory description) public virtual override returns (uint256)",
		Compact:         "propose(address[],uint256[],bytes[],string)",
		StateMutability: "nonPayable",
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
	MethodPrefix{0xf8, 0xce, 0x56, 0x0a}: &Abi{
		Name:            "quorum",
		ABI:             "function quorum(uint256 timepoint) public view virtual returns (uint256)",
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
	MethodPrefix{0xfb, 0xcc, 0xed, 0xae}: &Abi{
		Name:            "releasable",
		ABI:             "function releasable() public view virtual returns (uint256)",
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
	MethodPrefix{0xa1, 0x1d, 0x2b, 0xd2}: &Abi{
		Name:            "releasable",
		ABI:             "function releasable(IERC20 token, address account) public view returns (uint256)",
		Compact:         "releasable(IERC20,address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "token",
				Type:         "IERC20",
				InternalType: "IERC20",
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
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0xa3, 0xf8, 0xea, 0xce}: &Abi{
		Name:            "releasable",
		ABI:             "function releasable(address account) public view returns (uint256)",
		Compact:         "releasable(address)",
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
	MethodPrefix{0x86, 0xd1, 0xa6, 0x9f}: &Abi{
		Name:            "release",
		ABI:             "function release() public virtual",
		Compact:         "release()",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs:         []*AbiIO{},
	},
	MethodPrefix{0x3c, 0xef, 0xee, 0x6b}: &Abi{
		Name:            "release",
		ABI:             "function release(IERC20 token, address account) public virtual",
		Compact:         "release(IERC20,address)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "token",
				Type:         "IERC20",
				InternalType: "IERC20",
			},
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x19, 0x16, 0x55, 0x87}: &Abi{
		Name:            "release",
		ABI:             "function release(address payable account) public virtual",
		Compact:         "release(address)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "account",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x96, 0x13, 0x25, 0x21}: &Abi{
		Name:            "released",
		ABI:             "function released() public view virtual returns (uint256)",
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
	MethodPrefix{0xf7, 0xe6, 0xc7, 0x4a}: &Abi{
		Name:            "released",
		ABI:             "function released(IERC20 token, address account) public view returns (uint256)",
		Compact:         "released(IERC20,address)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "token",
				Type:         "IERC20",
				InternalType: "IERC20",
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
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x98, 0x52, 0x59, 0x5c}: &Abi{
		Name:            "released",
		ABI:             "function released(address account) public view returns (uint256)",
		Compact:         "released(address)",
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
	MethodPrefix{0x5e, 0x1f, 0xab, 0x0f}: &Abi{
		Name:            "renounceAdmin",
		ABI:             "function renounceAdmin(address newAdmin) external",
		Compact:         "renounceAdmin(address)",
		StateMutability: "nonPayable",
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
	MethodPrefix{0x71, 0x50, 0x18, 0xa6}: &Abi{
		Name:            "renounceOwnership",
		ABI:             "function renounceOwnership() public",
		Compact:         "renounceOwnership()",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs:          []*AbiIO{},
		Outputs:         []*AbiIO{},
	},
	MethodPrefix{0x36, 0x56, 0x8a, 0xbe}: &Abi{
		Name:            "renounceRole",
		ABI:             "function renounceRole(bytes32 role, address account) external",
		Compact:         "renounceRole(bytes32,address)",
		StateMutability: "nonPayable",
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
	MethodPrefix{0xd5, 0x47, 0x74, 0x1f}: &Abi{
		Name:            "revokeRole",
		ABI:             "function revokeRole(bytes32 role, address account) external",
		Compact:         "revokeRole(bytes32,address)",
		StateMutability: "nonPayable",
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
	MethodPrefix{0x2e, 0xb2, 0xc2, 0xd6}: &Abi{
		Name:            "safeBatchTransferFrom",
		ABI:             "function safeBatchTransferFrom(address from, address to, uint256[] calldata ids, uint256[] calldata amounts, bytes calldata data) external",
		Compact:         "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)",
		StateMutability: "nonPayable",
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
				Name:         "amounts",
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
	MethodPrefix{0x40, 0xd0, 0x97, 0xc3}: &Abi{
		Name:            "safeMint",
		ABI:             "function safeMint(address to) public",
		Compact:         "safeMint(address)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "to",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xa1, 0x44, 0x81, 0x94}: &Abi{
		Name:            "safeMint",
		ABI:             "function safeMint(address to, uint256 tokenId) public",
		Compact:         "safeMint(address,uint256)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
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
	MethodPrefix{0x42, 0x84, 0x2e, 0x0e}: &Abi{
		Name:            "safeTransferFrom",
		ABI:             "function safeTransferFrom(address from, address to, uint256 tokenId) external",
		Compact:         "safeTransferFrom(address,address,uint256)",
		StateMutability: "nonPayable",
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
		ABI:             "function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external",
		Compact:         "safeTransferFrom(address,address,uint256,bytes)",
		StateMutability: "nonPayable",
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
		ABI:             "function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external",
		Compact:         "safeTransferFrom(address,address,uint256,uint256,bytes)",
		StateMutability: "nonPayable",
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
	MethodPrefix{0xa2, 0x2c, 0xb4, 0x65}: &Abi{
		Name:            "setApprovalForAll",
		ABI:             "function setApprovalForAll(address operator, bool _approved) external",
		Compact:         "setApprovalForAll(address,bool)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "operator",
				Type:         "address",
				InternalType: "address",
			},
			&AbiIO{
				Name:         "_approved",
				Type:         "bool",
				InternalType: "bool",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0xce, 0x7c, 0x2a, 0xc2}: &Abi{
		Name:            "shares",
		ABI:             "function shares(address account) public view returns (uint256)",
		Compact:         "shares(address)",
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
	MethodPrefix{0xbe, 0x9a, 0x65, 0x55}: &Abi{
		Name:            "start",
		ABI:             "function start() public view virtual returns (uint256)",
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
		ABI:             "function state(uint256 proposalId) public view returns (ProposalState)",
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
				Type:         "ProposalState",
				InternalType: "ProposalState",
			},
		},
	},
	MethodPrefix{0x01, 0xff, 0xc9, 0xa7}: &Abi{
		Name:            "supportsInterface",
		ABI:             "function supportsInterface(bytes4 interfaceId) public view override returns (bool)",
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
		ABI:             "function symbol() external view returns (string memory)",
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
	MethodPrefix{0xfc, 0x0c, 0x54, 0x6a}: &Abi{
		Name:            "token",
		ABI:             "function token() public view returns (address)",
		Compact:         "token()",
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
	MethodPrefix{0xc8, 0x7b, 0x56, 0xdd}: &Abi{
		Name:            "tokenURI",
		ABI:             "function tokenURI(uint256 tokenId) external view returns (string memory)",
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
	MethodPrefix{0xe3, 0x3b, 0x7d, 0xe3}: &Abi{
		Name:            "totalReleased",
		ABI:             "function totalReleased() public view returns (uint256)",
		Compact:         "totalReleased()",
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
	MethodPrefix{0xd7, 0xf7, 0xa4, 0xe5}: &Abi{
		Name:            "totalReleased",
		ABI:             "function totalReleased(IERC20 token) public view returns (uint256)",
		Compact:         "totalReleased(IERC20)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "token",
				Type:         "IERC20",
				InternalType: "IERC20",
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
	MethodPrefix{0x3a, 0x98, 0xef, 0x39}: &Abi{
		Name:            "totalShares",
		ABI:             "function totalShares() public view returns (uint256)",
		Compact:         "totalShares()",
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
	MethodPrefix{0x18, 0x16, 0x0d, 0xdd}: &Abi{
		Name:            "totalSupply",
		ABI:             "function totalSupply() external view returns (uint256)",
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
	MethodPrefix{0xa9, 0x05, 0x9c, 0xbb}: &Abi{
		Name:            "transfer",
		ABI:             "function transfer(address to, uint256 amount) external returns (bool)",
		Compact:         "transfer(address,uint256)",
		StateMutability: "nonPayable",
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
	MethodPrefix{0x23, 0xb8, 0x72, 0xdd}: &Abi{
		Name:            "transferFrom",
		ABI:             "function transferFrom(address from, address to, uint256 amount) external returns (bool)",
		Compact:         "transferFrom(address,address,uint256)",
		StateMutability: "nonPayable",
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
	MethodPrefix{0xf2, 0xfd, 0xe3, 0x8b}: &Abi{
		Name:            "transferOwnership",
		ABI:             "function transferOwnership(address newOwner) public",
		Compact:         "transferOwnership(address)",
		StateMutability: "nonPayable",
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
	MethodPrefix{0xc1, 0xea, 0x34, 0xfb}: &Abi{
		Name:            "verify",
		ABI:             "function verify(ForwardRequest calldata req, bytes calldata signature) public view returns (bool)",
		Compact:         "verify(ForwardRequest,bytes)",
		StateMutability: "view",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "req",
				Type:         "ForwardRequest",
				InternalType: "ForwardRequest",
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
				Type:         "bool",
				InternalType: "bool",
			},
		},
	},
	MethodPrefix{0x54, 0xfd, 0x4d, 0x50}: &Abi{
		Name:            "version",
		ABI:             "function version() public view returns (string memory)",
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
		ABI:             "function vestedAmount(address token, uint64 timestamp) public view virtual returns (uint256)",
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
		ABI:             "function vestedAmount(uint64 timestamp) public view virtual returns (uint256)",
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
	MethodPrefix{0xc0, 0x33, 0x1b, 0x3e}: &Abi{
		Name:            "voteProposal",
		ABI:             "function voteProposal(uint8 domainID, uint64 depositNonce, bytes32 resourceID, bytes calldata data) external",
		Compact:         "voteProposal(uint8,uint64,bytes32,bytes)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "domainID",
				Type:         "uint8",
				InternalType: "uint8",
			},
			&AbiIO{
				Name:         "depositNonce",
				Type:         "uint64",
				InternalType: "uint64",
			},
			&AbiIO{
				Name:         "resourceID",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x39, 0x32, 0xab, 0xb1}: &Abi{
		Name:            "votingDelay",
		ABI:             "function votingDelay() public view virtual returns (uint256)",
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
		ABI:             "function votingPeriod() public view virtual returns (uint256)",
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
	MethodPrefix{0x09, 0x68, 0xf2, 0x64}: &Abi{
		Name:            "withdraw",
		ABI:             "function withdraw(bytes memory data) external override",
		Compact:         "withdraw(bytes)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "data",
				Type:         "bytes",
				InternalType: "bytes",
			},
		},
		Outputs: []*AbiIO{},
	},
	MethodPrefix{0x31, 0xb3, 0xeb, 0x94}: &Abi{
		Name:            "withdrawPayments",
		ABI:             "function withdrawPayments(address payable payee) public virtual",
		Compact:         "withdrawPayments(address)",
		StateMutability: "nonPayable",
		Type:            "function",
		Inputs: []*AbiIO{
			&AbiIO{
				Name:         "payee",
				Type:         "address",
				InternalType: "address",
			},
		},
		Outputs: []*AbiIO{},
	},
}
