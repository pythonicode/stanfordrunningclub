# Stanford Running Club

Whether you're a beginner or an experienced runner, Stanford Running Club welcomes everyone! We organize regular group runs, track workouts, and fun running events throughout the week. From casual campus loops to epic Stanford-to-Sea adventures, we're your running community at Stanford. 🌲

## 🤝 Contributing

### No Code Required

You can contribute to this website without any coding knowledge! Simply modify the configuration files in the `/src/config` folder:

- `home.ts`: Schedule, hero section, and important links
- `about.ts`: Club description, images, and traditions
- `runs.ts`: Running routes and descriptions
- `team.ts`: Information about the competitive team & records
- `contact.ts`: Contact information for the club officers

To update these files:
1. Navigate to the file you want to edit in the `/src/config` folder
2. Edit the text within the quotation marks
3. For images, add new images to the appropriate folder and update the file paths
4. Follow the "Deploying to Github" section below to submit your changes

### Code Contributions

This website is built with [Astro](https://astro.build), a modern web framework. The project structure follows Astro conventions:

```
/
├── src/
│ ├── components/
│ ├── layouts/
│ ├── pages/
│ └── config/
└── public/
```

For development (pnpm recommended):
1. Install dependencies: `pnpm install` or `npm install`
2. Start local server: `pnpm dev` or `npm run dev`
3. Build production: `pnpm build` or `npm run build`

Refer to [Astro's documentation](https://docs.astro.build) for detailed information about components, routing, and styling.

### Deploying to Github

1. **Fork the Repository**
   - Visit the repository at [pythonicode/stanford-running-club](https://github.com/pythonicode/stanford-running-club)
   - Click the "Fork" button in the top-right corner
   - This creates your own copy of the repository

2. **Make Your Changes**
   - On your forked repository, make the desired changes
   - For file edits directly on Github:
     - Navigate to the file you want to edit
     - Click the pencil icon (Edit file)
     - Make your changes
     - At the bottom, add a description of your changes
     - Click "Commit changes"

3. **Create a Pull Request**
   - Return to your forked repository
   - Click "Contribute" > "Open pull request"
   - Add a title describing your changes
   - In the description, explain what you modified and why
   - Click "Create pull request"

4. **Request Review**
   - On the right sidebar of your pull request, click the gear icon next to "Reviewers"
   - Search for and select "pythonicode"
   - Wait for review and address any feedback

For assistance with this process, feel free to open an issue on the repository or contact the maintainers (Anthony Riley).
