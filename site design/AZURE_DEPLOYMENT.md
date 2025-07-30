# Azure Static Web Apps Deployment Guide

## Overview
Your React Network Design Editor application is now configured for deployment to Azure Static Web Apps with automatic GitHub Actions integration.

## Step-by-Step Deployment Instructions

### 1. Create Azure Static Web App Resource

1. **Login to Azure Portal:**
   - Go to [portal.azure.com](https://portal.azure.com)
   - Sign in with your Azure account

2. **Create Static Web App:**
   - Click "Create a resource"
   - Search for "Static Web App"
   - Click "Create"

3. **Configure Basic Settings:**
   - **Subscription:** Select your Azure subscription
   - **Resource Group:** Create new or select existing
   - **Name:** `network-design-prototype` (or your preferred name)
   - **Plan type:** Free (for development) or Standard (for production)
   - **Region:** Choose closest to your users

4. **Configure GitHub Integration:**
   - **Source:** GitHub
   - **GitHub account:** Your account (abhiur_microsoft)
   - **Organization:** abhiur_microsoft
   - **Repository:** prototypes
   - **Branch:** main

5. **Configure Build Details:**
   - **Build presets:** React
   - **App location:** `/` (root of repository)
   - **Api location:** (leave empty)
   - **Output location:** `dist`

6. **Review and Create:**
   - Review all settings
   - Click "Create"

### 2. Automatic Configuration

Once created, Azure will:
- Add a GitHub secret `AZURE_STATIC_WEB_APPS_API_TOKEN` to your repository
- The GitHub Actions workflow is already configured in `.github/workflows/azure-static-web-apps.yml`
- Trigger the first deployment automatically

### 3. Monitor Deployment

1. **GitHub Actions:**
   - Go to your GitHub repository
   - Click "Actions" tab
   - Monitor the deployment workflow

2. **Azure Portal:**
   - Go to your Static Web App resource
   - Check the "GitHub Actions" tab for deployment status
   - View the application URL once deployed

### 4. Access Your Application

Once deployed, your application will be available at:
```
https://<generated-subdomain>.azurestaticapps.net
```

The URL will be shown in the Azure Portal under your Static Web App resource.

## Configuration Files

### staticwebapp.config.json
- Configures routing for React Router
- Handles SPA fallbacks
- Sets up proper MIME types

### GitHub Actions Workflow
- Automatically builds and deploys on push to main
- Uses Node.js 18 and npm
- Deploys to Azure Static Web Apps

### Build Configuration
- Uses `npm run build` command
- Outputs to `dist` directory
- Base path set to `/` for Azure hosting

## Features Included

✅ Automatic deployments on push to main branch
✅ Pull request preview environments
✅ Custom domain support (configurable in Azure Portal)
✅ SSL certificate management
✅ Global CDN distribution
✅ Authentication integration (if needed)

## Troubleshooting

### Build Fails
- Check GitHub Actions logs for detailed error messages
- Ensure all dependencies are listed in package.json
- Verify build script works locally with `npm run build`

### Routing Issues
- Check staticwebapp.config.json for proper SPA fallback
- Ensure React Router routes are configured correctly

### Deployment Token Issues
- Verify AZURE_STATIC_WEB_APPS_API_TOKEN secret exists in GitHub
- Regenerate token in Azure Portal if needed

## Next Steps

1. **Custom Domain:** Configure in Azure Portal > Custom domains
2. **Authentication:** Set up Azure AD, GitHub, or other providers
3. **API Integration:** Add Azure Functions for backend functionality
4. **Monitoring:** Set up Application Insights for performance monitoring

## Cost Considerations

- **Free Tier:** 100 GB bandwidth, 0.5 GB storage
- **Standard Tier:** 100 GB bandwidth included, additional charges apply
- No charges for build minutes on GitHub Actions

Your application is now ready for enterprise-scale deployment with Azure Static Web Apps!
