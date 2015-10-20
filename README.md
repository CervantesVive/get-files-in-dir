get-files-in-dir - Given a path, retrieves all matching files.

## Installation

	npm install get-files-in-dir --save
	 
## Usage

	var getFiles = require("get-files-in-dir");
	
	function endsWithTxt(filename){
		return filename.lastIndexOf(".txt") === (filename.length - 4);
	}
	var matchingFiles = getFiles('somePath', includeSubdirs, endsWithTxt);
