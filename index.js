let a = Number(prompt("Nhập vào số bàn đội Việt Nam: "))
let b = Number(prompt("Nhập vào bàn thắng đội UAE: "))
let bet = Number(prompt("Nhập tiền cược cho trận đấu: "))
if(a == 2 && b == 3){
    bet *= 2
    alert(`Hãy gửi số tài khoản để nhận X2 tiền cược của bạn`)
} else if (a <= 2 && b < 3){
    bet = bet / 2
    alert(`Tỷ số gần đúng`)
} else if (a < 2 && b <= 3){
    bet = bet / 2
} else {
    bet = 0
    alert("Bạn thua cược")
}