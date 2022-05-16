import React from 'react';
import woman from '../../icons/janedoe.jpeg';
import './ProviderHeader.css';

type ProviderHeaderProps = {
    firstName: string,
    lastName: string,
    title: string,
    clinicName: string
}

function ProviderHeader(props: ProviderHeaderProps) {
    return (
        <div className="provider-header">
            <div className="provider-info">

                <div className="image-container">
                    <img id="woman-image" src={woman}/>
                </div>

                <div>
                    <h1 className="provider-name">
                        {props.firstName}&nbsp;{props.lastName},&nbsp;{props.title}
                    </h1>
                    <h3 className="provider-clinic">
                        {props.clinicName}
                    </h3>
                </div>
            </div>

            <hr id="provider-header-line"/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default ProviderHeader;