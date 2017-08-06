import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import FormsySelect from 'formsy-material-ui/lib/FormsySelect';
import MenuItem from 'material-ui/MenuItem';
import Formsy from 'formsy-react';
class FormEditProduct extends Component {
    constructor() {
        super();
        this.state = {
            canSubmit: false
        }
        this.enableButton = this.enableButton.bind(this);
        this.disableButton = this.disableButton.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    enableButton() {
        this.setState({
            canSubmit: true
        });
    }
    disableButton() {
        this.setState({
            canSubmit: false
        });
    }

    _handleSubmit(model) {

        this.props.editProduct(model);
    }
    render() {
        var categories = this.props.listOfCategories;
        var productToEdit = this.props.productToEdit;
        return (
            <Formsy.Form
                onValidSubmit={this._handleSubmit}
                preventExternalInvalidation
                onValid={this.enableButton}
                onInvalid={this.disableButton}
            >
                <Card>
                    <CardHeader
                        title={"Editar Producto - ID del producto: " + productToEdit.id}
                        subtitle="en base de datos"
                    />
                    <CardText>
                        {
                            categories.length <= 0 ? 'No hay categorías en el sistema. Agrege una categoría primero.' : 
                                <div className="FormEditProduct">
                                    <div>
                                        <FormsyText name="editProductId" value={productToEdit.id} hintText="ID del producto" required readOnly />
                                    </div>
                                    <div>
                                        <FormsyText name="editProductName" value={productToEdit.name} hintText="Nombre del producto" required />
                                    </div>
                                    <div>
                                        <FormsyText name="editProductPrice" value={productToEdit.price} hintText="Precio del producto" validations="isNumeric" validationError="Debe insertar un valor numérico" required />
                                    </div>
                                    <div>
                                        <FormsySelect name="editProductCategory" floatingLabelText="Categoría" value={productToEdit.category.id} disabled={false} >
                                            {categories.map((category, i) => <MenuItem key={i} value={category.id} primaryText={category.name} />)}
                                        </FormsySelect>
                                    </div>

                                </div>
                        }

                    </CardText>
                    <CardActions>
                        <FlatButton type="submit" formNoValidate={true} disabled={!this.state.canSubmit}>
                            Guardar
                    </FlatButton>
                        <FlatButton onClick={this.props.TriggerCloseEditProduct}>
                            Cancelar
                    </FlatButton>
                    </CardActions>
                </Card>
            </Formsy.Form>
        )
    }
}
export default FormEditProduct;