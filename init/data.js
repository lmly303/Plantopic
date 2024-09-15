const samplelisting = [
    {
      name: "Rose",
      description: "A classic flowering plant known for its fragrant and beautiful blooms in a variety of colors.",
      sunlight: "Full Sun",
      waterNeeds: "Medium",
      soilType: "Well-drained, loamy soil",
      bloomTime: "Spring through Fall",
      image:{
        url: "https://images.pexels.com/photos/7450698/pexels-photo-7450698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        filename: "listingimage",
      },
      price: 250
    },
    {
      name: "Spider Plant",
      description: "Known for its air-purifying properties.",
      sunlight: "Shade",
      waterNeeds: "Medium",
      soilType: "Well-drained soil",
      bloomTime: "Spring",
      image:{
        url: "https://images.unsplash.com/photo-1668117653442-dd03862e957f?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "listingimage",
      },
      imageUrl: "",
      price: 370
    },
    {
      name: "Pothos",
      description: "A popular vining plant that grows quickly.",
      sunlight: "Partial Sun",
      waterNeeds: "Medium",
      soilType: "Well-drained soil",
      bloomTime: "Rarely blooms indoors",
      image:{
        url: "https://images.unsplash.com/photo-1623173508476-9883063f904b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "listingimage",
      },
      price: 270
    },
    {
      name: "Monstera",
      description: "A tropical plant known for its split leaves.",
      sunlight: "Partial Sun",
      waterNeeds: "Medium",
      soilType: "Well-drained soil",
      bloomTime: "Does not bloom indoors",
      image:{
        url: "https://images.unsplash.com/photo-1623325943583-d658515e0889?q=80&w=3089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "listingimage",
      },
      price: 220
    },
    {
      name: "Aloe Vera",
      description: "A succulent plant known for its medicinal properties.",
      sunlight: "Full Sun",
      waterNeeds: "Low",
      soilType: "Sandy soil",
      bloomTime: "Summer",
      image:{
        url: "https://images.pexels.com/photos/1549201/pexels-photo-1549201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        filename: "listingimage",
      },
      imageUrl: "",
      price: 120
    },
    {
      name: "Jade Plant",
      description: "A succulent with thick, shiny leaves.",
      sunlight: "Full Sun",
      waterNeeds: "Low",
      soilType: "Well-drained soil",
      bloomTime: "Spring",
      image:{
        url: "https://images.unsplash.com/photo-1548262016-9bf97ff61020?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "listingimage",
      },
      price: 360
    },
    {
      name: "Lavender",
      description: "An aromatic plant with purple flowers.",
      sunlight: "Full Sun",
      waterNeeds: "Medium",
      soilType: "Well-drained soil",
      bloomTime: "Summer",
      image:{
        url: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "listingimage",
      },
      price: 200
    },
    {
      name: "Mint",
      description: "A fast-growing herb with a refreshing scent.",
      sunlight: "Partial Sun",
      waterNeeds: "High",
      soilType: "Moist soil",
      bloomTime: "Spring and Summer",
      image:{
        url: "https://images.pexels.com/photos/1057651/pexels-photo-1057651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        filename: "listingimage",
      },
      price: 300
    },
    {
      name: "Basil",
      description: "A popular herb used in many cuisines.",
      sunlight: "Full Sun",
      waterNeeds: "High",
      soilType: "Moist soil",
      bloomTime: "Summer",
      image:{
        url: "https://images.unsplash.com/photo-1515542647469-5f9a6b25ef5b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "listingimage",
      },
      price: 280
    },
    {
      name: "Cilantro",
      description: "A herb with a fresh, citrus-like flavor.",
      sunlight: "Partial Sun",
      waterNeeds: "Medium",
      soilType: "Moist soil",
      bloomTime: "Summer",
      image:{
        url: "https://images.unsplash.com/photo-1644709438449-3d9b34793988?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "listingimage",
      },
      price: 250
    },
    {
        name: "Bamboo Palm",
        description: "A palm that can thrive indoors with low light.",
        sunlight: "Shade",
        waterNeeds: "Medium",
        soilType: "Well-drained soil",
        bloomTime: "Rarely blooms indoors",
        image:{
          url: "https://images.pexels.com/photos/4913314/pexels-photo-4913314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          filename: "listingimage",
        },
        price: 500
      },
      {
        name: "Calathea",
        description: "A plant with striking, patterned leaves.",
        sunlight: "Shade",
        waterNeeds: "High",
        soilType: "Moist soil",
        bloomTime: "Does not bloom indoors",
        image:{
          url: "https://images.unsplash.com/photo-1606146350176-804f4c84fb30?q=80&w=2826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          filename: "listingimage",
        },
        price: 190
      },
      {
        name: "Cactus",
        description: "A drought-tolerant plant with spines.",
        sunlight: "Full Sun",
        waterNeeds: "Low",
        soilType: "Sandy soil",
        bloomTime: "Spring",
        image:{
          url: "https://images.unsplash.com/photo-1647974208832-e9b7b088d1ad?q=80&w=3064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          filename: "listingimage",
        },
        price: 120
      },
      {
        name: "Bougainvillea",
        description: "A vine with vibrant, papery flowers.",
        sunlight: "Full Sun",
        waterNeeds: "Medium",
        soilType: "Well-drained soil",
        bloomTime: "Summer",
        image:{
          url: "https://images.unsplash.com/photo-1692104257276-0ed0cd500ab8?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          filename: "listingimage",
        },
        price: 400
      },
      {
        name: "Hibiscus",
        description: "A tropical plant with large, colorful flowers.",
        sunlight: "Full Sun",
        waterNeeds: "High",
        soilType: "Well-drained soil",
        bloomTime: "Summer",
        image:{
          url: "https://images.pexels.com/photos/4603166/pexels-photo-4603166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          filename: "listingimage",
        },
        price: 350
      },
      {
        name: "Marigold",
        description: "A bright, easy-to-grow annual flower.",
        sunlight: "Full Sun",
        waterNeeds: "Medium",
        soilType: "Well-drained soil",
        bloomTime: "Summer",
        image:{
          url: "https://images.unsplash.com/photo-1653241899656-e2991fbf6dc5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          filename: "listingimage",
        },
        price: 250
      },
      {
        name: "Petunia",
        description: "A colorful, blooming annual with trumpet-shaped flowers.",
        sunlight: "Full Sun",
        waterNeeds: "Medium",
        soilType: "Well-drained soil",
        bloomTime: "Summer",
        image:{
          url: "https://images.pexels.com/photos/16463061/pexels-photo-16463061/free-photo-of-flowers-in-hanging-pots-in-a-greenhouse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          filename: "listingimage",
        },
        price: 200
      },
      {
        name: "Lantana",
        description: "A hardy plant with clusters of small flowers.",
        sunlight: "Full Sun",
        waterNeeds: "Low",
        soilType: "Well-drained soil",
        bloomTime: "Summer",
        image:{
          url: "https://images.unsplash.com/photo-1695493646658-78011e49422e?q=80&w=2966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          filename: "listingimage",
        },
        price: 110
      },
      {
        name: "Geranium",
        description: "A classic garden plant with clusters of blooms.",
        sunlight: "Full Sun",
        waterNeeds: "Medium",
        soilType: "Well-drained soil",
        bloomTime: "Spring and Summer",
        image:{
          url: "https://images.pexels.com/photos/8905147/pexels-photo-8905147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          filename: "listingimage",
        },
        price: 70
      },
      {
        name: "Begonia",
        description: "A versatile plant with colorful foliage and flowers.",
        sunlight: "Partial Sun",
        waterNeeds: "Medium",
        soilType: "Well-drained soil",
        bloomTime: "Summer",
        image:{
          url: "https://images.unsplash.com/photo-1566252468854-b7282458a31c?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          filename: "listingimage",
        },
        price: 130
      }
  ]

  module.exports = {data : samplelisting};
  
