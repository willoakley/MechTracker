window.mechFactory.addUnit({
	version: 1,
	type: "mech",
	clas: "Avatar",
	designation: "AV1-O A",
	weight: 70,
	move: {
		walk: 3,
		run: 6,
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
			{ name: "Life support", criticalSlots: 2, type: "life support" },
			{ name: "Sensors", criticalSlots: 2, type: "sensor" },
			{ name: "Cockpit", criticalSlots: 1 },
		],
		leftArm: [
			{ name: "Shoulder", criticalSlots: 1 },
			{ name: "Upper Arm Actuator", criticalSlots: 1 },
			{ name: "Lower Arm Actuator", criticalSlots: 1 },
		],
		rightArm: [
			{ name: "Shoulder", criticalSlots: 1 },
			{ name: "Upper Arm Actuator", criticalSlots: 1 },
		],
		leftTorso: [
			{ name: "XL Fusion engine", criticalSlots: 3, type: "engine" },
			{ name: "CASE", canBeDamaged: false, criticalSlots: 1 },
		],
		rightTorso: [
			{ name: "XL Fusion engine", criticalSlots: 3, type: "engine" },
			{ name: "CASE", canBeDamaged: false, criticalSlots: 1 },
		],
		centralTorso: [
			{ name: "XL Fusion engine", criticalSlots: 6, type: "engine" },
			{ name: "Gyro", criticalSlots: 4, type: "gyro" },
		],
		leftLeg: [
			{ name: "Hip", criticalSlots: 1 },
			{ name: "Upper Leg Actuator", criticalSlots: 1 },
			{ name: "Lower Leg Actuator", criticalSlots: 1 },
			{ name: "Foot Actuator", criticalSlots: 1 },
			{ name: "Jump jet", criticalSlots: 1, type: "jump jet" },
			{ name: "Jump jet", criticalSlots: 1, type: "jump jet" },
		],
		rightLeg: [
			{ name: "Hip", criticalSlots: 1 },
			{ name: "Upper Leg Actuator", criticalSlots: 1 },
			{ name: "Lower Leg Actuator", criticalSlots: 1 },
			{ name: "Foot Actuator", criticalSlots: 1 },
			{ name: "Jump jet", criticalSlots: 1, type: "jump jet" },
			{ name: "Jump jet", criticalSlots: 1, type: "jump jet" },
		],
	},

	weapons: {
		head: [],
		leftArm: [
			{ name: "ER Large Laser", criticalSlots: 2, heat: 12, damage: "8 [DE]", minRange: 0, shortRange: 7, mediumRange: 14, longRange: 19 },
		],
		rightArm: [
			{ name: "Autocannon/20", criticalSlots: 10, heat: 7, damage: "20 [DB,S]", minRange: 0, shortRange: 3, mediumRange: 6, longRange: 9 },
		],
		leftTorso: [
			{ name: "SRM 6", criticalSlots: 2, heat: 4, damage: "2/m", minRange: 0, shortRange: 3, mediumRange: 6, longRange: 9 },
		],
		rightTorso: [
			{ name: "SRM 6", criticalSlots: 2, heat: 4, damage: "2/m", minRange: 0, shortRange: 3, mediumRange: 6, longRange: 9 },
		],
		centralTorso: [
			{ name: "Medium Laser", criticalSlots: 1, heat: 3, damage: "5 [DE]", minRange: 0, shortRange: 3, mediumRange: 6, longRange: 9 },
			{ name: "Medium Laser", criticalSlots: 1, heat: 3, damage: "5 [DE]", minRange: 0, shortRange: 3, mediumRange: 6, longRange: 9 },
		],
		leftLeg: [],
		rightLeg: [],
	},

	ammo: {
		head: [],
		leftArm: [],
		rightArm: [],
		leftTorso: [
			{ name: "SRM 6", shots: 15 },
			{ name: "SRM 6", shots: 15 },
		],
		rightTorso: [
			{ name: "AC/20", shots: 5 },
			{ name: "AC/20", shots: 5 },
			{ name: "AC/20", shots: 5 },
		],
		centralTorso: [],
		leftLeg: [],
		rightLeg: [],
	},

	heatSinkType: "single",
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
});