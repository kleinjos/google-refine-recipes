[
  {
    "op": "core/column-split",
    "description": "Split column Column 1 by separator",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Column 1",
    "guessCellType": true,
    "removeOriginalColumn": true,
    "mode": "separator",
    "separator": "=\"",
    "regex": false,
    "maxColumns": 0
  },
  {
    "op": "core/column-split",
    "description": "Split column Column 1 2 by separator",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Column 1 2",
    "guessCellType": true,
    "removeOriginalColumn": true,
    "mode": "separator",
    "separator": "\">",
    "regex": false,
    "maxColumns": 0
  },
  {
    "op": "core/column-split",
    "description": "Split column Column 1 2 2 by separator",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Column 1 2 2",
    "guessCellType": true,
    "removeOriginalColumn": true,
    "mode": "separator",
    "separator": "</a>, ",
    "regex": false,
    "maxColumns": 0
  },
  {
    "op": "core/column-split",
    "description": "Split column Column 1 2 2 2 by separator",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Column 1 2 2 2",
    "guessCellType": true,
    "removeOriginalColumn": true,
    "mode": "separator",
    "separator": "</li>",
    "regex": false,
    "maxColumns": 0
  },
  {
    "op": "core/column-removal",
    "description": "Remove column Column 1 1",
    "columnName": "Column 1 1"
  },
  {
    "op": "core/column-addition",
    "description": "Create column URL at index 1 based on column Column 1 2 1 using expression grel:\"YOUR-URL-HERE\"+value",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "newColumnName": "URL",
    "columnInsertIndex": 1,
    "baseColumnName": "Column 1 2 1",
    "expression": "grel:\"YOUR-URL-HERE/\"+value",
    "onError": "set-to-blank"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column Column 1 2 2 2 1 to Date",
    "oldColumnName": "Column 1 2 2 2 1",
    "newColumnName": "Date"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column Column 1 2 2 1 to Title",
    "oldColumnName": "Column 1 2 2 1",
    "newColumnName": "Title"
  },
  {
    "op": "core/column-addition",
    "description": "Create column -URL at index 2 based on column URL using expression grel:replace(value,\"/misc/../\",\"/\")",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "newColumnName": "-URL",
    "columnInsertIndex": 2,
    "baseColumnName": "URL",
    "expression": "grel:replace(value,\"/misc/../\",\"/\")",
    "onError": "set-to-blank"
  },
  {
    "op": "core/column-removal",
    "description": "Remove column URL",
    "columnName": "URL"
  },
  {
    "op": "core/column-removal",
    "description": "Remove column Column 1 2 1",
    "columnName": "Column 1 2 1"
  },
  {
    "op": "core/column-addition",
    "description": "Create column url2 at index 1 based on column -URL using expression grel:replace(value,\"YOUR-URL-HEREhttp:\",\"http:\")",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "newColumnName": "url2",
    "columnInsertIndex": 1,
    "baseColumnName": "-URL",
    "expression": "grel:replace(value,\"YOUR-URL-HEREhttp:\",\"http:\")",
    "onError": "set-to-blank"
  },
  {
    "op": "core/column-removal",
    "description": "Remove column -URL",
    "columnName": "-URL"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column url2 to URL",
    "oldColumnName": "url2",
    "newColumnName": "URL"
  },
  {
    "op": "core/row-removal",
    "description": "Remove rows",
    "engineConfig": {
      "facets": [
        {
          "invert": false,
          "expression": "isBlank(value)",
          "selectError": false,
          "omitError": false,
          "selectBlank": false,
          "name": "Date",
          "omitBlank": false,
          "columnName": "Date",
          "type": "list",
          "selection": [
            {
              "v": {
                "v": true,
                "l": "true"
              }
            }
          ]
        },
        {
          "invert": false,
          "expression": "isBlank(value)",
          "selectError": false,
          "omitError": false,
          "selectBlank": false,
          "name": "URL",
          "omitBlank": false,
          "columnName": "URL",
          "type": "list",
          "selection": [
            {
              "v": {
                "v": true,
                "l": "true"
              }
            }
          ]
        }
      ],
      "mode": "row-based"
    }
  },
  {
    "op": "core/row-flag",
    "description": "Flag rows",
    "engineConfig": {
      "facets": [
        {
          "invert": false,
          "expression": "isBlank(value)",
          "selectError": false,
          "omitError": false,
          "selectBlank": false,
          "name": "URL",
          "omitBlank": false,
          "columnName": "URL",
          "type": "list",
          "selection": [
            {
              "v": {
                "v": false,
                "l": "false"
              }
            }
          ]
        },
        {
          "invert": false,
          "expression": "isBlank(value)",
          "selectError": false,
          "omitError": false,
          "selectBlank": false,
          "name": "Date",
          "omitBlank": false,
          "columnName": "Date",
          "type": "list",
          "selection": [
            {
              "v": {
                "v": true,
                "l": "true"
              }
            }
          ]
        }
      ],
      "mode": "row-based"
    },
    "flagged": true
  }
]