import React from 'react';

export default function Frame() {
    return (
        <div style={{ width: '100%', padding: '20px' }}>
            {/* Heading and Underlined Text Row */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                }}
            >
                {/* Left Side Heading */}
                <h2 style={{ margin: 0 }}>Ces produits pourraient vous intéresser</h2>

                {/* Right Side Underlined Text */}
                <a
                    href="#"
                    style={{
                        textDecoration: 'underline',
                        color: 'black',
                        fontSize: '1rem',
                    }}
                >
                    VOIR TOUTE LA COLLECTION
                </a>
            </div>

            {/* Image below the Texts */}
            <img
                src="/frame.png" // Replace with actual path to your image
                alt="Frame"
                style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '10px',
                }}
            />
        </div>
    );
}
