import React, { Component } from 'react';

const REF_POINT_OFFSET = 250;
const NEXT_LOAD_DATA_MS_DELAY = 1000;

class InfiniteScroll extends Component {
  constructor(props) {
    super(props);
    this.isTriggered = false;
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const currentScrollPosition = (window.scrollY + window.innerHeight);
    const refPointScrollPosition = (this.refPoint.offsetTop - REF_POINT_OFFSET);

    if ((currentScrollPosition >= refPointScrollPosition) && !this.isTriggered) {
      this.props.onLoadMoreData && this.props.onLoadMoreData();
      this.isTriggered = true;
      setTimeout(() => { this.isTriggered = false }, NEXT_LOAD_DATA_MS_DELAY);
    }
  }

  render() {
    return (
      <div ref={(el) => this.refPoint = el}></div>
    );
  }
}

export default InfiniteScroll;