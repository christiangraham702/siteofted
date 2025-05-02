# Downloads Directory

This directory contains downloadable files for the website.

## Structure

- `/downloads/portfolio.pdf` - Main portfolio PDF
- `/downloads/reports/` - Project-specific reports
  - `/downloads/reports/urban_sprawl_report.pdf` - Urban Sprawl project report

## Usage

Files in this directory are served directly by Next.js without routing through the application code. To add a new downloadable file:

1. Place the file in the appropriate subdirectory
2. Reference it in your code with the path `/downloads/your-file-name.ext`

## Security

Ensure that sensitive files are not placed in this directory as they will be publicly accessible. 