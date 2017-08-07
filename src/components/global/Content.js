// Dependencies
import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import Dialog from 'material-ui/Dialog';

// Components
import FormAddProduct from './FormAddProduct'
import FormEditProduct from './FormEditProduct'
import ProductList from './ProductList'
import CategoryList from './CategoryList'
import FormAddCategory from './FormAddCategory'
import FormEditCategory from './FormEditCategory'

// Styles
import './css/Content.css';

class Content extends Component {
    constructor (){
        super();
        this.state = {
            products: null,
            categories: null,
            canSubmit: false,
            openEditProduct: false,
            productToEdit: null,
            productToDelete:null,
            openModalDeleteProduct: false,
            showAddNewCategory: false,
            openModalDeleteCategory: false,
            categoryToDelete: null,
            categoryToEdit:null,
            openEditCategory: false
        }
        this.getAllProducts = this.getAllProducts.bind(this);
        this.getAllCategories = this.getAllCategories.bind(this);
        this.addNewProduct = this.addNewProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.TriggerCloseEditProduct = this.TriggerCloseEditProduct.bind(this);
        this.TriggerOpenEditProduct = this.TriggerOpenEditProduct.bind(this);
        this.handleOpenModalDeleteProduct = this.handleOpenModalDeleteProduct.bind(this);
        this.handleCloseModalDeleteProduct = this.handleCloseModalDeleteProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.showAddNewCategory = this.showAddNewCategory.bind(this);
        this.closeAddNewCategory = this.closeAddNewCategory.bind(this);
        this.addNewCategory = this.addNewCategory.bind(this);
        this.handleCloseModalDeleteCategory = this.handleCloseModalDeleteCategory.bind(this);
        this.handleOpenModalDeleteCategory = this.handleOpenModalDeleteCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        this.openEditCategory = this.openEditCategory.bind(this);
        this.closeEditCategory = this.closeEditCategory.bind(this);
        this.editCategory = this.editCategory.bind(this);
        
    }
    addNewProduct(model){
        let self = this;
        axios.post('http://localhost:9001/products/create_product', { productName: model.newProductName, categoryId: model.newProductCategory, price: model.newProductPrice})
            .then(function (response) {
                //console.log(response);
                self.props.TriggerCloseNewProduct();
                self.getAllProducts();
            }).catch(function (error) {
                console.log("Hubo un error intentando obtener datos:");
                console.log(error);
            })
    }
    editProduct(model){
        //console.log(model);
         let self = this;
         axios.post('http://localhost:9001/products/update_product', { productId: model.editProductId, productName: model.editProductName, categoryId: model.editProductCategory, price: model.editProductPrice})
             .then(function (response) {
                 //console.log(response);
                 self.TriggerCloseEditProduct();
                 self.getAllProducts();
             }).catch(function (error) {
                 console.log("Hubo un error intentando obtener datos:");
                 console.log(error);
             })
    }

    deleteProduct(){
        let self = this;
        var productToDelete = self.state.productToDelete;
        axios.delete('http://localhost:9001/products/delete_product', {data: {productId: productToDelete.id}})
            .then(function (response) {
                self.handleCloseModalDeleteProduct();
                self.getAllProducts();
            }).catch(function (error) {
                console.log("Hubo un error intentando obtener datos:");
                console.log(error);
            })
    }


    getAllProducts() {
        let self = this;
        axios.get('http://localhost:9001/products/get_product/0')
            .then(function (response) {
                self.setState({
                    products: response.data
                })
            }).catch(function (error) {
                console.log("Hubo un error intentando obtener datos:");
                console.log(error);
            })
    }

    getAllCategories() {
        let self = this;
        axios.get('http://localhost:9001/products/get_category/0')
            .then(function (response) {
                self.setState({
                    categories: response.data
                })
            }).catch(function (error) {
                console.log("Hubo un error intentando obtener datos:");
                console.log(error);
            })
    }

    addNewCategory(model) {
        let self = this;
        axios.post('http://localhost:9001/products/create_category', { categoryName: model.newCategoryName })
            .then(function (response) {
                //console.log(response);
                self.closeAddNewCategory();
                self.getAllCategories();
            }).catch(function (error) {
                console.log("Hubo un error intentando obtener datos:");
                console.log(error);
            })
    }

    deleteCategory() {
        let self = this;
        var categoryToDelete = self.state.categoryToDelete;
        axios.delete('http://localhost:9001/products/delete_category', { data: { categoryId: categoryToDelete.id } })
            .then(function (response) {
                self.handleCloseModalDeleteCategory();
                self.getAllCategories();
            }).catch(function (error) {
                console.log("Hubo un error intentando obtener datos:");
                console.log(error);
            })
    }

    editCategory(model){
        let self = this;
        axios.post('http://localhost:9001/products/update_category', { categoryId: model.editCategoryId, categoryName: model.editCategoryName })
            .then(function (response) {
                //console.log(response);
                self.closeEditCategory()
                self.getAllCategories();
            }).catch(function (error) {
                console.log("Hubo un error intentando obtener datos:");
                console.log(error);
            })
    }

    handleOpenModalDeleteProduct(model){
        this.setState({
            productToDelete:model,
            openModalDeleteProduct: true
        })

    }

    handleCloseModalDeleteProduct(){
        this.setState({
            productToDelete: null,
            openModalDeleteProduct: false
        })
    }

    TriggerCloseEditProduct(){
        this.setState({
            openEditProduct: false,
            productToEdit: null
        })
    }

    TriggerOpenEditProduct(model){
         this.setState({
             openEditProduct: true,
             productToEdit: model
         })
    }

    showAddNewCategory(){
        this.setState({
            showAddNewCategory: true
        })
    }
    closeAddNewCategory(){
        this.setState({
            showAddNewCategory: false
        })
    }

    handleOpenModalDeleteCategory(model) {
        this.setState({
            categoryToDelete: model,
            openModalDeleteCategory: true
        })

    }

    handleCloseModalDeleteCategory() {
        this.setState({
            categoryToDelete: null,
            openModalDeleteCategory: false
        })
    }

    openEditCategory(model){
        this.setState({
            categoryToEdit: model,
            openEditCategory: true
        })
    }
    closeEditCategory(){
        this.setState({
            categoryToEdit: null,
            openEditCategory: false
        })
    }


    componentDidMount() {
        this.getAllProducts();
        this.getAllCategories();
    }
    render() {
        const actions = [
            <FlatButton
                label="Cancelar"
                primary={true}
                onTouchTap={this.handleCloseModalDeleteProduct}
            />,
            <FlatButton
                label="Eliminar"
                primary={true}
                onTouchTap={this.deleteProduct}
            />,
        ];
        const actionsCategory = [
            <FlatButton
                label="Cancelar"
                primary={true}
                onTouchTap={this.handleCloseModalDeleteCategory}
            />,
            <FlatButton
                label="Eliminar"
                primary={true}
                onTouchTap={this.deleteCategory}
            />,
        ];

        var products = [];
        var categories = [];
        
        
        if(this.state.products){
            products = this.state.products;
            //console.log(products);
        } else {
            products = []
        }

        if(this.state.categories){
            categories = this.state.categories;
            //console.log(categories);
        }
        return (
            <div className="Content">
                
                {this.state.products && this.props.openCategoryArea === false ? <ProductList productList={products} getAllProducts={this.getAllProducts} openDeleteProductModal={this.handleOpenModalDeleteProduct} openEditProduct={this.TriggerOpenEditProduct} /> : (this.props.openCategoryArea === false? 'No existen productos en el sistema.' : '')}
                {this.props.openAddNewProduct === true && this.props.openCategoryArea === false ? <FormAddProduct listOfCategories={categories} addNewProduct={this.addNewProduct} TriggerCloseNewProduct={this.props.TriggerCloseNewProduct}/> : ''}
                {this.state.openEditProduct === true && this.props.openCategoryArea === false ? <FormEditProduct productToEdit={this.state.productToEdit} editProduct={this.editProduct} TriggerCloseEditProduct={this.TriggerCloseEditProduct} listOfCategories={categories}/> : ''}
                {this.props.openCategoryArea === true ? <CategoryList categoriesList={categories} openEditCategory={this.openEditCategory} getAllCategories={this.getAllCategories} closeCategoryArea={this.props.TriggerCloseCategoryArea} showAddNewCategory={this.showAddNewCategory} openDeleteCategoryModal={this.handleOpenModalDeleteCategory}/> : ''}
                {this.state.showAddNewCategory === true ? <FormAddCategory addNewCategory={this.addNewCategory} TriggerCloseAddNewCategory={this.closeAddNewCategory} /> : ''}
                {this.props.openCategoryArea === true && this.state.openEditCategory === true ? <FormEditCategory categoryToEdit={this.state.categoryToEdit} TriggerCloseEditCategory={this.closeEditCategory} editCategory={this.editCategory} /> : ''}

                <Dialog
                    title="Confirmar Eliminar"
                    actions={actions}
                    modal={false}
                    open={this.state.openModalDeleteProduct}
                    onRequestClose={this.handleCloseModalDeleteProduct}
                >
                    ¿Está seguro que desea eliminar este producto?
                </Dialog>
                <Dialog
                    title="Confirmar Eliminar"
                    actions={actionsCategory}
                    modal={false}
                    open={this.state.openModalDeleteCategory}
                    onRequestClose={this.handleCloseModalDeleteCategory}
                >
                    ¿Está seguro que desea eliminar esta categoría?
                </Dialog>
            </div>
        );
    }
}

export default Content;
