(function() {
	var Realmac = Realmac || {};

	Realmac.meta = {
		
		// Set the browser title
		//
		// @var String text
		setTitle: function(text) {
			return document.title = text;
		},
		
		// Set the content attribute of a meta tag
		//
		// @var String name
		// @var String content
		setTagContent: function(tag, content){
			// If the tag being set is title
			// return the result of setTitle
			if ( tag === 'title' )
			{
				return this.setTitle(content);
			}
			
			// Otherwise try and find the meta tag
			var tag = this.getTag(tag);
			
			// If we have a tag, set the content
			if ( tag !== false )
			{
				return tag.setAttribute('content', content);
			}
			
			return false;
		},
		
		// Find a meta tag
		//
		// @var String name
		getTag: function(name) {
			var meta = document.querySelectorAll('meta');
			
			for ( var i=0; i<meta.length; i++ )
			{
				if (meta[i].name == name){
					return meta[i];
				}
			}
			
			var tag = document.createElement('meta');
			tag.name = name;
			document.getElementsByTagName('head')[0].appendChild(tag);
			
			return tag;
		}
	};
 
	// Object containing all website meta info
	var websiteMeta = {"WYSO_Sep26_2022.html":"￼\nWYSO: CSU Semiconductor Program: Central State University will partner with 5 other colleges and universities, and Intel, to create a new semiconduc","Intel_Kickoff_event_Sep23_2022.html":"Intel kickoff event at CSCC, Sep. 23, 2022:\nL2R: Fathi Amsaad (WSU), Gabriela Cruz Thompson (Intel), Subhashini Ganapathy (WSU), Steven Bibyk (OSU), S","Intel_visit_Sep8_2022.html":"Gabriela Cruz Thompson, the Director of University Research Collaboration in Intel Labs, Intel Corp, visited the CSU campus on September 8, 2022.\n￼","CSU_PR_Sep9_2022.html":"￼\nThe groundbreaking celebration for the new Intel facility in Columbus, Ohio, was today at 10:00 a.m. Officials from the private and public sectors w","Intel_visit_Sep22_2022.html":"Melinda Murdock (University Relations Manager, Intel Corp.) and Pia Wilson-Body (President of Intel Foundation) visited the CSU campus on September 20","WSU_cleanroom_visit_Sep29_2022.html":"WSU cleanroom labs visit on Sep. 29, 2022.\n￼","archive-september-2022.html":"Archives for September 2022"};
 
	// pageId must match the key in websiteMeta object
	var url = window.location.pathname;
	var pageId = url.substring(url.lastIndexOf('/')+1);
	if (!pageId || pageId.length == 0){
		pageId = 'index.html';
	}
	pageMeta = websiteMeta[pageId];
 
	// If we have meta for this page
	if (pageMeta){
		Realmac.meta.setTagContent('description', pageMeta);
	}
 
 })();