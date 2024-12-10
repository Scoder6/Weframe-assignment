import React from 'react';

export default function MiddleContent() {
    return (
        <div
            style={{
                background: 'linear-gradient(180deg, #FFF3F9 0%, #FFFFFF 56.61%)', // Updated gradient
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px', // Add padding for spacing
                borderRadius: '10px', // Optional for rounded corners
                overflow: 'hidden',
            }}
        >
            {/* Added the image */}
            <img
                src="/middle-content.png" // Replace with your actual path
                alt="Middle Content"
                style={{
                    maxWidth: '100%', // Ensure responsiveness
                    height: 'auto', // Maintain aspect ratio
                }}
            />
        </div>
    );
}
