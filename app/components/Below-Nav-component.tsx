'use client';
import React, { useState } from 'react';

export default function BelowNavComponent() {
    const [productCount, setProductCount] = useState(0);

    const incrementCount = () => setProductCount(productCount + 1);
    const decrementCount = () => {
        if (productCount > 0) setProductCount(productCount - 1);
    };

    return (
        <div
            style={{
                display: 'flex',
                width: '100%', // Ensure it covers the full width
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '10px',
                gap: '20px',
                maxWidth: '100%', // Full width
                margin: '0 auto', // Center align
                border: '1px solid #ddd',
                boxSizing: 'border-box',
            }}
        >
            {/* Left Side - Image with Zoom */}
            <div
                style={{
                    flex: 1, // Equal width to the right side
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: '50%', // Adjust this if needed
                    overflow: 'hidden', // Ensure the image doesn't overflow
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: 'auto',
                        position: 'relative',
                        overflow: 'hidden', // Prevent overflow during zoom
                    }}
                >
                    <img
                        src="/sewing-machine.png" // Replace with actual path
                        alt="Sewing Machine"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '400px', // Increase image size
                            objectFit: 'cover',
                            borderRadius: '10px',
                            transition: 'transform 0.3s ease', // Smooth transition for zoom
                        }}
                        className="zoom-image"
                    />
                </div>
            </div>

            {/* Right Side - Content */}
            <div
                style={{
                    flex: 1, // Equal width to the left side
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '15px',
                    maxWidth: '50%', // Adjust this to balance
                }}
            >
                {/* Product Details */}
                <div>
                    <h2
                        style={{
                            fontSize: '1.8rem', // Larger heading
                            fontWeight: 'bold',
                            margin: '0',
                        }}
                    >
                        Cheese-appareil à raclette 1/2 roue
                    </h2>
                    <p
                        style={{
                            fontSize: '1.5rem', // Larger price
                            fontWeight: 'bold',
                            color: 'black',
                            margin: '5px 0 0',
                        }}
                    >
                        39,50<span style={{ fontSize: '1.2rem' }}>€</span>
                    </p>
                </div>

                {/* Description */}
                <div
                    style={{
                        fontSize: '1.1rem', // Increased font size
                        color: '#555',
                        lineHeight: '1.5',
                    }}
                >
                    <p style={{ margin: '5px 0' }}>
                        Location appareil à raclette - Raclette traditionnelle 1/2 roue
                    </p>
                    <p style={{ margin: '5px 0' }}>
                        Réglable en hauteur, Appareil à raclette professionnel
                    </p>
                    <p style={{ margin: '5px 0' }}>
                        Boîtier de chauffe horizontal réglable en hauteur, 220V, 900W
                    </p>
                </div>

                {/* Action Buttons */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px', // Adjust gap for better spacing
                    }}
                >
                    {/* Quantity Selector */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            overflow: 'hidden',
                        }}
                    >
                        <button
                            onClick={decrementCount}
                            style={{
                                padding: '15px',
                                backgroundColor: '#fff',
                                border: 'none',
                                borderRight: '1px solid #ddd',
                                cursor: 'pointer',
                                fontSize: '1.5rem',
                            }}
                        >
                            -
                        </button>
                        <div
                            style={{
                                padding: '15px',
                                backgroundColor: '#f9f9f9',
                                fontSize: '1.5rem',
                                minWidth: '40px',
                                textAlign: 'center',
                            }}
                        >
                            {productCount}
                        </div>
                        <button
                            onClick={incrementCount}
                            style={{
                                padding: '15px',
                                backgroundColor: '#fff',
                                border: 'none',
                                borderLeft: '1px solid #ddd',
                                cursor: 'pointer',
                                fontSize: '1.5rem',
                            }}
                        >
                            +
                        </button>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        style={{
                            padding: '15px 25px',
                            backgroundColor: '#5CD2DD',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    );
}
