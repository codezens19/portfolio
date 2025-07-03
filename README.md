# Portfolio Website

A modern, responsive portfolio website built with React and styled-components.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Component-Based Architecture** - Built with reusable React components
- **Styled-Components** - CSS-in-JS for better maintainability
- **Interactive Elements** - Smooth scrolling, hover effects, and animations
- **Contact Form** - Functional contact form with validation
- **Project Showcase** - Filterable project gallery
- **Skills Section** - Animated skill progress bars

## 🛠️ Tech Stack

- **React 19** - Latest React with hooks
- **Styled-Components** - CSS-in-JS styling
- **JavaScript (ES6+)** - Modern JavaScript features
- **HTML5 & CSS3** - Semantic markup and modern CSS

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.js          # Navigation header
│   │   └── Footer.js          # Site footer
│   ├── sections/
│   │   ├── Hero.js            # Landing section
│   │   ├── About.js           # About and skills section
│   │   ├── Projects.js        # Project showcase
│   │   └── Contact.js         # Contact form
│   └── ui/
│       ├── Button.js          # Reusable button component
│       └── SharedComponents.js # Common styled components
├── hooks/                     # Custom React hooks
├── utils/                     # Utility functions
├── styles/                    # Global styles
├── App.js                     # Main app component
└── index.js                   # App entry point
```

## 🎨 Components Overview

### Layout Components
- **Header** - Fixed navigation with mobile hamburger menu
- **Footer** - Responsive footer with social links and quick navigation

### Section Components
- **Hero** - Landing section with call-to-action buttons
- **About** - Personal information and animated skill bars
- **Projects** - Filterable project gallery with categories
- **Contact** - Contact form with validation and contact information

### UI Components
- **Button** - Reusable button with multiple variants (primary, secondary, outline)
- **SharedComponents** - Common styled components for consistency

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📝 Customization

### Personal Information
Update the following files with your information:

- **Hero.js** - Change name and title
- **About.js** - Update personal description and skills
- **Projects.js** - Add your projects with descriptions and links
- **Contact.js** - Update contact information and social links

### Styling
All styles are managed through styled-components. You can:

- Modify colors in individual components
- Update shared styles in `SharedComponents.js`
- Add new styled components as needed

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Use styled-components for styling
3. Import and add to `App.js`
4. Add navigation link in `Header.js`

## 🎯 Key Features Explained

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px for tablet/desktop
- Flexible grid layouts using CSS Grid

### Styled-Components Benefits
- Component-scoped styles
- Dynamic styling with props
- No CSS class conflicts
- Better developer experience

### Performance Optimizations
- Lazy loading for images (ready for implementation)
- Optimized animations
- Efficient re-renders with React hooks

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- React team for the amazing framework
- Styled-components for CSS-in-JS solution
- The open-source community for inspiration

---

**Happy Coding! 🎉**
# portfolio
