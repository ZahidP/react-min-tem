var data = {
  "Doctors": [
    {
      "key":"doc123",
      "login":"mrmanager",
      "password": "password",
      "name":"mr.doctor",
      "patients":["pat123","pat124"]
    },
    {
      "key":"doc123",
      "login":"drspaceman",
      "password": "password",
      "name":"Doctor Spaceman",
      "patients":["pat123","pat125","pat126"]
    }
  ],
  "Patients": [
    {
      "key":"pat123",
      "login":"whatsupdoc",
      "password": "password",
      "name":"John Dough",
      "dob":"11-01-1989",
      "location":"1234 summer sugar lane",
      "visit_history":[
        {
          "key":"128abc", "date":"03-16-2016", "notes":"Still good health for this guy."
        },
        {
          "key":"167abc", "date":"02-16-2016", "notes":"Good health for this guy."
        }
      ],
      "metrics": {
          "A": [
            {'number':85, 'visit':1},
            {'number':89, 'visit':2},
            {'number':75, 'visit':3},
            {'number':78, 'visit':4}
          ],
          "B": [
            {'number':155, 'visit':1},
            {'number':159, 'visit':2},
            {'number':165, 'visit':3},
            {'number':168, 'visit':4}
          ],
      },
      "documents":["doc_1_pat123"]
    },
    {
      "key":"pat124",
      "login":"whatsupdoc",
      "password": "password",
      "name":"Jane Dough",
      "dob":"11-01-1989",
      "location":"1234 summer sugar lane",
      "visit_history":[
        {
          "key":"139abc", "date":"03-18-2016", "notes":"Good health for this lady."
        }
      ],
      "documents":["doc_1_pat124"]
    },
    {
      "key":"pat125",
      "login":"whatsupdoc",
      "password": "password",
      "name":"John Doe",
      "dob":"11-01-1988",
      "location":"1235 summer sugar lane",
      "visit_history":[
        {
          "key":"192abc", "date":"03-07-2016", "notes":"Improved blood pressure."
        },
        {
          "key":"196abc", "date":"02-07-2016", "notes":"High blood pressure."
        }
      ],
      "documents":[]
    },
    {
      "key":"pat126",
      "name":"Jane Doe",
      "password": "password",
      "dob":"11-01-1988",
      "location":"1235 summer sugar lane",
      "visit_history":[
        {
          "key":"148abc", "date":"03-01-2016", "notes":"Low blood pressure."
        }
      ],
      "documents":[]
    },
  ],
  "Documents": [

  ]
}

export default data;
