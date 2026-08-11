# 🎤 Ozone Lounge Karaoke & To-Do List Hub

Welcome to the ultimate web applications hub! This repository contains beautiful, responsive web applications including a karaoke gallery and a fully-featured to-do list manager.

## 🚀 Live Demo

Access our live applications:

- **🎤 Karaoke Gallery**: [View Live](https://frankmoh.github.io/Ozone-Lounge-Karaoke-list/index.html)
- **✅ To-Do List App**: [View Live](https://frankmoh.github.io/Ozone-Lounge-Karaoke-list/todo-app.html)

---

## 📋 Applications Included

### 1. 🎤 Ozone Lounge Karaoke Gallery

A beautiful, fully responsive karaoke list gallery with stunning visual effects.

**Features:**
- ✨ Beautiful gradient design with smooth hover effects
- 🖱️ Image zoom and brightness transitions
- 🎬 Full-screen modal viewer
- 📱 Fully responsive grid layout
- 🎨 Modern UI with color-coded elements
- ⚡ Fast and lightweight

**Files:**
- `index.html` - Main gallery page
- `styles.css` - Beautiful CSS styling
- `script.js` - Interactive functionality

**How to Use:**
1. Open `index.html` in your browser
2. Hover over cards to see effects
3. Click any image to view full-screen
4. Use filter buttons to organize pages

---

### 2. ✅ Ultimate To-Do List App

A powerful task management application with local storage and advanced features.

**Features:**
- 📝 Add, edit, delete tasks with animations
- 💾 **Local Storage** - Tasks auto-save and persist
- 🎯 Priority levels (High, Medium, Low)
- 🔍 Advanced filtering and sorting
- 📊 Live statistics dashboard
- 🌓 Dark/Light theme toggle
- 📤 Export tasks as JSON
- 🔎 Search functionality (Ctrl+K)
- 📱 Fully responsive design
- ⌨️ Keyboard shortcuts

**Files:**
- `todo-app.html` - Main to-do application
- `todo-styles.css` - Complete CSS styling
- `todo-script.js` - Full JavaScript functionality

**How to Use:**
1. Open `todo-app.html` in your browser
2. Add tasks using the input field
3. Click quick-add buttons for priority levels
4. Use filters to organize tasks
5. Edit or delete tasks with action buttons
6. All data is automatically saved locally!

---

## 🎨 Design Highlights

### Beautiful UI Components
- Modern gradient backgrounds
- Smooth animations and transitions
- Responsive grid layouts
- Color-coded priority indicators
- Professional typography
- Custom scrollbars

### Interactive Features
- Hover effects with smooth transitions
- Modal dialogs for full-screen viewing
- Real-time statistics updates
- Smooth filtering and sorting
- Keyboard shortcuts
- Touch-friendly buttons

### Responsive Design
- Mobile optimized (320px+)
- Tablet friendly (768px+)
- Desktop perfect (1920px+)
- Auto-adapting layouts
- Touch-friendly interface

---

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **Vanilla JavaScript** - No dependencies
- **LocalStorage API** - Data persistence
- **GitHub Pages** - Hosting

---

## 📁 Project Structure

```
Ozone-Lounge-Karaoke-list/
├── index.html              # Karaoke gallery main page
├── styles.css              # Gallery CSS styling
├── script.js               # Gallery JavaScript
├── todo-app.html           # To-do list application
├── todo-styles.css         # To-do CSS styling
├── todo-script.js          # To-do JavaScript
├── README.md               # This file
└── .nojekyll              # GitHub Pages configuration
```

---

## 🚀 Deployment

This project is deployed using **GitHub Pages**.

### Live URLs:
- **Karaoke Gallery**: https://frankmoh.github.io/Ozone-Lounge-Karaoke-list/index.html
- **To-Do List**: https://frankmoh.github.io/Ozone-Lounge-Karaoke-list/todo-app.html

### How It's Deployed:
1. All files are committed to the `main` branch
2. GitHub Pages is configured to serve from main branch
3. Files are immediately available at the live URLs
4. Updates are deployed automatically on each commit

---

## 💾 Local Storage

The to-do list application uses browser's LocalStorage to persist data:

```javascript
// Data is automatically saved
localStorage.setItem('todos', JSON.stringify(todos));

// Data is automatically loaded on page refresh
const stored = localStorage.getItem('todos');
```

**Features:**
- ✅ Automatic saving on every action
- ✅ Persistent across browser sessions
- ✅ No internet required after first load
- ✅ Theme preference saved
- ✅ Export/Import support

---

## 🎯 Features Comparison

| Feature | Karaoke Gallery | To-Do List |
|---------|-----------------|-----------|
| Responsive Design | ✅ | ✅ |
| Dark Mode | ✅ | ✅ |
| LocalStorage | ❌ | ✅ |
| Animations | ✅ | ✅ |
| Search | ✅ | ✅ |
| Export | ❌ | ✅ |
| Filtering | ✅ | ✅ |
| Statistics | ❌ | ✅ |
| Mobile Optimized | ✅ | ✅ |

---

## 🌐 Browser Support

- ✅ Chrome/Chromium (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile Chrome/Safari
- ✅ Opera

---

## ⌨️ Keyboard Shortcuts

### To-Do List App:
- **Ctrl + K** - Open search modal
- **Enter** - Add new task
- **Escape** - Close modal
- **Tab** - Navigate between elements

---

## 🎨 Customization

### Change Colors:
Edit CSS variables in styles.css or todo-styles.css:
```css
:root {
  --primary-color: #6366f1;
  --success-color: #10b981;
  --danger-color: #ef4444;
}
```

### Modify Layout:
All CSS is organized with clear sections and comments for easy customization.

### Add New Tasks:
Simply duplicate HTML card structures and update the content.

---

## 📊 Statistics

- **Total Files**: 8
- **HTML**: 2 files
- **CSS**: 2 files (1000+ lines)
- **JavaScript**: 2 files (400+ lines)
- **No External Dependencies**
- **Fully Self-Contained**

---

## 🐛 Known Limitations

- LocalStorage is limited to ~5-10MB per domain
- Browser-specific storage (clear cache = data loss for to-do list)
- No cloud sync
- No multi-device sync

---

## 💡 Tips & Tricks

### Karaoke Gallery:
- Hover over cards for beautiful effects
- Click images to view full-screen
- Use filter buttons to organize
- Press ESC to close modal

### To-Do List:
- Use priority buttons for quick adding
- Sort by different criteria
- Filter by priority or status
- Export regularly for backup
- Dark mode for night use

---

## 🤝 Contributing

Feel free to:
- Fork the repository
- Create feature branches
- Submit pull requests
- Report issues
- Suggest improvements

---

## 📝 License

This project is free to use and modify for personal and commercial projects.

---

## 👤 Author

**Frankmoh**
- GitHub: [@Frankmoh](https://github.com/Frankmoh)
- Repository: [Ozone-Lounge-Karaoke-list](https://github.com/Frankmoh/Ozone-Lounge-Karaoke-list)

---

## 🎉 Acknowledgments

Built with ❤️ using:
- Pure HTML/CSS/JavaScript
- GitHub Pages for hosting
- Modern web standards
- Attention to detail

---

## 📞 Support

For issues or questions:
1. Check existing issues on GitHub
2. Create a new issue with details
3. Include browser and OS information
4. Provide steps to reproduce

---

## 🔄 Updates & Maintenance

This project is actively maintained with:
- Regular feature updates
- Bug fixes
- Performance improvements
- Browser compatibility updates

---

## 🎯 Future Roadmap

- [ ] Cloud sync support
- [ ] Multi-user collaboration
- [ ] Dark mode for karaoke gallery
- [ ] Advanced analytics
- [ ] PWA support
- [ ] Mobile apps

---

**Happy coding! 🚀✨**

---

## Quick Links

- 🎤 [Karaoke Gallery Live](https://frankmoh.github.io/Ozone-Lounge-Karaoke-list/index.html)
- ✅ [To-Do List App Live](https://frankmoh.github.io/Ozone-Lounge-Karaoke-list/todo-app.html)
- 📚 [GitHub Repository](https://github.com/Frankmoh/Ozone-Lounge-Karaoke-list)
- 👤 [GitHub Profile](https://github.com/Frankmoh)

---

*Last updated: August 11, 2026*
