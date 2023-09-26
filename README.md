# Harry Potter Quiz

- AmIResponsive image here

Intro text here, brief overview of project with project aims and my target audience.

## Current Features

### Header/Navbar

- 3 links
- Site logo
- Custom hamburger menu in mobile view

### Home Screen

- Call to action Enter button
- Attention grabbing, Harry Potter themed background
- Intro text/Brief overview of what to expect from this website

### Home Popup

- Game info
- Important information to know
- Game instructions
- Background is blurred out as not to take attention away from the popup

### Quiz Section

- Smooth sideway transition from home screen
- Quiz header contains quiz title, timer, timeline and current score
- Main body contains the current question along with the 4 multiple choice options
- Quiz footer contains the question count, the sound controls along with the next button which becomes available only when an answer has been selected

### Audio

- Game implements sounds for selecting a correct or incorrect answer
- Also background music that plays when on the main quiz section
- Background music automatically starts but is muted by default for better ui.
- Sounds are on by default right now but soon to be changed to muted as per the background music.
- Music and sounds can be toggled on or off using the buttons at the bottom of the quiz box.
- Warning that the game contains sounds in the home screen popup to give users a fair warning and for better user experience.

### Timer & Timeline

- Timer automatically count down from 15 on each question.
- This is displayed in the quiz header so it is clear for the user
- If it reaches zero, the options are disabled and the correct answer is automatically highlighted(along with incorrect sound), indicating time has run out.
- If a user makes a choice within alloted time, the timer stops counting down and the text changes from 'time left' to 'time off'.
- Timeline gradually fills in across width of quiz box with the color green at the same pace the timer is going at.
- When option is selected, the timeline stops moving and resets after every question.
- When 3 seconds left on timer(timeline is so many px away from full length of quiz box) the color changes from green to red to indicate to user that theres very little time left and to present an imminent warning of them running out of time.
- Depending on what screen size the user is playing on, affects how fast the timeline progresses. The smaller the screen, the faster I had to make the timeline move.

### Result Section

- Interactive text which changes depending on your final score
- Circular progress bar. Shows users final score in a percentage which automatically fills up in the progress bar to match the percentage number displayed in the centre of this component.
- Also displays how many questions you answered correctly out of the total beneath the progress bar
- Try again and Back to home buttons redirect user to either play again or return to the home screen.
