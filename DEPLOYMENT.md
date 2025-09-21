# Portfolio Deployment Guide

## 🚀 Quick Deployment on Debian 12 VPS

### Prerequisites Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18 (LTS)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2

# Install Nginx (for reverse proxy)
sudo apt install nginx -y

# Install Git (if not already installed)
sudo apt install git -y
```

### Initial Deployment

1. **Clone/Pull the repository to `/home/portfolio`**
2. **Make scripts executable:**
   ```bash
   chmod +x deploy.sh update.sh
   ```
3. **Run deployment script:**
   ```bash
   ./deploy.sh
   ```

### Configure Nginx

Create Nginx configuration:

```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Cache static assets
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Enable the site:

```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### SSL Certificate (Optional)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

### Future Updates

For future updates, simply run:

```bash
./update.sh
```

### Useful Commands

```bash
# PM2 Commands
pm2 status              # Check app status
pm2 logs portfolio      # View logs
pm2 restart portfolio   # Restart app
pm2 stop portfolio      # Stop app
pm2 monit              # Monitor dashboard

# Nginx Commands
sudo nginx -t          # Test configuration
sudo systemctl restart nginx  # Restart Nginx
sudo systemctl status nginx   # Check status
```

### Troubleshooting

1. **Check PM2 logs:** `pm2 logs portfolio`
2. **Check Nginx logs:** `sudo tail -f /var/log/nginx/error.log`
3. **Verify port 3000:** `curl http://localhost:3000`
4. **Check firewall:** `sudo ufw status`
