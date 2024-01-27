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

// ERC20Burnable
function burn(uint256 amount) external;
function burnFrom(address account, uint256 amount) external;

// IERC721
event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

function ownerOf(uint256 tokenId) external view returns (address owner);
function safeTransferFrom(address from, address to, uint256 tokenId) external;
function getApproved(uint256 tokenId) external view returns (address operator);
function setApprovalForAll(address operator, bool _approved) external;
function isApprovedForAll(address owner, address operator) external view returns (bool);
function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;

// ERC-721 Metadata
function tokenURI(uint256 tokenId) external view returns (string memory);

function supportsInterface(bytes4 interfaceId) public view override returns (bool);

// ERC-721 mint
function safeMint(address to, uint256 tokenId) public;
function safeMint(address to) public;
function mint(address to, uint256 tokenId) public;

// IERC-1155
event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);
event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values);
event URI(string value, uint256 indexed id);
function balanceOf(address account, uint256 id) external view returns (uint256);
function balanceOfBatch(address[] calldata accounts, uint256[] calldata ids) external view returns (uint256[] memory);
function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external;
function safeBatchTransferFrom(address from, address to, uint256[] calldata ids, uint256[] calldata amounts, bytes calldata data) external;

// IVotes
event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate);
event DelegateVotesChanged(address indexed delegate, uint256 previousBalance, uint256 newBalance);

function getVotes(address account) public view override returns (uint256);
function getPastVotes(address account, uint256 blockNumber) public view override returns (uint256);
function getPastTotalSupply(uint256 blockNumber) public view override returns (uint256);
function delegates(address account) public view override returns (address);
function delegate(address delegatee) public override;
function delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s) public override;
function nonces(address owner) public view returns (uint256);
function DOMAIN_SEPARATOR() external view returns (bytes32);

// Governor
event ProposalCreated(uint256 proposalId, address proposer, address[] targets, uint256[] values, string[] signatures, bytes[] calldatas, uint256 voteStart, uint256 voteEnd, string description);
event ProposalCanceled(uint256 proposalId);
event ProposalExecuted(uint256 proposalId);
event VoteCast(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason);
event VoteCastWithParams(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason, bytes params);

function version() public view returns (string memory);
function COUNTING_MODE() public view virtual returns (string memory);
function hashProposal(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) public pure returns (uint256);
function state(uint256 proposalId) public view returns (ProposalState);
function proposalThreshold() public view virtual returns (uint256);
function proposalSnapshot(uint256 proposalId) public view virtual override returns (uint256);
function proposalDeadline(uint256 proposalId) public view virtual override returns (uint256);
function proposalProposer(uint256 proposalId) public view virtual override returns (address);
function votingDelay() public view virtual returns (uint256);
function votingPeriod() public view virtual returns (uint256);
function quorum(uint256 timepoint) public view virtual returns (uint256);
function propose(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, string memory description) public virtual override returns (uint256);
function execute(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) public payable virtual override returns (uint256);
function cancel(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) public virtual override returns (uint256);
function getVotes(address account, uint256 timepoint) public view virtual override returns (uint256);
function getVotesWithParams(address account, uint256 timepoint, bytes memory params) public view virtual override returns (uint256);
function hasVoted(uint256 proposalId, address account) public view virtual returns (bool);
function castVote(uint256 proposalId, uint8 support) public virtual override returns (uint256);
function castVoteWithReason(uint256 proposalId, uint8 support, string calldata reason) public virtual override returns (uint256);
function castVoteWithReasonAndParams(uint256 proposalId, uint8 support, string calldata reason, bytes memory params) public virtual override returns (uint256);
function castVoteBySig(uint256 proposalId, uint8 support, uint8 v, bytes32 r, bytes32 s) public virtual override returns (uint256);
function castVoteWithReasonAndParamsBySig(uint256 proposalId, uint8 support, string calldata reason, bytes memory params, uint8 v, bytes32 r, bytes32 s) public virtual override returns (uint256);

// GovernorVotes
function token() public view returns (address);
function clock() public view virtual override returns (uint48);
function CLOCK_MODE() public view virtual override returns (string memory);

// GovernorCountingSimple
function proposalVotes(uint256 proposalId) public view virtual returns (uint256 againstVotes, uint256 forVotes, uint256 abstainVotes);

// PaymentSplitter
event PayeeAdded(address account, uint256 shares);
event PaymentReleased(address to, uint256 amount);
event ERC20PaymentReleased(IERC20 indexed token, address to, uint256 amount);
event PaymentReceived(address from, uint256 amount);

function totalShares() public view returns (uint256);
function totalReleased() public view returns (uint256);
function totalReleased(IERC20 token) public view returns (uint256);
function shares(address account) public view returns (uint256);
function released(address account) public view returns (uint256);
function released(IERC20 token, address account) public view returns (uint256);
function payee(uint256 index) public view returns (address);
function releasable(address account) public view returns (uint256);
function releasable(IERC20 token, address account) public view returns (uint256);
function release(address payable account) public virtual;
function release(IERC20 token, address account) public virtual;

// VestingWallet
event EtherReleased(uint256 amount);
event ERC20Released(address indexed token, uint256 amount);

function beneficiary() public view virtual returns (address);
function start() public view virtual returns (uint256);
function duration() public view virtual returns (uint256);
function released() public view virtual returns (uint256);
function releasable() public view virtual returns (uint256);
function release() public virtual;
function vestedAmount(uint64 timestamp) public view virtual returns (uint256);
function vestedAmount(address token, uint64 timestamp) public view virtual returns (uint256);

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

// ERC2771
function isTrustedForwarder(address forwarder) public view virtual returns (bool);
function getNonce(address from) public view returns (uint256);
function verify(ForwardRequest calldata req, bytes calldata signature) public view returns (bool);
function execute(ForwardRequest calldata req, bytes calldata signature) public payable returns (bool, bytes memory);

// Pausable
event Paused(address account);
event Unpaused(address account);
function paused() public view virtual returns (bool);

// PullPayment
function withdrawPayments(address payable payee) public virtual;
function payments(address dest) public view returns (uint256);

// IAccessControl
event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole);
event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender);
event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender);

function hasRole(bytes32 role, address account) external view returns (bool);
function getRoleAdmin(bytes32 role) external view returns (bytes32);
function grantRole(bytes32 role, address account) external;
function revokeRole(bytes32 role, address account) external;
function renounceRole(bytes32 role, address account) external;
