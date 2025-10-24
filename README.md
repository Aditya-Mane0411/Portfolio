# Adi Portfolio

A modern, responsive personal portfolio website showcasing projects, certifications, and skills through a clean, accessible user interface. Built with cutting-edge web technologies for optimal performance and user experience.


## 🌟 Features

### Core Features
- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Components**: Engaging user interface with hover effects and interactive elements
- **Accessibility First**: Built with accessibility best practices using Radix UI primitives
- **Performance Optimized**: Fast loading times with optimized assets and modern build tools

### Portfolio Sections
- **Hero Section**: Eye-catching introduction with animated elements
- **About Me**: Personal introduction and professional background
- **Projects Showcase**: Detailed project cards with descriptions, technologies used, and links
- **Certifications**: Display of professional certifications and achievements
- **Skills & Technologies**: Visual representation of technical skills and expertise
- **Contact Information**: Easy ways for visitors to get in touch
- **Smooth Navigation**: Seamless scrolling between sections

### Technical Features
- **TypeScript Integration**: Full type safety throughout the application
- **Component-based Architecture**: Modular, reusable components for maintainability
- **Custom Design System**: Consistent theming through CSS variables and Tailwind utilities
- **Form Validation**: Robust form handling with Zod schema validation
- **Toast Notifications**: User feedback through elegant toast messages
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Modern React with concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Next-generation frontend build tool

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
- **Radix UI** - Headless UI primitives for accessibility
- **Lucide React** - Beautiful, customizable icons
- **Custom CSS Animations** - Smooth transitions and effects

### Form Management
- **React Hook Form** - Performant form library with minimal re-renders
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Validation resolver for React Hook Form

### Navigation & UX
- **React Router DOM** - Client-side routing
- **React Scroll** - Smooth scrolling navigation
- **Sonner** - Elegant toast notifications

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Class Variance Authority** - Component variant management

## 📁 Project Structure

```
adi-portfolio/
├── public/                     # Static assets
│   ├── favicon.ico            # Site favicon
│   └── images/                # Image assets
├── src/                       # Source code
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── sections/         # Page sections (Hero, About, Projects, etc.)
│   │   └── layout/           # Layout components (Header, Footer)
│   ├── pages/                # Page components
│   ├── hooks/                # Custom React hooks
│   ├── utils/                # Utility functions
│   ├── types/                # TypeScript type definitions
│   ├── styles/               # Global styles and CSS
│   │   └── globals.css       # Global CSS with design system variables
│   ├── lib/                  # Library configurations
│   └── App.tsx               # Main application component
├── index.html                # HTML entry point
├── package.json              # Project dependencies and scripts
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite build configuration
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/adi-portfolio.git
   cd adi-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

## 📦 Dependencies

### Core Dependencies
```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "react-router-dom": "^6.0.0",
  "typescript": "^5.0.0"
}
```

### UI & Styling
```json
{
  "@radix-ui/react-*": "Latest versions",
  "tailwindcss": "^3.0.0",
  "lucide-react": "Latest",
  "class-variance-authority": "Latest",
  "clsx": "Latest",
  "tailwind-merge": "Latest"
}
```

### Form & Validation
```json
{
  "react-hook-form": "^7.0.0",
  "zod": "^3.0.0",
  "@hookform/resolvers": "^3.0.0"
}
```

### Additional Libraries
```json
{
  "react-scroll": "Latest",
  "sonner": "Latest"
}
```

### Development Dependencies
```json
{
  "vite": "^5.0.0",
  "@vitejs/plugin-react": "^4.0.0",
  "eslint": "^8.0.0",
  "postcss": "^8.0.0",
  "autoprefixer": "^10.0.0"
}
```

## 🎨 Design System

The portfolio uses a custom design system built with CSS variables and Tailwind CSS:

- **Colors**: Semantic color tokens for consistent theming
- **Typography**: Custom font stacks with Google Fonts (Fira Code, Inter)
- **Spacing**: Consistent spacing scale throughout the application
- **Components**: Reusable components with variant support
- **Animations**: Smooth transitions and hover effects

## 🚀 Deployment

### Deployment Steps

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure your domain (optional)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

## 📞 Contact

- **Email**: adityamane0411@gmail.com
- **LinkedIn**: [Your LinkedIn Profile](www.linkedin.com/in/aditya-mane-36831826b)
- **Portfolio**: [Live Demo](https://yourportfolio.com)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the excellent component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icon set
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives

---

**Built by Adi**
