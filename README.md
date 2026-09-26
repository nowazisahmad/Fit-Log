# 🏋️ Fit Log - Workout Tracker

Fit Log is a modern, responsive, and user-friendly workout tracking web application. It allows users to browse a library of exercises, build their daily workout plan, and save workouts for later. Built with Next.js, Tailwind CSS, and DaisyUI, it provides a seamless dark-themed UI experience.

## 🚀 Technologies Used

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Component Library:** [DaisyUI](https://daisyui.com/)
- **State Management:** React Context API (for managing workouts globally)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)
- **Icons:** Custom SVG Icons
- **Language:** TypeScript

## ✨ Key Features

1. **Dual Tab System (Today's Plan & Saved):** 
   Seamlessly switch between your daily workout plan and your saved workouts using a clean, Figma-inspired underline tab interface without any page reloads.
2. **Dynamic Workout Sorting:** 
   Users can sort their workout lists dynamically based on different criteria such as **Duration**, **Calories Burned**, or **Rating** using a custom dropdown menu.
3. **Workout Management (Add/Remove/Mark as Done):** 
   Users can mark workouts from their "Today's Plan" as done, remove them from the list, or move workouts to the "Saved" list for later use.
4. **Smart Empty States:** 
   The application intelligently handles empty states. If there are no workouts in a specific tab, it displays a beautifully designed `EmptyPlan` component with contextual messages and a Call-to-Action (CTA) button to browse the library.
5. **Interactive Toast Notifications:** 
   Provides instant visual feedback to the user. Whenever a workout is removed, saved, or marked as done, a toast notification appears confirming the action (e.g., *"Barbell Bench Press Removed from Saved"*).
6. **Fully Responsive Dark UI:** 
   Designed with a sleek dark mode aesthetic (`#0c0e12` background) ensuring a great user experience across mobile, tablet, and desktop devices.
