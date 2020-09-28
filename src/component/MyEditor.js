import React, { Component } from 'react';
class ImageUpload extends Component {
constructor(props) {
super(props);
this.state = {file: ''};
}
_handleSubmit(e) {
e.preventDefault();
// TODO: do something with -> this.state.file
console.log('handle uploading-', this.state.file);
}
_handleImageChange(e) {
e.preventDefault();
let reader = new FileReader();
let file = e.target.files[0];
reader.onloadend = () => {
this.setState({
file: file,
imagePreviewUrl: reader.result
});
}
reader.readAsDataURL(file)
}
render() {
let {imagePreviewUrl} = this.state;
let $imagePreview = null;
if (imagePreviewUrl) {
$imagePreview = (<img src={imagePreviewUrl} />);
} else {
$imagePreview = (<div className="previewText" style={{marginleft: 100 + 'px'}} ></div>);
}
return (
<div className="previewComponent">
   <div className="profile_img">
   </div>
   <form onSubmit={(e)=>
      this._handleSubmit(e)}>
      <div className="image-upload">
         <label for="file-input">
         <img className="submitButton1"/>
         </label>
         <input className="submitButton" id="file-input"
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
      </div>
   </form>
   <div className="imgPreview">
      {$imagePreview}
   </div>
</div>
)
}
}
export default ImageUpload;