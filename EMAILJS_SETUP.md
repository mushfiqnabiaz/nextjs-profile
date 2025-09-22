# EmailJS Setup Instructions

This guide will help you set up EmailJS to enable your contact form to send emails directly to `lets@meetmushfiq.com`.

## 📧 What is EmailJS?

EmailJS is a service that allows you to send emails directly from your website without needing a backend server. It's perfect for contact forms and other client-side email functionality.

## 🚀 Setup Steps

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. **Important**: Use the email address `lets@meetmushfiq.com` as the receiving email
6. Note down your **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: Portfolio Contact: {{subject}}

From: {{from_name}} <{{from_email}}>
To: {{to_email}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Make sure to include all these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{to_email}}` - Your email address
   - `{{reply_to}}` - Reply-to email

5. Note down your **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key

1. Go to "Account" > "General" in your dashboard
2. Find your **Public Key** (e.g., `user_abc123def456`)

### 5. Update Configuration

1. Open `/config/emailjs.ts` in your project
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  serviceId: 'your_actual_service_id',        // Replace with your Service ID
  templateId: 'your_actual_template_id',      // Replace with your Template ID
  publicKey: 'your_actual_public_key',        // Replace with your Public Key
  toEmail: 'lets@meetmushfiq.com'             // Already set correctly
}
```

### 6. Test the Contact Form

1. Run your portfolio locally: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email at `lets@meetmushfiq.com`
5. You should receive the contact form message

## 🎯 Features

Your contact form now includes:

- ✅ **Real Email Sending** - Messages go directly to your inbox
- ✅ **Form Validation** - Ensures all required fields are filled
- ✅ **Email Validation** - Checks for valid email format
- ✅ **Loading States** - Shows loading spinner while sending
- ✅ **Success/Error Messages** - Clear feedback to users
- ✅ **Analytics Tracking** - Tracks form submissions in PostHog
- ✅ **Auto-Reset** - Form clears after successful submission

## 🔧 Troubleshooting

### Common Issues:

1. **"Failed to send message" error**
   - Check that all EmailJS credentials are correct
   - Verify your email service is properly connected
   - Check browser console for detailed error messages

2. **Emails not received**
   - Check spam/junk folder
   - Verify the `to_email` is set to `lets@meetmushfiq.com`
   - Ensure your email service provider allows receiving emails

3. **Form validation errors**
   - Make sure Name, Email, and Message fields are filled
   - Check that email format is valid (e.g., user@example.com)

### Getting Help:

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Available through their dashboard
- Check browser console for error messages

## 📊 Analytics

The contact form also tracks:
- Form submissions (successful and failed)
- User interaction patterns
- Message lengths and completion times

This data is available in your PostHog dashboard for insights into user engagement.

## 🔒 Privacy & Security

- EmailJS handles email delivery securely
- No sensitive data is stored on your website
- Form submissions are processed client-side
- All communication is encrypted

Your contact form is now fully functional and ready to receive messages!
