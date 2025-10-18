export const siteConfig = {
  // Navbar Data 
  navItems: [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Tours and Packages",
      link: "",
      children: [
        {
          label: "Adventure Party Boat",
          link: '/tours/adventure-party-boat',
          iconImage: "", // Provide the correct path to the image
        },
        {
          label: "Scuba Combo",
          link: '/tours/scuba-combo',
        },
        {
          label: "Couple Scuba Combo",
          link: "/tours/couple-scuba-combo",
        },
        {
          label: "Scuba Combo Paradise Island",
          link: "/tours/scuba-combo-paradise",
        },
        {
          label: "Scuba Combo Malwan",
          link: "/tours/scuba-combo-malwan",
          iconImage: "", // Provide the correct path to the image
        },
        {
          label: "Water Sports",
          link: "/tours/water-sports",
        },
        {
          label: "Bunjee Jump",
          link: "/tours/bunjee-jump",
        },
        {
          label: "Dinner Cruise",
          link: "/tours/dinner-cruise",
        },
        {
          label: "Dudhsagar Waterfalls",
          link: "/tours/dudhsagar-waterfall",
          iconImage: "",
        },
        {
          label: "North Goa Tours",
          link: "/tours/north-goa-tour",
        },
        {
          label: "South Goa Tours",
          link: "/tours/south-goa-tour",
        },
        {
          label: "Flyboarding",
          link: "/tours/flyboarding",
        },
        {
          label: "Island Trip Goa",
          link: "/tours/island-trip",
        },
      ],
    },
    {
      label: "Couple Packages",
      link: "",
      children: [
        {
          label: "Couple Package - 1",
          link: "/couplepackage/couple-package-1",
        },
        {
          label: "Couple Package - 2",
          link: "/couplepackage/couple-package-2",
        },
        {
          label: "Couple Package - 3",
          link: "/couplepackage/couple-package-3",
        },
      ],
    },
    {
      label: "Group Packages",
      link: "",
      children: [
        {
          label: "Group Package - 1",
          link: "/grouppackages/group-package-1",
        },
        {
          label: "Group Package - 2",
          link: "/grouppackages/group-package-2",
        },
        {
          label: "Group Package - 3",
          link: "/grouppackages/group-package-3",
        },
      ],
    },
    {
      label: "Scuba Diving At Grand Island",
      link: "",
      children: [
        {
          label: "Scuba Diving Package - 1",
          link: "/scubadivingpackages/scubadiving-package-1",
        },
      ],
    },
  ],



  // footerData

  tours: [
    { name: 'Scuba Combo', link: '/tours/scuba-combo' },
    { name: 'Couple Scuba Combo', link: '/tours/couple-scuba-combo' },
    { name: 'Scuba Combo Paradise Island', link: '/tours/scuba-combo-paradise' },
    { name: 'Scuba Combo Malwan', link: '/tours/scuba-combo-malvan' },
    { name: 'Water Sports', link: '/tours/water-sports' },
    { name: 'Adventure Party Boat', link: '/tours/adventure-party-boat' },
    { name: 'Dinner Cruise', link: '/tours/dinner-cruise' },
    { name: 'Dudhsagar Waterfalls', link: '/tours/dudhsagar-waterfall' },
    { name: 'North Goa Tours', link: '/tours/north-goa-tour' },
    { name: 'South Goa Tours', link: '/tours/south-goa-tour' },
    { name: 'Flyboarding', link: '/tours/flyboarding' },
    { name: "Island Trip Goa", link: "/tours/island-trip" },
  ],

  tour: [
    { name: 'Scuba Combo', link: '/tours/scuba-combo' },
    { name: 'Couple Scuba Water Sports', link: '/tours/couple-scuba-combo' },
    { name: 'Scuba Combo Paradise Island', link: '/tours/scuba-combo-paradise' },
    { name: 'Scuba Combo Malwan', link: '/tours/scuba-combo-malwan' },
    { name: 'Water sports 5 Ride’s', link: '/tours/water-sports' },
    { name: 'Adventure Party Boat', link: '/tours/adventure-party-boat' },
    { name: 'Dinner Cruise', link: '/tours/dinner-cruise' },
    { name: 'Bungee Jump', link: '/tours/bunjee-jump' },
    { name: 'Dudhsagar Waterfalls', link: '/tours/dudhsagar-waterfall' },
    { name: 'North Goa Tour', link: '/tours/north-goa-tour' },
    { name: 'South Goa Tour', link: '/tours/south-goa-tour' },
    { name: 'Flyboarding', link: '/tours/flyboarding' },
    { name: "Island Trip Goa", link: "/tours/island-trip" },
    { name: 'Couple Package - 1', link: '/couplepackage/couple-package-1' },
    { name: 'Couple Package - 2', link: '/couplepackage/couple-package-2' },
    { name: 'Couple Package - 3', link: '/couplepackage/couple-package-3' },
    { name: 'Group Package - 1', link: '/grouppackages/group-package-1' },
    { name: 'Group Package - 2', link: '/grouppackages/group-package-2' },
    { name: 'Group Package - 3', link: '/grouppackages/group-package-3' },
    { name: 'Scuba Diving Package - 1', link: '/scubadivingpackages/scubadiving-package-1' },
  ],

  couplePackages: [
    { name: 'Couple Package - 1', link: '/couplepackage/couple-package-1' },
    { name: 'Couple Package - 2', link: '/couplepackage/couple-package-2' },
    { name: 'Couple Package - 3', link: '/couplepackage/couple-package-3' },
  ],

  groupPackages: [
    { name: 'Group Package - 1', link: '/grouppackages/group-package-1' },
    { name: 'Group Package - 2', link: '/grouppackages/group-package-2' },
    { name: 'Group Package - 3', link: '/grouppackages/group-package-3' },
  ],

    scubadivingPackages: [
    { name: 'Scuba Diving Package - 1', link: '/scubadivingpackages/scubadiving-package-1' },
  ],

  quickLinks: [
    { name: 'Packages', link: '/packages' },
    { name: 'Contact', link: '/contact' },
    { name: 'Book Now', link: '/contact' },
  ],

  socialLinks: [
    { href: "https://www.instagram.com/renukatripsgoa/", icon: "Instagram" },
  ],
}
