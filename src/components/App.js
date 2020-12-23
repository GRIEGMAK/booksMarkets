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
        let timerId = setTimeout(this.gettingJson, 100);
        let dataU = this.state.dataU
        if(dataU){
            clearInterval(timerId)
        }
        return (
            <div>
                <ContainerForm />
                <MainPart state={this.state}/>
            </div>
        )
    }
}

export default App;