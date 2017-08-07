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



class CategoryList extends Component {
    render(){
        var categories = this.props.categoriesList;
        return(
            <div className="CategoryList">
                <Card>
                    <CardHeader
                        title="Lista de Categorías"
                        subtitle="en base de datos"
                    />
                    <CardText>
                        {categories.length > 0 ?
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderColumn>ID</TableHeaderColumn>
                                    <TableHeaderColumn>Nombre</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                    {categories.map((category, i) =>
                                    <TableRow key={i}>
                                            <TableRowColumn>{category.id}</TableRowColumn>
                                            <TableRowColumn>{category.name}</TableRowColumn>
                                        <TableRowColumn style={{ overflow: 'visible' }}>
                                            <IconButton
                                                onClick={() => { this.props.openEditCategory(category) }}
                                                tooltip="Editar"
                                                iconStyle={{ color: grey700 }}
                                                iconClassName="material-icons"
                                                tooltipPosition={i < categories.length - 1 ? 'bottom-center' : 'top-center'}
                                            >create
                                            </IconButton>
                                            <IconButton
                                                    onClick={() => { this.props.openDeleteCategoryModal(category) }}
                                                tooltip="Eliminar"
                                                iconStyle={{ color: grey700 }}
                                                iconClassName="material-icons"
                                                tooltipPosition={i < categories.length - 1 ? 'bottom-center' : 'top-center'}
                                            >remove_circle
                                            </IconButton>
                                        </TableRowColumn>
                                    </TableRow>
                                )}

                            </TableBody>
                        </Table>
                        : 'No existen categorías en el sistema. Pulse el botón "Agregar nueva" para crear una.'}
                    </CardText>
                    <CardActions>
                        <FlatButton onClick={this.props.showAddNewCategory}>
                            Agregar nueva
                        </FlatButton>
                        <FlatButton onClick={this.props.closeCategoryArea}>
                            Volver a Productos
                        </FlatButton>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default CategoryList