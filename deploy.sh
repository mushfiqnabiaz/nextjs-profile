#!/bin/bash

echo "🚀 Starting Portfolio Deployment..."

# Navigate to project directory
cd /home/portfolio

echo "📦 Installing dependencies..."
npm install

echo "🔧 Installing sharp for image optimization..."
npm install sharp

echo "🏗️ Building production version..."
npm run build

echo "🔄 Starting application with PM2..."
pm2 start ecosystem.config.js

echo "💾 Saving PM2 configuration..."
pm2 save

echo "✅ Portfolio deployed successfully!"
echo "📊 Check status with: pm2 status"
echo "📝 View logs with: pm2 logs portfolio"
echo "🌐 Your portfolio should be accessible at: http://your-server-ip"
