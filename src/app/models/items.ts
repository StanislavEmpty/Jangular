
export class Product{
    name: string = ""
    category: string = ""
    producer: string = ""
    urlImage: string = ""
    price: number = 0
}

export const Products: Product[] = [
    { name: "Кока-Кола", category: "Безалкогольные напитки", producer: "Coca-Cola Company", urlImage: "https://i1.sndcdn.com/avatars-000035086611-94i3cl-t500x500.jpg", price: 75 },
    { name: "Пиво Жигулевское", category: "Алкогольные напитки", producer: "АО Компания «Балтика»", urlImage: "https://www.vkustibutik.ru/upload/iblock/4e0/4e01760c787444ec0c82a7f6cf0fd3b1.jpg", price: 50 },
    { name: "Фанта", category: "Безалкогольные напитки", producer: "Coca-Cola Company", urlImage: "https://fanta.ua/images/logo-white.svg", price: 60 },
    { name: "Виски Шивас Ред", category: "Алкогольные напитки", producer: "Chivas Brothers", urlImage: "https://www.whisky.com/files/Category_Images/Blended_Scotch_Whisky.jpg", price: 1500 },
    { name: "Молоко", category: "Молочные продукты", producer: "Простоквашино", urlImage: "https://prod.ottdemo.ru/thumb/640x480x85/uploads/2019-04/3d441c08e4d2d2692d2e5bb5e4176ee5.jpg", price: 40 },
    { name: "Сок апельсиновый", category: "Соки", producer: "Добрый", urlImage: "https://dobryi.ua/wp-content/uploads/2019/08/1_73-sok-dobryj.jpg", price: 90 },
    { name: "Ром Бакарди", category: "Алкогольные напитки", producer: "Bacardi Limited", urlImage: "https://www.bacardi.com/ru/ru/wp-content/themes/bacardi/dist/images/products/bacardi_black_rus.png", price: 1200 },
    { name: "Чай", category: "Горячие напитки", producer: "Lipton", urlImage: "https://images-na.ssl-images-amazon.com/images/I/71LsiyzjyGL._AC_SY450_.jpg", price: 30 },
    { name: "Кофе", category: "Горячие напитки", producer: "Nescafe", urlImage: "https://images-na.ssl-images-amazon.com/images/I/71WtXpxbKRL._AC_SL1500_.jpg", price: 70 },
    { name: "Вода минеральная", category: "Безалкогольные напитки", producer: "Эссентуки", urlImage: "https://www.water-trade.com.ua/upload/iblock/ff6/mineralnaya-voda-essentuki-17-0.5.jpg", price: 25 }
]