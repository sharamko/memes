import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@heroui/navbar';
import { Link } from '@heroui/link';
import NextLink from 'next/link';
import { ThemeSwitch } from '@/components/theme-switch';

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">Memes App</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-20">
          <NavbarItem>
            <NextLink href="/cards">Картки</NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink href="/table">Таблиця</NextLink>
          </NavbarItem>
        </ul>
      </NavbarContent>

      <ThemeSwitch />
      <NavbarContent className="lg:hidden basis-1 " justify="end">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem>
            <Link href="cards" size="lg">
              Картки
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="table" size="lg">
              Таблиця
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
