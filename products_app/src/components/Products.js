import React from "react";
import Filter from "./Filter";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: false,
      filteredProducts: [],
    };
  }

  fetchData = async () => {
    try {
      this.setState({ loading: true });
      const data = await fetch("https://fakestoreapi.com/products");
      const products = await data.json();
      this.setState({
        products: products,
        loading: false,
        filteredProducts: products,
      });
    } catch (error) {
      console.log("Error while loading the Products", error);
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  handleSearch = (value) => {
    const filteredArr = this.state.products.filter((product) => {
      return product.title.includes(value);
    });
    // value === ""
    //   ? this.setState({ filteredProducts: this.state.products })
    //   : this.setState({ filteredProducts: filteredArr });
    this.setState({filteredProducts:filteredArr})
  };

  render() {
    if (this.state.loading) {
      return (
        <div id="loading">
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div>
          <div id="heading">
            <h1>Products</h1>
          </div>
          <Filter handleSearch={this.handleSearch} />
          <div id="product-container">
            {this.state.filteredProducts.map((product) => {
              return (
                <div className="products">
                  <img
                    src={product.image}
                    width={100}
                    height={100}
                    alt={product.title}
                  />
                  <h1>{product.price}</h1>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default Products;
