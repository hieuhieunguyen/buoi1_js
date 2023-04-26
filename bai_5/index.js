var a = 21;

var hangChuc = Math.floor(a / 10);

var hangDonVi = a % 10;

var result = hangChuc + hangDonVi;

console.log(result);

/**
 * Input: Nhập vào 1 số có 2 chữ số
 * Process: 
 * B1. Tạo biến a, hangChuc, hangDonVi, result
 * B2. Gán giá trị cho a là số chúng ta nhập
 * B3. Tach số hàng chục theo công thức hangChuc = Math.floor(a/10)
 * B4. Tach số hàng đơn vị theo công thức hangDonVi = a % 10
 * B5. Gán giá trị cho biến result = hangChuc + hangDonVi
 * B6. In kết quả ra console
 * Ouput: Tổng của 2 ký số chúng ta nhập
 */