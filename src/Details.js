import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from './Carousel';

class Details extends React.Component {


    /*     constructor(props) {
            super(props);
    
            this.state = {
                loading: true
            }
        } */

    state = { loading: true }

    /* helpful using Ajax req   */
    // similar to useeffect runs on a first start up 

    componentDidMount() {

        pet.animal(this.props.id).then(({ animal }) => {
            this.setState({
                name: animal.name,
                animal: animal.type,
                location: `${animal.contact.address.city} , ${animal.contact.address.state} `,
                description: animal.description,
                media: animal.photos,
                breed: animal.breeds.primary,
                loading: false
            })
        }, console.error)
    }

    render() {
        if (this.state.loading) {
            return <h1>Loading ...</h1>
        }

        const { name, animal, location, description, breed, media } = this.state;
        return (
            <div className="details">
                <Carousel media={media} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <button> Adopt {name}</button>
                    <p style={{ textAlign: "center" }}>{description}</p>
                </div>
            </div>
        )
    }
}


export default Details;