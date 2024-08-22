import React from 'react'
import logo from '../components/images/logo.svg'

import warningImg from './images/warning.png'


export default function NotFoundPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '125px' }}>
            <div style={{ marginTop: '20px' }}>
                <img src={warningImg} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                <img style={{ width: '160px', height: '190px' }} src={logo} alt='logo' />
                <span style={{ fontWeight: 'bold', fontSize: '32px' }}>We apologize for the inconvenience, technical work is currently underway, please wait</span>
            </div>
        </div>
    )
}
