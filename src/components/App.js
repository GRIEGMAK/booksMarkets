import React from 'react';
import ContainerForm from "./ContainerForm";
import MainPart from "./MainPart";


class App extends React.Component {
    state = {
        id: undefined,
        author: undefined,
        title: undefined,
        image: undefined,
        price: undefined,
        rating: undefined,
    };
    gettingJson = async(e) => {
        e.preventDefault()
        let api_url = await fetch(`/books.json`)
        const dataU = await api_url.json();

        this.setState({
            id: dataU.id,
            author: dataU.author,
            title: dataU.title,
            image: dataU.image,
            price: dataU.price,
            rating: dataU.rating,
        })
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <ContainerForm gettingJson={this.gettingJson}/>
                <MainPart   id={this.state.id}
                            title={this.state.title}
                            author={this.state.author}
                            image={this.state.image}
                            price={this.state.price}
                            rating={this.state.rating}/>
            </div>
        )
    }
}

export default App;