# NoorderBoard

A web application for displaying dynamic Top 10 lists of media (films, series, games) on a digital school board. Students can submit titles and vote, while teachers moderate content to ensure it's school-appropriate.

## Project Overview

This project creates an interactive platform where students contribute and vote on media titles, resulting in live-updating Top 10 lists visible on a large school board screen. The app supports user accounts, content submission, voting, and moderation.

### Key Features
- **User Registration**: Students register with a school email.
- **Content Submission**: Students add media titles (films, series, games) with details.
- **Voting System**: Users vote on submissions to influence rankings.
- **Top 10 Display**: Automatic generation and display of Top 10 lists.
- **School Board Mode**: Fullscreen view for large screens, distraction-free.
- **Admin Panel**: Teachers can approve, reject, or delete submissions.
- **Moderation**: Ensures content is suitable for school.

### User Roles
- **Students**: Register, submit titles, vote.
- **Teachers (Admins)**: Moderate content, oversee board display.

## Tech Stack
- node.js
- tailwind
- html
- javascript
- php
- xampp
- react
- axios

## Installation and Dev Instructions

- Start Apache and MySQL with XAMPP.
- Import `db.sql` to MySQL.
- Create a user in MySQL with `bit_academy` as name and password.
- Then run:

```bash
npm i
```
```bash
npm run dev
```
```bash
npm run php
```

## Usage
- **Student Flow**: Register, submit media titles, vote on others.
- **Admin Flow**: Log in to admin panel to moderate submissions.
- **Board View**: Use fullscreen mode for school board display.

## Contributing
- Follow Scrum methodology for development.
- Ensure all content adheres to school guidelines.
- Test voting and moderation features thoroughly.

For more details, see `PROJECTBRIEFING.md`.