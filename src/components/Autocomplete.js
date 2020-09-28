
import React, { Component } from 'react';

import Autocomplete from 'react-google-autocomplete';

<Autocomplete
    style={{width: '90%'}}
    onPlaceSelected={(place) => {
      console.log(place);
    }}
    types={['(regions)']}
    componentRestrictions={{country: "ru"}}
/>

export default Popup;