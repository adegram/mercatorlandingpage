# Mercator Landing Page

The official landing page for Mercator Technologies Ltd, a fintech-focused venture studio building technology solutions to address gaps in the African payments and financial services ecosystem.

The website introduces Mercator, showcases its portfolio companies and client relationships, highlights its leadership team, and provides contact information for prospective partners and customers.

## Overview

Mercator is a fintech-focused venture studio that combines financial services expertise and technology capabilities to develop solutions for the African payments industry.

This project contains the frontend application for the Mercator corporate website. It is built with React and Vite, styled with Tailwind CSS, and organized into reusable components for the website's major sections.

## Key Features

- Corporate landing page with responsive navigation and smooth scrolling.
- Client and portfolio company showcases.
- Leadership profiles with professional links.
- Interactive portfolio carousel powered by Swiper.
- Contact form integrated with the Mercator messaging API.
- Scroll-triggered animations and reusable UI components.

## Technology Stack

- React 18
- Vite
- Tailwind CSS
- Swiper
- React Scroll
- Axios
- React Icons
- AOS (Animate On Scroll)

## Architecture

The application follows a modular React architecture, separating page composition, reusable UI components, shared application state, and content data.

- `src/components/` — Website sections and interactive UI components.
- `src/pages/` — Page-level components, with the Home page currently serving as the main application view.
- `src/context.jsx` — Shared state management, modal controls, and contact form submission logic.
- `src/data.jsx` — Centralized portfolio company, client, and leadership data.
- `src/images/` and `src/assets/` — Brand assets, illustrations, logos, and profile imagery.

## Deployment Note

The `public/_redirects` file currently redirects all paths to `https://finrailz.com/` using a permanent `301` redirect. This configuration should be reviewed and updated or removed if it does not match the intended production domain.

## Repository

[github.com/adegram/mercatorlandingpage](https://github.com/adegram/mercatorlandingpage)