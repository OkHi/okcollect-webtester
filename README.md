# OkHi Address Creator

A modern, elegant web application for creating digital addresses using the OkHi Web SDK. Built with a clean, Apple-inspired design that provides an excellent user experience.

## Features

- **Modern UI/UX**: Clean, Apple-inspired design with smooth animations
- **Form Validation**: Real-time validation with helpful error messages
- **OkHi Integration**: Seamless integration with OkHi Web SDK
- **Address Display**: Beautiful address cards with map and image display
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Error Handling**: Comprehensive error handling with user-friendly modals

## Prerequisites

Before using this application, you'll need:

1. **OkHi Account**: Sign up for an OkHi account at [https://okhi.com](https://okhi.com)
2. **Branch ID**: Your OkHi branch identifier
3. **Client Key**: Your OkHi client key for authentication
4. **Web Server**: A local or hosted web server to serve the files

## Setup Instructions

### 1. Configure OkHi Credentials

The OkHi configuration is already set up with your credentials in `script.js`:

```javascript
const config = {
  branchId: "SS3RrryAAT", // Your OkHi branch ID
  clientKey: "13478534-2df8-4771-9ddd-34c1a49283f4", // Your OkHi client key
  environment: "dev", // or 'production'
  apiUrl: "https://dev-api.okhi.io", // Dev API endpoint
};
```

### 2. Serve the Application

You can serve the application using any of these methods:

#### Using Python (if installed):

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js (if installed):

```bash
# Install a simple HTTP server
npm install -g http-server

# Serve the application
http-server -p 8000
```

#### Using PHP (if installed):

```bash
php -S localhost:8000
```

### 3. Access the Application

Open your web browser and navigate to:

```
http://localhost:8000
```

## Usage

### 1. Fill Out the Form

The form is pre-populated with sample data for testing. You can modify any field:

- **First Name**: Enter the user's first name
- **Last Name**: Enter the user's last name
- **Phone Number**: Enter a valid phone number (supports international format)
- **Email**: Enter a valid email address
- **App User ID**: Enter a unique identifier for the user

### 2. Create Address

1. Click the "Create Address" button
2. The application will validate all form fields
3. If validation passes, it will attempt to create an address using OkHi
4. A loading spinner will show during the process
5. On success, the address will be displayed in a beautiful card format

### 3. View Address Details

The created address will be displayed with:

- **Address Title**: The name of the address
- **Description**: Detailed description of the location
- **Address ID**: Unique identifier for the address
- **Status**: Verification status of the address
- **Map View**: Visual representation of the location
- **Address Image**: Photo of the location (if available)

## File Structure

```
test-okcollect-web/
├── index.html          # Main HTML file
├── styles.css          # CSS styles with Apple-inspired design
├── script.js           # JavaScript functionality and OkHi integration
└── README.md           # This documentation file
```

## Customization

### Styling

The application uses a modern, Apple-inspired design. You can customize the appearance by modifying `styles.css`:

- **Colors**: Update CSS custom properties for brand colors
- **Typography**: Modify font families and sizes
- **Layout**: Adjust spacing and component dimensions
- **Animations**: Customize transition effects

### Functionality

Modify `script.js` to:

- **Add more validation rules**: Extend the validation functions
- **Integrate with other services**: Add additional API calls
- **Customize OkHi behavior**: Modify the OkHi SDK integration
- **Add more features**: Implement additional functionality

## Error Handling

The application includes comprehensive error handling:

- **Form Validation**: Real-time field validation with clear error messages
- **Network Errors**: Graceful handling of API failures
- **SDK Errors**: Proper error messages for OkHi SDK issues
- **User Feedback**: Modal dialogs for important error messages

## Browser Compatibility

This application works with all modern browsers:

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Development Notes

### OkHi SDK Integration

The application integrates with the OkHi Web SDK to:

1. **Initialize the SDK** with your credentials
2. **Create users** with the provided information
3. **Generate addresses** using OkHi's address creation flow
4. **Display results** in a user-friendly format

### Demo Mode

For demonstration purposes, the application includes a simulation mode that:

- Creates mock address data
- Simulates API delays
- Provides realistic address information
- Shows how the UI will look with real data

To use real OkHi functionality, ensure you have valid credentials and remove the simulation code.

## Troubleshooting

### Common Issues

1. **OkHi SDK not loading**: Check your internet connection and ensure the CDN is accessible
2. **Form validation errors**: Ensure all required fields are filled correctly
3. **Address creation fails**: Verify your OkHi credentials are correct
4. **Styling issues**: Clear browser cache and reload the page

### Debug Mode

Open the browser's developer console (F12) to see:

- Console logs for debugging
- Network requests and responses
- JavaScript errors and warnings

## Support

For issues related to:

- **OkHi SDK**: Contact OkHi support
- **Application functionality**: Check the browser console for errors
- **Styling issues**: Verify CSS file is loading correctly

## License

This project is for demonstration purposes. Please ensure you comply with OkHi's terms of service when using their SDK in production applications.
