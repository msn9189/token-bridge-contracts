/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { RollupTester, RollupTesterInterface } from '../RollupTester'

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'nodeNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'afterSendAcc',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'afterSendCount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'afterLogAcc',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'afterLogCount',
        type: 'uint256',
      },
    ],
    name: 'NodeConfirmed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'nodeNum',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'parentNodeHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'nodeHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'executionHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'inboxMaxCount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'afterInboxBatchEndCount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'afterInboxBatchAcc',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes32[3][2]',
        name: 'assertionBytes32Fields',
        type: 'bytes32[3][2]',
      },
      {
        indexed: false,
        internalType: 'uint256[4][2]',
        name: 'assertionIntFields',
        type: 'uint256[4][2]',
      },
    ],
    name: 'NodeCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'nodeNum',
        type: 'uint256',
      },
    ],
    name: 'NodeRejected',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'challengeContract',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'asserter',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'challenger',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'challengedNode',
        type: 'uint256',
      },
    ],
    name: 'RollupChallengeStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'machineHash',
        type: 'bytes32',
      },
    ],
    name: 'RollupCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'initialBalance',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'finalBalance',
        type: 'uint256',
      },
    ],
    name: 'UserStakeUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'initialBalance',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'finalBalance',
        type: 'uint256',
      },
    ],
    name: 'UserWithdrawableFundsUpdated',
    type: 'event',
  },
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    inputs: [],
    name: 'STORAGE_GAP_1',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'STORAGE_GAP_2',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: '_stakerMap',
    outputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'latestStakedNode',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountStaked',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'currentChallenge',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'isStaked',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
    ],
    name: 'amountStaked',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'arbGasSpeedLimitPerBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'avmGasSpeedLimitPerBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'baseStake',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'challengeExecutionBisectionDegree',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'challengeFactory',
    outputs: [
      {
        internalType: 'contract IChallengeFactory',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'confirmPeriodBlocks',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
    ],
    name: 'currentChallenge',
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
    name: 'delayedBridge',
    outputs: [
      {
        internalType: 'contract IBridge',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'extraChallengeTimeBlocks',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'firstUnresolvedNode',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAdminFacet',
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
    name: 'getFacets',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
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
        name: 'nodeNum',
        type: 'uint256',
      },
    ],
    name: 'getNode',
    outputs: [
      {
        internalType: 'contract INode',
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
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'getNodeHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'stakerNum',
        type: 'uint256',
      },
    ],
    name: 'getStakerAddress',
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
    name: 'getUserFacet',
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
        internalType: 'bytes32',
        name: '_machineHash',
        type: 'bytes32',
      },
      {
        internalType: 'uint256[4]',
        name: '_rollupParams',
        type: 'uint256[4]',
      },
      {
        internalType: 'address',
        name: '_stakeToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_extraConfig',
        type: 'bytes',
      },
      {
        internalType: 'address[6]',
        name: 'connectedContracts',
        type: 'address[6]',
      },
      {
        internalType: 'address[2]',
        name: '_facets',
        type: 'address[2]',
      },
      {
        internalType: 'uint256[2]',
        name: 'sequencerInboxParams',
        type: 'uint256[2]',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isMaster',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
    ],
    name: 'isStaked',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
    ],
    name: 'isZombie',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastStakeBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'latestConfirmed',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'latestNodeCreated',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
    ],
    name: 'latestStakedNode',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minimumAssertionPeriod',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nodeFactory',
    outputs: [
      {
        internalType: 'contract INodeFactory',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'outbox',
    outputs: [
      {
        internalType: 'contract IOutbox',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
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
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
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
    inputs: [],
    name: 'rollupEventBridge',
    outputs: [
      {
        internalType: 'contract RollupEventBridge',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'sequencerBridge',
    outputs: [
      {
        internalType: 'contract ISequencerInbox',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stakeToken',
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
    name: 'stakerCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'withdrawableFunds',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'zombieNum',
        type: 'uint256',
      },
    ],
    name: 'zombieAddress',
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
    name: 'zombieCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'zombieNum',
        type: 'uint256',
      },
    ],
    name: 'zombieLatestStakedNode',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b5060008054600160ff199182168117909255600b80549091169055600c8190556100386100f7565b610089576040805162461bcd60e51b815260206004820152601460248201527f434f4e5354525543544f525f4e4f545f494e4954000000000000000000000000604482015290519081900360640190fd5b506000600c556100a06001600160e01b036100f716565b156100f2576040805162461bcd60e51b815260206004820152601360248201527f494e56414c49445f434f4e5354525543544f5200000000000000000000000000604482015290519081900360640190fd5b6100ff565b600c54151590565b6115998061010e6000396000f3fe6080604052600436106102555760003560e01c80637ba9534a11610139578063d735e21d116100b6578063e4781e101161007a578063e4781e1014610733578063e8bd492214610748578063ef40a670146107b1578063f33e1fac146107e4578063f51de41b1461080e578063f8d1f1941461082357610264565b8063d735e21d146106ca578063d7445bc8146106df578063d93fe9c4146106f4578063dc72a33b14610709578063dff697871461071e57610264565b806395fcea78116100fd57806395fcea781461064c5780639e8a713f14610661578063ce11e6ab14610676578063d01e66021461068b578063d4f43293146106b557610264565b80637ba9534a146105c55780637f4320ce146105da5780638640ce5f146105ef5780638da5cb5b1461060457806391c657e81461061957610264565b80636177fd18116101d257806369fd251c1161019657806369fd251c146104935780636f791d29146104c6578063715ea22b146104db57806376e7e23b146104f0578063771b2f97146105055780637b6abd9c1461051a57610264565b80636177fd18146103d157806362a82d7d1461040457806363721d6b1461042e57806365f7f80d14610443578063662ea47d1461045857610264565b80634f0f4aa9116102195780634f0f4aa91461033f57806351ed6a30146103695780635c975abb1461037e5780635dbaf68b146103a75780635e8ef106146103bc57610264565b80632e7acfa61461026c5780632f30cabd146102935780633e55c0c7146102c65780633e96576e146102f757806345e38b641461032a57610264565b366102645761026261084d565b005b61026261084d565b34801561027857600080fd5b50610281610867565b60408051918252519081900360200190f35b34801561029f57600080fd5b50610281600480360360208110156102b657600080fd5b50356001600160a01b031661086d565b3480156102d257600080fd5b506102db61088c565b604080516001600160a01b039092168252519081900360200190f35b34801561030357600080fd5b506102816004803603602081101561031a57600080fd5b50356001600160a01b031661089b565b34801561033657600080fd5b506102816108b9565b34801561034b57600080fd5b506102db6004803603602081101561036257600080fd5b50356108bf565b34801561037557600080fd5b506102db6108da565b34801561038a57600080fd5b506103936108e9565b604080519115158252519081900360200190f35b3480156103b357600080fd5b506102db6108f3565b3480156103c857600080fd5b50610281610902565b3480156103dd57600080fd5b50610393600480360360208110156103f457600080fd5b50356001600160a01b0316610908565b34801561041057600080fd5b506102db6004803603602081101561042757600080fd5b5035610930565b34801561043a57600080fd5b5061028161095a565b34801561044f57600080fd5b50610281610960565b34801561046457600080fd5b5061046d610966565b604080516001600160a01b03938416815291909216602082015281519081900390910190f35b34801561049f57600080fd5b506102db600480360360208110156104b657600080fd5b50356001600160a01b0316610981565b3480156104d257600080fd5b506103936109a2565b3480156104e757600080fd5b506102db6109ab565b3480156104fc57600080fd5b506102816109d5565b34801561051157600080fd5b506102816109db565b34801561052657600080fd5b50610262600480360361024081101561053e57600080fd5b81359160208101916001600160a01b0360a083013581169260c081013590911691810190610100810160e082013564010000000081111561057e57600080fd5b82018360208201111561059057600080fd5b803590602001918460018302840111640100000000831117156105b257600080fd5b919350915060c0810161010082016109e1565b3480156105d157600080fd5b50610281610fb6565b3480156105e657600080fd5b50610281610fbc565b3480156105fb57600080fd5b50610281610fc2565b34801561061057600080fd5b506102db610fc8565b34801561062557600080fd5b506103936004803603602081101561063c57600080fd5b50356001600160a01b0316610fd7565b34801561065857600080fd5b50610262611031565b34801561066d57600080fd5b506102db611098565b34801561068257600080fd5b506102db6110a7565b34801561069757600080fd5b506102db600480360360208110156106ae57600080fd5b50356110b6565b3480156106c157600080fd5b506102db6110e5565b3480156106d657600080fd5b506102816110f5565b3480156106eb57600080fd5b506102816110fb565b34801561070057600080fd5b506102db611101565b34801561071557600080fd5b50610281611110565b34801561072a57600080fd5b50610281611116565b34801561073f57600080fd5b5061028161111c565b34801561075457600080fd5b5061077b6004803603602081101561076b57600080fd5b50356001600160a01b0316611122565b604080519586526020860194909452848401929092526001600160a01b0316606084015215156080830152519081900360a00190f35b3480156107bd57600080fd5b50610281600480360360208110156107d457600080fd5b50356001600160a01b031661115e565b3480156107f057600080fd5b506102816004803603602081101561080757600080fd5b503561117c565b34801561081a57600080fd5b506102db6111a4565b34801561082f57600080fd5b506102816004803603602081101561084657600080fd5b50356111b3565b610855610865565b6108656108606111c5565b6112aa565b565b600c5481565b6001600160a01b0381166000908152600a60205260409020545b919050565b6011546001600160a01b031681565b6001600160a01b031660009081526008602052604090206001015490565b60185481565b6000908152600560205260409020546001600160a01b031690565b6017546001600160a01b031681565b600b5460ff165b90565b6014546001600160a01b031681565b600e5490565b6001600160a01b0316600090815260086020526040902060030154600160a01b900460ff1690565b60006007828154811061093f57fe5b6000918252602090912001546001600160a01b031692915050565b60095490565b60015490565b6000806109716110e5565b6109796109ab565b915091509091565b6001600160a01b039081166000908152600860205260409020600301541690565b60005460ff1690565b6000601c6001815481106109bb57fe5b6000918252602090912001546001600160a01b0316905090565b600f5481565b600d5481565b6109e96112ce565b15610a2a576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b610a4d8260005b60200201356001600160a01b03166001600160a01b03166112d6565b610a95576040805162461bcd60e51b8152602060048201526014602482015273119050d15517cc17d393d517d0d3d395149050d560621b604482015290519081900360640190fd5b610aa0826001610a31565b610ae8576040805162461bcd60e51b8152602060048201526014602482015273119050d15517cc57d393d517d0d3d395149050d560621b604482015290519081900360640190fd5b604080516001600160a01b038981166024808401919091528351808403909101815260449092018352602080830180516001600160e01b031663189acdbd60e31b17815293518351600095928801359093169392909182918083835b60208310610b635780518252601f199092019160209182019101610b44565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610bc3576040519150601f19603f3d011682016040523d82523d6000602084013e610bc8565b606091505b5050905080610c10576040805162461bcd60e51b815260206004820152600f60248201526e1190525317d253925517d19050d155608a1b604482015290519081900360640190fd5b6010805485356001600160a01b039081166001600160a01b03199283161792839055601180546020890135831690841617905560128054909216604080890135831691821790935582516319dc7ae560e31b8152600481019190915260016024820152915192169163cee3d7289160448082019260009290919082900301818387803b158015610c9f57600080fd5b505af1158015610cb3573d6000803e3d6000fd5b5050505083600360068110610cc457fe5b601380546001600160a01b0319166001600160a01b0360209390930293909301358216929092179091556010546040805163722dbe7360e11b8152606088013584166004820152600160248201529051919092169163e45b7ce691604480830192600092919082900301818387803b158015610d3f57600080fd5b505af1158015610d53573d6000803e3d6000fd5b50506013546040805163bc49accb60e01b81528d3560048201818152928f0135602483018190526001600160a01b038e81166044850152608060648501908152608485018e90529516965063bc49accb9550909390928d928d928d929160a401848480828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b158015610df257600080fd5b505af1158015610e06573d6000803e3d6000fd5b5050505083600460068110610e1757fe5b601480546001600160a01b03199081166001600160a01b03602094909402949094013583169390931790556015805490921660a08701359091161790556000610e5f8b6112dc565b9050610e6a816113d3565b8935600c556020808b0135600d556040808c0135600e5560608c0135600f55601680546001600160a01b0319166001600160a01b038c811691909117909155604b601855610190601b5560115482516326a407d560e11b8152873560048201529387013560248501529151911691634d480faa91604480830192600092919082900301818387803b158015610efe57600080fd5b505af1158015610f12573d6000803e3d6000fd5b50610f269250601c915086905060026114dc565b50604080518c815290517f4ac0014773275a3dfb58c58539631006301de41998cce7c4f8698d297c88bb2d9181900360200190a1610f626112ce565b610fa9576040805162461bcd60e51b81526020600482015260136024820152721253925512505312569157d393d517d2539255606a1b604482015290519081900360640190fd5b5050505050505050505050565b60035490565b601a5481565b60045490565b6016546001600160a01b031681565b6000805b6009548110156110285760098181548110610ff257fe5b60009182526020909120600290910201546001600160a01b0384811691161415611020576001915050610887565b600101610fdb565b50600092915050565b600061103b611422565b9050336001600160a01b0382161461108b576040805162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b604482015290519081900360640190fd5b5060006019819055601a55565b6013546001600160a01b031681565b6012546001600160a01b031681565b6000600982815481106110c557fe5b60009182526020909120600290910201546001600160a01b031692915050565b6000601c6000815481106109bb57fe5b60025490565b600e5481565b6015546001600160a01b031681565b601b5481565b60075490565b60195481565b6008602052600090815260409020805460018201546002830154600390930154919290916001600160a01b03811690600160a01b900460ff1685565b6001600160a01b031660009081526008602052604090206002015490565b60006009828154811061118b57fe5b9060005260206000209060020201600101549050919050565b6010546001600160a01b031681565b60009081526006602052604090205490565b6000600436101561120b576040805162461bcd60e51b815260206004820152600b60248201526a4e4f5f46554e435f53494760a81b604482015290519081900360640190fd5b6016546001600160a01b03166000811580159061123057506001600160a01b03821633145b6112415761123c6109ab565b611249565b6112496110e5565b905061125d816001600160a01b03166112d6565b6112a4576040805162461bcd60e51b815260206004820152601360248201527215105491d15517d393d517d0d3d395149050d5606a1b604482015290519081900360640190fd5b91505090565b3660008037600080366000845af43d6000803e8080156112c9573d6000f35b3d6000fd5b600c54151590565b3b151590565b600080611332604051806101200160405280600081526020018581526020016000815260200160008152602001600081526020016000801b81526020016000801b81526020014381526020016001815250611447565b6015546040805163d45ab2b560e01b815260048101849052600060248201819052604482018190526064820181905243608483015291519394506001600160a01b039092169263d45ab2b59260a4808201936020939283900390910190829087803b1580156113a057600080fd5b505af11580156113b4573d6000803e3d6000fd5b505050506040513d60208110156113ca57600080fd5b50519392505050565b6000805260056020527f05b8ccbb9d4d8fb16ea74ce3c29a41f1b461fbdaff4714a0d9a8eb05499746bc80546001600160a01b0319166001600160a01b03929092169190911790556001600255565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b6000816000015182602001518360400151846060015185608001518660a001518760c001518860e00151896101000151604051602001808a81526020018981526020018881526020018781526020018681526020018581526020018481526020018381526020018281526020019950505050505050505050604051602081830303815290604052805190602001209050919050565b82805482825590600052602060002090810192821561152f579160200282015b8281111561152f5781546001600160a01b0319166001600160a01b038435161782556020909201916001909101906114fc565b5061153b92915061153f565b5090565b6108f091905b8082111561153b5780546001600160a01b031916815560010161154556fea26469706673582212202e9f1fb1bc820ba6b78c8554ce3903601333741c5c34748e96032870483b76f964736f6c634300060b0033'

export class RollupTester__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RollupTester> {
    return super.deploy(overrides || {}) as Promise<RollupTester>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): RollupTester {
    return super.attach(address) as RollupTester
  }
  connect(signer: Signer): RollupTester__factory {
    return super.connect(signer) as RollupTester__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): RollupTesterInterface {
    return new utils.Interface(_abi) as RollupTesterInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RollupTester {
    return new Contract(address, _abi, signerOrProvider) as RollupTester
  }
}
