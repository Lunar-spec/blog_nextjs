# Next.js Blog Application with Google Login Feature

This is a blog application built on Next.js framework that features Google login using the `next-auth` package. The project utilizes various packages for different functionalities. Here's a list of packages used:

- `bcrypt`: ^5.1.1
- `eslint`: 8.47.0
- `eslint-config-next`: 13.4.19
- `lucide-react`: ^0.269.0
- `mongoose`: ^7.4.5
- `next`: 13.4.19
- `next-auth`: ^4.23.1
- `react`: 18.2.0
- `react-dom`: 18.2.0
- `swr`: ^2.2.2

## Project Overview

This project is a Next.js-based blog application that allows users to create, read, update, and delete blog posts. It also includes Google login functionality using `next-auth` for secure authentication. The application is structured using multiple components and follows best practices for Next.js development.

## Access the Deployed Application

You can access the deployed application using the following link: [https://blog-nextjs-phi-taupe.vercel.app/](https://blog-nextjs-phi-taupe.vercel.app/)

## Directory Structure

The project directory structure is as follows:

- `public`: Contains static assets like images, fonts, and other resources.

- `src`:
  - `app`: The core application files.
    - `about`, `api`, `blog`, `contact`, `dashboard`, `portfolio`: Subdirectories for different sections of the application.
    - `globals.css`: Global CSS file for styling.
    - `layout.jsx`: Main layout component.
    - `loading.module.css`: CSS module for the loading component.
    - `page.jsx`, `page.module.css`: Example pages with associated styles.

  - `components`: Reusable UI components.
    - `AuthProvider`: Authentication provider component for Google login.
    - `button`: Button components.
    - `DarkModeToggle`: Component for toggling dark mode.
    - `footer`: Footer component.
    - `navbar`: Navigation bar component.

  - `context`: Context providers for state management.
  - `models`: Data models and schemas.
  - `utils`: Utility functions.

## Getting Started

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up environment variables for Google login in `.env.local`.
4. Run the development server using `npm run dev`.

## Contributing

Contributions are welcome! If you find any issues or have improvements, please feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
