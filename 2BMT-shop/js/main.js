

createProduct();
createUserData();

function createUserData() {
	if(localStorage.getItem('user') == null) {
		dataUser = [
			{ token: 'wertertugeherty54er4', username:'admin', password:'123456', name: 'Đinh Nhật Tân' },
		];	
		localStorage.setItem('user', JSON.stringify(dataUser));

		dataShopCart = [
			{ 
				name: 'admin', 
				listCart: [
				]
			},
		];

		localStorage.setItem('shopCart', JSON.stringify(dataShopCart));
	}
}


/*PRODUCT*/
function createProduct() {
	if (localStorage.getItem('product') === null) {
		var productArray = [
			{ productId: 10052, brand: 'kawasaki', img: 'kawasaki/kawasaki Z400 ABS.png', name: 'kawasaki Z400 ABS', price:149000000 },
			{ productId: 10001, brand: 'honda', img: 'honda/Honda CBR250RR 2021.jpg', name: 'Honda CBR250 2021', price: 160000000 },
			{ productId: 10053, brand: 'kawasaki', img: 'kawasaki/kawasaki Z650 ABS.png', name: 'kawasaki Z650 ABS', price:187000000 },
			{ productId: 10032, brand: 'yamaha', img: 'yamaha/Yamaha R7.jpg', name: 'Yamaha R7', price: 480000000 },
			{ productId: 10016, brand: 'suzuki', img: 'suzuki/Suzuki-GSX-R750.jpg', name: 'Suzuki-GSX-R750', price: 290000000 },
			{ productId: 10039, brand: 'yamaha', img: 'yamaha/yamaha YZF-R15.png', name: 'Yamaha YZF-R15' , price:15000000},
			{ productId: 10006, brand: 'honda', img: 'honda/Honda CBR1000RR SP2.jpg', name: 'Honda CBR1000 SP2', price: 950000000 },
			{ productId: 10047, brand: 'kawasaki', img: 'kawasaki/Kawasaki ZH2.jpg', name: 'Kawasaki ZH2', price: 690000000 },
			{ productId: 10011, brand: 'honda', img: 'honda/Honda Fury 1300.jpg', name:'Honda Fury 1300' , price:580000000 },
			{ productId: 10018, brand: 'suzuki', img: 'suzuki/Suzuki GSX-S1000.jpg', name: 'Suzuki GSX-S1000', price: 399000000 },
			{ productId: 10000, brand: 'honda', img: 'honda/Honda CBR150R 2021.jpg', name: 'Honda CBR150R 2021', price: 72000000 },
			{ productId: 10015, brand: 'suzuki', img: 'suzuki/Suzuki GIXXER SF250.jpg', name: 'Suzuki GIXXER SF250', price: 125000000 },
			{ productId: 10031, brand: 'yamaha', img: 'yamaha/Yamaha XSR700.jpg', name: 'Yamaha XSR700', price: 197000000 },
			{ productId: 10017, brand: 'suzuki', img: 'suzuki/Suzuki GSXR1000 ABS Special Edittion.jpg', name: 'Suzuki GSXR1000 ABS', price: 880000000 },
			{ productId: 10044, brand: 'kawasaki', img: 'kawasaki/Kawasaki Ninja 400 ABS.jpg', name: 'Kawasaki Ninja 400 ABS', price: 162000000 },
			{ productId: 10019, brand: 'suzuki', img: 'suzuki/Suzuki V-STROM 1050ABS.jpg', name: 'Suzuki V-STROM 1050ABS', price: 419000000 },
			{ productId: 10012, brand: 'honda', img: 'honda/Honda Gold Wing 1800 DCT 2019.jpg', name:'Honda Gold Wing 1800 DCT 2019' , price:880000000 },
			{ productId: 10021, brand: 'suzuki', img: 'suzuki/Suzuki Boulevard C90T.jpg', name: 'Suzuki Boulevard C90T', price: 400000000 },
			{ productId: 10008, brand: 'honda', img: 'honda/Honda Africa Twin Adventure Sport.png', name:'Honda Africa Twin Adventure Sport' , price:689000000 },
			{ productId: 10022, brand: 'suzuki', img: 'suzuki/Suzuki Hayabusa GSX1300R.jpg', name:'Suzuki Hayabusa GSX1300R' , price:890000000},
			{ productId: 10024, brand: 'suzuki', img: 'suzuki/Suzuki V-Strom 650A.jpg', name:'Suzuki V-Strom 650A' , price:263000000},
			{ productId: 10055, brand: 'kawasaki', img: 'kawasaki/kawasaki Z1000 ABS.png', name: 'kawasaki Z1000 ABS', price:425000000 },
			{ productId: 10036, brand: 'yamaha', img: 'yamaha/Yamaha MT-09.jpg', name: 'Yamaha MT-09' , price:17000000},
			{ productId: 10028, brand: 'yamaha', img: 'yamaha/Yamaha YB 125 SP.jpg', name: 'Yamaha YB 125 SP', price: 43000000 },
			{ productId: 10049, brand: 'kawasaki', img: 'kawasaki/Kawasaki Z1000 ABS.jpg', name: 'Kawasaki Z1000 ABS', price: 412000000 },
			{ productId: 10026, brand: 'suzuki', img: 'suzuki/Suzuki-GSX150-Bandit 2020.jpg', name:'Suzuki GSX150 bandit' , price:69000000},
			{ productId: 10046, brand: 'kawasaki', img: 'kawasaki/Kawasaki Z900 ABS.jpg', name: 'Kawasaki Z900 ABS', price: 288000000 },
			{ productId: 10029, brand: 'yamaha', img: 'yamaha/Yamaha 250 V-Star.jpg', name: 'Yamaha V-Star 250', price: 280000000 },
			{ productId: 10009, brand: 'honda', img: 'honda/Honda CBR600RR.jpg', name:'Honda CBR600RR' , price:520000000 },
			{ productId: 10020, brand: 'suzuki', img: 'suzuki/Suzuki Hayabusa 2018.jpg', name: 'Suzuki Hayabusa 2018', price: 494000000 },
			{ productId: 10003, brand: 'honda', img: 'honda/Honda CB500F.jpg', name: 'Honda CB500F', price: 177000000 },
			{ productId: 10033, brand: 'yamaha', img: 'yamaha/Yamaha Bolt R950.jpg', name: 'Yamaha Bolt R950', price: 420000000 },
			{ productId: 10025, brand: 'suzuki', img: 'suzuki/suzuki-Bandit-1250S-ABS.jpg', name:'Suzuki Bandit 1250S' , price:228000000},
			{ productId: 10034, brand: 'yamaha', img: 'yamaha/Yamaha MT10.jpg', name: 'Yamaha MT10', price: 623000000 },
			{ productId: 10010, brand: 'honda', img: 'honda/Honda CBR650R.jpg', name:'Honda CBR650R' , price:252000000 },
			{ productId: 10035, brand: 'yamaha', img: 'yamaha/Yamaha YZF-R1.jpg', name: 'Yamaha YZF-R1', price: 638000000 },
			{ productId: 10042, brand: 'kawasaki', img: 'kawasaki/Kawasaki W175 SE.jpg', name: 'Kawasaki W175 SE', price: 69000000 },
			{ productId: 10005, brand: 'honda', img: 'honda/Honda Shadow Aero 750 ABS.jpg', name: 'Honda Shadow 750 ABS', price: 475000000 },
			{ productId: 10037, brand: 'yamaha', img: 'yamaha/yamaha TFX 150.png', name: 'Yamaha TFX 150' , price:15000000},
			{ productId: 10004, brand: 'honda', img: 'honda/Honda CBR600RR HRC MotoGP.jpg', name: 'Honda CBR600RR HRC MotoGP', price: 720000000 },
			{ productId: 10013, brand: 'honda', img: 'honda/ST1300.jpg', name:'Honda ST1300' , price:480000000 },	
			{ productId: 10038, brand: 'yamaha', img: 'yamaha/Yamaha Tracer 900 GT 2020.jpg', name: 'Yamaha Tracer 900 GT 2020' , price:15000000},
			{ productId: 10040, brand: 'yamaha', img: 'yamaha/yamaha-YZF-R6.jpg', name: 'Yamaha YZF R6' , price:15000000},
			{ productId: 10027, brand: 'suzuki', img: 'suzuki/suzuki-v-strom-1000-.jpg', name:'Suzuki V-Strom 1000GT' , price:419000000},
			{ productId: 10041, brand: 'yamaha', img: 'yamaha/yamaha-YZF-R25-2019.jpg', name: 'Yamaha YZF R25 2019' , price:156000000},
			{ productId: 10043, brand: 'kawasaki', img: 'kawasaki/Kawasaki Ninja ZX25R ABS KRT EDITION.png', name: 'Kawasaki Ninja ZX25R ABS KRT EDITTION', price: 189000000 },
			{ productId: 10023, brand: 'suzuki', img: 'suzuki/Suzuki SV650 2017.jpg', name:'Suzuki SV650 2017' , price:194000000},
			{ productId: 10045, brand: 'kawasaki', img: 'kawasaki/Kawasaki Vulcan S 650.jpg', name: 'Kawasaki Vulcan S 650', price: 239000000 },
			{ productId: 10007, brand: 'honda', img: 'honda/Honda Rebel 1100 DTC.jpg', name: 'Honda Rebel 1100 DTC', price: 620000000 },
			{ productId: 10048, brand: 'kawasaki', img: 'kawasaki/Kawasaki ZX10R ABS.jpg', name: 'Kawasaki ZX10R ABS', price: 571000000 },
			{ productId: 10014, brand: 'suzuki', img: 'suzuki/Suzuki GSX-R150.jpg', name: 'Suzuki GSX-R150', price: 719000000 },
			{ productId: 10050, brand: 'kawasaki', img: 'kawasaki/kawasaki NINJA H2 CARBON.png', name: 'kawasaki NINJA H2 CARBON', price:129000000 },
			{ productId: 10030, brand: 'yamaha', img: 'yamaha/Yamaha YZF-R6.jpg', name: 'Yamaha YZF-R6', price: 283000000 },
			{ productId: 10051, brand: 'kawasaki', img: 'kawasaki/kawasaki VERSYS-X 300 ABS CITY.png', name: 'kawasaki VERSYS-X 300 ABS CITY', price:145000000},
			{ productId: 10002, brand: 'honda', img: 'honda/Honda Rebel 300.jpg', name: 'Honda Rebel 300', price: 124000000 },
			{ productId: 10054, brand: 'kawasaki', img: 'kawasaki/kawasaki Z900RS.png', name: 'kawasaki Z900RS', price:415000000 },
	
		];
		localStorage.setItem('product', JSON.stringify(productArray));
	}
}

const dataProduct = JSON.parse(localStorage.getItem('product'));

/*=============================================================MENU==================================================*/
const dataHonda = dataProduct.filter(function(item){ return item.brand == 'honda'});
const dataYamaha = dataProduct.filter(function(item){ return item.brand == 'yamaha'});
const dataSuzuki = dataProduct.filter(function(item){ return item.brand == 'suzuki'});
const dataKawasaki = dataProduct.filter(function(item){ return item.brand == 'kawasaki'});

const listElementButtonProduct = document.querySelectorAll('.navbar-item1 .brand');
const listElementButtonSlide = document.querySelectorAll('.slider-img');
var indexButtonProductCurrent = 0;

function eventPhanLoai(index) {
		const elementMain = document.querySelector('#main');
		const elementSlide = document.querySelector('#slider');
		switch(index) {
			case 2:
				hienThiContentProducts(dataHonda, 8, 'honda');
				elementMain.scrollIntoView(true);
				break;
			case 4:
				hienThiContentProducts(dataSuzuki, 8, 'suzuki');
				elementMain.scrollIntoView(true);
				break;
			case 3:
				hienThiContentProducts(dataYamaha, 8, 'yamaha');	
				elementMain.scrollIntoView(true);
				break;
			case 1:
				hienThiContentProducts(dataKawasaki, 8, 'kawasaki');
				elementMain.scrollIntoView(true);
				break;
			default:
				hienThiContentProducts(dataProduct, 8, 'sản phẩm');
				elementSlide.scrollIntoView(true);
		}		

		indexButtonProductCurrent = index;

}


listElementButtonProduct.forEach(function(el, index) {
	el.addEventListener("click", function(event) {
		if(index == indexButtonProductCurrent) { return; }

		const elParent = event.target;
		elParent.classList.add('active');
		listElementButtonProduct[indexButtonProductCurrent].classList.remove('active');
		eventPhanLoai(index);
	});
});

listElementButtonSlide.forEach(function(el, index) {
	el.addEventListener('click', function() {
		if(index + 1 == indexButtonProductCurrent) { return; }

		listElementButtonProduct[index + 1].classList.add('active');
		listElementButtonProduct[indexButtonProductCurrent].classList.remove('active');
		eventPhanLoai(index + 1);
	})
})

/* ====================================================================================================================*/

/*======================================================= THONG TIN NGUOI DUNG====================================*/
var elementDangHienThi = null;
var checkUser = false;

function closeElement() {
	if(elementDangHienThi != null) { 
		elementDangHienThi.style.display = 'none';
		elementDangHienThi = null;
	}
}

function closeForm() {
	const userForm = document.getElementById('user');
	userForm.style.display = 'none';
}

function hienThiFormUser(nameForm) {
	const userForm = document.getElementById('user');
	const form = document.querySelector('#' + nameForm);
	closeElement();
	elementDangHienThi = form;
	userForm.style.display = 'block';
	form.style.display = 'block';
}

function hienThiThongTinNguoiDung() {
	const token = localStorage.getItem('token');
	const elementLoadingUser = document.querySelector('#navbar-list-bottom .navbar_loading');
	if(token == null) {
		elementLoadingUser.innerHTML = `
				<div class="navbar_info" onClick="hienThiFormUser('login')">đăng nhập</div>
				<div class="navbar_info" onClick="hienThiFormUser('signup')">đăng ký</div>
		`;	
	}
	else {
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
				
				const dataShopCart = JSON.parse(localStorage.getItem('shopCart'));
				dataShopCart.forEach(function(dataCart) {
				if(dataCart.name == dataUser.username) {
					document.querySelector('.navbar_shopcart .number_cart').innerText = dataCart.listCart.length;
				}
			});
				return;
			}
		});
	}
}

hienThiThongTinNguoiDung();

function login(event) {
	event.preventDefault();
	var username = document.getElementById('usernameLogin').value;
	var password = document.getElementById('passwordLogin').value;
	var flag = false;
	if (!username) {
		document.getElementById('usernameerror').style.display = 'block';
		flag = true;
	} else {
		document.getElementById('usernameerror').style.display = 'none';
	}
	if (!password) {
		document.getElementById('passwordloginerror').style.display = 'block';
		flag = true;
	} else {
		document.getElementById('passwordloginerror').style.display = 'none';
	}
	if (flag == true) {
		return;
	}

	var dataUsers = JSON.parse(localStorage.getItem('user'));
	dataUsers.forEach(function(dataUser) {
		if(dataUser.username == username && dataUser.password == password) {
			localStorage.setItem('token', dataUser.token);
			location.reload();
			return true;	
		}
	});
	document.getElementById('passwordloginerror').style.display = 'block';
	document.getElementById('passwordloginerror').innerHTML = 'Sai thông tin đăng nhập';
	return false;
}

function createToken() {
	return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
}

function createUser(e) {
	e.preventDefault();
	var fullname = document.getElementById('fullname');
	var address = document.getElementById('address');
	var phone = document.getElementById('phone');
	var username = document.getElementById('usernameSignUp');
	var password = document.getElementById('passwordSignUp');
	var password2 = document.getElementById('passwordSignUp2');
	var flag = false;
	if (!fullname.value) {
		document.getElementById('fullnameerror').style.display = 'block';
		flag = true;
	} else {
		document.getElementById('fullnameerror').style.display = 'none';
	}
	if (!address.value) {
		document.getElementById('addresserror').style.display = 'block';
		flag = true;
	} else {
		document.getElementById('addresserror').style.display = 'none';
	}
	if (!phone.value) {
		document.getElementById('phoneerror').style.display = 'block';
		flag = true;
	} else {
		if (isNaN(Number(phone.value))) {
			document.getElementById('phoneerror').style.display = 'block';
			document.getElementById('phoneerror').innerHTML = 'Số điện thoại không hợp lệ';
			flag = true;
		} else {
			if (Number(phone.value) < 100000000 || Number(phone.value) > 999999999) {
				document.getElementById('phoneerror').style.display = 'block';
				document.getElementById('phoneerror').innerHTML = 'Số điện thoại không đúng';
				flag = true;
			} else {
				document.getElementById('phoneerror').style.display = 'none';
			}
		}
	}
	if (!username.value) {
		document.getElementById('usererror').style.display = 'block';
		flag = true;
	} else {
		document.getElementById('usererror').style.display = 'none';
	}
	if (!password.value) {
		document.getElementById('passworderror').style.display = 'block';
		flag = true;
	} else {
		if (password.value.length < 8) {
			document.getElementById('passworderror').style.display = 'block';
			document.getElementById('passworderror').innerHTML = 'Mật khẩu phải trên 8 ký tự';
			flag = true;
		} else {
			document.getElementById('passworderror').style.display = 'none';
		}
	}
	if (password2.value != password.value) {
		document.getElementById('password2error').style.display = 'block';
		flag = true;
	} else {
		document.getElementById('password2error').style.display = 'none';
	}
	if (flag == true) {
		return;
	}
	var user = {
		token: createToken(),
		username: username.value,
		password: password.value,
		name: fullname.value,
	};
	var userArray = JSON.parse(localStorage.getItem('user'));
	for (var i = 0; i < userArray.length; i++) {
		if (user.username == userArray[i].username) {
			document.getElementById('usererror').style.display = 'block';
			document.getElementById('usererror').innerHTML = 'Tên đăng nhập đã có người sử dụng';
			username.focus();
			return;
		}
	}
	userArray.push(user);
	localStorage.setItem('user', JSON.stringify(userArray));
	var dataShopCart = JSON.parse(localStorage.getItem('shopCart'));
	dataShopCart.push({
		name: username.value,
		listCart: []
	});
	localStorage.setItem('shopCart', JSON.stringify(dataShopCart));
	hienThiFormUser('login');
}

document.getElementById('signupform').addEventListener('submit', createUser);
document.getElementById('loginform').addEventListener('submit', login);
document.getElementById('user').addEventListener('click', closeForm);
document.getElementById('loginform').addEventListener('click', function(event) {
	event.stopPropagation();
});
document.getElementById('signupform').addEventListener('click', function(event) {
	event.stopPropagation();
});

function logout() {
	localStorage.removeItem('token');
	location.reload();
}

/*==================================================================================================================*/

/*==============================================================PHAN TRANG============================================*/

function createHTMLProduct(name, price, image, id) {
	var priceDive = price / 1000000;

	return `
		<div class="col c-3">
			<div class="item-product">
				<div class="image">
					<img src="./assets/img/product/${image}">
				</div>
				<div class="product-info">
					<h2>${name}</h2>
					<span>Giá: ${priceDive}.000.000 VND</span>
					<div class="product-button">
						<div class="btn" onClick="hienThiProductDetails(${id})">
							Xem thông tin chi tiết
						</div>
						<div class="btn btn-add-cart" onClick="eventAddCart(${id}, 1)">
							Thêm vào giỏ hàng
						</div>
					</div>
				</div>
			</div>
		</div>
	`;
}

function createHTMLButtonPage(index, numberIndexPage) {
	return `
		<button class="button-element ${index === numberIndexPage && "active" || ''}">${index}</button>
	`;
}


function hienThiButtonPages(size, numberItemInPage, numberIndexPage) {
	const elementPage = document.querySelector('#page');
	var renderHTML = ``;
	var numberTemp = parseInt(size / numberItemInPage);
	var numberPage = (numberTemp*numberItemInPage == size)? numberTemp : numberTemp + 1; 
	for(var i = 1; i <= numberPage; i++) {
		renderHTML += createHTMLButtonPage(i, numberIndexPage);
	}	
	elementPage.innerHTML = renderHTML;
}


function hienThiProducts(data, numberItemInPage, numberIndexPage) {
	const elementProducts = document.querySelector('.grid #product');
	const listProductsInPage = data.slice(numberItemInPage * (numberIndexPage - 1), numberItemInPage * numberIndexPage);
	var renderHTML = ``;
	listProductsInPage.forEach(function(product) {
		renderHTML += createHTMLProduct(product.name, product.price, product.img, product.productId);	
	});
	elementProducts.innerHTML = renderHTML;
}


function hienThiContentProducts(data, numberItem, title) {
	const elementTitle = document.querySelector('.text-center');
	const numberItemInPage = numberItem; 
	var numberIndexPage = 1; 
	
	elementTitle.innerText = title;
	hienThiButtonPages(data.length, numberItemInPage, numberIndexPage);
	hienThiProducts(data, numberItemInPage, numberIndexPage);

	const listButtonPage = document.querySelectorAll('#page .button-element');
	listButtonPage.forEach(function(button, index) {
		button.addEventListener("click", function(event) {
			if(numberIndexPage - 1 === index) { return; }
			const buttonCur = event.target;
			const buttonPre = listButtonPage[numberIndexPage - 1];

			buttonPre.classList.remove("active");

			buttonCur.classList.add("active");

			numberIndexPage = index + 1;
			hienThiProducts(data, numberItemInPage, numberIndexPage);
		});
	});
}

hienThiContentProducts(dataProduct, 8, 'sản phẩm');

function hienThiProductDetails(productId) {
	function eventUpQuantity(event) {
		const parentQuantityInput = event.target.parentElement.querySelector('.quantity_input');
		const valueCurrent = parseInt(parentQuantityInput.value);
		parentQuantityInput.value = valueCurrent + 1;
	}

	function eventDownQuantity(event) {
		const parentQuantityInput = event.target.parentElement.querySelector('.quantity_input');
		const valueCurrent = parentQuantityInput.value;
		parentQuantityInput.value = (valueCurrent == 1)? 1 : valueCurrent - 1;
	}

	const elementDetails = document.getElementById('product_details');
	closeElement();
	elementDangHienThi = elementDetails;
	elementDetails.style.display = 'flex';
	dataProduct.forEach(function(product) {
		if(product.productId == productId) {
			const elementProductDetails = document.querySelector('#product_details');
			elementProductDetails.querySelector('.info_image img').src = "./assets/img/product/" + product.img;
			elementProductDetails.querySelector('.info_name').innerText = product.name;
			elementProductDetails.querySelector('.info_price').innerText = "Giá: " + (product.price / 1000000) + ".000.000 VND";
			elementProductDetails.querySelector('.info_producer').innerText = product.brand;
			elementProductDetails.querySelector('.add_item').setAttribute('onClick', "buttonAddCartInDetails(event," + productId + ")");
			elementProductDetails.querySelector('.quantity_input').value = 1;
			elementProductDetails.querySelector('.quantity_down').addEventListener('click', eventDownQuantity);
			elementProductDetails.querySelector('.quantity_up').addEventListener('click', eventUpQuantity);
			return;
		}
	});
}

function closeProductDetails() {
	closeElement();
}


/*============================================================================================================ */
function hideNotifyCart() {
	document.querySelector('.notify_cart').style.display = 'none';
}

function showNotifyCart() {
	const elementNotifyCart = document.querySelector('.notify_cart');
	if(elementNotifyCart.style.display == 'flex') { return; }
	elementNotifyCart.style.display = 'flex';
	elementNotifyCart.addEventListener('focusout', function(event) {
		event.target.style.display = 'none';
	});
	elementNotifyCart.addEventListener('focusin', function(event) {
		console.log(event.target);
	})
	elementNotifyCart.focus();
}

/*=============================================PHAN GIO HANG========================================================*/

function eventAddCart(id, quantity) {
	if(localStorage.getItem('token') == null) {
		hienThiFormUser('login');
		return;
	}
	addToCart(id, quantity);
	showNotifyCart();
	closeElement();
}

function buttonAddCartInDetails(event, productId) {
	const elementDetails = event.target.parentElement;
	const valueQuantity = elementDetails.querySelector('.quantity .quantity_input').value;
	eventAddCart(productId, valueQuantity);
}

// nut gio hang
const elementShowShopCart = document.querySelector('.navbar_shopcart_content');
if(!checkUser) {
	elementShowShopCart.addEventListener('click', function() {
		hienThiFormUser('login');
	});
}
else {
	elementShowShopCart.addEventListener('click', function() {
		location.assign('./admin/cart.html');
	});
}

function addToCart(productid1, count){
	const token = localStorage.getItem('token');
	dataUser = JSON.parse(localStorage.getItem('user')).filter(function(user) {
		if(user.token == token) {
			return user;
		}
	});

	dataShopCart = JSON.parse(localStorage.getItem('shopCart'));
	dataShopCart.forEach(function(cart, index) {
		if(cart.name == dataUser[0].username) {
			checkDataProduct = false;
			
			cart.listCart.forEach(function(element, indexEl) {
				if(element.id == productid1) {
					dataShopCart[index].listCart[indexEl].quantity += count;
					checkDataProduct = true;
					return;
				}
			})
			if(checkDataProduct == false) {
				dataShopCart[index].listCart.push({id: productid1, quantity: count });
			}
			document.querySelector('.navbar_shopcart .number_cart').innerText = dataShopCart[index].listCart.length;
			return;
		}
	});
	localStorage.setItem('shopCart', JSON.stringify(dataShopCart));
}


/*===================================================================================================================*/
/*END PRODUCT*/

/*SEARCH*/
function showSearch() {
	const elementDisplaySearch = document.getElementById('searchsection');
	closeElement();
	elementDangHienThi = elementDisplaySearch;
	document.getElementById('searchsection').style.display = 'block';
}

function closeSearch() {
	closeElement();
}

function search() {
	var productSearch = document.getElementById('search').value;
	var productArray = JSON.parse(localStorage.getItem('product'));
	var dataProductSearch = [];
	var s = '';

	if (document.getElementById('searchextend').className == '') {
		if(productSearch != '') {
			dataProductSearch = productArray.filter(function(element) {
				return element.name.includes(productSearch);
			});
		}
	}
	else {
		var brandSearch = document.getElementById('brandsearch').value;
		var priceForm = document.getElementById('priceform').value;
		var priceTo = document.getElementById('priceto').value;
		if (brandSearch == 'all') {
			dataProductSearch = productArray.filter(function(element) {
				const isTruePriceForm = element.price >= priceForm; 
				const isTruePriceTo = element.price <= priceTo;

				return isTruePriceForm && isTruePriceTo;	
			});
		}
		else {
			dataProductSearch = productArray.filter(function(element) {
				const isTrueBrand = element.brand == brandSearch;
				const isTruePriceForm = element.price >= priceForm; 
				const isTruePriceTo = element.price <= priceTo;

				return isTrueBrand && isTruePriceForm && isTruePriceTo;
			})
		}
	}

	dataProductSearch.forEach(function(element) {
		s += createHTMLProduct(element.name, element.price, element.img, element.productId);
	});

	document.getElementById('searchresult').innerHTML = s;
}

function showExtend() {
	if (document.getElementById('searchextend').className == '') {
		document.getElementById('searchextend').classList.add('active')
		document.querySelector('#searchsection .searchbox button img').src = './assets/img/icon/arrow2.svg';
		document.getElementById('priceform').value = 0; 
		document.getElementById('priceto').value = 10000000000; 
	}
	else {
		document.getElementById('searchextend').classList.remove('active');
		document.querySelector('#searchsection .searchbox button img').src = './assets/img/icon/arrow.svg';
		document.getElementById('priceform').value = "";
		document.getElementById('priceto').value = "";
	}
}																																																																																																																																																											
