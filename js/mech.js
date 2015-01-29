window.MechFactory = {
	AddDamageableVariables: function (mech) {
		// TODO
		mech.ToDoAddDdamage = 1;
		return mech;
	},

	NewMech: function () {
		return {
			type: "Mech",
			clas: "Avatar",
			designation: "AV1-O A",
			techBase: "IS",
			weight: 70,
			move: {
				walk: 3,
				run: 6
				/* calculate jump on the fly */
			},
			
			pilot: {
				name: "pilot 1",
				hitsTaken: 0,
				piloting: 4,
				gunnery: 5
			},
			
			locations: {
				H: {
					name: "Head",
					armour: {
						front: 9,
						rear: null,
						internal: 3
					},
					
					equipment: [
						{ type: "Equipment", name: "Life support", canBeDamaged: true, criticalSlots: 2 },
						{ type: "Equipment", name: "Sensors", canBeDamaged: true, criticalSlots: 2 },
						{ type: "Equipment", name: "Cockpit", canBeDamaged: true, criticalSlots: 1 },
					]
				},
				
				LA: {
					name: "Left Arm",
					armour: {
						front: 16,
						rear: null,
						internal: 11				
					},
					
					equipment: [ /* TODO */ ]
				},
				
				RA: {
					name: "Right Arm",
					armour: {
						front: 16,
						rear: null,
						internal: 11
					},
					
					equipment: [ /* TODO */ ]
				},
				
				LT: {
					name: "Left Torso",
					armour: {
						front: 22,
						rear: 8,
						internal: 15
					},
					
					equipment: [ /* TODO */ ]
				},
				
				RT: {
					name: "Right Torso",
					armour: {
						front: 22,
						rear: 8,
						internal: 15
					},
					
					equipment: [
						{ type: "Equipment", name: "XL Fusion engine", canBeDamaged: true, criticalSlots: 3 },
						{ type: "Equipment", name: "CASE", canBeDamaged: false, criticalSlots: 1 },
						{ type: "Weapon", name: "SRM 6", canBeDamaged: true, criticalSlots: 2, stats: { facing: "Front", heat: 4, damage: "2/m", minRange: 0, shortRange: 3, mediumRange: 6, longRange: 9 } },
						{ type: "Ammo", name: "AC/20", canBeDamaged: true, criticalSlots: 1, stats: { shots: 5 } },
						{ type: "Ammo", name: "AC/20", canBeDamaged: true, criticalSlots: 1, stats: { shots: 5 } },
						{ type: "Ammo", name: "AC/20", canBeDamaged: true, criticalSlots: 1, stats: { shots: 5 } }
					]
				},
				
				CT: {
					name: "Central Torso",
					armour: {
						front: 30,
						rear: 9,
						internal: 22
					},
					
					equipment: [ /* TODO */ ]
				},
				
				LL: {
					name: "Left Leg",
					armour: {
						front: 26,
						rear: null,
						internal: 15
					},
					
					equipment: [ /* TODO */ ]
				},
				
				RL: {
					name: "Right Leg",
					armour: {
						front: 26,
						rear: null,
						internal: 15
					},
					
					equipment: [ /* TODO */ ]
				},
			},
			
			heatSinkType: 2 /* double. count number on the fly */
		};
	}
};