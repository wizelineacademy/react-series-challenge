# React Series Challenge

The output of this challenge is to create a Giphy Client. You will be applying the concepts that you learned along the course.

#### What we are expecting from you is:
- Use [Giphy API](https://developers.giphy.com/docs)
- Use styled components for styling
- Use enzyme and jest for testing
- Use React Router and React 16 (already included in the boilerplate code)
- Use Redux Saga for API requests
- Use Redux for your application's state management 

## Delivery

### First Delivery (due July 8th 23:59pm)
- Home View
  - It displays the trending GIFs using Giphy Trending API.
  - It has a search bar, which uses Giphy Search API.
  - Each GIF may be saved as favorite in the Redux state, and also can be removed from the same call to action.
  - Each GIF should display if it is already marked as favorite.

- Your Favorites GIFs View
  - It displays the GIFs that you previously selected, which comes from the Redux state.
  - It has a search bar, which filters from the Redux state.
  - Each GIF may be removed from favorite in the Redux state.

At this point, don't worry about styling nor tests, you will be focused on those in the next delivery.

### Second Delivery (due July 11th 23:59pm)
- Style your views using styled components.
  - Remove all CSS from the boilerplate code.

- Unit Testing
  - Create tests for your application
  - Coverage must be at least 70%

## Restrictions
- Don’t include extra dependencies (lodash, ramda).
- Don’t include css loaders or css libraries (bootstrap, bulma, semantic).
- Don’t use inline styles.
- Minimize the use of React Components internal state.
- Application must preserve the state for favorites. This means that if your refresh the page, it must display the ones that you previously selected.
- Constantly commit your code.

## Code Review
- Fork this project.
- You must open a pull request (PR) against this repo (master branch) for each of your deliveries.
- If you send a commit after the deadline we won't take it into account for the evaluation.
- All feedback will be given via your PR.

## TL;DR
1. Use Giphy API
2. Home ListView
  - Trending API
  - Search API
3. Favorite ListView
  - Redux State List
  - Redux State Search
5. Unit Testing
  - Coverage 70%
6. Styling
  - Use styled components
