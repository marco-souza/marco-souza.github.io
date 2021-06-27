import { ReactNode } from "react";
import Image from "next/image";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorMode,
} from "@chakra-ui/react";

export default function AvatarMenu() {
  const { toggleColorMode } = useColorMode();

  return (
    <Menu>
      <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"}>
        <Avatar
          size={"sm"}
          src={
            "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
          }
        />
      </MenuButton>
      <MenuList>
        <MenuItem>Link 1</MenuItem>
        <MenuItem>Link 2</MenuItem>
        <MenuDivider />
        <MenuItem onClick={toggleColorMode}>Toggle Theme</MenuItem>
      </MenuList>
    </Menu>
  );
}
