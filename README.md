# Notes App

A simple web application using a REST api to manage notes.

This repository contains two main directories, "client" and "front-end-project-designs". The source code for this project's front end is contained in "client", with the UI designs in the latter.

Project URL: https://ancient-peak-28942.herokuapp.com/  
Backend repository: https://github.com/gooseandmegander/back-end-project-week/blob/master/models/note.js

## MVP Features:
* [x] Display a list of notes
* [x] Create a note with a title and content
* [x] View an existing note
* [x] Edit an existing note
* [x] Delete an existing note

## Extra Features:
* [ ] Make the data persist with arrays / object literals (JSON) or a 3rd party service like Firebase
* [ ] Search functionality
* [ ] Markdown support in notes
* [ ] Sorting options in the list view
* [ ] Create and display tags that can be added to notes
* [ ] Drag sorting in the list view
* [ ] Add the ability to have checklists within the note view
* [ ] Export all notes to a CSV
* [ ] Create a login system around the MVP

## Development


Run app locally:

```
cd client && npm install
npm run start
```