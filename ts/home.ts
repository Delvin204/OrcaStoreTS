type Product = {
	id:number,
	image:string,
	name:string,
	price:number,
	type:string,
	releaseDate:Date,
	developer:string
	publisher:string,
	largeImageUrl:string,
	buyCount:number
}

type Banner = {
	url:string
}

const showBannerImage = (img) => {
    return `<div class="carousel-item">
                <img src="/image/Banner/${img.url}" class="d-block w-100 rounded-4" alt="...">
            </div>`
}
export const showBanner = async () => {
    let banner:Banner[] = await fetch("http://localhost:3000/banner")
    .then(res=>res.json())
    .then(data=>{return data});

    let str = ``;
    banner.forEach(bn => str += showBannerImage(bn));
    return str;
}

const showProInfo = (product) => {
    return `<div class="col-xs-6">
						<a href="product.html?id=${product.id}" class="text-decoration-none">
							<div class="card bg-black border-0 text-light product-card">
								<img src="/${product.image}" class="card-img-top" alt="...">
								<div class="card-text mt-3 fw-bold">${product.name}</div>
								<div class="card-text mt-3 fw-bold">${Number(product.price).toLocaleString("vi")} ₫</div>
							</div>
						</a>
					</div>`
}
export const showPro = async () => {
    let products:Product[] = await fetch("http://localhost:3000/product")
    .then(res=>res.json())
    .then(data=>{return data});

    let str = ``;
    products.forEach(prd => str += showProInfo(prd));
    return str;
}

const showTopSellInfo = (top) => {
    return `<a href="product.html?id=${top.id}" class="text-decoration-none">
	                  <div class="card mb-3 bg-black border-0 text-light top-card">
	                    <div class="row row-cols-2 g-0">
	                      <div class="col-xl-2 col-lg-4 col-md-6 col-xs-4">
	                        <img src="${top.image}" class="img-fluid rounded-start" alt="...">
	                      </div>
	                      <div class="col-xl-10 col-lg-8 col-md-6 col-xs-8">
	                        <div class="card-text ms-3 my-3">
	                          ${top.name}
	                        </div>
	                        <div class="card-text ms-3">${Number(top.price).toLocaleString("vi")} ₫</div>
	                      </div>
	                    </div>
	                  </div>
	                </a>`
}
export const showTopSell = async () => {
    let products:Product[] = await fetch("http://localhost:3000/topSeller")
    .then(res=>res.json())
    .then(data=>{return data});

    let str = ``;
    products.forEach(top => str += showTopSellInfo(top));
    return str;
}

const showMostPlayInfo = (top) => {
    return `<a href="product.html?id=${top.id}" class="text-decoration-none">
	                  <div class="card mb-3 bg-black border-0 text-light top-card">
	                    <div class="row row-cols-2 g-0">
	                      <div class="col-xl-2 col-lg-4 col-md-6 col-xs-4">
	                        <img src="${top.image}" class="img-fluid rounded-start" alt="...">
	                      </div>
	                      <div class="col-xl-10 col-lg-8 col-md-6 col-xs-8">
	                        <div class="card-text ms-3 my-3">
	                          ${top.name}
	                        </div>
	                        <div class="card-text ms-3">${Number(top.price).toLocaleString("vi")} ₫</div>
	                      </div>
	                    </div>
	                  </div>
	                </a>`
}
export const showMostPlay = async () => {
    let products:Product[] = await fetch("http://localhost:3000/mostPlayed")
    .then(res=>res.json())
    .then(data=>{return data});

    let str = ``;
    products.forEach(top => str += showMostPlayInfo(top));
    return str;
}

const showTopRateInfo = (top) => {
    return `<a href="product.html?id=${top.id}" class="text-decoration-none">
	                  <div class="card mb-3 bg-black border-0 text-light top-card">
	                    <div class="row row-cols-2 g-0">
	                      <div class="col-xl-2 col-lg-4 col-md-6 col-xs-4">
	                        <img src="${top.image}" class="img-fluid rounded-start" alt="...">
	                      </div>
	                      <div class="col-xl-10 col-lg-8 col-md-6 col-xs-8">
	                        <div class="card-text ms-3 my-3">
	                          ${top.name}
	                        </div>
	                        <div class="card-text ms-3">${Number(top.price).toLocaleString("vi")} ₫</div>
	                      </div>
	                    </div>
	                  </div>
	                </a>`
}
export const showTopRate = async () => {
    let products:Product[] = await fetch("http://localhost:3000/topRating")
    .then(res=>res.json())
    .then(data=>{return data});

    let str = ``;
    products.forEach(top => str += showTopRateInfo(top));
    return str;
}