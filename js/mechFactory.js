window.mechFactory = {
	_mechDictionary: [],

	_deepCopy: function (object) {
		return $.extend(true, {}, object);
	},
	
	AddDamageableVariables: function (mech) {
		// TODO
		mech.ToDoAddDdamage = 1;
		return mech;
	},

	getMechLocations: function (mechType) {
		if (mechType == undefined) {
			mechType = this.type;
		}
	
		var mechTypeLocations = {
			mech: ["head", "leftArm", "rightArm", "leftTorso", "centralTorso", "rightTorso", "leftLeg", "rightLeg"],
			quadmech: ["head", "frontLeftLeg", "rearLeftLeg", "frontRightLeg", "rearRightLeg", "leftTorso", "centralTorso", "rightTorso"],
			tank: ["front", "leftSide", "rightSide", "rear", "turret"]
		};

		return eval("mechTypeLocations." + mechType.toLowerCase()) || [];
	},
	
	getMech: function (mechClass, designation, pilot) {
		var mechData = Enumerable.From(this._mechDictionary).First(function (m) { return m.clas == mechClass && m.designation == designation; });

		var mech = this._deepCopy(mechData);
		mech.getLocations = this.getMechLocations;
		mech.pilot = pilot;
		
		return mech;
	},

	addUnit: function (mechData) {
		/* move.jump - calculate jump on the fly */
		/* equipment.leftArm[x].canBeDamaged: true - unless otherwise specified */
		/* equipment.leftArm[x]type: "equipment" - unless otherwise specified */
		/* weapons.rightTorso[x].facing: "front" - unless otherwise specified */
		this._mechDictionary[this._mechDictionary.length] = mechData;
	},
};