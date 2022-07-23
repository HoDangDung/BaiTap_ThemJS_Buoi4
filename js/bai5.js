function ngayHomQua() {
    let ngay = +document.getElementById("ngay").value,
        thang = +document.getElementById("thang").value,
        nam = +document.getElementById("nam").value;

    if (ngay > 31 || ngay < 1 || thang < 1 || thang > 12) {
        alert("Ngày tháng hông hợp lệ !!!")
        return
    } else {
        if (ngay === 1 && thang === 1) {
            nam--;
            console.log("31/12/" + nam);
            document.getElementById("ngayThangNam").innerHTML = "<p>Ngày 31 tháng 12 năm " + nam + "</p>"
        } else if (ngay === 1) {
            if (thang === 2 || thang === 4 || thang === 6 || thang === 9 || thang === 11) {
                thang--;
                console.log("31/" + thang + "/" + nam);
                document.getElementById("ngayThangNam").innerHTML = "<p>Ngày 31 tháng " + thang + " năm " + nam + "</p>"
            } else if (thang === 3) {
                thang--;
                console.log("28/" + thang + "/" + nam);
                document.getElementById("ngayThangNam").innerHTML = "<p>Ngày " + ngay + " tháng " + thang + " năm " + nam + "</p>"
            } else {
                thang--;
                console.log("30/" + thang + "/" + nam);
                document.getElementById("ngayThangNam").innerHTML = "<p>Ngày 30 tháng " + thang + " năm " + nam + "</p>"
            }
        } else {
            ngay--;
            console.log(ngay + "/" + thang + "/" + nam);
            document.getElementById("ngayThangNam").innerHTML = "<p>Ngày " + ngay + " tháng " + thang + " năm " + nam + "</p>"
        }
    }
    document.getElementById("ngayThangNam").className = "bg-success card-footer text-white"
}

function ngayMai() {
    let ngay = +document.getElementById("ngay").value,
        thang = +document.getElementById("thang").value,
        nam = +document.getElementById("nam").value;

    if (ngay > 31 || ngay < 1 || thang < 1 || thang > 12) {
        alert("Ngày tháng hông hợp lệ !!!")
    } else if (ngay === 31 && thang === 12) {
        nam++;
        console.log("1/1/" + nam);
        document.getElementById("ngayThangNam").innerHTML = "<p>Ngày 1 tháng 1 năm " + nam + "</p>"
    } else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
        if (ngay === 30) {
            thang++;
            console.log("1/" + thang + "/" + nam);
            document.getElementById("ngayThangNam").innerHTML = "<p>Ngày 1 tháng " + thang + " năm " + nam + "</p>"
        } else {
            alert("Ngày tháng không hợp lệ !!!")
            return
        }
    } else if (thang === 2) {
        if (ngay === 28) {
            thang++;
            console.log("1/" + thang + "/" + nam);
            document.getElementById("ngayThangNam").innerHTML = "<p>Ngày " + ngay + " tháng " + thang + " năm " + nam + "</p>"
        } else if (thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12) {
            if (ngay === 31) {
                thang++;
                console.log("1/" + thang + "/" + nam);
                document.getElementById("ngayThangNam").innerHTML = "<p>Ngày " + ngay + " tháng " + thang + " năm " + nam + "</p>"
            }
        }
    } else {
        ngay++;
        console.log(ngay + "/" + thang + "/" + nam);
        document.getElementById("ngayThangNam").innerHTML = "<p>Ngày " + ngay + " tháng " + thang + " năm " + nam + "</p>"
    }
    document.getElementById("ngayThangNam").className = "bg-success card-footer text-white"
}

