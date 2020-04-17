# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  # category0 = Category.create(name:'All Categories')

  category1 = Category.create(name:'T-Shirts')
  5.times do
    Product.create(
      category_id: category1.id,
      title: Faker::Appliance.equipment,
      description: Faker::Movies::HarryPotter.quote,
      price: Faker::Number.decimal(l_digits: 2),
      has_size: true,
      sizes: {Xsmall: 5, Small:5,Medium:5,Large:5,XLarge:5, XXL: 5 },
      # main_image: Faker::Avatar.image(set: "set4"),
      main_image: 'https://s7d2.scene7.com/is/image/aeo/2370_7081_300_f?$PDP-1910L$&fmt=webp',
      featured:'true',
    )
  end

  3.times do
    Image.create(
      url: 'https://s7d2.scene7.com/is/image/aeo/0595_1853_580_f?$PDP-1910L$&fmt=webp',
      product_id: 1,
    )
  end
  
  category2 = Category.create(name:'Hoodies')
  5.times do
    Product.create(
      category_id: category2.id,
      title: Faker::Appliance.equipment,
      description: Faker::Movies::HarryPotter.quote,
      price: Faker::Number.decimal(l_digits: 2),
      has_size: true,
      sizes: {Xsmall: 5, Small:5,Medium:5,Large:5,XLarge:5, XXL: 5 },
      # main_image: Faker::Avatar.image(set: "set4"),
      main_image: 'https://s7d2.scene7.com/is/image/aeo/0595_1853_580_f?$PDP-1910L$&fmt=webp',
      featured:'false',

    )
  end
  category3 = Category.create(name:'Hats')
  5.times do
    Product.create(
      category_id: category3.id,
      title: Faker::Appliance.equipment,
      description: Faker::Movies::HarryPotter.quote,
      price: Faker::Number.decimal(l_digits: 2),
      has_size: true,
      sizes: {Xsmall: 5, Small:5,Medium:5,Large:5,XLarge:5, XXL: 5 },
      # main_image: Faker::Avatar.image(set: "set4"),
      main_image: 'https://s7d2.scene7.com/is/image/aeo/5497_4591_332_f?$PDP-1910L$&fmt=webp',
      featured:'false',

    )
  end
  category4 = Category.create(name:'Misc')
  5.times do
    Product.create(
      category_id: category4.id,
      title: Faker::Appliance.equipment,
      description: Faker::Movies::HarryPotter.quote,
      price: Faker::Number.decimal(l_digits: 2),
      has_size: true,
      sizes: {no_size:3},
      # main_image: Faker::Avatar.image(set: "set4"),
      main_image: 'https://s7d2.scene7.com/is/image/aeo/0506_9514_615_f?$PDP-1910L$&fmt=webp',
      featured:'false',

    )
  end


puts 'Products Seeded'