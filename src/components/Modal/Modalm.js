import React from 'react'

export default function Modalm({showModal,children, hideModal}) {
    return (
        showModal && (
            <div className="modalBackground" onClick={hideModal}>
                <div className="modalContainer">
                    {children}
                </div>
            </div>
        )
            
    )
}
