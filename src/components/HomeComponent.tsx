import React from 'react';

export interface IHomeProps {

}

export interface IHomeState {
    userName: string;
    password: string;
}


class HomeComponent extends React.Component<IHomeProps, IHomeState>{
    constructor(props: IHomeProps) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        }
    }

    handleChange = (e: any) => {
        const {target} = e;
        const {value} = target;
        const name = target.name as keyof IHomeState;
        this.setState({
            [name]: value,
        } as Pick<IHomeState, keyof IHomeState>);
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="userNameField">User Name</label>
                    <input
                        name='userName'
                        type="text"
                        id='userNameField'
                        value={this.state.userName}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="passwordField">Password</label><br/>
                    <input
                        id='passwordField'
                        name='password'
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }

    handleSubmit = () => {
    }
}

export default HomeComponent;
