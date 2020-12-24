import React from 'react';
import ContainerForm from "./ContainerForm";
import MainPart from "./MainPart";


class App extends React.Component {
    state = {
        dataU: undefined,
        error: undefined,
    };
    gettingJson = async () => {
        let api_url = await fetch(`/books.json`);
        const dataU = await api_url.json();
        this.setState({
            dataU
        })
    };
    render() {
        const request = (callback)=>{
            return callback();
        }
        request(this.gettingJson)
        let error = undefined;
        if(this.state.dataU === undefined){error="404"}
        return (
            <div>
                <ContainerForm />
                <MainPart state={this.state} error={error}/>
            </div>
        )
    }
}

export default App;