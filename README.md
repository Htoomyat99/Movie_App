# 🎬 Movie App

A mobile movie application built with **React Native**, using data from **The Movie Database (TMDB) API**.  
Users can explore trending and top-rated movies, search for titles, and manage their favorite movies.

---

## ✨ Features

### 🏠 Home
- Trending movies displayed in a horizontal slider
- Top-rated movies listed below

### 🎞 Movie Details
- Displays movie title and description
- Movie playback is not supported

### 🔍 Search
- Search bar with popular movie suggestions
- Shows results dynamically based on user input

### ❤️ Favorites
- Save movies to favorites
- View saved favorites in a dedicated tab

---

## 🖼 Screenshots

<p align="center">
  <img src="./assets/images/preview1.png" alt="Home Screen" width="160"/>
  <img src="./assets/images/preview2.png" alt="Home Detial Screen" width="160"/>
  <img src="./assets/images/preview3.png" alt="Search Screen" width="160"/>
  <img src="./assets/images/preview4.png" alt="Favorite Screen" width="160"/>
</p>

> 📌 Place your screenshots inside a `screenshots` folder in the project root.

---

## 🛠 Tech Stack

- React Native
- React Navigation
- Redux Toolkit
- MMKV (Local Storage)
- TMDB API

---

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using
[`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the
> [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup)
> instructions till the "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_
React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
