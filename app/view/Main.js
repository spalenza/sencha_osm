Ext.define("OSM.view.Main", {
	extend: 'Ext.Panel',

	config: {
    fullscreen: true,
		id: "map",
		listeners: {
			painted: function() {
				var self = this;
				init(function(feature) {
					var htmlContent = "";
					for (var property in feature.data) {
						if (feature.data[property] != 'undefined') {
							htmlContent = htmlContent + feature.data[property] + "<br>";
						}
					}
					if (self.featurePopup) {
						self.featurePopup.destroy();
					}
					self.featurePopup = new Ext.Panel({
						floating: true,
						modal: true,
						centered: true,
						hideOnMaskTap: true,
						width: 240,
						html: htmlContent,
						scroll: 'vertical'
					});
					self.featurePopup.show();
				})
			},
			resize: function() {
				if (window.map) { map.updateSize(); }
			}
		}
	}
});