# Sanity CMS Setup Guide for Lawgical Station Blog

## 🚀 Quick Start - What You Need To Do

### Step 1: Create Sanity Account & Project (5 minutes)

1. **Go to Sanity.io:**
   - Visit https://www.sanity.io/
   - Click "Get Started" or "Sign Up"
   
2. **Create Account:**
   - Sign up with Google/GitHub (easiest)
   - Or use email/password
   
3. **Create New Project:**
   - Click "Create New Project"
   - **Project Name:** "Lawgical Station Blog"
   - **Dataset:** Select "Production"
   - **Template:** Choose "Clean project" (we already have schemas)
   
4. **Get Your Credentials:**
   After project creation, you'll see:
   - **Project ID:** (looks like: `abc12def`)
   - **Dataset:** `production`
   
   Save these! You'll need them in Step 2.

---

### Step 2: Configure Environment Variables (2 minutes)

1. **Create `.env.local` file** in your project root:
   ```bash
   # In terminal:
   cd /home/sid/client_website_done/lawgical
   cp env.example .env.local
   ```

2. **Edit `.env.local`** and add your Sanity credentials:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc12def  # Replace with your actual Project ID
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. **Optional - API Token** (for write operations):
   - Go to https://sanity.io/manage
   - Select your project
   - Go to "API" tab
   - Click "Add API Token"
   - **Name:** "Lawgical Blog Token"
   - **Permissions:** "Editor"
   - Copy the token
   - Add to `.env.local`:
     ```
     SANITY_API_TOKEN=your-token-here
     ```

---

### Step 3: Initialize Sanity Studio (3 minutes)

1. **Install additional packages:**
   ```bash
   npm install @sanity/code-input @sanity/table @sanity/vision
   ```

2. **Initialize Sanity in your project:**
   ```bash
   npx sanity init --project-id YOUR_PROJECT_ID --dataset production
   ```
   
   When prompted:
   - **Project ID:** Enter the ID from Step 1
   - **Dataset:** `production`
   - **Output path:** `./sanity`

3. **Deploy Sanity Studio:**
   ```bash
   npx sanity deploy
   ```
   
   When prompted:
   - **Studio hostname:** `lawgical-station-blog` (or any unique name)
   
   Your Studio will be available at:
   `https://lawgical-station-blog.sanity.studio`

---

## 👤 **Author Access - How Site Owner Will Post Blogs**

### Option A: Hosted Studio (Recommended)

**URL:** `https://lawgical-station-blog.sanity.studio`

1. **Login:**
   - Go to your Sanity Studio URL
   - Login with Google/GitHub account
   
2. **Create Blog Post:**
   - Click "Blog Post" in sidebar
   - Click "Create New"
   - Fill in fields (explained below)
   
3. **Publish:**
   - Click "Publish" button
   - Blog goes live automatically!

### Option B: Local Studio

**URL:** `http://localhost:3000/studio`

- Access directly from your website
- Same functionality as hosted
- Requires website to be running

---

## ✍️ **How to Write a Blog Post (Author Guide)**

### Fields to Fill:

1. **Title** (Required)
   - Example: "Income Tax Guide for FY 2025-26"
   - This appears as blog heading

2. **Slug** (Required)
   - Click "Generate" next to slug field
   - It auto-creates URL-friendly version
   - Example: `income-tax-guide-fy-2025-26`

3. **Author** (Required)
   - Select from dropdown
   - (You'll create author profiles first)

4. **Featured Image**
   - Drag & drop image
   - Add alt text for SEO
   - Image auto-optimizes

5. **Category** (Required)
   - Select from dropdown
   - Examples: "Income Tax", "GST", "Company Law"

6. **Tags** (Optional)
   - Add relevant keywords
   - Press Enter after each tag
   - Examples: "tax filing", "deductions", "FY 2025-26"

7. **Excerpt** (Required)
   - Brief 1-2 sentence summary
   - Shown on blog cards
   - Used for meta description

8. **Body** (Main Content)
   - Rich text editor with toolbar
   - **How to use:**
   
   **Headings:**
   - Select text → Choose H2, H3, or H4 from dropdown
   
   **Formatting:**
   - **Bold:** Select text → Click B button
   - *Italic:* Select text → Click I button
   - `Code:* Select text → Click <> button
   
   **Lists:**
   - Click bullet or number icon
   - Type and press Enter for new item
   
   **Links:**
   - Select text → Click link icon → Paste URL
   
   **Images:**
   - Click + button → Select Image
   - Drag & drop image
   - Add caption
   
   **Tables:**
   - Click + button → Select Table
   - Add rows/columns as needed
   
   **Callout Boxes:**
   - Click + button → Select Callout Box
   - Choose type (Info, Warning, Tip)
   - Add title and content

9. **SEO Settings** (Optional but Recommended)
   - Meta Title (60 chars max)
   - Meta Description (160 chars max)
   - Keywords

10. **Featured Post**
    - Toggle ON to show in "Popular Posts"
    - Toggle OFF for regular posts

11. **Published Date**
    - Auto-set to current date
    - Can change if needed

### Save & Publish:

- **Save Draft:** Click "Save" (top-right)
- **Publish:** Click "Publish" button
- **Unpublish:** Click menu → Unpublish

---

## 📋 **Initial Setup Tasks for Site Owner**

### Task 1: Create Author Profiles

1. Go to Sanity Studio
2. Click "Author" in sidebar
3. Click "Create New"
4. Fill in:
   - Name: "CA Rahul Khushlani"
   - Credentials: "CS, LLB, MBA"
   - Upload photo
   - Add bio
   - Add social links (optional)
5. Click "Publish"

Repeat for all team members who will write blogs.

### Task 2: Create Categories

1. Click "Category" in sidebar
2. Create categories like:
   - Income Tax
   - GST
   - Company Law
   - Tax Planning
   - Compliance
   - etc.

### Task 3: Write First Blog!

Follow the "How to Write a Blog Post" guide above.

---

## 🎨 **Blog Will Look Like:**

### Blog Index Page (`/resources/blogs`)
```
┌─────────────────────────────────────────┐
│  Income Tax & Legal Insights            │
│  Stay updated with latest tax news      │
├─────────────────────────────────────────┤
│  [Categories: All | Income Tax | GST]   │
├─────────────────────────────────────────┤
│  ┌───────┐  ┌───────┐  ┌───────┐       │
│  │ Blog 1│  │ Blog 2│  │ Blog 3│       │
│  │ Image │  │ Image │  │ Image │       │
│  │ Title │  │ Title │  │ Title │       │
│  │ Desc  │  │ Desc  │  │ Desc  │       │
│  └───────┘  └───────┘  └───────┘       │
└─────────────────────────────────────────┘
```

### Individual Blog Post (`/resources/blogs/[slug]`)
```
┌──────┬───────────────────────┬──────────┐
│ TOC  │   Main Content        │ Sidebar  │
│      │                       │          │
│ • H2 │  Title                │ Topics   │
│ • H2 │  Author Card          │ ┌──────┐ │
│ • H2 │  Published: Date      │ │ Tag  │ │
│      │                       │ └──────┘ │
│      │  Content with:        │          │
│      │  - Headings           │ Related  │
│      │  - Paragraphs         │ ┌──────┐ │
│      │  - Images             │ │Post 1│ │
│      │  - Tables             │ │Post 2│ │
│      │  - Bold/Italic        │ └──────┘ │
│      │  - Lists              │          │
│      │  - Callouts           │ Popular  │
│      │                       │ ┌──────┐ │
│      │  Related Posts        │ │Post A│ │
│      │  CTA Section          │ │Post B│ │
└──────┴───────────────────────┴──────────┘
```

---

## 📦 **What I'm Building (No Action Needed)**

I'm creating:
- ✅ Blog layout components (3-column ClearTax style)
- ✅ Table of Contents (auto-generated from headings)
- ✅ Rich text renderer (handles all formatting)
- ✅ Blog index page with filters
- ✅ Individual blog post pages
- ✅ Category pages
- ✅ Related posts logic
- ✅ Popular posts widget
- ✅ Author cards
- ✅ SEO optimization
- ✅ Mobile responsive design

---

## 🎯 **Your Action Items:**

### ✅ Required (Must Do):

1. **Create Sanity Account** (5 min)
   - Go to https://www.sanity.io/
   - Sign up (free)
   - Create project "Lawgical Station Blog"
   - Get Project ID

2. **Configure Environment** (2 min)
   - Create `.env.local` file
   - Add your Project ID from Step 1
   
3. **Deploy Studio** (3 min)
   - Run: `npx sanity deploy`
   - Choose hostname (e.g., `lawgical-blog`)

4. **Create First Author** (2 min)
   - Login to Studio
   - Create your author profile

5. **Create Categories** (3 min)
   - Create 4-5 main categories
   - (Income Tax, GST, Compliance, etc.)

### ✅ Optional (But Helpful):

6. **Create Sample Blog** (10 min)
   - Test the system
   - See how it looks
   - Practice using editor

---

## 📝 **Sample Blog Content to Test:**

I'll provide you with ready-to-paste sample content once setup is complete!

---

## 💡 **Key Points:**

- ✅ **Free Forever:** Sanity free tier is sufficient
- ✅ **No Coding:** Author uses visual editor
- ✅ **Instant Updates:** Publish → Live in 1-2 minutes
- ✅ **Professional:** Same quality as ClearTax
- ✅ **SEO Optimized:** All meta tags handled
- ✅ **Mobile Friendly:** Responsive on all devices

---

## 🔄 **Next Steps:**

I'm now building all the blog components and pages. 

**Please start Step 1** (Create Sanity Account) while I continue coding, then you'll just need to give me the **Project ID** and we're done! 🚀

Should I continue building the blog components now?

