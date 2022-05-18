// this is a list of known contract methods

// generic methods
function name() external view returns (string memory);
function symbol() external view returns (string memory);
function decimals() external view returns (uint8);

// ownable
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
function owner() public view returns (address);
function renounceOwnership() public;
function transferOwnership(address newOwner) public;


// IERC20
function totalSupply() external view returns (uint256);
function balanceOf(address account) external view returns (uint256);
function transfer(address to, uint256 amount) external returns (bool);
function allowance(address owner, address spender) external view returns (uint256);
function approve(address spender, uint256 amount) external returns (bool);
function transferFrom(address from, address to, uint256 amount) external returns (bool);

event Transfer(address indexed from, address indexed to, uint256 value);
event Approval(address indexed owner, address indexed spender, uint256 value);

// IERC721
event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

function balanceOf(address owner) external view returns (uint256 balance);
function ownerOf(uint256 tokenId) external view returns (address owner);
function safeTransferFrom(address from, address to, uint256 tokenId) external;
function transferFrom(address from, address to, uint256 tokenId) external;
function approve(address to, uint256 tokenId) external;
function getApproved(uint256 tokenId) external view returns (address operator);
function setApprovalForAll(address operator, bool _approved) external;
function isApprovedForAll(address owner, address operator) external view returns (bool);
function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;

// ERC-721 Metadata
function tokenURI(uint256 tokenId) external view returns (string memory);

function supportsInterface(bytes4 interfaceId) public view override returns (bool);

// Votes
function getVotes(address account) public view override returns (uint256);
function getPastVotes(address account, uint256 blockNumber) public view override returns (uint256);
function getPastTotalSupply(uint256 blockNumber) public view override returns (uint256);
function delegates(address account) public view override returns (address);
function delegate(address delegatee) public override;
function delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s) public override;
function nonces(address owner) public view returns (uint256);
function DOMAIN_SEPARATOR() external view returns (bytes32);

// chainbridge
function isRelayer(address relayer) external view returns (bool);
function renounceAdmin(address newAdmin) external;
function adminPauseTransfers() external;
function adminUnpauseTransfers() external;
function adminChangeRelayerThreshold(uint256 newThreshold) external;
function adminAddRelayer(address relayerAddress) external;
function adminRemoveRelayer(address relayerAddress) external;
function adminSetResource(address handlerAddress, bytes32 resourceID, address tokenAddress) external;
function adminSetGenericResource(address handlerAddress, bytes32 resourceID, address contractAddress, bytes4 depositFunctionSig, uint256 depositFunctionDepositerOffset, bytes4 executeFunctionSig) external;
function adminSetBurnable(address handlerAddress, address tokenAddress) external;
function adminSetDepositNonce(uint8 domainID, uint64 nonce) external;
function adminSetForwarder(address forwarder, bool valid) external;
function getProposal(uint8 originDomainID, uint64 depositNonce, bytes32 dataHash) external view returns (Proposal memory);
function _totalRelayers() public view returns (uint);
function adminChangeFeeHandler(address newFeeHandler) external;
function adminWithdraw(address handlerAddress, bytes memory data) external;
function deposit(uint8 destinationDomainID, bytes32 resourceID, bytes calldata depositData, bytes calldata feeData) external payable;
function deposit(uint8 destinationChainID, bytes32 resourceID, bytes calldata data) external payable;
function voteProposal(uint8 domainID, uint64 depositNonce, bytes32 resourceID, bytes calldata data) external;
function cancelProposal(uint8 domainID, uint64 depositNonce, bytes32 dataHash) public;
function executeProposal(uint8 domainID, uint64 depositNonce, bytes calldata data, bytes32 resourceID, bool revertOnFail) public;

function deposit(bytes32 resourceID, address depositer, bytes calldata data) external override returns (bytes memory);
function executeProposal(bytes32 resourceID, bytes calldata data) external override;
function withdraw(bytes memory data) external override;


