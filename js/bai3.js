function docSo() {
    let num = +document.getElementById("num").value,
    tram = 0, chuc = 0, donvi = 0, ketQua ="";
    let ChuSo = new Array(" không ", " một ", " hai ", " ba ", " bốn ", " năm ", " sáu ", " bảy ", " tám ", " chín ");

    tram = Math.floor(num / 100);
    chuc = Math.floor((num / 10) % 10);
    donvi = Math.floor(num % 10);

    if (!tram && !chuc && !donvi) {
        alert("Chưa nhập số đọc sao trời !!!")
        return
    } else {
        if (tram) {
            ketQua += ChuSo[tram] + "trăm ";
            if (!chuc && donvi) {
                ketQua += "linh";
            }
        }
        if (chuc && chuc !== 1) {
            ketQua += ChuSo[chuc] + "mươi"
            if (!chuc && donvi) {
                ketQua += ketQua + "linh";
            }
        }
        if (chuc == 1) {
            ketQua += ChuSo[chuc] + "mười"
        }
        switch (donvi) {
            case 1:
                if (chuc && chuc !== 1) {
                    ketQua += "mốt"
                }
                else {
                    ketQua += ChuSo[donvi];
                }
                break;
            case 5:
                if (!chuc) {
                    ketQua += ChuSo[donvi];
                }
                else {
                    ketQua += "lăm"
                }

            default:
                if (donvi !== 0) {
                    ketQua += ChuSo[donvi];
                }
                break;
        }
        console.log(ketQua);
        document.getElementById("docSo").innerHTML = ketQua;
        document.getElementById("docSo").className = "bg-success card-footer text-white"
    }
}