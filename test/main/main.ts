import {CustomerManagement} from "../service/customerManagement";

class MenuManagementHotel {
    listCustomer: CustomerManagement = new CustomerManagement();
    input = require('readline-sync');

    main(){
        let choice: number;
        do {
            this.mainMenu()
            choice = +this.input.question("Nhap lua chon cua ban ? : ")
            switch (choice){
                case 1:
                    this.addMenuCustomer()
                    break
                case 2:
                    this.addMenuHotel()
                    break
            }
        }while (choice != 0);
    }

    mainMenu() {
        let choice: number;

        let menu =
`1.khách hàng
2. hotel`
        console.log(menu)
    }

    addMenuCustomer(){
        let choice: number;
        do {
            let menu =
`1. Thêm khách hàng
2. Xóa khách hàng
3. Tìm khách hàng
4. Hiển thị tất cả khách hàng
5. Tổng tiền phòng
0. Thoát`
            console.log(menu);
            choice = +this.input.question("nhap lua chon cua ban? : ");
            switch (choice){
                case 1:
                    this.listCustomer.add()
                    break;
                case 2:
                    this.listCustomer.remove()
                    break;
                case 3:
                    this.listCustomer.info()
                    break;
                case 4:
                    this.listCustomer.show()
                    break;
                case 5:
                    this.listCustomer.totalRent()
                    break
                case 0:
                    this.mainMenu()
                    break;
            }
        }while (choice != 0);
    }

    addMenuHotel(){

    }
}

let menuManagementHotel = new MenuManagementHotel();
menuManagementHotel.main()
