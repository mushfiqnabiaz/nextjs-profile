// EmailJS Configuration
// You need to set up EmailJS at https://www.emailjs.com/
// After setup, replace these placeholder values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS service ID (e.g., 'service_abc123')
  serviceId: 'service_lau5cec',
  
  // Your EmailJS template ID (e.g., 'template_xyz789')
  templateId: 'template_2s6z04j',
  
  // Your EmailJS public key (e.g., 'user_abc123def456')
  publicKey: 'i1Kc2sbrUePJqN7V1',
  
  // Recipient email address
  toEmail: 'lets@meetmushfiq.com'
}

// Email template parameters that will be sent to your email
export const EMAIL_TEMPLATE_PARAMS = {
  from_name: '', // Will be filled from form data
  from_email: '', // Will be filled from form data
  subject: '', // Will be filled from form data
  message: '', // Will be filled from form data
  to_email: EMAILJS_CONFIG.toEmail,
  reply_to: '' // Will be filled from form data
}

/*
SETUP INSTRUCTIONS:

1. Go to https://www.emailjs.com/ and create a free account
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - {{from_name}} - Sender's name
   - {{from_email}} - Sender's email
   - {{subject}} - Email subject
   - {{message}} - Email message
   - {{to_email}} - Your email address
   - {{reply_to}} - Reply-to email

4. Get your credentials:
   - Service ID: Found in EmailJS dashboard under "Services"
   - Template ID: Found in EmailJS dashboard under "Email Templates"
   - Public Key: Found in EmailJS dashboard under "Account" > "General"

5. Replace the placeholder values in this file with your actual credentials
6. The contact form will then send emails directly to lets@meetmushfiq.com

EXAMPLE EMAIL TEMPLATE:
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
*/
