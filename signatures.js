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
        "type": "event"
    },
    "3644e515": {
        "abi": "function DOMAIN_SEPARATOR() external view returns (bytes32)",
        "compact": "DOMAIN_SEPARATOR()",
        "inputs": [],
        "name": "DOMAIN_SEPARATOR",
        "outputs": [],
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
        "type": "event"
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
        "outputs": [],
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
        "outputs": [],
        "type": "function"
    },
    "313ce567": {
        "abi": "function decimals() external view returns (uint8)",
        "compact": "decimals()",
        "inputs": [],
        "name": "decimals",
        "outputs": [],
        "type": "function"
    },
    "5c19a95c": {
        "abi": "function delegate(address delegatee) public virtual override",
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
        "type": "function"
    },
    "c3cda520": {
        "abi": "function delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s) public virtual override",
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
        "type": "function"
    },
    "587cde1e": {
        "abi": "function delegates(address account) public view virtual override returns (address)",
        "compact": "delegates(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "delegates",
        "outputs": [],
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
        "outputs": [],
        "type": "function"
    },
    "8e539e8c": {
        "abi": "function getPastTotalSupply(uint256 blockNumber) public view virtual override returns (uint256)",
        "compact": "getPastTotalSupply(uint256)",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "blockNumber",
                "type": "uint256"
            }
        ],
        "name": "getPastTotalSupply",
        "outputs": [],
        "type": "function"
    },
    "3a46b1a8": {
        "abi": "function getPastVotes(address account, uint256 blockNumber) public view virtual override returns (uint256)",
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
        "outputs": [],
        "type": "function"
    },
    "9ab24eb0": {
        "abi": "function getVotes(address account) public view virtual override returns (uint256)",
        "compact": "getVotes(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "getVotes",
        "outputs": [],
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
        "outputs": [],
        "type": "function"
    },
    "06fdde03": {
        "abi": "function name() external view returns (string memory)",
        "compact": "name()",
        "inputs": [],
        "name": "name",
        "outputs": [],
        "type": "function"
    },
    "7ecebe00": {
        "abi": "function nonces(address owner) public view virtual returns (uint256)",
        "compact": "nonces(address)",
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "nonces",
        "outputs": [],
        "type": "function"
    },
    "8da5cb5b": {
        "abi": "function owner() public view virtual returns (address)",
        "compact": "owner()",
        "inputs": [],
        "name": "owner",
        "outputs": [],
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
        "outputs": [],
        "type": "function"
    },
    "715018a6": {
        "abi": "function renounceOwnership() public virtual",
        "compact": "renounceOwnership()",
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
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
        "type": "function"
    },
    "01ffc9a7": {
        "abi": "function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool)",
        "compact": "supportsInterface(bytes4)",
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [],
        "type": "function"
    },
    "95d89b41": {
        "abi": "function symbol() external view returns (string memory)",
        "compact": "symbol()",
        "inputs": [],
        "name": "symbol",
        "outputs": [],
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
        "outputs": [],
        "type": "function"
    },
    "18160ddd": {
        "abi": "function totalSupply() external view returns (uint256)",
        "compact": "totalSupply()",
        "inputs": [],
        "name": "totalSupply",
        "outputs": [],
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
        "outputs": [],
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
        "type": "function"
    },
    "f2fde38b": {
        "abi": "function transferOwnership(address newOwner) public virtual onlyOwner",
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
        "type": "function"
    }
};
