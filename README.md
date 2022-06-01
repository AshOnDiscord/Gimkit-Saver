# Gimkit Saver

Allows you to save and access answers and questions for the popular learning game Gimkit.

## Info

Every input is **CASE SENSITIVE**.
For any current shortcut, you must still be on the **choice select menu**. You **CANNOT** use it on the menu after you submit your choice. You **cannot** override a question/answer if you incorrectly set it.

Copy and paste `script.js` in your console if you can access dev tools. Otherwise, use `bookmarklet. js`(to use bookmarklets you must drag the script to your bookmark bar and click on it to run it). Run the script once you are in the game(not the waiting menu).

### Set:

Enter the question or `current` to set the current question.
Enter the correct choice(text not the button number) or use `current 1` for the first button(top-left), `current 2` for the second button(top-right), `current 3` for the third button(bottom-left), or `current 4` for the last button(bottom-right). You can just use `current` for text inputs to set the answer to the current value in the box.

### Get:

#### Btns:

The correct choice will become black.

#### Text Inputs:

The function will default to `copy` if the answer is invalid.
`copy` you must copy it from the alert. It does **NOT** automatically copy to your clipboard  
`set` you must input something into the box to submit(just use space).

## To-Do:

- Make inputs case insensitive.
- Allow default settings.
- Revamp UI.
- Allow a discrete alert shower in the bottom corner of the screen instead of using alerts.
- Allow a discrete input bot in the bottom corner of the screen instead of using input alerts.
- Maybe set up clipboard API for the copy option.
- Set an option to replace the highlighting of the correct option for a discrete answer box in the bottom corner of the screen.
- Input answers and questions(mainly for Gimkit collab).
- Better code.
- A toggle to disable and enable the script (technically only the UI).
- Plus more.

Will I do any of these? No.
