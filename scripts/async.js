const box = document.querySelector('.box'),
    filter__box = document.querySelector('.filter__box');


let filter__text

async function back() {
    try {

        const res = await fetch('https://dummyjson.com/products'),
            data = await res.json()

        let arr = []
        const array = data.products

        function filterarr() {
            let unique = new Set()
            for (let i = 0; i < data.products.length; i++) {
                unique.add(data.products[i].brand)
            }
            unique = [...unique]
            console.log(unique);
            unique.forEach((e, i) => {
                let div = document.createElement('button');
                let text = document.createElement('p');

                div.classList.add('filter__card');
                text.classList.add('filter__text');

                text.textContent = unique[i]
                div.append(text);
                filter__box.append(div)
            })
        }
        filterarr()

        data.products.forEach((e, i) => {
            const rating = document.createElement(`div`)
            const card = document.createElement('div')
            let imgDiv = document.createElement(`div`)
            let img = document.createElement(`img`)
            let discount = document.createElement(`h5`)


            let infoDiv = document.createElement('div')
            let title = document.createElement(`h4`)
            let info = document.createElement(`p`)
            let price = document.createElement(`span`)
            let brand = document.createElement(`h3`)
            let stock = document.createElement(`p`)

            // claslist 
            card.classList.add(`card`)

            imgDiv.classList.add(`imgDiv`)
            img.classList.add(`card__img`)
            discount.classList.add(`card__discount`)

            infoDiv.classList.add(`card__infoDiv`)

            title.classList.add(`title`)
            info.classList.add(`card__info`)
            price.classList.add(`card__price`)
            brand.classList.add(`card__brand`)
            stock.classList.add(`card__stock`)


            img.setAttribute(`src`, data.products[i].thumbnail)
            discount.innerHTML = ` ${Math.round(data.products[i].discountPercentage)} %`

            title.innerHTML = data.products[i].title
            info.innerHTML = data.products[i].description
            price.innerHTML = ` - ${data.products[i].price} $`
            brand.innerHTML = data.products[i].brand
            stock.innerHTML = `Exists: ${data.products[i].stock}`
            infoDiv.append(title)
            infoDiv.append(info)
            infoDiv.append(price)
            infoDiv.append(brand)
            infoDiv.append(stock)

            // append 

            imgDiv.append(img)
            imgDiv.append(discount)
            imgDiv.append(brand)
            card.append(imgDiv)
            title.append(price)


            card.append(title)
            card.append(info)

            card.append(stock)
            imgDiv.append(rating)
            card.append(infoDiv)

            box.append(card)
            const body = document.querySelector('.blur'),
                close = document.querySelector('.close'),
                rate = document.querySelector('.rating');


            close.style.transition = `0`

            card.addEventListener(`click`, () => {
                body.classList.add(`active`)
                close.style.display = `block`
                rate.style.display = `flex`
                submit.style.display = `block`

                close.addEventListener(`click`, () => {
                    body.classList.remove(`active`)
                    close.style.display = `none`
                    rate.style.display = `none`
                    submit.style.display = `none`

                })
            })
        })
        const filter__button = document.querySelectorAll('.filter__card'),
            loadeBox = document.querySelector('.loader__bxo'),
            titleFilter = document.querySelectorAll('.title');
        filter__button.forEach((e) => {
            e.addEventListener(`click`, () => {
                let childsTextcontent = Array.from(e.childNodes)
                    .filter(node => node.nodeType === Node.ELEMENT_NODE)
                    .map(node => node.textContent)
                    .join(' ');

                loadeBox.classList.add(`show`)
                // titleFilter.textContent
                // if (childsTextcontent === titleFilter.textContent) {
                //     console.log('g');
                //     console.log(card);
                // }

                setTimeout(() => {
                    loadeBox.classList.remove(`show`)
                }, 1200);
            })
        })
    } catch (error) {
        console.error(error);
    }
}
back();


// RATIG