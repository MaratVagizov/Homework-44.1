const data = [
    {
        title: 'MacBook Air',
        img: 'macbookair1.jpg',
        img2: 'macbookair2.jpg',
        img3: 'macbookair3.jpg',
        img_2: 'm1.png',
        img_3: 'memory.png',
        img_4: '1.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-air',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: ''
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 18,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 2.8,
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 13”',
        img: 'macbookair1.jpg',
        img2: 'macbookair2.jpg',
        img3: 'macbookair3.jpg',
        img_2: 'm1.png',
        img_3: 'memory.png',
        img_4: '2.png',
        price: 1299,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['#C7C8CA', '#B1B2B7'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: 'Also available with Intel Core i5 or i7 processor'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 20,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 3.0,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 16”',
        img: 'macbookair1.jpg',
        img2: 'macbookair2.jpg',
        img3: 'macbookair3.jpg',
        img_2: 'intel.png',
        img_3: 'memory2.png',
        img_4: '2.png',
        price: 2399,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 16
            },
            chip: {
                title: 'Up to Intel Core i9 processor',
                description: ''
            },
            ram: {
                title: 'Up to 64GB memory',
                description: ''
            },
            memory: {
                size: 8,
                type: 'tb'
            },
            battery: 11,
            camera: {
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: 4.3,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
]

let container = document.querySelector('.container')

for ( let item of data) {

    let column = document.createElement('div')
    let img_display = document.createElement('img')
    let p_model = document.createElement('p')
    let box = document.createElement('div')
    let circle_1 = document.createElement('div')
    let circle_2 = document.createElement('div')
    let circle_3 = document.createElement('div')
    let p_cost = document.createElement('p')
    let btn = document.createElement('button')
    let p_displaySize = document.createElement('p')
    let p_displaType = document.createElement('p')
    let img_processor = document.createElement('img')
    let p_processorType = document.createElement('p')
    let p_processorAvailable = document.createElement('p')
    let img_memory = document.createElement('img')
    let p_memoryType = document.createElement('p')
    let p_memoryPerformance = document.createElement('p')
    let p_memory = document.createElement('p')
    let p_storage = document.createElement('p')
    let img_battery = document.createElement('img')
    let p_battery = document.createElement('p')
    let img_camera = document.createElement('img')
    let p_camera = document.createElement('p')
    let p_cameraSignal = document.createElement('p')
    let p_weightLb = document.createElement('p')
    let p_weight = document.createElement('p')
    let img_touch = document.createElement('img')
    let p_touch = document.createElement('p')
    let a_link = document.createElement('a')


    column.classList.add('column')
    img_display.src = `./img/${item.img}`
    img_display.classList.add('img_disp')
    p_model.innerHTML = item.title
    p_model.classList.add('txt_1')
    box.classList.add('box')
    circle_1.classList.add('circle_1')
    circle_2.classList.add('circle_2')
    circle_3.classList.add('circle_3')
    p_cost.innerHTML = `From $${item.price}`
    p_cost.classList.add('txt_2')
    btn.innerHTML = 'Buy'
    btn.classList.add('btn')
    p_displaySize.innerHTML = `${item.specs.display.size}"`
    p_displaySize.classList.add('txt_1')
    p_displaType.innerHTML = item.specs.display.title
    p_displaType.classList.add('txt_2')
    img_processor.src = `./img/${item.img_2}`
    img_processor.classList.add('img')
    p_processorType.innerHTML = item.specs.chip.title
    p_processorType.classList.add('txt_2')
    p_processorAvailable.innerHTML = item.specs.chip.description
    p_processorAvailable.classList.add('txt_3')
    img_memory.src = `./img/${item.img_3}`
    img_memory.classList.add('img')
    p_memoryType.innerHTML = item.specs.ram.title
    p_memoryType.classList.add('txt_2')
    p_memoryPerformance.innerHTML = item.specs.ram.description
    p_memoryPerformance.classList.add('txt_3')
    p_memory.innerHTML = `${item.specs.memory.size}${item.specs.memory.type.toUpperCase()}`
    p_memory.classList.add('txt_1')
    p_storage.innerHTML = 'Maximum configurable storage'
    p_storage.classList.add('txt_2')
    img_battery.src = './img/battery.png'
    img_battery.classList.add('img')
    p_battery.innerHTML = `Up to ${item.specs.battery} hours battery life`
    p_battery.classList.add('txt_2')
    img_camera.src = './img/video.png'
    img_camera.classList.add('img')
    p_camera.innerHTML = item.specs.camera.title
    p_camera.classList.add('txt_2')
    p_cameraSignal.innerHTML = item.specs.camera.description
    p_cameraSignal.classList.add('txt_3')
    p_weightLb = `${item.specs.weight} lb.`
    // p_weightLb.classList.add('txt_1')
    p_weight.innerHTML = 'Weight'
    p_weight.classList.add('txt_2')
    img_touch.src = `./img/${item.img_4}`
    img_touch.classList.add('img')
    p_touch.innerHTML = item.specs.other
    p_touch.classList.add('txt_2')
    a_link.innerHTML = 'Learn more >'
    a_link.classList.add('txt_4')
    a_link.href = item.url

    container.append(column)
    column.append(img_display, p_model, p_cost, box, btn, p_displaySize, p_displaType, img_processor, p_processorType, 
        p_processorAvailable, img_memory, p_memoryType, p_memoryPerformance, p_memory, p_storage, img_battery, 
        p_battery, img_camera, p_camera, p_cameraSignal, p_weightLb, p_weight, img_touch, p_touch, a_link)
    box.append(circle_1, circle_2, circle_3)

    circle_1.onclick = () => {
        img_display.src = `./img/${item.img}`
    }

    circle_2.onclick = () => {
        img_display.src = `./img/${item.img2}`
    }

    circle_3.onclick = () => {
        img_display.src = `./img/${item.img3}`
    }

}