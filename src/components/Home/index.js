import React, {Component} from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestSearchGifs } from "../../giphyClient/actions";

class Home extends Component{

    componentDidMount(){
        this.props.requestSearchGifs()
    }
    person = (x, i) => 
    <div key={x.id.value}>
      <h1>
        {x.gender}
      </h1>
      <h1>
        {x.name.first}
      </h1>
      <h1>
        {x.name.last}
      </h1>
      <img src={x.picture.medium} />
  </div>;

    render(){
        const { results = [] } = this.props.data
        return  <div className='home'>
            <h1>Home page</h1>
            <h1>
                {(results || []).map(this.person)}
            </h1>
        </div>
    }
}

//export default Home;
const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestSearchGifs }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
