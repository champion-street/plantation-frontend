import React from 'react';

export interface IHomeProps {

}

export interface IHomeState {

}

class HomeComponent extends React.Component<IHomeProps, IHomeState>{
    constructor(props: IHomeProps) {
        super(props);
    }

    render () {
        return (
            <div>
                <h1>HOME HERE!</h1>
            </div>
        )
    }
}

export default HomeComponent;