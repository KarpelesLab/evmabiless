// this is a list of known contract methods

// generic methods
function name() external view returns (string memory);
function symbol() external view returns (string memory);
function decimals() external view returns (uint8);

// ownable
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
function owner() public view virtual returns (address);
function renounceOwnership() public virtual;
function transferOwnership(address newOwner) public virtual onlyOwner;


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

function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool);

// Votes
function getVotes(address account) public view virtual override returns (uint256);
function getPastVotes(address account, uint256 blockNumber) public view virtual override returns (uint256);
function getPastTotalSupply(uint256 blockNumber) public view virtual override returns (uint256);
function delegates(address account) public view virtual override returns (address);
function delegate(address delegatee) public virtual override;
function delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s) public virtual override;
function nonces(address owner) public view virtual returns (uint256);
function DOMAIN_SEPARATOR() external view returns (bytes32);

