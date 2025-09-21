#!/bin/bash

echo "🔄 Updating Portfolio..."

# Navigate to project directory
cd /home/portfolio

echo "📥 Pulling latest changes..."
git pull origin main

echo "📦 Installing/updating dependencies..."
npm install

echo "🏗️ Building project..."
npm run build

echo "🔄 Restarting application..."
pm2 restart portfolio

echo "✅ Portfolio updated successfully!"
echo "📊 Check status with: pm2 status"
echo "📝 View logs with: pm2 logs portfolio"
