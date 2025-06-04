import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configuration
EMAIL_ADDRESS = os.getenv('EMAIL_ADDRESS', 'example@gmail.com')
EMAIL_PASSWORD = os.getenv('EMAIL_PASSWORD', 'password')
RECIPIENT_EMAIL = os.getenv('RECIPIENT_EMAIL', 'marwanlmusa@gmail.com')

@app.route('/api/contact', methods=['POST'])
def contact():
    """Handle contact form submissions"""
    data = request.json
    
    if not data:
        return jsonify({'success': False, 'message': 'No data provided'}), 400
    
    # Validate required fields
    required_fields = ['name', 'email', 'subject', 'message']
    for field in required_fields:
        if field not in data or not data[field].strip():
            return jsonify({'success': False, 'message': f'Missing required field: {field}'}), 400
    
    # In a production environment, we would send an email
    # For demonstration, we'll just log the message and return success
    print(f"Contact form submission received from {data['name']} ({data['email']})")
    print(f"Subject: {data['subject']}")
    print(f"Message: {data['message']}")
    
    # Uncomment to enable actual email sending (requires valid SMTP credentials)
    # try:
    #     send_email(data)
    # except Exception as e:
    #     print(f"Error sending email: {str(e)}")
    #     return jsonify({'success': False, 'message': 'Failed to send email'}), 500
    
    return jsonify({
        'success': True, 
        'message': 'Message received! Thank you for contacting me.'
    })

def send_email(data):
    """Send email using SMTP"""
    msg = MIMEMultipart()
    msg['From'] = EMAIL_ADDRESS
    msg['To'] = RECIPIENT_EMAIL
    msg['Subject'] = f"Portfolio Contact: {data['subject']}"
    
    body = f"""
    You have received a new message from your portfolio website:
    
    Name: {data['name']}
    Email: {data['email']}
    
    Message:
    {data['message']}
    """
    
    msg.attach(MIMEText(body, 'plain'))
    
    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        server.send_message(msg)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
