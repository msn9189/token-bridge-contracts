/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { L1WethGateway, L1WethGatewayInterface } from '../L1WethGateway'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_sequenceNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'DepositInitiated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'callHookData',
        type: 'bytes',
      },
    ],
    name: 'TransferAndCallTriggered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_seqNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL2',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'newData',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'madeExternalCall',
        type: 'bool',
      },
    ],
    name: 'WithdrawRedirected',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawalFinalized',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
    ],
    name: 'encodeWithdrawal',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gasReserveIfCallRevert',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_initialData',
        type: 'bytes',
      },
    ],
    name: 'getExternalCall',
    outputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: 'outboundCalldata',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'inboundEscrowAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inbox',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l1Router',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_inbox',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l1Weth',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l2Weth',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l1Weth',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2Weth',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: 'res',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'postUpgradeInit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'redirectedExits',
    outputs: [
      {
        internalType: 'bool',
        name: 'isExit',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: '_newTo',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_newData',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_newDestination',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_newData',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'transferExitAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50612664806100206000396000f3fe6080604052600436106100e15760003560e01c806395fcea781161008557806395fcea78146103e1578063a0c76a96146103f6578063a7e28d48146104cf578063bcf2e6eb14610502578063bd5f3e7d146105c8578063d2ce7d65146106b3578063f68a90821461074d578063f887ea40146108a4578063fb0e722b146108b9576100e8565b8062aa3a9b146100ed578063020a6058146101c65780630f09eb51146102115780631459457a14610226578063146bf4b11461027b578063247b2768146102ac5780632db09c1c146102c15780632e567b36146102d6576100e8565b366100e857005b600080fd5b3480156100f957600080fd5b506101c4600480360360a081101561011057600080fd5b6001600160a01b0382358116926020810135926040820135831692606083013516919081019060a081016080820135600160201b81111561015057600080fd5b82018360208201111561016257600080fd5b803590602001918460018302840111600160201b8311171561018357600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506108ce945050505050565b005b3480156101d257600080fd5b506101ff600480360360408110156101e957600080fd5b50803590602001356001600160a01b0316610ac8565b60408051918252519081900360200190f35b34801561021d57600080fd5b506101ff610afd565b34801561023257600080fd5b506101c4600480360360a081101561024957600080fd5b506001600160a01b03813581169160208101358216916040820135811691606081013582169160809091013516610b04565b34801561028757600080fd5b50610290610bd8565b604080516001600160a01b039092168252519081900360200190f35b3480156102b857600080fd5b50610290610be7565b3480156102cd57600080fd5b50610290610bf6565b61036c600480360360a08110156102ec57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561032e57600080fd5b82018360208201111561034057600080fd5b803590602001918460018302840111600160201b8311171561036157600080fd5b509092509050610c05565b6040805160208082528351818301528351919283929083019185019080838360005b838110156103a657818101518382015260200161038e565b50505050905090810190601f1680156103d35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156103ed57600080fd5b506101c4610f83565b34801561040257600080fd5b5061036c600480360360a081101561041957600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561045b57600080fd5b82018360208201111561046d57600080fd5b803590602001918460018302840111600160201b8311171561048e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610fe0945050505050565b3480156104db57600080fd5b50610290600480360360208110156104f257600080fd5b50356001600160a01b03166110e7565b34801561050e57600080fd5b5061052c6004803603602081101561052557600080fd5b503561111a565b6040518084151515158152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561058b578181015183820152602001610573565b50505050905090810190601f1680156105b85780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b3480156105d457600080fd5b506101c4600480360360a08110156105eb57600080fd5b8135916001600160a01b03602082013581169260408301359091169190810190608081016060820135600160201b81111561062557600080fd5b82018360208201111561063757600080fd5b803590602001918460018302840111600160201b8311171561065857600080fd5b919390929091602081019035600160201b81111561067557600080fd5b82018360208201111561068757600080fd5b803590602001918460018302840111600160201b831117156106a857600080fd5b5090925090506111d1565b61036c600480360360c08110156106c957600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b81111561070f57600080fd5b82018360208201111561072157600080fd5b803590602001918460018302840111600160201b8311171561074257600080fd5b5090925090506114aa565b34801561075957600080fd5b506108136004803603606081101561077057600080fd5b8135916001600160a01b0360208201351691810190606081016040820135600160201b81111561079f57600080fd5b8201836020820111156107b157600080fd5b803590602001918460018302840111600160201b831117156107d257600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061174d945050505050565b60405180836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610868578181015183820152602001610850565b50505050905090810190601f1680156108955780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b3480156108b057600080fd5b50610290611838565b3480156108c557600080fd5b50610290611847565b333014610922576040805162461bcd60e51b815260206004820152601f60248201527f4d696e742063616e206f6e6c792062652063616c6c65642062792073656c6600604482015290519081900360640190fd5b610934826001600160a01b0316611856565b610985576040805162461bcd60e51b815260206004820152601e60248201527f44657374696e6174696f6e206d757374206265206120636f6e74726163740000604482015290519081900360640190fd5b61099085838661185c565b600061099a610afd565b5a039050805a116109dc5760405162461bcd60e51b815260040180806020018281038252602b8152602001806125da602b913960400191505060405180910390fd5b826001600160a01b031663a4c0ed36828688866040518563ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610a59578181015183820152602001610a41565b50505050905090810190601f168015610a865780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b158015610aa757600080fd5b5087f1158015610abb573d6000803e3d6000fd5b5050505050505050505050565b604080516020808201949094526001600160a01b03929092168282015280518083038201815260609092019052805191012090565b6175305b90565b610b0f8585856118cb565b6001600160a01b038216610b5b576040805162461bcd60e51b815260206004820152600e60248201526d0929cac82989288be9862ae8aa8960931b604482015290519081900360640190fd5b6001600160a01b038116610ba7576040805162461bcd60e51b815260206004820152600e60248201526d0929cac82989288be9864ae8aa8960931b604482015290519081900360640190fd5b600480546001600160a01b039384166001600160a01b03199182161790915560058054929093169116179055505050565b6004546001600160a01b031681565b6005546001600160a01b031681565b6000546001600160a01b031681565b6002546060906001600160a01b03166000610c1f826118d6565b9050336001600160a01b03821614610c70576040805162461bcd60e51b815260206004820152600f60248201526e4e4f545f46524f4d5f42524944474560881b604482015290519081900360640190fd5b6000610c7b83611943565b6000549091506001600160a01b03808316911614610cdb576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b60006060610ce98888611a75565b91509150610cf8828b8361174d565b8051919b50915015610ef3576000306001600160a01b031662aa3a9b8e8c8f8f876040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610db3578181015183820152602001610d9b565b50505050905090810190601f168015610de05780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b158015610e0357600080fd5b505af1925050508015610e14575060015b610e2857610e238d8d8c61185c565b610e2c565b5060015b8a6001600160a01b03168c6001600160a01b03167f11ff8525c5d96036231ee652c108808dee4c40728a6117830a75029298bb7de6838d86604051808415151515815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610eb1578181015183820152602001610e99565b50505050905090810190601f168015610ede5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a350610efe565b610efe8c8b8b61185c565b818a6001600160a01b03168c6001600160a01b03167f891afe029c75c4f8c5855fc3480598bc5a53739344f6ae575bdb7ea2a79f56b38f8d60405180836001600160a01b03166001600160a01b031681526020018281526020019250505060405180910390a450506040805160208101909152600081529a9950505050505050505050565b6000610f8d611b22565b9050336001600160a01b03821614610fdd576040805162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b604482015290519081900360640190fd5b50565b60408051602081019091526000815260609063172b3d9b60e11b878787876110088689611b47565b6040516001600160a01b0380871660248301908152868216604484015290851660648301526084820184905260a060a48301908152835160c484015283519192909160e490910190602085019080838360005b8381101561107357818101518382015260200161105b565b50505050905090810190601f1680156110a05780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a1699909917909852509597505050505050505095945050505050565b6004546000906001600160a01b0383811691161461110757506000611115565b506005546001600160a01b03165b919050565b600360209081526000918252604091829020805460018083018054865160026101009483161585026000190190921691909104601f810187900487028201870190975286815260ff841696929093046001600160a01b0316949091908301828280156111c75780601f1061119c576101008083540402835291602001916111c7565b820191906000526020600020905b8154815290600101906020018083116111aa57829003601f168201915b5050505050905083565b60006111ed88886040518060200160405280600081525061174d565b509050336001600160a01b03821614611243576040805162461bcd60e51b81526020600482015260136024820152722727aa2fa2ac2822a1aa22a22fa9a2a72222a960691b604482015290519081900360640190fd5b61128588888888888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611c3992505050565b81156113ed5761129d866001600160a01b0316611856565b6112e0576040805162461bcd60e51b815260206004820152600f60248201526e1513d7d393d517d0d3d395149050d5608a1b604482015290519081900360640190fd5b6000866001600160a01b031663592e2070838b87876040518563ffffffff1660e01b815260040180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505095505050505050602060405180830381600087803b15801561137657600080fd5b505af115801561138a573d6000803e3d6000fd5b505050506040513d60208110156113a057600080fd5b50519050806113eb576040805162461bcd60e51b81526020600482015260126024820152711514905394d1915497d213d3d2d7d190525360721b604482015290519081900360640190fd5b505b87866001600160a01b0316826001600160a01b03167f56735ccb9dc7d2222ce4177fc3aea44c33882e2a2c73e0fb1c6b93c9c13a04d48888888860008b8b905011604051808060200180602001841515151581526020018381038352888882818152602001925080828437600083820152601f01601f191690910184810383528681526020019050868680828437600083820152604051601f909101601f1916909201829003995090975050505050505050a45050505050505050565b6060600080606060006114bc33611cca565b156114d5576114cb8787611cde565b9094509150611512565b33935086868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509294505050505b81806020019051604081101561152757600080fd5b815160208301805160405192949293830192919084600160201b82111561154d57600080fd5b90830190602082018581111561156257600080fd5b8251600160201b81118282018810171561157b57600080fd5b82525081516020918201929091019080838360005b838110156115a8578181015183820152602001611590565b50505050905090810190601f1680156115d55780820380516001836020036101000a031916815260200191505b50604052509194509192506115f59150506001600160a01b038d16611856565b611638576040805162461bcd60e51b815260206004820152600f60248201526e130c57d393d517d0d3d395149050d5608a1b604482015290519081900360640190fd5b60006116438d6110e7565b90506001600160a01b038116611692576040805162461bcd60e51b815260206004820152600f60248201526e1393d7d30c97d513d2d15397d4d155608a1b604482015290519081900360640190fd5b61169d8d868d611d1c565b6116aa8d868e8e87610fe0565b95506116ba858c8c8c868b611d9a565b93505050818a6001600160a01b0316846001600160a01b03167fb8910b9960c443aac3240b98585384e3a6f109fbf6969e264c3f183d69aba7e18e8d60405180836001600160a01b03166001600160a01b031681526020018281526020019250505060405180910390a4506040805160208082019390935281518082039093018352810190529998505050505050505050565b60006060600061175d8686610ac8565b600081815260036020526040902080549192509060ff16156118275780546001808301805460408051602060026101009685161587026000190190941693909304601f8101849004840282018401909252818152939094046001600160a01b03169391929183918301828280156118155780601f106117ea57610100808354040283529160200191611815565b820191906000526020600020905b8154815290600101906020018083116117f857829003601f168201915b50505050509050935093505050611830565b85859350935050505b935093915050565b6001546001600160a01b031681565b6002546001600160a01b031681565b3b151590565b826001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561189757600080fd5b505af11580156118ab573d6000803e3d6000fd5b506118c6935050506001600160a01b03851690508383611dea565b505050565b6118c6838383611e3c565b6000816001600160a01b031663e78cea926040518163ffffffff1660e01b815260040160206040518083038186803b15801561191157600080fd5b505afa158015611925573d6000803e3d6000fd5b505050506040513d602081101561193b57600080fd5b505192915050565b60008061194f836118d6565b6001600160a01b031663ab5d89436040518163ffffffff1660e01b815260040160206040518083038186803b15801561198757600080fd5b505afa15801561199b573d6000803e3d6000fd5b505050506040513d60208110156119b157600080fd5b505160408051634032458160e11b815290519192506000916001600160a01b038416916380648b02916004808301926020929190829003018186803b1580156119f957600080fd5b505afa158015611a0d573d6000803e3d6000fd5b505050506040513d6020811015611a2357600080fd5b505190506001600160a01b038116611a6e576040805162461bcd60e51b81526020600482015260096024820152682727afa9a2a72222a960b91b604482015290519081900360640190fd5b9392505050565b6000606083836040811015611a8957600080fd5b81359190810190604081016020820135600160201b811115611aaa57600080fd5b820183602082011115611abc57600080fd5b803590602001918460018302840111600160201b83111715611add57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250969b929a509198505050505050505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b60608282604051602001808060200180602001838103835285818151815260200191508051906020019080838360005b83811015611b8f578181015183820152602001611b77565b50505050905090810190601f168015611bbc5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611bef578181015183820152602001611bd7565b50505050905090810190601f168015611c1c5780820380516001836020036101000a031916815260200191505b5060408051601f1981840301815291905298975050505050505050565b6000611c458585610ac8565b6040805160608101825260018082526001600160a01b0387811660208085019182528486018981526000888152600383529690962085518154935160ff1990941690151517610100600160a81b0319166101009390941692909202929092178155935180519596509294611cc093928501929091019061251b565b5050505050505050565b6001546001600160a01b0390811691161490565b6000606083836040811015611cf257600080fd5b6001600160a01b038235169190810190604081016020820135600160201b811115611aaa57600080fd5b611d376001600160a01b03841683308463ffffffff611ef916565b826001600160a01b0316632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015611d7d57600080fd5b505af1158015611d91573d6000803e3d6000fd5b50505050505050565b6002546000805460408051606081018252868152602081018990529081018790529192611ddf926001600160a01b0391821692909116908a90348b01908b9088611f59565b979650505050505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526118c6908490611f84565b611e468383612035565b6001600160a01b038216611e8e576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b6001600160a01b038116611ed5576040805162461bcd60e51b81526020600482015260096024820152680848288be929c849eb60bb1b604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b03929092169190911790555050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052611f53908590611f84565b50505050565b6000611f788888888888886000015189602001518a604001518a612101565b98975050505050505050565b6060611fd9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166123149092919063ffffffff16565b8051909150156118c657808060200190516020811015611ff857600080fd5b50516118c65760405162461bcd60e51b815260040180806020018281038252602a815260200180612605602a913960400191505060405180910390fd5b6001600160a01b038216612086576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b0316156120d3576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b6000808a6001600160a01b031663679b6ded898c8a8a8e8f8c8c8c6040518a63ffffffff1660e01b815260040180896001600160a01b03166001600160a01b03168152602001888152602001878152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156121c85781810151838201526020016121b0565b50505050905090810190601f1680156121f55780820380516001836020036101000a031916815260200191505b5099505050505050505050506020604051808303818588803b15801561221a57600080fd5b505af115801561222e573d6000803e3d6000fd5b50505050506040513d602081101561224557600080fd5b81019080805190602001909291905050509050808a6001600160a01b03168a6001600160a01b03167fc1d1490cf25c3b40d600dfb27c7680340ed1ab901b7e8f3551280968a3b372b0866040518080602001828103825283818151815260200191508051906020019080838360005b838110156122cc5781810151838201526020016122b4565b50505050905090810190601f1680156122f95780820380516001836020036101000a031916815260200191505b509250505060405180910390a49a9950505050505050505050565b6060612323848460008561232b565b949350505050565b60608247101561236c5760405162461bcd60e51b81526004018080602001828103825260268152602001806125b46026913960400191505060405180910390fd5b61237585611856565b6123c6576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106124055780518252601f1990920191602091820191016123e6565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612467576040519150601f19603f3d011682016040523d82523d6000602084013e61246c565b606091505b5091509150611ddf82828660608315612486575081611a6e565b8251156124965782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156124e05781810151838201526020016124c8565b50505050905090810190601f16801561250d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061255c57805160ff1916838001178555612589565b82800160010185558215612589579182015b8281111561258957825182559160200191906001019061256e565b50612595929150612599565b5090565b610b0191905b80821115612595576000815560010161259f56fe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4d696e7420616e642063616c6c20676173206c6566742063616c63756c6174696f6e20756e6465666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a264697066735822122019ceeb26da6c6e7a9b098d603c40659012ee0f3258fb8de32d52f955c3061ad464736f6c634300060b0033'

export class L1WethGateway__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L1WethGateway> {
    return super.deploy(overrides || {}) as Promise<L1WethGateway>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L1WethGateway {
    return super.attach(address) as L1WethGateway
  }
  connect(signer: Signer): L1WethGateway__factory {
    return super.connect(signer) as L1WethGateway__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): L1WethGatewayInterface {
    return new utils.Interface(_abi) as L1WethGatewayInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1WethGateway {
    return new Contract(address, _abi, signerOrProvider) as L1WethGateway
  }
}
