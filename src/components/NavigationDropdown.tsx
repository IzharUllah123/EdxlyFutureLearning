import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface DropdownItem {
  title: string;
  href: string;
  description: string;
}

interface NavigationDropdownProps {
  title: string;
  items: DropdownItem[];
}

const NavigationDropdown = ({ title, items }: NavigationDropdownProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>

          {/* ✅ FIXED NAV TRIGGER (SAME AS OTHER NAV ITEMS) */}
          <NavigationMenuTrigger
            className="
              nav-link
              text-base
              font-medium
              text-foreground/80
              hover:text-foreground
              bg-transparent
              hover:bg-transparent
              data-[active]:bg-transparent
              data-[state=open]:bg-transparent
              transition-all
              duration-300
              flex
              items-center
              h-9
            "
          >
            {title}
          </NavigationMenuTrigger>

          {/* DROPDOWN CONTENT */}
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-popover border border-border rounded-lg shadow-lg">
              {items.map((item) => (
                <NavigationMenuLink key={item.href} asChild>
                  <Link
                    to={item.href}
                    className="
                      block
                      select-none
                      space-y-1
                      rounded-md
                      p-3
                      leading-none
                      no-underline
                      outline-none
                      transition-colors
                      hover:bg-accent
                      hover:text-accent-foreground
                      focus:bg-accent
                      focus:text-accent-foreground
                    "
                  >
                    <div className="text-sm font-medium leading-none">
                      {item.title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>

        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationDropdown;
