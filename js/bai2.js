function tinhNgay() {
    // B1: Dữ liệu đầu vào
    let month = +document.getElementById("month").value,
        year = +document.getElementById("year").value;

    // B2 Xử lý
    if (!month || !year) {
        alert("Mời nhập giá trị")
        return
    } else {
        if (month === 4 || month === 6 || month === 9 || month === 11) {
            console.log("30 ngày");
            document.getElementById("tinhNgay").innerHTML = "<p>Tháng " + month + " năm " + year + " có 30 ngày" + "</p>"
        } else if (month === 2) {
            if ((year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
                console.log("29 ngày");
                document.getElementById("tinhNgay").innerHTML = "<p>Tháng " + month + " năm " + year + " có 29 ngày" + "</p>"
            } else {
                console.log("28 ngày");
                document.getElementById("tinhNgay").innerHTML = "<p>Tháng " + month + " năm " + year + " có 28 ngày" + "</p>"
            }
        } else {
            console.log("31 ngày");
            document.getElementById("tinhNgay").innerHTML = "<p>Tháng " + month + " năm " + year + " có 31 ngày" + "</p>"
        }
        document.getElementById("tinhNgay").className = "bg-success card-footer text-white"
    }
}