/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.29.1
  Forc version: 0.32.2
  Fuel-Core version: 0.15.1
*/

import { Interface, Contract } from "fuels";
import type { Provider, BaseWalletLocked, AbstractAddress } from "fuels";
import type { ContractAbi, ContractAbiInterface } from "../ContractAbi";

const _abi = {
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "enum FoodType",
      "components": [
        {
          "name": "tomatoes",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "enum Identity",
      "components": [
        {
          "name": "Address",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "ContractId",
          "type": 6,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "enum InvalidError",
      "components": [
        {
          "name": "IncorrectAssetId",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "NotEnoughTokens",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "SkillAlreadyMax",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "NotEnoughExp",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "NotEnoughSeeds",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "CantHarvest",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "TooEarly",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "struct Address",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "struct ContractId",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "struct Player",
      "components": [
        {
          "name": "farming_skill",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "total_value_sold",
          "type": 8,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "food_type",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 8,
          "typeArguments": null
        }
      ],
      "name": "buy_seeds",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        },
        {
          "name": "payable",
          "arguments": []
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "id",
          "type": 3,
          "typeArguments": null
        },
        {
          "name": "item",
          "type": 2,
          "typeArguments": null
        }
      ],
      "name": "get_item_amount",
      "output": {
        "name": "",
        "type": 8,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "id",
          "type": 3,
          "typeArguments": null
        }
      ],
      "name": "get_planted_seeds_length",
      "output": {
        "name": "",
        "type": 8,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "id",
          "type": 3,
          "typeArguments": null
        }
      ],
      "name": "get_player",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "id",
          "type": 3,
          "typeArguments": null
        },
        {
          "name": "item",
          "type": 2,
          "typeArguments": null
        }
      ],
      "name": "get_seed_amount",
      "output": {
        "name": "",
        "type": 8,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "index",
          "type": 8,
          "typeArguments": null
        }
      ],
      "name": "harvest",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "level_up",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "new_player",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "food_type",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 8,
          "typeArguments": null
        }
      ],
      "name": "plant_seeds",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "food_type",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 8,
          "typeArguments": null
        }
      ],
      "name": "sell_item",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": 0,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 1,
      "loggedType": {
        "name": "",
        "type": 8,
        "typeArguments": null
      }
    },
    {
      "logId": 2,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 3,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 4,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 5,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 6,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 7,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 8,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": []
}

export class ContractAbi__factory {
  static readonly abi = _abi
  static createInterface(): ContractAbiInterface {
    return new Interface(_abi) as unknown as ContractAbiInterface
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: BaseWalletLocked | Provider
  ): ContractAbi {
    return new Contract(id, _abi, walletOrProvider) as unknown as ContractAbi
  }
}