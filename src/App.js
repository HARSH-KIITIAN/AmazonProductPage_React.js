import React, { Component } from 'react';
import classes from './App.module.css';
import ProductData from './Utils/ProductData';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import TopBar from './TopBar/TopBar';

class App extends Component {
  state = {
    productData: ProductData,
    productImgPos: 0,
    featureBtnPos: 0
  }

  onImageBtnClick = (pos) => {
    this.setState({productImgPos: pos});
  }

  onFeatureBtnClick = (pos) => {
    this.setState({featureBtnPos: pos});
  }

  shouldComponentUpdate(nextProps, nextState) {
    if((nextState.productImgPos !== this.state.productImgPos) || (nextState.featureBtnPos !== this.state.featureBtnPos)) {
      return true;
    }
    return false;
  }

  render() {
    console.log("Render Called");
    return (
      <div className={classes.App}>
        <TopBar />
  
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview image={this.state.productData.colorOptions[this.state.productImgPos].imageUrl} featureBtnPos={this.state.featureBtnPos} />
          </div>
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} onImageBtnClick={this.onImageBtnClick} productImgPos={this.state.productImgPos} onFeatureBtnClick={this.onFeatureBtnClick} featureBtnPos={this.state.featureBtnPos} />
          </div>
        </div>
  
      </div>
    );
  }
}

export default App;
