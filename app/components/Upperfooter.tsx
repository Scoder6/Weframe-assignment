import React, { JSX } from 'react';

export function UpperFooter(): JSX.Element {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'stretch',
                padding: '15px', // Reduced padding for smaller height
                border: '1px solid #ddd',
                borderRadius: '10px',
                backgroundColor: 'white',
                overflow: 'hidden',
                gap: '15px', // Adjusted gap between columns
            }}
        >
            {/* Left Side - Image */}
            <div
                style={{
                    flex: 1,
                    borderRadius: '10px',
                    overflow: 'hidden'
                }}
            >
                <img
                    src="/BUFFET_037%201.png"
                    alt="BUFFET"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>

            {/* Right Side - Content */}
            <div
                style={{
                    flex: 1,
                    padding: '15px', // Reduced padding for smaller height
                    borderRadius: '10px',
                    background: '#FFF3F9',
                    color: 'black',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                {/* Heading */}
                <h2
                    style={{
                        margin: '0 0 10px 0', // Closer to the description
                        fontSize: '1.8rem', // Slightly smaller heading size
                        fontStyle: 'italic', // Italic heading
                        color: 'black',
                    }}
                >
                    S'inscrire & économiser{' '}
                    <span style={{ color: '#5CD2DD' }}>10%</span>
                </h2>

                {/* Description */}
                <p
                    style={{
                        color: '#BDA2B0',
                        margin: '0 0 15px 0', // Proper spacing below description
                        lineHeight: '1.5',
                        fontSize: '1rem',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3, // Limit to 3 lines
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    Office ipsum you must be muted. Synergize helicopter prioritize
                    anyway job due harvest most opportunity didn't. Yet busy any
                    meeting shark light marginalised 4-blocker message. Productize
                    corporate nail caught synergy highlights lunch. Company another
                    pushback items dear or any.
                </p>

                {/* Mail Input and Button */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                    }}
                >
                    <input
                        type="email"
                        placeholder="john@doe.com"
                        style={{
                            flex: 1,
                            padding: '8px', // Reduced padding for smaller height
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                        }}
                    />
                    <button
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '8px 16px', // Adjusted button size
                            backgroundColor: '#5CD2DD',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        S'INSCRIRE{' '}
                        <span style={{ marginLeft: '5px', fontSize: '16px' }}>➤</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
