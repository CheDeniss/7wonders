import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WondersSrvService {
  sevenW = [
    { name: 'Велика китайська стіна',
      description: 'Будівництво Великої китайської стіни розпочалося приблизно у VII столітті до н.е. та тривало століттями.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/20090529_Great_Wall_Simatai_8327.jpg/800px-20090529_Great_Wall_Simatai_8327.jpg' },
    { name: 'Мачу-Пікчу',
      description: 'Мачу-Пікчу - це древнє інкське місто, розташоване на високих Андських горах в Перу.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/80_-_Machu_Picchu_-_Juin_2009_-_edit.jpg/614px-80_-_Machu_Picchu_-_Juin_2009_-_edit.jpg' },
    { name: 'Петра',
      description: 'Петра - археологічний пам\'ятник в Йорданії, викладений рожевим каменем та відомий своїми різноманітними будівлями та фасадами.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Al_Khazneh_Petra_edit_2.jpg/800px-Al_Khazneh_Petra_edit_2.jpg' },
    { name: 'Колізей',
      description: 'Колізей - амфітеатр у Римі, споруджений у I столітті н.е. Розташований на південному сході Римського форуму.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Coliseo%2C_Roma%2C_Italia%2C_2022-09-15%2C_DD_96.jpg/1024px-Coliseo%2C_Roma%2C_Italia%2C_2022-09-15%2C_DD_96.jpg' },
    { name: 'Чичен-Іцца',
      description: 'Чичен-Іцца - давнє місто на південному заході Мексики, відоме своєю пірамідою Кукулькана.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/uk/thumb/d/d5/%D0%9F%D1%96%D1%80%D0%B0%D0%BC%D1%96%D0%B4%D0%B0_%D0%9A%D1%83%D0%BA%D1%83%D0%BB%D1%8C%D0%BA%D0%B0%D0%BD%D0%B0_%D0%B2_%D0%A7%D0%B8%D1%87%D0%B5%D0%BD-%D0%86%D1%86%D0%B0.jpg/1024px-%D0%9F%D1%96%D1%80%D0%B0%D0%BC%D1%96%D0%B4%D0%B0_%D0%9A%D1%83%D0%BA%D1%83%D0%BB%D1%8C%D0%BA%D0%B0%D0%BD%D0%B0_%D0%B2_%D0%A7%D0%B8%D1%87%D0%B5%D0%BD-%D0%86%D1%86%D0%B0.jpg' },
    { name: 'Христос-Спаситель',
      description: ' статуя Ісуса Христа в Ріо-де-Жанейро, Бразилія[2]. Статуя має розмір 39,6 м заввишки (розмах рук 28 метрів), важить 1145 тонн, і знаходиться на вершині 200-метрової гори Корковаду в національному парку ліс Тіжука, в межах міста[2][3][4]. Збудована як символ християнства, статуя стала символом Ріо-де-Жанейро і Бразилії.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cristo_Redentor_-_Rio_de_Janeiro%2C_Brasil.jpg/800px-Cristo_Redentor_-_Rio_de_Janeiro%2C_Brasil.jpg' },
    { name: 'Тадж-Махал',
      description: 'Тадж-Махал - біла мармурова мечеть в Агрі, Індія, споруджена Шахджаханом в пам\'ять про його дружину Мумтаз Махал.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Taj_Mahal%2C_Agra%2C_India.jpg/1024px-Taj_Mahal%2C_Agra%2C_India.jpg' }
  ]

  getWonders(){
    return this.sevenW
  }
}
