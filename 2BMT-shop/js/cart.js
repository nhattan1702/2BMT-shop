function checkNguoiDung() {
	if(localStorage.getItem('token') == null) {
		toTrangChu();
	}
}

function hienThiThongTinNguoiDung() {
	const token = localStorage.getItem('token');
	const elementLoadingUser = document.querySelector('.navbar_loading');
	const dataUsers = JSON.parse(localStorage.getItem('user'));
	dataUsers.forEach(function(dataUser) {
		if(dataUser.token == token) {
			checkUser = true;
			elementLoadingUser.innerHTML = `
				<div class="navbar_info">
					${dataUser.name}
				</div>
				<div class="navbar_search" onClick="logout()"><i class="fas fa-sign-out-alt"></i></div>
			`;
			return;
		}
	});
}

function getUser() {
	const token = localStorage.getItem('token');
	const dataUser = JSON.parse(localStorage.getItem('user')).find(function(element) {
		if(token == element.token) {
			return element;
		}
	});
	return dataUser;
}

checkNguoiDung();
hienThiThongTinNguoiDung();

function toTrangChu() {
	location.assign('../index.html');
}

function hienThiGia(price) {
	var stringPrice = "";
    var flag = 0;
    while(price > 0) {
        if(flag == 3) {
             stringPrice = "." + stringPrice;
             flag = 0;
         }
         var number = price % 10;
         flag += 1;
         if(number != 0) {
             stringPrice = number + stringPrice;
         }
         else {
             stringPrice = "0" + stringPrice;
         }
         price = parseInt(price / 10);
    }
    return stringPrice + " VND";
}

function logout() {
	localStorage.removeItem('token');
	toTrangChu();
}


function hienThiListCart() {
	const dataUser = getUser();
	const dataProduct = JSON.parse(localStorage.getItem('product'));
	const dataCart = JSON.parse(localStorage.getItem('shopCart')).find(function(element) {
		if(element.name == dataUser.username) {
			return element;
		}
	});

	const elementTable = document.querySelector('#carttable');
	const elementTotalPrice = document.querySelector('#totalprice');

	if(dataCart.listCart.length == 0) {
		elementTable.innerHTML = ``;
		elementTotalPrice.innerHTML = '0 VND';
		return;
	}

	
	var dataHTML = `
		<tbody>
			<tr>
				<th>STT</th>
				<th>Ảnh sản phẩm</th>
				<th>Sản phẩm</th>
				<th>Giá</th>
				<th>Số lượng</th>
				<th>Tổng<th>
				</tr>
			</tr>
	`;

	var flag = 0;
	var flagArray = [];
	for(var i = 0; i < dataCart.listCart.length; ++i) {
		flagArray.push(0);
	}

	var totalPrice = 0;
	dataProduct.forEach(function(element) {
		if(flag == dataCart.listCart.length) {
			return;	
		}
		for(var i = 0; i < dataCart.listCart.length; ++i) {
			const Cart = dataCart.listCart[i];
			if(element.productId == dataCart.listCart[i].id && flagArray[i] == 0) {
				dataHTML += `
					<tr>
						<td>${flag + 1}</td>
						<td>
							<div class="table-image">
								<img src="../assets/img/product/${element.img}">
							</div>
						</td>
						<td>${element.name}</td>
						<td>${hienThiGia(element.price)}</td>
						<td>
							<button onClick="quantitydown('${element.productId}')">-</button>
							<input id="quantity" type="text" onChange="updateCart(this.value), ${element.productId}" readonly value="${Cart.quantity}">
							<button onClick="quantityup('${element.productId}')">+</button>
						</td>
						<td>${hienThiGia(element.price * Cart.quantity)}</td>
						<td><button onClick="deleteCart('${element.productId}')">x</button></td>
					</tr>
				`;
				flag += 1;
				flagArray[i] = 1;
				totalPrice += (element.price) * Cart.quantity;
			}
		}
	});

	elementTotalPrice.innerText = hienThiGia(totalPrice);
	
	dataHTML += "</tbody>";
	elementTable.innerHTML = dataHTML;
}

function quantitydown(id) {
	const dataUser = getUser();	
	const dataCart = JSON.parse(localStorage.getItem('shopCart'));
	for(var i = 0; i < dataCart.length; ++i) {
		if(dataCart[i].name == dataUser.username) {
			const listCart = dataCart[i].listCart;
			
			for(var j = 0; j < listCart.length; ++j) {
				if(listCart[j].id == id) {
					if(listCart[j].quantity > 1) {
						listCart[j].quantity -= 1;
						dataCart[i].listCart = listCart;
						localStorage.setItem('shopCart', JSON.stringify(dataCart));
						hienThiListCart();
						return;
					}

					if(listCart[j].quantity == 1) {
						deleteCart(id);
						return;
					}
				}
			}
		}
	}
}

function quantityup(id) {
	const dataUser = getUser();	
	const dataCart = JSON.parse(localStorage.getItem('shopCart'));
	for(var i = 0; i < dataCart.length; ++i) {
		if(dataCart[i].name == dataUser.username) {
			const listCart = dataCart[i].listCart;
			
			for(var j = 0; j < listCart.length; ++j) {
				if(listCart[j].id == id) {
					listCart[j].quantity += 1;
					dataCart[i].listCart = listCart;
					break;
				}
			}
			break;
		}
	}

	localStorage.setItem('shopCart', JSON.stringify(dataCart));
	hienThiListCart();
}

function deleteCart(id) {
	const dataUser = getUser();
	const dataCart = JSON.parse(localStorage.getItem('shopCart'));
	for(var i = 0; i < dataCart.length; ++i) {
		if(dataCart[i].name == dataUser.username) {
			const listCart = dataCart[i].listCart;
			dataCart[i].listCart = listCart.filter(function(element) {
				const numberId = parseInt(element.id);
				return numberId != id;
			});
			break;
		}
	}

	localStorage.setItem('shopCart', JSON.stringify(dataCart));
	hienThiListCart();
}

function deleteAllCart() {
	const dataUser = getUser();
	const dataShopCart = JSON.parse(localStorage.getItem('shopCart'));
	dataShopCart.forEach(function(element, index) {
		if(element.name == dataUser.username) {
			dataShopCart[index].listCart = [];	
			return;
		}
	});	
	localStorage.setItem('shopCart', JSON.stringify(dataShopCart));
	hienThiListCart();
}


hienThiListCart();


// Thanh toán
function buy(){
	var info = '';
	var totalprice = 0;
	const dataUser = getUser();
	const dataCartOfUser = JSON.parse(localStorage.getItem('shopCart')).find(function(element) {
		return dataUser.username == element.name;
	});

	if(dataCartOfUser.listCart.length == 0) {
		return;
	}

	var flag = 0;
	var flagArray = [];
	for(var i = 0; i < dataCartOfUser.listCart.length; ++i) {
		flagArray.push(0);
	}
	const dataProductInListCart = JSON.parse(localStorage.getItem('product')).filter(function(element) {
		if(flag == dataCartOfUser.listCart.length) {
			return false;
		}

		for(var i = 0; i < dataCartOfUser.listCart.length; ++i) {
			if(element.productId == dataCartOfUser.listCart[i].id && flagArray[i] == 0) {
				flag += 1;
				return true;
			}
		}
	});

	for (var i = 0; i < dataProductInListCart.length; i++) {
		info += dataCartOfUser.listCart[i].quantity+' x '+dataProductInListCart[i].name + '; ';
		totalprice += dataCartOfUser.listCart[i].quantity*dataProductInListCart[i].price;
	}

	var date = new Date();
	var d = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();

	if(localStorage.getItem('bill')===null){
		var billArray = [];
		var bill = {id: billArray.length, info: info, totalprice: totalprice, customer: dataUser.name, date: d, status: 'Đã thanh toán'};
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}
	else{
		var billArray = JSON.parse(localStorage.getItem('bill'));
		var bill = {id: billArray.length, info: info, totalprice: totalprice, customer: dataUser.name, date: d, status: 'Đã thanh toán'};
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}	

	deleteAllCart();
	showBill();
}

function showBill(){
	if (localStorage.getItem('bill')===null){
		document.getElementById('bill').style.display = 'none';
	}
	else{
		var dataUser = getUser();
		var billArray = JSON.parse(localStorage.getItem('bill'));
		var s='<h2>Đơn hàng đã đặt</h2>';
		for (var i = 0; i < billArray.length; i++) {
			if(dataUser.name==billArray[i].customer){
				document.getElementById('bill').style.display = 'block';
				s += `
					<div class="billcontent">
						<div>${billArray[i].info}</div>
						<div>${hienThiGia(billArray[i].totalprice)}</div>
						<div>${billArray[i].date}</div>
						<div>${billArray[i].status}</div>
					</div>
				
				`;
			}
		}
		document.getElementById('bill').innerHTML = s;
	}
}

showBill();
