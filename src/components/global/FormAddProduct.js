import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import FormsySelect from 'formsy-material-ui/lib/FormsySelect';
import MenuItem from 'material-ui/MenuItem';
import Formsy from 'formsy-react';
class FormAddProduct extends Component {
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

        this.props.addNewProduct(model);
    }
    render(){
        var categories = this.props.listOfCategories;
        return(
            <Formsy.Form
                onValidSubmit={this._handleSubmit}
                preventExternalInvalidation
                onValid={this.enableButton}
                onInvalid={this.disableButton}
            >
            <Card>
                <CardHeader
                    title="Agregar Producto"
                    subtitle="en base de datos"
                />
                <CardText>
                    <div className="FormNewProduct">
                        <div>
                            <FormsyText name="newProductName" hintText="Nombre del producto" required />
                        </div>
                        <div>
                            <FormsyText name="newProductPrice" hintText="Precio del producto" validations="isNumeric" validationError="Debe insertar un valor numérico" required />
                        </div>
                        <div>
                            <FormsySelect name="newProductCategory" floatingLabelText="Categoría" value={categories[0].id} disabled={false} >
                                {categories.map((category, i) => <MenuItem key={i} value={category.id} primaryText={category.name} />)}
                            </FormsySelect>
                        </div>

                    </div>
                </CardText>
                <CardActions>
                    <FlatButton type="submit" formNoValidate={true} disabled={!this.state.canSubmit}>
                        Guardar
                    </FlatButton>
                    <FlatButton onClick={this.props.TriggerCloseNewProduct}>
                        Cancelar
                    </FlatButton>
                </CardActions>
            </Card>
            </Formsy.Form>
        )
    }
}
export default FormAddProduct;