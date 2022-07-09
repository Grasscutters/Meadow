import React, { Component } from "react";

export default class ImageUploader extends Component {
	constructor(props) {
		super(props);
		this.imageUpload = React.createRef(null);
	}

	queueImage() {
		let file = this.imageUpload.current.files[0];
        let previewBlob = URL.createObjectURL(file);
		this.props.onChange([...this.props.value, { imageName: file.name.split(".")[0], file, previewBlob }]);
		this.imageUpload.current.value = null;
	}

    updateImage(index, imageName) {
        let queuedImages = this.props.value;

        queuedImages[index] = { ...queuedImages[index], imageName };
        this.props.onChange(queuedImages);
    }

    removeImage(index) {
        let queuedImages = this.props.value;
        queuedImages.splice(index, 1);
        this.props.onChange(queuedImages);
    }

	render() {
		return (
			<div className="imageUploader" style={this.props.style}>
				<div className="uploadImage">
					<h4>Upload a new Image</h4>
					<input type="file" accept="image/png, image/jpeg, image/gif" ref={this.imageUpload} />
					<input type="button" value="Queue" onClick={() => this.queueImage()} />
				</div>
				<div className="uploadedImages">
					<h4>Queued Images</h4>
					{this.props.value.length !== 0 ? (
						this.props.value.map((image, index) => {
							return (
								<div className="queuedImage" key={index}>
                                    <img src={this.props.value[index].previewBlob} alt={image.imageName} />
									<input type="text" value={this.props.value[index].imageName} onChange={(e) => { this.updateImage(index, e.target.value) }} />
                                    <button onClick={() => this.updateImage(index)}>Update</button>
                                    <button onClick={() => this.removeImage(index)}>Remove</button>
								</div>
							);
						})
					) : (
						<p>No Images Queued</p>
					)}
				</div>
			</div>
		);
	}
}
