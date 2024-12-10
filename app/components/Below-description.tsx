"use client";
import React, { useState } from 'react';

export default function BelowDescription() {
    const [index, setIndex] = useState(0);

    const images = new Array(7).fill('/Card.png'); // Repeat image 7 times

    // Next and previous button functions
    const nextImage = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to the start
    };

    const prevImage = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Loop to the end
    };

    return (
        <div>
            {/* Heading and "VOIR TOUTE LA COLLECTION" text */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                }}
            >
                <h2>Articles similaires</h2>
                <a
                    href="#"
                    style={{
                        textDecoration: 'underline',
                        color: '#000',
                    }}
                >
                    VOIR TOUTE LA COLLECTION
                </a>
            </div>

            {/* Image carousel */}
            <div
                style={{
                    display: 'flex',
                    overflow: 'hidden',
                    gap: '10px',
                    justifyContent: 'center',
                    position: 'relative', // For absolute positioning of buttons
                }}
            >
                {/* Left Button (Square with arrows inside) */}
                <button
                    onClick={prevImage}
                    style={{
                        position: 'absolute',
                        left: '0',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: '#5CD2DD',
                        color: 'white',
                        width: '30px',
                        height: '30px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    &#8592; {/* Left arrow symbol */}
                </button>

                {/* Carousel Images */}
                <div
                    style={{
                        display: 'flex',
                        transition: 'transform 0.5s ease', // Smooth, but fast transition
                        transform: `translateX(-${index * (100 / 4)}%)`, // Adjust for 4 images visible at once
                    }}
                >
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src='/card.png'
                            alt="Card"
                            style={{
                                width: 'calc(100% / 4)', // Each image takes up 1/4 of the container width
                                height: 'auto',
                                objectFit: 'cover',
                                borderRadius: '10px',
                            }}
                        />
                    ))}
                </div>

                {/* Right Button (Square with arrows inside) */}
                <button
                    onClick={nextImage}
                    style={{
                        position: 'absolute',
                        right: '0',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: '#5CD2DD',
                        color: 'white',
                        width: '30px',
                        height: '30px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    &#8594; {/* Right arrow symbol */}
                </button>
            </div>
        </div>
    );
}
