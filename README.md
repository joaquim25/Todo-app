# React Todo App

This is a simple React Todo App that allows you to manage your tasks easily. You can add new todos, mark them as completed, edit existing ones, and delete them as needed. This README file provides an overview of the project's structure and functionality.

## Preview
https://github.com/joaquim25/Todo-app/assets/115705731/516013f6-18bc-4192-8545-f8dd922a37de

## Project Structure

The project is organized into several components, each serving a specific purpose:

- `App.jsx`: The main component of the application, which manages the overall structure of the app and holds the state of todos.
- `Header.jsx`: The header component that displays the title of the app.
- `TodoComposer.jsx`: Allows you to compose and add new todos.
- `FunctionalityDock.jsx`: Provides functionality to mark todos as completed, mark all as completed, clear completed todos, and clear all todos.
- `TodoList.jsx`: Displays the list of todos.
- `Todo.jsx`: Represents an individual todo item and allows you to edit, mark as completed, and delete it.
- `Footer.jsx`: Displays a summary of completed and unfinished todos.

## Getting Started

To run this React Todo App locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/react-todo-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-todo-app
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

The app should now be running locally on [http://localhost:3000](http://localhost:3000).

## Usage

Once the app is running, you can use it to manage your todos:

- **Add a New Todo**: In the "Add a new todo" input box at the top, enter a task and press Enter or click the plus icon to add it to the list.

- **Mark as Completed**: Click the checkbox next to a todo to mark it as completed. Click it again to mark it as unfinished.

- **Edit a Todo**: Click the pencil icon next to a todo to enter edit mode. You can then edit the task and press Enter to save the changes, or press the checkmark icon to exit edit mode without saving.

- **Delete a Todo**: Click the trash icon next to a todo to delete it.

- **Mark All as Completed/Unfinished**: Use the buttons in the Functionality Dock to mark all todos as completed or unfinished.

- **Clear Completed Todos**: Use the "Clear completed items" button in the Functionality Dock to remove all completed todos.

- **Clear All Todos**: Use the "Clear all" button in the Functionality Dock to remove all todos.

The Footer displays a summary of your todos, including the number of completed and unfinished tasks.

## Author
Joaquim Luzia
