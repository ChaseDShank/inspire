function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var ic = this;
	var imageService = new ImageService();

	imageService.getImage(function (image) {
		draw(image)
	})


	function draw(image){
		var photo = image.large_url
	
		

		document.body.style.backgroundImage = `url(${photo})`
	}
	
}


