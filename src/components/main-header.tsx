"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";

export default function MainHeader() {
  const menuItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
  ];
  return (
    <header className="m-5">
      <NavigationMenu>
        <NavigationMenuList>
          {menuItems.map((menuItem, index) => {
            return (
              <NavigationMenuItem key={index}>
                <Link legacyBehavior href={menuItem.href} passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {menuItem.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
