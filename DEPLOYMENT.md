# Agent Analytics Site Deployment Guide

## 🚀 Vercel Deployment Setup

### 1. Initial Setup

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel --prod
```

### 2. Environment Configuration

Set up the following environment variables in Vercel dashboard:

```env
# Database (if using)
DATABASE_URL=your_database_url

# Analytics
NEXT_PUBLIC_SPLITBEE_TOKEN=your_splitbee_token

# Contact Form
CONTACT_EMAIL=your_contact_email
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password

# n8n Integration
N8N_WEBHOOK_URL=your_n8n_webhook_url
VERCEL_TOKEN=your_vercel_deploy_token
```

### 3. Custom Domain Setup

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add custom domain: `agentanalytics.com`
3. Configure DNS records:

   ```
   Type: A
   Name: @
   Value: 76.76.19.34

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### 4. Automatic Deployment

- Connect GitHub repository to Vercel
- Set deployment branch to `main`
- Enable automatic deployments
- Configure preview deployments for pull requests

## 🔄 Blog Automation Workflow

### n8n Setup

1. Deploy n8n instance (Vercel, Railway, or self-hosted)
2. Import the provided workflow JSON
3. Configure webhook endpoints
4. Set up GitHub integration with personal access token

### Workflow Steps

1. **Trigger**: New blog entry in Airtable/Notion
2. **Parse**: Extract blog data (title, content, metadata)
3. **Generate**: Create MDX file with frontmatter
4. **Commit**: Push to GitHub repository
5. **Deploy**: Trigger Vercel deployment

### Airtable Integration

```javascript
// Airtable webhook payload example
{
  "title": "AI Strategy Implementation Guide",
  "slug": "ai-strategy-implementation",
  "content": "# Your markdown content here...",
  "excerpt": "Learn how to implement AI strategies...",
  "author": "Agent Analytics Team",
  "category": "Strategy",
  "tags": ["AI", "Strategy", "Implementation"]
}
```

## 🎨 UX Enhancements Checklist

### ✅ Hero Visibility

- [x] Fixed light mode text contrast
- [x] Added hydration guard
- [x] Removed conflicting animations
- [x] Enhanced CSS specificity

### ✅ Logo Accessibility

- [x] Added proper aria-label
- [x] Improved alt text
- [x] Enhanced focus states
- [x] Smooth hover transitions

### ✅ Mobile Navigation

- [x] Accessible menu toggle
- [x] Keyboard navigation support
- [x] Escape key to close
- [x] Proper ARIA attributes

### ✅ Performance

- [x] Image optimization
- [x] Font loading optimization
- [x] Bundle size optimization
- [x] Core Web Vitals compliance

## 🔧 Maintenance

### Regular Tasks

- Monitor Core Web Vitals
- Update dependencies monthly
- Review analytics data
- Test contact form functionality
- Verify blog automation workflow

### Monitoring

- Set up Vercel Analytics
- Configure error tracking (Sentry)
- Monitor uptime (UptimeRobot)
- Track performance metrics

## 🚨 Troubleshooting

### Common Issues

1. **Hero text not visible**: Check CSS specificity and hydration
2. **Logo not loading**: Verify image paths and optimization
3. **Contact form not working**: Check SMTP configuration
4. **Blog not publishing**: Verify n8n workflow and GitHub integration

### Performance Issues

- Run `npm run build` locally to check for errors
- Use Lighthouse for performance audit
- Check bundle analyzer for large dependencies
- Optimize images and fonts

## 📈 Analytics Setup

### Splitbee Configuration

```javascript
// Add to _app.tsx or layout.tsx
import { Analytics } from '@splitbee/web';

if (process.env.NODE_ENV === 'production') {
  Analytics.init({
    token: process.env.NEXT_PUBLIC_SPLITBEE_TOKEN,
    scriptUrl: '/sb.js',
    apiUrl: '/sb-api',
  });
}
```

### Custom Events

```javascript
// Track important user actions
Analytics.track('Book Session Clicked');
Analytics.track('Blog Post Read', { post: 'ai-strategy-guide' });
Analytics.track('Contact Form Submitted');
```

## 📚 Security

### Headers Configuration

- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer Policy

### Environment Variables

- Never commit sensitive data
- Use Vercel's environment variable system
- Rotate tokens regularly
- Monitor for security alerts

## 📞 Support

For deployment issues:

1. Check Vercel deployment logs
2. Review environment variables
3. Test locally with `npm run build`
4. Contact support with error details

For automation issues:

1. Check n8n workflow logs
2. Verify webhook endpoints
3. Test GitHub integration
4. Review API rate limits
