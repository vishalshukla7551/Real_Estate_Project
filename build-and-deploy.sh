#!/bin/bash

# Step 1: Build React app
echo "Building React app..."
cd client && npm install && npm run build
cd ..

# Step 2: Copy the build folder to Node.js backend
echo "Copying build folder to backend..."
rm -rf api/build  # Optional: Remove previous build to avoid any stale files
cp -r client/build api/

# # Step 3: Deploy your app (Here you would deploy to your hosting platform, e.g., Railway, Render)
# echo "Deploying app..."
# # Add deployment commands based on your platform
# # For example, using Git commands or API calls to deploy to Railway/Render/DigitalOcean

# # Example of pushing to GitHub
# git add .
# git commit -m "Automated deployment"
# git push origin main

# # Step 4: Done
echo "Process complete!"
