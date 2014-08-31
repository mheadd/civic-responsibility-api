# Civic Responsibility API

An API to support the lookup of property tax balances on properties in the City of Philadelphia.

## Usage

* Clone this repo.
* Run <code>npm install</code> to install required modules.
* Get the 'Full OPA and Revenue Database Dump' Sqlite file from [Philadelinquency](http://www.philadelinquency.com/). Place in the <code>/data</code> diretory.
* May want to add an index on the database to optimize one of the queries (e.g., <code>CREATE INDEX owner ON dbo_REVENUESCAN ('OWNERNAME');</code>).

## API

* Path: /name/{owner name}
* Example: /name/dubow
* Response:

```json
[
  {
    "OWNERNAME": "DUBOW ROBERT",
    "ADDRESS": "08605 THOMAS MILL DR",
    "BRT_NUM": "214116406"
  },
  {
    "OWNERNAME": "DUBOWSKI MARIA",
    "ADDRESS": "08391 LANGDON ST",
    "BRT_NUM": "562338400"
  },
  {
    "OWNERNAME": "DUBOWSKI VICTOR",
    "ADDRESS": "06715 MARSDEN ST",
    "BRT_NUM": "412383300"
  }
]


```

* Path: /address/{property address}
* Example: /address/08605%20THOMAS%20MILL%20DR
* Response:

```json
[
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231361,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2014",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231360,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2013",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  ...
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231348,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2001",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  }
]


```

* Path: /number/{brt number}
* Example: /number/214116406
* Response:

```json
[
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231361,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2014",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231360,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2013",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  ...
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231348,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2001",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  }
]

```

* Path: /number/{brt number}?total=true
* Example: /number/214116406?total=true
* Response:

```json
[
  {
    "ADDRESS": "08605 THOMAS MILL DR",
    "TOTAL AMOUNT DUE": 0,
    "OWNERNAME": "DUBOW ROBERT",
    "BRT_NUM": "214116406"
  }
]

```
