import React from 'react';
import ProductInfo from './ProductInfo.js';
import {Redirect} from 'react-router-dom';

class ProductInfoClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.countInputRef = React.createRef();
        this.isClickedAndNotAuth = false;
    }
    onCountChange = () => {
        let text = this.countInputRef.current.value;
        this.props.changeCount(text);
    }
    addToBasket = () => {
        if(!this.props.isAuth) this.isClickedAndNotAuth = true;
        if(this.props.currentColor[0]!='' && +this.props.currentCount>0 && +this.props.currentCount<100){
            let currentProduct = this.props.currentProduct;
            let newProduct = {
                id:currentProduct._id,
                img:currentProduct.img,
                name:currentProduct.name,
                price:currentProduct.price,
                articule:currentProduct.articule,
                description:currentProduct.description,
                productInfo:currentProduct.productInfo,
                color:this.props.currentColor,
                count:+ this.props.currentCount,
            }
            this.props.isEverythingChosenF(true);
            this.props.productWasAdded();
            this.props.addBasket(this.props.token,newProduct);
            setTimeout(()=>{
                this.props.productWasAdded();
                this.props.colorAndCountReset();
            },1500);
        }
        else{
            this.props.isEverythingChosenF(false);
            setTimeout(()=>{
                this.props.isEverythingChosenF(true);
            },400);
        }
    }
    render(){
        return (
            <>
                {this.isClickedAndNotAuth ? <Redirect to='/registration'/> : 
                <ProductInfo currentCount={this.props.currentCount}
                            currentColor={this.props.currentColor}
                            productAdded={this.props.productAdded}
                            countInputRef={this.countInputRef}
                            onCountChange={this.onCountChange}
                            addToBasket={this.addToBasket}
                            changeColor={this.props.changeColor}
                            currentProduct={this.props.currentProduct}
                            isEverythingChosen= {this.props.isEverythingChosen}
                            colorAndCountReset = {this.props.colorAndCountReset}/>
                }
            </>
        );
    }
}

export default ProductInfoClassComponent;