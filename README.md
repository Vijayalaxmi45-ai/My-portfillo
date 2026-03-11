# Vijayalaxmi Portfolio - Frontend Developer

A modern, professional portfolio website showcasing skills, projects, and achievements.

## 🌟 Features
- Modern dark theme with Orange/Blue accents
- Fully responsive design for all devices
- Interactive typing animation
- Skills showcase with progress bars
- Project portfolio with tech stack
- Professional contact form with backend integration
- SEO optimized
- Fast loading and performance optimized

## 🚀 Technologies
- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5.3.5
- **Backend**: Node.js, Express.js
- **Database**: MySQL (optional for contact form)
- **Icons**: Bootstrap Icons
- **Deployment**: Railway (or any cloud platform)

## 📁 Project Structure
```
my_Portfillo/
├── public/                 # Static files
│   ├── index.html         # Main homepage
│   ├── homepage.html      # Alternative homepage
│   ├── about_me.html      # About page
│   ├── my_projects.html   # Projects showcase
│   ├── cerificates.html   # Certificates gallery
│   ├── contact.html       # Contact form
│   ├── script.js          # JavaScript functionality
│   └── img/               # Images and assets
├── server.js              # Express server
├── package.json           # Dependencies
├── railway.json           # Railway deployment config
├── Procfile              # Process file for deployment
├── database.sql          # Database schema
└── README.md             # This file
```

## 🛠️ Local Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my_Portfillo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup (Optional - for contact form)**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

4. **Run locally**
   ```bash
   npm start
   ```
   Visit: http://localhost:3000

## 🌐 Live Deployment on Railway

### Option 1: Deploy via Railway CLI

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway**
   ```bash
   railway login
   ```

3. **Initialize and Deploy**
   ```bash
   railway init
   railway up
   ```

### Option 2: Deploy via Railway Dashboard

1. **Connect GitHub Repository**
   - Go to [Railway.app](https://railway.app)
   - Sign up/Login with GitHub
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository

2. **Configure Environment Variables** (Optional)
   - In Railway dashboard, go to your project
   - Add environment variables if using database:
     - `DB_HOST`
     - `DB_USER`
     - `DB_PASSWORD`
     - `DB_NAME`

3. **Deploy**
   - Railway will automatically detect Node.js
   - Build and deploy will start automatically
   - Get your live URL!

## 📱 Pages Overview

- **Home** (`/` or `/homepage.html`): Hero section with introduction
- **About** (`/about_me.html`): Education, skills, and experience
- **Projects** (`/my_projects.html`): Portfolio showcase with 6 projects
- **Certificates** (`/cerificates.html`): Achievements and certifications
- **Contact** (`/contact.html`): Professional contact form

## 🔧 Customization

### Update Personal Information
1. Edit `public/index.html` for main content
2. Update `public/about_me.html` for personal details
3. Modify contact information in `public/contact.html`

### Add New Projects
1. Add project images to `public/img/`
2. Update `public/my_projects.html` with new project cards

### Styling Changes
- All CSS is embedded in HTML files
- Main color variables are defined in `:root` sections
- Modify CSS variables to change theme colors

## 📊 Performance Features

- Optimized images and assets
- Responsive design for all screen sizes
- Fast loading times
- SEO-friendly structure
- Accessible navigation

## 🛡️ Security Features

- Input validation for contact form
- CORS enabled for API endpoints
- Environment variable protection
- SQL injection prevention

## 📞 Contact Form

The contact form works in two modes:
1. **With Database**: Stores submissions in MySQL
2. **Without Database**: Logs submissions to console (still functional)

## 🚀 Deployment URLs

Once deployed, your portfolio will be available at:
- Railway: `https://your-app-name.railway.app`
- Custom domain can be added in Railway settings

## 📈 Analytics & Monitoring

- Railway provides built-in monitoring
- Add Google Analytics by including tracking code in HTML head sections
- Health check endpoint available at `/health`

## 🔄 Updates & Maintenance

1. **Update Dependencies**
   ```bash
   npm update
   ```

2. **Redeploy**
   - Push changes to GitHub
   - Railway auto-deploys on push

## 📝 License

MIT License - feel free to use this template for your own portfolio!

---

**Made with ❤️ by Vijayalaxmi**
