"use client";

import { useDarkLight } from "@/features/dark-light";
import { Box } from "@yamada-ui/react";
import { ReactNode } from "react";
import { Header } from "../header";

interface Props {
  children: ReactNode;
}

export function MainLayout({ children }: Props) {
  const { state } = useDarkLight();

  return (
    <>
      <Header />
      <Box
        as="main"
        w="100%"
        minWidth="100vw"
        h="100vh"
        bg={state.bg}
        color={state.color}
        position="absolute"
        overflow="auto"
        top={0}
      >
        {children}
      </Box>
    </>
  );
}
