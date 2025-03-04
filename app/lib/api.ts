/**
 * API utility functions for securely accessing external services
 * This file demonstrates how to use environment variables for API keys
 */

// Example function for email service
export async function sendContactEmail(name: string, email: string, message: string) {
  try {
    // The API key is accessed from environment variables
    // This key is only available on the server and never exposed to the client
    const apiKey = process.env.EMAIL_SERVICE_API_KEY;
    
    if (!apiKey) {
      console.error("Missing EMAIL_SERVICE_API_KEY environment variable");
      throw new Error("Email service configuration error");
    }
    
    // Example API call to a hypothetical email service
    const response = await fetch('https://api.emailservice.com/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: email,
        name: name,
        message: message
      })
    });
    
    if (!response.ok) {
      throw new Error(`Email API error: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}

// Example function for GitHub API (if needed for your projects section)
export async function fetchGitHubRepos() {
  try {
    // For authenticated requests that need to be made from the client,
    // you can use a server-side API route to hide the actual API keys
    const response = await fetch('/api/github/repos');
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    throw error;
  }
}

// Public API keys (if needed) can be accessed using the NEXT_PUBLIC_ prefix
export const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID; 