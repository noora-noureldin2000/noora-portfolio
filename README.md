# 📘 How to Create Your Own Professional Portfolio Website
### A Step-by-Step Beginner's Tutorial

---

## 🎯 What Are We Building?

A **professional portfolio website** for yourself — like a digital CV/resume that you can share with employers, clients, or collaborators. It will include:

- Your name, photo, and contact info
- Your work experience and education
- Your skills and services
- Links to your publications and work samples
- Your GitHub projects
- A contact section

By the end of this tutorial, you'll have a **live website on the internet** with a shareable link.

---

## 🧠 What You Need Before Starting

| Requirement | Details |
|------------|---------|
| **A computer** | Windows, Mac, or Linux |
| **Internet connection** | For downloading tools and uploading your site |
| **An email account** | For creating accounts on various platforms |
| **About 1–2 hours** | The first time takes a while; updates are much faster |
| **Your CV/resume info** | Your experience, education, skills, etc. (have it handy) |

**No coding experience needed.** This tutorial walks you through everything.

---

## 📋 Overview of the Steps

```
Step 1  — Install Visual Studio Code (a text editor)
Step 2  — Install Node.js (the engine that runs the website)
Step 3  — Download the portfolio template (the starter files)
Step 4  — Open the template in VS Code
Step 5  — Create a GitHub account (to store your code online)
Step 6  — Use OpenCode AI to customize the portfolio with your info
Step 7  — Upload your code to GitHub
Step 8  — Deploy your website on Vercel (makes it live on the internet)
Step 9  — Share your link!
```

---

## 🔧 Step 1: Install Visual Studio Code (VS Code)

Visual Studio Code is a program that lets you see and edit the files of your website.

1. Open your web browser and go to: **https://code.visualstudio.com**
2. Click the blue **Download for Windows** button (or Mac/Linux if applicable)
3. Once downloaded, open the installer file
4. Follow the installation steps — just keep clicking "Next" with all the default settings
5. When it's done, open VS Code from your Start Menu / Applications folder

---

## ⚙️ Step 2: Install Node.js

Node.js is the engine that will build your website files.

1. Go to: **https://nodejs.org**
2. You'll see two download buttons. Click the one on the left that says **LTS** (Long Term Support — the stable version)
3. Open the downloaded installer file
4. Click through the installation — keep all default settings, just click "Next" then "Install"
5. Once done, restart your computer (important!)

---

## 📦 Step 3: Download the Portfolio Template

The template is a folder containing all the files needed to build your portfolio website. We'll use the files from the "SerisLab" project (which is what we used in this tutorial).

**Option A: Download directly (easier)**
1. Go to: https://github.com/noora-noureldin2000/noora-portfolio
2. Click the green **Code** button
3. Click **Download ZIP**
4. Extract the ZIP file to a folder on your Desktop called `my-portfolio`

**Option B: If you're starting fresh with the original SerisLab template**
1. Ask OpenCode AI to provide you with the starter files
2. Or contact the tutorial author for a clean template

---

## 📂 Step 4: Open the Template in VS Code

1. Open **Visual Studio Code**
2. Click **File** → **Open Folder** (top-left menu)
3. Navigate to the `my-portfolio` folder you extracted, select it, and click **Select Folder**
4. You'll see the file list on the left side of VS Code

---

## 🌐 Step 5: Create a GitHub Account

GitHub is a website that stores your code online. Think of it like Google Drive but specifically for code.

1. Go to: **https://github.com/signup**
2. Enter your email address, create a password, and choose a username
3. Verify your email address (they'll send you a code)
4. That's it — you now have a GitHub account

**Important:** Remember your GitHub username AND your password — you'll need them later.

---

## 🤖 Step 6: Customize Your Portfolio Using OpenCode AI

This is where the magic happens. OpenCode is an AI assistant that can edit your portfolio files for you. Instead of manually editing code, you tell it what you want and it does the work.

### 6.1 — Get OpenCode AI Access

At the time of writing, OpenCode was accessed via a specific tool interface. The exact method depends on how you're running it (check the documentation at opencode.ai). You'll typically:
- Open a terminal (Terminal → New Terminal in VS Code)
- Type a command to start OpenCode
- Then chat with it to make changes

### 6.2 — What to Tell OpenCode

OpenCode works best when you give it clear instructions. Here's a template for what to say:

> *"I want to create a portfolio website for myself. Please customize the SerisLab template with my information:"*
>
> **MY NAME:** [Your full name]
> **MY TITLE:** [Your job title, e.g., "Medical Writer | Clinical Pharmacy Instructor"]
> **MY LOCATION:** [City, Country]
> **MY PHONE:** [Your phone number]
> **MY EMAIL:** [Your email address]
> **MY LINKEDIN:** [Your LinkedIn profile URL]
> **ABOUT ME:** [2–3 paragraphs about yourself]
> **MY SKILLS:** [List your skills grouped by category]
> **MY WORK EXPERIENCE:** [For each job: job title, company name, dates, and 3–5 bullet points of what you did]
> **MY EDUCATION:** [Your degrees, schools, and graduation years]
> **MY PUBLICATIONS:** [Any papers or articles you've published]
> **MY SERVICES:** [What you offer — writing, tutoring, data analysis, etc.]

### 6.3 — What OpenCode Will Do

OpenCode will:
1. Create a file called `noora-portfolio.ts` that contains ALL your information
2. Create section components (Hero, About, Services, Experience, Skills, Portfolio, Contact, Footer)
3. Update the main page to include all sections
4. Update the website's title and description for search engines

### 6.4 — Review the Changes

After OpenCode finishes:
1. In VS Code, look at the file list on the left
2. Find the file called `src/data/noora-portfolio.ts` — this is where your info lives
3. Double-click it to open it
4. Check that all your information is correct
5. If something is wrong, tell OpenCode: *"Please fix [the error] in the portfolio data file"*

---

## ☁️ Step 7: Upload Your Code to GitHub

Now you'll put your code on GitHub so it's stored safely online.

### 7.1 — Create a New Repository on GitHub

A "repository" (or "repo") is like a folder for your project on GitHub.

1. Go to **https://github.com/new** while logged into GitHub
2. In the **Repository name** field, type: `my-portfolio`
3. Leave the description blank (optional)
4. Choose **Public** (so anyone can see it — this is important for the free hosting)
5. **DO NOT** check "Add a README file" or any other options — we want an empty repo
6. Click the green **Create repository** button

You'll now see a page with commands. Keep this page open.

### 7.2 — Connect Your Local Folder to GitHub

Now we'll use the terminal (command prompt) inside VS Code:

1. In VS Code, click **Terminal** → **New Terminal** (top menu)
2. A panel will open at the bottom of VS Code
3. Type these commands one at a time, pressing Enter after each:

```bash
git init
git add -A
git commit -m "Initial commit — my portfolio"
```

You'll see lots of messages — that's normal.

### 7.3 — Link to GitHub and Upload

On your GitHub page (from step 7.1), you'll see a section titled **"…or push an existing repository from the command line"**. It will have commands that look like this:

```bash
git remote add origin https://github.com/YOUR-USERNAME/my-portfolio.git
git branch -M main
git push -u origin main
```

Copy and paste each of these commands one at a time into the VS Code terminal (press Enter after each).

**Troubleshooting:** If it asks for a username and password:
- Username: Your GitHub username
- Password: You need to use a "Personal Access Token" instead of your regular password
  - Go to: https://github.com/settings/tokens/new
  - Check the box next to **repo** (full control)
  - Scroll down and click **Generate token**
  - Copy the long string of letters and numbers
  - Paste it as the password when prompted

✅ **Done!** Your code is now on GitHub at: `https://github.com/YOUR-USERNAME/my-portfolio`

---

## 🚀 Step 8: Deploy Your Website on Vercel (Make It Live)

Vercel is a service that takes your code from GitHub and turns it into a live website that anyone can visit on the internet.

### 8.1 — Create a Vercel Account

1. Go to: **https://vercel.com/signup**
2. Click **Continue with GitHub**
3. It will ask you to authorize Vercel to access your GitHub account — click **Authorize**
4. Follow the remaining steps to complete signup

### 8.2 — Import Your Repository

1. Once logged into Vercel, click **Add New** → **Project**
2. You'll see a list of your GitHub repositories. Find `my-portfolio` and click **Import**
3. The settings page will appear. **Don't change anything** — the default settings are correct
4. Scroll down and click **Deploy**

### 8.3 — Wait for Deployment

Vercel will now build and deploy your website. This takes about 1–2 minutes. You'll see a progress screen.

When it's done, you'll see a big **Congratulations!** message with a URL like:
```
https://my-portfolio-abc123.vercel.app
```

Click **Continue to Dashboard**.

### 8.4 — Get Your Clean Shareable URL

1. On the project dashboard, click **Settings** (top tab)
2. Scroll down to the **Domains** section
3. You'll see a URL like `my-portfolio-xyz.vercel.app` — this is your permanent link
4. Copy this URL

⚠️ **Important:** At this point, your website is LIVE on the internet! Anyone with the link can see it.

---

## 🔗 Step 9: Share Your Portfolio

You can now share your portfolio link with anyone:

- **Employers** — add it to your CV and job applications
- **Clients** — send it when pitching your services
- **LinkedIn** — add it to your LinkedIn profile's "Featured" section
- **Email signature** — include the link in your email

---

## 🔄 How to Make Updates Later

When you want to change something on your portfolio (add a new job, update your skills, fix a typo):

**Using OpenCode AI:**
1. Open VS Code and open your `my-portfolio` folder
2. Start OpenCode
3. Tell it: *"Update my portfolio: [describe what changed]"*
4. OpenCode will modify the files for you

**Manually:**
1. Open `src/data/noora-portfolio.ts` in VS Code
2. Find the section you want to change (e.g., `experience:` for work history)
3. Edit the text
4. Save the file (Ctrl+S)

**Publishing updates:**
1. In VS Code terminal, type:
```bash
git add -A
git commit -m "Updated experience section"
git push
```

That's it! Vercel will automatically detect the change and update your live website within a minute.

---

## 🧹 Quick Reference: Key Files

| File | What It Contains |
|------|-----------------|
| `src/data/noora-portfolio.ts` | **ALL your information** — name, experience, skills, education, publications, etc. Edit this to update your portfolio |
| `src/components/noora-portfolio/` | Each section of the page (Hero, About, Services, etc.) |
| `src/app/page.tsx` | The main page that assembles all sections together |
| `src/app/layout.tsx` | The page title and description that shows up in Google search results |

---

## ❓ Frequently Asked Questions

**Q: Do I need to pay for anything?**
A: No. GitHub is free. Vercel has a free tier that handles this type of website perfectly. The template we used is free.

**Q: Can I use my own domain name (like myname.com)?**
A: Yes! You can buy a domain from Google Domains or Namecheap, then add it in Vercel's Settings → Domains section. Vercel provides SSL (the padlock icon) for free.

**Q: How long does the deployment take?**
A: About 2 minutes the first time. Updates take about 30 seconds.

**Q: What if I break something?**
A: The original template is always safe on GitHub. You can ask OpenCode to fix it, or delete the folder and start again from step 3.

**Q: Can I see what the website looks like before publishing?**
A: Yes. In VS Code terminal, type `npm run dev` and open `http://localhost:3000` in your browser. You'll see a live preview that updates as you make changes.

---

## 📚 Summary Checklist

```
[ ] VS Code installed
[ ] Node.js installed
[ ] Template files downloaded and opened in VS Code
[ ] GitHub account created
[ ] Portfolio customized using OpenCode AI
[ ] Code uploaded to GitHub
[ ] Website deployed on Vercel
[ ] Shareable link obtained and tested
[ ] Link added to LinkedIn, CV, email signature
```

---

## 🆘 Need Help?

If you get stuck at any step:
1. **Re-read the step carefully** — each instruction is specific
2. **Check your spelling** — one wrong letter can break a command
3. **Ask OpenCode for help** — try: *"I'm stuck at [step]. Here's what happened: [describe the error]. What should I do?"*

---

*Tutorial created for Noora Noureldin's portfolio project — July 2026*
