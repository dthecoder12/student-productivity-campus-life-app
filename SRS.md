# Software Requirements Specification (SRS)

## Campus Life App

**Project:** Campus Life App  
**Developer:** Dawadrain Clark  
**Course:** Software Engineering / Analysis & Design  
**Date:** August 2026

---

## 1. Introduction

### 1.1 Purpose

The purpose of the Campus Life App is to provide students with a simple web-based application for managing campus activities, student tasks, and event check-ins. The application is designed to help students stay organized and more connected to activities happening on campus.

### 1.2 Project Scope

The Campus Life App allows students to view campus activities, manage personal tasks, search and filter tasks, mark tasks as completed, and check in to campus activities. The application also provides an improved navigation system and a simple, student-friendly interface.

The project focuses on providing core student productivity and campus engagement features through an easy-to-use web application.

### 1.3 Intended Users

The primary users of the Campus Life App are college students who want to:

- Keep track of personal tasks
- Monitor task completion
- Find campus activities
- Search and filter tasks
- Check in to campus events
- Navigate the application easily

### 1.4 Project Goals

The main goals of the Campus Life App are to:

- Improve student organization and productivity
- Make campus activities easier to access
- Provide a simple task-management system
- Allow students to track completed tasks
- Provide search and filtering functionality
- Provide an easy-to-use navigation system
- Create a clear and student-friendly user interface

---

## 2. Overall Description

### 2.1 Product Perspective

The Campus Life App is a standalone web application designed as a student productivity and campus engagement tool. The application combines task management and campus activity features into one interface.

### 2.2 Product Functions

The application provides the following major functions:

- Campus activity display
- Student task management
- Task completion tracking
- Task searching and filtering
- Campus activity check-in
- Application navigation
- Dashboard interface

### 2.3 User Characteristics

The application is designed for college students with basic computer and web-browsing skills. Users should be able to interact with the application without requiring specialized technical knowledge.

### 2.4 Operating Environment

The application is designed to run in a modern web browser. Development and testing were performed using development tools such as Visual Studio Code and .NET-related development tools.

---

## 3. Functional Requirements

### 3.1 Campus Activities

The system shall allow users to view available campus activities.

The system shall display information about campus activities in an understandable format.

### 3.2 Student Tasks

The system shall allow users to add student tasks.

The system shall display added tasks in the task list.

The system shall allow users to manage their tasks.

### 3.3 Task Completion

The system shall allow users to mark tasks as completed.

The system shall provide a visual indication when a task has been completed.

### 3.4 Task Search and Filtering

The system shall allow users to search for tasks.

The system shall allow users to filter tasks based on available task information.

### 3.5 Activity Check-In

The system shall allow users to check in to a campus activity.

The system shall provide confirmation after a successful check-in.

### 3.6 Navigation

The system shall provide navigation controls that allow users to move between major areas of the application.

Navigation should be clear and easy for students to understand.

### 3.7 User Interface

The system shall provide a simple and consistent user interface.

The interface shall organize information so that users can easily locate tasks, activities, and application features.
---

## 4. Non-Functional Requirements

### 4.1 Usability

The application should be simple and easy for college students to use. Users should be able to understand the main features without requiring technical training.

### 4.2 Performance

The application should respond to user actions without unnecessary delays. Adding tasks, completing tasks, searching, filtering, and checking in should provide an immediate response when possible.

### 4.3 Reliability

The application should perform its primary functions consistently. User actions such as adding a task or checking in to an activity should produce the expected result.

### 4.4 Maintainability

The application should use organized and understandable code so that future changes and improvements can be made efficiently.

The project should be structured so that individual features can be updated without unnecessarily affecting unrelated features.

### 4.5 Compatibility

The application should be usable in modern web browsers and should function correctly on commonly used computer systems.

### 4.6 Security

The application should avoid collecting unnecessary personal information from users.

If user information is added to the application in the future, appropriate security measures should be considered to protect that information.

---

## 5. Privacy and Data Requirements

### 5.1 Data Collection

The current version of the Campus Life App is designed to minimize the collection of personal information.

The application primarily uses information related to student tasks and campus activities.

### 5.2 Data Storage

The application should only store information that is necessary for its intended functionality.

Future versions that store personal student information should use appropriate security controls and access restrictions.

### 5.3 Privacy Impact Checklist

The following privacy considerations were reviewed for the Campus Life App:

- [x] The application has a defined purpose for collecting or displaying information.
- [x] The application minimizes unnecessary collection of personal information.
- [x] The application does not intentionally request sensitive personal information.
- [x] Users should be informed about how personal information is used if personal information is added in future versions.
- [x] Personal information should not be shared with unauthorized users.
- [x] Appropriate security controls should be considered before storing personal information.
- [x] Future versions should provide appropriate data deletion or retention procedures when applicable.
- [x] Privacy and security requirements should be reviewed when new features are added.

### 5.4 Privacy Risks

Potential privacy risks include the future collection of student information, unauthorized access to stored information, or unnecessary sharing of user data.

These risks can be reduced by limiting data collection, protecting stored information, restricting access, and reviewing privacy requirements when new features are introduced.

---

## 6. System Constraints

The Campus Life App has several project constraints:

- The application is developed as a student software engineering project.
- Development time and resources are limited.
- The application focuses on core campus productivity functionality.
- The current version does not require extensive personal user information.
- Additional features may require additional development and testing.

---

## 7. Future Enhancements

Potential future improvements include:

- User account creation and authentication
- Persistent database storage
- Campus event notifications
- Calendar integration
- Personalized event recommendations
- Mobile device support
- Additional task categories
- Improved accessibility features
- More advanced search and filtering
- Administrative tools for managing campus activities

---

## 8. Acceptance Criteria

The Campus Life App will be considered successful when users can:

1. Navigate between the main areas of the application.
2. View campus activities.
3. Add student tasks.
4. View tasks in the task list.
5. Mark tasks as completed.
6. Search for tasks.
7. Filter tasks.
8. Check in to a campus activity.
9. Receive confirmation after successfully checking in.
10. Use the application through a clear and understandable interface.

---

## 9. Conclusion

The Campus Life App provides students with a centralized application for managing tasks and interacting with campus activities. The system focuses on usability, organization, and accessibility while minimizing unnecessary collection of personal information.

The requirements described in this document provide a foundation for developing, testing, and evaluating the Campus Life App. Future versions can expand the application with additional functionality while continuing to consider usability, security, privacy, and maintainability.
