window.addEventListener('DOMContentLoaded', function () {

	var currentMonth = new Date().getMonth();
	var months = [
		'Januari',
		'Februari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember',
	]

	for (let i = 0; i < months.length; i++) {
		if (currentMonth == i) {

			document.getElementById("monthDropdown").innerHTML += '<option>' + months[currentMonth] + '</option>';

			currentMonth++;
		}
	}

});
