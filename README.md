# Christian Graham's Personal Website

This is the source code for my personal website, showcasing my projects and skills.

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/christiangraham702/site-of-ted.git
   cd site-of-ted
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` to add your actual API keys:
   ```
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id-here
   EMAIL_SERVICE_API_KEY=your-email-api-key-here
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   ```

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Environment Variables

This project uses environment variables to secure API keys and sensitive information. Here's what you need to set up:

### Required Variables

- `EMAIL_SERVICE_API_KEY`: API key for your email service provider
- `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`: GitHub API credentials (if you want to display dynamic repository data)

### Optional Variables

- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`: Google Analytics ID (if you want to track site analytics)

## Deployment

### Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure the environment variables in the Vercel dashboard
4. Deploy!

### Other Hosting Providers

Make sure to set up the environment variables on your hosting provider's platform before deploying.

## Security Notes

- Never commit your `.env.local` file to version control
- Use environment variables for all sensitive information
- Only prefix variables with `NEXT_PUBLIC_` if they absolutely need to be exposed to the browser
- For maximum security, always use server API routes to interact with external services

## Features

- Dark/Light mode toggle
- Multiple theme options
- Responsive design
- Contact form
- Project showcase
- About/Skills section
- GitHub integration

## Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
