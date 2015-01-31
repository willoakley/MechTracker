window.MechFactory = {
	AddDamageableVariables: function (mech) {
		// TODO
		mech.ToDoAddDdamage = 1;
		return mech;
	},

	getMechLocations: function (mechType) {
		var mechTypeLocations = {
			mech: ["head", "leftArm", "rightArm", "leftTorso", "centralTorso", "rightTorso", "leftLeg", "rightLeg"],
			quadmech: ["head", "frontLeftLeg", "rearLeftLeg", "frontRightLeg", "rearRightLeg", "leftTorso", "centralTorso", "rightTorso"],
			tank: ["front", "leftSide", "rightSide", "rear", "turret"]
		};

		return eval("mechTypeLocations." + mechType.toLowerCase()) || [];
	},

	newAvatarMech: function () {
		return {
			version: 1,
			type: "mech",
			clas: "Avatar",
			designation: "AV1-O A",
			weight: 70,
			move: {
				walk: 3,
				run: 6,
				/* calculate jump on the fly */
			},
			
			pilot: {
				name: "pilot 1",
				piloting: 4,
				gunnery: 5,
			},
			
			armour: {
				head: { front: 9, rear: null, internal: 3 },
				leftArm: { front: 16, rear: null, internal: 11 },
				rightArm: { front: 16, rear: null, internal: 11 },
				leftTorso: { front: 22, rear: 8, internal: 15 },
				rightTorso: { front: 22, rear: 8, internal: 15 },
				centralTorso: { front: 30, rear: 9, internal: 22 },
				leftLeg: { front: 26, rear: null, internal: 15 },
				rightLeg: { front: 26, rear: null, internal: 15 },
			},
			
			equipment: {
				head: [
					{ name: "Life support", canBeDamaged: true, criticalSlots: 2 },
					{ name: "Sensors", canBeDamaged: true, criticalSlots: 2 },
					{ name: "Cockpit", canBeDamaged: true, criticalSlots: 1 },
				],
				leftArm: [ /* TODO */ ],
				rightArm: [ /* TODO */ ],
				leftTorso: [ /* TODO */ ],
				rightTorso: [
					{ type: "equipment", name: "XL Fusion engine", canBeDamaged: true, criticalSlots: 3 },
					{ type: "equipment", name: "CASE", canBeDamaged: false, criticalSlots: 1 },
				],
				centralTorso: [ /* TODO */ ],
				leftLeg: [ /* TODO */ ],
				rightLeg: [ /* TODO */ ],
			},

			weapons: {
				head: [ /* TODO */ ],
				leftArm: [ /* TODO */ ],
				rightArm: [ /* TODO */ ],
				leftTorso: [ /* TODO */ ],
				rightTorso: [
					{ name: "SRM 6", criticalSlots: 2, facing: "Front", heat: 4, damage: "2/m", minRange: 0, shortRange: 3, mediumRange: 6, longRange: 9 },
				],
				centralTorso: [ /* TODO */ ],
				leftLeg: [ /* TODO */ ],
				rightLeg: [ /* TODO */ ],
			},

			ammo: {
				head: [ /* TODO */ ],
				leftArm: [ /* TODO */ ],
				rightArm: [ /* TODO */ ],
				leftTorso: [ /* TODO */ ],
				rightTorso: [
					{ name: "AC/20", criticalSlots: 1, shots: 5 },
					{ name: "AC/20", criticalSlots: 1, shots: 5 },
					{ name: "AC/20", criticalSlots: 1, shots: 5 },
				],
				centralTorso: [ /* TODO */ ],
				leftLeg: [ /* TODO */ ],
				rightLeg: [ /* TODO */ ],
			},

			heatSinkType: "single", /*or "double" */
			heatSinks: {
				head: [],
				leftArm: [],
				rightArm: [],
				leftTorso: [],
				rightTorso: [],
				centralTorso: [],
				leftLeg: [],
				rightLeg: [],
			},
		};
	}
};