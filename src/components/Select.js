import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
const options = [
{ value: 'Cloudy', label: 'Cloudy' },
{ value: 'Rainfalls', label: 'Rainfalls' },
{ value: 'Thunderstorm', label: 'Thunderstorm' },
];
class  SelectOp  extends React.Component {
state = {
selectedOption: null,
};
handleChange = selectedOption => {
this.setState(
{ selectedOption },
() => console.log(`Option selected:`, this.state.selectedOption)
);
};
render() {
const { selectedOption } = this.state;
return (
<Select
   value={selectedOption}
   onChange={this.handleChange}
   options={options}
   />
);
}
}
export default SelectOp;