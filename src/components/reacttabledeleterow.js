import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {ReactTable} from "react-table";
import '../index.css'; 
import '../style.css';


 
class DashboardTable extends React.Component {


  constructor(props) {
    super(props);

    //  this.state.products = [];
    this.state = {};
    this.state.filterText = "";
    this.state.weather = [
      {
        id: 1,
        category: 'Sporting Goods',
        Temperature: '49.99',
        qty: 12,
        Date: 'football'
      }, {
        id: 2,
        category: 'Sporting Goods',
        Temperature: '9.99',
        qty: 15,
        Date: 'baseball'
      }, {
        id: 3,
        category: 'Sporting Goods',
        Temperature: '29.99',
        qty: 14,
        Date: 'basketball'
      }, {
        id: 4,
        category: 'Electronics',
        Temperature: '99.99',
        qty: 34,
        Date: 'iPod Touch'
      }, {
        id: 5,
        category: 'Electronics',
        Temperature: '399.99',
        qty: 12,
        Date: 'iPhone 5'
      }, {
        id: 6,
        category: 'Electronics',
        Temperature:'199.99',
        qty: 23,
        Date: 'nexus 7',
      }
    ];

  }
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  handleRowDel(product) {
    var index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product = {
      id: id,
      Date: "",
      Temperature: "",
      Humidity: "",
      Rainfall:"",
      Wind: 0,
    }
    this.state.products.push(product);
    this.setState(this.state.products);

  }

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      Date: evt.target.Date,
      value: evt.target.value
    };
var products = this.state.products.slice();
  var newProducts = products.map(function(product) {

    for (var key in product) {
      if (key == item.Date && product.id == item.id) {
        product[key] = item.value;

      }
    }
    return product;
  });
    this.setState({products:newProducts});
  //  console.log(this.state.products);
  };
  render() {

    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
      </div>
    );

  }

}
class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div>

        <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>

      </div>

    );
  }

}

class WeatherTable extends React.Component {

  render() {
    var onWeatherTableUpdate = this.props.onWeatherTableUpdate;
 
    var weather = this.props.weather.map(function(product) {
      if (weather.Date.indexOf(filterText) === -1) {
        return;
      }
      return (<WeatherRow onWeatherTableUpdate={onWeatherTableUpdate} weather={product} onDelEvent={rowDel.bind(this)} key={weather.id}/>)
    });
    return (
      <div>


      <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Temperature</th>
              <th>Humidity</th>
              <th>Rainfalls</th>
              <th>Speed of Wind</th>
        
            </tr>
          </thead>

          <tbody>
            {weather}

          </tbody>

        </table>
      </div>
    );

  }

}

class WeatherRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.weather);

  }
  render() {

    return (
      <tr className="eachRow">
        <EditableCell onWeatherTableUpdate={this.props.onWeatherTableUpdate} cellData={{
          "type": "Date",
          value: this.props.weather.Date,
          id: this.props.product.id
        }}/>
        <EditableCell onWeatherTableUpdate={this.props.onweatherTableUpdate} cellData={{
          type: "Temperature",
          value: this.props.weather.Temperature,
          id: this.props.weather.id
        }}/>
        <EditableCell onWeatherTableUpdate={this.props.onWeatherTableUpdate} cellData={{
          type: "qty",
          value: this.props.weather.qty,
          id: this.props.weather.id
        }}/>
        <EditableCell onWeatherTableUpdate={this.props.onWeatherTableUpdate} cellData={{
          type: "category",
          value: this.props.weather.category,
          id: this.props.Wweather.id
        }}/>
        <td className="del-cell">
          <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
        </td>
      </tr>
    );

  }

}
class EditableCell extends React.Component {

  render() {
    return (
      <td>
        <input type='text' Date={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onWeatherTableUpdate}/>
      </td>
    );

  }

}


/*
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

export default DashboardTable;
