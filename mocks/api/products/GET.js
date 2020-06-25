const data = [
  {
    id: '1',
    productName: 'Ditsy Floral Print Skirt',
    color: 'black',
    department: 'Clothes',
    price: 7,
    imageUrl:
      'https://img.ltwebstatic.com/images3_pi/2020/06/08/1591612672524f957d66410069d5db00773b21d791_thumbnail_600x.webp'
  },
  {
    id: '2',
    productName: 'Ditsy Floral Print A-Line Dress',
    color: 'yellow',
    department: 'Clothes',
    price: 16,
    imageUrl:
      'https://img.ltwebstatic.com/images3_pi/2020/03/30/158555692881a80d43dfdbcad69e225f89370e3b1c_thumbnail_600x.webp'
  },
  {
    id: '3',
    productName: 'Spiked Decor Wide Fit Sliders',
    color: 'white',
    department: 'Shoes',
    price: 14,
    imageUrl:
      'https://img.ltwebstatic.com/images3_pi/2020/05/16/1589639679e7f29aad5c7df98ba8cff604de0170d8_thumbnail_600x.webp'
  },
  {
    id: '4',
    productName:
      'TV QLED 189 cm (75") Samsung QE75Q70R 4K with (IA), HDR and Smart TV',
    color: 'black',
    department: 'Electronic',
    price: 1749,
    imageUrl:
      'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201903/14/00114842404296____2__1200x1200.jpg'
  },
  {
    id: '5',
    productName: ' Apple MacBook Pro 13 with Touch Bar, i5, 8GB, 256B SSD',
    color: 'black',
    department: 'Electronic',
    price: 1499,
    imageUrl:
      'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202005/14/00115215417013____3__1200x1200.jpg'
  }
];
module.exports = (request, response) => {
    response.json(data);
};
