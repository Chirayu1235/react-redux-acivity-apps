import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../store/actions/usersActions'
import BootstrapTable from "react-bootstrap-table-next";

class users extends Component {
    componentDidMount() {
        this.props.getUsers()

    }
    render() {
        const {users} = this.props.users
        console.log(users)
        const columns = [{
            dataField: 'id',
            text: 'User ID'
        }, {
            dataField: 'city',
            text: 'City'
        }, {
            dataField: 'company',
            text: 'Company'
        }, {
            dataField: 'country',
            text: 'Country'
        }, {
            dataField: 'firstName',
            text: 'FirstName'
        }, {
            dataField: 'lastName',
            text: 'Last Name'
        },
        {
            dataField: 'organizationType',
            text: 'Organization Type'
        },
        {
            dataField: 'phone',
            text: 'Phone'
        }, {
            dataField: 'state',
            text: 'State'
        }, {
            dataField: 'zipCode',
            text: 'zip Code'
        }, {
            dataField: 'disclaimerAccepted',
            text: 'Disclaimer Accepted'
        }, {
            dataField: 'languageCode',
            text: 'Language Code'
        }, {
            dataField: 'emailAddress',
            text: 'Email Address'
        }
        ];

        return (
            <div>
                <p className="Table-header">Registered User</p>
                <BootstrapTable keyField='id' data={users} columns={columns}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({users: state.users})

export default connect(mapStateToProps, {getUsers})(users)