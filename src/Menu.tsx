const menu = {
  style: "classic",
  items: [
    {
      label: "Masters",
      url: "/masters",
      icon: "Dashboard",
      items: [
        {
          label: "Users",
          url: "/masters/users",
          icon: "People",
        },
        {
          label: "Roles",
          url: "/masters/roles",
          icon: "AdminPanelSettings",
        },
        {
          label: "Permissions",
          url: "/masters/permissions",
          icon: "ManageAccounts",
        },
        {
          label: "Configuration",
          url: "/masters/configuration",
          icon: "Settings",
        },
      ],
    },
    {
      label: "Products",
      url: "/products",
      icon: "List",
      items: [],
    },
    {
      label: "Categories",
      url: "/categories",
      icon: "Category",
      items: [],
    },
  ],
};

export default menu;
