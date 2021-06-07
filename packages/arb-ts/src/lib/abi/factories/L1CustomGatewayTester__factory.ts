/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { L1CustomGatewayTester } from '../L1CustomGatewayTester'

export class L1CustomGatewayTester__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<L1CustomGatewayTester> {
    return super.deploy(overrides || {}) as Promise<L1CustomGatewayTester>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L1CustomGatewayTester {
    return super.attach(address) as L1CustomGatewayTester
  }
  connect(signer: Signer): L1CustomGatewayTester__factory {
    return super.connect(signer) as L1CustomGatewayTester__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1CustomGatewayTester {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as L1CustomGatewayTester
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
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
        name: '_transferId',
        type: 'uint256',
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
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'InboundTransferFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
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
        name: '_transferId',
        type: 'uint256',
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
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'OutboundTransferInitiated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Address',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'l2Address',
        type: 'address',
      },
    ],
    name: 'TokenSet',
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
    stateMutability: 'nonpayable',
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
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
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
    name: 'l1ToL2Token',
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
        name: '_token',
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
    inputs: [
      {
        internalType: 'address',
        name: 'l2Address',
        type: 'address',
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
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'registerTokenToL2',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
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
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506113f1806100206000396000f3fe6080604052600436106100915760003560e01c8063c0c53b8b11610059578063c0c53b8b1461031e578063d2ce7d6514610365578063f26bdead146103ff578063f887ea4014610456578063fb0e722b1461046b57610091565b80632db09c1c146100965780632e567b36146100c75780638a2dc014146101df578063a0c76a9614610212578063a7e28d48146102eb575b600080fd5b3480156100a257600080fd5b506100ab610480565b604080516001600160a01b039092168252519081900360200190f35b3480156100d357600080fd5b5061016a600480360360a08110156100ea57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561012c57600080fd5b82018360208201111561013e57600080fd5b803590602001918460018302840111600160201b8311171561015f57600080fd5b50909250905061048f565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101a457818101518382015260200161018c565b50505050905090810190601f1680156101d15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101eb57600080fd5b506100ab6004803603602081101561020257600080fd5b50356001600160a01b031661065d565b34801561021e57600080fd5b5061016a600480360360a081101561023557600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561027757600080fd5b82018360208201111561028957600080fd5b803590602001918460018302840111600160201b831117156102aa57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610678945050505050565b3480156102f757600080fd5b506100ab6004803603602081101561030e57600080fd5b50356001600160a01b0316610860565b34801561032a57600080fd5b506103636004803603606081101561034157600080fd5b506001600160a01b0381358116916020810135821691604090910135166108b8565b005b61016a600480360360c081101561037b57600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b8111156103c157600080fd5b8201836020820111156103d357600080fd5b803590602001918460018302840111600160201b831117156103f457600080fd5b5090925090506108c8565b34801561040b57600080fd5b506104446004803603608081101561042257600080fd5b506001600160a01b038135169060208101359060408101359060600135610a5b565b60408051918252519081900360200190f35b34801561046257600080fd5b506100ab610b2c565b34801561047757600080fd5b506100ab610b3b565b6000546001600160a01b031681565b6060610499610b4a565b6104e5576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b60006060848460408110156104f957600080fd5b81359190810190604081016020820135600160201b81111561051a57600080fd5b82018360208201111561052c57600080fd5b803590602001918460018302840111600160201b8311171561054d57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509698509196506105aa9550506001600160a01b038e1693508b92508a91505063ffffffff610b5b16565b81876001600160a01b0316896001600160a01b03167f179a84706122b1b806f7d61c28c5caef276b7ff474ae596df3cad4bbaf0eb97d8c8a8a8a60405180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f191690920182900397509095505050505050a45050604080516020810190915260008152979650505050505050565b6003602052600090815260409020546001600160a01b031681565b606080604051806020016040528060008152509050632e567b3660e01b878787878588604051602001808060200180602001838103835285818151815260200191508051906020019080838360005b838110156106df5781810151838201526020016106c7565b50505050905090810190601f16801561070c5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561073f578181015183820152602001610727565b50505050905090810190601f16801561076c5780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152908290526001600160a01b03808c16602484019081528b82166044850152908a1660648401526084830189905260a060a48401908152825160c48501528251929850909650945060e4909101925060208601915080838360005b838110156107ec5781810151838201526020016107d4565b50505050905090810190601f1680156108195780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a1699909917909852509597505050505050505095945050505050565b600061086a610bad565b6108a9576040805162461bcd60e51b815260206004820152600b60248201526a27a7262cafa927aaaa22a960a91b604482015290519081900360640190fd5b6108b282610bbe565b92915050565b6108c3838383610bdc565b505050565b60606108d2610bad565b610911576040805162461bcd60e51b815260206004820152600b60248201526a27a7262cafa927aaaa22a960a91b604482015290519081900360640190fd5b6000806000606061095787878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610ca492505050565b919550925090506109796001600160a01b038d1685308d63ffffffff610e6916565b60606109888d868e8e86610678565b905061099785848c8c85610ec9565b935050505080896001600160a01b0316836001600160a01b03167f9c003a9d1163eca79021710dcd5d9f657218bf2bd67aaa13389009a6047894a88d8c8a8a60405180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f191690920182900397509095505050505050a46040805160208082019390935281518082039093018352810190529998505050505050505050565b6000610a6633610fcf565b610aaa576040805162461bcd60e51b815260206004820152601060248201526f135554d517d09157d0d3d395149050d560821b604482015290519081900360640190fd5b3360008181526003602090815260409182902080546001600160a01b038a166001600160a01b0319909116811790915582516024810185905260448082019290925283518082039092018252606401909252810180516001600160e01b0316630e8dde7360e01b17905290610b229084878785610ec9565b9695505050505050565b6001546001600160a01b031681565b6002546001600160a01b031681565b6000546001600160a01b0316331490565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526108c3908490610fd5565b6001546001600160a01b0316331490565b6001600160a01b039081166000908152600360205260409020541690565b6001600160a01b038216610c24576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b610c2e8383611086565b6001600160a01b038116610c75576040805162461bcd60e51b81526020600482015260096024820152680848288be929c849eb60bb1b604482015290519081900360640190fd5b600180546001600160a01b039384166001600160a01b0319918216179091556002805492909316911617905550565b6000806060610cb1610bad565b15610d8c57838060200190516040811015610ccb57600080fd5b815160208301805160405192949293830192919084600160201b821115610cf157600080fd5b908301906020820185811115610d0657600080fd5b8251600160201b811182820188101715610d1f57600080fd5b82525081516020918201929091019080838360005b83811015610d4c578181015183820152602001610d34565b50505050905090810190601f168015610d795780820380516001836020036101000a031916815260200191505b5060405250929550909250610d92915050565b50339150825b808060200190516040811015610da757600080fd5b815160208301805160405192949293830192919084600160201b821115610dcd57600080fd5b908301906020820185811115610de257600080fd5b8251600160201b811182820188101715610dfb57600080fd5b82525081516020918201929091019080838360005b83811015610e28578181015183820152602001610e10565b50505050905090810190601f168015610e555780820380516001836020036101000a031916815260200191505b506040525095979296509094509092505050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052610ec3908590610fd5565b50505050565b60008054604051835183926060926001600160a01b0390911691869190819060208401908083835b60208310610f105780518252601f199092019160209182019101610ef1565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610f72576040519150601f19603f3d011682016040523d82523d6000602084013e610f77565b606091505b509150915081610fc0576040805162461bcd60e51b815260206004820152600f60248201526e13d5551093d5539117d49155915495608a1b604482015290519081900360640190fd5b50610539979650505050505050565b3b151590565b606061102a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166111529092919063ffffffff16565b8051909150156108c35780806020019051602081101561104957600080fd5b50516108c35760405162461bcd60e51b815260040180806020018281038252602a815260200180611392602a913960400191505060405180910390fd5b6001600160a01b0382166110d7576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b031615611124576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b6060611161848460008561116b565b90505b9392505050565b6060824710156111ac5760405162461bcd60e51b815260040180806020018281038252602681526020018061136c6026913960400191505060405180910390fd5b6111b585610fcf565b611206576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106112455780518252601f199092019160209182019101611226565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146112a7576040519150601f19603f3d011682016040523d82523d6000602084013e6112ac565b606091505b50915091506112bc8282866112c7565b979650505050505050565b606083156112d6575081611164565b8251156112e65782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611330578181015183820152602001611318565b50505050905090810190601f16801561135d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220aa5c621c39d09fd0d7b2ee3abd8a01ee1e7fc9f15e181c64edf9ec96a2c227cd64736f6c634300060b0033'
