package evmabiless

type AbiIO struct {
	InternalType string `json:"internalType"`
	Name         string `json:"name"`
	Type         string `json:"type"`
	Indexed      bool   `json:"indexed,omitempty"`
}

// Abi is the struct type used to represent a function or event ABI
type Abi struct {
	ABI             string   `json:"abi"`
	Compact         string   `json:"compact"`
	Inputs          []*AbiIO `json:"inputs"`
	Name            string   `json:"name"`
	Outputs         []*AbiIO `json:"outputs"`
	StateMutability string   `json:"stateMutability"`
	Type            string   `json:"type"`
}
