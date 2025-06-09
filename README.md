# Portfolio Website for Marwan Musa

This repository contains a comprehensive portfolio website for Marwan Musa, a Software & AI Engineer. The website is built using Next.js and Tailwind CSS for the frontend, with a Python/Flask backend for handling contact form submissions.

## Project Structure

The project is divided into two main parts:

1. **Frontend (Next.js & Tailwind CSS)**
   - Located in the `/frontend` directory
   - Responsive design with animations using Framer Motion
   - Sections: Hero, About, Experience, Projects, Skills, Training, Contact

2. **Backend (Python/Flask)**
   - Located in the `/backend` directory
   - API endpoint for contact form submissions
   - CORS handling for frontend-backend communication

## Getting Started

### Running the Backend

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Activate the virtual environment:
   ```
   source venv/bin/activate
   ```

3. Create a `.env` file based on `.env.example` and update with your email credentials:
   ```
   cp .env.example .env
   # Edit .env with your actual email credentials
   ```

4. Start the Flask server:
   ```
   python src/main.py
   ```
   The backend will run on http://localhost:5000

### Running the Frontend

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies (if not already done):
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```
   The frontend will run on http://localhost:3000

## Deployment

### Frontend Deployment

The Next.js frontend can be deployed to services like Vercel or Netlify:

1. Build the production version:
   ```
   npm run build
   ```

2. For Vercel deployment:
   ```
   npm install -g vercel
   vercel
   ```

### Backend Deployment

The Flask backend can be deployed to services like Heroku, AWS, or Google Cloud:

1. For Heroku deployment:
   ```
   pip install gunicorn
   echo "web: gunicorn src.main:app" > Procfile
   ```

2. Set up environment variables on your hosting platform based on the `.env.example` file.

## Customization

- **Images**: Replace placeholder images in the `/frontend/public` directory with actual project screenshots and profile photo
- **Content**: Update the data in component files to reflect any changes to your experience or projects
- **Styling**: Modify the color scheme and typography in `/frontend/src/app/globals.css`

## Features

- Responsive design for all screen sizes
- Interactive animations with Framer Motion
- Contact form with backend validation
- Project showcase with filtering options
- Skills visualization
- Experience timeline
- Training and certification showcase

## Technologies Used

- **Frontend**:
  - Next.js 15
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - React Icons

- **Backend**:
  - Python 3.11
  - Flask
  - Flask-CORS
  - python-dotenv

## License

This project is licensed under the MIT License - see the LICENSE file for details.
