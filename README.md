# React Series Challenge

The output of this challenge is to create a Giphy Client.

- What we are expecting from you is
- Use Giphy API: https://developers.giphy.com/docs
- Apply the concepts that you learned along the - course
- For styling, you must use styled components
- Use enzyme and jest for testing
- Use React Router and React 16 (already included - in the boilerplate)
- Use redux saga for API requests
- Use redux as your global/local state

## Delivery
- Home View
  - [x] It displays the trending GIFs using Giphy Trending API
  - [x] It has a search bar, which uses Giphy Search API
  - [x] Each gif may be saved as favorite in the redux state, and also can be removed from the same call to action
  - [x] Each gif should display if it is already marked as favorite

- Your Favorites Gifs View
  - [x] It displays the Gifs that you previously selected, which comes from the redux state
  - [x] It has a search bar, which filters from the redux state
  - [x] Each gif may be removed from favorite in the redux state, and
  - [x] Each gif should display if it is already marked as favorite

- Details View
  - [x] It displays the selected gif in a bigger size
  - [x] It must show if it is already marked as favorite
  - [x] It may be saved as favorite in the redux state, and also can be removed from the same call to action
  - [x] Route Path must display the id of the gif

- Unit Testing
  - Coverage at least 75%


## Restrictions
- Don’t include extra dependencies (lodash, ramda)
- Don’t include css loaders or css libraries (bootstrap, bulma, semantic)
- Don’t use inline styles
- Don’t use React State
- [x] Application must preserve the state for favorites. This means that if your refresh the page, it must display the ones that you previously selected
- Constantly commit your code

## Code Review
- Fork this project
- You have until March 29th to open a PR against this repo (master branch)
- If you send a commit after the deadline

## TL;DR
1. Use Giphy API
2. Home ListView
  - Trending API
  - Search API
3. Favorite ListView
  - Redux State List
  - Redux State Search
4. Details View
  - Show Selected GIF
5. Unit Testing
  - Coverage 75%
6. Styling
  - Use styled components
