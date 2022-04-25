import {
  HStack,
  VStack,
  Flex,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import ThemeToggleButton from "../../ui/theme-toggle-button";
import React from "react";
import LinkItem from "../../ui/link-item";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { changeLabel, selectLabel } from "../../../redux/slices/navbarSlice";
import { ThemeData } from "../../../utils/constants";

const NavItems = [
  {
    label: ".is()",
    href: "/",
  },
  {
    label: ".about()",
    href: "/about",
  },
  {
    label: ".work()",
    href: "/work",
  },
  {
    label: ".blog()",
    href: "/blog",
  },
];

const DesktopNav = ({ path }) => {
  const label = useSelector(selectLabel);
  const dispatch = useDispatch();
  const switchLabel = (text) => {
    dispatch(changeLabel(text));
  };
  return (
    <>
      <Box width="100px">
        <Text
          fontSize="lg"
          fontWeight="bold"
          color={useColorModeValue(ThemeData.light.bg, ThemeData.dark.bg)}
        >
          {label}
        </Text>
      </Box>
      <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }}>
        {NavItems.map((item, i) => (
          <LinkItem
            onClick={() => switchLabel(item.label)}
            key={i}
            href={item.href}
            path={path}
          >
            {item.label}
          </LinkItem>
        ))}
      </HStack>
    </>
  );
};

const MobileNav = ({ path }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef;
  const dispatch = useDispatch();
  const switchLabel = (text) => {
    dispatch(changeLabel(text));
  };
  return (
    <Flex display={{ base: "flex", md: "none" }}>
      <IconButton
        bg=""
        icon={<HamburgerIcon w={6} h={6} />}
        variant="none"
        aria-label="Options"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="xs"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <VStack alignItems="left">
              {NavItems.map((item, i) => (
                <LinkItem
                  key={i}
                  href={item.href}
                  onClick={() => {
                    onClose();
                    switchLabel(item.label);
                  }}
                  path={path}
                >
                  {item.label}
                </LinkItem>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

const NavBar = (props) => {
  return (
    <Flex
      w="100%"
      px={4}
      py={5}
      align="center"
      justify="space-between"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
    >
      <DesktopNav />
      <HStack>
        <ThemeToggleButton />
        <MobileNav />
      </HStack>
    </Flex>
  );
};

export default NavBar;
