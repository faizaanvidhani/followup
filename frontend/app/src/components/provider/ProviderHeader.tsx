import React from 'react';
import woman from '../../icons/janedoe.jpeg';
import './ProviderInfo.css';

type ProviderHeaderProps = {
    name: string,
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
                        {props.name}, {props.title}
                    </h1>
                    <h3 className="provider-clinic">
                        {props.clinicName}
                    </h3>
                </div>
            </div>

            <hr/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default ProviderHeader;