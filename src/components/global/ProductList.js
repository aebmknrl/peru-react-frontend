// Dependencies
import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import { grey700 } from 'material-ui/styles/colors';



class ProductList extends Component {
    render() {
        var products = this.props.productList;
        return (
            <div className="ProductList">
                <Card>
                    <CardHeader
                        title="Lista de Productos"
                        subtitle="en base de datos"
                    />
                    <CardText>
                        {products.length > 0 ? 
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderColumn>ID</TableHeaderColumn>
                                    <TableHeaderColumn>Nombre</TableHeaderColumn>
                                    <TableHeaderColumn>Precio</TableHeaderColumn>
                                    <TableHeaderColumn>Categoría</TableHeaderColumn>
                                    <TableHeaderColumn>Acciones</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {products.map((product, i) =>
                                    <TableRow key={i}>
                                        <TableRowColumn>{product.id}</TableRowColumn>
                                        <TableRowColumn>{product.name}</TableRowColumn>
                                        <TableRowColumn>{product.price}</TableRowColumn>
                                        <TableRowColumn>{product.category.name}</TableRowColumn>
                                        <TableRowColumn style={{ overflow: 'visible' }}>
                                            <IconButton
                                                onClick={() => { this.props.openEditProduct(product) }}
                                                tooltip="Editar"
                                                iconStyle={{ color: grey700 }}
                                                iconClassName="material-icons"
                                                tooltipPosition={i < products.length - 1 ? 'bottom-center' : 'top-center'}
                                            >create
                                            </IconButton>
                                            <IconButton
                                                onClick={() => { this.props.openDeleteProductModal(product) }}
                                                tooltip="Eliminar"
                                                iconStyle={{ color: grey700 }}
                                                iconClassName="material-icons"
                                                tooltipPosition={i < products.length - 1 ? 'bottom-center' : 'top-center'}
                                            >remove_circle
                                            </IconButton>
                                        </TableRowColumn>
                                    </TableRow>
                                )}

                            </TableBody>
                        </Table>
                        : 'No hay productos en el sistema. Para crear uno nuevo, haga clic en el menú superior derecho y a continuación, "Nuevo Producto".'}
                    </CardText>
                    <CardActions>
                        {products.length > 0 ? 
                        <FlatButton onClick={this.props.getAllProducts}>
                            Actualizar
                        </FlatButton>
                        : '' }
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default ProductList;
