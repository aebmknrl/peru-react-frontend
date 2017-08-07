import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import Formsy from 'formsy-react';
class FormEditCategory extends Component {
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

        this.props.editCategory(model);
    }
    render() {
        var categoryToEdit = this.props.categoryToEdit;
        return (
            <Formsy.Form
                onValidSubmit={this._handleSubmit}
                preventExternalInvalidation
                onValid={this.enableButton}
                onInvalid={this.disableButton}
            >
                <Card>
                    <CardHeader
                        title={"Editar Categoría - ID de la categoría: " + categoryToEdit.id}
                        subtitle="en base de datos"
                    />
                    <CardText>
                        <div className="FormEditCategory">
                            <div>
                                <FormsyText name="editCategoryId" value={categoryToEdit.id} hintText="ID de la categoría" required readOnly />
                            </div>
                            <div>
                                <FormsyText name="editCategoryName" value={categoryToEdit.name} hintText="Nombre de la categoría" required />
                            </div>
                        </div>
                    </CardText>
                    <CardActions>
                        <FlatButton type="submit" formNoValidate={true} disabled={!this.state.canSubmit}>
                            Guardar
                    </FlatButton>
                        <FlatButton onClick={this.props.TriggerCloseEditCategory}>
                            Cancelar
                    </FlatButton>
                    </CardActions>
                </Card>
            </Formsy.Form>
        )
    }
}
export default FormEditCategory;