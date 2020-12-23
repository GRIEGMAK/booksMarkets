import React from 'react';
import ContainerForm from "./ContainerForm";
import MainPart from "./MainPart";


class App extends React.Component {
    state = {
        dataU: undefined,
    };
    gettingJson = async(e) => {
        e.preventDefault();
        let api_url = await fetch(`/books.json`);
        const dataU = await api_url.json();
        this.setState({
            dataU
        })
    };
    render() {
        return (
            <div>
                <ContainerForm gettingJson={this.gettingJson}/>
                <MainPart state={this.state}/>
            </div>
        )
    }
}

export default App;