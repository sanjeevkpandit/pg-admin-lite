/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */
import React, {Component} from 'react';

//components
import Table from './Table';
import Spinner from '../../commons/spinner/Spinner';

//services
import {databaseService} from '../../../services/databaseService';

class TableList extends Component {
  render() {
    let props = this.props;
    return (
      <div className="collapsible-body">
        <ul>
          {(props.tables.get(props.dbName)) ?
            props.tables.get(props.dbName).map((table, index) => {
              return <Table table={table} key={index}/>
            }) :
            <li className="center-align"><Spinner className="sidebar-spinner"/></li>
          }

          {(props.tables.get(props.dbName) && (!props.tables.get(props.dbName).length))?
            <li className="center-align">No relations found</li>: ''
          }
        </ul>
      </div>
    )
  }
}

export default TableList;