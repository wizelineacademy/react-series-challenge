import React, {
    Component
} from "react";
import Gif from "./Gif"
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: []
        };
    }


    componentDidMount() {
        fetch("https://api.giphy.com/v1/gifs/trending?api_key=" + process.env.REACT_APP_API_KEY + "&limit=25&rating=G", {
            method: "GET",
            timeout: process.env.REACT_APP_TIMEOUT
        }).then(results => {
            return results.json();
        }).then(data => {
            let images= data.data.map(image=>{
                return <Gif id={image.id} src={image.images.fixed_width.url} liked={false} />;
            });
            this.setState({gifs:images});
        }).catch(err => {
            console.log(err);
        });
    }


    render() {
        return(
            <React.Fragment>
                {this.state.gifs}
            </React.Fragment>
        );
    }
}

export default Home;