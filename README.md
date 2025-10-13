# Developer Portfolio

A modern, responsive portfolio website built with React and CSS. This portfolio showcases your skills, projects, experience, and provides a way for potential employers or clients to contact you.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling navigation with active states
- **Project Showcase**: Display your projects with descriptions and links
- **Skills Section**: Organize your skills by categories
- **Experience Timeline**: Professional work experience in an attractive timeline format
- **Contact Information**: Multiple ways for people to reach you
- **Resume Download**: Easy download of your resume/CV
- **Customizable**: Easy to modify colors, content, and styling

## Sections

1. **Hero Section**: Introduction with your photo and call-to-action
2. **About**: Personal information and background
3. **Skills**: Technical skills organized by category
4. **Projects**: Featured projects with descriptions and links
5. **Experience**: Professional work history in timeline format
6. **Contact**: Contact information and resume download

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with the production-ready files.

## Customization

### Personal Information

1. **Photos**: Replace the placeholder images in the `src/components/` directory
   - Hero section: Update the image URL in `Hero.js`
   - About section: Update the image URL in `About.js`

2. **Contact Information**: Update contact details in `src/components/Contact.js`

3. **Personal Details**: Modify the content in:
   - `Hero.js` - Your name and title
   - `About.js` - About section content
   - `Experience.js` - Work experience details

### Projects

Edit the `projects` array in `src/components/Projects.js` to showcase your actual projects:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description...',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: 'fas fa-project-icon',
    github: 'https://github.com/yourusername/project',
    demo: 'https://your-project-demo.com'
  },
  // Add more projects...
];
```

### Skills

Update the `skillCategories` array in `src/components/Skills.js` to reflect your skills:

```javascript
const skillCategories = [
  {
    icon: 'fas fa-code',
    title: 'Your Skill Category',
    skills: ['Skill 1', 'Skill 2', 'Skill 3']
  },
  // Add more skill categories...
];
```

### Styling

The main styles are in `src/App.css`. You can customize:

- **Colors**: Update the color variables throughout the CSS
- **Fonts**: Change the font family in the CSS
- **Layout**: Modify grid layouts and spacing
- **Animations**: Adjust or add new animations

### Resume

Replace `public/resume.pdf` with your actual resume file.

## Technologies Used

- **React**: Frontend framework
- **CSS3**: Styling with modern features like Grid and Flexbox
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and customize it for your own use. If you make improvements, consider submitting a pull request to help others!

## Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or reach out!
"# Portfolio" 
