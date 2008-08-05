if(!dojo._hasResource["dojox.data.demos.widgets.PicasaViewList"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojox.data.demos.widgets.PicasaViewList"] = true;
dojo.provide("dojox.data.demos.widgets.PicasaViewList");
dojo.require("dijit._Templated");
dojo.require("dijit._Widget");
dojo.require("dojox.data.demos.widgets.PicasaView");

dojo.declare("dojox.data.demos.widgets.PicasaViewList", [dijit._Widget, dijit._Templated], {
	//Simple demo widget that is just a list of PicasaView Widgets.

	templateString:"<div dojoAttachPoint=\"list\"></div>\r\n\r\n",

	//Attach points for reference.
	listNode: null,

	postCreate: function(){
		this.fViewWidgets = [];
	},

	clearList: function(){
		while(this.list.firstChild){
			this.list.removeChild(this.list.firstChild);
		}
		for(var i = 0; i < this.fViewWidgets.length; i++){
			this.fViewWidgets[i].destroy();
		}
		this.fViewWidgets = [];
	},

	addView: function(viewData){
		 var newView  = new dojox.data.demos.widgets.PicasaView(viewData);
		 this.fViewWidgets.push(newView);
		 this.list.appendChild(newView.domNode);
	}
});

}
