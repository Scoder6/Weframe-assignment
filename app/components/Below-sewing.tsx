import React from 'react';

export default function BelowSewing() {

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                gap: '20px',
                maxWidth: '1000px',
                margin: '0 auto',
            }}
        >
            {/* Left Side - Description */}
            <div
                style={{
                    flex: 1,
                    textAlign: 'left',
                    fontSize: '1rem',
                    color: '#555',
                    lineHeight: '1.2',

                }}
            >
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
                    Description produit
                </h2>
                <p className='text-[#9C9C9C]'>
                    Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".
                </p>
            </div>

            {/* Right Side - Images */}
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    justifyContent: 'space-between',
                }}
            >
                <img
                    src="/below.png" // Replace with actual path
                    alt="Below Image"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        borderRadius: '5px',
                    }}
                />
                <img
                    src="/above.png" // Replace with actual path
                    alt="Above Image"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        borderRadius: '5px',
                    }}
                />

            </div>
        </div>
    );
}
