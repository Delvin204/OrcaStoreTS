const showProInfo = (product) => {
    return `<h1>${product.name}</h1>
        <div class="row my-4">
          <div class="col-lg-8 col-md-7 col-sm-12">
            <div class="card mb-3 bg-black border-0 text-light">
              <img src="${product.largeImageUrl}" class="card-img-top" alt="...">
              <div class="card-body px-0 my-3">
                <h5 class="card-title">Saga Anderson arrives to investigate ritualistic murders in a small town. Alan
                  Wake pens a dark story to shape the reality around him. These two heroes are somehow connected. Can
                  they become the heroes they need to be?</h5>
                <p class="card-text my-3">Alan Wake 2: Winner of Time Magazine's Game of the Year; Washington Post's
                  Game of the Year; The Game Awards' Best Game Direction, Best Art Direction and Best Narrative; and
                  Golden Joystick's Critics' Choice Award.</p>
                <div class="card-text text-body-light opacity-50">
                  <p>A string of ritualistic murders threatens Bright Falls, a small-town community surrounded by
                    Pacific Northwest wilderness. Saga Anderson, an accomplished FBI agent with a reputation for solving
                    impossible cases arrives to investigate the murders. Anderson’s case spirals into a nightmare when
                    she discovers pages of a horror story that starts to come true around her.</p>
                  <p>Anderson and Wake are two heroes on two desperate journeys in two separate realities, connected at
                    heart in ways neither of them can understand: reflecting each other, echoing each other, and
                    affecting the worlds around them.</p>
                  <p>Fueled by the horror story, supernatural darkness invades Bright Falls, corrupting the locals and
                    threatening the loved ones of both Anderson and Wake. Light is their weapon—and their safe haven —
                    against the darkness they face. Trapped in a sinister horror story where there are only victims and
                    monsters, can they break out to be the heroes they need to be?</p>
                </div>
                <div class="card-text textt-light collapse" id="seeMore">
                  <p class="fw-bold">Solve a Deadly Mystery</p>
                  <p class="opacity-50">What begins as a small-town murder investigation rapidly spirals into a
                    nightmare journey. Uncover the source of the supernatural darkness in this psychological horror
                    story filled with intense suspense and unexpected twists.</p>
                  <p class="fw-bold">Play As Two Characters</p>
                  <p class="opacity-50">Experience both Alan Wake’s and Saga Anderson’s stories and see events unfold
                    from different perspectives. Switch between Anderson’s life-or-death race to solve the case and
                    Wake’s desperate attempts to rewrite his reality to escape the depths of the Dark Place.</p>
                  <p class="fw-bold">Explore Two Worlds</p>
                  <p class="opacity-50">Experience two beautiful yet terrifying worlds, each with its own rich cast of
                    characters and deadly threats. Discover majestic landscapes of Cauldron Lake in the Pacific
                    Northwest and the idyllic towns of Bright Falls and Watery. Contrasting sharply, attempt to escape
                    the nightmarish cityscape of the Dark Place.</p>
                  <p class="fw-bold">Survive With Light</p>
                  <p class="opacity-50">With limited resources, take on powerful supernatural enemies in desperate
                    close-combat situations. It takes more than just a gun to survive: light is the ultimate weapon in
                    the fight against the darkness and will be your refuge when enemies threaten to overwhelm you.</p>
                </div>
                <p class="d-flex gap-1 justify-content-center">
                  <button class="btn btn-secondary flex-grow-1" type="button" data-bs-toggle="collapse"
                    data-bs-target="#seeMore" aria-expanded="false" aria-controls="seeMore">
                    See More
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-5 col-sm-12">
            <h3 class="text-light text-center py-4">${Number(product.price).toLocaleString("vi")} ₫</h3>
            <div class="d-grid gap-2 my-2">
              <button class="btn btn-primary rounded-2" type="button">
                <p class="fs-6 my-auto py-2" style="font-variant: small-caps;">buy now</p>
              </button>
              <a class="btn btn-outline-light rounded-2" href="cartAdd?id=${product.id}">
                <p class="fs-6 my-auto py-2" style="font-variant: small-caps;"><svg xmlns="http://www.w3.org/2000/svg"
                    height="14" width="14"
                    viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path fill="#ffffff"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                  </svg>
                  add to cart</p>
              </a>
            </div>
            <div class="my-4">
              <table class="table table-dark">
                <tr>
                  <td class="bg-black text-start text-light opacity-75">Develope</th>
                  <td class="bg-black text-end">${product.developer}</td>
                </tr>
                <tr>
                  <td class="bg-black text-start text-light opacity-75">Publisher</th>
                  <td class="bg-black text-end">${product.publisher}</td>
                </tr>
                <tr>
                  <td class="bg-black text-start text-light opacity-75">Release Date</th>
                  <td class="bg-black text-end">${product.releaseDate}</td>
                </tr>
                <tr>
                  <td class="bg-black text-start text-light opacity-75">Platform</th>
                  <td class="bg-black text-end"><svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25"
                      viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                      <path fill="#ffffff"
                        d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
                    </svg></td>
                </tr>
              </table>
            </div>
            <div class="d-grid gap-2 my-2">
              <button class="btn btn-outline-light rounded-2" type="button">
                <p class="fs-6 my-auto" style="font-variant: small-caps;"><svg xmlns="http://www.w3.org/2000/svg"
                    height="14" width="12.25"
                    viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path fill="#ffffff"
                      d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24V64 350.5 400v88c0 13.3 10.7 24 24 24s24-10.7 24-24V388l80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52V24zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8V334.7l-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5v-237z" />
                  </svg> report</p>
              </button>
            </div>
          </div>
        </div>`;
};
export const showProduct = async () => {
    let products = await fetch("http://localhost:3000/product")
    .then(res=>res.json())
    .then(data=>{return data});

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    let str = ``;
    products.forEach(sp => {
        if (sp.id === productId) {
            str += showProInfo(sp);
        }
    })
    return str;
}