import { Flex, HStack } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { FC, ReactElement } from "react";

import logo from "../../app/logo.svg";

const Navigation: FC = (): ReactElement => {
  return (
    <Flex as="nav" alignItems="center" justifyContent="space-between" mb="1rem">
      <Image src={logo} alt="SnapStay Logo" width={100} height={100} />
      <HStack gap="2rem">
        <Link href="/about">About </Link>
        <Link href="/cabins">Cabins </Link>
        <Link href="/account">Account </Link>
      </HStack>
    </Flex>
  );
};

export default Navigation;
