# Email Integration Setup Guide

This guide will help you set up email functionality for your portfolio contact form using **EmailJS**, a free email service that requires no backend.

## 🎯 Quick Overview

Your contact form is now integrated with **EmailJS**, which allows you to:
- ✅ Receive emails directly to your inbox
- ✅ No backend server needed
- ✅ Free up to 200 emails/month
- ✅ Setup takes ~5 minutes

## 📋 Step-by-Step Setup

### Step 1: Create EmailJS Account

1. Go to **[emailjs.com](https://www.emailjs.com)**
2. Click **"Sign Up"**
3. Create a free account (email, password, name)
4. Verify your email

### Step 2: Add Your Email Service

1. Log in to EmailJS dashboard
2. Click **"Email Services"** in the left sidebar
3. Click **"Add Service"**
4. Choose **"Gmail"** or **"Other Email Provider"**

#### For Gmail:
- Select "Gmail"
- Click "Connect with Gmail"
- Allow EmailJS to access your Gmail
- Give your service a name (e.g., "Gmail")
- Click **"Create Service"**
- Note your **Service ID** (looks like: `service_abc123def`)

#### For Other Email Providers:
- Select your email provider (Outlook, Yahoo, SendGrid, etc.)
- Follow the authentication steps
- Note your **Service ID**

### Step 3: Create Email Template

1. Click **"Email Templates"** in the sidebar
2. Click **"Create New Template"**
3. Fill in the template details:

#### Template Settings:
- **Template Name**: "Contact Form Submission"
- **Subject**: `{{subject}} - New Contact from {{from_name}}`

#### Email Template Content:

```html
<div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 8px;">
    <h2 style="color: #333; border-bottom: 2px solid #5b6ef7; padding-bottom: 10px;">
      New Contact Form Submission
    </h2>
    
    <div style="margin-top: 20px;">
      <p style="margin: 15px 0;">
        <strong style="color: #5b6ef7;">From:</strong> {{from_name}}
      </p>
      
      <p style="margin: 15px 0;">
        <strong style="color: #5b6ef7;">Email:</strong> 
        <a href="mailto:{{from_email}}" style="color: #0ea5e9;">{{from_email}}</a>
      </p>
      
      <p style="margin: 15px 0;">
        <strong style="color: #5b6ef7;">Subject:</strong> {{subject}}
      </p>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #5b6ef7; margin: 20px 0;">
        <p style="color: #666; white-space: pre-wrap; word-break: break-word;">{{message}}</p>
      </div>
      
      <p style="margin-top: 20px; color: #999; font-size: 12px;">
        ---<br>
        This email was sent from your portfolio website contact form.
      </p>
    </div>
  </div>
</div>
```

4. Click **"Save"**
5. Note your **Template ID** (looks like: `template_xyz789abc`)

### Step 4: Get Your Public Key

1. Click the **settings icon** (gear) in the top-right
2. Go to **"Account"** tab
3. Copy your **Public Key** (looks like: `rJ5xK7mNpQ2wL9vH`)

### Step 5: Add Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist):

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_RECIPIENT_EMAIL=your_email@example.com
```

Replace with your actual values:

| Variable | Where to Find | Example |
|----------|---------------|---------|
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS Settings → Account | `rJ5xK7mNpQ2wL9vH` |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS Email Services | `service_abc123def` |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS Email Templates | `template_xyz789abc` |
| `VITE_RECIPIENT_EMAIL` | Your email address | `your.email@gmail.com` |

### Step 6: Test the Integration

1. **Restart your dev server**:
   ```bash
   npm run dev
   ```

2. Go to `http://localhost:5173`

3. Scroll to the **Contact** section

4. Fill out the form:
   - Name: Your Test Name
   - Email: Any valid email
   - Subject: Test Subject
   - Message: This is a test message

5. Click **"Send Message"**

6. **Check your inbox** for the email!

## ✅ Testing Checklist

- [ ] Created EmailJS account
- [ ] Added email service (Gmail/other)
- [ ] Created email template
- [ ] Copied Public Key
- [ ] Created `.env.local` file
- [ ] Added all 4 environment variables
- [ ] Restarted dev server
- [ ] Tested contact form
- [ ] Received test email
- [ ] Verified email formatting

## 🚀 Deployment

When you deploy your portfolio, you need to set the environment variables on your hosting platform:

### On Vercel:
1. Go to Project Settings
2. Click "Environment Variables"
3. Add all 4 variables
4. Redeploy

### On Netlify:
1. Go to Site Settings
2. Click "Build & Deploy" → "Environment"
3. Click "Edit variables"
4. Add all 4 variables
5. Trigger a rebuild

### On Other Platforms:
Refer to your platform's documentation for setting environment variables.

## 🎨 Customize Email Template

Your email template supports these variables:

```
{{from_name}}      - Visitor's name
{{from_email}}     - Visitor's email
{{subject}}        - Email subject
{{message}}        - Email message
{{to_email}}       - Your email (from env)
{{reply_to}}       - Auto-set to visitor's email
```

You can edit the template anytime in your EmailJS dashboard.

## 📊 Monitor Submissions

View all contact form submissions in your EmailJS dashboard:

1. Click **"Email Activity"** in the sidebar
2. See all sent/failed emails
3. Check delivery status
4. Download reports

## 🆘 Troubleshooting

### Email Not Received?

1. **Check browser console** for errors:
   - Open DevTools (F12)
   - Check Console tab for error messages

2. **Verify environment variables**:
   ```bash
   # In browser console, run:
   console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
   ```
   Should show your key, not `undefined`

3. **Test Email Service in EmailJS**:
   - Go to Email Services
   - Click your service
   - Click "Send Test Email"

4. **Check spam folder** - Emails sometimes go to spam

### Common Errors

| Error | Solution |
|-------|----------|
| "Invalid Service ID" | Check Service ID is correct in `.env.local` |
| "Invalid Template ID" | Check Template ID is correct in `.env.local` |
| "Public key required" | Ensure `VITE_EMAILJS_PUBLIC_KEY` is set |
| Email in spam | Mark as "Not Spam" in your email provider |

## 🔐 Security Notes

- ✅ Your public key is safe to expose (it's public-facing)
- ✅ Never put your private key in client code
- ✅ EmailJS handles sensitive data securely
- ✅ EmailJS Free tier is rate-limited to 200/month
- ✅ Upgrade to paid plan for higher limits

## 💾 Backup `.env.local`

**Important**: Keep your `.env.local` file safe!

```bash
# Never commit to git (already in .gitignore)
# But keep a backup locally
# If lost, you can regenerate from EmailJS dashboard
```

## 📞 Support

### EmailJS Issues?
- Visit: [EmailJS Docs](https://www.emailjs.com/docs/)
- Email: support@emailjs.com

### Your Portfolio Issues?
- Check component comments in `Contact.tsx`
- Review error messages in browser console

## 🎉 You're Set!

Your contact form is now fully functional and will send emails to your inbox whenever someone submits the form.

### What Happens Now:

1. ✅ Visitor fills contact form
2. ✅ Clicks "Send Message"
3. ✅ Form validates input
4. ✅ EmailJS sends email
5. ✅ You receive email in your inbox
6. ✅ Visitor sees success message

---

**Questions?** Check the troubleshooting section above or review the EmailJS documentation.

**Next Steps**: Deploy your portfolio with email integration working! 🚀
