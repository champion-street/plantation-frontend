import React from 'react';
import {navigate} from "../common/functions";
import '../style/header.css';

export interface IHeaderComponentProps {

}

export interface IHeaderComponentState {

}

class HeaderComponent extends React.Component<IHeaderComponentProps, IHeaderComponentState>{
    constructor(props: IHeaderComponentState) {
        super(props);

        this.state = {

        }
    }

    clickHandler(path: string): void {
        navigate(`/${path}`);
    }


    render() {

        return (
            <div className='header-component'>
                <nav>
                    <span onClick={() => this.clickHandler('home')}>Home</span>
                    <span onClick={() => this.clickHandler('list')}>List</span>
                </nav>
            </div>
        );
    }
}

export default HeaderComponent;