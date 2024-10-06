
Per Scholas ALAB30851 

THE OUTPUT OF THE PROGRAM

Melisas-MBP-3:ALAB30851 admin$ node index.js
array of numbers to work with 

[
    5,  25, 65, 85,  65,  85,
   25,  62, 35, 65, 125, 186,
  152, 325
]
the sum of the array is :1305


the average sum of the array of number
 is : 93.21428571428571


the array of string 

[
  'Luis',    'Manara',
  'Micheal', 'Nesta',
  'Samir',   'Sinchana',
  'Tishana'
]


Longest string is ;Sinchana


Take an array of strings, and a number and return an array of the strings that are longer than the given number.

[
  'Samir',    'Luis',
  'Micheal',  'Tishana',
  'Sinchana', 'Nesta',
  'Manara'
]
array with strings longer than 4
Samir
Micheal
Tishana
Sinchana
Nesta
Manara
print every number between 1 and n without using loops. Use recursion
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
let's make an array of object here

[
  { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
  { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
  { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
  { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
  { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
]
sorted area by age ascending 

[
  { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
  { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
  { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
  { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
  { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
]
Filter Array and removed entries with age > 50 
[
  { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
  { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
  { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' }
]
Alter the key Occupation to new key Job 
[
  { id: '42', name: 'Bruce', job: 'Knight', age: 42 },
  { id: '48', name: 'Barry', job: 'Runner', age: 26 },
  { id: '57', name: 'Bob', job: 'Fry Cook', age: 20 },
  { id: '63', name: 'Blaine', job: 'Quiz Master', age: 59 },
  { id: '7', name: 'Bilbo', job: 'None', age: 112 }
]
Total sum of ages is 259
the average of ages is 51.8




Part 3 

Initial objects to start with

{
  name: 'Bruce Willis',
  Job: 'Actor',
  age: '58',
  updated_at: 1995-01-10T05:00:00.000Z
}


{ name: 'Will Smith', Job: 'Actor' }




the object without age and updated_at keys , the keys will be added with Values , 0 , today's date

{
  name: 'Will Smith',
  Job: 'Actor',
  age: 1,
  updated_at: 2024-10-06T05:22:13.137Z
}


an object with the age and updated_at keys 'fields' 


{
  name: 'Bruce Willis',
  Job: 'Actor',
  age: 59,
  updated_at: 1995-01-10T05:00:00.000Z
}


we made copy of the objects and increment the age here

{
  name: 'Will Smith',
  Job: 'Actor',
  age: 2,
  updated_at: 2024-10-06T05:22:13.137Z
}


{
  name: 'Bruce Willis',
  Job: 'Actor',
  age: 60,
  updated_at: 1995-01-10T05:00:00.000Z
}


 the updated date in  copies 

{
  name: 'Will Smith',
  Job: 'Actor',
  age: 2,
  updated_at: 1999-07-01T16:00:00.000Z
}


{
  name: 'Bruce Willis',
  Job: 'Actor',
  age: 60,
  updated_at: 2024-10-06T05:22:13.138Z
}


let's see what has changed in the original copies 

{
  name: 'Will Smith',
  Job: 'Actor',
  age: 2,
  updated_at: 1999-07-01T16:00:00.000Z
}


{
  name: 'Bruce Willis',
  Job: 'Actor',
  age: 60,
  updated_at: 2024-10-06T05:22:13.138Z
}


 based on the output , the original copies updated_at field has been also updated , not what we want here
     we want to use different approach on how to make copy  of an objects , example hard copy 
Melisas-MBP-3:ALAB30851 admin$ 