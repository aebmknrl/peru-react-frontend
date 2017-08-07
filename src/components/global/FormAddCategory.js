import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import Formsy from 'formsy-react';
class FormAddCategory extends Component {
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

        this.props.addNewCategory(model);
    }
    render() {
        return (
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
                        <div className="FormNewCategory">
                            <div>
                                <FormsyText name="newCategoryName" hintText="Nombre de la categoría" required />
                            </div>
                        </div>
                    </CardText>
                    <CardActions>
                        <FlatButton type="submit" formNoValidate={true} disabled={!this.state.canSubmit}>
                            Guardar
                    </FlatButton>
                        <FlatButton onClick={this.props.TriggerCloseAddNewCategory}>
                            Cancelar
                    </FlatButton>
                    </CardActions>
                </Card>
            </Formsy.Form>
        )
    }
}
export default FormAddCategory;