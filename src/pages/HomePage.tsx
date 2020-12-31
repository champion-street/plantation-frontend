import React from 'react';

export interface IHomeProps {

}

export interface IHomeState {
    userName: string;
    password: string;
}


class HomePage extends React.Component<IHomeProps, IHomeState>{
    constructor(props: IHomeProps) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        }
    }

    render () {
        return (
            <div>
                <h1>PLANTATION!</h1>
            </div>
        )
    }
}

export default HomePage;
