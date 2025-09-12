# Lawgical Station - Chartered Accountants Website

A modern, professional Next.js website for Lawgical Station, a Chartered Accountants firm in Agra, India. Built with Next.js, TypeScript, and Tailwind CSS for optimal performance and SEO.

## 🌟 Features

- **Modern Design**: Clean, professional design with custom color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Fast Loading**: Static site generation (SSG) for optimal performance
- **SEO Optimized**: Proper meta tags, semantic HTML, and search engine optimization
- **Contact Forms**: Integration ready for Formspree/Formsubmit
- **Booking System**: Placeholder for Calendly integration
- **100% Static**: No backend required, can be hosted on any static hosting provider

## 🎨 Design System

### Colors
- **Gold (Accent)**: `#C9A34A` - Used for highlights, CTAs, and brand elements
- **Slate (Text)**: `#3B4752` - Primary text color
- **Soft White (Background)**: `#F8F9FB` - Main background color

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Heading Font**: Playfair Display (Google Fonts)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This will create an `out` directory with all static files ready for deployment.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with main CTA
│   ├── Services.tsx         # Services section
│   ├── Trust.tsx            # Trust/guarantee section
│   ├── Contact.tsx          # Contact form and info
│   └── Footer.tsx           # Footer with links and social
└── lib/                     # Utility functions (future use)
```

## 🛠 Third-Party Integrations

### Form Handling
The contact form is ready for integration with:
- **Formspree**: Update the action URL in `Contact.tsx`
- **Formsubmit**: Replace form action with Formsubmit endpoint
- **Netlify Forms**: Add `netlify` attribute to form

### Booking System
Calendly integration placeholder is ready in the Contact section. To integrate:
1. Sign up for Calendly
2. Get your booking widget embed code
3. Replace the placeholder in `Contact.tsx`

### Analytics
Add Google Analytics or other tracking by updating `layout.tsx`

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `out`

### Other Static Hosts
The `out` directory can be uploaded to any static hosting provider like:
- GitHub Pages
- AWS S3
- Cloudflare Pages
- Firebase Hosting

## 📝 Content Customization

### Contact Information
Update contact details in `Contact.tsx`:
- Phone number
- Email address
- Office address
- Business hours

### Services
Modify services in `Services.tsx` to match your specific offerings.

### Social Media
Update social media links in `Footer.tsx`.

### Formspree Setup
1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Replace `YOUR_FORM_ID` in `Contact.tsx` with your actual form ID

## 🎯 Key Selling Points Highlighted

- ✅ Personal CA Touch (Real CA, not chatbot)
- ✅ 100% Notice Coverage Guarantee
- ✅ In-person consultation for large projects
- ✅ 1% to charity
- ✅ Trust and reliability
- ✅ Direct and simple process

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- Mobile phones
- Tablets
- Desktop computers
- All screen sizes

## 🔧 Development

### Adding New Components
1. Create component in `src/components/`
2. Export from component file
3. Import and use in pages

### Styling Guidelines
- Use Tailwind CSS classes
- Follow the established color scheme
- Maintain consistent spacing and typography

### Performance
- Images are optimized for static export
- CSS is automatically optimized
- JavaScript is minimized in production

## 📞 Support

For technical support or customization requests, please contact the development team.

---

**Built with ❤️ for Lawgical Station**