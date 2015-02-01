window.units = [];
window.templates = {};

function addUnit(unitForm) {
	if (!$(unitForm).valid()) {
		return;
	}

	var details = {
		unitType: unitForm.unitType.value,
		unitClass: unitForm.unitClass.value,
		unitDesignation: unitForm.unitDesignation.value,
		pilot: {
			name: unitForm.pilotName.value,
			piloting: parseInt(unitForm.piloting.value),
			gunnery: parseInt(unitForm.gunnery.value),
		},
	};

	var mech = window.mechFactory.getMech(details.unitClass, details.unitDesignation, details.pilot);
	window.units[window.units.length] = mech;

	updateUnitListDisplay();
	unitForm.reset();
}

function updateUnitListDisplay() {
	var emptyList = "";
	if (window.units.length == 0) {
		emptyList = window.templates.noUnitsTemplate({});
	}

	$(".unit-list").html(emptyList + window.templates.unitSummaryTemplate({ mechs: window.units }) + window.templates.addUnitTemplate({}));
	$("#addUnit").validate({
		rules: {
			unitType: { required: true },
			unitClass: { required: true },
			unitDesignation: { required: true },
			pilotName: { required: true, maxlength: 55 },
			piloting: { required: true, range: [1,6] },
			gunnery: { required: true, range: [1,6] },
		}
	});
}

$(function () {
	window.templates.noUnitsTemplate = Handlebars.compile($("#noUnitsTemplate").html());
	window.templates.unitSummaryTemplate = Handlebars.compile($("#unitSummaryTemplate").html());
	window.templates.addUnitTemplate = Handlebars.compile($("#addUnitTemplate").html());

	updateUnitListDisplay();
});