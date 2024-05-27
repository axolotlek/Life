# Avatar


```gamification-avatar
image: 
description: |-2
  |           |         | 
  | --------- | ------- |
  | **Level**  | **6** |
  | Points | 42100    |
  ^levelAndPoints
  ```chart
  type: bar
  labels: [Expririence]
  series:
    - title: points reached
      data: [42100]
    - title: points to earn to level up
      data: [7900]
  xMin: 30000
  xMax: 50000
  tension: 0.2
  width: 70%
  labelColors: false
  fill: false
  beginAtZero: false
  bestFit: false
  bestFitTitle: undefined
  bestFitNumber: 0
  stacked: true
  indexAxis: y
  xTitle: "progress"
  legend: false
```

|                  |       |
| ---------------- | ----- |
| **booster factor** | **0** |
^boosterFactor

|                 |         |         | 
| --------------- | ------- | ------- |
| **daily Notes** | *500EP* | **0/2**   |
^dailyNotesChallenge

|                  |          |         | 
| ---------------- | -------- | ------- |
| **weekly Notes** | *2000EP*     |  **0/7**   |
^weeklyNotesChallenge
```chart
type: bar
labels: [days done in a row]
series:
  - title: days to do in a row
    data: [0]
  - title: points to earn to level up
    data: [7]
xMin: 0
xMax: 7
tension: 0.2
width: 40%
labelColors: false
fill: false
beginAtZero: false
bestFit: false
bestFitTitle: undefined
bestFitNumber: 0
stacked: true
indexAxis: y
xTitle: "progress"
legend: false
```

| Level | Count |
| :---: | :---: |
| Maturity 5 |`$=dv.pages().where(p => [5, '5', '5➡️', '5⬇️', '5⬆️'].includes(p.file.frontmatter['note-maturity'])).length`|
| Maturity 4 |`$=dv.pages().where(p => [4, '4', '4➡️', '4⬇️', '4⬆️'].includes(p.file.frontmatter['note-maturity'])).length`|
| Maturity 3 |`$=dv.pages().where(p => [3, '3', '3➡️', '3⬇️', '3⬆️'].includes(p.file.frontmatter['note-maturity'])).length`|
| Maturity 2 |`$=dv.pages().where(p => [2, '2', '2➡️', '2⬇️', '2⬆️'].includes(p.file.frontmatter['note-maturity'])).length`|
| Maturity 1 |`$=dv.pages().where(p => [1, '1', '1➡️', '1⬇️', '1⬆️'].includes(p.file.frontmatter['note-maturity'])).length`|
| Maturity 0 |`$=dv.pages().where(p => [0, '0', '0➡️', '0⬇️', '0⬆️'].includes(p.file.frontmatter['note-maturity'])).length`|



### Badges
#### achieved


#### outstanding
level 5: *Enlightened Novice*
level 10: *Curious Connoisseur*
level 20: *Brainiac Trailblazer*
level 27: *Scholarly Trailblazer*
level 35: *Info Ninja Master*
level 42: *Wise Owl Guru*
level 50: *Einstein Incarnate*
level 60: *Mastermind Sage*
level 75: *Cerebral Maestro*
level 82: *Zen Knowledge Keeper*
level 90: *Grand Archivist Overlord*
level 100: *Omniscient Sage of Everything*



### **note-maturity = 5**
```dataview
List NoteMaturityCount
from ""
Where note-maturity = 5 or note-maturity = "5" or note-maturity = "5➡️" or note-maturity = "5⬆️" or note-maturity = "5⬇️"
```

### **note-maturity = 4**
```dataview
List NoteMaturityCount
from ""
Where note-maturity = 4 or note-maturity = "4" or note-maturity = "4➡️" or note-maturity = "4⬆️" or note-maturity = "4⬇️"
```

### note-maturity = 3
```dataview
List NoteMaturityCount
from ""
Where note-maturity = 3 or note-maturity = "3" or note-maturity = "3➡️" or note-maturity = "3⬆️" or note-maturity = "3⬇️"
```

### note-maturity = 2
```dataview
List NoteMaturityCount
from ""
Where note-maturity = 2 or note-maturity = "2" or note-maturity = "2➡️" or note-maturity = "2⬆️" or note-maturity = "2⬇️"
```

### note-maturity = 1
```dataview
List NoteMaturityCount
from ""
Where note-maturity = 1 or note-maturity = "1" or note-maturity = "1➡️" or note-maturity = "1⬆️" or note-maturity = "1⬇️"
```

### note-maturity = 0
```dataview
List NoteMaturityCount
from ""
Where note-maturity = 0 or note-maturity = "0" or note-maturity = "0➡️" or note-maturity = "0⬆️" or note-maturity = "0⬇️"
```
