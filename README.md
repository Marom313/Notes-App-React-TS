# NotesApp

A simple, private note-taking mobile app built with React Native and TypeScript.

## Overview

**NotesApp** allows users to quickly create, edit, and manage personal notes on their mobile device. Each note can have a title, body, creation date, and location metadata. The app is designed with privacy in mind—your notes are only accessible to you.

## Features

- 📒 **Create, Edit, and Delete Notes:** Add unlimited notes, edit their content, or remove them if no longer needed.
- 🔒 **User Authentication:** Secure sign-up and login using Firebase Authentication.
- 🗂️ **Personal Storage:** Notes are linked to your user account and stored securely on your device using Realm database.
- 🗺️ **Location & Media Ready:** Each note can store location coordinates and an image path (future enhancements possible).
- 🧭 **Modern UI:** Clean, user-friendly interface with easy navigation.
- 🔄 **Fast & Offline:** Notes are saved locally for instant access, even without an internet connection.

## Tech Stack

- **React Native** (for cross-platform mobile UI)
- **TypeScript** (type safety)
- **Realm** (local mobile database)
- **Firebase** (user authentication)
- **React Navigation** (screen navigation)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npm install -g expo-cli`)
- Android/iOS device or simulator

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Marom313/NotesApp.git
   cd NotesApp
   ```

2. **Install dependencies:**
   ```sh
   yarn install
   # or
   npm install
   ```

3. **Start the project:**
   ```sh
   expo start
   ```

4. **Run on your device:**
   - Use the Expo Go app (Android/iOS) to scan the QR code.
   - Or run in an emulator (Android Studio or Xcode).

### Firebase Setup

> ℹ️ The app comes pre-configured with a Firebase project. If you want to use your own Firebase instance, update the settings in `src/services/firebase.ts` with your credentials.

### Realm Database

- Notes are stored locally and are **not shared** between users or devices.
- The Realm schema is defined in `src/models/realm/note.realm.ts`.

## Folder Structure

```
src/
  ├── models/         # Type definitions and Realm schemas
  ├── services/       # Database, Firebase, and other services
  ├── viewmodels/     # State management logic (hooks)
  ├── views/          # UI screens
  ├── widgets/        # Reusable UI components
  └── navigation/     # Navigation setup
```

## Screenshots

<!-- (Add screenshots of the main screen and note editor here) -->

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is private and currently does not specify a license.

---

> **Author:** [Marom313](https://github.com/Marom313)
