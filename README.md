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
    "OWNERNAME": "DUBOW ARLENE C",
    "ADDRESS": "08930 KREWSTOWN RD     312",
    "BRT_NUM": "888630050"
  },
  {
    "OWNERNAME": "DUBOW MILTON",
    "ADDRESS": "00816 N 19TH ST",
    "BRT_NUM": "151053700"
  },
  {
    "OWNERNAME": "DUBOW MILTON",
    "ADDRESS": "00815 N UBER ST",
    "BRT_NUM": "151060500"
  },
  {
    "OWNERNAME": "DUBOW MILTON",
    "ADDRESS": "00817 N UBER ST",
    "BRT_NUM": "151060600"
  },
  {
    "OWNERNAME": "DUBOW MILTON",
    "ADDRESS": "00808 N 19TH ST",
    "BRT_NUM": "884461950"
  },
  {
    "OWNERNAME": "DUBOW MILTON",
    "ADDRESS": "00814 N 19TH ST",
    "BRT_NUM": "884461955"
  },
  {
    "OWNERNAME": "DUBOW NORMAN",
    "ADDRESS": "00432 ARLINGTON ST",
    "BRT_NUM": "183193100"
  },
  {
    "OWNERNAME": "DUBOW NORMAN",
    "ADDRESS": "02448 N LAWRENCE ST",
    "BRT_NUM": "191270700"
  },
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
    "OWNERNAME": "DUBOWSKI MILEC",
    "ADDRESS": "04100 KNORR ST       E",
    "BRT_NUM": "552155200"
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
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231359,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2012",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231358,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2011",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231357,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2010",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231356,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2009",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231355,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2008",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231354,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2007",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231353,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2006",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231352,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2005",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231351,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2004",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231350,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2003",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231349,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2002",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
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
    "ID": 2231348,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2001",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231349,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2002",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231350,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2003",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231351,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2004",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231352,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2005",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231353,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2006",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231354,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2007",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231355,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2008",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231356,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2009",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231357,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2010",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231358,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2011",
    "PRINCIPAL": 0,
    "INTEREST": 0,
    "PENALTY": 0
  },
  {
    "STATUS": "",
    "LIEN": "",
    "TOTAL": 0,
    "OTHER": 0,
    "ID": 2231359,
    "BRT_NUM": "214116406",
    "ADDRESS": "08605 THOMAS MILL DR",
    "OWNERNAME": "DUBOW ROBERT",
    "TAXYEAR": "2012",
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
