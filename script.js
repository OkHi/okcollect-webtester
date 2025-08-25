// DOM elements
const createAddressBtn = document.getElementById('createAddressBtn');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const appUserIdInput = document.getElementById('appUserId');
const addressContainer = document.getElementById('address');

// Global variable to store OkCollect instance
let okcollectInstance = null;

// Initialize OkCollect when button is clicked
createAddressBtn.addEventListener('click', function () {
    // Get form values
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const appUserId = appUserIdInput.value.trim();

    // Validate required fields
    if (!firstName || !lastName || !phone || !email || !appUserId) {
        alert('Please fill in all required fields');
        return;
    }

    // Clean up existing OkCollect instance if it exists
    if (okcollectInstance) {
        try {
            // Remove the existing instance from DOM
            const existingElements =
                addressContainer.querySelectorAll('[data-okcollect]');
            existingElements.forEach((element) => element.remove());

            // Clear any existing content
            addressContainer.innerHTML = '';

            console.log('Cleaned up previous OkCollect instance');
        } catch (error) {
            console.warn('Error cleaning up previous instance:', error);
        }
    }

    // Initialize new OkCollect instance
    try {
        okcollectInstance = new okcollect({
            target: addressContainer,
            props: {
                API_KEY: '737a20ad-8867-4db0-8b09-79fe3897a5f2',
                userFirstName: firstName,
                userLastName: lastName,
                userPhoneNumber: phone,
                onAddressSelected: (userAddress) => {
                    console.log('Address selected:', userAddress);
                    // You can handle the selected address here
                    displayAddressInfo(userAddress);
                },
                onError: (error) => {
                    console.error('OkCollect error:', error);
                },
                styleSettings: {
                    primaryColor: '#1a1a1a',
                    highlightColor: '#3b82f6',
                },
                appSettings: {
                    name: 'OkHi Address Creator',
                    version: '1.0.0',
                },
            },
        });

        console.log('New OkCollect instance created');
    } catch (error) {
        console.error('Error creating OkCollect instance:', error);
        alert('Error initializing address creator. Please try again.');
    }
});

// Display address information when selected
function displayAddressInfo(address) {
    console.log('Displaying address:', address);

    // Create a simple display of the address
    const addressInfo = document.createElement('div');
    addressInfo.innerHTML = `
        <div style="padding: 1rem; background: #f9fafb; border-radius: 8px; margin-top: 1rem;">
            <h3 style="margin: 0 0 0.5rem 0; color: #1a1a1a;">Address Created Successfully!</h3>
            <p style="margin: 0; color: #6b7280;">Address ID: ${
                address.id || 'N/A'
            }</p>
            <p style="margin: 0.25rem 0 0 0; color: #6b7280;">Status: ${
                address.status || 'Created'
            }</p>
        </div>
    `;

    // Add to the address container
    addressContainer.appendChild(addressInfo);
}
