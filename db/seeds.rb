# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do
  Product.create(
    title: Faker::Appliance.equipment,
    description: Faker::Movies::HarryPotter.quote,
    price: Faker::Number.decimal(l_digits: 2),
    has_size: true,
    sizes: { small: 1, medium: 1, large: 1 },
    category: 'T-Shirts'
  )
end
5.times do
  Product.create(
    title: Faker::Appliance.equipment,
    description: Faker::Movies::HarryPotter.quote,
    price: Faker::Number.decimal(l_digits: 2),
    has_size: true,
    sizes: { small: 1, medium: 1, large: 1 },
    category: 'Hoodies'
  )
end
5.times do
  Product.create(
    title: Faker::Appliance.equipment,
    description: Faker::Movies::HarryPotter.quote,
    price: Faker::Number.decimal(l_digits: 2),
    has_size: true,
    sizes: { small: 1, medium: 1, large: 1 },
    category: 'Hats'
  )
end
5.times do
  Product.create(
    title: Faker::Appliance.equipment,
    description: Faker::Movies::HarryPotter.quote,
    price: Faker::Number.decimal(l_digits: 2),
    has_size: true,
    sizes: { small: 1, medium: 1, large: 1 },
    category: 'Stickers'
  )
end

puts 'Products Seeded'
