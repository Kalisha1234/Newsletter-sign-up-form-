# GitHub Actions CI Setup

## Overview
Automated Selenium test execution using GitHub Actions CI/CD pipeline.

## Workflow Triggers
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

## Pipeline Steps
1. Checkout code
2. Set up Java 11
3. Install Chrome browser
4. Install Maven dependencies
5. Run Selenium tests with detailed logging (-X flag)
6. Upload test reports as artifacts
7. Send email notifications

## Setup Instructions

### 1. Configure GitHub Secrets
Go to your repository → Settings → Secrets and variables → Actions

Add these secrets:
- `EMAIL_USERNAME`: Your Gmail address
- `EMAIL_PASSWORD`: Gmail app password (not regular password)
- `NOTIFICATION_EMAIL`: Email to receive notifications

### 2. Generate Gmail App Password
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Go to App Passwords
4. Generate password for "Mail"
5. Use this password for `EMAIL_PASSWORD` secret

### 3. Push to GitHub
```bash
git add .
git commit -m "Add CI pipeline"
git push origin main
```

## Features
✅ Automated test execution on push/PR
✅ Chrome browser installation
✅ Detailed test logs (-X flag)
✅ Test report artifacts
✅ Email notifications on pass/fail
✅ Build status in GitHub UI

## Alternative: Slack Notifications
Replace email step with:
```yaml
- name: Slack Notification
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```
