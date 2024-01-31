# 2048

2048, a web game crafted using vanilla JavaScript, offers players an engaging puzzle experience. Tasked with merging numbered tiles, players employ directional moves to combine tiles of matching values, aiming to achieve the coveted 2048 tile. The game's minimalist design and straightforward mechanics highlight the elegance of JavaScript's capabilities

## Technologies Used

The Landing Page was built using the following technologies:

### -HTML

### -SASS

### -JavaScript

## [DEMO LINK](https://zibi95.github.io/js_2048_game/)

## ![Preview](./src/images/reference.png)

## Rules

1. The game field is 4 x 4
2. Each cell can be empty or contain one of the numbers: 2, 4, 8 ... 2^n
3. The player can move cells with keyboard arrows
4. All the numbers should be moved in the selected direction until all empty cells are filled in
   - 2 equal cells should be merged into a doubled number
   - The merged cell can’t be merged twice during one move
5. The move is possible if at least one cell is changed after the move
6. After move 2 or 4 appears in a random empty cell. 4 probability is 10%
7. When 2048 value is displayed in any cell, win message should be shown.
8. The `game over` message should be shown if there are no more available moves.
