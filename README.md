local-get-files-in-dir - Given a path, retrieves all matching files.

## Installation

	npm install @ipletikosic/local-get-files-in-dir --save
	 
## Usage

	var getFiles = require("@ipletikosic/local-get-files-in-dir");
	
	function endsWithTxt(filename){
		return filename.lastIndexOf(".txt") === (filename.length - 4);
	}
	var matchingFiles = getFiles('somePath', includeSubdirs, endsWithTxt);
