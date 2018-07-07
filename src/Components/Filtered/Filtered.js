import React from "react";

class FilteredGifs extends React.Component {
  render() {
    const { fetching, data, error } = this.props;
    console.log(this.props);
    return (
      <div>
        <h2>Trending</h2>
        {error ? <p>{error}</p> : null}

        <div>
          {!fetching && data && data.length ? (
            <div>
              {data.map(item => {
                const {
                  id,
                  title,
                  images: {
                    preview_gif: { url, height, width }
                  }
                } = item;
                return (
                  <span key={id}>
                    <img src={url} alt={title} width={width} height={height} />
                    <i className="fas fa-heart" />
                  </span>
                );
              })}
            </div>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </div>
    );
  }
}

export default FilteredGifs;
