package evmabiless

// Do not edit, automatically generated file.

var signatures = map[MethodPrefix]*Abi{
	MethodPrefix{0x8c, 0x5b, 0xe1, 0xe5}: &Abi{
		Name:            "Approval",
		ABI:             "event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)",
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
				Name:         "approved",
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
	},
	MethodPrefix{0x4b, 0xf5, 0xd7, 0xe9}: &Abi{
		Name:            "CLOCK_MODE",
		ABI:             "function CLOCK_MODE() public view virtual override returns (string memory)",
		Compact:         "CLOCK_MODE()",
		StateMutability: "view",
		Type:            "function",
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
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "bytes32",
				InternalType: "bytes32",
			},
		},
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
	},
	MethodPrefix{0xdd, 0xf2, 0x52, 0xad}: &Abi{
		Name:            "Transfer",
		ABI:             "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
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
				Name:         "tokenId",
				Type:         "uint256",
				InternalType: "uint256",
			},
		},
	},
	MethodPrefix{0x80, 0x2a, 0xab, 0xe8}: &Abi{
		Name:            "_totalRelayers",
		ABI:             "function _totalRelayers() public view returns (uint)",
		Compact:         "_totalRelayers()",
		StateMutability: "view",
		Type:            "function",
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
	},
	MethodPrefix{0x80, 0xae, 0x1c, 0x28}: &Abi{
		Name:            "adminPauseTransfers",
		ABI:             "function adminPauseTransfers() external",
		Compact:         "adminPauseTransfers()",
		StateMutability: "nonPayable",
		Type:            "function",
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
	},
	MethodPrefix{0xff, 0xaa, 0xc0, 0xeb}: &Abi{
		Name:            "adminUnpauseTransfers",
		ABI:             "function adminUnpauseTransfers() external",
		Compact:         "adminUnpauseTransfers()",
		StateMutability: "nonPayable",
		Type:            "function",
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
		ABI:             "function approve(address to, uint256 tokenId) external",
		Compact:         "approve(address,uint256)",
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
	},
	MethodPrefix{0x70, 0xa0, 0x82, 0x31}: &Abi{
		Name:            "balanceOf",
		ABI:             "function balanceOf(address owner) external view returns (uint256 balance)",
		Compact:         "balanceOf(address)",
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
				Name:         "balance",
				Type:         "uint256",
				InternalType: "uint256",
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
	},
	MethodPrefix{0x06, 0xfd, 0xde, 0x03}: &Abi{
		Name:            "name",
		ABI:             "function name() external view returns (string memory)",
		Compact:         "name()",
		StateMutability: "view",
		Type:            "function",
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
	},
	MethodPrefix{0x71, 0x50, 0x18, 0xa6}: &Abi{
		Name:            "renounceOwnership",
		ABI:             "function renounceOwnership() public",
		Compact:         "renounceOwnership()",
		StateMutability: "nonPayable",
		Type:            "function",
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
	MethodPrefix{0x18, 0x16, 0x0d, 0xdd}: &Abi{
		Name:            "totalSupply",
		ABI:             "function totalSupply() external view returns (uint256)",
		Compact:         "totalSupply()",
		StateMutability: "view",
		Type:            "function",
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
		ABI:             "function transferFrom(address from, address to, uint256 tokenId) external",
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
				Name:         "tokenId",
				Type:         "uint256",
				InternalType: "uint256",
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
	},
	MethodPrefix{0x54, 0xfd, 0x4d, 0x50}: &Abi{
		Name:            "version",
		ABI:             "function version() public view returns (string memory)",
		Compact:         "version()",
		StateMutability: "view",
		Type:            "function",
		Outputs: []*AbiIO{
			&AbiIO{
				Name:         "",
				Type:         "string",
				InternalType: "string",
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
	},
}
